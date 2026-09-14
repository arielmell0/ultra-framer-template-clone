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
  paragraphs: string[];
  prints?: ProjectPrint[];
}

export const projects: Project[] = [
  {
    slug: "admin-crm",
    title: "Admin CRM for Marketing Company",
    subtitle: "Internal administrative CRM and curatorship system built with React-Admin and Node.js",
    client: "Marketing Platform",
    timeline: "2023 – 2025",
    role: "Lead Full Stack Developer",
    outcome:
      "Engineered a mission-critical internal CRM using React-Admin and FeathersJS microservices, empowering operations teams to curate thousands of creator stories daily, manage creator profiles, verify brand safety, and orchestrate payout disbursements.",
    logo: "/images/infleux-favicon.png",
    cover: "/project-prints/infleux/admin%20app/1.%20influencers-stories-curatorship-system.png",
    prints: [
      {
        src: "/project-prints/infleux/admin%20app/1.%20influencers-stories-curatorship-system.png",
        caption:
          "Content Curatorship System — real-time verification queue for operators to inspect, review, and validate sponsored Instagram story submissions and tracked affiliate links.",
      },
      {
        src: "/project-prints/infleux/admin%20app/2.%20influencer-profile-crm.png",
        caption:
          "Influencer Profile CRM — comprehensive creator profiles showcasing historical campaign performance, audience analytics, engagement metrics, and administrative notes.",
      },
    ],
    paragraphs: [
      "Engineered an end-to-end back-office CRM and operations management system tailored for the internal team of an influencer marketing company. Built on React-Admin with customized Material-UI components and backed by high-throughput FeathersJS and Node.js microservices.",
      "The backbone of the system is the Content Curatorship pipeline. When influencers post sponsored content, stories are ingested via webhooks and queued for verification. Operators review story screenshots, check brand mention compliance, validate unique campaign tracking links, and approve or reject submissions in real time.",
      "Developed an extensive Creator CRM module that aggregates creator analytics across campaigns: historical conversion rates, total revenue generated, engagement rates, audience demographics, and reliability scores. This gave the operations team immediate intelligence for matching creators to new brand briefs.",
      "Implemented comprehensive administrative controls for campaign creation, custom reward rule configuration, permission management, and automated payment batch exports, drastically reducing back-office overhead and manual verification errors.",
    ],
  },
  {
    slug: "advertisers-platform",
    title: "Advertiser Marketing Platform",
    subtitle: "Self-service campaign builder and performance attribution portal for brand advertisers",
    client: "Marketing Platform",
    timeline: "2023 – 2025",
    role: "Full Stack Developer",
    outcome:
      "Architected a self-service advertiser portal in Next.js and Node.js enabling brands to launch targeted influencer marketing campaigns, configure multi-model payout structures (CPC, CPA, CPI), and track live campaign ROI and conversion attribution.",
    logo: "/images/infleux-favicon.png",
    cover: "/project-prints/infleux/advertisers/1.%20adv%20web%20dashboard.png",
    prints: [
      {
        src: "/project-prints/infleux/advertisers/1.%20adv%20web%20dashboard.png",
        caption:
          "Advertiser Web Dashboard — real-time ROI tracking, active budget consumption, live impressions, and campaign health metrics.",
      },
      {
        src: "/project-prints/infleux/advertisers/2.%20adv%20web%20campaigns.png",
        caption:
          "Campaign Creation & Management — self-service campaign builder defining goals, budgets, target creator tiers, and compensation rates.",
      },
      {
        src: "/project-prints/infleux/advertisers/3.%20adv%20web%20-%20influencer%20running%20the%20campaign%20(posted%20an%20storie%20with%20the%20link%20of%20the%20campaign).png",
        caption:
          "Live Influencer Campaign Tracking — real-time monitor displaying creators currently running the campaign with verified story posts and attributed clicks.",
      },
    ],
    paragraphs: [
      "Engineered a dedicated web portal for corporate advertisers and brands to create, manage, and scale influencer marketing initiatives without agency friction. Developed with Next.js and TypeScript, connected to event-driven backend microservices.",
      "Brands can configure campaigns with customized financial payout models: Cost Per Click (CPC) for traffic, Cost Per Acquisition (CPA) for direct sales, Cost Per Install (CPI) for mobile apps, or fixed rates per story post. Advertisers allocate dedicated campaign budgets, set start/end deadlines, and establish brand guidelines.",
      "Constructed a comprehensive real-time analytics dashboard rendering live impressions, conversion funnels, click-through rates, and attributed revenue, allowing advertisers to monitor true return on ad spend (ROAS) as creators post stories.",
      "Built creator-monitoring features that allow advertisers to view in real time which influencers have accepted the campaign, inspect their posted stories, and track the volume of traffic each creator is generating.",
    ],
  },
  {
    slug: "agencies-platform",
    title: "Talent Agency & Assessor Platform",
    subtitle: "Management platform for talent managers and assessor agencies to oversee creators and campaign opportunities",
    client: "Marketing Platform",
    timeline: "2023 – 2025",
    role: "Full Stack Developer",
    outcome:
      "Created a dedicated agency management portal (Web & Mobile) empowering talent agents and assessors to manage their creator rosters, discover matched brand campaigns, and dispatch push alerts to boost creator participation.",
    logo: "/images/infleux-favicon.png",
    cover: "/project-prints/infleux/agencies/1.%20asessor%20app%20web%20-%20list%20your%20influencers.png",
    prints: [
      {
        src: "/project-prints/infleux/agencies/1.%20asessor%20app%20web%20-%20list%20your%20influencers.png",
        caption:
          "Agency Influencer Roster — multi-tenant creator directory displaying managed influencers, active statuses, and campaign participation counts.",
      },
      {
        src: "/project-prints/infleux/agencies/1.%20asessor%20app%20web%20-%20after%20select%20influencer%20-%20list%20campaigns%20available%20for%20him.png",
        caption:
          "Opportunity Discovery — curated feed of open brand campaigns filtered by suitability for a selected influencer's niche and audience.",
      },
      {
        src: "/project-prints/infleux/agencies/1.%20asessor%20app%20web%20-%20after%20select%20influencer%20and%20campaign%20-%20list%20the%20campaign%20briefing%20or%20stories%20if%20already%20posted%20and%20linked%20to%20campaign.png",
        caption:
          "Campaign Briefing & Story Verification — reviewing campaign guidelines, required talking points, and posted story proofs.",
      },
      {
        src: "/project-prints/infleux/agencies/1.%20mobile%20app%20-%20asessor%20flow.png",
        caption:
          "Assessor Mobile Experience — mobile-first view for talent agents to monitor creators and actions in real time.",
      },
      {
        src: "/project-prints/infleux/agencies/2.%20mobile%20app%20assessor%20flow%20list%20asessor.png",
        caption:
          "Mobile Assessor Directory — agency agent assignment and roster management on mobile devices.",
      },
      {
        src: "/project-prints/infleux/agencies/3.%20mobile%20app%20asessor%20approve.png",
        caption:
          "Mobile Story Approval & Alert Dispatch — approving creator submissions and broadcasting instant campaign push notifications.",
      },
    ],
    paragraphs: [
      "Influencer agencies and talent assessors represent dozens to hundreds of content creators simultaneously. To scale their workflow, I engineered a dedicated multi-tenant agency management platform comprising a responsive web application and mobile flows.",
      "The platform gives assessors full visibility into their assigned creators: which brand campaigns each influencer is currently participating in, which open campaigns fit their niche, and whether their submitted stories satisfy brand briefings.",
      "Implemented an active opportunity alert engine: assessors can identify high-paying brand campaigns and dispatch targeted push notifications directly to their creators' mobile apps, prompting them to seize limited-budget opportunities before allocations fill up.",
      "Designed role-based access control, multi-assessor team hierarchies, and performance reporting that aggregates collective agency earnings and creator commissions.",
    ],
  },
  {
    slug: "influencer-app",
    title: "Influencer Mobile App",
    subtitle: "React Native mobile app for creators to discover brand campaigns and monetize content",
    client: "Marketing Platform",
    timeline: "2022 – 2025",
    role: "Mobile & Backend Developer",
    outcome:
      "Delivered a high-retention React Native mobile app for iOS and Android, providing thousands of influencers with a seamless marketplace to browse campaigns, access creative briefings, and track real-time earnings from performance marketing (CPC, CPA, CPI).",
    logo: "/images/infleux-favicon.png",
    cover: "/project-prints/infleux/app-loja/1.home.png",
    prints: [
      {
        src: "/project-prints/infleux/app-loja/1.home.png",
        caption:
          "Mobile App Home — live balance overview, quick campaign discovery, and creator performance spotlight.",
      },
      {
        src: "/project-prints/infleux/app-loja/2.campaign-list.png",
        caption:
          "Campaign Marketplace — categorized feed of open brand opportunities with explicit payout models (CPC, CPA, CPI) and budget meters.",
      },
      {
        src: "/project-prints/infleux/app-loja/3.%20campaign-briefing.png",
        caption:
          "Campaign Briefing & Rules — detailed creative instructions, brand tone rules, mandatory hashtags, and affiliate link generation.",
      },
    ],
    paragraphs: [
      "Developed the primary mobile application used daily by thousands of content creators to monetize their social media reach. Built cross-platform with React Native, TypeScript, and native modules for push notifications and media handling.",
      "Creators can explore an active marketplace of brand campaigns filtered by categories (fashion, tech, e-commerce, gaming). Each campaign listing transparently displays compensation rules — whether paid per unique click (CPC), per completed sale/lead (CPA), or per app download (CPI).",
      "Built an interactive briefing screen that delivers clear creative guardrails, brand guidelines, audio/video suggestions, and one-tap unique affiliate link generation for Instagram Stories and TikTok bios.",
      "Integrated real-time websocket updates and push notifications alerting creators when campaigns launch, when their posted story is approved by curatorship, and when performance commissions are credited to their digital wallet.",
    ],
  },
  {
    slug: "influencer-web",
    title: "Influencer Web Portal",
    subtitle: "Responsive creator web platform providing complete desktop and mobile browser access to marketing campaigns",
    client: "Marketing Platform",
    timeline: "2023 – 2025",
    role: "Full Stack Developer",
    outcome:
      "Constructed a responsive, brand-aligned web companion for the influencer platform, enabling creators and agency managers to access campaigns, inspect briefings, and analyze revenue analytics on desktop and mobile web.",
    logo: "/images/infleux-favicon.png",
    cover: "/project-prints/infleux/influencer-web/4.%20web%20desktop%20-%20influencer%20dashboard.png",
    prints: [
      {
        src: "/project-prints/infleux/influencer-web/1.%20web%20mobile%20-%20influencer%20login%20page.png",
        caption:
          "Mobile Web Authentication — high-converting, responsive login screen tailored for mobile browser visitors.",
      },
      {
        src: "/project-prints/infleux/influencer-web/2.%20web%20desktop%20-%20influencer%20login%20page.png",
        caption:
          "Desktop Creator Login — clean branded entry portal with biometric and social authentication support.",
      },
      {
        src: "/project-prints/infleux/influencer-web/2.%20web%20mobile%20-%20influencer%20dashboard.png",
        caption:
          "Mobile Web Dashboard — on-the-go earnings overview, active campaign status, and quick-action shortcuts.",
      },
      {
        src: "/project-prints/infleux/influencer-web/4.%20web%20desktop%20-%20influencer%20dashboard.png",
        caption:
          "Desktop Creator Analytics Dashboard — rich graphical charts of historical impressions, clicks, conversion metrics, and wallet balances.",
      },
    ],
    paragraphs: [
      "Recognizing that many creators and professional digital influencers manage their businesses from desktop workstations and iPads, I architected a companion web portal delivering the entire creator experience in the browser.",
      "Engineered responsive layouts in React and Next.js that scale gracefully from mobile web viewports to expansive 4K desktop monitors, with consistent typography, fluid transitions, and dark-mode styling.",
      "The desktop dashboard provides in-depth analytical tools exceeding standard mobile views: multi-month revenue trend lines, campaign performance breakdowns by advertiser, click conversion rates, and downloadable CSV financial statements.",
      "Implemented secure JWT authentication with refresh rotation, granular permission scoping, and optimized static caching for snappy page loads and instant campaign filtering.",
    ],
  },
  {
    slug: "invoicing-accountant-portal",
    title: "Creator Invoicing & Accountant Portal",
    subtitle: "Dedicated financial platform connecting influencers with their accountants to automate high-volume campaign tax invoices",
    client: "Marketing Platform",
    timeline: "2024 – 2025",
    role: "Full Stack Developer & Product Architect",
    outcome:
      "Conceived and built a dedicated fiscal collaboration platform that solved invoice chaos for creators and CPAs, enabling one-click email invitations, automated invoice data requests, and transparent tax compliance tracking.",
    logo: "/images/infleux-favicon.png",
    cover: "/project-prints/infleux/nfs/1.%20web%20mobile%20influencer%20view%20-%20home.png",
    prints: [
      {
        src: "/project-prints/infleux/nfs/1.%20web%20mobile%20influencer%20view%20-%20home.png",
        caption:
          "Influencer Invoicing Home — centralized overview of issued, pending, and approved campaign invoices across all brand partnerships.",
      },
      {
        src: "/project-prints/infleux/nfs/2.%20web%20mobile%20pending%20influencer%20view%20-%20invoice%20details.png",
        caption:
          "Invoice Breakdown & Fiscal Data — granular campaign payout values, withholding tax calculations, and municipal invoice specifications.",
      },
      {
        src: "/project-prints/infleux/nfs/3.%20web%20mobile%20accountant%20view%20-%20home.png",
        caption:
          "Accountant Portal Dashboard — dedicated CPA workspace listing assigned influencer clients, pending tax receipts, and payment schedules.",
      },
      {
        src: "/project-prints/infleux/nfs/4.%20how%20to%20register%20accounts%20and%20link%20to%20your%20influencer%20account.png.png",
        caption:
          "Accountant Onboarding Guide — step-by-step interactive workflow guiding external CPAs through account setup and client authorization.",
      },
      {
        src: "/project-prints/infleux/nfs/5.%20how%20to%20add%20an%20accountant.png",
        caption:
          "Accountant Delegation Flow — creator workflow to invite accountants via email and assign fiscal management permissions.",
      },
    ],
    paragraphs: [
      "In high-volume influencer marketing, creators participate in multiple campaigns across dozens of corporate advertisers each month. This created severe operational chaos: influencers were constantly chasing tax data and issuing individual electronic invoices (Notas Fiscais / NFs) manually, resulting in payment delays and compliance headaches.",
      "To eliminate this friction, we designed and built a purpose-built invoicing application specifically for creators and their external accountants. Influencers simply enter their accountant's email in the app to send an automated onboarding invitation.",
      "Once invited, accountants access a dedicated, secure portal where they can view all concluded campaigns requiring invoicing, inspect billing entities and tax IDs, download fiscal calculation sheets, and directly upload issued NF-e PDFs and XMLs.",
      "The system cross-references uploaded invoices against campaign payout amounts, automatically flagging discrepancies and alerting financial operators for disbursement approval. This eliminated weeks of back-and-forth email communications and ensured 100% tax compliance.",
    ],
  },
  {
    slug: "sideup",
    title: "SideUp",
    subtitle: "Full-stack Node.js delivery for a London product team",
    client: "SideUp",
    timeline: "Jan 2026 – Present",
    role: "Full Stack Developer",
    outcome:
      "Delivered high-performance Node.js microservices and resilient React interfaces for a remote product team based in London, UK.",
    logo: "/images/logo-beta.png",
    cover: "/images/hero.png",
    paragraphs: [
      "Working remotely with SideUp's London engineering team, I contribute to building and maintaining high-scale web platforms using modern Node.js and TypeScript architectures.",
      "My responsibilities include designing scalable API contracts, optimizing relational database queries, and collaborating across time zones to ship features with strict quality and test-driven reliability.",
      "I work closely with product managers and designers to transform complex user requirements into elegant, high-performance UI components in React.",
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
  {
    slug: "upwork-rag",
    title: "Upwork RAG",
    subtitle: "RAG education system with LangChain and Pinecone",
    client: "Upwork Client",
    timeline: "2024",
    role: "AI & Full Stack Engineer",
    outcome:
      "Recovered disrupted API integrations and constructed an intelligent Retrieval-Augmented Generation (RAG) assistant with LangChain, Pinecone vector search, and OpenAI embeddings.",
    logo: "/images/logo-alpha.png",
    cover: "/images/work-gamma.jpg",
    paragraphs: [
      "Stepped into an urgent API recovery and AI enhancement project on Upwork to diagnose failing third-party integrations and build an intelligent AI knowledge assistant.",
      "Implemented a Retrieval-Augmented Generation (RAG) architecture using LangChain, Pinecone vector embeddings, and OpenAI APIs, enabling semantic search and context-aware responses across technical documentation and course materials.",
      "Stabilized production API routes, implemented token caching and error retry policies, and delivered an intuitive chat interface with rapid response latency.",
    ],
  },
];
