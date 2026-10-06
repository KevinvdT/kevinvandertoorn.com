# Spec Delta

## Purpose

Defines localized, directly addressable URLs for the portfolio's static sections while keeping section movement within the current browser-history entry.

## ADDED Requirements

### Requirement: Localized section paths resolve to their section
The system SHALL recognize configured localized paths for each section and resolve them to the same section regardless of the currently selected language.

#### Scenario: Open a section URL from another language
- **WHEN** a visitor opens a configured German About path while English is selected
- **THEN** the About section becomes active and the URL is canonicalized to the English About path

#### Scenario: Open a section path with an encoded localized character
- **WHEN** a visitor opens a valid localized section path containing encoded or literal Unicode characters
- **THEN** the path resolves to its configured section rather than an unrelated or missing route

### Requirement: Section navigation does not add browser-history entries
The system SHALL update the current history entry when scrolling or navigating between sections, so section changes do not create separate Back and Forward stops.

#### Scenario: Move between sections
- **WHEN** a visitor scrolls to or selects another section
- **THEN** the current URL reflects that section without adding a browser-history entry

#### Scenario: Return from a project to its section
- **WHEN** a visitor closes a project detail or navigates Back from its project URL
- **THEN** the previously active section URL is restored without adding section movement to history

### Requirement: Language changes preserve the active section URL
The system SHALL keep the active section unchanged and immediately canonicalize its URL using the newly selected language's configured section path.

#### Scenario: Change language while viewing a section
- **WHEN** a visitor changes the language while a section is active
- **THEN** the same section remains active and its URL changes to that language's configured path