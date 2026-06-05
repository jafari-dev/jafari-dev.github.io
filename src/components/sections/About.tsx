'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

const stats = [
  { key: 'stat_loc', value: '1M+', color: 'text-neon-cyan' },
  { key: 'stat_commits', value: '12k+', color: 'text-neon-purple' },
  { key: 'stat_coffee', value: '4k+', color: 'text-neon-green' },
  { key: 'stat_bugs', value: '2k+', color: 'text-neon-pink' },
  { key: 'stat_prs', value: '500+', color: 'text-neon-orange' },
  { key: 'stat_side', value: '50+', color: 'text-neon-cyan' },
  { key: 'stat_learning', value: '365', color: 'text-neon-purple' },
  { key: 'stat_passion', value: '∞', color: 'text-neon-green' },
] as const;

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] glow-spot-purple opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="flex flex-col items-center">
          <motion.div
            className="max-w-3xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-700 dark:text-slate-300 text-base text-justify sm:text-lg leading-relaxed">{t('description')}</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl">
            {stats.map(({ key, value, color }, i) => (
              <motion.div
                key={key}
                className="glass neon-border rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <p className={`text-2xl sm:text-3xl font-bold font-display ${color}`}>{value}</p>
                <p className="text-xs text-slate-600 dark:text-slate-500 mt-1 font-medium">{t(key)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
