# Spec Delta

## Purpose

Let visitors open supporting resources from project details through recognizable, localized external-link actions.

## ADDED Requirements

### Requirement: Flood Risk details expose the thesis action

The Flood Risk modal SHALL display one thesis link styled like the existing project action buttons, including an external-link icon, beneath the pipeline diagram. The action SHALL remain readable and operable on desktop and mobile.

#### Scenario: View the thesis action
- **WHEN** a visitor opens the Flood Risk modal on desktop or mobile and reaches its end
- **THEN** one thesis button appears beneath the pipeline diagram with an external-link icon
- **AND** its label fits without clipping or overlapping adjacent content

### Requirement: Thesis action opens the stable resolver URL

The thesis action SHALL link to `https://resolver.tudelft.nl/uuid:80e14cd1-2fa3-406f-a283-00c54528e3f0` in a new tab with `noopener noreferrer`, leaving the current project modal and portfolio URL unchanged.

#### Scenario: Open the thesis
- **WHEN** a visitor activates the thesis button
- **THEN** a new tab opens the exact resolver URL
- **AND** the link uses `noopener noreferrer`
- **AND** the original tab retains the open Flood Risk modal and its current portfolio URL

### Requirement: Thesis action follows the project language

The thesis action SHALL display `View Thesis` in English, `Bekijk scriptie` in Dutch, and `Abschlussarbeit ansehen` in German. Languages without Flood Risk translations SHALL use the existing English fallback. The destination SHALL be the same in every language.

#### Scenario: Use a supported project language
- **WHEN** the Flood Risk modal is viewed in English, Dutch, or German, including after switching languages while it is open
- **THEN** the thesis action displays the corresponding localized label
- **AND** its destination remains the resolver URL

#### Scenario: Use a fallback language
- **WHEN** the Flood Risk modal is viewed in a language without project-local translations, such as French
- **THEN** the thesis action displays `View Thesis`
- **AND** its destination remains the resolver URL