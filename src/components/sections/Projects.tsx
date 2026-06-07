'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { projects } from '@/data/portfolio';
import { skillIcons } from '@/data/skillIcons';

const colorMap = {
  cyan: {
    border: 'border-neon-cyan/20! hover:border-neon-cyan/50!',
    text: 'text-neon-cyan',
    dot: 'bg-neon-cyan',
    badge: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30',
    chip: 'bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan',
    glow: 'via-neon-cyan/60',
    spot: 'bg-neon-cyan/10',
  },
  purple: {
    border: 'border-neon-purple/20! hover:border-neon-purple/50!',
    text: 'text-neon-purple',
    dot: 'bg-neon-purple',
    badge: 'bg-neon-purple/10 text-neon-purple border-neon-purple/30',
    chip: 'bg-neon-purple/10 border-neon-purple/30 text-neon-purple',
    glow: 'via-neon-purple/60',
    spot: 'bg-neon-purple/10',
  },
  green: {
    border: 'border-neon-green/20! hover:border-neon-green/50!',
    text: 'text-neon-green',
    dot: 'bg-neon-green',
    badge: 'bg-neon-green/10 text-neon-green border-neon-green/30',
    chip: 'bg-neon-green/10 border-neon-green/30 text-neon-green',
    glow: 'via-neon-green/60',
    spot: 'bg-neon-green/10',
  },
  pink: {
    border: 'border-neon-pink/20! hover:border-neon-pink/50!',
    text: 'text-neon-pink',
    dot: 'bg-neon-pink',
    badge: 'bg-neon-pink/10 text-neon-pink border-neon-pink/30',
    chip: 'bg-neon-pink/10 border-neon-pink/30 text-neon-pink',
    glow: 'via-neon-pink/60',
    spot: 'bg-neon-pink/10',
  },
  orange: {
    border: 'border-neon-orange/20! hover:border-neon-orange/50!',
    text: 'text-neon-orange',
    dot: 'bg-neon-orange',
    badge: 'bg-neon-orange/10 text-neon-orange border-neon-orange/30',
    chip: 'bg-neon-orange/10 border-neon-orange/30 text-neon-orange',
    glow: 'via-neon-orange/60',
    spot: 'bg-neon-orange/10',
  },
};

export default function Projects() {
  const t = useTranslations('projects');

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute top-1/4 -right-10 w-[32rem] h-[32rem] glow-spot-cyan opacity-25 pointer-events-none" />
      <div className="absolute bottom-1/4 -left-10 w-[32rem] h-[32rem] glow-spot-purple opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] glow-spot-green opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="space-y-10">
          {projects.map((project, i) => {
            const colors = colorMap[project.color];
            return (
              <motion.article
                key={project.id}
                className={`glass rounded-2xl border overflow-hidden transition-colors duration-300 ${colors.border} relative`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${colors.glow} to-transparent`} />
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${colors.spot} blur-3xl pointer-events-none`} />

                {/* Window chrome */}
                <div className={`flex items-center justify-between gap-2 px-5 py-3 border-b ${colors.border}`}>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <span className="w-3 h-3 rounded-full bg-green-400/70" />
                  </div>
                  <h3 className="font-mono text-lg font-bold text-slate-900 dark:text-white truncate">
                    {project.name}
                  </h3>
                  <h5 className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${colors.badge}`}>
                    {project.category}
                  </h5>
                </div>

                <div className="p-4 md:p-8 relative">
                  <p className={`mt-1 text-sm font-medium ${colors.text}`}>{project.tagline}</p>
                  <p className="mt-4 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-7">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {project.metrics.map((metric, m) => (
                      <motion.div
                        key={m}
                        className={`rounded-xl bg-gray-500/10 px-3 py-3 text-center backdrop-blur-sm`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.05 * m + 0.15 }}
                      >
                        <div className={`text-base md:text-xl font-bold font-display ${colors.text}`}>
                          {metric.value}
                        </div>
                        <div className="mt-1 text-[10px] md:text-xs text-slate-500 dark:text-slate-400 leading-tight">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Role */}
                  <p className="mt-6 text-sm text-slate-600 dark:text-slate-400 leading-6">
                    <span className={`font-mono uppercase tracking-wider mr-2 ${colors.text}`}>
                      // role
                    </span>
                    {project.role}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2">
                    {project.highlights.map((highlight, j) => (
                      <motion.li
                        key={j}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-6"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.04 * j + 0.2 }}
                      >
                        <span className={`${colors.text}`} aria-hidden="true">➜</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => {
                      const icon = skillIcons[tech];
                      return (
                        <span
                          key={tech}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${colors.chip} cursor-default select-none transition-transform duration-200 hover:scale-105`}
                        >
                          {icon && (
                            <img src={icon} alt="" aria-hidden="true" className="w-3.5 h-3.5 dark:invert" />
                          )}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
