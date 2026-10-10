# Proposal

## Why

The floating navigation currently uses transparency and backdrop blur. Apply the requested LiquidGlass library to add refracting edges and lighting while keeping the menu readable and its navigation behavior intact.

## What Changes

- Render the navigation pill as one liquid-glass surface using `@ybouane/liquidglass`, without enabling dragging or turning the whole menu into a button.
- Give the menu and all page sections, including Contact, a shared capture root without changing existing content widths or section spacing.
- Provide the correct background in both color schemes and keep captured content aligned and current during scrolling, resizing, language changes, and relevant visual updates.
- Preserve the current frosted appearance while loading and when the effect cannot render reliably.
- Preserve desktop and mobile positioning, mobile visibility rules, native links, active-section styling, localized labels, and existing URL/history behavior.

## Capabilities

### New Capabilities

- `navigation-glass`: The menu's refractive appearance, background coverage, visual freshness, and usable fallback.

### Modified Capabilities

None. Existing section-navigation and project-navigation requirements remain unchanged.

## Impact

- `src/pages/Home/index.jsx`: shared capture boundary and menu placement.
- `src/components/ui/Menu.jsx`: glass target, styling, and lifecycle integration; a small local helper may own lifecycle details if needed.
- Theme-aware capture background using existing theme colors, without a site-wide redesign.
- `package.json` and the npm lockfile: add the library during implementation, not planning.
- Browser verification for desktop/mobile, light/dark mode, capture accuracy, keyboard interaction, and fallback behavior. Reuse existing navigation checks; no new test framework is proposed.
- No changes to translation copy, analytics, project content, or other glass surfaces.