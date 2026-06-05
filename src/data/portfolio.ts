export type Locale = 'en' | 'fa';
export type BilingualText = { en: string; fa: string };

export interface Experience {
  id: number;
  company: string;
  website: string;
  role: BilingualText;
  location: BilingualText;
  period: BilingualText;
  type: BilingualText;
  highlights: { en: string[]; fa: string[] };
  color: 'cyan' | 'purple' | 'green' | 'pink' | 'orange';
  current?: boolean;
}

export interface SkillCategory {
  title: BilingualText;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Partnerz',
    website: 'https://partnerz.io',
    role: { en: 'Full-Stack Engineer', fa: 'مهندس فول‌استک' },
    location: { en: 'Dubai, UAE · Remote', fa: 'دبی، امارات · ریموت' },
    period: { en: 'Jul 2025 – Present', fa: 'تیر ۱۴۰۴ – اکنون' },
    type: { en: 'Full-time', fa: 'تمام‌وقت' },
    highlights: {
      en: [
        'Engineered an AI-powered Shopify chatbot widget for personalized product recommendations',
        'Optimized Core Web Vitals from ~60% to ~90%, earning the "Built for Shopify" badge in under 2 months',
        'Boosted NRR from 75% to ~85% through stable feature delivery and UX improvements',
      ],
      fa: [
        'طراحی و توسعه ویجت چت‌بات هوشمند شاپیفای با قابلیت پیشنهاد محصول شخصی‌سازی‌شده',
        'بهبود Core Web Vitals از ~۶۰٪ به ~۹۰٪ و کسب نشان «Built for Shopify» در کمتر از ۲ ماه',
        'افزایش NRR از ۷۵٪ به ~۸۵٪ از طریق تحویل فیچرهای پایدار و بهبود UX',
      ],
    },
    color: 'cyan',
    current: true,
  },
  {
    id: 2,
    company: 'Avicenna Research',
    website: 'https://avicenna.io',
    role: { en: 'Senior Front-end Developer', fa: 'توسعه‌دهنده ارشد فرانت‌اند' },
    location: { en: 'Toronto, Canada · Remote', fa: 'تورنتو، کانادا · ریموت' },
    period: { en: 'May 2023 – Jul 2025', fa: 'اردیبهشت ۱۴۰۲ – تیر ۱۴۰۴' },
    type: { en: 'Full-time', fa: 'تمام‌وقت' },
    highlights: {
      en: [
        'Expanded a large research platform serving 200+ universities and institutes globally',
        'Reduced bundle size by ~20% (1.5 MB) by replacing 20+ libraries with tested utilities',
        'Migrated ~50% of the codebase from JavaScript to TypeScript over a year-long plan',
        'Built a Garmin watch app for a mental health study with 20,000+ participants (Univ. of Essex)',
      ],
      fa: [
        'توسعه پلتفرم پژوهشی در مقیاس بزرگ با خدمت‌رسانی به ۲۰۰+ دانشگاه و مرکز پژوهشی',
        'کاهش حجم بسته نرم‌افزاری به میزان ~۲۰٪ (۱.۵ مگابایت) با حذف ۲۰+ کتابخانه',
        'مهاجرت ~۵۰٪ از کدبیس از جاوااسکریپت به تایپ‌اسکریپت طی یک سال',
        'توسعه اپلیکیشن ساعت گارمین برای مطالعه سلامت روان با ۲۰,۰۰۰+ شرکت‌کننده',
      ],
    },
    color: 'purple',
  },
  {
    id: 3,
    company: 'Dorfak Intelligent Systems',
    website: '#',
    role: { en: 'Front-end Architect & Consultant', fa: 'معمار و مشاور فرانت‌اند' },
    location: { en: 'Tehran, Iran · Remote', fa: 'تهران، ایران · ریموت' },
    period: { en: 'Feb 2024 – Mar 2025', fa: 'بهمن ۱۴۰۲ – اسفند ۱۴۰۳' },
    type: { en: 'Contract', fa: 'پروژه‌ای' },
    highlights: {
      en: [
        'Designed the architecture and structure of a PWA project from scratch',
        'Set up linters, formatters, CI/CD, pre-commit hooks to enforce quality standards',
        'Onboarded 2 developers to full proficiency in 6 months, enabling independent contribution',
      ],
      fa: [
        'طراحی معماری و ساختار پروژه PWA از صفر',
        'راه‌اندازی linterها، فرمترها، CI/CD و pre-commit hookها برای استانداردسازی توسعه',
        'آموزش ۲ توسعه‌دهنده جدید تا مهارت کامل در ۶ ماه',
      ],
    },
    color: 'green',
  },
  {
    id: 4,
    company: 'Dorfak Intelligent Systems',
    website: '#',
    role: { en: 'Senior Front-end Developer', fa: 'توسعه‌دهنده ارشد فرانت‌اند' },
    location: { en: 'Tehran, Iran · Remote', fa: 'تهران، ایران · ریموت' },
    period: { en: 'Oct 2022 – Apr 2023', fa: 'مهر ۱۴۰۱ – اردیبهشت ۱۴۰۲' },
    type: { en: 'Full-time', fa: 'تمام‌وقت' },
    highlights: {
      en: [
        'Architected 2 financial web apps for the Iranian stock exchange and crypto markets',
        'Boosted loading speed by ~40% (3 seconds) using IndexedDB for data caching',
        'Reduced codebase size by ~10% via refactoring and removing legacy dead code',
      ],
      fa: [
        'طراحی معماری ۲ اپلیکیشن مالی برای بورس ایران و بازار کریپتو',
        'بهبود سرعت لود ~۴۰٪ (۳ ثانیه) با استفاده از IndexedDB برای کش داده',
        'کاهش حجم کدبیس ~۱۰٪ از طریق بازنویسی و حذف کدهای قدیمی',
      ],
    },
    color: 'orange',
  },
  {
    id: 5,
    company: 'Zardalu',
    website: '#',
    role: { en: 'Front-end Developer', fa: 'توسعه‌دهنده فرانت‌اند' },
    location: { en: 'Tehran, Iran · Hybrid', fa: 'تهران، ایران · هیبرید' },
    period: { en: 'Nov 2020 – Sep 2022', fa: 'آبان ۱۳۹۹ – شهریور ۱۴۰۱' },
    type: { en: 'Full-time', fa: 'تمام‌وقت' },
    highlights: {
      en: [
        'Delivered 4 fully-tested enterprise web apps for European organizations',
        'Achieved 85%+ code coverage across all projects with automated testing',
        'Refactored an outsourced project from JS to TS, reducing critical errors by ~70%',
      ],
      fa: [
        'تحویل ۴ اپلیکیشن سازمانی کاملاً تست‌شده به سازمان‌های اروپایی',
        'دستیابی به پوشش کد ۸۵%+ در تمام پروژه‌ها با تست خودکار',
        'بازنویسی پروژه از جاوااسکریپت به تایپ‌اسکریپت با کاهش ~۷۰٪ خطاهای حیاتی',
      ],
    },
    color: 'pink',
  },
  {
    id: 6,
    company: 'QuizLab',
    website: '#',
    role: { en: 'Front-end Developer', fa: 'توسعه‌دهنده فرانت‌اند' },
    location: { en: 'Hamedan, Iran · On-site', fa: 'همدان، ایران · حضوری' },
    period: { en: 'Feb 2019 – Jul 2020', fa: 'بهمن ۱۳۹۷ – تیر ۱۳۹۹' },
    type: { en: 'Part-time', fa: 'نیمه‌وقت' },
    highlights: {
      en: [
        'Built lightweight, performance-critical UI components using React and pure JS',
        'Participated in ideation and product design for application features',
      ],
      fa: [
        'توسعه کامپوننت‌های رابط کاربری سبک و بهینه با React و جاوااسکریپت خالص',
        'مشارکت در ایده‌پردازی و طراحی محصول برای فیچرهای اپلیکیشن',
      ],
    },
    color: 'cyan',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: { en: 'Languages', fa: 'زبان‌های برنامه‌نویسی' },
    skills: ['TypeScript', 'JavaScript', 'Python', 'Rust'],
  },
  {
    title: { en: 'Front-end', fa: 'فرانت‌اند' },
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML / CSS', 'SCSS', 'MUI', 'Ant Design', 'PWA', 'Webpack', 'Vite'],
  },
  {
    title: { en: 'Back-end', fa: 'بک‌اند' },
    skills: ['Node.js', 'NestJS', 'Express', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Nginx'],
  },
  {
    title: { en: 'Testing', fa: 'تست' },
    skills: ['Jest', 'Vitest', 'React Testing Library', 'Cypress', 'Playwright', 'Storybook'],
  },
  {
    title: { en: 'Tools & Others', fa: 'ابزارها و سایر' },
    skills: ['Git', 'Docker', 'GitHub Actions', 'GitLab CI', 'Sentry', 'Linux', 'Shopify'],
  },
];

export const socialLinks = {
  github: 'https://github.com/jafari-dev',
  linkedin: 'https://www.linkedin.com/in/jafari-dev/',
  email: 'a99jafari@gmail.com',
};

export const resumeUrl = '/Resume.md';
