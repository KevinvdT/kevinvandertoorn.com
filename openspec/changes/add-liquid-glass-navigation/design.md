# Design

## Context

See proposal.md for motivation and specs/navigation-glass/spec.md for the behavior contract.

`Menu.jsx` owns the fixed pill, scroll-dependent spacing, mobile visibility, translated links, and active-section updates. `Home/index.jsx` places it inside the constrained `PageContainer`, with Contact outside that container. The body supplies the light/dark background. Existing imagery includes transforms and parallax; the menu is not above a purely static document.

The requested library requires glass elements to be direct children of its capture root. It captures the root's children, not the root background or outside siblings. Its public API includes asynchronous `LiquidGlass.init()`, `destroy()`, and `markChanged()`. The inspected source has an early dirty-render guard and changes root text-selection styles. These observations must be checked against the installed package during implementation; upstream main is not a pinned release.

## Goals / Non-Goals

**Goals:** Keep rendering isolated from navigation state, preserve existing layout, and enable the effect only when its captured output is reliable.

**Non-Goals:** A reusable site-wide glass framework, library fork, replacement navigation system, draggable menu, new analytics, or redesigned typography and spacing.

## Decisions

### One shared capture root

Add a neutral full-width wrapper in Home with these direct children:

```text
Capture root
+-- Theme background layer
+-- Menu
+-- Existing PageContainer
|   +-- Hero, About, Work, Skills, and dividers
+-- Contact
```

Keep the existing PageContainer padding and maximum width. Preserve the language switcher's position and overlay behavior. Do not add transforms, clipping, or containment that changes fixed positioning or modal stacking. The background layer is decorative, non-interactive, and painted before content using the existing theme colors.

An instance on the current menu parent would omit Contact. Multiple instances cannot share captured content. Moving Contact into the constrained container would change its layout, so neither alternative is selected.

### One decorative effect with an explicit fallback

Install `@ybouane/liquidglass` using npm and retain the resolved version in the lockfile. Use one instance and one glass target, with native links above its non-interactive canvas. Keep `floating` and `button` disabled. Pass root and target refs rather than querying generated styled-components class names.

The proposed visual default is restrained edge refraction, low color fringing, and a radius matching the existing pill; exact shader values are tuning details, not confirmed user preferences. Preserve the current CSS until initialization and a usable render succeed. In glass mode, remove the fallback fill, blur, outline, and shadow where they would obscure or double the shader effect. Restore them on failure or context loss; allow recovery only after a valid render.

### Separate redraws from capture refreshes

Coalesce passive scroll notifications into at most one `markChanged()` call per animation frame while the menu is visible. This requests a redraw at the new page coordinates; it does not by itself guarantee that a cached HTML snapshot was refreshed.

For infrequent changes such as language, color scheme, or completed image loading, serialize a fresh initialization when the library cannot refresh the corresponding static capture through its documented API. Batch related changes and keep fallback navigation available throughout. Observe only relevant content, excluding injected canvases and library-owned style mutations to prevent feedback loops.

For continuously changing content, use the library's documented dynamic capture only for the contributing direct-child wrapper while it overlaps the visible menu. Do not permanently mark the entire page dynamic. Since PageContainer is a large wrapper, its temporary dynamic capture is a specific performance risk: measure it on the real page, and use the fallback during affected states if accurate updates cannot stay responsive. Do not silently freeze the capture or introduce a fork to pass this gate.

### Lifecycle belongs to a single owner

Keep initialization, listeners, refresh scheduling, and teardown together in a small integration owned by Home, with Menu exposing its target and visual readiness state. Leave menu click handlers and Redux navigation logic intact.

Guard asynchronous initialization with a generation or cancellation token. Destroy stale instances that resolve after unmount or replacement, and ensure only one initialization is active at a time. Clean up frames, observers, media-query listeners, and graphics resources. Preserve and restore root selection styles, including the library's `user-select: none` side effect, without disabling page text selection. React 18 development remounts must not leave duplicate instances.

## Risks / Trade-offs

- Large HTML captures and high device-pixel ratios -> Compare scrolling with fallback on the same desktop and mobile viewport. Check long frames, initialization time, and capture dimensions; do not ship an always-dynamic full-page capture.
- Cached transforms, clipped images, fonts, or dark backgrounds may differ from the visible DOM -> Verify overlapping text and images, font readiness, image completion, and both themes. Use fallback for states that cannot be captured reliably.
- Library errors may be logged internally instead of rejecting initialization -> Check the installed package's render/context-loss behavior explicitly and wire fallback to verified signals; do not invent success or error callbacks.
- A new wrapper can affect fixed overlays and document layout -> Compare section bounds and modal stacking before and after integration, including Contact and the language switcher.
- Capturing the page adds more lifecycle work than CSS blur -> Keep all coordination local and leave navigation independent of effect readiness.

## Migration Plan

No data migration is needed. Implement the shared root with the CSS fallback intact, then enable the library and refresh handling. Verify the specification scenarios before considering the change complete.

Run existing Node navigation tests, focused lint on touched source files, and the Vite build. Check desktop/mobile and light/dark screenshots, scrolling capture alignment, language changes, direct section URLs, project open/close and Back behavior, keyboard interaction, selection, unavailable WebGL, and remount cleanup. Record performance observations with and without the effect; browser support remains unverified until exercised.

If the library cannot meet capture or responsiveness requirements through its documented API, leave fallback active and report the failing case before expanding scope. Rollback removes the integration and dependency and restores the original menu placement without changing navigation state or URLs.