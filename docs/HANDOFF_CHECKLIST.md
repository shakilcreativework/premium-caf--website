# Technical Handoff & Release Verification Checklist

**Document Version:** 1.0  
**Project:** Aurel & Bean — Premium Café Website  
**Assignment:** Aravex Tech Studio — Frontend Learning & R&D  
**Document Owner:** Developer  
**Status:** Verification Complete — Ready for Manager Handoff  

---

## 1. System Architecture & Technology Stack Summary

```
+----------------------------------------------------------------------------------------------------+
| Architecture & Technology Stack Overview                                                           |
+--------------------------+-----------------------+-------------------------------------------------+
| Architectural Layer      | Technology / Standard | Production Role & Responsibility                |
+--------------------------+-----------------------+-------------------------------------------------+
| Web Framework            | Next.js 16.4.6        | App Router, Turbopack, SSG Static Pre-rendering |
| Component Primitives     | React 19.3.0          | React Server Components with Client Islands     |
| Language & Typing        | TypeScript 5.x        | Strict type checking, zero any types            |
| Styling Framework        | Tailwind CSS 4.3.3    | Modern CSS tokens, utility-first design         |
| Utility Merging          | clsx & tailwind-merge | Conditional class combining in cn()             |
| Local Data Layer         | TypeScript Models     | Static typed menu dataset (src/data/menu.ts)    |
| Typography Pipeline      | next/font/google      | Self-hosted Fraunces & Manrope font assets      |
| Security Hardening       | HTTP Response Headers | 4 defense-in-depth headers in next.config.ts    |
+--------------------------+-----------------------+-------------------------------------------------+
```

### Key Architectural Boundaries:
- **100% Frontend Only:** Zero custom Express servers, Next.js API routes, or database engines.
- **Server Component Dominance:** Layout, metadata, and static content sections (`Hero`, `ProductCard`, `About`, `Contact`, `Footer`) ship zero client JavaScript.
- **Client Islands Isolated:** Client hydration is strictly restricted to interactive controls (`NavbarShell`, `MobileNav`, `ThemeToggle`, `MenuSection`, `CategoryFilter`, `EmptyState`).
- **Separation of Concerns:** `ProductCard.tsx` renders as an informational `<article>`. Dynamic filtering interactivity is owned by `CategoryFilter.tsx`.

---

## 2. Automated Technical Verification Evidence

All automated verification commands were executed and verified clean:

```
+----------------------------------------------------------------------------------------------------+
| Automated Technical Verification Summary                                                           |
+----------------------+----------------------------------------------+-----------+------------------+
| Command              | Scope                                        | Exit Code | Output Evidence  |
+----------------------+----------------------------------------------+-----------+------------------+
| npm test             | Node.js native test runner on all *.test.mjs | Exit 0    | 33/33 passed     |
|                      | (17 dataset + 7 price + 9 menu interaction)  |           | (199ms)          |
+----------------------+----------------------------------------------+-----------+------------------+
| npx tsc --noEmit     | Strict TypeScript type-check across project  | Exit 0    | 0 type errors    |
|                      |                                              |           | (2.2s)           |
+----------------------+----------------------------------------------+-----------+------------------+
| npm run lint         | ESLint 9 + eslint-config-next 16.4.6         | Exit 0    | 0 warnings       |
|                      |                                              |           | 0 errors         |
+----------------------+----------------------------------------------+-----------+------------------+
| npm run build        | Next.js 16.4.6 Turbopack static compilation  | Exit 0    | Compiled 536ms   |
|                      | SSG static page generation (4/4 pages)       |           | SSG 1149ms       |
+----------------------+----------------------------------------------+-----------+------------------+
| npm audit            | Non-mutating dependency vulnerability scan   | Exit 0    | 0 vulnerabilities|
|                      | (358 packages direct & transitive)           |           |                  |
+----------------------+----------------------------------------------+-----------+------------------+
```

### Live HTTP Response Header Delivery (Verified via `next start` on port 3001):
```http
STATUS: 200 OK
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
X-Frame-Options: SAMEORIGIN
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## 3. Manual Browser Verification Checklist

Before final demonstration, the developer should review these verification checkpoints:

### Hero & 3D Visual Presentation
- [ ] Sole page `<h1>` (*"Crafted with care. Savored slowly."*) displays prominently.
- [ ] Primary CTA (`"Explore Menu"`) jumps smoothly to `#menu`.
- [ ] Secondary CTA (`"Our Story"`) jumps smoothly to `#about`.
- [ ] Hovering the coffee cup artwork produces a $6^\circ / -8^\circ$ 3D tilt with $+16\text{px}$ Z-depth parallax.
- [ ] Tabletop shadow system remains grounded at the saucer base.
- [ ] Hover release transitions smoothly back to resting position over 700ms.

### Scroll-Aware Navbar
- [ ] At page top ($y \le 40\text{px}$), header displays semi-translucent (`bg-background/60`, `backdrop-blur-xs`).
- [ ] Scrolling past $40\text{px}$ smoothly elevates the header to frosted density (`bg-background/90`, `backdrop-blur-md`, `shadow-xs`).
- [ ] Scrolling back to summit restores resting styling.
- [ ] Direct page reload at `#menu` or `#contact` immediately mounts in elevated state.
- [ ] Header height is locked (`h-16 sm:h-20`), ensuring zero layout shift (CLS).

