'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

const stats = [
  { key: 'stat_so',       value: '296', color: 'text-neon-cyan',    glow: 'via-neon-cyan/60',    spot: 'bg-neon-cyan/10'    },
  { key: 'stat_duck',     value: '100+',  color: 'text-neon-purple',  glow: 'via-neon-purple/60',  spot: 'bg-neon-purple/10'  },
  { key: 'stat_coffee',   value: '4k+',  color: 'text-neon-green',   glow: 'via-neon-green/60',   spot: 'bg-neon-green/10'   },
  { key: 'stat_tabs',     value: '37',   color: 'text-neon-orange',  glow: 'via-neon-orange/60',  spot: 'bg-neon-orange/10'  },
  { key: 'stat_ctrlz',    value: '∞',    color: 'text-neon-pink',    glow: 'via-neon-pink/60',    spot: 'bg-neon-pink/10'    },
  { key: 'stat_side',     value: '80+',  color: 'text-neon-cyan',    glow: 'via-neon-cyan/60',    spot: 'bg-neon-cyan/10'    },
  { key: 'stat_learning', value: '0',    color: 'text-neon-purple',  glow: 'via-neon-purple/60',  spot: 'bg-neon-purple/10'  },
  { key: 'stat_passion',  value: '∞',    color: 'text-neon-green',   glow: 'via-neon-green/60',   spot: 'bg-neon-green/10'   },
];

export default function Fun() {
  const t = useTranslations('fun');

  return (
    <section id="fun" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 glow-spot-cyan opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 glow-spot-pink opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl">
            {stats.map(({ key, value, color, glow, spot }, i) => (
              <motion.div
                key={key}
                className="glass neon-border rounded-xl p-4 text-center relative overflow-hidden min-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${glow} to-transparent`} />
                <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full ${spot} blur-xl pointer-events-none`} />
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
