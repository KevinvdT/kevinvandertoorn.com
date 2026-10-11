# Spec Delta

## Purpose

Defines how portfolio content enters the viewport with consistent, accessible scroll-triggered reveals. The behavior covers the below-the-fold sections while preserving the existing Hero and navigation behavior.

## ADDED Requirements

### Requirement: Portfolio content reveals on scroll
The system SHALL reveal each designated About, Work, Skills, and Contact item once when that item reaches the top 80% of the viewport, moving it 30px upward while fading it to full opacity over 0.8 seconds with an ease-out motion.

#### Scenario: Reveal an item while scrolling
- **WHEN** a visitor scrolls until a designated item reaches the top 80% of the viewport
- **THEN** that item fades in and rises 30px to its final position over 0.8 seconds
- **AND** items still below the trigger threshold remain hidden until they reach it
- **AND** the reveal does not replay during that page view

#### Scenario: Open a section or project URL directly
- **WHEN** a visitor opens a direct URL that places a reveal group in or near the viewport
- **THEN** the group is visible and its reveal runs once when the trigger threshold is met
- **AND** section URLs, project URLs, and browser-history behavior remain unchanged

### Requirement: Grouped content reveals are staggered
The system SHALL stagger by 0.2 seconds the items in a multi-item group that enter the viewport together, following their visual order, without starting items that have not reached the viewport trigger.

#### Scenario: Stagger items entering together
- **WHEN** multiple items in a group reach the viewport trigger together
- **THEN** those items begin their reveal 0.2 seconds apart in visual order
- **AND** items that reach the trigger later reveal in a later batch

### Requirement: Reduced motion keeps content immediately available
The system SHALL display reveal-target content in its final visible position without fade or translation when the visitor requests reduced motion.

#### Scenario: Visitor prefers reduced motion
- **WHEN** the visitor's operating-system preference requests reduced motion
- **THEN** reveal-target content remains fully visible without animated movement