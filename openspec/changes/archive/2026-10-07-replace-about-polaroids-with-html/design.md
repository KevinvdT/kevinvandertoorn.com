# Design

## Context

See `proposal.md` for motivation and `specs/about-photos/spec.md` for requirements.

Before this change, `src/pages/Home/About/Photos.jsx` was a class component displaying one composite image. It switched between `photos.svg` and `photos-sm.svg` through resize-driven state at `theme.breakpoints.sm` (768px). The About section places this component inside `TwoCol`, which stacks its children on mobile.

Both SVGs embed two PNG photos. Their captions are vector outlines rather than live text. The desktop composition rotates SpaceX HQ by -6 degrees and Googleplex by 8 degrees; the mobile composition uses 8 and -12 degrees respectively. Googleplex is in front in both compositions. The SVG canvas proportions are approximately 352.50:272.63 on desktop and 216.29:160.94 on mobile.

Global styles reset figure margins and apply Inter to every element. `index.html` already loads fonts through Google Fonts. There are no About-specific test files, and the package scripts provide build and lint commands but no component test runner.

## Goals / Non-Goals

**Goals:**
- Keep rendering and layout local to `Photos.jsx` using existing React and styled-components conventions.
- Make each complete photo/frame/caption group directly targetable without relying on generated styled-components class names.
- Reserve the collage's layout space independently of rotated child bounds.

**Non-Goals:**
- No general-purpose Polaroid library, animation API, motion wrappers, or GSAP integration.
- No changes to `TwoCol`, About copy, navigation, analytics, or page-wide typography.
- No additional caption font, rasterized whole-collage replacement, or claim of pixel-identical browser rendering.

## Decisions

### Extract and reuse desktop and mobile photo assets

Decode the two embedded PNG images from each reference SVG into descriptively named local assets beside the About component. Desktop uses `spacex-hq.png` and `googleplex.png`; mobile uses `spacex-hq-mobile.png` and `googleplex-mobile.png`. Select the mobile sources with `picture`/`source` at the existing theme breakpoint. Reproduce the reference photo windows and image offsets with local clipping and object fitting.

The separate mobile assets retain the original crop and resampling choices rather than approximating them with desktop images. Keeping the composite SVG as the displayed asset would not provide independent HTML Polaroids. Retain both SVG files as references.

### Render two semantic figures in a function component

Replace the class component with a static function component. Each Polaroid is a `figure` containing a responsive photo, decorative backing, and `figcaption`; the figure owns the complete group's resting rotation. Assign stable local identifiers, `data-polaroid="spacex"` and `data-polaroid="googleplex"`, to the whole figures. Provide concise photo alt text and disable native image dragging.

Keep the shared Polaroid styling in this file. No reusable exported component or animation-specific wrapper is needed. A future movement change can target either figure or add a wrapper when its movement requirements are known.

### Reuse the original card backing and paint order

Extract the reference card geometry, paper gradient, outer shadow filters, and subtle inset effects into `polaroid-frames.svg`. Use separate desktop/mobile exports and matching view boxes, referenced by decorative inline SVGs inside each figure. Hide the inactive backing through the existing media query. Keep the backing behind the photo and caption, noninteractive, hidden from assistive technology, and nonfocusable.

This replaces the reconstructed CSS shadows and custom blur/opacity adjustments. Reusing the original paint order avoids explicitly cutting the blurred shadow against the card outline before drawing the paper face. The original desktop and mobile inset filters are preserved unchanged. No extra CSS inset shadows or photo-window rings are layered on top.

### Use a reserved responsive collage area

Retain the existing wrapper's placement and mobile centering within `TwoCol`. Use a relatively positioned collage area with a constrained width and an aspect ratio matching the applicable SVG canvas. Position the two figures within it using proportional sizes and offsets, accounting for their rotated corners and shadows. Set explicit stacking order so Googleplex remains above SpaceX HQ.

Use the existing theme breakpoint for alternate mobile sizes, offsets, and rotations. Set `min-width: 0` on the local flex wrapper so the fixed collage width does not alter `TwoCol`'s column allocation. Preserve the existing footprint and reserve stable dimensions before images load.

CSS media queries replace the resize listener and image-source state. Normal document flow would lose the overlap; unconstrained absolute positioning would fail to reserve height for the surrounding layout.

### Reuse original caption outlines with accessible HTML labels

Extract the original caption paths into `photo-captions.svg` and reference its `SpaceX-HQ` and `Googleplex` exports from decorative inline SVGs inside each `figcaption`. Retain the gray lettering and original transforms. Keep the same proper-name labels as visually hidden HTML text for assistive technology, without duplicate accessible names or SVG focus targets.

This preserves the original handwriting without adding a font request or font-loading shift. Caveat was explored and removed; the existing page font request is unchanged. The visible lettering is not selectable text, and changing it requires updating the outlines. The complete Polaroids remain HTML elements that can be targeted independently.

## Risks / Trade-offs

- Rotated corners or shadows exceed the reserved collage area -> Include their extents when setting offsets and compare desktop/mobile screenshots; do not hide overflow to mask sizing defects.
- SVG optimization can remove exported IDs or break filter references -> Verify both artwork assets and their fragment references in the production build.
- Separate SVG and HTML rendering produces different antialiasing -> Compare aligned lossless screenshots at the same CSS size and device pixel ratio; do not claim pixel identity.
- Responsive crops differ from the source SVG masks -> Match each reference photo window using explicit aspect ratios and object positioning.
- Existing repository lint errors obscure validation -> Run lint on the touched JSX first and report unrelated failures without expanding scope.

Known visual differences at reconciliation: the mobile SpaceX photo window does not include the original charcoal backing, and the original photo-window strokes are not separately reproduced after removing the added CSS rings. Shadow-only high-resolution comparisons also retain small rasterization differences. The user accepted the current appearance with these differences retained; acceptance does not imply a pixel-identical match.

## Migration Plan

Capture desktop and mobile references, extract the photo and vector assets, and replace the collage markup and styles. No data migration, feature flag, new JavaScript package, or new font is needed. The retained SVGs allow rollback to the previous image-based component.

Validate with `npm run build`, focused local ESLint, document inspection, and screenshots across desktop, narrow mobile, and both sides of the 768px breakpoint. Wait for `currentSrc` to match the viewport before testing responsive images. Use a verified 1920x1200 viewport at 3x pixel density for lossless desktop comparisons; compare outer shadows separately from photo and frame-edge pixels. Check both color schemes, vector loading, accessible labels, image-loading stability, and the absence of movement. No new test framework is required.

The latest production build and focused lint passed during reconciliation. Final layout/artwork checks passed across the required widths in both color schemes, with verified high-resolution desktop captures. Static interaction and decorative-focus checks passed on desktop and mobile in both color schemes. The checklist records these checks and the user's acceptance of the current appearance; no implementation code changed during final verification.