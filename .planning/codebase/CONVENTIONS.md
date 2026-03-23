# Coding Conventions

**Analysis Date:** 2026-03-23

## Naming Patterns

**Files:**
- HTML: `index.html` - single page entry point
- CSS: `styles.css` - single stylesheet using kebab-case for class names
- JavaScript: `script.js` - single script file using camelCase for function/variable names
- No file extensions beyond standard web types (no .ts, .tsx, .jsx)

**Functions:**
- camelCase: `querySelectorAll()`, `addEventListener()`, `getBoundingClientRect()`
- No explicit function declarations; uses inline event handlers and arrow functions
- Descriptive names indicating purpose: `getFAQAnswerHeight()`, `updateNavbarScroll()`

**Variables:**
- camelCase throughout: `observerOptions`, `scrollPercent`, `scrollY`
- Const for immutable values and DOM elements: `const navbar = document.querySelector('.navbar')`
- Const for configuration objects: `const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }`

**CSS Classes:**
- kebab-case: `.navbar-logo`, `.hero-section`, `.feature-card`, `.faq-item`
- Semantic naming: `.active` for state, `.parallax-image` for effect, `.fade-in` for animation
- BEM-like structure: `.navbar-container`, `.navbar-links`, `.navbar-actions`
- Component-scoped: `.hero-section`, `.about-section`, `.features-section`, `.faq-section`

**CSS Custom Properties:**
- kebab-case with semantic naming: `--dark-1`, `--dark-2`, `--dark-3`, `--font-family`, `--light-blue`
- Color palette organized by darkness/lightness level
- Located in `:root` pseudo-selector for global access

## Code Style

**Formatting:**
- No automated formatter configured (Prettier not detected)
- Manual formatting observed:
  - 2-space indentation in CSS (implied)
  - 2-space indentation in JavaScript
  - Consistent spacing around braces and operators

**Linting:**
- No ESLint configuration detected
- No TypeScript compilation
- Plain JavaScript following implicit conventions:
  - Use `const` for immutable bindings
  - Use `let` for variables (not observed in codebase)
  - Avoid `var` (not used in codebase)

**CSS Organization:**
- Organized by functional sections with comment headers
- Pattern: `/* ======== [Section] ======== */`
- Reset and design tokens at top (`styles.css` lines 1-24)
- Sections follow logical page layout: Typography → Layout → Buttons → Components → Responsive

## Import Organization

**JavaScript:**
- No import/export statements (ES6 modules not used)
- All JavaScript runs in global scope via single `<script src="script.js"></script>` tag
- DOM manipulation via direct global access: `document.querySelectorAll()`, `window.addEventListener()`

**HTML Linking:**
- External stylesheet linked in `<head>`: `<link rel="stylesheet" href="styles.css">`
- Script loaded at end of `<body>`: `<script src="script.js"></script>`
- Google Fonts linked via `<link rel="preconnect">` for optimization
- No package manager dependencies (no npm/import system)

## Error Handling

**Patterns:**
- No explicit error handling observed
- Defensive DOM queries: Uses `querySelector()` which returns `null` if not found
- Rely on browser error suppression for missing DOM elements
- Example: `document.querySelector('.navbar-container').style.opacity = '1'` (will error if element missing)
- Assumption: HTML structure always provides required elements

## Logging

**Framework:** `console` (browser console API)

**Patterns:**
- No logging statements observed in current codebase
- Could use: `console.log()`, `console.error()`, `console.warn()` if debugging needed
- No structured logging or log levels

## Comments

**When to Comment:**
- Section headers in CSS with consistent formatting: `/* ======== [Section Name] ======== */`
- Section comments group related styles: Design Tokens, Typography, Layout, etc.
- No inline comments in JavaScript code
- HTML uses semantic naming that makes intent clear (no comments needed)

**JSDoc/TSDoc:**
- Not applicable - no TypeScript
- No function documentation observed
- Code relies on clear naming and structure for understanding

## Function Design

**Size:**
- Functions are small and focused on single responsibility
- Maximum ~10 lines of code per function/event handler
- Anonymous arrow functions preferred for event listeners

**Parameters:**
- Minimal parameters; most functions operate on DOM elements found via `querySelector`
- Event handlers accept single `event` parameter (rarely used)

**Return Values:**
- Event listeners return nothing (void)
- No utility functions with return values observed
- DOM methods (`querySelector`, `addEventListener`) return results used directly

## Module Design

**Exports:**
- No module exports (no module system)
- All code is procedural and runs on page load

**Barrel Files:**
- Not applicable - single `script.js` file
- All logic consolidated in one file

**Structure in `script.js` (`/Users/gowthamreddy/new-website/script.js`):**
1. FAQ Accordion functionality (lines 1-15)
2. Navbar scroll effect (lines 17-25)
3. Parallax image effect (lines 27-35)
4. Fade-in on scroll with Intersection Observer (lines 37-57)
5. Navbar visibility optimization (lines 59-61)

## State Management

**Patterns:**
- Uses DOM classes for state: `.active` class toggles FAQ accordion
- Browser APIs for state: Intersection Observer for scroll tracking
- No state variables; state exists in DOM attributes and classes

## Selectors and DOM Queries

**Pattern:**
- Prefers `document.querySelectorAll()` for multiple elements
- Prefers `document.querySelector()` for single elements
- Cache results in `const` when reused: `const navbar = document.querySelector('.navbar')`
- Immediate query without caching if used once

---

*Convention analysis: 2026-03-23*
