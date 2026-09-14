# Feature Specification: Ariel Mello Portfolio Content Integration

## Problem Statement

The reference clone `ultra.framer.clone` currently implements placeholder content for "Dean Smith" and generic crypto/design projects. The user wants to replace all placeholder content across every section of the portfolio with real information from the `ariel-landing` repository (`Ariel Mello`), including real project case studies, prints of works from `project-prints`, experience history, education history, tech stack, and contact details, while preserving 100% of the Ultra Framer layout, spacing, typography, and master-detail subpage navigation structure.

## Goals

- [ ] Populate Ariel Mello's personal identity, headline, avatar, and contact links on the Home and Contact pages.
- [ ] Render Ariel's bio, experience timeline, and education history on the Home and About pages.
- [ ] Integrate Ariel's real projects (Infleux, SideUp, Upwork CMS, Upwork RAG) with real prints and case studies under Work.
- [ ] Update the Stack page with Ariel's day-to-day software tools and physical workspace gear.
- [ ] Preserve the verified Ultra Framer layout tokens, subpage sidebars, and typography with 0 visual regressions.

## Out of Scope

| Feature | Reason |
| ------- | ------ |
| Live email sending backend | Contact form captures state locally with user feedback matching `ariel-landing` |
| Modifying `ariel-landing` repo | Porting data into `ultra.framer.clone` without modifying the original repository |
| Altering Ultra layout tokens | Design parity achieved in previous milestone must be preserved |

---

## Assumptions & Open Questions

Every ambiguity is resolved or recorded here - nothing is left silently unclear.

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --------------------- | -------------- | --------- | ---------- |
| Flagship project slug | `/work/infleux` | Infleux is Ariel's 3-year influencer platform with rich screenshot prints in the repository | y |
| Store and Writing contents | Retain developer templates and technical articles | Ariel is a full-stack engineer; keeping engineering articles and tools preserves complete site structure without dead links | y |
| Contact action target | LinkedIn booking | Matches `ariel-landing` where Book call links to Ariel's LinkedIn profile | y |

**Open questions:** none - all resolved or logged above.

---

## User Stories

### P1: Core Profile and Identity Integration ⭐ MVP

**User Story**: As a visitor or recruiter reviewing Ariel's portfolio, I want to see Ariel Mello's photo, headline, background, and experience across Home, About, and Contact so that I can understand his qualifications.

**Why P1**: Essential for establishing Ariel Mello's identity across the site.

**Acceptance Criteria**:

1. The system SHALL display Ariel Mello's avatar image (`/images/ariel-avatar.jpg`), name "Ariel Mello", and headline "Full Stack Developer | React, Node & Cloud (AWS)" in the Hero component.
2. The system SHALL display Ariel's location "Rio Grande do Sul, Brasil" and availability status "Available for new opportunities" in the Hero.
3. WHEN a user navigates to `/about` THEN the system SHALL render Ariel's bio, experience timeline (SideUp, Infleux, Upwork, IFC), and education history (IFC, ULBRA, IFRO).
4. WHEN a user navigates to `/contact` THEN the system SHALL provide booking links to Ariel's LinkedIn and a message form with local capture feedback.
5. WHEN a user navigates to `/stack` THEN the system SHALL display Ariel's software technologies (Node.js, TypeScript, React, Next.js, React Native, AWS, MongoDB, PostgreSQL, LangChain, Git) and physical hardware items.

**Independent Test**: Can inspect Home, About, Stack, and Contact pages to verify all of Ariel's personal and technical info renders accurately.

---

### P2: Real Work Projects and Prints of Works

**User Story**: As an engineering manager or client, I want to view Ariel's real projects (Infleux, SideUp, Upwork CMS, Upwork RAG) with real screenshots and technical case studies so that I can evaluate his delivered work.

**Why P2**: Demonstrates practical full-stack and AI delivery through real system prints and case studies.

**Acceptance Criteria**:

1. The system SHALL list Ariel's projects (SideUp, Infleux, Upwork CMS, Upwork RAG) on the Home page Work section.
2. WHEN a user navigates to `/work` THEN the system SHALL redirect to `/work/infleux`.
3. WHEN a user navigates to `/work/infleux` THEN the system SHALL render the master-detail view with Infleux case study, role, timeline, and real screenshot prints from `project-prints/infleux`.
4. WHEN a user navigates to `/work/[slug]` for any project THEN the system SHALL display the secondary sidebar listing Ariel's other projects and the selected project details.

**Independent Test**: Can click through all work items on Home and `/work/[slug]` and verify that project details and screenshot prints load correctly.

---

## Edge Cases

- IF an invalid project slug is requested THEN the system SHALL return a 404 response.
- IF an image is loading THEN the system SHALL render responsive dimensions without layout shift.

---

## Requirement Traceability

Each requirement gets a unique ID for tracking across design, tasks, and validation.

| Requirement ID | Story | Phase | Status |
| -------------- | ----- | ----- | ------ |
| ARL-01 | P1: Core Profile and Identity Integration | Tasks | Planned |
| ARL-02 | P1: Core Profile and Identity Integration | Tasks | Planned |
| ARL-03 | P1: Core Profile and Identity Integration | Tasks | Planned |
| ARL-04 | P1: Core Profile and Identity Integration | Tasks | Planned |
| ARL-05 | P1: Core Profile and Identity Integration | Tasks | Planned |
| ARL-06 | P2: Real Work Projects and Prints of Works | Tasks | Planned |
| ARL-07 | P2: Real Work Projects and Prints of Works | Tasks | Planned |
| ARL-08 | P2: Real Work Projects and Prints of Works | Tasks | Planned |
| ARL-09 | P2: Real Work Projects and Prints of Works | Tasks | Planned |

**Coverage:** 9 total, 9 mapped to tasks, 0 unmapped.

---

## Success Criteria

- [ ] Ariel Mello's real photo, bio, experience, education, tech stack, and contact links are fully integrated.
- [ ] Real projects and prints from `project-prints` are displayed in Work sections and detail views.
- [ ] Vitest unit/integration test suite passes.
- [ ] `npm run check` (lint, typecheck, test, build) passes with 0 errors.
- [ ] Visual verification with screenshots confirms Ultra Framer layout tokens and spacing remain intact.
