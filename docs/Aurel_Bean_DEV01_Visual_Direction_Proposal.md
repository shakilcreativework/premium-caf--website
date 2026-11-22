# Aurel & Bean — DEV-01 Visual Identity & UI/UX Direction (Proposal)

**Status:** Proposed for independent developer review; not an approved final design.
**Project:** Premium Café Website (frontend-only internship learning assignment)
**Source documents:** `docs/PRD.md`, `docs/HLD.md`, `docs/LLD.md`, `docs/ROADMAP.md`
**Constraint:** Developer independently authors the final website code and decides the final visual design. AI can explain, research, critique, and verify developer-authored work.

## 1. Brand Direction
- **Working name:** Aurel & Bean (check name, domain, and trademark availability before public use)
- **Tagline:** Crafted with care. Savored slowly.
- **Personality:** Warm luxury, modern artisan, understated editorial
- **Design keywords:** Refined, tactile, inviting, confident
- **Target impression:** Premium coffee craftsmanship without visual clutter
- **Imagery:** Natural café photography, tactile ceramics, espresso crema, warm directional light, clean isolated coffee product photography where layering requires it

## 2. Semantic Color Tokens

| Token | Light | Dark | Intended use |
|---|---|---|---|
| `background` | `#FAF7F2` | `#171411` | Main page background |
| `surface` | `#FFFFFF` | `#26201B` | Cards, navigation surfaces |
| `text-primary` | `#2B201B` | `#F5EDE2` | Headings and body text |
| `text-secondary` | `#62564D` | `#C2B3A4` | Descriptions and labels |
| `accent` | `#744221` | `#D7A36B` | CTAs, highlights and active controls |
| `on-accent` | `#FFFFFF` | `#20150F` | Text on accent background |
| `surface-soft` | `#EAD7BD` | `#46382E` | Tinted decorative areas |

Verified representative contrast ratios (WCAG formula):
- Light primary text on background: 14.83:1.
- Light secondary text on background: 6.64:1.
- Dark primary text on background: 15.81:1.
- Dark secondary text on background: 8.98:1.
- Light CTA text on accent: 8.26:1.
- Dark CTA text on accent: 7.95:1.

These checks do not replace full component-state accessibility validation. Add suitable border, focus, selection, disabled, and error semantic tokens after inspecting actual UI compositions. Never rely on color alone for state.

## 3. Typography
- **Display:** Fraunces variable serif for hero and section headlines.
- **Body/UI:** Manrope sans serif for paragraphs, navigation, buttons, product labels, metadata.
- Keep body copy readable (often around 16px) and avoid shrinking essential copy on narrow screens.
- Let heading type scale respond to available content width, text wrapping, line-height and the actual composition; `clamp()` is an option, not a compulsory formula.
- Preserve text resizing/zoom and avoid fixed-height text containers.
- Use Next.js font optimization if compatible; verify font availability and loading behavior.

## 4. Theme Behavior
- Support Light, Dark, and optionally System preference; System can be the initial default if approved.
- Persist a user theme selection only if the developer chooses a persistence mechanism; no backend required.
- Avoid flash of wrong theme at initial load where practical.
- Each theme must have complete surface, text, action, icon, border and focus styling.
- Theme toggling must be usable by mouse, touch, keyboard and assistive technology.
- Do not equate switching themes with changing layout dimensions.
- Keep the same brand identity across both themes while allowing image overlays and shadows to differ.

## 5. Component Design Direction (Not Final Layout)
- **Header:** Disciplined brand hierarchy, readable navigation, unobtrusive theme control, accessible mobile menu.
- **Hero:** Strong editorial heading, product-led visual, one clear primary navigation CTA, optional secondary link. No predetermined full-width button rule.
- **Cards:** Strong product name and price visibility; description may be summarized only if full information remains accessible. Match click behavior to meaningful functionality.
- **Menu filtering:** Responsive category controls; consider accessible pressed buttons and count announcements if filters are implemented.
- **Footer:** Calm typographic hierarchy and clear informational links.
- **Theme toggle:** Meaningful accessible label and visible focus; avoid hover-only functionality.

