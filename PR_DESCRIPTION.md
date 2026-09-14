# Ultra Framer Clone — Ariel Mello Portfolio Integration & Separated Works Architecture

## Summary

This PR integrates Ariel Mello's complete portfolio profile, career history, tech stack, and real engineering prints into the Ultra Framer reference architecture clone. In addition, the marketing platform projects (previously consolidated under "Infleux") have been separated into 6 dedicated, grounded showcases with official branding and real workflow prints.

---

## What Was Done

1. **Portfolio Data & Bio Integration**:
   - Ariel Mello profile, location, status, and social handles (`src/data/profile.ts`).
   - Experience timeline and education credentials in `/about`.
   - Complete software stack, developer tooling, and physical hardware inventory in `/stack`.
   - Contact links and inquiry form in `/contact`.

2. **Separated Marketing Systems & Platforms**:
   - **Admin CRM for marketing company** (`/work/admin-crm`): Built with React-Admin for internal administration, campaign configuration, story curatorship, and creator CRM.
   - **Advertiser Platform** (`/work/advertisers-platform`): Campaign creation interface with custom payout models (CPC, CPA, CPI) and active influencer story tracking.
   - **Assessor Platform for Influencer Management** (`/work/agencies-platform`): Agency roster management, campaign briefings, and push notifications to creators.
   - **Influencer App (App-Loja)** (`/work/influencer-app`): Creator mobile app to discover campaigns, review guidelines, and earn performance-based payouts.
   - **Influencer Web Platform** (`/work/influencer-web`): Responsive browser alternative for creators on desktop and mobile.
   - **Invoicing & Accountant Platform (NFs)** (`/work/invoicing-accountant-portal`): Dedicated portal for influencers' accountants to review high-volume campaign invoices and tax documentation.
   - Retained freelance/remote engineering projects: SideUp, Upwork CMS, and Upwork RAG.

3. **Official Branding & Design Parity**:
   - Official Infleux favicon (180×180 PNG and SVG) retrieved directly from `https://infleux.co/en` and applied across all marketing cards.
   - Desktop rail offset fixed: Content column precisely centered in remaining viewport matching `https://ultra.framer.website/`.

4. **Automated Test Coverage**:
   - 17/17 Vitest unit and integration tests passing across 8 suites.
   - TypeScript `tsc --noEmit` passing with 0 errors.
   - Next.js static generation prerendering all 26 static routes.

---

## Visual Previews (Captured via `/browser-harness`)

| Page | Preview | Page | Preview |
| :--- | :--- | :--- | :--- |
| **Home (`/`)** | <img src="https://raw.githubusercontent.com/arielmell0/ultra-framer-template-clone/master/screenshots/01-home.png" width="320" alt="Home" /> | **About (`/about`)** | <img src="https://raw.githubusercontent.com/arielmell0/ultra-framer-template-clone/master/screenshots/02-about.png" width="320" alt="About" /> |
| **Stack (`/stack`)** | <img src="https://raw.githubusercontent.com/arielmell0/ultra-framer-template-clone/master/screenshots/03-stack.png" width="320" alt="Stack" /> | **Contact (`/contact`)** | <img src="https://raw.githubusercontent.com/arielmell0/ultra-framer-template-clone/master/screenshots/04-contact.png" width="320" alt="Contact" /> |
| **Admin CRM (`/work/admin-crm`)** | <img src="https://raw.githubusercontent.com/arielmell0/ultra-framer-template-clone/master/screenshots/05-work-admin-crm.png" width="320" alt="Admin CRM" /> | **Advertiser Platform (`/work/advertisers-platform`)** | <img src="https://raw.githubusercontent.com/arielmell0/ultra-framer-template-clone/master/screenshots/06-work-advertisers-platform.png" width="320" alt="Advertiser Platform" /> |
| **Assessor Platform (`/work/agencies-platform`)** | <img src="https://raw.githubusercontent.com/arielmell0/ultra-framer-template-clone/master/screenshots/07-work-agencies-platform.png" width="320" alt="Assessor Platform" /> | **Influencer App (`/work/influencer-app`)** | <img src="https://raw.githubusercontent.com/arielmell0/ultra-framer-template-clone/master/screenshots/08-work-influencer-app.png" width="320" alt="Influencer App" /> |
| **Influencer Web (`/work/influencer-web`)** | <img src="https://raw.githubusercontent.com/arielmell0/ultra-framer-template-clone/master/screenshots/09-work-influencer-web.png" width="320" alt="Influencer Web" /> | **Invoicing & NFs (`/work/invoicing-accountant-portal`)** | <img src="https://raw.githubusercontent.com/arielmell0/ultra-framer-template-clone/master/screenshots/10-work-invoicing-portal.png" width="320" alt="Invoicing Platform" /> |
| **Writing (`/writing`)** | <img src="https://raw.githubusercontent.com/arielmell0/ultra-framer-template-clone/master/screenshots/11-writing.png" width="320" alt="Writing" /> | **Store (`/store`)** | <img src="https://raw.githubusercontent.com/arielmell0/ultra-framer-template-clone/master/screenshots/12-store.png" width="320" alt="Store" /> |
