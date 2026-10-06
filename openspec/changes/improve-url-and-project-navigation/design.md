# Design

## Context

See `proposal.md` for the reason for this change. The active section is stored in Redux. Its reducer also scrolls the page, changes the URL and title, and sends analytics. On startup, the app does not use the URL to choose a section, and it does not respond to Back or Forward. Changing the language is handled separately. The Work page lists project components directly, and each project controls its own modal and translations. The repository does not include production hosting or URL rewrite settings.

## Goals / Non-Goals

**Goals:**
- Open the right section or project when its URL is loaded or reached with Back or Forward.
- Keep each section and project identifiable across languages, while showing the URL in the selected language.
- Keep project translations and modal content with their projects.
- Use a small list of known URLs and the browser's built-in history features.

**Non-Goals:**
- Add a routing package or support generated, unlimited routes.
- Put the language code in the URL or use the URL to choose a language.
- Change project content or the way modals look.

## Decisions

### Match known URLs only

Use `/` for Home, one translated path part for each other section, and two path parts for a project: the translated Work section followed by that project's slug. Keep the language out of the URL. Each known URL maps to a stable section or project ID.

Store section path names with the shared section translations, and project slugs with each project's own translations. Keep these values separate from display titles. Accept paths from every supported language, including the paths already in use and their Unicode forms. Decode URL parts before matching and encode them when writing the URL. If a URL uses another language's path, open the same section or project, then replace the URL with the version for the selected language.

Give each project a stable internal ID. Use its translated slug when present; otherwise use its English slug. Project translation files are selected as a whole today, so this fallback must be handled for the slug itself. Keep the known project IDs, components, and slugs in one small list shared by the Work page and URL lookup.

### Treat sections and projects differently in browser history

Scrolling to or selecting a section changes the current history entry; section changes do not add Back or Forward stops. Opening a project adds a history entry. When Back or Forward changes the URL, update the active section and open or close the matching project modal.

If a project URL is opened directly, show its modal even though the visitor did not first open the Work section. Closing that modal changes the URL to the translated Work path instead of taking the visitor away from the site. Record when a project URL was opened from within the app so closing it can return to the previous section.

Keep URL changes and page scrolling out of Redux reducers. Use one small navigation helper to read and write known URLs and respond to Back and Forward. The menu, language switcher, and project modals call it when needed.

### Keep current paths working

Continue to accept paths already produced from translated menu labels. For example, `/ueber` and `/über` must both find the German About section. After opening it, change the URL to the selected language's path.

## Risks / Trade-offs

- **Two sections or projects could use the same path** -> Check the known paths for duplicates in each language.
- **Browsers may represent accented paths differently** -> Test both encoded and literal Unicode paths, as well as existing ASCII forms.
- **A project may not have a translated slug** -> Require an English slug and use it when another language's value is missing.

## Migration Plan

1. Add the list of known paths and make existing localized section paths continue to work.
2. Use the current URL at startup, after language changes, and when Back or Forward is used.
3. Connect the visible project modals to project URLs and add project slugs to their local translations, with English fallbacks.
4. Test direct URLs, language changes, and Back and Forward. The app endpoint is assumed to serve valid paths; host and server configuration are out of scope. To undo the change, remove the URL handling and modal connections; no content or data migration is needed.