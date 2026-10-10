# Spec Delta

## Purpose

Defines a refractive navigation surface that reflects the visible page while preserving readable, responsive, and reliable navigation.

## ADDED Requirements

### Requirement: Navigation uses one readable glass surface
The system SHALL present the navigation pill as one refractive glass surface when rendering is available, with legible foreground links and a distinguishable active section. The visual effect SHALL NOT make the menu draggable or replace native link interaction.

#### Scenario: Glass renders over page content
- **WHEN** glass rendering is ready and the visible menu overlaps text or imagery
- **THEN** the pill shows background refraction and edge lighting while its link labels remain crisp and readable

#### Scenario: Navigate with keyboard or pointer
- **WHEN** a visitor focuses and activates a menu link using the keyboard or pointer
- **THEN** the link retains its existing section-navigation behavior and the effect does not intercept focus, clicks, or touch scrolling

### Requirement: Glass includes every page section
The system SHALL use the visible page behind the menu as its refracted background across Home, About, Work, Skills, and Contact, without changing section widths or spacing.

#### Scenario: Scroll to Contact
- **WHEN** the menu overlaps Contact content
- **THEN** its glass includes that content rather than a blank or previously captured section
- **AND** Contact retains its existing layout outside the constrained content container

### Requirement: Glass stays aligned and current
The system SHALL keep the refracted background aligned with visible content during scrolling and resizing, and refresh it after language changes, image loading, and relevant visual changes beneath the menu.

#### Scenario: Scroll beneath a stationary menu
- **WHEN** a visitor scrolls text and images beneath the fixed menu
- **THEN** the refracted content moves with the page rather than remaining frozen or displaced

#### Scenario: Change language or load an image
- **WHEN** translated content changes or an image finishes loading beneath the menu
- **THEN** the glass reflects the updated content without requiring a page reload

#### Scenario: Animated content overlaps the menu
- **WHEN** existing animated or parallax content changes beneath the menu
- **THEN** the effect reflects the current content without leaving a persistent stale image

### Requirement: Glass follows the existing color scheme
The system SHALL use the page's current light or dark background for the glass and keep navigation labels legible in either scheme.

#### Scenario: Open or switch to dark mode
- **WHEN** the page loads in dark mode or the operating-system color scheme changes to dark
- **THEN** the glass uses the corresponding page background without an incorrect white backing

#### Scenario: Switch to light mode
- **WHEN** the operating-system color scheme changes to light
- **THEN** the glass background and menu labels follow the light theme without a page reload

### Requirement: Responsive menu behavior is preserved
The system SHALL preserve the menu's current desktop top positioning, mobile bottom positioning, scroll-dependent spacing, and mobile visibility rules when glass rendering is enabled or disabled.

#### Scenario: Resize between desktop and mobile
- **WHEN** the viewport crosses the existing mobile breakpoint
- **THEN** the menu and glass move and resize together without shifting section layout or clipping labels that previously fit

#### Scenario: Return to the top on mobile
- **WHEN** the existing mobile menu visibility rule hides the menu near the top of the page
- **THEN** the glass also disappears and leaves no visible or interactive overlay

### Requirement: Navigation remains usable without glass rendering
The system SHALL retain the existing theme-aware frosted navigation while glass is loading or unavailable, and restore it if rendering fails. Effect initialization and teardown SHALL NOT leave duplicate visible surfaces, block page text selection, or prevent navigation.

#### Scenario: Rendering is unavailable or fails
- **WHEN** glass initialization fails, rendering loses its graphics context, or the effect cannot render reliably
- **THEN** the menu remains readable and usable with its frosted fallback
- **AND** successful recovery can restore the glass without duplicating it

#### Scenario: Navigate before initialization finishes
- **WHEN** a visitor activates a menu link while the effect is loading
- **THEN** navigation works immediately without waiting for the visual effect

#### Scenario: Reinitialize or remount the effect
- **WHEN** the effect is replaced or the page remounts
- **THEN** at most one glass surface remains on the menu and page text remains selectable