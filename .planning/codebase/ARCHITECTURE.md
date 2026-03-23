# Architecture

**Analysis Date:** 2026-03-23

## Pattern Overview

**Overall:** Static Marketing Website (Single-Page Application)

**Key Characteristics:**
- Vanilla HTML, CSS, and JavaScript (no framework dependencies)
- Semantic HTML structure with progressive enhancement
- CSS-based design system with custom properties (design tokens)
- Event-driven JavaScript for interactivity and scroll effects
- No build process or bundling required

## Layers

**Presentation Layer:**
- Purpose: Render UI components and visual elements
- Location: `index.html`, `styles.css`
- Contains: HTML semantic structure, section-based components, CSS styling
- Depends on: Design tokens (CSS custom properties)
- Used by: Browser rendering engine, JavaScript event handlers

**Styling Layer:**
- Purpose: Consistent visual design and responsive layout
- Location: `styles.css` (794 lines)
- Contains: Design tokens (colors, typography), layout utilities, component styles, animations
- Depends on: Inter font from Google Fonts
- Used by: All HTML elements

**Interaction Layer:**
- Purpose: Handle dynamic user interactions and scroll effects
- Location: `script.js` (62 lines)
- Contains: FAQ accordion toggle, navbar scroll effect, parallax scrolling, fade-in observer
- Depends on: DOM elements with specific class names
- Used by: Event listeners on user interactions and scroll events

## Data Flow

**Page Load → Render:**

1. Browser parses `index.html`
2. Loads external stylesheet `styles.css`
3. Applies design tokens and base styles
4. Renders semantic HTML structure
5. Defers script execution to end of body
6. `script.js` initializes event listeners

**User Interaction → State Update:**

1. User clicks `.faq-question` button
2. Event listener in `script.js` toggles `.active` class on parent `.faq-item`
3. CSS transition on `.faq-answer` animates reveal/hide
4. No state management needed (DOM class-based state)

**Scroll Event → Visual Updates:**

1. User scrolls page
2. Scroll event listener on `window` triggers three effects:
   - Navbar border fade-in when scrollY > 50px
   - Parallax image offset calculation based on viewport position
   - Intersection Observer detects when sections enter viewport
3. CSS transforms applied to update visual state

**State Management:**
- No centralized state management
- State exists in DOM (`classList`, inline styles, scroll position)
- Component state is ephemeral (not persisted)

## Key Abstractions

**Section Component:**
- Purpose: Reusable page section pattern with consistent spacing
- Examples: `.hero-section`, `.about-section`, `.features-section`, `.stats-section`, `.product-section`, `.faq-section`, `.blog-section`, `.cta-section`, `.footer`
- Pattern: Container div with semantic `<section>` tag, inner `.container` for max-width constraint and padding

**Button Component:**
- Purpose: Consistent call-to-action styling with variants
- Examples: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-sm`, `.btn-lg`
- Pattern: Base `.btn` class with size modifiers (`-sm`, `-lg`) and color modifiers (`-primary`, `-secondary`)

**Badge Component:**
- Purpose: Label/category indicators with border styling
- Examples: `.badge` used in stats, product, blog sections
- Pattern: Icon + text with border and rounded background

**Card Component:**
- Purpose: Contained content blocks in grid layouts
- Examples: `.feature-card` (stats section), `.blog-card` (blog grid)
- Pattern: Flex container with icon/image, content, consistent padding and border-radius

**Parallax Container:**
- Purpose: Image scrolling effect linked to viewport position
- Examples: `.parallax-image` in features sections
- Pattern: Image wrapper with fixed height, JavaScript calculates offset based on viewport position

## Entry Points

**HTML Document Root:**
- Location: `index.html`
- Triggers: Browser load, user navigation
- Responsibilities: Define page structure, semantic markup, load CSS and JS

**JavaScript Initialization:**
- Location: `script.js` (last line of body in `index.html` line 336)
- Triggers: DOM loaded
- Responsibilities: Set up event listeners, initialize observers, attach scroll handlers

**Styling Initialization:**
- Location: `styles.css` loaded in `<head>` (line 10 of `index.html`)
- Triggers: HTML parsing
- Responsibilities: Define design tokens, apply reset styles, render initial state

## Error Handling

**Strategy:** Graceful degradation

**Patterns:**
- No explicit error handling (relies on browser defaults)
- Intersection Observer with try-catch not used; assumes browser support
- External images fail silently (graceful image loading)
- Missing external fonts fall back to system font stack
- JavaScript features (parallax, accordion) are enhancements; core content visible without JS

## Cross-Cutting Concerns

**Logging:** No logging implemented

**Validation:** No form validation (no forms present)

**Authentication:** Not applicable (static content)

**Styling Consistency:**
- All color values use CSS custom properties (`--dark-1`, `--dark-2`, `--light-blue`, etc.)
- Typography scales defined by `.h1` through `.body-m` classes
- Spacing uses hardcoded px values (no spacing scale token)
- All transitions use consistent timing (0.2s - 0.6s, ease functions)

**Accessibility Considerations:**
- Semantic HTML (`<nav>`, `<section>`, `<footer>`, `<button>`)
- Alt text on images
- Proper heading hierarchy (h1, h3, h5, h6)
- Focus-visible states not explicitly styled for keyboard navigation
- FAQ accordion icons have `currentColor` for visibility

---

*Architecture analysis: 2026-03-23*
