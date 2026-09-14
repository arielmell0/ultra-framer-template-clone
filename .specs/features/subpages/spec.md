# Subpages Specification

## Problem Statement

The reference clone `ultra.framer.clone` currently implements only the Home page. All left rail navigation links (`/work`, `/writing`, `/store`, `/stack`, `/about`, `/contact`) 404 because their corresponding subpages and detail pages do not exist in `src/app/`. Users need real, faithful reference subpages with accurate content, layout, styling tokens, and images copied from the live site https://ultra.framer.website/ to evaluate side-by-side.

## Goals

- [ ] Provide dedicated routes for `/about`, `/stack`, `/contact` matching the live Framer template's content and design tokens.
- [ ] Provide dedicated listing and detail routes for `/work` (`/work/[slug]`), `/writing` (`/writing/[slug]`), and `/store` (`/store/[slug]`).
- [ ] Ensure LeftRailNav links navigate smoothly to these pages without 404s, including lowercase and capitalized aliases.
- [ ] Maintain the established `grid-cols-[auto_1fr]` responsive content column rhythm and exact typography/color tokens.

## Out of Scope

| Feature | Reason |
| ------- | ------ |
| Framer proprietary spring physics animations | Browser hover/spring physics not reproducible via static CSS without reverse engineering Framer motion internals |
| Live checkout / payment processing | Template showcase only; links point to external LemonSqueezy/Cal.com destinations |
| Backend email delivery service | Contact form captures input state and provides UI feedback without active SMTP relay |
| Changes to `ariel-landing` repository | Isolated reference work restricted exclusively to `ultra.framer.clone` |

---

## Assumptions & Open Questions

Every ambiguity is resolved or recorded here - nothing is left silently unclear.

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --------------------- | -------------- | --------- | ---------- |
| Capitalized vs lowercase route navigation | Support lowercase canonical routes (`/about`, `/stack`, `/contact`) with Next.js redirect/rewrite support for `/About`, `/Stack`, `/Contact` | Avoid 404 errors regardless of whether clicked from rail or URL bar | y |
| Listing routes vs direct detail items in nav | Provide both top-level listing routes (`/work`, `/writing`, `/store`) and dynamic detail routes (`/work/[slug]`, `/writing/[slug]`, `/store/[slug]`) | Satisfies direct left rail links as well as item click-through requirements | y |
| Asset storage location | Download real assets into `public/images/` and serve locally via Next.js `next/image` | Guarantees offline self-containment and zero hotlinking to external CDNs | y |

**Open questions:** none - all resolved or logged above.

---

## User Stories

### P1: Core Subpages Implementation ⭐ MVP

**User Story**: As a visitor or developer inspecting the reference clone, I want to navigate to About, Stack, Contact, and Work pages from the left rail so that I can inspect real layout, typography, and content.

**Why P1**: Essential for resolving all 404 links in the primary navigation rail.

**Acceptance Criteria** (each line is one EARS pattern):

1. WHEN a user navigates to `/about` THEN the system SHALL render the About page containing Dean Smith bio, Parsons credentials, experience history, and education history.
2. WHEN a user navigates to `/stack` THEN the system SHALL render the Stack page containing software tools, workspace setup photo, and physical hardware items.
3. WHEN a user navigates to `/contact` THEN the system SHALL render the Contact page containing availability indicator, booking link, copy email action, and contact form inputs.
4. WHEN a user navigates to `/work` THEN the system SHALL render a listing of all 3 projects (Alpha, Beta, Gamma) linking to their respective detail pages.
5. WHEN a user clicks on any work project or navigates to `/work/[slug]` THEN the system SHALL render the project case study with client name, timeline, role, outcome, and narrative.
6. The system SHALL display the persistent `LeftRailNav` on every page aligned with the content container.
7. IF a user requests `/About`, `/Stack`, or `/Contact` THEN the system SHALL resolve to the corresponding page without a 404 error.

**Independent Test**: Can demo by clicking each item in the left rail nav from port 4100 and confirming real content renders on each route.

---

### P2: Writing and Store Subpages

**User Story**: As a visitor inspecting the template, I want to view Writing and Store listings and detail pages so that the entire reference template is complete.

**Why P2**: Completes the full set of CMS collections and subpages present on the live Ultra site.

**Acceptance Criteria**:

1. WHEN a user navigates to `/writing` THEN the system SHALL render a listing of all 3 articles with titles, tags, and publication dates.
2. WHEN a user navigates to `/writing/[slug]` THEN the system SHALL render the full article with cover image, category tag, and text content.
3. WHEN a user navigates to `/store` THEN the system SHALL render a listing of all 3 products with prices and descriptions.
4. WHEN a user navigates to `/store/[slug]` THEN the system SHALL render the product detail page with pricing, deliverable badges, preview images, and feature list.

**Independent Test**: Can navigate to `/writing` and `/store` routes and click into detail items to view full content.

---

## Edge Cases

- IF an invalid slug is requested under `/work/[slug]`, `/writing/[slug]`, or `/store/[slug]` THEN the system SHALL return a 404 not-found response.
- IF an image fails to load or is responsive THEN the system SHALL render clean image bounds using Next.js Image component.

---

## Requirement Traceability

Each requirement gets a unique ID for tracking across design, tasks, and validation.

| Requirement ID | Story | Phase | Status |
| -------------- | ----- | ----- | ------ |
| SUB-01 | P1: Core Subpages Implementation | Tasks | Verified |
| SUB-02 | P1: Core Subpages Implementation | Tasks | Pending |
| SUB-03 | P1: Core Subpages Implementation | Tasks | Pending |
| SUB-04 | P1: Core Subpages Implementation | Tasks | Pending |
| SUB-05 | P1: Core Subpages Implementation | Tasks | Pending |
| SUB-06 | P1: Core Subpages Implementation | Tasks | Pending |
| SUB-07 | P1: Core Subpages Implementation | Tasks | Pending |
| SUB-08 | P2: Writing and Store Subpages | Tasks | Pending |
| SUB-09 | P2: Writing and Store Subpages | Tasks | Pending |
| SUB-10 | P2: Writing and Store Subpages | Tasks | Pending |
| SUB-11 | P2: Writing and Store Subpages | Tasks | Pending |

**Coverage:** 11 total, 11 mapped to tasks, 0 unmapped.

---

## Success Criteria

- [ ] All 7 left-rail links resolve to functional pages without 404 errors.
- [ ] Real images, text content, and metadata from live Ultra site are displayed.
- [ ] `npm run typecheck` and `npm run build` succeed with zero errors.
- [ ] End-to-end browser click-through verification succeeds with screenshot evidence.
