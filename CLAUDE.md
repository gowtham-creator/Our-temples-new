<!-- GSD:project-start source:PROJECT.md -->
## Project

**Sonic — Speaker Product Website**

A pixel-accurate Next.js implementation of the Sonic speaker product website, converted from a Framer design file. The site is a marketing/product website for a premium speaker brand, featuring hero, about, features, stats, products, FAQ, blog, and CTA sections with a navbar and footer. Desktop view is the primary target.

**Core Value:** The website must visually match the Framer design file exactly — every section, spacing, typography, color, and image must be pixel-accurate to the design source.

### Constraints

- **Tech stack:** Next.js 15 with App Router, React 19, TypeScript
- **Styling:** CSS Modules or Tailwind — must preserve exact Framer design tokens
- **Desktop-only:** 1440px viewport, no responsive breakpoints required
- **No backend:** Static site, all content hardcoded
- **Image source:** Use existing Framer CDN URLs for all images
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- HTML5 - Markup language for site structure in `index.html`
- CSS3 - Styling and layout in `styles.css`
- JavaScript (Vanilla ES6+) - Client-side interactivity in `script.js`
- None detected
## Runtime
- Browser-based (client-side only)
- No server-side runtime detected
- Not applicable - no package.json or dependency manager detected
## Frameworks
- No framework used - static HTML/CSS/JS site
- Custom CSS with CSS custom properties (variables) - Design tokens defined in `:root`
- No CSS framework detected (no Bootstrap, Tailwind, etc.)
- Vanilla JavaScript (no libraries/frameworks)
- Intersection Observer API for fade-in animations
- No jQuery, React, Vue, or other JS framework
- No build tool detected (webpack, Vite, Parcel, etc.)
- No transpilation required
## Key Dependencies
- None - site is entirely self-contained
- Google Fonts (Inter typeface) - Loaded via CDN from `https://fonts.googleapis.com`
- Framer (image hosting) - Images from `https://framerusercontent.com/` for product photography
## Configuration
- No environment configuration file detected
- No `.env` file present
- No configuration management system
- No build configuration required
- Direct file serving (no compilation step)
## Platform Requirements
- Any text editor (VS Code, Sublime, etc.)
- Browser for testing (Chrome, Firefox, Safari, Edge)
- Basic HTTP server for local development (optional, for testing relative paths)
- Static file hosting (any web server: Apache, Nginx, Vercel, GitHub Pages, AWS S3, etc.)
- No server-side processing required
- No runtime environment needed
## Asset Pipeline
- Currently external (Framer CDN for product images)
- No local image assets in codebase
- SVG icons embedded inline in HTML (vector icons from Phosphor Icons style)
- Google Fonts API: Inter font family with weights 400, 500, 600, 700
- Fallback fonts: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, sans-serif
## Browser Compatibility
- Modern browsers with ES6 support
- CSS Grid and Flexbox required
- Intersection Observer API supported (2016+)
- CSS custom properties (--variables) required
- None detected or required for modern browsers
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Naming Patterns
- HTML: `index.html` - single page entry point
- CSS: `styles.css` - single stylesheet using kebab-case for class names
- JavaScript: `script.js` - single script file using camelCase for function/variable names
- No file extensions beyond standard web types (no .ts, .tsx, .jsx)
- camelCase: `querySelectorAll()`, `addEventListener()`, `getBoundingClientRect()`
- No explicit function declarations; uses inline event handlers and arrow functions
- Descriptive names indicating purpose: `getFAQAnswerHeight()`, `updateNavbarScroll()`
- camelCase throughout: `observerOptions`, `scrollPercent`, `scrollY`
- Const for immutable values and DOM elements: `const navbar = document.querySelector('.navbar')`
- Const for configuration objects: `const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }`
- kebab-case: `.navbar-logo`, `.hero-section`, `.feature-card`, `.faq-item`
- Semantic naming: `.active` for state, `.parallax-image` for effect, `.fade-in` for animation
- BEM-like structure: `.navbar-container`, `.navbar-links`, `.navbar-actions`
- Component-scoped: `.hero-section`, `.about-section`, `.features-section`, `.faq-section`
- kebab-case with semantic naming: `--dark-1`, `--dark-2`, `--dark-3`, `--font-family`, `--light-blue`
- Color palette organized by darkness/lightness level
- Located in `:root` pseudo-selector for global access
## Code Style
- No automated formatter configured (Prettier not detected)
- Manual formatting observed:
- No ESLint configuration detected
- No TypeScript compilation
- Plain JavaScript following implicit conventions:
- Organized by functional sections with comment headers
- Pattern: `/* ======== [Section] ======== */`
- Reset and design tokens at top (`styles.css` lines 1-24)
- Sections follow logical page layout: Typography → Layout → Buttons → Components → Responsive
## Import Organization
- No import/export statements (ES6 modules not used)
- All JavaScript runs in global scope via single `<script src="script.js"></script>` tag
- DOM manipulation via direct global access: `document.querySelectorAll()`, `window.addEventListener()`
- External stylesheet linked in `<head>`: `<link rel="stylesheet" href="styles.css">`
- Script loaded at end of `<body>`: `<script src="script.js"></script>`
- Google Fonts linked via `<link rel="preconnect">` for optimization
- No package manager dependencies (no npm/import system)
## Error Handling
- No explicit error handling observed
- Defensive DOM queries: Uses `querySelector()` which returns `null` if not found
- Rely on browser error suppression for missing DOM elements
- Example: `document.querySelector('.navbar-container').style.opacity = '1'` (will error if element missing)
- Assumption: HTML structure always provides required elements
## Logging
- No logging statements observed in current codebase
- Could use: `console.log()`, `console.error()`, `console.warn()` if debugging needed
- No structured logging or log levels
## Comments
- Section headers in CSS with consistent formatting: `/* ======== [Section Name] ======== */`
- Section comments group related styles: Design Tokens, Typography, Layout, etc.
- No inline comments in JavaScript code
- HTML uses semantic naming that makes intent clear (no comments needed)
- Not applicable - no TypeScript
- No function documentation observed
- Code relies on clear naming and structure for understanding
## Function Design
- Functions are small and focused on single responsibility
- Maximum ~10 lines of code per function/event handler
- Anonymous arrow functions preferred for event listeners
- Minimal parameters; most functions operate on DOM elements found via `querySelector`
- Event handlers accept single `event` parameter (rarely used)
- Event listeners return nothing (void)
- No utility functions with return values observed
- DOM methods (`querySelector`, `addEventListener`) return results used directly
## Module Design
- No module exports (no module system)
- All code is procedural and runs on page load
- Not applicable - single `script.js` file
- All logic consolidated in one file
## State Management
- Uses DOM classes for state: `.active` class toggles FAQ accordion
- Browser APIs for state: Intersection Observer for scroll tracking
- No state variables; state exists in DOM attributes and classes
## Selectors and DOM Queries
- Prefers `document.querySelectorAll()` for multiple elements
- Prefers `document.querySelector()` for single elements
- Cache results in `const` when reused: `const navbar = document.querySelector('.navbar')`
- Immediate query without caching if used once
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## Pattern Overview
- Vanilla HTML, CSS, and JavaScript (no framework dependencies)
- Semantic HTML structure with progressive enhancement
- CSS-based design system with custom properties (design tokens)
- Event-driven JavaScript for interactivity and scroll effects
- No build process or bundling required
## Layers
- Purpose: Render UI components and visual elements
- Location: `index.html`, `styles.css`
- Contains: HTML semantic structure, section-based components, CSS styling
- Depends on: Design tokens (CSS custom properties)
- Used by: Browser rendering engine, JavaScript event handlers
- Purpose: Consistent visual design and responsive layout
- Location: `styles.css` (794 lines)
- Contains: Design tokens (colors, typography), layout utilities, component styles, animations
- Depends on: Inter font from Google Fonts
- Used by: All HTML elements
- Purpose: Handle dynamic user interactions and scroll effects
- Location: `script.js` (62 lines)
- Contains: FAQ accordion toggle, navbar scroll effect, parallax scrolling, fade-in observer
- Depends on: DOM elements with specific class names
- Used by: Event listeners on user interactions and scroll events
## Data Flow
- No centralized state management
- State exists in DOM (`classList`, inline styles, scroll position)
- Component state is ephemeral (not persisted)
## Key Abstractions
- Purpose: Reusable page section pattern with consistent spacing
- Examples: `.hero-section`, `.about-section`, `.features-section`, `.stats-section`, `.product-section`, `.faq-section`, `.blog-section`, `.cta-section`, `.footer`
- Pattern: Container div with semantic `<section>` tag, inner `.container` for max-width constraint and padding
- Purpose: Consistent call-to-action styling with variants
- Examples: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-sm`, `.btn-lg`
- Pattern: Base `.btn` class with size modifiers (`-sm`, `-lg`) and color modifiers (`-primary`, `-secondary`)
- Purpose: Label/category indicators with border styling
- Examples: `.badge` used in stats, product, blog sections
- Pattern: Icon + text with border and rounded background
- Purpose: Contained content blocks in grid layouts
- Examples: `.feature-card` (stats section), `.blog-card` (blog grid)
- Pattern: Flex container with icon/image, content, consistent padding and border-radius
- Purpose: Image scrolling effect linked to viewport position
- Examples: `.parallax-image` in features sections
- Pattern: Image wrapper with fixed height, JavaScript calculates offset based on viewport position
## Entry Points
- Location: `index.html`
- Triggers: Browser load, user navigation
- Responsibilities: Define page structure, semantic markup, load CSS and JS
- Location: `script.js` (last line of body in `index.html` line 336)
- Triggers: DOM loaded
- Responsibilities: Set up event listeners, initialize observers, attach scroll handlers
- Location: `styles.css` loaded in `<head>` (line 10 of `index.html`)
- Triggers: HTML parsing
- Responsibilities: Define design tokens, apply reset styles, render initial state
## Error Handling
- No explicit error handling (relies on browser defaults)
- Intersection Observer with try-catch not used; assumes browser support
- External images fail silently (graceful image loading)
- Missing external fonts fall back to system font stack
- JavaScript features (parallax, accordion) are enhancements; core content visible without JS
## Cross-Cutting Concerns
- All color values use CSS custom properties (`--dark-1`, `--dark-2`, `--light-blue`, etc.)
- Typography scales defined by `.h1` through `.body-m` classes
- Spacing uses hardcoded px values (no spacing scale token)
- All transitions use consistent timing (0.2s - 0.6s, ease functions)
- Semantic HTML (`<nav>`, `<section>`, `<footer>`, `<button>`)
- Alt text on images
- Proper heading hierarchy (h1, h3, h5, h6)
- Focus-visible states not explicitly styled for keyboard navigation
- FAQ accordion icons have `currentColor` for visibility
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
