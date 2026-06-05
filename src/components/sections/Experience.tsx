'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { experiences } from '@/data/portfolio';

const colorMap = {
  cyan: {
    border: 'border-neon-cyan/20! hover:border-neon-cyan/50!',
    borderHover: 'border-neon-cyan/50',
    dot: 'bg-neon-cyan shadow-[0_0_10px_#00d4ff]',
    badge: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30',
    bullet: 'text-neon-cyan',
  },
  purple: {
    border: 'border-neon-purple/20! hover:border-neon-purple/50!',
    borderHover: 'border-neon-purple/50',
    dot: 'bg-neon-purple shadow-[0_0_10px_#a855f7]',
    badge: 'bg-neon-purple/10 text-neon-purple border-neon-purple/30',
    bullet: 'text-neon-purple',
  },
  green: {
    border: 'border-neon-green/20! hover:border-neon-green/50!',
    borderHover: 'border-neon-green/50',
    dot: 'bg-neon-green shadow-[0_0_10px_#00ff88]',
    badge: 'bg-neon-green/10 text-neon-green border-neon-green/30',
    bullet: 'text-neon-green',
  },
  pink: {
    border: 'border-neon-pink/20! hover:border-neon-pink/50!',
    borderHover: 'border-neon-pink/50',
    dot: 'bg-neon-pink shadow-[0_0_10px_#f472b6]',
    badge: 'bg-neon-pink/10 text-neon-pink border-neon-pink/30',
    bullet: 'text-neon-pink',
  },
  orange: {
    border: 'border-neon-orange/20! hover:border-neon-orange/50!',
    borderHover: 'border-neon-orange/50',
    dot: 'bg-neon-orange shadow-[0_0_10px_#fb923c]',
    badge: 'bg-neon-orange/10 text-neon-orange border-neon-orange/30',
    bullet: 'text-neon-orange',
  },
};

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="relative py-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-transparent via-neon-cyan/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-6">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="relative">
          <div className="absolute inset-s-6 sm:inset-s-8 top-0 bottom-0 w-px bg-linear-to-b from-neon-cyan/40 via-neon-purple/20 to-transparent" />

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
                  <div className="relative shrink-0 w-12 sm:w-16 flex justify-center">
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
                        <div className="flex items-center gap-1 mt-1">
                          <a
                            href={exp.website && exp.website !== '#' ? exp.website : undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-semibold ${colors.bullet} hover:underline flex items-center gap-1`}
                          >
                            {exp.company}
                            {exp.website !== '#' && <ExternalLink size={12} />}
                          </a>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${colors.badge} ms-2`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      {exp.logo && (
                        <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-white border border-slate-200 dark:border-white/10 p-1 flex items-center justify-center">
                          <Image src={exp.logo} alt={`${exp.company} logo`} width={32} height={32} className="w-full h-full object-contain" />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600 dark:text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, j) => (
                        <motion.li
                          key={j}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * j + 0.2 }}
                        >
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
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
