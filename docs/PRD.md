# Premium Café Website — Product Requirements Document (PRD)

**Document version:** 2.0  
**Status:** Revised planning baseline — awaiting developer approval  
**Project:** Premium Café Website  
**Assignment:** Aravex Tech Studio — Learning & R&D  
**Target submission:** 22 November 2026, 10:00 PM Pakistan Standard Time (11:00 PM Bangladesh Standard Time), as communicated in the assignment  
**Repository:** New standalone repository; **not** `aravex-attendance-timetrack`  
**Document owner:** Developer  
**Scope:** Frontend-only internship learning assignment  
**Revision:** Preserves v1.0 manager requirements; adds developer learning workflow, context-aware responsive engineering and verification gates  

## 1. Purpose

Design and independently implement a premium, responsive café website as a standalone learning assignment. The project must demonstrate modern frontend architecture, attractive product presentation, reusable components, polished interactions, and good responsive behavior.

The assignment also involves learning High-Level Design (HLD) and Low-Level Design (LLD), and submitting architecture diagrams that accurately represent the project. The developer must write the website code and make the visual design decisions independently, following the manager's instruction not to generate the website code or design with AI.

This PRD is a planning and verification reference. It is **not** permission for an AI coding agent to generate the website or its final design.

## 2. Requirements provenance and decision rules

This document separates three categories:

- **[MANAGER]** — explicitly identified in the manager's assignment as relayed in the project conversation.
- **[DEVELOPER]** — technical choices explicitly selected by the developer.
- **[PROPOSED]** — implementation suggestions, not mandatory requirements; confirm or adjust during independent development.
- **[PROCESS]** — developer-requested learning, review, responsive-engineering, and approval procedures; these do not create new manager product requirements.

When a detail is not stated by the manager, do not describe it as a manager requirement. Do not infer payment processing, order submission, reservation processing, account registration, or an administrative backend from the word “café.”

## 3. Product goals and intended audience

### 3.1 Goals

1. **[MANAGER]** Build a premium-looking, working café website.
2. **[MANAGER]** Demonstrate a modern hero presentation, 3D coffee/product visuals, interactive menu cards, smooth transitions, scroll-related effects, elegant typography, and responsive layouts.
3. **[MANAGER]** Provide HLD and LLD diagrams along with the working website and source code.
4. **[MANAGER]** Prepare the requested LinkedIn demonstration video or screenshots mentioning Aravex Tech Studio, subject to company/publication guidance.
5. **[DEVELOPER]** Use Next.js App Router, TypeScript, Tailwind CSS, `clsx`, and `tailwind-merge`.
6. **[PROPOSED]** Keep the implementation narrow enough to complete and explain confidently by the submission deadline.
7. **[PROCESS]** Require the developer to understand and manually verify each meaningful completed task.
8. **[PROCESS]** Evaluate responsive decisions per component and content context, rather than imposing a universal button, type or padding formula.

### 3.2 Audience

- **[PROPOSED]** Potential café visitors browsing coffee and menu content.
- **[PROPOSED]** Mobile and desktop visitors viewing the café's brand and atmosphere.
- **[MANAGER]** Reviewers evaluating design, independent implementation, architecture knowledge, and frontend craftsmanship.

## 4. Scope

### 4.1 In scope

| ID | Requirement | Origin | Acceptance evidence |
|---|---|---|---|
| FR-01 | Modern, premium hero section | MANAGER | Clear visual hierarchy, deliberate composition, and responsive presentation |
| FR-02 | 3D coffee cups or product elements | MANAGER | Observable 3D or 3D-style visual effect; remains usable without motion |
| FR-03 | Interactive menu cards | MANAGER | Pointer/keyboard-accessible interaction with a meaningful state or effect |
| FR-04 | Smooth transitions | MANAGER | Transitions are intentional, do not block use, and avoid distracting motion |
| FR-05 | Scroll-based effects | MANAGER | At least one functional, controlled scroll-linked/reveal effect |
| FR-06 | Elegant typography | MANAGER | Consistent type scale and readable contrast |
| FR-07 | Responsive layout | MANAGER | Usable at narrow mobile, tablet, desktop, and landscape widths |
| FR-08 | Working frontend and source code | MANAGER | Runs locally, builds successfully, and can be reviewed |
| FR-09 | HLD and LLD diagrams | MANAGER | Diagrams match the actual implementation and explain its structure |
| FR-10 | LinkedIn demonstration | MANAGER | Requested video/screenshots and mention, following manager's publication instructions |
| FR-11 | Next.js App Router and TypeScript | DEVELOPER | Project uses `src/app` and `.tsx`/TypeScript |
| FR-12 | Tailwind CSS, clsx, tailwind-merge | DEVELOPER | Styling utilities are configured and used where they add value |

