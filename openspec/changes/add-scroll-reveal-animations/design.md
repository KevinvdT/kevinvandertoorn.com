# Design

## Context

`Home` composes Hero, About, Work, and Skills, with Contact rendered as the footer. `ProjectItem` already uses GSAP and ScrollTrigger for an individual fade-and-rise reveal with a 30px offset, a `top 80%` trigger, one-time playback, a 0.8-second duration, and `power2.out` easing; it has no group stagger. About contains a text column and a photo collage, Skills renders reusable SkillSets, and Contact has two columns. Section and project URLs scroll directly to existing section IDs.

## Goals / Non-Goals

**Goals:**
- Centralize reveal settings and lifecycle so targets behave consistently.
- Stagger related content by 0.2 seconds in visual order.
- Keep content visible and still when reduced motion is requested.
- Preserve section and project navigation behavior.

**Non-Goals:**
- Animate the Hero.
- Change URLs, active-section tracking, project modal behavior, or browser history.
- Add an animation dependency.

## Decisions

- Use a shared React hook built on the installed GSAP and ScrollTrigger rather than duplicating animation setup in each component or adding another animation library. Create one trigger per target and collect targets entering within the same short window for a shared stagger, so below-the-fold items wait for their own viewport threshold. Revert triggers and animations during cleanup.
- Mark semantic reveal targets rather than every text node: the About heading, each About paragraph, and the photo collage; each Work project row; each Skills set; and the Contact heading, text, and columns. Stagger targets entering together by 0.2 seconds in their visual order.
- Give each target a one-time `top 80%` trigger and the established fade-and-rise settings. Targets farther down the page start in later batches. Remove the old per-project timelines to avoid overlapping triggers.
- Keep ScrollTrigger start, end, and scroller boundary markers available for debugging, but hide them by default. Toggle all reveal markers with the `d` key when focus is not in an editable control.
- Check the reduced-motion preference before setting hidden start states or creating a timeline. In that mode, leave all targets visible in their final positions.
- Initialize timelines in layout effects and refresh ScrollTrigger after layout changes that can move targets, so direct section and project URLs do not use stale trigger positions.

## Risks / Trade-offs

- A stagger can delay dense groups. Animate meaningful units (project rows and SkillSets), not individual words or each skill label.
- Direct navigation and late-loading media can shift trigger positions. Refresh ScrollTrigger after relevant layout changes and verify direct section and project URLs.
- Debug markers add DOM nodes even while hidden. Keep their visual state hidden by default and ensure the keyboard toggle affects all target and scroller boundary markers together.
- Applying hidden start states before checking the motion preference could hide content. Keep the default DOM visible and only set the animated start state when motion is enabled.

## Migration Plan

No data or dependency migration is required. Replace the per-project animation with the shared group behavior and add reveal targets to the selected sections. Rollback can remove the shared hook and target markers, then restore the current per-item trigger without changing URLs.