# Proposal

## Why

Visitors can read about the Flood Risk project but cannot open its thesis from the project modal. A button linking to the TU Delft resolver makes the research accessible using the same interaction as other project resources.

## What Changes

- Add one floating thesis button in the Flood Risk modal, matching the existing project buttons and external-link icon, without a background bar or an in-content button slot.
- Reveal it when scrolling reaches the marker immediately after the video, before Results & Impact. Keep it centered 36px above the modal's bottom, independent of content scrolling, and hide it when scrolling back above the trigger.
- Slide the button upward while fading in over 500ms; slide it down while fading out over 200ms, using ease-in-out. Respect reduced motion with immediate visibility changes, and exclude the hidden button from keyboard focus and assistive technology.
- Keep enough clearance after the pipeline diagram for it to be fully readable at the end of the modal.
- Open `https://resolver.tudelft.nl/uuid:80e14cd1-2fa3-406f-a283-00c54528e3f0` in a new tab with `noopener noreferrer`.
- Add project-local labels: `View Thesis`, `Bekijk scriptie`, and `Abschlussarbeit ansehen` in English, Dutch, and German. Other languages retain the existing English fallback.
- Leave the project card, modal routing, unrelated content, and shared components unchanged.

## Capabilities

### New Capabilities

- `project-resources`: External resource actions in project details, initially covering the floating Flood Risk thesis link, its scroll-triggered animation, accessibility, and localized label.

### Modified Capabilities

None. Existing project URL and history requirements remain unchanged.

## Impact

- Update `src/pages/Home/Work/Projects/FloodRisk/index.jsx` and its existing `i18n/en.json`, `i18n/nl.json`, and `i18n/de.json` files during implementation.
- Reuse the existing `Button` and `PMActions` components with project-local floating styles and scroll observation; do not change the shared components or their APIs.
- No new dependencies, analytics events, feature flags, or backend changes.
- Verification covers the scroll trigger, fixed position, entrance and exit animations, reduced motion, hidden-state accessibility, image clearance, destination, new-tab behavior, and translations on desktop and mobile. No new test framework or unrelated cleanup is in scope.