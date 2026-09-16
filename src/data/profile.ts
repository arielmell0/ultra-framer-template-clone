export interface Job {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  summary: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface SoftwareTool {
  name: string;
  category: string;
  image?: string;
  iconName?: string;
}

export interface PhysicalItem {
  name: string;
  category: string;
  image: string;
}

export interface Profile {
  displayName: string;
  fullName: string;
  headline: string;
  location: string;
  tickerLocation: string;
  availability: string;
  avatar: string;
  aboutPhoto: string;
  linkedin: string;
  github: string;
  instagram: string;
  email: string;
  about: string[];
  aboutSubtitle: string;
  stackSubtitle: string;
  experience: Job[];
  education: Education[];
  software: SoftwareTool[];
  physical: PhysicalItem[];
}

export const profile: Profile = {
  displayName: "Ariel Mello",
  fullName: "Ariel Oliveira de Mello",
  headline: "Full Stack Developer | React, Node & Cloud (AWS)",
  location: "Rio Grande do Sul, Brasil",
  tickerLocation: "RS, BRASIL",
  availability: "Available for new opportunities",
  avatar: "/images/ariel-avatar.jpg",
  aboutPhoto: "/images/about-photo.png",
  linkedin: "https://www.linkedin.com/in/arielmell0/",
  github: "https://github.com/arielmell0",
  instagram: "https://www.instagram.com/arielmell0/",
  email: "arielmell0@gmail.com",
  aboutSubtitle: "A few things you should know",
  stackSubtitle: "Software & tools I use day to day",
  about: [
    "Full-stack developer focused on JavaScript technologies.",
    "I build scalable APIs, web and mobile products, and admin tools — with clear communication and strong business-logic instincts.",
    "Advanced English (reading, listening, speaking).",
  ],
  experience: [
    {
      title: "Full Stack Developer",
      company: "SideUp",
      type: "Full-time · Remote",
      period: "Jan 2026 — Present",
      location: "London, UK",
      summary: "Node.js and full-stack development for an international remote product team.",
    },
    {
      title: "Full Stack Developer",
      company: "Infleux",
      type: "Full-time · Remote",
      period: "Oct 2022 — Jan 2026",
      location: "São Paulo, Brazil",
      summary:
        "Influencer platform products: scalable APIs, Next.js web apps, React Native mobile, and React-Admin dashboards on Node.js, FeathersJS, and MongoDB/MySQL/PostgreSQL.",
    },
    {
      title: "Full Stack Developer",
      company: "Upwork",
      type: "Freelance · Remote",
      period: "Jan 2024 — Dec 2025",
      location: "Remote",
      summary:
        "5-star freelance delivery: Figma-to-React landing CMS with Puck; RAG education system with LangChain + Pinecone after API recovery work.",
    },
  ],
  education: [
    {
      school: "Instituto Federal Catarinense",
      degree: "Graduação, Análise e Desenvolvimento de Sistemas",
      period: "2021 — 2023",
    },
    {
      school: "ULBRA",
      degree: "Graduação, Análise e Desenvolvimento de Sistemas",
      period: "2020 — 2021",
    },
    {
      school: "Instituto Federal de Rondônia",
      degree: "FIC EaD — Database Administrator",
      period: "2020",
    },
    {
      school: "Instituto Federal Catarinense",
      degree: "Ensino médio / Técnico em agropecuária",
      period: "2017 — 2019",
    },
  ],
  software: [
    { name: "Node.js", category: "BACKEND", iconName: "Node" },
    { name: "TypeScript", category: "LANGUAGE", iconName: "TypeScript" },
    { name: "React", category: "FRONTEND", iconName: "React" },
    { name: "Next.js", category: "FRONTEND", iconName: "Next" },
    { name: "React Native", category: "MOBILE", iconName: "ReactNative" },
    { name: "AWS", category: "CLOUD", iconName: "AWS" },
    { name: "MongoDB", category: "DATABASE", iconName: "MongoDB" },
    { name: "PostgreSQL", category: "DATABASE", iconName: "PostgreSQL" },
    { name: "LangChain", category: "AI", iconName: "LangChain" },
    { name: "Git", category: "TOOLS", iconName: "Git" },
    { name: "VS Code", category: "CODE", iconName: "VSCode" },
  ],
  physical: [
    {
      name: 'Philco Gaming 30"',
      category: "SCREEN",
      image: "/images/stack-studio-display.png",
    },
    {
      name: "Akko TAC75 HE",
      category: "KEYBOARD",
      image: "/images/stack-keyboard.png",
    },
    {
      name: "EMEET 960 2K",
      category: "WEBCAM",
      image: "/images/stack-brio.png",
    },
    {
      name: "Hackintosh (i7 12th Gen, 32GB RAM, RX 6750)",
      category: "DESKTOP",
      image: "/images/stack-macbook.png",
    },
  ],
};
