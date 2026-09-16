export interface ProjectPrint {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  client: string;
  timeline: string;
  role: string;
  outcome: string;
  logo: string;
  cover: string;
  ratingBadge?: string;
  paragraphs: string[];
  prints?: ProjectPrint[];
}

export const projects: Project[] = [
  {
    slug: "pathfinder",
    title: "Pathfinder",
    subtitle: "AI-driven educational discovery and career guidance platform with RAG, LangChain, and Pinecone",
    client: "Upwork Client (Educational Platform)",
    timeline: "Feb 2025 - May 2025",
    role: "AI & Full Stack Engineer",
    outcome:
      "Engineered an intelligent Retrieval-Augmented Generation (RAG) discovery engine with LangChain, Pinecone vector embeddings, and OpenAI LLMs to match students with university degrees and career paths, earning a 5.0-star Upwork review.",
    logo: "/images/pathfinder-favicon.png",
    cover: "/project-prints/pathfinder/00-cover.png",
    ratingBadge: "/images/upwork-5-star-review.png",
    prints: [
      {
        src: "/project-prints/pathfinder/01-college-recommendations-desktop.png",
        caption:
          "RAG college discovery engine featuring semantic search across degree programs, relevance sorting, and institutional cards.",
      },
      {
        src: "/project-prints/pathfinder/02-career-recommendations-desktop.png",
        caption:
          "AI career recommendations matching student strengths with industry sectors, salary expectations ($90k-$120k), and growth rates.",
      },
      {
        src: "/project-prints/pathfinder/03-compare-colleges-desktop.png",
        caption:
          "Multi-college comparison matrix comparing admissions, tuition fees, and degree offerings side by side.",
      },
      {
        src: "/project-prints/pathfinder/04-strengths-assessment-desktop.png",
        caption:
          "Psychometric strengths evaluation module measuring cognitive traits such as Achiever and Problem-Solving on a 5-point scale.",
      },
      {
        src: "/project-prints/pathfinder/05-user-profile-desktop.png",
        caption:
          "Student dashboard and profile hub displaying completed assessments, strengths reports, and bookmarked colleges.",
      },
      {
        src: "/project-prints/pathfinder/06-signup-onboarding-desktop.png",
        caption:
          "Multi-role account registration interface supporting Students, School Administrators, and Guidance Counselors.",
      },
      {
        src: "/project-prints/pathfinder/07-college-recommendations-mobile.png",
        caption:
          "Mobile college recommendations feed with interactive filters and touch-optimized institution cards.",
      },
      {
        src: "/project-prints/pathfinder/08-career-recommendations-mobile.png",
        caption:
          "Mobile career guidance view with industry badges, salary benchmarks, and matching skills tags.",
      },
      {
        src: "/project-prints/pathfinder/09-compare-colleges-mobile.png",
        caption:
          "Mobile university comparison tool evaluating tuition, campus settings, and program levels.",
      },
      {
        src: "/project-prints/pathfinder/10-student-dashboard-mobile.png",
        caption:
          "Mobile student portal tracking psychometric assessment progress and quick recommendation shortcuts.",
      },
      {
        src: "/project-prints/pathfinder/11-user-profile-mobile.png",
        caption:
          "Mobile profile view displaying account credentials, strengths report status, and saved programs.",
      },
      {
        src: "/project-prints/pathfinder/12-strengths-assessment-mobile.png",
        caption:
          "Mobile psychometric assessment question card with quick response selectors.",
      },
      {
        src: "/project-prints/pathfinder/13-signup-mobile.png",
        caption:
          "Mobile account creation flow with role selection and credentials configuration.",
      },
      {
        src: "/project-prints/pathfinder/14-college-filters-modal-mobile.png",
        caption:
          "Mobile college discovery filter modal with tuition sliders, state selectors, and setting options.",
      },
      {
        src: "/project-prints/pathfinder/15-email-confirmation-mobile.png",
        caption:
          "Mobile email verification step with one-time security code confirmation.",
      },
      {
        src: "/project-prints/pathfinder/16-password-reset-desktop.png",
        caption:
          "Secure account recovery flow with automated email reset link generation.",
      },
    ],
    paragraphs: [
      "Pathfinder is an educational discovery platform created to help international students find the right universities and careers. After resolving critical production bugs in a client's marketing API, I was referred to lead the architecture and frontend implementation of Pathfinder's AI recommendation engine.",
      "I constructed the Retrieval-Augmented Generation (RAG) pipeline using LangChain, Pinecone vector embeddings, and OpenAI models. The system evaluates student psychometric assessments, matches them against institutional databases and employment market statistics, and generates personalized recommendations. I also developed the responsive web interface across desktop and mobile views based on custom Figma designs, earning a 5.0-star client review on Upwork.",
    ],
  },
  {
    slug: "admin-crm",
    title: "Admin CRM for marketing company",
    subtitle: "Admin CRM built in React-Admin for operations and campaign management",
    client: "Marketing Company",
    timeline: "2023 – 2025",
    role: "Full Stack Developer",
    outcome:
      "Worked with the team to build and maintain the internal Admin CRM using React-Admin, enabling administrators to create campaigns, review influencer stories in curatorship, and manage all back-office operations.",
    logo: "/images/infleux-favicon.png",
    cover: "/project-prints/infleux/admin%20app/1.%20influencers-stories-curatorship-system.png",
    prints: [
      {
        src: "/project-prints/infleux/admin%20app/1.%20influencers-stories-curatorship-system.png",
        caption:
          "Influencers stories curatorship system — review and validate submitted sponsored stories.",
      },
      {
        src: "/project-prints/infleux/admin%20app/2.%20influencer-profile-crm.png",
        caption:
          "Influencer profile CRM — creator profiles, ratings, and performance overview.",
      },
    ],
    paragraphs: [
      "An internal Admin CRM built with React-Admin for a marketing company. Working alongside other developers, I helped develop the tools that administrators needed to manage everything across the platform.",
      "The system was responsible for all things an admin can create: setting up new marketing campaigns, reviewing and validating influencer story posts in the curatorship queue, checking creator profiles and metrics, and managing payouts.",
    ],
  },
  {
    slug: "advertisers-platform",
    title: "Advertiser Platform",
    subtitle: "Campaign creation and performance tracking platform for brand advertisers",
    client: "Marketing Company",
    timeline: "2023 – 2025",
    role: "Full Stack Developer",
    outcome:
      "Worked on the advertiser platform where brands create marketing campaigns, set custom payout models (CPC, CPA, CPI), and see influencers actively running their campaigns.",
    logo: "/images/infleux-favicon.png",
    cover: "/project-prints/infleux/advertisers/1.%20adv%20web%20dashboard.png",
    prints: [
      {
        src: "/project-prints/infleux/advertisers/1.%20adv%20web%20dashboard.png",
        caption:
          "Advertiser web dashboard — campaign metrics, spend overview, and performance tracking.",
      },
      {
        src: "/project-prints/infleux/advertisers/2.%20adv%20web%20campaigns.png",
        caption:
          "Campaign management — creating campaigns and defining compensation rates (CPC, CPA, CPI).",
      },
      {
        src: "/project-prints/infleux/advertisers/3.%20adv%20web%20-%20influencer%20running%20the%20campaign%20(posted%20an%20storie%20with%20the%20link%20of%20the%20campaign).png",
        caption:
          "Active campaign monitor — viewing influencers running the campaign with their posted story and link.",
      },
    ],
    paragraphs: [
      "An advertiser platform for the marketing company where companies create and manage marketing campaigns. Once created, campaigns become visible to influencers on the company's mobile and web apps, who can participate and earn money.",
      "Advertisers define how much their campaigns pay and the compensation model — such as cost per click (CPC), cost per acquisition (CPA), or cost per install (CPI). They can also monitor live campaign results and see which influencers have posted stories with the campaign links.",
    ],
  },
  {
    slug: "agencies-platform",
    title: "Assessor Platform for Influencer Management",
    subtitle: "Management platform for talent assessors to oversee influencers and dispatch campaign alerts",
    client: "Marketing Company",
    timeline: "2023 – 2025",
    role: "Full Stack Developer",
    outcome:
      "Developed features for talent assessors to monitor their influencers' campaigns, review briefings, and send push notifications to alert them about new opportunities.",
    logo: "/images/infleux-favicon.png",
    cover: "/project-prints/infleux/agencies/1.%20asessor%20app%20web%20-%20list%20your%20influencers.png",
    prints: [
      {
        src: "/project-prints/infleux/agencies/1.%20asessor%20app%20web%20-%20list%20your%20influencers.png",
        caption:
          "Assessor web app — list of managed influencers and active statuses.",
      },
      {
        src: "/project-prints/infleux/agencies/1.%20asessor%20app%20web%20-%20after%20select%20influencer%20-%20list%20campaigns%20available%20for%20him.png",
        caption:
          "Available campaigns — listing open campaigns matched for a selected influencer.",
      },
      {
        src: "/project-prints/infleux/agencies/1.%20asessor%20app%20web%20-%20after%20select%20influencer%20and%20campaign%20-%20list%20the%20campaign%20briefing%20or%20stories%20if%20already%20posted%20and%20linked%20to%20campaign.png",
        caption:
          "Campaign briefing & stories — checking requirements and posted stories linked to the campaign.",
      },
      {
        src: "/project-prints/infleux/agencies/1.%20mobile%20app%20-%20asessor%20flow.png",
        caption:
          "Assessor mobile app — mobile view of the assessor management flow.",
      },
      {
        src: "/project-prints/infleux/agencies/2.%20mobile%20app%20assessor%20flow%20list%20asessor.png",
        caption:
          "Mobile assessor directory — managing assessor assignments on mobile.",
      },
      {
        src: "/project-prints/infleux/agencies/3.%20mobile%20app%20asessor%20approve.png",
        caption:
          "Mobile assessor review — approving submissions and sending push alerts to influencers.",
      },
    ],
    paragraphs: [
      "An assessor platform designed for talent managers and agencies to manage their influencers. It follows a similar structure to the advertiser platform, but tailored for assessors overseeing their creator rosters.",
      "Assessors can view which campaigns their influencers are currently participating in, check campaign briefings or posted stories, and dispatch push notifications to alert their influencers to check out and join relevant campaigns.",
    ],
  },
  {
    slug: "influencer-app",
    title: "Influencer App (App-Loja)",
    subtitle: "Mobile app for influencers to browse marketing campaigns and earn money based on performance",
    client: "Marketing Company",
    timeline: "2022 – 2025",
    role: "Full Stack Developer",
    outcome:
      "Worked on the influencer mobile app (app-loja) where creators find available campaigns, review briefings, and earn money based on advertiser payout models (CPC, CPA, CPI).",
    logo: "/images/infleux-favicon.png",
    cover: "/project-prints/infleux/app-loja/1.home.png",
    prints: [
      {
        src: "/project-prints/infleux/app-loja/1.home.png",
        caption:
          "App-loja home — creator dashboard with available balance and campaign highlights.",
      },
      {
        src: "/project-prints/infleux/app-loja/2.campaign-list.png",
        caption:
          "Campaign list — open campaigns showing compensation models (CPC, CPA, CPI).",
      },
      {
        src: "/project-prints/infleux/app-loja/3.%20campaign-briefing.png",
        caption:
          "Campaign briefing — creative guidelines, talking points, and participation link.",
      },
    ],
    paragraphs: [
      "The mobile application (app-loja) for the marketing company where influencers enter to discover brand campaigns and earn money. Working with the engineering team, I contributed to building features across the app.",
      "Influencers can browse available campaigns offered by advertising companies, check briefings, and run campaigns to earn money based on what the advertiser pays — whether cost per click (CPC), cost per acquisition (CPA), or cost per install (CPI).",
    ],
  },
  {
    slug: "influencer-web",
    title: "Influencer Web Platform",
    subtitle: "Web version of the influencer app for creators to access campaigns in the browser",
    client: "Marketing Company",
    timeline: "2023 – 2025",
    role: "Full Stack Developer",
    outcome:
      "Built the web version of the influencer app, giving creators access to campaigns, briefings, and earnings from desktop and mobile browsers.",
    logo: "/images/infleux-favicon.png",
    cover: "/project-prints/infleux/influencer-web/4.%20web%20desktop%20-%20influencer%20dashboard.png",
    prints: [
      {
        src: "/project-prints/infleux/influencer-web/1.%20web%20mobile%20-%20influencer%20login%20page.png",
        caption: "Influencer web mobile — login page.",
      },
      {
        src: "/project-prints/infleux/influencer-web/2.%20web%20desktop%20-%20influencer%20login%20page.png",
        caption: "Influencer web desktop — login page.",
      },
      {
        src: "/project-prints/infleux/influencer-web/2.%20web%20mobile%20-%20influencer%20dashboard.png",
        caption: "Influencer web mobile — creator dashboard.",
      },
      {
        src: "/project-prints/infleux/influencer-web/4.%20web%20desktop%20-%20influencer%20dashboard.png",
        caption: "Influencer web desktop — dashboard and performance analytics.",
      },
    ],
    paragraphs: [
      "The web version of the influencer app, providing the same core experience in the browser for creators who prefer using desktop or mobile web.",
      "Influencers can log in, view open marketing campaigns, read briefings, and track their participation and earnings with a responsive layout designed for both desktop and mobile screens.",
    ],
  },
  {
    slug: "invoicing-accountant-portal",
    title: "Invoicing & Accountant Platform (NFs)",
    subtitle: "Dedicated app for influencers' accountants to manage high-volume campaign invoices",
    client: "Marketing Company",
    timeline: "2024 – 2025",
    role: "Full Stack Developer",
    outcome:
      "Worked on the invoicing platform (NFs) where influencers invite their accountants via email to view campaign invoices, request billing data, and manage tax documentation.",
    logo: "/images/infleux-favicon.png",
    cover: "/project-prints/infleux/nfs/1.%20web%20mobile%20influencer%20view%20-%20home.png",
    prints: [
      {
        src: "/project-prints/infleux/nfs/1.%20web%20mobile%20influencer%20view%20-%20home.png",
        caption:
          "Influencer view — invoice home with pending and approved invoices.",
      },
      {
        src: "/project-prints/infleux/nfs/2.%20web%20mobile%20pending%20influencer%20view%20-%20invoice%20details.png",
        caption:
          "Invoice details — pending campaign invoice values and billing data.",
      },
      {
        src: "/project-prints/infleux/nfs/3.%20web%20mobile%20accountant%20view%20-%20home.png",
        caption:
          "Accountant view — home dashboard for linked accountants to view client invoices.",
      },
      {
        src: "/project-prints/infleux/nfs/4.%20how%20to%20register%20accounts%20and%20link%20to%20your%20influencer%20account.png.png",
        caption:
          "Registration flow — how to register and link an accountant to an influencer account.",
      },
      {
        src: "/project-prints/infleux/nfs/5.%20how%20to%20add%20an%20accountant.png",
        caption:
          "Add accountant flow — inviting an accountant via email from the influencer app.",
      },
    ],
    paragraphs: [
      "Influencers in the company ran multiple marketing campaigns across many different places, generating a large volume of invoices (Notas Fiscais / NFs). Managing all these invoices became very complex, so we decided to create an app specifically for the influencers' accountants.",
      "Influencers invite their accountants via email directly from the app. Accountants can then log into their own dedicated platform to see campaign invoices, request invoice and billing data, and keep all campaign tax documentation organized.",
    ],
  },
  {
    slug: "sideup-employer-portal",
    title: "SideUp Employer Portal",
    subtitle: "Workforce benefits management platform for program enrollment, payroll deductions, and automated HR sync",
    client: "SideUp",
    timeline: "May 2026 - Present",
    role: "Full Stack Developer",
    outcome:
      "Engineered the rewritten employer web application on Vite and React with Clerk authentication, multi-step program creation wizards, automated invoice settlements, and HR integrations.",
    logo: "/images/sideup-purple-favicon.png",
    cover: "/project-prints/sideup-v2/admin-web/01-home.png",
    prints: [
      {
        src: "/project-prints/sideup-v2/admin-web/01-home.png",
        caption:
          "Employer dashboard with company balance metrics, active programs overview, upcoming invoice status, and recent benefit activity.",
      },
      {
        src: "/project-prints/sideup-v2/admin-web/02-employees.png",
        caption:
          "Workforce employee directory displaying department assignments, active statuses, filter toggles, and bulk edit actions.",
      },
      {
        src: "/project-prints/sideup-v2/admin-web/03-employees-import.png",
        caption:
          "Sync and import hub supporting direct HRIS integration with Gusto, BambooHR, and ADP alongside bulk spreadsheet uploads.",
      },
      {
        src: "/project-prints/sideup-v2/admin-web/04-benefits.png",
        caption:
          "Corporate benefit programs management table showing scheduled enrollment windows, headcount allocations, and annual budgets.",
      },
      {
        src: "/project-prints/sideup-v2/admin-web/05-benefits-documents.png",
        caption:
          "Benefits compliance and document verification center tracking pending expense evidence, approval cycles, and reimbursement claims.",
      },
      {
        src: "/project-prints/sideup-v2/admin-web/06-billing-overview.png",
        caption:
          "Financial control dashboard displaying company wallet balance, top-up triggers, current billing cycle totals, and shortfall projections.",
      },
      {
        src: "/project-prints/sideup-v2/admin-web/07-billing-invoices.png",
        caption:
          "Billing history and invoice statements ledger with 12-month date filters, payment statuses, and CSV export capabilities.",
      },
      {
        src: "/project-prints/sideup-v2/admin-web/08-billing-payment-methods.png",
        caption:
          "Funding sources management interface for credit card settlement, bank direct debits, and payment priority reordering.",
      },
      {
        src: "/project-prints/sideup-v2/admin-web/09-settings-company-profile.png",
        caption:
          "Company profile management with KYB identity verification badge, platform contact details, and corporate legal entity records.",
      },
      {
        src: "/project-prints/sideup-v2/admin-web/10-settings-platform-users.png",
        caption:
          "Role-based platform access control list managing company administrators, invitations, and active permissions.",
      },
      {
        src: "/project-prints/sideup-v2/admin-web/11-settings-integrations.png",
        caption:
          "Integrations directory with one-click OAuth connections for Xero accounting, Gusto, and BambooHR.",
      },
      {
        src: "/project-prints/sideup-v2/admin-web/12-settings-my-account.png",
        caption:
          "Administrator profile view managing personal credentials, notification preferences, and platform security.",
      },
      {
        src: "/project-prints/sideup-v2/admin-web/13-employees-create.png",
        caption:
          "Four-step employee onboarding wizard collecting personal identity, job department, compensation details, and benefits eligibility.",
      },
      {
        src: "/project-prints/sideup-v2/admin-web/14-benefits-create-program.png",
        caption:
          "Seven-step benefit program creation wizard configuring foundation categories, contribution rules, eligibility criteria, and budget caps.",
      },
    ],
    paragraphs: [
      "The employer portal was completely rewritten from the prototype system to eliminate frontend race conditions and simplify workforce administration. Built with React and TypeScript, the new application provides corporate managers with a clear control center to administer employee benefit schemes, manage automated payroll deductions, and monitor invoice settlements.",
      "I built the multi-step program configuration wizard and the HR integration pipelines. The system syncs employee rosters directly with providers like Gusto and BambooHR, calculates monthly budget commitments across flexible allowance categories, and handles automated invoicing via Stripe direct debit.",
    ],
  },
  {
    slug: "sideup-backoffice",
    title: "SideUp Backoffice",
    subtitle: "Internal operations platform for benefit catalogs, statutory obligation rules, and multi-region deployment",
    client: "SideUp",
    timeline: "May 2026 - Present",
    role: "Full Stack Developer",
    outcome:
      "Built the internal operations console managing global benefit catalogs, Merchant Category Code mappings, statutory obligation condition engines, and Xero accounting pipelines.",
    logo: "/images/sideup-purple-favicon.png",
    cover: "/project-prints/sideup-v2/backoffice/01-catalog-benefits.png",
    prints: [
      {
        src: "/project-prints/sideup-v2/backoffice/01-catalog-benefits.png",
        caption:
          "Global platform benefit catalog defining pre-tax transit, child care, learning budgets, and lifestyle allowances with annual caps.",
      },
      {
        src: "/project-prints/sideup-v2/backoffice/02-catalog-mcc.png",
        caption:
          "Merchant Category Code mapping registry restricting allowance spending to approved merchant category groups.",
      },
      {
        src: "/project-prints/sideup-v2/backoffice/03-statutory-obligations.png",
        caption:
          "Statutory obligations engine enforcing mandatory regional employer benefits, including US transit ordinances and UK workplace pension rules.",
      },
      {
        src: "/project-prints/sideup-v2/backoffice/04-condition-types.png",
        caption:
          "Eligibility condition types registry evaluating employee age, location, industry, dependents, and filial criteria for automated program matching.",
      },
      {
        src: "/project-prints/sideup-v2/backoffice/05-terms.png",
        caption:
          "Versioned legal terms management console publishing markdown contract revisions for employer and customer agreements.",
      },
      {
        src: "/project-prints/sideup-v2/backoffice/06-regions.png",
        caption:
          "Infrastructure deployment regions and API routing targets managing regional data residency and localized microservice endpoints.",
      },
      {
        src: "/project-prints/sideup-v2/backoffice/07-billing.png",
        caption:
          "Cross-company billing monitor tracking settlement cycles, open balances, overdue invoices, and transaction reconciliation.",
      },
      {
        src: "/project-prints/sideup-v2/backoffice/07-billing-xero.png",
        caption:
          "SideUp Xero OAuth integration console synchronizing ledger entries and reconciliation data directly into accounting pipelines.",
      },
      {
        src: "/project-prints/sideup-v2/backoffice/08-wallets.png",
        caption:
          "Real-time employee wallet monitor tracking card status, active balances, and allocation commitments across all enrolled corporate clients.",
      },
      {
        src: "/project-prints/sideup-v2/backoffice/09-notification-test.png",
        caption:
          "Notification testing console allowing operators to dispatch targeted push notifications and verify dispatch pipelines.",
      },
      {
        src: "/project-prints/sideup-v2/backoffice/10-new-benefit-wizard.png",
        caption:
          "Five-step benefit creation wizard establishing category definitions, card restrictions, employee guides, and voluntary payroll deduction rules.",
      },
    ],
    paragraphs: [
      "The backoffice platform is the operations backbone for SideUp's internal teams. It centralizes control over the platform-wide benefits catalog, sets legal and compliance boundaries, and regulates transaction routing across multiple geographic jurisdictions.",
      "I developed the statutory obligations configuration engine, which evaluates complex employee demographic rules to automatically enforce regional mandates. I also integrated the Merchant Category Code mapping system and built the automated Xero accounting sync, enabling operations staff to reconcile high-volume company settlements without manual ledger entry.",
    ],
  },
  {
    slug: "sideup-customer-web",
    title: "SideUp Customer App",
    subtitle: "Cross-platform mobile web app for digital Visa benefits cards, peer-to-peer recognition, and allowance tracking",
    client: "SideUp",
    timeline: "May 2026 - Present",
    role: "Full Stack Developer",
    outcome:
      "Rewrote the cardholder web application using React Native Web and Expo Router, delivering instant digital card issuance, peer recognition rewards, and spend history.",
    logo: "/images/sideup-purple-favicon.png",
    cover: "/project-prints/sideup-v2/customer-web/01-home.png",
    prints: [
      {
        src: "/project-prints/sideup-v2/customer-web/01-home.png",
        caption:
          "Cardholder dashboard featuring personalized greetings, pre-tax allowance cards, recent spend summaries, and the colleague recognition feed.",
      },
      {
        src: "/project-prints/sideup-v2/customer-web/02-cards.png",
        caption:
          "Digital wallet screen displaying branded Visa card status with Celtic Bank and Stripe Issuing compliance disclosures.",
      },
      {
        src: "/project-prints/sideup-v2/customer-web/03-recognition.png",
        caption:
          "Peer recognition portal with monthly point balances and an interactive shoutout composer with company core value badges.",
      },
      {
        src: "/project-prints/sideup-v2/customer-web/04-activity.png",
        caption:
          "Card transaction ledger featuring real-time merchant search, receipt requirement alerts, and status filter pills.",
      },
      {
        src: "/project-prints/sideup-v2/customer-web/05-profile.png",
        caption:
          "Employee profile and security settings with SOC2 compliance verification, dark theme selection, and biometric timeout controls.",
      },
      {
        src: "/project-prints/sideup-v2/customer-web/06-benefits.png",
        caption:
          "Enrolled benefits overview displaying active employer-sponsored categories, remaining balances, and HR support links.",
      },
    ],
    paragraphs: [
      "The customer web application was re-engineered with React Native Web and Expo Router to replace the earlier prototype's brittle onboarding flow with a dependable, responsive interface. It gives enrolled employees immediate access to their employer-funded benefit wallets and branded virtual Visa cards.",
      "I implemented the cardholder wallet experience with Stripe Issuing integration, ensuring real-time spend notifications and receipt capture. I also built the peer recognition module, which lets colleagues award points tied to company values that can be redeemed across lifestyle and wellness allowances.",
    ],
  },
  {
    slug: "sideup-business-portal",
    title: "SideUp Business Portal (Legacy v1)",
    subtitle: "Initial employer portal prototype for benefit enrollment schemes, flexible allowance budgets, and tax reporting",
    client: "SideUp",
    timeline: "Jan 2026 - May 2026",
    role: "Full Stack Developer",
    outcome:
      "Built multi-step enrollment workflows, flexible allowance allocations, and tax reporting features across React and Node.js microservices for UK corporate clients.",
    logo: "/images/sideup-favicon.png",
    cover: "/project-prints/sideup/business-front/01-home.png",
    prints: [
      {
        src: "/project-prints/sideup/business-front/01-home.png",
        caption:
          "Employer dashboard with enrollment metrics, average benefit spend, and upcoming payroll invoice dates.",
      },
      {
        src: "/project-prints/sideup/business-front/02-employees.png",
        caption:
          "Employee directory tracking enrollment statuses, payroll allocations, and active team members.",
      },
      {
        src: "/project-prints/sideup/business-front/03-tax-report.png",
        caption:
          "Tax reporting center with deductible allowance summaries and payroll reporting periods.",
      },
      {
        src: "/project-prints/sideup/business-front/04-new-enrollment-01.png",
        caption:
          "Benefit enrollment setup step: selecting payment frequency, schedule, and categories such as commuting, learning, and wellness.",
      },
      {
        src: "/project-prints/sideup/business-front/04-new-enrollment-02-setup.png",
        caption:
          "Budget allocation step: configuring flexible monthly allowances per employee with live cost calculations.",
      },
      {
        src: "/project-prints/sideup/business-front/04-new-enrollment-03-employees.png",
        caption:
          "Roster confirmation step: selecting employees eligible for the enrollment scheme.",
      },
      {
        src: "/project-prints/sideup/business-front/04-new-enrollment-04-summary.png",
        caption:
          "Enrollment summary review: checking category commitments and schedule details before submission.",
      },
      {
        src: "/project-prints/sideup/business-front/04-new-enrollment-05-confirm-modal.png",
        caption:
          "Conflict handling modal: managing reassignments when an employee is already enrolled in another scheme.",
      },
      {
        src: "/project-prints/sideup/business-front/04-new-enrollment-06-details.png",
        caption:
          "Active enrollment details page: category allocations, invoicing schedule, and cancellation options.",
      },
    ],
    paragraphs: [
      "SideUp provides an employee benefits management platform for UK companies. Working on the business portal, I helped build the tools that employers use to set up corporate benefit packages, manage employee rosters, and run payroll reports.",
      "The enrollment flow lets companies configure flexible benefit categories, including commuting, meals, education, and health. The frontend connects to a Node.js and PostgreSQL backend where submitted enrollments create real employee customer accounts, assign category allowances, and calculate monthly payroll deductions.",
    ],
  },
  {
    slug: "sideup-admin-portal",
    title: "SideUp Admin Console (Legacy v1)",
    subtitle: "First-generation operations backoffice for UK tax jurisdictions and client company records",
    client: "SideUp",
    timeline: "Jan 2026 - May 2026",
    role: "Full Stack Developer",
    outcome:
      "Developed backoffice tools for client organization management, HMRC tax jurisdiction rules, and statutory pension compliance.",
    logo: "/images/sideup-favicon.png",
    cover: "/project-prints/sideup/admin-front/01-home.png",
    prints: [
      {
        src: "/project-prints/sideup/admin-front/01-home.png",
        caption:
          "Admin operations dashboard monitoring platform enterprise activity, active companies, and total benefit volumes.",
      },
      {
        src: "/project-prints/sideup/admin-front/02-list-companies.png",
        caption:
          "Client companies list showing enrolled employee counts, total benefit commitments, and account statuses.",
      },
      {
        src: "/project-prints/sideup/admin-front/03-taxing.png",
        caption:
          "Tax regions interface configuring UK allowances, tax years, reporting periods, and jurisdictional rules.",
      },
      {
        src: "/project-prints/sideup/admin-front/04-terms-of-use.png",
        caption:
          "Regulatory terms of use table with status tracking and version creation actions.",
      },
      {
        src: "/project-prints/sideup/admin-front/05-terms-of-use.png",
        caption:
          "Terms of use management view for compliance review and legal document updates.",
      },
    ],
    paragraphs: [
      "The admin console serves SideUp's internal operations team. It handles platform oversight across all enrolled client companies, monitors benefit distribution volumes, and manages compliance configurations.",
      "I built features for the taxing module, where operators define regional tax rules for UK jurisdictions and configure statutory requirements such as workplace pension auto-enrolment rules, salary sacrifice mechanisms, and annual contribution limits.",
    ],
  },
  {
    slug: "sideup-employee-app",
    title: "SideUp Employee App (Legacy v1)",
    subtitle: "Early mobile web prototype for employee benefit cards and flexible wallets",
    client: "SideUp",
    timeline: "Jan 2026 - May 2026",
    role: "Full Stack Developer",
    outcome:
      "Delivered responsive interfaces and microservice integrations for virtual card management, category wallets, and transaction tracking.",
    logo: "/images/sideup-favicon.png",
    cover: "/project-prints/sideup/customer-front/01-home.png",
    prints: [
      {
        src: "/project-prints/sideup/customer-front/01-home.png",
        caption:
          "Employee home screen showing category balance cards, expense distribution charts, and shortcut navigation.",
      },
      {
        src: "/project-prints/sideup/customer-front/02-cards.png",
        caption:
          "Virtual card screen displaying branded virtual Visa cards with controls to create and manage cards.",
      },
      {
        src: "/project-prints/sideup/customer-front/03-transactions.png",
        caption:
          "Transactions view with date filters, category search, and real-time expense reconciliation.",
      },
      {
        src: "/project-prints/sideup/customer-front/04-support.png",
        caption:
          "In-app support ticket form for card inquiries, claim questions, and file attachments.",
      },
      {
        src: "/project-prints/sideup/customer-front/05-offer.png",
        caption:
          "Benefit scheme status screen for employees checking active scheme enrollments.",
      },
    ],
    paragraphs: [
      "The employee application gives workers direct access to the corporate benefits provided by their employer. Employees log in using Clerk authentication to view their allowances, check balances across categories, and issue virtual cards.",
      "I developed components for the card management view and transaction history, integrating with backend card issuing APIs to support instant virtual Visa card creation and category-tagged transaction feeds.",
    ],
  },
  {
    slug: "upwork-cms",
    title: "Upwork CMS",
    subtitle: "Figma-to-React landing CMS with Puck — 5-star freelance delivery",
    client: "Upwork Client",
    timeline: "Jan 2024 – Dec 2025",
    role: "Freelance Full Stack Developer",
    outcome:
      "Engineered a visual component-driven landing page CMS leveraging Puck and React, converting intricate Figma systems into pixel-perfect modular blocks with 5-star rating.",
    logo: "/images/logo-gamma.png",
    cover: "/images/work-beta.jpg",
    paragraphs: [
      "Delivered a comprehensive visual page builder and content management system for an international client via Upwork, earning a 5-star review.",
      "Translated complex design systems directly from Figma into reusable, modular React components integrated with the Puck visual editor. This allowed non-technical marketing teams to visually compose, arrange, and publish high-converting landing pages independently.",
      "Focused on performance optimization, responsive layouts across mobile and desktop, and strict TypeScript safety across the entire component library.",
    ],
  },
];
