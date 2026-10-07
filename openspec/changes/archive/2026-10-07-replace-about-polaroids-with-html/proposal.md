# Proposal

## Why

The About photos were a single SVG collage, so neither Polaroid could be targeted independently as an HTML element. Rebuilding the collage as two HTML Polaroids prepares it for future movement without adding movement in this change.

## What Changes

- Replace the composite image with two independently targetable HTML figures containing a photo, decorative card backing, and accessible caption label.
- Reuse the SpaceX HQ and Googleplex photo assets from both the desktop and mobile SVG references.
- Reuse the original caption outlines and card backing artwork, including the outer shadows and subtle inset effects, without adding a caption font.
- Retain the overlap, photo crops, stacking order, and separate desktop/mobile arrangements.
- Use responsive CSS instead of switching SVG sources through a window resize listener.
- Keep the result static: no animations, hover effects, parallax, dragging, or new click actions.

## Capabilities

### New Capabilities

- `about-photos`: The About photo collage renders two independently targetable HTML Polaroids while retaining its responsive visual composition.

### Modified Capabilities

None. Existing navigation requirements are unchanged.

## Impact

- Primary implementation surface: `src/pages/Home/About/Photos.jsx`, four local photo assets, `photo-captions.svg`, and `polaroid-frames.svg`.
- The rendered collage replaces references to `photos.svg` and `photos-sm.svg`; these assets remain available as visual references during implementation.
- Visible captions use decorative SVG outlines with real HTML text retained for accessibility. Existing font loading and page typography stay unchanged.
- No new JavaScript packages, animation integration, routing changes, analytics changes, or About copy changes.