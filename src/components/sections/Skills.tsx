"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillCategories } from "@/data/portfolio";
import { skillIcons } from "@/data/skillIcons";

const categoryColors = [
  {
    border: "border-neon-cyan/20",
    text: "text-neon-cyan",
    badge: "bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan",
    dot: "bg-neon-cyan",
    glow: "via-neon-cyan/60",
    spot: "bg-neon-cyan/10",
  },
  {
    border: "border-neon-purple/20",
    text: "text-neon-purple",
    badge: "bg-neon-purple/10 border-neon-purple/30 text-neon-purple",
    dot: "bg-neon-purple",
    glow: "via-neon-purple/60",
    spot: "bg-neon-purple/10",
  },
  {
    border: "border-neon-green/20",
    text: "text-neon-green",
    badge: "bg-neon-green/10 border-neon-green/30 text-neon-green",
    dot: "bg-neon-green",
    glow: "via-neon-green/60",
    spot: "bg-neon-green/10",
  },
  {
    border: "border-neon-pink/20",
    text: "text-neon-pink",
    badge: "bg-neon-pink/10 border-neon-pink/30 text-neon-pink",
    dot: "bg-neon-pink",
    glow: "via-neon-pink/60",
    spot: "bg-neon-pink/10",
  },
  {
    border: "border-neon-orange/20",
    text: "text-neon-orange",
    badge: "bg-neon-orange/10 border-neon-orange/30 text-neon-orange",
    dot: "bg-neon-orange",
    glow: "via-neon-orange/60",
    spot: "bg-neon-orange/10",
  },
];

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-dark-900/50 to-transparent opacity-0 dark:opacity-100" />
      <div className="glow-spot-cyan pointer-events-none absolute top-1/4 -left-10 h-[32rem] w-[32rem] opacity-25" />
      <div className="glow-spot-purple pointer-events-none absolute -right-10 bottom-1/4 h-[32rem] w-[32rem] opacity-25" />
      <div className="glow-spot-orange pointer-events-none absolute bottom-0 left-1/3 h-[26rem] w-[26rem] opacity-10" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIdx) => {
            const colors = categoryColors[catIdx % categoryColors.length];
            return (
              <motion.div
                key={catIdx}
                className={`glass rounded-2xl border p-6 ${colors.border} group relative overflow-hidden transition-colors duration-300 hover:border-opacity-60`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * catIdx } }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${colors.glow} to-transparent`}
                />
                <div
                  className={`absolute -top-6 -right-6 h-28 w-28 rounded-full ${colors.spot} pointer-events-none blur-2xl`}
                />
                <h3
                  className={`mb-6 animate-pulse-glow text-center font-bold font-mono text-md uppercase tracking-wider ${colors.text}`}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => {
                    const icon = skillIcons[skill];
                    return (
                      <motion.span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-medium text-xs ${colors.badge} cursor-default select-none transition-all duration-200 hover:scale-105`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.05 * skillIdx + 0.1 * catIdx }}
                      >
                        {icon && <img src={icon} alt="" aria-hidden="true" className="h-3.5 w-3.5 dark:invert" />}
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
