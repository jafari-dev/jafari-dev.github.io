'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-start items-start';

  return (
    <motion.div
      className={`flex flex-col gap-2 mb-12 ${alignClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-sm font-mono text-neon-cyan tracking-widest uppercase">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold font-display text-white dark:text-white">
        {title}
        <span className="text-neon-cyan neon-text-cyan">.</span>
      </h2>
      <motion.div
        className="h-px w-16 bg-gradient-to-r from-neon-cyan to-neon-purple"
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
}
