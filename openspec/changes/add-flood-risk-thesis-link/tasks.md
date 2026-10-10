# Tasks

Design is deliberately omitted under the schema's conditional guidance: this is a project-local use of established components, with no new architecture, dependencies, or unresolved technical decisions. Requirements are in `specs/project-resources/spec.md`.

## 1. Thesis Action

- [ ] 1.1 Add `modal.viewThesis` to Flood Risk's existing `i18n/en.json`, `i18n/nl.json`, and `i18n/de.json` with `View Thesis`, `Bekijk scriptie`, and `Abschlussarbeit ansehen`. Verify all three files parse and expose the expected label; leave the existing language selection and English fallback unchanged.
- [ ] 1.2 Replace the commented-out action beneath the pipeline diagram in `src/pages/Home/Work/Projects/FloodRisk/index.jsx` with one `PMActions` block and the existing `Button`, using `as='a'`, `externalLink`, `target='_blank'`, `rel='noopener noreferrer'`, `t.modal.viewThesis`, and the exact URL `https://resolver.tudelft.nl/uuid:80e14cd1-2fa3-406f-a283-00c54528e3f0`. Verify the rendered link's destination, attributes, icon, and placement; preserve shared components and unrelated content.

## 2. Integration Checks

- [ ] 2.1 Check the Flood Risk modal on desktop and mobile in English, Dutch, German, and a fallback language such as French. Verify the correct label remains readable, switching languages updates it, and activating the link opens the resolver in a new tab without changing the original modal or portfolio URL.
- [ ] 2.2 Run `npm run build` and verify the production build succeeds. Review the source diff to confirm implementation changes are limited to the Flood Risk component and its three translation files.