**Scope and priority:** FR-01 through FR-09 are core assignment requirements; FR-10 is a submission/publication deliverable subject to manager guidance; FR-11 and FR-12 are developer stack choices. This interpretation is for planning only and does not override manager priorities.

### 4.2 Proposed page sections (not manager-mandated)

A concise, single-page café experience can contain:

1. Header and responsive navigation.
2. Hero with coffee visual and a primary call to action.
3. Featured beverages.
4. Menu with category controls and product cards.
5. About / café story.
6. Atmosphere or gallery.
7. Visit/contact information.
8. Footer.

A one-page layout is recommended for schedule control; separate routes are optional, not required. The developer decides the final structure independently. The eight sections above are suggestions, not eight mandatory features.

### 4.3 Out of scope unless separately assigned

- Authentication, authorization, customer accounts, or admin dashboards.
- Database provisioning or MongoDB schemas.
- Express API or Next.js API route handlers for production data.
- Checkout, online payment, ordering, inventory management, or reservation processing.
- Real-time product availability.
- External coffee APIs as a mandatory dependency.
- A new backend or changes to the Attendance & TimeTrack project.

External API integration is **optional**, not part of the confirmed café assignment. Prefer reliable locally authored product data for the required demonstration. If the developer later chooses an external API, document availability, fallback, and licensing separately before implementation.

## 5. User experience and interactions

### 5.1 Core visitor journey

1. Visitor opens the homepage.
2. Visitor sees the café hero and can navigate to the menu.
3. Visitor explores featured items and interactive product cards.
4. Visitor uses a menu category control if implemented.
5. Visitor can browse café story, imagery, and visit/contact information.
6. The experience remains functional on mobile and desktop.

### 5.2 Interactive behavior

- **Required:** Menu cards have an intentional, visible interaction (hover/focus/selection/details); choose the exact behavior independently.
- **Proposed:** Category filtering with an “All” category, no-results state, and clear selected state.
- **Required:** Responsive navigation, if navigation is included, must work with touch and keyboard.
- **Required:** Motion must not hide essential content or prevent interaction.
- **Proposed:** Avoid elaborate modal flows unless they materially improve the page and can be tested before submission.

## 6. Technical constraints and architecture choices

### 6.1 Chosen stack

- **Framework:** Next.js App Router.
- **Language:** TypeScript.
- **Styling:** Tailwind CSS v4, subject to the selected Next.js release and installed package compatibility.
- **Conditional classes:** `clsx`.
- **Tailwind utility conflict resolution:** `tailwind-merge`.
- **Animation baseline:** CSS transforms, transitions, keyframes, and supported scroll effects; add a runtime animation library only if independently justified.
- **Data:** Locally authored typed menu data for the initial assignment.
- **Hosting:** A suitable Next.js-compatible service, chosen by the developer.

Choose stable compatible package versions when initializing the project. Do not paste unreviewed version pins from tutorials.

### 6.2 Component architecture principles

- Use `src/app` for App Router pages, layouts, styles, and metadata.
- Use `src/components` for reusable layout/section/UI pieces.
- Use `src/data` and `src/types` for typed menu content and models, if needed.
- Use `src/lib` for small shared utilities only when justified.
- Prefer Server Components for static page composition; add Client Components only where state, events, or browser APIs require them.
- Avoid premature abstractions and unnecessary dependencies.
- Ensure the architecture diagrams describe implemented, not hypothetical, services.

### 6.3 Suggested data fields (optional model)