### Interactive Menu & Product Cards
- [ ] Filter pills render active state on `"All"` by default, displaying 12 offerings.
- [ ] Selecting `"Espresso"`, `"Brewed"`, `"Cold Craft"`, or `"Pastries"` filters grid to exactly 3 items.
- [ ] Live polite region announces filtered count (e.g. *"Showing 3 offerings in Espresso"*).
- [ ] ProductCard descriptions wrap naturally without text clipping or ellipsis cut-offs.
- [ ] Prices format cleanly with USD currency symbol (e.g. `$4.85`).
- [ ] Terroir metadata (`Huila, Colombia`) and specialty tags (`Signature`, `House Blend`) render cleanly.

### Theme Persistence & Accessibility
- [ ] Theme switcher toggles between Light, Dark, and System modes.
- [ ] Text contrast meets WCAG 2.1 AA/AAA across both palettes.
- [ ] Hard page refresh in Dark mode produces **zero flash of unstyled content (FOUC)**.
- [ ] `Tab` navigation displays visible focus rings (`focus-visible:ring-focus-ring`) with 2px offset.
- [ ] Skip link (`"Skip to main content"`) is the first focused element.

### Mobile Navigation Drawer
- [ ] Viewport resized to $< 768\text{px}$ displays hamburger button; desktop links hide.
- [ ] Tapping hamburger opens full-height drawer with dark backdrop overlay.
- [ ] `Tab` focus is trapped inside the drawer.
- [ ] Pressing `Escape` closes the drawer and restores focus to the trigger button.
- [ ] In mobile landscape ($568\times 320\text{px}$), drawer content scrolls cleanly via `overflow-y-auto`.

### Reduced Motion Safeguards
- [ ] Emulating `prefers-reduced-motion: reduce` stops 3D card tilt, Z-depth translation, and steam pulsing.
- [ ] Header scroll elevation toggles instantly without animated duration (`motion-reduce:transition-none`).

---

## 4. Hosting & Production Deployment Prerequisites

The application is completely ready for local demonstration and static/Node.js deployment. When publishing to a public cloud provider (e.g. Vercel, Netlify, Cloudflare Pages), complete the following steps:

```
+----------------------------------------------------------------------------------------------------+
| Production Deployment Prerequisites Matrix                                                         |
+--------------------------+---------------------+---------------------------------------------------+
| Item / Step              | Current State       | Action Required When Deploying                    |
+--------------------------+---------------------+---------------------------------------------------+
| Hosting Provider         | Local Runtime       | Select hosting provider (Vercel recommended).     |
| Production Domain / URL  | Unassigned          | Confirm deployment domain (e.g. aurel-bean.vercel.app)|
| metadataBase in Layout   | Omitted (Safe)      | Add metadataBase: new URL('https://<domain>')     |
| Canonical URL            | Pending Domain      | Automatically derived once metadataBase is set.   |
| robots.ts & sitemap.ts   | Deferred (Safe)     | Author standard route handlers pointing to domain.|
| Social Preview Banner    | Omitted (Safe)      | (Optional) Add 1200x630px image in public/images/ |
| Edge Response Headers    | Configured in code  | Vercel/Node honors next.config.ts automatically;   |
|                          |                     | Cloudflare/Netlify static export requires _headers.|
+--------------------------+---------------------+---------------------------------------------------+
```

---

## 5. Demonstration Integrity & Ethical Disclosures

The website maintains complete ethical transparency as an illustrative portfolio demonstration:
- **Café Concept:** *Aurel & Bean* is an artisanal demonstration brand designed to showcase frontend craftsmanship.
- **Menu Offerings:** The 12 products, prices, and origins represent local typed mock data. They do not imply real-time inventory, live stock, or commercial checkout.
- **Visiting Information:** The address (*74 Artisan Way*) and ritual hours represent concept demonstration data, explicitly labeled in `Contact.tsx` and `Footer.tsx`.
- **Zero Backend Dependencies:** No external reservation APIs, database endpoints, or customer authentication services are required or deployed.

---

## 6. Project Documentation & Deliverables Inventory

All required project documentation is maintained in the repository:

| Document | Purpose | File Location |
|---|---|---|
| **Product Requirements (PRD)** | Requirements baseline, provenance, NFRs | [`docs/PRD.md`](docs/PRD.md) |
| **High-Level Design (HLD)** | Architecture boundaries, rendering phases, C4 diagram | [`docs/HLD.md`](docs/HLD.md) |
| **Low-Level Design (LLD)** | Component contracts, state flows, props interfaces | [`docs/LLD.md`](docs/LLD.md) |
| **Development Roadmap** | 13 learning tasks, milestones, and gates | [`docs/ROADMAP.md`](docs/ROADMAP.md) |
| **Demonstration Guide** | 7-stage live manager walkthrough script | [`docs/DEMO_GUIDE.md`](docs/DEMO_GUIDE.md) |
| **Handoff Checklist** | Technical handoff, QA checks, deployment prereqs | [`docs/HANDOFF_CHECKLIST.md`](docs/HANDOFF_CHECKLIST.md) |
| **Project README** | Setup instructions, architecture overview | [`README.md`](README.md) |

---

## 7. Next Steps for Developer

1. **Conduct Local Rehearsal:** Run `npm run build && npm run start` and rehearse the 7-stage demonstration script in `docs/DEMO_GUIDE.md`.
2. **Record LinkedIn Demonstration (FR-10):** Capture a 60–90 second screen recording of the key features and draft the LinkedIn post mentioning Aravex Tech Studio.
3. **Present to Technical Manager:** Deliver the live walkthrough using the structured script and handoff checklist.
