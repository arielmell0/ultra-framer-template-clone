# SideUp Applications Tasks

## Test Coverage Matrix

> Generated from codebase, project guidelines, and spec - confirm before Execute.

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

### Phase 1: Data Model, Prints, and Humanized Copy

```
T1 -> T2
T2 -> T3
```

### Phase 2: Routing, Component Tests, and Verification

```
T4 -> T5
T5 -> T6
T6 -> T7
```

## Task Breakdown

### Phase 1: Data Model, Prints, and Humanized Copy

#### T1: Copy SideUp screenshot prints and logo assets into project directories
**What**: Ensure screenshots from composer-monorepo-prints are in public/project-prints/sideup/ and project-prints/sideup/, and logo assets are in public/images/.
**Where**: `public/project-prints/sideup`
**Depends on**: None
**Tests**: unit
**Gate**: quick

#### T2: Update projects data module with three separate SideUp platforms
**What**: Add sideup-business-portal, sideup-admin-portal, and sideup-employee-app to src/data/projects.ts with detailed print galleries and humanized copy.
**Where**: `src/data/projects.ts`
**Depends on**: T1
**Tests**: unit
**Gate**: quick

#### T3: Update projects unit test suite to assert new SideUp applications
**What**: Update src/data/projects.test.ts to test the 11 projects (6 Infleux, 3 SideUp, 2 Upwork), checking print counts and fields.
**Where**: `src/data/projects.test.ts`
**Depends on**: T2
**Tests**: unit
**Gate**: quick

### Phase 2: Routing, Component Tests, and Verification

#### T4: Add backward-compatible redirect for legacy /work/sideup route
**What**: Create src/app/work/sideup/page.tsx to redirect visitors to /work/sideup-business-portal.
**Where**: `src/app/work/sideup/page.tsx`
**Depends on**: T3
**Tests**: integration
**Gate**: quick

#### T5: Update WorkSection and ProjectDetailPage integration tests
**What**: Update src/components/__tests__/WorkSection.test.tsx and ProjectDetailPage.test.tsx to assert SideUp portals and their galleries render correctly.
**Where**: `src/components/__tests__/ProjectDetailPage.test.tsx`
**Depends on**: T4
**Tests**: integration
**Gate**: quick

#### T6: Run test suite, typecheck, and static build
**What**: Execute vitest test suite, npm run typecheck, and npm run build to verify zero regressions across all pages.
**Where**: `src`
**Depends on**: T5
**Tests**: unit
**Gate**: full

#### T7: Execute E2E verification and write e2e-test.md
**What**: Run real point-to-point verification of the SideUp works section, detail pages, prints galleries, and legacy redirect, recording evidence in e2e-test.md.
**Where**: `.specs/features/sideup-apps/e2e-test.md`
**Depends on**: T6
**Tests**: e2e
**Gate**: full
