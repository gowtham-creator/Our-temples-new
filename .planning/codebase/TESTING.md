# Testing

## Current State

**No testing infrastructure is configured.** There are no test files, test frameworks, or testing configuration in the project.

## What's Missing

| Category | Status |
|----------|--------|
| Test framework (Jest/Vitest) | Not installed |
| Component testing (React Testing Library) | Not installed |
| E2E testing (Playwright/Cypress) | Not installed |
| Test configuration files | None |
| Test files (`*.test.ts`, `*.spec.ts`) | None in `src/` |
| CI/CD pipeline | Not configured |
| Coverage reporting | Not configured |

## Considerations

- Static marketing site with no business logic — testing value is primarily in visual regression and animation behavior
- All content is hardcoded — no data fetching to test
- Interactive components (`FadeIn`, `ParallaxImage`, `ImageCarousel`, `FAQItem`) could benefit from component tests
- Visual regression testing (e.g., Playwright screenshots) would validate pixel-accuracy against Framer design
- Lenis smooth scroll and Motion animations are difficult to unit test — better suited for E2E
