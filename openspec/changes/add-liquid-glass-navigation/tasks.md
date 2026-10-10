# Tasks

## 1. Dependency and Capture Boundary

- [ ] 1.1 Install `@ybouane/liquidglass` with npm and inspect the resolved package's initialization, dirty-render guard, static-cache refresh, and context-loss behavior; verify its exports and document any differences from the inspected upstream source in design.md before relying on them.
- [ ] 1.2 Add the shared root and decorative theme background in Home, making Menu a direct child while retaining PageContainer and Contact layout; verify section bounds, menu positions, language-switcher placement, and modal stacking match the pre-change page on desktop and mobile with fallback styling still active.

## 2. Glass Rendering and Lifecycle

- [ ] 2.1 Connect root and menu refs to one lifecycle owner and initialize one glass surface with dragging and whole-menu button mode disabled; verify refracted text or imagery is visible behind crisp links and no duplicate canvas appears.
- [ ] 2.2 Switch between existing frosted styling and shader styling only when rendering is usable; verify loading, initialization failure, unavailable WebGL, context loss, and recovery leave navigation readable and operable.
- [ ] 2.3 Serialize initialization and clean up stale asynchronous results, listeners, observers, frames, and graphics resources while preserving text selection; verify development remounts and repeated refreshes leave one instance and selectable page text.
- [ ] 2.4 Match the pill radius and restrained visual defaults without altering responsive spacing or visibility; verify desktop top positioning, mobile bottom positioning, the hidden mobile state, active labels, keyboard focus, and touch interaction in both color schemes.

## 3. Capture Freshness

- [ ] 3.1 Coalesce scroll-driven redraw requests and integrate resize handling; verify text and photos remain aligned under the menu from Home through Contact, with no more than one application redraw request per animation frame.
- [ ] 3.2 Refresh cached content after language changes, color-scheme changes, and relevant image loads using the verified public API or serialized reinitialization; verify current translations, imagery, and background colors appear without a page reload or refresh loop.
- [ ] 3.3 Handle overlapping animated or parallax content with bounded dynamic capture, using fallback when reliable rendering is unavailable; compare capture accuracy and scroll responsiveness against CSS fallback on desktop and mobile, and record capture sizes, startup timing, and observed long frames in design.md. Do not mark this complete with stale output or an always-dynamic full-page capture.

## 4. Integration Verification

- [ ] 4.1 Run `node --test src/utils/projectSlug.test.js src/utils/sectionUrlResolver.test.js`, focused ESLint on touched source files, and `npm run build`; verify they pass or identify unrelated existing failures without expanding scope.
- [ ] 4.2 Exercise all navigation-glass scenarios in desktop and mobile viewports, capture light/dark screenshots and canvas-pixel checks, and verify localized direct section URLs, project open/close, and Back behavior remain unchanged; record results and any browser/device coverage limitations in design.md.