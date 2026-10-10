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

## Implementation Notes

- Installed `@ybouane/liquidglass` 1.0.3. Its bundled module imports successfully and exports `LiquidGlass`, `DEFAULTS`, and `invalidateFontEmbedCache`; `init`, `destroy`, and `markChanged` are present.
- The package's postinstall invokes `patch-package`, which it lists only as a development dependency. The user approved adding `patch-package` to this project's dev dependencies after the initial install failed. The retry succeeded without changing install-script policy; npm still reports uncovered install scripts and 25 audit findings.
- The installed renderer matches the inspected dirty-render guard, has no scroll listener, and only invalidates static snapshots on size changes or explicit capture-cache invalidation. Public `markChanged()` requests a shader redraw, not a new static snapshot.
- The renderer has native WebGL context-loss/restoration listeners, but no documented application success/error callbacks. Initialization changes root selection styles and cleanup removes them, so the integration must preserve selection itself.

### Verified Integration Behavior

- Section bounds matched the original page at 1081 x 623 and 390 x 844. Menu positioning, responsive visibility, and project-modal stacking were preserved.
- The library sorts positioned capture children after static children even when a background has negative z-index. Giving the content wrappers relative positioning with automatic z-index corrected its capture order without creating browser stacking contexts.
- A single rendered canvas contained more than 29,000 colored pixels over About imagery. Native foreground links remained above the decorative output.
- Unavailable WebGL preserved usable fallback links. Simulated context loss switched to fallback; restoration returned to glass after bounded readiness retries.
- An isolated React StrictMode fixture passed three lifecycle cycles, including an interrupted initialization: one canvas maximum, none after teardown, and text selection preserved.
- A burst of 100 scroll events resulted in one application redraw request. Canvas hashes changed across multiple scroll positions, and the mobile capture included Contact.
- Light/dark changes, language switching, and batched image loads replaced the capture without duplicate canvases. An overlapping text mutation and a native animation exercised fallback followed by a fresh ready canvas.
- Existing navigation tests: 10 passed. Production build passed, with the large-chunk warning. The new hook passes ESLint; comparison with committed source found no new lint findings in Menu or Home. Menu retains six existing lint errors and the existing warnings were not changed.

### Pending Performance and Browser Checks

Task 3.3 remains incomplete. A bounded dynamic-capture experiment was restored afterward; no wrapper is permanently marked dynamic. Forcing three desktop content captures measured 1007-1026 ms wall time and 66-68 ms main-thread long tasks. Startup in that run was 3076 ms, with a 1066 x 3889 pixel capture at DPR 1.

These wall and frame timings are not valid foreground performance results: the integrated browser reported hidden visibility, and even the baseline sampled at about one frame per second. The visible-tab retry was also throttled. Do not interpret those readings as the library's normal frame rate. Foreground desktop and mobile responsiveness comparisons are still required.

The current integration uses the planned frosted fallback over moving or changed content and refreshes once it settles. This avoids showing stale imagery or continuously capturing the entire content wrapper. Verification covered overlapping DOM changes and a native animation; the full animation, image-fidelity, and performance matrix remains open.

Task 4.2 also remains incomplete. Full final screenshot, real touch, project-history regression, and browser/device coverage checks must be completed before declaring the change finished. The current development preview is http://localhost:5175/; the original server on 5174 had stale React dependency optimization after installation, so a fresh server was started with forced optimization.