'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { skillCategories } from '@/data/portfolio';

const categoryColors = [
  { border: 'border-neon-cyan/20', text: 'text-neon-cyan', badge: 'bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan', dot: 'bg-neon-cyan' },
  { border: 'border-neon-purple/20', text: 'text-neon-purple', badge: 'bg-neon-purple/10 border-neon-purple/30 text-neon-purple', dot: 'bg-neon-purple' },
  { border: 'border-neon-green/20', text: 'text-neon-green', badge: 'bg-neon-green/10 border-neon-green/30 text-neon-green', dot: 'bg-neon-green' },
  { border: 'border-neon-pink/20', text: 'text-neon-pink', badge: 'bg-neon-pink/10 border-neon-pink/30 text-neon-pink', dot: 'bg-neon-pink' },
  { border: 'border-neon-orange/20', text: 'text-neon-orange', badge: 'bg-neon-orange/10 border-neon-orange/30 text-neon-orange', dot: 'bg-neon-orange' },
];

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const colors = categoryColors[catIdx % categoryColors.length];
            return (
              <motion.div
                key={catIdx}
                className={`glass rounded-2xl p-6 border ${colors.border} group hover:border-opacity-60 transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1 * catIdx }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-2 h-2 rounded-full ${colors.dot} animate-pulse-glow`} />
                  <h3 className={`font-mono text-sm font-semibold tracking-wider uppercase ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${colors.badge} cursor-default select-none transition-all duration-200 hover:scale-105`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * skillIdx + 0.1 * catIdx }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
