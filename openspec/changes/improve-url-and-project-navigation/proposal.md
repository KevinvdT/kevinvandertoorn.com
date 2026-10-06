# Proposal

## Why

The site changes the URL as visitors move between sections, but opening a section URL directly does not take them to that section. Changing languages also leaves the URL unchanged. Project detail modals cannot be opened from a link. Fixing these paths will make the site's sections and projects easier to open and share.

## What Changes

- Open the right section when its URL is used, even if the URL is in another language. Then change it to the path for the selected language.
- Update the current section or project URL as soon as the visitor changes languages. Do not put the language code in the URL.
- Give each project detail its own URL. Keep its slug translations with that project, and use its English slug when another language has no slug.
- Open project details from their URLs. Back and Forward close or reopen project details; moving between sections does not add history entries.
- Handle only the site's known sections and projects. Do not add a routing library.

## Capabilities

### New Capabilities
- `section-navigation`: Open sections from localized URLs and keep those URLs in sync.
- `project-navigation`: Open project details from localized URLs and support Back and Forward.

### Modified Capabilities

## Impact

- Affected code: section state, the menu, the language switcher, and the Work/project modals.
- Affected translations: shared section translations and each project's local `i18n` files. Every project needs an English slug; other languages can use one when available.
- Assumption: valid section and project URLs reach the app endpoint. Host and server configuration are out of scope.
- No new package is needed; use the browser's built-in history and a small list of known URLs.