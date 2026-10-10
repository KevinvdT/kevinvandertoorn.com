# Spec Delta

## Purpose

Let visitors open supporting resources from project details through recognizable, localized external-link actions.

## ADDED Requirements

### Requirement: Flood Risk details expose the thesis action

The Flood Risk modal SHALL provide one floating thesis link styled like the existing project action buttons, including an external-link icon. When revealed, it SHALL stay horizontally centered 36px above the modal's bottom, independent of content scrolling, with no background bar or in-content button slot. It SHALL remain readable and operable on desktop and mobile.

#### Scenario: View the thesis action
- **WHEN** the thesis action is revealed on desktop or mobile
- **THEN** one button with an external-link icon floats at the modal's bottom
- **AND** its label fits without clipping and the button stays within the modal's width
- **AND** scrolling through the results and diagram does not move the button with the content

#### Scenario: Read the complete diagram
- **WHEN** a visitor scrolls to the end of the modal
- **THEN** the button remains floating
- **AND** bottom clearance allows the entire pipeline diagram to be viewed above the button

### Requirement: Thesis action visibility follows the after-video trigger

The thesis action SHALL remain hidden until scrolling reaches a trigger immediately after the video and before the Results & Impact heading. It SHALL remain revealed while reading the subsequent content and hide when scrolling back above the trigger. This behavior SHALL work with either the video preview or the playing video.

#### Scenario: Read content before the trigger
- **WHEN** the content immediately after the video has not reached the reveal threshold in the modal's scroll area
- **THEN** the thesis button remains hidden

#### Scenario: Reach the trigger
- **WHEN** scrolling brings the after-video trigger into the reveal area
- **THEN** the thesis button appears before the visitor reads the results paragraphs
- **AND** it remains visible through the rest of the modal

#### Scenario: Scroll back and return
- **WHEN** a visitor scrolls back above the trigger
- **THEN** the thesis button disappears
- **AND** returning to the trigger reveals it again

### Requirement: Thesis action animates its entrance and exit

With no reduced-motion preference, the thesis action SHALL slide upward from below the modal's bottom while fading in over 500ms. It SHALL slide down while fading out over 200ms when hidden. Both transitions SHALL use ease-in-out and SHALL NOT move the surrounding content.

#### Scenario: Reveal the floating action
- **WHEN** the reveal trigger activates
- **THEN** the button moves upward and fades to full opacity over 500ms with ease-in-out
- **AND** the results text and diagram retain their layout positions

#### Scenario: Hide the floating action
- **WHEN** scrolling back deactivates the trigger
- **THEN** the button moves down and fades out over 200ms with ease-in-out

### Requirement: Thesis action respects motion and accessibility preferences

With reduced motion enabled, the thesis action SHALL change visibility immediately without translation or fading, while retaining the same scroll trigger. A hidden action SHALL be excluded from keyboard focus and assistive technology and SHALL NOT intercept pointer input. A revealed action SHALL be keyboard-accessible and operable.

#### Scenario: Use reduced motion
- **WHEN** a visitor with reduced motion enabled crosses the trigger in either direction
- **THEN** visibility changes immediately without movement or fading

#### Scenario: Navigate before and after the trigger
- **WHEN** the thesis action is hidden
- **THEN** it cannot receive keyboard focus or pointer input and is hidden from assistive technology
- **AND** revealing it restores keyboard and pointer interaction and exposes its localized link label

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