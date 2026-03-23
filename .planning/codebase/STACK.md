# Technology Stack

**Analysis Date:** 2026-03-23

## Languages

**Primary:**
- HTML5 - Markup language for site structure in `index.html`
- CSS3 - Styling and layout in `styles.css`
- JavaScript (Vanilla ES6+) - Client-side interactivity in `script.js`

**Secondary:**
- None detected

## Runtime

**Environment:**
- Browser-based (client-side only)
- No server-side runtime detected

**Package Manager:**
- Not applicable - no package.json or dependency manager detected

## Frameworks

**Core:**
- No framework used - static HTML/CSS/JS site

**Styling:**
- Custom CSS with CSS custom properties (variables) - Design tokens defined in `:root`
- No CSS framework detected (no Bootstrap, Tailwind, etc.)

**Interactivity:**
- Vanilla JavaScript (no libraries/frameworks)
- Intersection Observer API for fade-in animations
- No jQuery, React, Vue, or other JS framework

**Build/Dev:**
- No build tool detected (webpack, Vite, Parcel, etc.)
- No transpilation required

## Key Dependencies

**Critical:**
- None - site is entirely self-contained

**External Resources (Non-packaged):**
- Google Fonts (Inter typeface) - Loaded via CDN from `https://fonts.googleapis.com`
- Framer (image hosting) - Images from `https://framerusercontent.com/` for product photography

## Configuration

**Environment:**
- No environment configuration file detected
- No `.env` file present
- No configuration management system

**Build:**
- No build configuration required
- Direct file serving (no compilation step)

## Platform Requirements

**Development:**
- Any text editor (VS Code, Sublime, etc.)
- Browser for testing (Chrome, Firefox, Safari, Edge)
- Basic HTTP server for local development (optional, for testing relative paths)

**Production:**
- Static file hosting (any web server: Apache, Nginx, Vercel, GitHub Pages, AWS S3, etc.)
- No server-side processing required
- No runtime environment needed

## Asset Pipeline

**Images:**
- Currently external (Framer CDN for product images)
- No local image assets in codebase
- SVG icons embedded inline in HTML (vector icons from Phosphor Icons style)

**Fonts:**
- Google Fonts API: Inter font family with weights 400, 500, 600, 700
- Fallback fonts: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, sans-serif

## Browser Compatibility

**Target Browsers:**
- Modern browsers with ES6 support
- CSS Grid and Flexbox required
- Intersection Observer API supported (2016+)
- CSS custom properties (--variables) required

**Polyfills:**
- None detected or required for modern browsers

---

*Stack analysis: 2026-03-23*
