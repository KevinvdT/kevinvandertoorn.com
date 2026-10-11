import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const debugMarkers = new Set();
let debugMarkersVisible = false;
let debugListenerCount = 0;

const toggleDebugMarkers = (event) => {
  if (event.key.toLowerCase() !== 'd' || event.repeat || event.metaKey || event.ctrlKey || event.altKey) return;

  const activeElement = document.activeElement;
  if (activeElement?.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(activeElement?.tagName)) return;
  if (!debugMarkers.size) return;

  debugMarkersVisible = !debugMarkersVisible;
  debugMarkers.forEach((marker) => {
    marker.style.visibility = debugMarkersVisible ? 'visible' : 'hidden';
  });
};

const useScrollReveal = () => {
  const scopeRef = useRef(null);

  useEffect(() => {
    if (debugListenerCount++ === 0) window.addEventListener('keydown', toggleDebugMarkers);
    return () => {
      if (--debugListenerCount === 0) window.removeEventListener('keydown', toggleDebugMarkers);
    };
  }, []);

  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const targets = scope.querySelectorAll('[data-scroll-reveal-item]');
    if (!targets.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const animations = [];
    const pendingTargets = new Set();
    let scopeMarkers = [];
    let batchTimer;
    let triggers = [];

    const animatePendingTargets = () => {
      batchTimer = undefined;
      const batch = Array.from(pendingTargets);
      pendingTargets.clear();
      if (!batch.length) return;

      animations.push(gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: { each: 0.2, grid: 'auto' },
      }));
    };

    const context = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: 30 });
      triggers = Array.from(targets, (target) => ScrollTrigger.create({
        trigger: target,
        start: 'top 80%',
        once: true,
        markers: true,
        onEnter: () => {
          pendingTargets.add(target);
          if (batchTimer === undefined) {
            batchTimer = window.setTimeout(animatePendingTargets, 16);
          }
        },
      }));
      const triggerMarkers = triggers.flatMap((trigger) => [
        trigger.markerStart,
        trigger.markerEnd,
      ].filter(Boolean));
      const scrollerMarkers = document.querySelectorAll('.gsap-marker-scroller-start, .gsap-marker-scroller-end');
      scopeMarkers = [...new Set([...triggerMarkers, ...scrollerMarkers])];
      scopeMarkers.forEach((marker) => {
        debugMarkers.add(marker);
        marker.style.visibility = 'hidden';
      });
    }, scope);

    return () => {
      if (batchTimer !== undefined) window.clearTimeout(batchTimer);
      triggers.forEach((trigger) => trigger.kill());
      scopeMarkers.forEach((marker) => debugMarkers.delete(marker));
      pendingTargets.clear();
      animations.forEach((animation) => animation.kill());
      context.revert();
    };
  }, []);

  return scopeRef;
};

export default useScrollReveal;