| Field | Type | Notes |
|---|---|---|
| `id` | `string` | Stable item identifier |
| `name` | `string` | Display name |
| `category` | `string` | Consistent category values |
| `description` | `string` | Concise product description |
| `price` | `number` | Use a clearly stated display currency if shown |
| `image` | `string` | Owned or properly licensed image path |
| `featured` | `boolean` | Optional highlight flag |

Product names, prices, images, and branding must be independently selected; do not present placeholder prices as real customer offerings.

## 7. HLD deliverable requirements

Create a diagram and a short written explanation showing:

1. Visitor/browser and Next.js application boundary.
2. Route/page layout and main frontend modules.
3. Local typed menu-data source and how components consume it.
4. Styling and animation concerns at a high level.
5. Build/deployment boundary.
6. What is **not** present: no mandatory Express service, MongoDB, payment service, or authentication service.

Use a simple C4-style container/component overview or equivalent. Clearly label any conceptual options as optional; do not draw them as deployed components.

## 8. LLD deliverable requirements

Create one component-level diagram and at least one interaction/sequence flow that match the code actually written:

- Example component tree: `Page` → `Header`, `Hero`, `MenuSection`, `ProductCard`, `Footer`.
- Example menu flow: user selects category → event handler updates local state → filtering logic computes visible items → product grid re-renders.
- Identify relevant props, state ownership, types, conditional rendering, and empty/error states where applicable.
- Mark which elements are Client Components and why.
- Include keyboard/focus behavior for interactive controls.

Update LLD after implementation if actual file/component names differ. Do not fabricate implementation details merely to make the diagram more elaborate.

## 9. Visual design and assets

- The developer independently defines brand name, palette, typeface pairings, composition, image treatment, and animation direction.
- Gather inspiration from legitimate café websites/design galleries without copying complete page layouts or templates.
- Use licensed images/assets; record attribution or licensing obligations where relevant.
- If the 3D effect is made with CSS perspective and transformed visuals rather than a true 3D model, describe it accurately as a “3D-style effect.”
- Avoid requiring Blender, Three.js, a 3D asset pipeline, or a heavyweight animation library unless the developer independently selects it and the deadline allows it.

## 10. Context-aware responsive UI/UX engineering [PROCESS]

Responsive quality is a requirement from the manager; the detailed review policy in this section is the developer's working standard. Design decisions remain independently authored by the developer. **No single button size, type scale, spacing value, breakpoint or grid formula is correct for every UI.**

### 10.1 Context-first decision process

For each relevant component, review its role, hierarchy, content length, parent/container width, neighboring elements, available space, expected interaction (touch, pointer, keyboard), visual balance and accessibility requirements. Recommend or review values only after considering this context. A hero CTA, navigation control, product card action and icon-only button may deliberately behave differently. Maintain a coherent visual language without forcing identical dimensions.

### 10.2 Responsive typography, spacing and controls

- **Typography:** Evaluate heading hierarchy, font characteristics, font size/weight, line-height, letter-spacing, wrapping and maximum line length. Prefer readable and fluid sizing where it genuinely helps; avoid shrinking text simply to fit a broken layout.
- **Buttons and controls:** Review text and icon size, `px`/`py`, minimum hit-area dimensions, width, wrapping, icon gap, alignment and interaction states. A compact visual design must not create tiny interactive targets. Aim for comfortable touch areas (commonly around 44 × 44 CSS px) while checking the applicable accessibility requirement and context; this is guidance, not a universal button dimension.
- **Spacing:** Evaluate horizontal/vertical padding, margins, gaps, section rhythm and container gutters independently. Do not copy desktop padding unchanged onto a narrow viewport or make all desktop spacing unnecessarily large.
- **Layout:** Prefer flexible CSS Grid/Flexbox, intrinsic sizing, sensible width constraints and content-driven changes. Use viewport breakpoints, container queries or fluid expressions such as `clamp()` where they are appropriate; do not add a media query at every tested width.
- **Interaction:** Ensure touch/keyboard/pointer access as applicable. Hover-only discovery is not an acceptable dependency for essential functionality. Honor reduced-motion preference and keep content available without animations.
- **Failure prevention:** Check for horizontal overflow, clipped labels, overlapping cards/images, inaccessible navigation, fixed-height clipping and unreadable text on media backgrounds.

