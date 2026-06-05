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
  highlights: string[];
  color: 'cyan' | 'purple' | 'green' | 'pink' | 'orange';
  logo?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Partnerz',
    website: 'https://partnerz.io',
    role: 'Full-Stack Engineer',
    location: 'Dubai, UAE · Remote',
    start: new Date('2025-07-01'),
    end: null,
    employmentType: 'Full-time',
    locationType: 'Remote',
    highlights: [
      'Engineered an AI-powered Shopify chatbot widget for personalized product recommendations',
      'Optimized Core Web Vitals from ~60% to ~90%, earning the "Built for Shopify" badge in under 2 months',
      'Boosted NRR from 75% to ~85% through stable feature delivery and UX improvements',
    ],
    color: 'cyan',
    logo: '/logos/partnerz.png',
  },
  {
    id: 2,
    company: 'Avicenna Research',
    website: 'https://avicennaresearch.com',
    role: 'Senior Front-end Developer',
    location: 'Toronto, Canada',
    start: new Date('2023-05-01'),
    end: new Date('2025-07-01'),
    employmentType: 'Full-time',
    locationType: 'Remote',
    highlights: [
      'Expanded a large research platform serving 200+ universities and institutes globally',
      'Reduced bundle size by ~20% (1.5 MB) by replacing 20+ libraries with tested utilities',
      'Migrated ~50% of the codebase from JavaScript to TypeScript over a year-long plan',
      'Built a Garmin watch app for a mental health study with 20,000+ participants (Univ. of Essex)',
    ],
    color: 'purple',
    logo: '/logos/avicenna-research.png',
  },
  {
    id: 3,
    company: 'Dorfak Systems',
    website: null,
    role: 'Front-end Architect',
    location: 'Tehran, Iran',
    start: new Date('2024-10-01'),
    end: new Date('2025-03-01'),
    employmentType: 'Contract',
    locationType: 'Remote',
    highlights: [
      'Designed the architecture and structure of a PWA project from scratch',
      'Set up linters, formatters, CI/CD, pre-commit hooks to enforce quality standards',
      'Onboarded 2 developers to full proficiency in 6 months, enabling independent contribution',
    ],
    color: 'green',
    logo: '/logos/dorfak-systems.png',
  },
  {
    id: 4,
    company: 'Dorfak Systems',
    website: null,
    role: 'Senior Front-end Developer',
    location: 'Tehran, Iran',
    start: new Date('2022-10-01'),
    end: new Date('2023-04-01'),
    employmentType: 'Full-time',
    locationType: 'Remote',
    highlights: [
      'Architected 2 financial web apps for the Iranian stock exchange and crypto markets',
      'Boosted loading speed by ~40% (3 seconds) using IndexedDB for data caching',
      'Reduced codebase size by ~10% via refactoring and removing legacy dead code',
    ],
    color: 'orange',
    logo: '/logos/dorfak-systems.png',
  },
  {
    id: 5,
    company: 'Zardalu',
    website: 'https://www.zardalu.dev',
    role: 'Front-end Developer',
    location: 'Tehran, Iran',
    start: new Date('2020-11-01'),
    end: new Date('2022-09-01'),
    employmentType: 'Full-time',
    locationType: 'Hybrid',
    highlights: [
      'Delivered 4 fully-tested enterprise web apps for European organizations',
      'Achieved 85%+ code coverage across all projects with automated testing',
      'Refactored an outsourced project from JS to TS, reducing critical errors by ~70%',
    ],
    color: 'pink',
    logo: '/logos/zardalu.png',
  },
  {
    id: 6,
    company: 'Meybod University',
    website: 'https://meybod.ac.ir',
    role: 'Front-end Developing Teacher',
    location: 'Yazd, Iran',
    start: new Date('2021-04-01'),
    end: new Date('2021-09-01'),
    employmentType: 'Contract',
    locationType: 'Remote',
    highlights: [
      'Taught front-end development, related languages, and top technologies in 80 hours and analyzed a project-based approach and a complete roadmap to provide a challenging course',
      'Developed 5 complex mini-projects and a feature-rich Twitter-like website with a responsive design',
      'Guided students on essential soft skills, including task time estimation, cross-team communication and stress management in urgent tasks'
    ],
    color: 'cyan',
    logo: '/logos/meybod-university.png',
  },
  {
    id: 7,
    company: 'QuizLab',
    website: null,
    role: 'Front-end Developer',
    location: 'Hamedan, Iran',
    start: new Date('2019-02-01'),
    end: new Date('2020-07-01'),
    employmentType: 'Part-time',
    locationType: 'On-site',
    highlights: [
      'Built lightweight, performance-critical UI components using React and pure JS',
      'Participated in ideation and product design for application features',
    ],
    color: 'purple',
  },

];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Rust'],
  },
  {
    title: 'Front-end',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'SCSS', 'MUI', 'Ant Design', 'Zustand', 'TanStack Query', 'Vite','Webpack'],
  },
  {
    title: 'Back-end',
    skills: ['Node.js', 'NestJS', 'Express', 'Django', 'PostgreSQL', 'SQL', 'MongoDB', 'Redis', 'GraphQL', 'Swagger', 'Nginx'],
  },
  {
    title: 'Testing',
    skills: ['Jest', 'Vitest', 'Storybook', 'React Testing Library', 'Cypress', 'Playwright', ],
  },
  {
    title: 'Architecture',
    skills: ['Micro-frontends', 'Monorepo', 'SOLID', 'Design Patterns', 'Clean Architecture', 'TDD', 'DDD'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Docker', 'GitHub Actions', 'GitLab CI', 'Sentry', 'Linux', 'Shopify'],
  },
];

export const socialLinks = {
  github: 'https://github.com/jafari-dev',
  linkedin: 'https://www.linkedin.com/in/jafari-dev/',
  email: 'a99jafari@gmail.com',
  telegram: 'https://t.me/AhmadJafari',
  phone: '+98 930 848 5060',
};
