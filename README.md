# Ultra Framer Portfolio Clone — Ariel Mello

A pixel-perfect Next.js reference clone of the [Ultra Framer Portfolio Template](https://ultra.framer.website/) customized with **Ariel Mello**'s real software engineering portfolio, career timeline, tech stack, and separated marketing systems architecture.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-5.0-729B1B?logo=vitest)](https://vitest.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript)](https://www.typescriptlang.org/)

---

## Visual Previews (Captured via `browser-harness`)

| Page | Preview | Page | Preview |
| :--- | :--- | :--- | :--- |
| **Home (`/`)** | <img src="screenshots/01-home.png" width="320" alt="Home" /> | **About (`/about`)** | <img src="screenshots/02-about.png" width="320" alt="About" /> |
| **Stack (`/stack`)** | <img src="screenshots/03-stack.png" width="320" alt="Stack" /> | **Contact (`/contact`)** | <img src="screenshots/04-contact.png" width="320" alt="Contact" /> |
| **Admin CRM (`/work/admin-crm`)** | <img src="screenshots/05-work-admin-crm.png" width="320" alt="Admin CRM" /> | **Advertiser Platform (`/work/advertisers-platform`)** | <img src="screenshots/06-work-advertisers-platform.png" width="320" alt="Advertiser Platform" /> |
| **Assessor Platform (`/work/agencies-platform`)** | <img src="screenshots/07-work-agencies-platform.png" width="320" alt="Assessor Platform" /> | **Influencer App (`/work/influencer-app`)** | <img src="screenshots/08-work-influencer-app.png" width="320" alt="Influencer App" /> |
| **Influencer Web (`/work/influencer-web`)** | <img src="screenshots/09-work-influencer-web.png" width="320" alt="Influencer Web" /> | **Invoicing & NFs (`/work/invoicing-accountant-portal`)** | <img src="screenshots/10-work-invoicing-portal.png" width="320" alt="Invoicing Platform" /> |
| **Writing (`/writing`)** | <img src="screenshots/11-writing.png" width="320" alt="Writing" /> | **Store (`/store`)** | <img src="screenshots/12-store.png" width="320" alt="Store" /> |

---

## Separated Platforms & Works Architecture

The marketing platform projects (previously consolidated under "Infleux") are structured into 6 standalone system showcases, accompanied by real production prints:

1. **Admin CRM for marketing company** (`/work/admin-crm`): Internal Admin CRM built with React-Admin for operations, campaign creation, influencer story curatorship queue, and creator CRM.
2. **Advertiser Platform** (`/work/advertisers-platform`): Brand advertiser platform for creating campaigns with custom compensation models (CPC, CPA, CPI) and real-time story monitoring.
3. **Assessor Platform for Influencer Management** (`/work/agencies-platform`): Talent agency management tool to oversee creator rosters, inspect active campaigns, and dispatch push alerts.
4. **Influencer App (App-Loja)** (`/work/influencer-app`): Creator mobile marketplace application to discover campaigns, review briefings, and earn performance-based payouts.
5. **Influencer Web Platform** (`/work/influencer-web`): Responsive browser alternative for creators to access campaigns and track earnings across desktop and mobile.
6. **Invoicing & Accountant Platform (NFs)** (`/work/invoicing-accountant-portal`): Dedicated financial portal allowing creators to invite accountants via email to review high-volume campaign invoices and tax documentation.
7. **Freelance & Remote Projects**: Retains SideUp (London Node.js team), Upwork CMS (Puck visual editor), and Upwork RAG.

---

## Verification & Quality Gates

- **Vitest Unit & Integration Tests**: 17/17 tests passing across 8 test suites.
- **TypeScript Strict Checking**: `tsc --noEmit` passing with 0 errors.
- **Next.js Production Build**: All 26 routes statically generated (`SSG`).
- **TLC Spec-Driven Compliance**: Full requirement traceability in `.specs/features/`.

---

## Getting Started

### Prerequisites
- Node.js >= 20.x
- npm / pnpm / yarn

### Development Server
```bash
npm install
npm run dev
# Open http://localhost:4100
```

### Test Suite
```bash
npm test
```

### Typecheck & Production Build
```bash
npm run typecheck
npm run build
```

---

## License

MIT License.
