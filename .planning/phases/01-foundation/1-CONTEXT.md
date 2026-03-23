# Phase 1: Foundation - Context

**Gathered:** 2026-03-23
**Status:** Ready for planning

<domain>
## Phase Boundary

Next.js project scaffold with design tokens, typography, fonts, image configuration, and global styles. After this phase, `npm run dev` serves a working app with all Framer design tokens available and images loading from Framer CDN.

</domain>

<decisions>
## Implementation Decisions

### Project Scaffold
- **D-01:** Next.js 15 with App Router, TypeScript strict mode, `src/` directory structure
- **D-02:** Use `npx create-next-app@latest` with `--typescript --app --src-dir`
- **D-03:** Install `motion` (formerly framer-motion) as the only additional dependency — needed for Phase 4 but install now to avoid mid-project dependency changes

### Styling Approach
- **D-04:** CSS Modules for component styles, `globals.css` for design tokens and reset
- **D-05:** NO Tailwind — the Framer design uses exact pixel values that map directly to CSS custom properties. Tailwind adds translation overhead with zero benefit.
- **D-06:** All 12 Framer color styles mapped as CSS custom properties (`--dark-1` through `--dark-5`, `--white`, `--black`, `--light-blue`, `--neutral-*`)
- **D-07:** All 9 Framer text styles defined as reusable CSS classes (`.h1` through `.h6`, `.body-xl`, `.body-l`, `.body-m`)

### Typography
- **D-08:** Inter font via `next/font/google` with weights 400, 500, 600, 700
- **D-09:** Font variable applied to `<html>` element via `className` — available globally
- **D-10:** System font fallback stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Image Configuration
- **D-11:** `next.config.ts` — add `framerusercontent.com` to `images.remotePatterns`
- **D-12:** Create a test page/component verifying next/image loads a Framer CDN image

### Design Fidelity (Cross-Phase)
- **D-13:** EVERY spacing value, color, font-size, border-radius, and layout property must match the Framer design file exactly. The Framer MCP is connected — use `getNodeXml` to verify values when in doubt.
- **D-14:** Animations must be smooth and polished — Motion library for all scroll, fade, parallax, and interactive animations (Phase 4, but foundation sets this up)

### Claude's Discretion
- ESLint/Prettier configuration details
- Exact CSS reset approach (normalize vs custom)
- Test page layout for verifying tokens

</decisions>

<specifics>
## Specific Ideas

- User explicitly wants "good animations and everything same as there in design file"
- The Framer design file is connected via Framer MCP — all design values can be verified programmatically
- Existing static HTML prototype in project root has the correct CSS custom properties already defined — these should be carried over exactly

</specifics>

<canonical_refs>
## Canonical References

### Design source
- Framer MCP `getProjectXml` — Returns all color styles, text styles, and project structure
- Framer MCP `getNodeXml(nodeId)` — Returns exact values for any node (spacing, colors, layout)

### Existing prototype
- `styles.css` `:root` block — Current CSS custom properties (verified against Framer)
- `styles.css` typography classes — Current text style definitions

### Research
- `.planning/research/STACK.md` — Stack decisions (Next.js 15, CSS Modules, Motion, next/font)
- `.planning/research/PITFALLS.md` §4 — Typography mismatch warning (SF UI Display vs Inter)
- `.planning/research/PITFALLS.md` §5 — next/image remote patterns configuration

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `styles.css` `:root` block — All CSS custom properties already defined and verified against Framer. Copy these directly into `globals.css`.
- `styles.css` typography classes — `.h1` through `.body-m` classes already match Framer text styles. Port these to `globals.css`.

### Established Patterns
- Design token naming: `--dark-1`, `--dark-2`, etc. — maintain this convention
- Typography class naming: `.h1`, `.h2`, `.body-l`, `.body-m` — maintain this convention

### Integration Points
- `globals.css` is the single source of truth for design tokens
- All future components will import from CSS Modules but reference global tokens via `var(--token-name)`

</code_context>

<deferred>
## Deferred Ideas

- "Good animations" — captured as D-14, actual implementation is Phase 4
- Mobile/responsive — explicitly out of scope for v1

</deferred>

---

*Phase: 01-foundation*
*Context gathered: 2026-03-23*