### 10.3 Verification viewports, not mandatory breakpoints

Use representative checkpoints: **320, 360, 375, 390, 430, 640, 768, 1024, 1280, 1440 and 1920 CSS px**, plus relevant mobile/tablet landscape. Check intermediate widths near actual layout breakpoints and particularly where content begins to fail. These numbers are *test sizes*, not prescribed Tailwind breakpoints or a demand for 11 separate styles.

### 10.4 Component-specific responsive acceptance

| Area | What the developer must inspect | How to determine success |
|---|---|---|
| Navigation | Collisions, labels, menu toggle, touch and focus | Every route/section remains reachable without overlap |
| Hero | Text line breaks, composition, CTA size and image relation | Content hierarchy survives narrow and wide widths |
| Product cards | Grid changes, image dimensions, buttons, long names/prices | Cards remain readable and controls usable without clipping |
| Typography | Headings, body, text over imagery | Readability and hierarchy remain intact; no forced tiny type |
| Controls | Font, `px`/`py`, width, min hit area, wrapping, icon gaps | Appropriate proportions for that control's role and viewport |
| Motion | Scroll/reveal/3D-style effects and reduced motion | Essential content and controls remain usable when motion is off |

For each task, agents must distinguish **verified failures**, **reviewer concerns** and **developer design decisions**. Do not impose one-size-fits-all values or silently redesign independently authored UI.

## 11. Non-functional requirements

| ID | Requirement | Acceptance criterion |
|---|---|---|
| NFR-01 | Responsive usability | Check at 320px, 375px, 768px, 1024px, 1440px, and mobile landscape |
| NFR-02 | Layout stability | No unintended horizontal scrolling, clipping, or overlap |
| NFR-03 | Keyboard access | Links, buttons, filters, and menus work without a mouse |
| NFR-04 | Focus visibility | Keyboard focus is visible on interactive controls |
| NFR-05 | Contrast and readability | Text remains readable against backgrounds and images |
| NFR-06 | Reduced motion | Honor `prefers-reduced-motion`; content remains available |
| NFR-07 | Performance | Optimize images/fonts and avoid unnecessary client-side JavaScript |
| NFR-08 | Robustness | No uncaught errors or broken essential interactions in demonstration |
| NFR-09 | Semantic structure | Use suitable headings, links, buttons, and landmarks |
| NFR-10 | Maintainability | Reusable, understandable components with clear responsibilities |

## 12. Testing and acceptance plan

### 12.1 Functional checks

- Page loads and major sections are reachable.
- Header navigation and mobile navigation work.
- Interactive menu cards work with pointer and keyboard.
- Optional category filtering handles each category and an empty result safely.
- External links lead to their intended destinations.
- Animation content remains readable and usable with reduced motion.

### 12.2 Responsive checks

Manually check the representative viewport sizes defined in Section 10.3, including 320×568 and 375×667, and relevant landscape orientations. Examine navigation, typography, button font and `px`/`py`, product-card layout, spacing, sticky/overlay behavior, touch usability and overflow. Test intermediate widths whenever the UI starts to degrade.

### 12.3 Technical checks

- TypeScript / project lint checks pass.
- Production build passes.
- Browser console has no unexpected errors.
- Image assets resolve and have appropriate alt text.
- Live deployed site is tested, not only local development mode.

Do not invent performance scores or claim testing that has not been carried out.

### 12.4 Evidence and completion rules [PROCESS]

Automated checks do not establish visual correctness. Report each verification result as **Passed**, **Failed**, **Not run**, or **Not applicable** with the command or reproducible manual steps and actual evidence. If the AI has not viewed the browser, mark visual checks **Developer verification required**. Do not request repetition of checks already evidenced for an unchanged scope. A task remains **Awaiting developer review** until required manual checks and the learning checkpoint are complete.

## 13. Milestones and handoff

