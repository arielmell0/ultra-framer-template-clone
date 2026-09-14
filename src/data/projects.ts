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
