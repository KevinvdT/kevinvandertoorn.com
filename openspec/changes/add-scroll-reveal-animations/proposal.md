# Proposal

## Why

The portfolio currently reveals Work project items individually, while the other content sections have no consistent scroll-entry motion. Extending the existing GSAP behavior across those sections will make the page feel cohesive with a consistent, restrained motion system.

## What Changes

- Add one scroll-reveal behavior for About, Work, Skills, and Contact content; leave the Hero unchanged.
- Start reveal targets at opacity 0 and 30px below their final position, trigger at `top 80%`, animate once over `0.8s` with `power2.out`, and stagger grouped items by `0.2s`.
- Apply the same behavior to grouped Work project items without changing section URLs, project URLs, or browser-history behavior.

## Capabilities

### New Capabilities

- `scroll-reveal-animations`: Scroll-triggered fade-and-rise reveals for portfolio content, including staggered groups.

### Modified Capabilities

None.

## Impact

The Home section components and Work project item rendering will use the existing GSAP and ScrollTrigger dependency. Hero behavior, localized section and project navigation, and browser-history semantics remain unchanged.