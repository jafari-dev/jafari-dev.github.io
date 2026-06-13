"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
}

export default function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-start items-start";

  return (
    <motion.div
      className={`mb-12 flex flex-col gap-2 ${alignClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="font-mono text-neon-cyan text-sm uppercase tracking-widest">{subtitle}</span>
      <h2 className="font-bold font-display text-3xl text-slate-900 md:text-4xl dark:text-white">{title}</h2>
      <motion.div
        className="h-px w-16 bg-linear-to-r from-neon-cyan to-neon-purple"
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
}
