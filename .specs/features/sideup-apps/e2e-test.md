# E2E — sideup-apps
Verdict: PASS
Surface: web
When: 2026-09-15T00:41:44-03:00
Entry: http://localhost:3456/

## Steps
1. Claim browser in Bermuda: `bermuda thread claim browser --ttl 20m --why "SideUp e2e verification via browser-harness"` → Browser claimed by agy#w5:p1 → PASS
   Evidence: Bermuda lease acquired (held 38s until released)
2. Drive browser via `browser-harness`: `new_tab("http://localhost:3456/")` → Home page loaded with 3 SideUp project cards in Work section → PASS
   Evidence: `.specs/features/sideup-apps/e2e-shots/01-home-works.png` (page height 4376px)
3. Navigate to `/work/sideup-business-portal/` → SideUp Business Portal loads with client metadata, humanized copy, and 9-step enrollment prints gallery → PASS
   Evidence: `.specs/features/sideup-apps/e2e-shots/02-business-portal.png` (page height 4783px)
4. Navigate to `/work/sideup-admin-portal/` → SideUp Admin Console loads with tax regions and regulatory terms prints gallery → PASS
   Evidence: `.specs/features/sideup-apps/e2e-shots/03-admin-portal.png` (page height 2901px)
5. Navigate to `/work/sideup-employee-app/` → SideUp Employee App loads with virtual Visa cards and allowance wallets gallery → PASS
   Evidence: `.specs/features/sideup-apps/e2e-shots/04-employee-app.png` (page height 3070px)
6. Navigate to legacy `/work/sideup/` → Next.js client router redirects to `/work/sideup-business-portal/` → Redirect verified → PASS
   Evidence: `page_info()` url resolved to `http://localhost:3456/work/sideup-business-portal/`
7. Verify green SideUp favicon on Work cards via `browser-harness` under Bermuda browser claim (`bermuda thread claim browser`) → SideUp Business Portal, Admin Console, and Employee App cards display signature spring green chevron `#8CDD80` favicon → PASS
   Evidence: `.specs/features/sideup-apps/e2e-shots/05-sideup-cards-green-icon.png` and `06-sideup-employee-app-green-icon.png`
8. Close test tab via `close_tab(tab)` and release Bermuda lease via `bermuda thread release browser` → Clean browser teardown → PASS
   Evidence: User existing browser tabs preserved; lease released

## Shots (web only)
- 01-home-works.png — Proves SideUp Business Portal, Admin Console, and Employee App cards render in the Work section with logos and covers.
- 02-business-portal.png — Proves SideUp Business Portal detail page renders client metadata, humanized narrative, and all 9 enrollment flow prints with captions.
- 03-admin-portal.png — Proves SideUp Admin Console detail page renders operations narrative and tax/compliance prints gallery.
- 04-employee-app.png — Proves SideUp Employee App detail page renders cardholder narrative and virtual card wallet prints gallery.
- 05-sideup-cards-green-icon.png — Proves SideUp Business Portal and SideUp Admin Console cards display the signature spring green chevron (#8CDD80) favicon on http://localhost:4100.
- 06-sideup-employee-app-green-icon.png — Proves SideUp Employee App card displays the signature spring green chevron (#8CDD80) favicon.

## Network (api / curl)
- curl -sI http://localhost:3456/ → 200 OK — Home page with Work section
- curl -sI http://localhost:3456/work/sideup-business-portal/ → 200 OK — Business Portal detail page
- curl -sI http://localhost:3456/work/sideup-admin-portal/ → 200 OK — Admin Console detail page
- curl -sI http://localhost:3456/work/sideup-employee-app/ → 200 OK — Employee App detail page
- curl -sI http://localhost:3456/work/sideup/ → 200 OK — Static redirect wrapper page

## Gaps
- None
