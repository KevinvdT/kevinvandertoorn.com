# project-navigation Specification

## Purpose

Defines stable, directly addressable navigation for project details while allowing each self-contained project to provide localized URL slugs with an English fallback.

## Requirements

### Requirement: Project details have localized URLs
The system SHALL identify each project by a stable internal ID and use `/{work-section-slug}/{project-slug}` for its detail URL. The Work section slug follows the active language, and a project uses its localized slug or falls back to its English slug.

#### Scenario: Open a project from the Work section
- **WHEN** a visitor opens a project's detail modal
- **THEN** the URL follows `/{work-section-slug}/{project-slug}` using the current language

#### Scenario: Use the project URL in English or Dutch
- **WHEN** a project has the English slug `mission-control` and no Dutch slug
- **THEN** its English URL is `/work/mission-control` and its Dutch URL is `/werk/mission-control`

#### Scenario: Project has no slug for the active language
- **WHEN** a project has an English slug but no slug configured for the active language
- **THEN** the English slug is used for that project URL

### Requirement: Project URLs restore project details
The system SHALL resolve every configured localized project URL to its stable project ID and open the corresponding detail view directly.

#### Scenario: Open a project URL directly
- **WHEN** a visitor opens a valid project URL in a fresh page load
- **THEN** the Work section is active and the matching project detail is open

#### Scenario: Open a project URL configured for another language
- **WHEN** a visitor opens a valid project slug while a different language is selected
- **THEN** the matching project detail opens and the URL is canonicalized to the selected language's Work path and project slug

### Requirement: Project details participate in browser history
The system SHALL represent opening a project detail as a distinct history entry while section movement continues to replace the current entry.

#### Scenario: Navigate Back from an opened project
- **WHEN** a visitor opens a project from the Work section and then navigates Back
- **THEN** the project detail closes and the prior section URL is restored

#### Scenario: Navigate Forward to a project
- **WHEN** a visitor navigates Forward to a project history entry
- **THEN** the corresponding project detail opens again

### Requirement: Project titles follow resolved navigation state
The system SHALL update the browser title promptly to identify an open project in the selected language whenever its detail view is resolved or the language changes.

#### Scenario: Open a project URL directly
- **WHEN** a visitor opens a valid project URL in a fresh page load
- **THEN** the browser title identifies the resolved project in the selected language

#### Scenario: Change language while a project is open
- **WHEN** a visitor changes language while viewing a project detail
- **THEN** the browser title changes to that project's title in the newly selected language, using the established fallback when necessary

### Requirement: Language changes preserve an open project URL and title
The system SHALL keep an open project detail visible and immediately update its URL and browser title to use the newly selected language's Work path, project slug, and title, applying the English slug fallback when necessary.

#### Scenario: Change language while a project is open
- **WHEN** a visitor changes language while viewing a project detail
- **THEN** the same project remains open, its URL reflects the newly selected language where translations are available, and its browser title identifies the project in that language