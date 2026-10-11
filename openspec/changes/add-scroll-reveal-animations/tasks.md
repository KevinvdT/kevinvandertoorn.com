# Tasks

## 1. Shared Reveal Behavior

- [x] 1.1 Add a shared GSAP ScrollTrigger hook that triggers each item at `top 80%` and staggers only targets entering together; verify focused ESLint on the hook and `npm run build` pass. Repository-wide lint remains blocked by pre-existing errors and warnings.
- [x] 1.2 Make reduced-motion users skip hidden start states and timelines; verify targets remain visible at their final positions with `prefers-reduced-motion: reduce` enabled.

## 2. Reveal Content Sections

- [x] 2.1 Add semantic reveal targets to the About heading and each paragraph, photo collage, Skills, and Contact while leaving Hero unchanged; verify each item has its own threshold and concurrent targets stagger on desktop and mobile.

## 3. Stagger Work Projects

- [ ] 3.1 Replace per-project animation setup with the shared visibility-batched hook; verify each project row waits for its own threshold, concurrently entering rows stagger, and its modal/open action still works.
- [ ] 3.2 Verify direct About, Work, Skills, and Contact URLs, plus direct project URLs, show content correctly without changing URL or browser-history behavior.

## 4. Integration Verification

- [ ] 4.1 Verify all reveal markers stay hidden by default and toggle together with `d`; verify reduced-motion behavior, scroll reveals, direct URLs, and project navigation in the browser, then run focused ESLint and `npm run build`.