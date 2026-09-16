# Feature Specification: Pathfinder Flagship Showcase in Works Portfolio

## Problem Statement

Ariel Mello's AI educational platform, Pathfinder, was previously represented only by a brief placeholder entry (`upwork-rag`). Pathfinder is an educational discovery platform built on Upwork that earned a 5.0-star client rating across two completed contracts. The application employs LangChain, Pinecone vector embeddings, and OpenAI LLMs to match students to higher education institutions and career paths according to psychometric strengths evaluations.

The user requires:
1. Showcasing Pathfinder as the top flagship project at the start of the Works section.
2. Organizing 16 authentic interface prints from `/home/arieldelmar/Projects/ultra.framer.clone/project-prints/pathfinder` with descriptive technical captions.
3. Highlighting the 5.0-star Upwork client rating at the top of the Pathfinder detail page without polluting the Home card banner.
4. Maintaining backward compatibility by redirecting `/work/upwork-rag` to `/work/pathfinder`.
5. Ensuring all narratives adhere to humanizer guidelines with concrete architectural decisions, active voice, and zero AI fluff.

## Out of Scope

| Feature | Reason |
| ------- | ------ |
| Live Pinecone vector searches or OpenAI API calls | Showcase presents static case studies with real interface prints |
| Displaying the Upwork rating banner on the Home page card | User explicitly instructed to display the rating callout only at the top of the detail page |
| Modifying the Upwork CMS showcase | The separate Puck CMS project remains intact |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --------------------- | -------------- | --------- | ---------- |
| Project Slug | `pathfinder` | Canonical product name matching the user's explicit request | y |
| Position in Works | Index 0 (`projects[0]`) | User instructed: "Path finder should be on top of the works, he is an incredible rag" | y |
| Rating Callout Location | Top of detail page (`/work/pathfinder`) | User instructed: "put my upwork 5 starts in the top of pathfinder (but dont use as banner for the homme, just when open the page appears in top)" | y |
| Legacy Slug Compatibility | Redirect `/work/upwork-rag` to `/work/pathfinder` | Preserves existing links without 404 errors | y |
| Brand Icon | `/images/pathfinder-favicon.png` | Extracted gold mountain mark from genuine interface header | y |
| Copywriting Standard | Plain, active voice without promotional inflation, triads, or AI formatting | Complies with humanizer guidelines | y |

**Open questions:** none - all requirements and locations verified.

---

## User Stories

### P1: Flagship Placement and Upwork Rating Callout

**User Story**: As a visitor or prospective client reviewing Ariel Mello's portfolio, I want to see Pathfinder featured prominently as the top project in the Works section and inspect the verified 5.0-star Upwork client review at the top of the case study page so that I can evaluate his capabilities in production AI and freelance delivery.

**Acceptance Criteria**:

1. The system SHALL place `pathfinder` as the first item in `src/data/projects.ts` so it renders at the top of the Works showcase on the Home page.
2. The system SHALL assign `/images/pathfinder-favicon.png` as the brand logo and `/project-prints/pathfinder/00-cover.png` as the cover image.
3. WHEN a visitor views `/work/pathfinder` THEN the system SHALL render the Upwork 5.0-star verified client review callout with the review screenshot at the top of the page.
4. The system SHALL NOT render the Upwork review screenshot as the cover banner on the Home page.

---

### P2: Navigation, Prints Gallery, and Backward Compatibility

**User Story**: As a visitor navigating the portfolio, I want to explore Pathfinder's 16-step screenshot gallery and access the case study through legacy URLs without broken links.

**Acceptance Criteria**:

1. The system SHALL define 16 screenshot prints in `src/data/projects.ts` under `public/project-prints/pathfinder/` covering college recommendations, career recommendations, comparison matrices, strengths assessments, and onboarding.
2. WHEN a visitor clicks the Pathfinder card on the Home page THEN the system SHALL navigate to `/work/pathfinder`.
3. WHEN a visitor navigates to `/work/upwork-rag` THEN the system SHALL redirect to `/work/pathfinder`.
4. WHEN a visitor views any project detail page THEN the system SHALL list Pathfinder at the top of the master-detail secondary sidebar.
5. The system SHALL ensure all narrative text follows humanizer principles without promotional hype, decorative em dashes, or AI markers.

---

## Edge Cases

- IF an invalid project slug is accessed THEN the system SHALL return a 404 response.
- WHEN a project detail page does not have a `ratingBadge` THEN the system SHALL omit the rating callout block cleanly without layout shift.
- WHEN a visitor navigates to `/work/upwork-rag/` with a trailing slash THEN the system SHALL redirect to `/work/pathfinder/`.

---

## Requirement Traceability

| Requirement ID | Story | Phase | Status |
| -------------- | ----- | ----- | ------ |
| PATH-01 | P1: Flagship Placement and Upwork Rating Callout | Tasks | in tasks |
| PATH-02 | P1: Flagship Placement and Upwork Rating Callout | Tasks | in tasks |
| PATH-03 | P1: Flagship Placement and Upwork Rating Callout | Tasks | in tasks |
| PATH-04 | P1: Flagship Placement and Upwork Rating Callout | Tasks | in tasks |
| PATH-05 | P2: Navigation, Prints Gallery, and Backward Compatibility | Tasks | in tasks |
| PATH-06 | P2: Navigation, Prints Gallery, and Backward Compatibility | Tasks | in tasks |
| PATH-07 | P2: Navigation, Prints Gallery, and Backward Compatibility | Tasks | in tasks |
| PATH-08 | P2: Navigation, Prints Gallery, and Backward Compatibility | Tasks | in tasks |
| PATH-09 | P2: Navigation, Prints Gallery, and Backward Compatibility | Tasks | in tasks |

**Coverage:** 9 total, 9 mapped to tasks, 0 unmapped.

---

## Success Criteria

- [ ] `src/data/projects.ts` features `pathfinder` at index 0 with 16 prints, rating badge, and humanized narrative.
- [ ] Gold mountain favicon is generated at `public/images/pathfinder-favicon.png`.
- [ ] `/work/pathfinder` renders the Upwork 5.0-star rating callout at the top of the page.
- [ ] `/work/upwork-rag` redirects to `/work/pathfinder`.
- [ ] All unit and component tests pass via `npm test`.
- [ ] TypeScript check (`npm run typecheck`) and Next.js build (`npm run build`) pass cleanly.
- [ ] Real E2E verification via `browser-harness` confirms top positioning, Upwork badge rendering, and prints gallery.
