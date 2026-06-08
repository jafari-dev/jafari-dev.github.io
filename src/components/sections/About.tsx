'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

const paragraphs = ['description', 'description2', 'description3', 'description4'] as const;

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] glow-spot-purple opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 glow-spot-cyan opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 glow-spot-pink opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="flex flex-col items-center">
          <div className="max-w-3xl flex flex-col gap-5">
            {paragraphs.map((key, i) => (
              <motion.p
                key={key}
                className="text-slate-700 dark:text-slate-300 text-base text-justify sm:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.15 + 0.1 * i }}
              >
                {t(key)}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
