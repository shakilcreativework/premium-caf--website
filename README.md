# Premium Café Website

An artisanal, responsive frontend website showcasing coffee selections, café atmosphere, and interactive menu offerings.

> **Project Assignment:** Aravex Tech Studio — Learning & R&D  
> **Scope:** Frontend-only internship learning assignment  
> **Target Submission:** 22 November 2026, 10:00 PM PKT / 11:00 PM BST  

---

## 1. Project Purpose & Scope

This project is a standalone, client-safe frontend application demonstrating modern web craftsmanship, visual hierarchy, responsive engineering, and accessible user interactions.

### Strict Scope Boundaries
* **100% Frontend-Only:** Operates entirely on client-safe static execution with local typed data.
* **No Backend Services:** Zero dependency on custom Express servers, Next.js API route handlers, or databases (MongoDB, PostgreSQL).
* **No Authentication or Payments:** No customer accounts, admin portals, or payment gateways.
* **Independent Learning Assignment:** The developer independently authors all website implementation code and makes all visual design choices without AI code generation. AI assistance is strictly confined to architectural mentorship, code review, debugging guidance, and verification testing.

---

## 2. Technology Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Class Utilities:** `clsx` & `tailwind-merge` (via `src/lib/utils.ts`)
* **Data Layer:** Local typed static data (`src/data/menu.ts`)
* **Typography:** `next/font/google` (Self-hosted display and body typefaces)

---

## 3. Project Documentation

Comprehensive planning and design artifacts are maintained in the [`docs/`](docs/) directory:

| Document | Purpose | Location |
|---|---|---|
| **Product Requirements Document (PRD)** | Requirements baseline, provenance, and NFRs | [`docs/PRD.md`](docs/PRD.md) |
| **High-Level Design (HLD)** | System boundaries, C4 diagram, and rendering architecture | [`docs/HLD.md`](docs/HLD.md) |
| **Low-Level Design (LLD)** | Component tree, TypeScript contracts, and interaction flows | [`docs/LLD.md`](docs/LLD.md) |
| **Development Roadmap** | 13 developer-owned tasks, dependency sequence, and gates | [`docs/ROADMAP.md`](docs/ROADMAP.md) |
| **Starter Template Guide** | Upstream Next.js default template reference | [`docs/NEXTJS_STARTER_GUIDE.md`](docs/NEXTJS_STARTER_GUIDE.md) |

---

## 4. Local Development

### Prerequisites
* Node.js `18.18.0+` (Node.js 20 LTS or 22 LTS recommended)
* npm `10.x+`

### Setup and Execution

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Validate TypeScript & Linting:**
   ```bash
   npx tsc --noEmit
   npm run lint
   ```

4. **Production Build Check:**
   ```bash
   npm run build
   npm run start
   ```

---

## 5. Architectural Principles

* **Server Components by Default:** Layout, metadata, and static sections (`Hero`, `About`, `Contact`, `Footer`) ship zero client JavaScript.
* **Isolated Client Islands:** State and event listeners (`useState`, `onClick`) are restricted strictly to interactive elements (`MenuSection`, `MobileNavDrawer`).
* **CSS 3D-Style Perspective:** Utilizes native hardware-accelerated CSS 3D transforms (`perspective`, `rotateX`, `rotateY`) for authentic depth without heavy WebGL/Three.js bundles.
* **Context-Aware Responsiveness:** Every component is individually tuned for mobile (320px–430px), tablet, desktop, and mobile landscape viewports with zero horizontal overflow.
* **Accessibility First:** Semantic HTML5 landmarks, visible focus rings (`:focus-visible`), toggle filter buttons (`aria-pressed`), and full `@media (prefers-reduced-motion: reduce)` support.
