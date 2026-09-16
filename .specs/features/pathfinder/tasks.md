# Pathfinder Tasks

## Test Coverage Matrix

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| ---------- | ------------------ | -------------------- | ---------------- | ----------- |
| Project Data & Prints | unit | 100% field assertions and schema integrity | `src/data/projects.test.ts` | `npm test` |
| Component Rendering & Rating Badge | unit / integration | Card rendering, top rating callout, and detail views | `src/components/__tests__/*.test.tsx` | `npm test` |
| Static Build & Prerender | build | Zero TypeScript or Next.js build errors | `src/app/**` | `npm run typecheck && npm run build` |

## Gate Check Commands

```bash
npm test
npm run typecheck
npm run build
```

## Execution Plan

### Phase 1: Data Model, Rating Badge, and Redirect

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

### Phase 1: Data Model, Rating Badge, and Redirect

#### T1: Organize 16 Pathfinder prints and extract gold mountain logo
**What**: Ensure all 16 prints from project-prints/pathfinder are organized into public/project-prints/pathfinder/, extract gold mountain logo to public/images/pathfinder-favicon.png, and generate landscape cover 00-cover.png.
**Where**: `public/project-prints/pathfinder`
**Depends on**: None
**Tests**: unit
**Gate**: quick

#### T2: Implement Pathfinder as top #1 flagship project in projects.ts with 5-star rating
**What**: Add pathfinder as index 0 in src/data/projects.ts with 16 prints, ratingBadge pointing to /images/upwork-5-star-review.png, and humanized technical copy describing RAG, LangChain, Pinecone, and psychometric assessments.
**Where**: `src/data/projects.ts`
**Depends on**: T1
**Tests**: unit
**Gate**: quick

#### T3: Update ProjectDetailPage with Upwork 5-star rating callout and add upwork-rag redirect
**What**: Update src/app/work/[slug]/page.tsx to render the 5.0-star Upwork client review callout at the top of the detail page when project.ratingBadge exists, and create src/app/work/upwork-rag/page.tsx to redirect legacy traffic to /work/pathfinder.
**Where**: `src/app/work/[slug]/page.tsx`
**Depends on**: T2
**Tests**: integration
**Gate**: quick

### Phase 2: Tests, Static Build, and E2E Verification

#### T4: Update unit and component test suites
**What**: Update src/data/projects.test.ts, WorkSection.test.tsx, and ProjectDetailPage.test.tsx to assert pathfinder at index 0, 16 prints, rating badge rendering, and redirect route.
**Where**: `src/components/__tests__/ProjectDetailPage.test.tsx`
**Depends on**: T3
**Tests**: unit
**Gate**: quick

#### T5: Execute test suite, TypeScript check, and static production build
**What**: Run npm test, npm run typecheck, and npm run build to verify zero compile errors or regressions across all 33 static pages.
**Where**: `src`
**Depends on**: T4
**Tests**: unit
**Gate**: full

#### T6: Perform live E2E verification via browser-harness under Bermuda claim
**What**: Claim browser lease in Bermuda, use browser-harness to verify that Pathfinder appears at the top of the Home page Works section, verify the 5-star rating callout at the top of /work/pathfinder, capture screenshot evidence, and write e2e-test.md.
**Where**: `.specs/features/pathfinder/e2e-test.md`
**Depends on**: T5
**Tests**: e2e
**Gate**: full