| Phase | Deliverable | Exit condition |
|---|---|---|
| 1 | Reviewed PRD | Mandatory and proposed requirements distinguished |
| 2 | HLD and draft LLD | Core modules and interactions sketched |
| 3 | Project initialization | Chosen stack runs locally |
| 4 | Visual design and page structure | Independently chosen layout and section hierarchy established |
| 5 | Core interactions | Menu cards and required navigation are functional |
| 6 | Motion and responsive refinement | Required effects function without usability regressions |
| 7 | Verification and deployment | Build and manual checks complete; live URL works |
| 8 | Submission | Source code, HLD, LLD, demo material delivered as requested |

Prioritize a complete, polished frontend and honest documentation over optional backend work. The original deadline is a manager-provided assignment target; if it changes, use the manager's latest instruction.

## 14. Submission checklist

- [ ] Original website design decisions made by the developer.
- [ ] Website code authored by the developer.
- [ ] Working premium café homepage and required effects.
- [ ] Interactive menu cards tested.
- [ ] Mobile/tablet/desktop/landscape checks completed.
- [ ] HLD diagram reflects the actual application.
- [ ] LLD diagram reflects real components and interaction flow.
- [ ] Source code and README are available for review.
- [ ] Deployment/demo link works if hosting is used.
- [ ] LinkedIn screenshots/video and Aravex mention follow manager instructions and company approval for public content.
- [ ] No confidential Attendance & TimeTrack materials are published.

## 15. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Too many optional features | Freeze to manager-requested essentials; implement optional features only after core is ready |
| External café API failures | Use local typed menu data; do not make essential UI depend on an unverified API |
| 3D animation complexity | Start with CSS 3D-style techniques; only use real 3D assets if independently feasible |
| Slow loading from large images | Optimize image sizes and use Next.js image capabilities as suitable |
| Architecture/code mismatch | Revise HLD and LLD after implementation |
| Deadline pressure | Prioritize core functionality, responsive behavior, and a working submission |
| Violating assignment's independent-work rule | Use AI for explanation, research guidance, and reviewing developer-authored work—not to generate the website code or final design |

## 16. AI mentoring and developer-owned implementation [PROCESS]

### 16.1 Allowed and prohibited assistance

Antigravity/Codex may explain concepts, plan learning steps, review the PRD or HLD/LLD, analyze the developer's own code, identify defects, suggest debugging approaches and generate manual-verification instructions. **They must not author the assignment's website implementation code or make the final visual design choices** under the manager's stated independent-work requirement. A developer request for assistance does not automatically waive that assignment restriction. If the manager updates this rule, record the update and revise the approval policy before proceeding.

### 16.2 Required task lifecycle

1. **Scope and approval:** Identify the related requirement IDs, objective, files likely affected, dependencies, risk and observable acceptance criteria. Do not begin unauthorized tasks.
2. **Concept briefing:** Explain the relevant Next.js/React, TypeScript, Tailwind, rendering, accessibility or responsive concepts in straightforward English.
3. **Developer implementation:** The developer authors the feature and final design. Agents may review without silently changing source files.
4. **Technical verification:** Specify and, if authorized and possible, run relevant typecheck, lint, build and existing tests. Report only actual results.
5. **Manual verification:** Provide a short, task-specific browser guide: viewport, element, action, expected result and failure symptoms. Include only relevant responsive and accessibility checks.
6. **Learning checkpoint:** Explain the responsibility of changed files, component props, state/data flow, Server/Client Component boundaries and decisions. Ask **3–5 task-specific questions** and offer **one small independent exercise**, when useful.
7. **Review gate:** Record unresolved problems and developer feedback; obtain explicit developer approval before proceeding with another task.

### 16.3 Mandatory end-of-task report format

Every meaningful task should end with:

- **A. Task summary and requirement IDs** — completed versus pending work, without exaggeration.
- **B. Files reviewed or changed** — with responsibility of each relevant file; distinguish inspection from edits.
- **C. Architecture and learning explanation** — why the approach fits and alternatives/tradeoffs.
- **D. Verification evidence** — actual commands, results, failures, and unrun checks.
- **E. Manual QA guide** — precise viewport/component/action/expected result/failure sign.
- **F. Responsive review** — contextual typography, button font/`px`/`py`, widths, spacing, orientation and interaction for the affected UI.
- **G. Accessibility and motion review** — only applicable checks.
- **H. Learning questions and mini-exercise** — for the developer to answer/do independently.
- **I. Risks, limitations and status** — Passed, Needs changes, or Awaiting developer verification, with accurate evidence.
- **J. Next task proposal** — informational only; not authorization to begin.

