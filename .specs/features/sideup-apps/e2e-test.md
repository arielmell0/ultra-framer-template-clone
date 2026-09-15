# E2E — sideup-apps
Verdict: PASS
Surface: web
When: 2026-09-15T00:35:00-03:00
Entry: http://localhost:3456/

## Steps
1. Navigate to `/` → Home page loads with SideUp project cards in Work section → Loaded with 3 SideUp project cards → PASS
   Evidence: `.specs/features/sideup-apps/e2e-shots/01-home-works-section.png` and curl status 200
2. Navigate to `/work/sideup-business-portal/` → Detail case study loads with 9 prints and enrollment gallery → Rendered full case study, metadata, and 9 prints → PASS
   Evidence: `.specs/features/sideup-apps/e2e-shots/02-sideup-business-portal.png` and curl status 200
3. Navigate to `/work/sideup-admin-portal/` → Operations console case study loads with 5 prints → Rendered full case study, tax regions, and compliance prints → PASS
   Evidence: `.specs/features/sideup-apps/e2e-shots/03-sideup-admin-portal.png` and curl status 200
4. Navigate to `/work/sideup-employee-app/` → Cardholder mobile web case study loads with 5 prints → Rendered full case study, virtual card, and transaction prints → PASS
   Evidence: `.specs/features/sideup-apps/e2e-shots/04-sideup-employee-app.png` and curl status 200
5. Navigate to `/work/sideup/` → Next.js redirect to `/work/sideup-business-portal/` → 307 redirect payload returned → PASS
   Evidence: `out/work/sideup/index.html` digest `NEXT_REDIRECT;replace;/work/sideup-business-portal;307;`

## Shots (web only)
- 01-home-works-section.png — Proves SideUp Business Portal, Admin Console, and Employee App cards render in the Work section with logos and covers.
- 02-sideup-business-portal.png — Proves SideUp Business Portal detail page renders client metadata, humanized narrative, and all 9 enrollment flow prints with captions.
- 03-sideup-admin-portal.png — Proves SideUp Admin Console detail page renders operations narrative and tax/compliance prints gallery.
- 04-sideup-employee-app.png — Proves SideUp Employee App detail page renders cardholder narrative and virtual card wallet prints gallery.

## Network (api / curl)
- curl -sI http://localhost:3456/ → 200 OK — Home page with Work section
- curl -sI http://localhost:3456/work/sideup-business-portal/ → 200 OK — Business Portal detail page
- curl -sI http://localhost:3456/work/sideup-admin-portal/ → 200 OK — Admin Console detail page
- curl -sI http://localhost:3456/work/sideup-employee-app/ → 200 OK — Employee App detail page
- curl -sI http://localhost:3456/work/sideup/ → 200 OK — Static redirect wrapper page

## Gaps
- None
