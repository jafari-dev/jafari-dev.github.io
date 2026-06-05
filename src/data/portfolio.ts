export interface Experience {
  id: number;
  company: string;
  website: string;
  role: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  color: 'cyan' | 'purple' | 'green' | 'pink' | 'orange';
  current?: boolean;
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
    period: 'Jul 2025 – Present',
    type: 'Full-time',
    highlights: [
      'Engineered an AI-powered Shopify chatbot widget for personalized product recommendations',
      'Optimized Core Web Vitals from ~60% to ~90%, earning the "Built for Shopify" badge in under 2 months',
      'Boosted NRR from 75% to ~85% through stable feature delivery and UX improvements',
    ],
    color: 'cyan',
    current: true,
  },
  {
    id: 2,
    company: 'Avicenna Research',
    website: 'https://avicenna.io',
    role: 'Senior Front-end Developer',
    location: 'Toronto, Canada · Remote',
    period: 'May 2023 – Jul 2025',
    type: 'Full-time',
    highlights: [
      'Expanded a large research platform serving 200+ universities and institutes globally',
      'Reduced bundle size by ~20% (1.5 MB) by replacing 20+ libraries with tested utilities',
      'Migrated ~50% of the codebase from JavaScript to TypeScript over a year-long plan',
      'Built a Garmin watch app for a mental health study with 20,000+ participants (Univ. of Essex)',
    ],
    color: 'purple',
  },
  {
    id: 3,
    company: 'Dorfak Intelligent Systems',
    website: '#',
    role: 'Front-end Architect & Consultant',
    location: 'Tehran, Iran · Remote',
    period: 'Feb 2024 – Mar 2025',
    type: 'Contract',
    highlights: [
      'Designed the architecture and structure of a PWA project from scratch',
      'Set up linters, formatters, CI/CD, pre-commit hooks to enforce quality standards',
      'Onboarded 2 developers to full proficiency in 6 months, enabling independent contribution',
    ],
    color: 'green',
  },
  {
    id: 4,
    company: 'Dorfak Intelligent Systems',
    website: '#',
    role: 'Senior Front-end Developer',
    location: 'Tehran, Iran · Remote',
    period: 'Oct 2022 – Apr 2023',
    type: 'Full-time',
    highlights: [
      'Architected 2 financial web apps for the Iranian stock exchange and crypto markets',
      'Boosted loading speed by ~40% (3 seconds) using IndexedDB for data caching',
      'Reduced codebase size by ~10% via refactoring and removing legacy dead code',
    ],
    color: 'orange',
  },
  {
    id: 5,
    company: 'Zardalu',
    website: '#',
    role: 'Front-end Developer',
    location: 'Tehran, Iran · Hybrid',
    period: 'Nov 2020 – Sep 2022',
    type: 'Full-time',
    highlights: [
      'Delivered 4 fully-tested enterprise web apps for European organizations',
      'Achieved 85%+ code coverage across all projects with automated testing',
      'Refactored an outsourced project from JS to TS, reducing critical errors by ~70%',
    ],
    color: 'pink',
  },
  {
    id: 6,
    company: 'QuizLab',
    website: '#',
    role: 'Front-end Developer',
    location: 'Hamedan, Iran · On-site',
    period: 'Feb 2019 – Jul 2020',
    type: 'Part-time',
    highlights: [
      'Built lightweight, performance-critical UI components using React and pure JS',
      'Participated in ideation and product design for application features',
    ],
    color: 'cyan',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Rust'],
  },
  {
    title: 'Front-end',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML / CSS', 'SCSS', 'MUI', 'Ant Design', 'PWA', 'Webpack', 'Vite'],
  },
  {
    title: 'Back-end',
    skills: ['Node.js', 'NestJS', 'Express', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Nginx'],
  },
  {
    title: 'Testing',
    skills: ['Jest', 'Vitest', 'React Testing Library', 'Cypress', 'Playwright', 'Storybook'],
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
};
