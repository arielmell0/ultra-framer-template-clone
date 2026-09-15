# E2E — sideup-v2-rebrand
Verdict: PASS
Surface: web
When: 2026-09-15T20:48:42-03:00
Entry: http://localhost:4100/

## Steps
1. Claim browser in Bermuda: `bermuda thread claim browser --ttl 10m --as antigravity` → Claimed browser as antigravity#w5:p1 → PASS
   Evidence: Bermuda lease acquired (held 3m until released)
2. Drive browser via `browser-harness`: `new_tab("http://localhost:4100/")` → Home page loaded with 3 new SideUp v2 project cards (SideUp Employer Portal, SideUp Backoffice, SideUp Customer App) displaying the purple `#8127cf` rebrand favicon → PASS
   Evidence: `.specs/features/sideup-v2-rebrand/e2e-shots/01-home-sideup-v2-cards.png`
3. Scroll to SideUp Customer App and legacy SideUp v1 cards → Verified purple icon on Customer App and green `#8CDD80` icon on SideUp Business Portal (Legacy v1) and Admin Console (Legacy v1) → PASS
   Evidence: `.specs/features/sideup-v2-rebrand/e2e-shots/02-home-sideup-customer-card.png` and `03-home-sideup-legacy-cards.png`
4. Navigate to `/work/sideup-employer-portal/` → SideUp Employer Portal loads with metadata, narrative, and 14-step prints gallery (Gusto/BambooHR sync, program creation wizard, billing controls) → PASS
   Evidence: `.specs/features/sideup-v2-rebrand/e2e-shots/04-sideup-employer-portal.png`
5. Navigate to `/work/sideup-backoffice/` → SideUp Backoffice loads with benefits catalog, MCC mappings, statutory obligations rules, Xero OAuth, and 5-step benefit wizard → PASS
   Evidence: `.specs/features/sideup-v2-rebrand/e2e-shots/05-sideup-backoffice.png`
6. Navigate to `/work/sideup-customer-web/` → SideUp Customer App loads with React Native Web interface, Celtic Bank/Stripe Issuing Visa cards, peer recognition composer, and activity ledger → PASS
   Evidence: `.specs/features/sideup-v2-rebrand/e2e-shots/06-sideup-customer-web.png`
7. Close test tab via `close_tab(tab)` and release Bermuda lease via `bermuda thread release browser --as antigravity` → Clean browser teardown → PASS
   Evidence: User existing browser tabs preserved; lease released

## Shots (web only)
- 01-home-sideup-v2-cards.png — Proves SideUp Employer Portal and SideUp Backoffice cards render in the Work section with the official purple rebrand favicon (#8127cf) and authentic cover prints.
- 02-home-sideup-customer-card.png — Proves SideUp Backoffice and SideUp Customer App render with purple icons above SideUp Business Portal (Legacy v1) with its green icon.
- 03-home-sideup-legacy-cards.png — Proves SideUp Customer App (purple) and SideUp Legacy v1 cards (green) coexist with clear legacy naming.
- 04-sideup-employer-portal.png — Proves rewritten Employer Portal detail page renders client metadata, humanized narrative, and 14 prints with technical captions.
- 05-sideup-backoffice.png — Proves Backoffice detail page renders operations narrative, MCC mappings, statutory rules, and 11 prints.
- 06-sideup-customer-web.png — Proves Customer App detail page renders cardholder narrative, React Native Web wallet, peer recognition, and 6 prints.

## Network (api / curl)
- curl -sI http://localhost:4100/images/sideup-purple-favicon.png → 200 OK — Official purple rebrand icon
- curl -sI http://localhost:4100/work/sideup-employer-portal/ → 200 OK — Employer Portal detail page
- curl -sI http://localhost:4100/work/sideup-backoffice/ → 200 OK — Backoffice detail page
- curl -sI http://localhost:4100/work/sideup-customer-web/ → 200 OK — Customer App detail page
- curl -sI http://localhost:4100/work/sideup-business-portal/ → 200 OK — Legacy Business Portal detail page

## Gaps
- None
