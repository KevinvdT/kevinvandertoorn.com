# Tasks

Design remains deliberately omitted under the schema's conditional guidance: the floating action and scroll observation are project-local, with no new shared APIs or dependencies. The agreed behavior is captured in `specs/project-resources/spec.md`.

## 1. Thesis Action

- [x] 1.1 Add `modal.viewThesis` to Flood Risk's existing `i18n/en.json`, `i18n/nl.json`, and `i18n/de.json` with `View Thesis`, `Bekijk scriptie`, and `Abschlussarbeit ansehen`. Verify all three files parse and expose the expected label; leave the existing language selection and English fallback unchanged.
- [x] 1.2 Implement a project-local floating action in `src/pages/Home/Work/Projects/FloodRisk/index.jsx`, reusing `Button` and `PMActions` with the localized label, external-link icon, exact resolver URL, and `target='_blank'` / `rel='noopener noreferrer'`. Observe a marker immediately after the video and before Results & Impact within the modal's scroll area, using a 64px bottom inset for the reveal threshold. Fix the button 36px above the modal's bottom without a bar or in-content slot. Apply the 500ms entrance, 200ms exit, reduced-motion behavior, hidden-state interaction handling, and diagram clearance. Verify the rendered trigger order and link attributes, plus browser checks for floating position, animation timing, hidden state, reduced motion, and end-of-content clearance. Preserve shared components and unrelated content.

## 2. Integration Checks

- [x] 2.1 Check the final after-video trigger on desktop and mobile in the video preview and embedded-player states, including scrolling back above it and reopening the modal. Verify fixed positioning, repeated entrance and exit, reduced motion, hidden-state keyboard and pointer exclusion, and full diagram visibility at the end. Check English, Dutch, German, and French fallback labels, including language changes while open. Verify keyboard activation and clicking open the resolver in a new tab without changing the original modal or portfolio URL. Video playback itself is outside this change's scope.
- [x] 2.2 Run `npm run build` and verify the production build succeeds. Review the source diff to confirm implementation changes are limited to the Flood Risk component and its three translation files.

Verification: Browser checks passed at 1440x1000 and 390x844, including locale changes while the modal remained open. Keyboard and pointer activation retained the original modal and URL; the user confirmed the external link opens correctly in a new tab because that tab was not observable through the integrated browser tools. The production build passed with the existing bundle-size warning.