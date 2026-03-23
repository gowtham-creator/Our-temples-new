# Concerns

## Tech Debt

| Issue | Severity | Location | Notes |
|-------|----------|----------|-------|
| Inline DOM manipulation without framework | Medium | `script.js` | Manual style mutations, no reactive state |
| Unthrottled scroll event listeners | High | `script.js` (parallax + navbar) | Performance hit on fast scroll |
| External CDN image dependencies | Medium | `index.html` | All images hotlinked from framerusercontent.com |
| Carousel without user controls | Low | `index.html` (.carousel) | Auto-scroll only, no prev/next/dots |
| Hardcoded max-height in FAQ | Low | `styles.css` (.faq-answer) | `max-height: 200px` may truncate long answers |
| Magic numbers in CSS | Low | `styles.css` | Spacing values (160px, 62px, 42px) not tokenized |

## Known Bugs

- **Navbar border flash:** Border appears/disappears at exactly 50px scroll — no easing
- **Parallax jank:** `script.js` parallax runs on every scroll event without `requestAnimationFrame`
- **FAQ answer clipping:** Long answers may be cut off at 200px max-height

## Performance

- **Repeated DOM queries:** `querySelectorAll` called on every scroll event in parallax handler
- **Intersection Observer:** Applied to all section children including already-visible hero
- **External images:** No lazy loading, no srcset, all images loaded immediately from CDN
- **Font loading:** Google Fonts loaded render-blocking in `<head>`

## Security

- **Hotlinked images:** Dependent on framerusercontent.com CDN availability
- **External links:** `target="_blank"` without `rel="noopener noreferrer"` on social links
- **No CSP headers:** Static file, no Content Security Policy configured
- **No input sanitization:** No forms currently, but blog/contact links suggest future need

## Accessibility

- **No ARIA labels:** FAQ buttons lack `aria-expanded` attributes
- **No skip navigation:** Missing skip-to-content link
- **No alt text variety:** Several images have generic alt text
- **Color contrast:** Light gray text on white backgrounds may not meet WCAG AA
- **No keyboard focus styles:** Custom buttons lack visible focus indicators
- **No screen reader support:** Parallax/animation states not communicated

## Missing for Production

- **No mobile responsiveness:** Desktop-only layout (1440px), no media queries
- **No form handling:** Contact page linked but no form implementation
- **No analytics:** No tracking or performance monitoring
- **No build process:** No minification, bundling, or optimization
- **No error boundaries:** JS errors could break all interactivity
- **No SEO meta tags:** Missing Open Graph, Twitter cards, structured data
