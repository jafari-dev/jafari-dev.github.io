'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

const stats = [
  { key: 'stat_years', value: '7+', color: 'text-neon-cyan' },
  { key: 'stat_clients', value: '200+', color: 'text-neon-purple' },
  { key: 'stat_participants', value: '20k+', color: 'text-neon-green' },
  { key: 'stat_coverage', value: '85%+', color: 'text-neon-pink' },
] as const;

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] glow-spot-purple opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-purple rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-purple rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan rounded-br-lg" />

              <div className="absolute inset-3 rounded-xl overflow-hidden border border-neon-cyan/20">
                <Image
                  src="/avatar.jpg"
                  alt="Ahmad Jafari"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 dark:from-dark-950/60 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-slate-700 dark:text-slate-300 text-base text-justify sm:text-lg leading-relaxed">{t('description')}</p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
      </div>
    </section>
  );
}
