export interface Experience {
  id: number;
  company: string;
  website: string | null;
  role: string;
  location: string;
  start: Date;
  end: Date | null;
  employmentType: "Full-time" | "Part-time" | "Contract";
  locationType: "On-site" | "Remote" | "Hybrid";
  highlights: Array<string>;
  color: "cyan" | "purple" | "green" | "pink" | "orange";
  logo?: string;
}

export interface SkillCategory {
  title: string;
  skills: Array<string>;
}

export interface Project {
  name: string;
  category: string;
  description: string;
  role: string;
  stack: Array<string>;
  highlights: Array<string>;
  color: "cyan" | "purple" | "green" | "pink" | "orange";
}

export const projects: Array<Project> = [
  {
    name: "Roobah",
    category: "FinTech",
    description:
      "A full-featured asset-management platform that let portfolio managers and brokerage firms buy and sell stocks for their clients using diverse strategies and advanced trading capabilities.",
    role: "Owned new-feature delivery, client requirements, and resolution of reported production issues.",
    stack: ["React", "TypeScript", "MobX-State-Tree", "Apollo GraphQL", "SCSS", "D3.js"],
    highlights: [
      "Cut initial page load from ~10s to under 3s by caching data in IndexedDB",
      "Designed & shipped 10+ new, technically challenging features",
      "Built fully custom, complex data visualizations with D3.js",
      "Kept the UI smooth and responsive despite a very high real-time update rate",
      "Implemented advanced validation across stock buy/sell forms",
      "Spent ~10–20% of each week refactoring legacy code, raising delivery speed ~30% within two months",
    ],
    color: "cyan",
  },
  {
    name: "Gorgi",
    category: "FinTech",
    description:
      "A financial Progressive Web App that let individual investors manage their positions on the Iranian stock market, packed with strategies and built-in tools to serve the complex needs of high-capital clients.",
    role: "Built the project from the ground up — owning architecture, tooling, testing, and mentoring.",
    stack: ["React", "TypeScript", "MobX", "SCSS", "ApexCharts"],
    highlights: [
      "Architected the project from scratch with a structure built for long-term maintainability",
      "Implemented several bespoke charts with zero third-party charting libraries",
      "Crafted a responsive design that gets as close as possible to a native mobile app",
      "Set up comprehensive ESLint, Prettier, and Stylelint configurations",
      "Stood up the testing infrastructure and wrote tests for the most critical paths",
      "Minimized external dependencies to ship the smallest possible bundle for fast loads",
      "Onboarded 2 intern/junior developers and reviewed their tasks and code",
    ],
    color: "purple",
  },
  {
    name: "Requireganizer",
    category: "DevTools",
    description:
      "A specialized tool for software teams that let them capture and manage requirements and user scenarios, then automatically generate software test templates from those requirements and scenarios — enabling fast, test-driven development.",
    role: "Implemented the full UI and feature set while building a state and business-logic layer fully decoupled from the presentation layer, backed by extensive testing.",
    stack: [
      "React",
      "TypeScript",
      "Ant Design",
      "MobX-State-Tree",
      "Google Drive",
      "TinyMCE",
      "Emotion",
      "Jest",
      "React Testing Library",
    ],
    highlights: [
      "Built the UI and feature set end to end",
      "Wrote unit, integration, snapshot & regression tests, reaching 90% code coverage",
      "Implemented stores and business logic fully decoupled from the presentation layer",
      "Customized several Ant Design components for a closer match to the design",
      "Studied the Google Drive API and built the full Google Drive integration",
      "Implemented a text-selection commenting system, similar to Google Docs",
    ],
    color: "green",
  },
  {
    name: "Luggo",
    category: "Logistics",
    description:
      "A Dutch software startup born during COVID with a clever idea — transporting your bags, luggage, and belongings from your trip’s origin to its destination and back again.",
    role: "Contributed to a large-scale refactor: a JavaScript-to-TypeScript migration, a state-management switch, and root-cause bug fixing across legacy code.",
    stack: ["React", "JavaScript", "TypeScript", "Redux", "MobX", "Material UI", "Storybook"],
    highlights: [
      "Helped refactor a large codebase and migrate it from JavaScript to TypeScript",
      "Helped switch from a noisy, complex Redux setup to MobX, simplifying the data layer",
      "Helped fix dozens of bugs and errors at their root within legacy code",
      "Wrote Storybook stories for components to enable isolated visual testing",
    ],
    color: "pink",
  },
  {
    name: "Lexian",
    category: "LegalTech",
    description:
      "A Swiss legal project designed for law firms and legal companies to manage their clients, cases, lawyers, and all office matters in a unified, integrated way.",
    role: "Owned one of the seven core modules end to end, contributed to the rest, and authored complex, mock-heavy test suites.",
    stack: ["React", "TypeScript", "Emotion", "MobX", "Babel", "Webpack", "Jest", "React Testing Library"],
    highlights: [
      "Wrote diverse, high-complexity software tests with specialized mocks",
      "Fully implemented one of the software’s 7 core modules and contributed to the rest",
      "Built an advanced Tree-view and Stepper component with diverse features and modes",
    ],
    color: "orange",
  },
  {
    name: "Avicenna Research",
    category: "Research",
    description:
      "Avicenna was a specialized mental-health platform whose primary customers were universities, research institutes, and organizations affiliated with hospitals and the psychology field.",
    role: "Developed and maintained two large dashboards as a senior front-end developer, leading major rewrites and refactors of their core features.",
    stack: [
      "React",
      "TypeScript",
      "SCSS",
      "MUI",
      "Redux",
      "TanStack Query",
      "Zustand",
      "Docusaurus",
      "Next.js",
      "Tailwind CSS",
      "Playwright",
      "ANTLR",
      "Sentry",
    ],
    highlights: [
      "Developed and maintained two large, separate dashboards — one for researchers, one for participants",
      "Rewrote the landing page from Gatsby to Next.js + Tailwind in an SEO-friendly way",
      "Rewrote the participants dashboard with React 19 and the latest TanStack React Query",
      "Refactored the researcher dashboard’s core feature (Survey), switching it from Redux to Zustand",
      "Built a complex ANTLR-based feature that precisely converted syntax to UI and UI back to the target syntax",
      "Monitored Sentry weekly and resolved production issues and bugs",
      "Handled customer tickets directly — understanding their needs and acting to resolve them",
    ],
    color: "cyan",
  },
  {
    name: "Convi",
    category: "AI · SaaS",
    description:
      "An AI-powered chatbot for Shopify stores that helped resolve customers’ needs and requests as much as possible, without human intervention.",
    role: "Full-stack engineer who built the chat box and admin panel from scratch across three repositories, with direct product involvement.",
    stack: [
      "Django",
      "PostgreSQL",
      "Shopify",
      "React",
      "Preact",
      "TypeScript",
      "SCSS",
      "Tailwind CSS",
      "TanStack Query",
      "Polaris",
    ],
    highlights: [
      "Built the chat box and admin panel completely from scratch and maintained them long-term",
      "Worked across 3 repositories — backend, merchant admin panel, and the chat box (SDK) — as a full-stack engineer",
      "Heavily optimized the admin panel and earned the “Built for Shopify” badge in under 1 month",
      "Contributed directly to Product, shipping several practical features that increased company revenue",
      "Leveraged AI tools (Cursor & Claude) to develop, refactor, and debug faster, improving product quality and velocity",
      "Coordinated directly with teammates to reduce conflicts and keep quality high at speed",
    ],
    color: "purple",
  },
];

