# Tasks

## 1. Reference and Photo Assets

- [x] 1.1 Capture the existing About collage at desktop and mobile widths, including 768px and 769px; verify the references record photo crops, frame proportions, rotations, overlap, and placement within the About layout.
- [x] 1.2 Extract the desktop/mobile PNG photos, caption outlines, and original card backing into local assets; verify the four PNG files, exported SVG IDs and references, and unchanged original inset filters, and retain both composite SVG reference files.

## 2. HTML Polaroid Rendering

- [x] 2.1 Replace the image-switching class component in `src/pages/Home/About/Photos.jsx` with two independently targetable HTML figures containing responsive images, decorative artwork, accessible caption text, concise alt text, and disabled image dragging; verify the rendered structure and focused lint with `node node_modules/eslint/bin/eslint.js src/pages/Home/About/Photos.jsx`.
- [x] 2.2 Render the original desktop/mobile card backing inside each figure and preserve the constrained collage, photo windows, offsets, rotations, and stacking order; verify the original backing filters and exported artwork references, caption fit, and reserved layout space without added CSS inset shadows or photo-window rings.
- [x] 2.3 Use the existing theme breakpoint for the mobile composition and `picture` source selection, removing obsolete SVG-source state and resize handling; verify responsive source selection, centering, and layout sizing across the 768px breakpoint.
- [x] 2.4 Render the original caption outlines with visually hidden HTML labels and remove the added caption font; verify "SpaceX HQ" and "Googleplex" remain accessible, decorative SVGs are hidden and nonfocusable, and existing page font loading is unchanged.

## 3. Integration Verification

- [x] 3.1 Run `npm run build` and focused lint on the latest JSX; verify the production bundle resolves all four photo assets and both SVG artwork assets, and report unrelated warnings without expanding scope.
- [x] 3.2 Review the latest implementation at 1440px, 769px, 768px, 390px, and 320px in light/dark modes, plus aligned 1920x1200 lossless screenshots at 3x pixel density; verify crops, captions, overlap, stacking, footprint, and overflow, and explicitly review the missing mobile SpaceX backing, omitted photo-window strokes, and residual shadow rasterization before claiming visual completion.
- [x] 3.3 Rerun hover, scroll, click, and drag checks on the latest original-backing implementation; verify both complete HTML Polaroids remain independently targetable, decorative artwork does not interfere with input or focus, and no movement or new action is introduced.

## Verification Record

Final layout/artwork checks passed at 1920px, 1440px, 769px, 768px, 390px, and 320px in light and dark modes, including resizing back across the breakpoint. Desktop PNG captures used a 1920x1200 viewport at 3x pixel density. Hover, click, drag, scroll, and decorative-focus checks passed at 1440px and 390px in both color schemes. The latest build and focused lint passed during reconciliation.

The user accepted the current appearance, including the recorded mobile backing, photo-window stroke, and rasterization differences. Completion records that acceptance and the final checks; it does not claim pixel-identical rendering. No implementation code changed during final verification.