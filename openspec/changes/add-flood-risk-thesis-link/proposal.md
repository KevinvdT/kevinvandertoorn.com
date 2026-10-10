# Proposal

## Why

Visitors can read about the Flood Risk project but cannot open its thesis from the project modal. A button linking to the TU Delft resolver makes the research accessible using the same interaction as other project resources.

## What Changes

- Add one thesis button beneath the pipeline diagram in the Flood Risk modal, matching the existing project buttons and external-link icon.
- Open `https://resolver.tudelft.nl/uuid:80e14cd1-2fa3-406f-a283-00c54528e3f0` in a new tab with `noopener noreferrer`.
- Add a project-local label in English, Dutch, and German. Proposed defaults are `View Thesis`, `Bekijk scriptie`, and `Abschlussarbeit ansehen`; other languages retain the existing English fallback.
- Leave the project card, modal routing, other project content, and shared components unchanged.

## Capabilities

### New Capabilities

- `project-resources`: External resource actions in project details, initially covering the Flood Risk thesis link and its localized label.

### Modified Capabilities

None. Existing project URL and history requirements remain unchanged.

## Impact

- Update `src/pages/Home/Work/Projects/FloodRisk/index.jsx` and its existing `i18n/en.json`, `i18n/nl.json`, and `i18n/de.json` files during implementation.
- Reuse the existing `Button` and `PMActions` components without changing their APIs or styling.
- No new dependencies, analytics events, feature flags, or backend changes.
- Verification covers the destination, new-tab behavior, translations and fallback, and button fit on desktop and mobile. No new test framework or unrelated cleanup is in scope.