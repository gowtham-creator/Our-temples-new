# External Integrations

**Analysis Date:** 2026-03-23

## APIs & External Services

**Typography & Fonts:**
- Google Fonts API - Provides Inter typeface
  - Integration: CDN link in `index.html` lines 7-9
  - URL: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`
  - Auth: None (public CDN)

**Media & Asset Hosting:**
- Framer (framerusercontent.com) - Hosts product images and graphics
  - Integration: Image `src` attributes in `index.html`
  - Used in: Hero section (line 41), About section (lines 51, 56), Features sections (lines 77, 86), Product carousel (lines 163, 166, 169), Blog section (lines 249, 258, 267)
  - Auth: None (public CDN)

**Social Media:**
- X (Twitter) - Link in footer
  - URL: `https://www.x.com`
  - Integration: Footer social link in `index.html` line 325
- Instagram - Link in footer
  - URL: `https://www.instagram.com`
  - Integration: Footer social link in `index.html` line 328

## Data Storage

**Databases:**
- Not applicable - no backend database detected

**File Storage:**
- Cloud-based: Framer CDN for images
- Local: No static assets committed (images external)

**Caching:**
- Browser caching (via HTTP headers on production server)
- No explicit caching library or strategy detected

## Authentication & Identity

**Auth Provider:**
- Not applicable - no user authentication system detected

**Implementation:**
- Static public site with no protected content
- No login/session management

## Monitoring & Observability

**Error Tracking:**
- Not detected

**Logs:**
- Browser console only
- No server-side logging infrastructure

**Analytics:**
- Not detected - no Google Analytics, Mixpanel, or similar services integrated

## CI/CD & Deployment

**Hosting:**
- Not detected in codebase - deployment target TBD
- Suitable for: Static site hosting (Vercel, Netlify, GitHub Pages, AWS S3, Cloudflare Pages, etc.)

**CI Pipeline:**
- Not configured in codebase

## Environment Configuration

**Required env vars:**
- None - site requires no environment configuration

**Secrets location:**
- Not applicable - no secrets needed

## Webhooks & Callbacks

**Incoming:**
- Not detected - no backend endpoints

**Outgoing:**
- Not detected - no external API calls from client-side code

## Call-to-Action Links

**Commerce:**
- "Buy now" buttons present throughout site (`index.html` lines 27, 38, 73, 96, 283)
- Href: `#` (placeholder - not configured)
- Requires: Integration with e-commerce platform (Shopify, WooCommerce, custom checkout, etc.)

**Navigation & Contact:**
- Contact form link: `/contact` (line 307) - not implemented
- Blog link: `/blogs` (line 306) - not implemented
- Terms of Service: `/legal/terms-of-service` (line 313) - not implemented
- Privacy Policy: `/legal/privacy-policy` (line 314) - not implemented

## Third-Party Services Absent

**Not integrated (but commonly used for similar sites):**
- Email service provider (Mailchimp, ConvertKit, etc.)
- Payment processor (Stripe, PayPal)
- CRM system
- Chat/support widget
- CDN (beyond Framer for images)
- Email verification service

---

*Integration audit: 2026-03-23*
