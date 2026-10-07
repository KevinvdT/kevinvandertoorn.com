# Spec Delta

## Purpose

Present the About photos as individually addressable HTML Polaroids while preserving the recognizable responsive collage.

## ADDED Requirements

### Requirement: Independently targetable HTML Polaroids

The About photo collage SHALL render the SpaceX HQ and Googleplex Polaroids as two separate HTML elements, each containing its own photo, card backing, and caption label. Each complete Polaroid SHALL be independently identifiable and targetable in the rendered document.

#### Scenario: Inspecting individual Polaroids
- **WHEN** the About section is rendered and its document structure is inspected
- **THEN** two distinct HTML Polaroid elements are present
- **AND** each element contains its corresponding photo and caption
- **AND** either complete Polaroid can be selected independently of the other

### Requirement: Preserve Polaroid presentation

The collage SHALL retain the existing SpaceX HQ and Googleplex photos, their recognizable crops, white frames, outer card shadows, subtle inset effects, original gray outlined captions, rotations, overlap, and stacking order.

#### Scenario: Desktop visual comparison
- **WHEN** the About collage is viewed on a desktop viewport
- **THEN** SpaceX HQ appears behind and to the lower left of Googleplex, matching the existing desktop composition
- **AND** both photos retain their frames, shadows, readable captions, and recognizable crops

### Requirement: Accessible vector captions without an added font

The captions SHALL display the original outlined lettering for "SpaceX HQ" and "Googleplex", retain those labels as real HTML text for assistive technology, and require no additional caption font. Decorative SVG artwork SHALL be hidden from assistive technology and SHALL not introduce keyboard focus targets.

#### Scenario: Caption rendering and accessibility
- **WHEN** the About Polaroids are rendered
- **THEN** their visible captions use the original vector outlines
- **AND** each figure exposes its corresponding HTML caption label to assistive technology
- **AND** decorative artwork introduces neither duplicate accessible labels nor keyboard focus targets
- **AND** no caption-font request is added

### Requirement: Preserve responsive composition

The collage SHALL retain the existing desktop and mobile arrangements, switching at the current 768px breakpoint. Its footprint SHALL scale within the About layout without clipping either Polaroid or caption, overlapping adjacent text, or introducing horizontal page overflow.

#### Scenario: Mobile layout
- **WHEN** the viewport width is 768px or less
- **THEN** the collage uses the existing mobile arrangement, including its different photo rotations and relative offsets
- **AND** it is centered within the stacked About layout
- **AND** neither Polaroid nor its caption is clipped or overlaps adjacent text

#### Scenario: Resizing across the breakpoint
- **WHEN** the viewport crosses between 768px and 769px without reloading the page
- **THEN** the collage changes between the mobile and desktop arrangements
- **AND** both Polaroids remain visible without horizontal page overflow

### Requirement: Static presentation only

The HTML replacement SHALL introduce no animation, hover movement, cursor-following behavior, scroll-driven movement, dragging, or new click action. The Polaroids SHALL remain static apart from responsive layout changes.

#### Scenario: No new interaction behavior
- **WHEN** a visitor scrolls the page, moves a pointer over the photos, clicks them, or attempts to drag a Polaroid
- **THEN** the replacement introduces no movement effect or action