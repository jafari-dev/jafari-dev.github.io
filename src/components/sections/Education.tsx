'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Education() {
  const t = useTranslations('education');

  return (
    <section className="relative py-16">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass neon-border rounded-2xl p-8 relative overflow-hidden group hover:border-neon-purple/50 transition-all duration-300">
            {/* Background glow */}
            <div className="absolute inset-0 glow-spot-purple opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center">
                <GraduationCap size={28} className="text-neon-purple" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white font-display mb-1">
                  {t('degree')}
                </h3>
                <p className="text-neon-purple font-semibold mb-4">{t('university')}</p>

                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-neon-cyan/60" />
                    {t('location')}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-neon-cyan/60" />
                    {t('period')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
