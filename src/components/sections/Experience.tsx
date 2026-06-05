'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { experiences } from '@/data/portfolio';

const colorMap = {
  cyan: {
    border: 'border-neon-cyan/20! hover:border-neon-cyan/50!',
    borderHover: 'border-neon-cyan/50',
    dot: 'bg-neon-cyan',
    badge: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30',
    bullet: 'text-neon-cyan',
  },
  purple: {
    border: 'border-neon-purple/20! hover:border-neon-purple/50!',
    borderHover: 'border-neon-purple/50',
    dot: 'bg-neon-purple',
    badge: 'bg-neon-purple/10 text-neon-purple border-neon-purple/30',
    bullet: 'text-neon-purple',
  },
  green: {
    border: 'border-neon-green/20! hover:border-neon-green/50!',
    borderHover: 'border-neon-green/50',
    dot: 'bg-neon-green',
    badge: 'bg-neon-green/10 text-neon-green border-neon-green/30',
    bullet: 'text-neon-green',
  },
  pink: {
    border: 'border-neon-pink/20! hover:border-neon-pink/50!',
    borderHover: 'border-neon-pink/50',
    dot: 'bg-neon-pink',
    badge: 'bg-neon-pink/10 text-neon-pink border-neon-pink/30',
    bullet: 'text-neon-pink',
  },
  orange: {
    border: 'border-neon-orange/20! hover:border-neon-orange/50!',
    borderHover: 'border-neon-orange/50',
    dot: 'bg-neon-orange',
    badge: 'bg-neon-orange/10 text-neon-orange border-neon-orange/30',
    bullet: 'text-neon-orange',
  },
};

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="relative py-24">
      <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-6">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="relative">
          <div className="hidden sm:block absolute inset-s-8 top-0 bottom-0 w-px bg-linear-to-b from-neon-cyan/50 via-neon-purple/40 to-neon-cyan/30" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const colors = colorMap[exp.color];
              return (
                <motion.div
                  key={exp.id}
                  className="relative flex gap-2 sm:gap-10"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                >
                  <div className="hidden sm:flex relative shrink-0 w-16 justify-center">
                    <div className={`w-4 h-4 rounded-full mt-5 ${colors.dot} z-10`} />
                  </div>

                  <div
                    className={`flex-1 glass rounded-2xl p-6 border transition-colors duration-300 ${colors.border} mb-2`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">{exp.role}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs rounded-full bg-neon-green/10 text-neon-green border border-neon-green/30 font-mono">
                              {t('present')}
                            </span>
                          )}
                        </div>
                        <span className={`font-semibold mt-1 block ${colors.bullet}`}>
                          {exp.company}
                        </span>
                        <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full border ${colors.badge}`}>
                          {exp.type}
                        </span>
                      </div>
                      {exp.logo && (
                        <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-white border border-slate-200 dark:border-white/10 p-1 flex items-center justify-center">
                          <Image src={exp.logo} alt={`${exp.company} logo`} width={32} height={32} className="w-full h-full object-contain" />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 mb-4 text-sm text-slate-600 dark:text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={13} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={13} />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, j) => (
                        <motion.li
                          key={j}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-6"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * j + 0.2 }}
                        >
                          <span className={`mt-2 w-2 h-2 rounded-full shrink-0 ${colors.dot}`} />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
