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

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  name: string;
  category: string;
  tagline: string;
  description: string;
  role: string;
  stack: Array<string>;
  metrics: Array<ProjectMetric>;
  highlights: Array<string>;
  color: "cyan" | "purple" | "green" | "pink" | "orange";
}

export const projects: Array<Project> = [
  {
    id: 1,
    name: "Roobah",
    category: "FinTech",
    tagline: "Comprehensive portfolio-management platform for brokers & asset managers",
    description:
      "A full-featured asset-management platform that let portfolio managers and brokerage firms buy and sell stocks for their clients using diverse strategies and advanced trading capabilities.",
    role: "Owned new-feature delivery, client requirements, and resolution of reported production issues.",
    stack: ["React", "TypeScript", "MobX-State-Tree", "Apollo GraphQL", "SCSS", "D3.js"],
    metrics: [
      { value: "10s → <3s", label: "Initial load" },
      { value: "10+", label: "New features" },
      { value: "~30%", label: "Faster delivery" },
    ],
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
    id: 2,
    name: "Gorgi",
    category: "FinTech",
    tagline: "Financial PWA for individuals managing investments on the Iranian stock market",
    description:
      "A financial Progressive Web App that let individual investors manage their positions on the Iranian stock market, packed with strategies and built-in tools to serve the complex needs of high-capital clients.",
    role: "Built the project from the ground up — owning architecture, tooling, testing, and mentoring.",
    stack: ["React", "TypeScript", "MobX", "SCSS", "ApexCharts"],
    metrics: [
      { value: "0 → 1", label: "Built from scratch" },
      { value: "2", label: "Juniors onboarded" },
      { value: "min", label: "Bundle size" },
    ],
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
    id: 3,
    name: "Raptor",
    category: "FinTech",
    tagline: "Algorithm-driven admin panel for analyzing and trading cryptocurrencies",
    description:
      "A management dashboard for analyzing, buying, and selling cryptocurrencies based on intelligent algorithms, built for Dorfak Intelligent Systems.",
    role: "Designed and implemented the entire panel solo — UX, theming, and all core features.",
    stack: ["React", "TypeScript", "CSS-in-JS", "Chart.js", "MobX-State-Tree"],
    metrics: [
      { value: "<1 mo", label: "To full MVP" },
      { value: "2", label: "Themes" },
      { value: "100%", label: "Self-designed" },
    ],
    highlights: [
      "Delivered a fully-featured, dual-theme admin panel with all core capabilities in under a month",
      "Designed the entire interface from personal taste and product intuition — with no existing design to work from",
    ],
    color: "green",
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