export const experiences: Array<Experience> = [
  {
    id: 1,
    company: "Partnerz",
    website: "https://partnerz.io",
    role: "Full-Stack Engineer",
    location: "Dubai, UAE · Remote",
    start: new Date("2025-07-01"),
    end: null,
    employmentType: "Full-time",
    locationType: "Remote",
    highlights: [
      "Engineered an AI-powered Shopify chatbot widget for personalized product recommendations",
      'Optimized Core Web Vitals from ~60% to ~90%, earning the "Built for Shopify" badge in under 2 months',
      "Boosted NRR from 75% to ~85% through stable feature delivery and UX improvements",
    ],
    color: "cyan",
    logo: "/logos/partnerz.png",
  },
  {
    id: 2,
    company: "Avicenna Research",
    website: "https://avicennaresearch.com",
    role: "Senior Front-end Developer",
    location: "Toronto, Canada",
    start: new Date("2023-05-01"),
    end: new Date("2025-07-01"),
    employmentType: "Full-time",
    locationType: "Remote",
    highlights: [
      "Expanded a large research platform serving 200+ universities and institutes globally",
      "Reduced bundle size by ~20% (1.5 MB) by replacing 20+ libraries with tested utilities",
      "Migrated ~50% of the codebase from JavaScript to TypeScript over a year-long plan",
      "Built a Garmin watch app for a mental health study with 20,000+ participants (Univ. of Essex)",
    ],
    color: "purple",
    logo: "/logos/avicenna-research.png",
  },
  {
    id: 3,
    company: "Dorfak Systems",
    website: null,
    role: "Front-end Architect",
    location: "Tehran, Iran",
    start: new Date("2024-10-01"),
    end: new Date("2025-03-01"),
    employmentType: "Contract",
    locationType: "Remote",
    highlights: [
      "Designed the architecture and structure of a PWA project from scratch",
      "Set up linters, formatters, CI/CD, pre-commit hooks to enforce quality standards",
      "Onboarded 2 developers to full proficiency in 6 months, enabling independent contribution",
    ],
    color: "green",
    logo: "/logos/dorfak-systems.png",
  },
  {
    id: 4,
    company: "Dorfak Systems",
    website: null,
    role: "Senior Front-end Developer",
    location: "Tehran, Iran",
    start: new Date("2022-10-01"),
    end: new Date("2023-04-01"),
    employmentType: "Full-time",
    locationType: "Remote",
    highlights: [
      "Architected 2 financial web apps for the Iranian stock exchange and crypto markets",
      "Boosted loading speed by ~40% (3 seconds) using IndexedDB for data caching",
      "Reduced codebase size by ~10% via refactoring and removing legacy dead code",
    ],
    color: "orange",
    logo: "/logos/dorfak-systems.png",
  },
  {
    id: 5,
    company: "Zardalu",
    website: "https://www.zardalu.dev",
    role: "Front-end Developer",
    location: "Tehran, Iran",
    start: new Date("2020-11-01"),
    end: new Date("2022-09-01"),
    employmentType: "Full-time",
    locationType: "Hybrid",
    highlights: [
      "Delivered 4 fully-tested enterprise web apps for European organizations",
      "Achieved 85%+ code coverage across all projects with automated testing",
      "Refactored an outsourced project from JS to TS, reducing critical errors by ~70%",
    ],
    color: "pink",
    logo: "/logos/zardalu.png",
  },
  {
    id: 6,
    company: "Meybod University",
    website: "https://meybod.ac.ir",
    role: "Front-end Developing Teacher",
    location: "Yazd, Iran",
    start: new Date("2021-04-01"),
    end: new Date("2021-09-01"),
    employmentType: "Contract",
    locationType: "Remote",
    highlights: [
      "Taught front-end development, related languages, and top technologies in 80 hours and analyzed a project-based approach and a complete roadmap to provide a challenging course",
      "Developed 5 complex mini-projects and a feature-rich Twitter-like website with a responsive design",
      "Guided students on essential soft skills, including task time estimation, cross-team communication and stress management in urgent tasks",
    ],
    color: "cyan",
    logo: "/logos/meybod-university.png",
  },
  {
    id: 7,
    company: "QuizLab",
    website: null,
    role: "Front-end Developer",
    location: "Hamedan, Iran",
    start: new Date("2019-02-01"),
    end: new Date("2020-07-01"),
    employmentType: "Part-time",
    locationType: "On-site",
    highlights: [
      "Built lightweight, performance-critical UI components using React and pure JS",
      "Participated in ideation and product design for application features",
    ],
    color: "purple",
  },
];

export const skillCategories: Array<SkillCategory> = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Rust"],
  },
  {
    title: "Front-end",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "SCSS",
      "MUI",
      "Ant Design",
      "Zustand",
      "TanStack Query",
      "Vite",
      "Webpack",
    ],
  },
  {
    title: "Back-end",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "Django",
      "PostgreSQL",
      "SQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "Swagger",
      "Nginx",
    ],
  },
  {
    title: "Testing",
    skills: ["Jest", "Vitest", "Storybook", "React Testing Library", "Cypress", "Playwright"],
  },
  {
    title: "Architecture",
    skills: ["Micro-frontends", "Monorepo", "SOLID", "Design Patterns", "Clean Architecture", "TDD", "DDD"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "GitHub Actions", "GitLab CI", "Sentry", "Linux", "Shopify"],
  },
];

export const socialLinks = {
  github: "https://github.com/jafari-dev",
  linkedin: "https://www.linkedin.com/in/jafari-dev/",
  email: "a99jafari@gmail.com",
  telegram: "https://t.me/AhmadJafari",
  phone: "+98 930 848 5060",
};
