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
    glow: 'via-neon-cyan/60',
    spot: 'bg-neon-cyan/10',
  },
  purple: {
    border: 'border-neon-purple/20! hover:border-neon-purple/50!',
    borderHover: 'border-neon-purple/50',
    dot: 'bg-neon-purple',
    badge: 'bg-neon-purple/10 text-neon-purple border-neon-purple/30',
    bullet: 'text-neon-purple',
    glow: 'via-neon-purple/60',
    spot: 'bg-neon-purple/10',
  },
  green: {
    border: 'border-neon-green/20! hover:border-neon-green/50!',
    borderHover: 'border-neon-green/50',
    dot: 'bg-neon-green',
    badge: 'bg-neon-green/10 text-neon-green border-neon-green/30',
    bullet: 'text-neon-green',
    glow: 'via-neon-green/60',
    spot: 'bg-neon-green/10',
  },
  pink: {
    border: 'border-neon-pink/20! hover:border-neon-pink/50!',
    borderHover: 'border-neon-pink/50',
    dot: 'bg-neon-pink',
    badge: 'bg-neon-pink/10 text-neon-pink border-neon-pink/30',
    bullet: 'text-neon-pink',
    glow: 'via-neon-pink/60',
    spot: 'bg-neon-pink/10',
  },
  orange: {
    border: 'border-neon-orange/20! hover:border-neon-orange/50!',
    borderHover: 'border-neon-orange/50',
    dot: 'bg-neon-orange',
    badge: 'bg-neon-orange/10 text-neon-orange border-neon-orange/30',
    bullet: 'text-neon-orange',
    glow: 'via-neon-orange/60',
    spot: 'bg-neon-orange/10',
  },
};

function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function formatDuration(start: Date, end: Date | null): string {
  const to = end ?? new Date();
  const months = (to.getFullYear() - start.getFullYear()) * 12 + (to.getMonth() - start.getMonth());
  if (months < 12) return `${months} mo`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem > 0 ? `${years} yr ${rem} mo` : `${years} yr`;
}

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="relative py-24">
      <div className="absolute top-1/4 -left-10 w-[32rem] h-[32rem] glow-spot-purple opacity-25 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-10 w-[32rem] h-[32rem] glow-spot-cyan opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] glow-spot-pink opacity-10 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
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
                    className={`flex-1 glass rounded-2xl p-6 border transition-colors duration-300 ${colors.border} mb-2 relative overflow-hidden`}
                  >
                    <div className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${colors.glow} to-transparent`} />
                    <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full ${colors.spot} blur-2xl pointer-events-none`} />
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">{exp.role}</h3>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`font-semibold ${colors.bullet}`}>
                            {exp.company}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${colors.badge}`}>
                            {exp.employmentType}
                          </span>
                        </div>
                      </div>
                      {exp.logo && (
                        <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-white border border-slate-200 dark:border-white/10 p-1 flex items-center justify-center">
                          <Image src={exp.logo} alt={`${exp.company} logo`} width={32} height={32} className="w-full h-full object-contain" />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 mb-4 text-sm text-slate-600 dark:text-slate-500">
                      <div className="flex items-center gap-1 flex-wrap">
                        <Calendar size={13} />
                        {formatDate(exp.start)} — {exp.end ? formatDate(exp.end) : t('present')}
                        <span className="px-2 py-0.5 rounded-full text-xs border bg-slate-100/60 dark:bg-white/5 border-slate-300/50 dark:border-white/10 text-slate-500 dark:text-slate-400 backdrop-blur-sm">
                          {formatDuration(exp.start, exp.end)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={13} />
                        {exp.location}
                        <span className="px-2 py-0.5 rounded-full text-xs border bg-slate-100/60 dark:bg-white/5 border-slate-300/50 dark:border-white/10 text-slate-500 dark:text-slate-400 backdrop-blur-sm">
                          {exp.locationType}
                        </span>
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
