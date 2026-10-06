# Tasks

## 1. Section URLs

- [ ] 1.1 Add explicit section URL slugs to shared translations and retain aliases for paths already in use; verify `/ueber` and `/über` both resolve to About.
- [ ] 1.2 Add a resolver for `/` and `/{section-slug}` and use it on initial load; verify opening a section URL activates and scrolls to the matching section.
- [ ] 1.3 Update the current section URL on scrolling, menu navigation, and language changes without adding history entries; verify the selected section stays active and the URL uses that language's slug.
- [ ] 1.4 Handle encoded and literal Unicode path parts when resolving and writing URLs; verify both forms resolve to the same section and produce a valid canonical URL.

## 2. Project URLs

- [ ] 2.1 Add stable IDs and English slugs to the displayed project route data, plus optional localized slugs in each project's local translations; verify a missing translated slug falls back to English.
- [ ] 2.2 Resolve `/{work-section-slug}/{project-slug}` to the matching project and open its modal on direct load; verify `/work/mission-control` and `/werk/mission-control` open the same project when its Dutch slug falls back to English.
- [ ] 2.3 Connect project modal state to the current URL and browser history; verify opening a project adds a history entry, Back closes it, and Forward reopens it.
- [ ] 2.4 Update an open project's URL immediately when the language changes and handle closing a directly opened project; verify the project remains open on language change and direct-link close returns to the localized Work URL.

## 3. Integration Checks

- [ ] 3.1 Run `npm run build` and manually verify section URLs, project direct links, language changes, and Back/Forward behavior in the browser.