### 16.4 Agent operating rules

- Respect independent implementation/design, the fixed frontend-only scope and this document's requirement provenance.
- Keep all project files, agent prompts, technical summaries, code comments and diagrams in professional English; external mentoring explanations may be in Bangla.
- No automatic Git `add`, `commit`, `push` or `pull`; provide manual instructions only if requested.
- No new dependencies, architecture changes, external APIs or source-file modifications without developer approval.
- Do not claim an automated check proves responsive appearance. Screenshots and visual sign-off belong to the developer unless independently verified.
- Avoid duplicate test requests when adequate evidence already exists for the unchanged work.

## 17. Frontend-adapted 14-stage development lifecycle [PROCESS]

The lifecycle is a **working/learning method**, not 14 new product deliverables. Stages may be combined when the task is small; relevant quality checks should occur throughout instead of waiting until the end.

| Stage | Frontend-only interpretation | Suggested evidence/output |
|---|---|---|
| 01 Discovery & Research | Examine user needs and valid inspiration | Brief research notes |
| 02 Requirements Analysis | Separate manager needs and developer options | Requirement review / SRS notes |
| 03 PRD Preparation | Validate goals, scope and measurable success | Approved PRD |
| 04 System Architecture (HLD) | Describe browser, Next.js, rendering and local data boundaries | Accurate HLD diagram |
| 05 Detailed Design (LLD) | Describe components, props, state and flows | Accurate LLD and flow |
| 06 Project Planning | Sequence independent, reviewable learning tasks | Task roadmap |
| 07 UI/UX Design | Independently decide composition and responsive behavior | Developer-owned design decisions |
| 08 Environment & Setup | Initialize chosen frontend stack | Working project setup |
| 09 Frontend Implementation | Developer writes page sections and interactions | Reviewed frontend features |
| 10 Data/Interaction Integration | Connect local typed data, state and components; **no backend required** | Functional UI flows |
| 11 Testing & QA | Functional, responsive, accessibility and manual QA | Evidence-based checklist |
| 12 Performance & Security | Images/fonts, JS budget, safe links/assets and frontend risks | Frontend quality findings |
| 13 Deployment & Release | Build, deploy if chosen, verify public demo and rollback readiness | Release checklist |
| 14 Maintenance & Improvement | Fix identified issues and reflect on learning | Small improvement backlog |

The labels `/research`, `/compare`, `/architecture`, `/redteam`, etc. are **prompting techniques**, not guaranteed native agent commands. Give each agent actual files, scope, expected output and constraints.

## 18. Open decisions for the developer

These are **not blockers** to beginning documentation or setup:

- Café brand name and original visual direction.
- Exact menu data and currency.
- Choice of imagery and asset licenses.
- CSS-only 3D-style motion versus developer-created true 3D elements.
- Deployment provider and public repository visibility.
- Manager approval for any sharing of company-specific materials.

## 19. Reference learning resources

- Next.js App Router: https://nextjs.org/docs/app
- Next.js TypeScript: https://nextjs.org/docs/app/api-reference/config/typescript
- Tailwind CSS Next.js guide: https://tailwindcss.com/docs/installation/framework-guides/nextjs
- `clsx`: https://github.com/lukeed/clsx
- `tailwind-merge`: https://github.com/dcastil/tailwind-merge
- C4 model: https://c4model.com/
- diagrams.net: https://app.diagrams.net/
- MDN reduced motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion

---

**Approval gate:** Version 2.0 is a proposed revision and requires developer approval. This document can guide the developer's independent implementation. Codex/Antigravity must not implement code or generate final UI designs solely from this PRD when the manager has prohibited AI-generated website code/design. The developer may request a separate read-only PRD consistency review, architecture explanation, or review of code they wrote themselves.