## 6. Context-Aware Responsive Engineering
Assess each component's content, purpose, parent width, horizontal/vertical available space, touch or pointer input, nearby components and visual balance before selecting dimensions. No universal `px`, `py`, text size or full-width button behavior.

Review at representative CSS viewport widths: 320, 360, 375, 390, 430, 640, 768, 1024, 1280, 1440, 1920, plus relevant intermediate widths and mobile/tablet landscape. These are verification checkpoints, not prescribed breakpoints.

Check: heading wraps, line heights, CTA label clipping, actual control hit area, navigation conflicts, image cropping, product grid layout, horizontal scrolling, dark/light parity, focus states, 200% zoom, and reduced motion. Aim for comfortable mobile touch controls (~44×44 CSS px where practical); do not inflate every badge or decorative element.

## 7. Motion and Product Presentation
- Start with CSS perspective and layered visuals as a lightweight **3D-style effect**, not a claim of real 3D geometry.
- Favor subtle transform/opacity animation where justified; measure real device performance rather than promising fixed FPS.
- Include one meaningful scroll-related visual effect to meet the PRD, with reduced-motion fallback.
- Avoid hiding essential content until JavaScript runs; ensure no-scroll or reduced-motion users see all key information.
- Never require `Three.js`, Blender, Spline or a heavy animation runtime unless developer-approved.

## 8. Asset Selection Plan
| Asset | Suggested subject | Notes |
|---|---|---|
| Hero cup | Single refined ceramic coffee cup with visible drink texture | Transparent PNG/WebP only if compositing/layering needs alpha |
| Supporting accents | A few beans or subtle steam silhouette | Optional and should not clutter hero |
| Product photos | Espresso, flat white, pastry, cold brew | Consistent lighting and crop; normal WebP/JPG often fine |
| Atmosphere | Warm café interior / barista craft | Editorial photograph; no transparency needed |
| Brand elements | Simple wordmark/icon designed by developer | Avoid unlicensed marks or copying other café identities |

Sources to review individually: Unsplash (https://unsplash.com/license), Pexels (https://www.pexels.com/license/), Google Fonts (https://fonts.google.com/). Verify the specific asset license, recognizable people, logos, trademarks, and restrictions before publication. Record source URL, creator and terms as appropriate. Do not present example café product names/prices as real offerings.

## 9. Accessibility and QA
- Text contrast: aim for WCAG AA 4.5:1 normal text; 3:1 large text, including actual states/images.
- Visible keyboard focus, semantic links and buttons, accessible navigation, reduced-motion support and sensible reading order.
- Verify theme toggle, filtered menu and mobile navigation across input methods.
- Perform task-specific mobile/tablet/desktop/landscape checks throughout component development; reserve final phase for regression QA.

## 10. Developer Decisions / Approval Gate
Before calling DEV-01 complete, developer independently decides:
- [ ] Brand name / tagline (check legal and domain availability if published)
- [ ] Light and dark color palette and any adaptations
- [ ] Font pairing and typographic direction
- [ ] Asset choices and license records
- [ ] Theme default and user preference behavior
- [ ] 3D-style composition and interaction approach
- [ ] Component visuals and navigation direction

**Agent behavior:** Explain, critique, and provide verification steps; do not implement final website code or final visual design without reconciling the manager's independent-work restriction. Do not modify `docs/PRD.md`, `docs/HLD.md`, `docs/LLD.md`, or `docs/ROADMAP.md` merely because this proposed guide exists. No Git operations. Obtain developer approval before implementing or editing project files.

## 11. Learning & Verification Handoff (Every Related Task)
Report: what was independently authored, requirement coverage, files inspected, responsive context decisions (button text/padding/width/gaps/line-height), light/dark state verification, accessibility, checks actually executed, manual steps with expected results, 3–5 learning questions, one small independent exercise, limitations, approval gate.

## 12. Reference Links
- WCAG 2.2: https://www.w3.org/TR/wcag/
- Unsplash license: https://unsplash.com/license
- Pexels license: https://www.pexels.com/license/
- Google Fonts: https://fonts.google.com/
