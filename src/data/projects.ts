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
    slug: "infleux",
    title: "Infleux",
    subtitle: "Influencer marketing platform with web, mobile, and CRM apps",
    client: "Infleux",
    timeline: "Oct 2022 – Jan 2026",
    role: "Full Stack Developer",
    outcome:
      "Architected and delivered the complete influencer marketing ecosystem: scalable Node.js/FeathersJS APIs, Next.js advertiser & creator portals, React Native mobile app for stores and creators, and React-Admin curatorship CRM.",
    logo: "/images/logo-alpha.png",
    cover: "/images/projects/infleux-clean/cover.png",
    prints: [
      {
        src: "/images/projects/infleux-clean/dashboard.png",
        caption: "Advertiser Web Dashboard — real-time ROI tracking, active campaigns overview, and engagement metrics.",
      },
      {
        src: "/images/projects/infleux-clean/campaigns.png",
        caption: "Campaign Management — campaign configuration, budget allocation, and live story performance validation.",
      },
      {
        src: "/images/projects/infleux-clean/mobile.png",
        caption: "Store Mobile App — instant campaign discovery, story submission workflow, and creator metrics.",
      },
      {
        src: "/images/projects/infleux-clean/crm.png",
        caption: "Influencer CRM & Admin — creator discovery, performance rating, and audience demographic analytics.",
      },
      {
        src: "/images/projects/infleux-clean/curatorship.png",
        caption: "Content Curatorship System — automated and manual review of sponsored Instagram stories and affiliate links.",
      },
    ],
    paragraphs: [
      "At Infleux, I worked as the core full-stack developer engineering an end-to-end influencer marketing platform connecting leading brands with high-impact creators across Brazil. The product suite spans an advertiser web app, an influencer web portal, a store mobile application, and an internal curatorship and CRM administration tool.",
      "On the backend, I designed and maintained microservices and RESTful/WebSocket APIs using Node.js and FeathersJS, backed by MongoDB and PostgreSQL databases. The architecture prioritizes speed, high-volume ingestion of social media metrics, and reliable webhooks processing Instagram story posts and coupon attribution in real time.",
      "For the user-facing web applications, I built fluid Next.js and React interfaces with responsive Tailwind layouts, dynamic data visualizations, and streamlined onboarding funnels. Advertisers can spin up new influencer campaigns in minutes, define conversion KPIs, and track influencer performance down to cost-per-click and attributed revenue.",
      "The mobile product was engineered with React Native, enabling creators and store managers to browse opportunities, submit sponsored stories, and monitor automated payout statuses directly from their devices with push notifications.",
      "To power internal operations, I developed a custom React-Admin curatorship dashboard that allowed the operations team to review thousands of submitted stories daily, verify brand mentions, flag compliance violations, and disburse payouts safely at scale.",
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
