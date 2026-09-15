# SideUp v2 Rebrand Tasks

## Test Coverage Matrix

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| ---------- | ------------------ | -------------------- | ---------------- | ----------- |
| Project Data & Prints | unit | 100% field assertions and schema integrity | `src/data/projects.test.ts` | `npm test` |
| Component Rendering & Navigation | unit / integration | Card rendering, sidebar listing, and detail views | `src/components/__tests__/*.test.tsx` | `npm test` |
| Static Build & Prerender | build | Zero TypeScript or Next.js build errors | `src/app/**` | `npm run typecheck && npm run build` |

## Gate Check Commands

```bash
npm test
npm run typecheck
npm run build
```

## Execution Plan

### Phase 1: Data Model, Rebrand Favicon, and Prints

```
T1 -> T2
T2 -> T3
```

### Phase 2: Tests, Static Build, and E2E Verification

```
T4 -> T5
T5 -> T6
```

## Task Breakdown

### Phase 1: Data Model, Rebrand Favicon, and Prints

#### T1: Copy SideUp v2 prints and generate purple rebrand favicon
**What**: Ensure screenshots from sideup-monorepo-prints are copied to public/project-prints/sideup-v2/ and project-prints/sideup-v2/, and purple favicon (#8127cf) is generated at public/images/sideup-purple-favicon.png and public/images/sideup-purple-favicon.svg.
**Where**: `public/project-prints/sideup-v2`
**Depends on**: None
**Tests**: unit
**Gate**: quick

#### T2: Add SideUp v2 rewritten platforms to projects data module
**What**: Add sideup-employer-portal, sideup-backoffice, and sideup-customer-web to src/data/projects.ts with detailed print galleries and humanized technical copy. Mark legacy v1 SideUp applications with (Legacy v1) titling.
**Where**: `src/data/projects.ts`
**Depends on**: T1
**Tests**: unit
**Gate**: quick

#### T3: Update project data unit tests
**What**: Update src/data/projects.test.ts to verify the expanded project catalog, checking slugs, purple favicon assignment, and total print counts.
**Where**: `src/data/projects.test.ts`
**Depends on**: T2
**Tests**: unit
**Gate**: quick

### Phase 2: Tests, Static Build, and E2E Verification

#### T4: Update component tests for WorkSection and ProjectDetailPage
**What**: Update test suites in src/components/__tests__/ to verify rendering of new v2 SideUp project cards and detail pages.
**Where**: `src/components/__tests__/WorkSection.test.tsx`
**Depends on**: T3
**Tests**: integration
**Gate**: quick

#### T5: Execute test suite, TypeScript check, and static production build
**What**: Run npm test, npm run typecheck, and npm run build to verify zero compile errors or regressions.
**Where**: `src`
**Depends on**: T4
**Tests**: unit
**Gate**: full

#### T6: Perform live E2E verification via browser-harness under Bermuda claim
**What**: Claim browser lease in Bermuda, use browser-harness to verify home card rendering with the purple icon, inspect v2 detail pages, capture screenshot evidence, and write e2e-test.md.
**Where**: `.specs/features/sideup-v2-rebrand/e2e-test.md`
**Depends on**: T5
**Tests**: e2e
**Gate**: full
