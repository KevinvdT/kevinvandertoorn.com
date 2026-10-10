import { useEffect, useReducer, useRef } from 'react';
import { LiquidGlass } from '@ybouane/liquidglass';

export default function useNavigationGlass(rootRef, language) {
  const initialization = useRef(Promise.resolve());
  const [revision, refresh] = useReducer(value => value + 1, 0);

  useEffect(() => {
    const root = rootRef.current;
    const menu = root?.querySelector(':scope > nav');
    if (!menu) return;

    let cancelled = false;
    let instance;
    let frame;
    let contextCanvas;
    let redrawFrame = 0;
    let refreshTimer;
    let refreshPending = false;
    const changedElements = new Set();
    const movingElements = new Map();
    const trackedAnimations = new WeakSet();
    let backgroundMoving = false;
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const transitions = new Set();
    const selection = root.style.userSelect;
    const webkitSelection = root.style.webkitUserSelect;
    const restoreSelection = () => {
      root.style.userSelect = selection;
      root.style.webkitUserSelect = webkitSelection;
    };
    const showFallback = () => {
      if (!cancelled) menu.dataset.glassState = 'fallback';
    };
    const verifyRender = (retries = 2) => {
      if (cancelled || !instance || refreshPending) return;
      try {
        const canvas = menu.querySelector(':scope > canvas');
        const graphics = contextCanvas.getContext('webgl');
        if (!canvas?.width || !canvas.height || !graphics ||
            graphics.isContextLost() || graphics.getError() !== graphics.NO_ERROR) {
          showFallback();
          if (graphics && !graphics.isContextLost() && retries > 0) {
            instance.markChanged();
            frame = requestAnimationFrame(() => verifyRender(retries - 1));
          }
          return;
        }
        const pixel = canvas.getContext('2d').getImageData(
          Math.floor(canvas.width / 2), Math.floor(canvas.height / 2), 1, 1,
        ).data;
        menu.dataset.glassState = pixel[3] ? 'ready' : 'fallback';
      } catch {
        showFallback();
      }
    };
    const recoverContext = () => {
      instance?.markChanged();
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => verifyRender());
    };
    const scheduleRedraw = () => {
      if (cancelled || !instance || redrawFrame) return;
      redrawFrame = requestAnimationFrame(() => {
        redrawFrame = 0;
        if (getComputedStyle(menu).opacity === '0') return;
        const animations = root.getAnimations({ subtree: true }).filter(animation => {
          const element = animation.effect?.target;
          return animation.playState === 'running' && element instanceof HTMLElement &&
            !menu.contains(element) && overlapsMenu(element);
        });
        if (animations.length) {
          backgroundMoving = true;
          refreshPending = true;
          showFallback();
          for (const animation of animations) {
            if (trackedAnimations.has(animation)) continue;
            trackedAnimations.add(animation);
            animation.finished.then(scheduleRedraw, scheduleRedraw);
          }
          return;
        }
        if (backgroundMoving) {
          backgroundMoving = false;
          scheduleRefresh();
          return;
        }
        if ([...changedElements].some(overlapsMenu)) {
          scheduleRefresh();
          return;
        }
        instance.markChanged();
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => verifyRender());
        if (transitions.size) scheduleRedraw();
      });
    };
    const handleTransition = (event) => {
      if (event.target !== menu) {
        const element = event.target;
        if (!(element instanceof HTMLElement) || menu.contains(element)) return;
        if (event.type === 'transitionrun' && overlapsMenu(element)) {
          const properties = movingElements.get(element) || new Set();
          properties.add(event.propertyName);
          movingElements.set(element, properties);
          changedElements.add(element);
          scheduleRefresh();
        } else if (movingElements.has(element)) {
          const properties = movingElements.get(element);
          properties.delete(event.propertyName);
          if (!properties.size) movingElements.delete(element);
          scheduleRefresh();
        }
        return;
      }
      if (event.type === 'transitionrun') transitions.add(event.propertyName);
      else transitions.delete(event.propertyName);
      scheduleRedraw();
    };
    const scheduleRefresh = () => {
      if (cancelled) return;
      clearTimeout(refreshTimer);
      refreshPending = true;
      showFallback();
      for (const element of movingElements.keys()) {
        if (!element.isConnected || !overlapsMenu(element)) movingElements.delete(element);
      }
      if (!movingElements.size) refreshTimer = setTimeout(refresh, 150);
    };
    const overlapsMenu = (element) => {
      if (!element.isConnected) return false;
      const bounds = element.getBoundingClientRect();
      const target = menu.getBoundingClientRect();
      return bounds.left < target.right + 20 && bounds.right > target.left - 20 &&
        bounds.top < target.bottom + 20 && bounds.bottom > target.top - 20;
    };
    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        const element = mutation.target instanceof HTMLElement
          ? mutation.target : mutation.target.parentElement;
        if (!element || element === root || menu.contains(element)) continue;
        changedElements.add(element);
        if (overlapsMenu(element)) scheduleRefresh();
      }
    });
    const handleImageLoad = (event) => {
      if (event.target instanceof HTMLImageElement) scheduleRefresh();
    };

    colorScheme.addEventListener('change', scheduleRefresh);
    root.addEventListener('load', handleImageLoad, true);
    observer.observe(root, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['class', 'style', 'src', 'srcset'],
    });

    menu.dataset.glassState = 'loading';
    menu.dataset.config = JSON.stringify({
      cornerRadius: 30,
      zRadius: 12,
      blurAmount: 0.35,
      refraction: 0.35,
      chromAberration: 0.01,
      edgeHighlight: 0.08,
      specular: 0.05,
      shadowOpacity: 0.1,
      floating: false,
      button: false,
    });

    initialization.current = initialization.current.catch(() => {}).then(async () => {
      if (cancelled) return;
      await document.fonts.ready;
      if (cancelled) return;
      try {
        const pending = LiquidGlass.init({ root, glassElements: [menu] });
        restoreSelection();
        instance = await pending;
        if (cancelled) {
          instance.destroy();
          restoreSelection();
          return;
        }
        contextCanvas = instance.renderer.canvas;
        contextCanvas.addEventListener('webglcontextlost', showFallback);
        contextCanvas.addEventListener('webglcontextrestored', recoverContext);
        menu.querySelector(':scope > canvas')?.setAttribute('aria-hidden', 'true');
        window.addEventListener('scroll', scheduleRedraw, { passive: true });
        window.addEventListener('resize', scheduleRedraw);
        root.addEventListener('transitionrun', handleTransition);
        root.addEventListener('transitionend', handleTransition);
        root.addEventListener('transitioncancel', handleTransition);
        frame = requestAnimationFrame(() => verifyRender());
      } catch (error) {
        restoreSelection();
        if (!cancelled) menu.dataset.glassState = 'fallback';
        console.warn('Navigation glass unavailable:', error);
      }
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(redrawFrame);
      clearTimeout(refreshTimer);
      observer.disconnect();
      colorScheme.removeEventListener('change', scheduleRefresh);
      root.removeEventListener('load', handleImageLoad, true);
      window.removeEventListener('scroll', scheduleRedraw);
      window.removeEventListener('resize', scheduleRedraw);
      root.removeEventListener('transitionrun', handleTransition);
      root.removeEventListener('transitionend', handleTransition);
      root.removeEventListener('transitioncancel', handleTransition);
      contextCanvas?.removeEventListener('webglcontextlost', showFallback);
      contextCanvas?.removeEventListener('webglcontextrestored', recoverContext);
      instance?.destroy();
      restoreSelection();
      delete menu.dataset.glassState;
      delete menu.dataset.config;
    };
  }, [rootRef, language, revision]);
}