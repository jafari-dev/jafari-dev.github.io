"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";

const stats = [
  { key: "stat_so", value: "296", color: "text-neon-cyan", glow: "via-neon-cyan/60", spot: "bg-neon-cyan/10" },
  { key: "stat_duck", value: "100+", color: "text-neon-purple", glow: "via-neon-purple/60", spot: "bg-neon-purple/10" },
  { key: "stat_coffee", value: "4k+", color: "text-neon-green", glow: "via-neon-green/60", spot: "bg-neon-green/10" },
  { key: "stat_tabs", value: "37", color: "text-neon-orange", glow: "via-neon-orange/60", spot: "bg-neon-orange/10" },
  { key: "stat_ctrlz", value: "∞", color: "text-neon-pink", glow: "via-neon-pink/60", spot: "bg-neon-pink/10" },
  { key: "stat_side", value: "80+", color: "text-neon-cyan", glow: "via-neon-cyan/60", spot: "bg-neon-cyan/10" },
  {
    key: "stat_learning",
    value: "0",
    color: "text-neon-purple",
    glow: "via-neon-purple/60",
    spot: "bg-neon-purple/10",
  },
  { key: "stat_passion", value: "∞", color: "text-neon-green", glow: "via-neon-green/60", spot: "bg-neon-green/10" },
];

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="glow-spot-purple pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="glow-spot-cyan pointer-events-none absolute top-1/4 right-0 h-72 w-72 opacity-15" />
      <div className="glow-spot-pink pointer-events-none absolute bottom-1/4 left-0 h-72 w-72 opacity-10" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="flex flex-col items-center">
          <motion.div
            className="mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-justify text-base text-slate-700 leading-relaxed sm:text-lg dark:text-slate-300">
              {t("description")}
            </p>
          </motion.div>

          <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {stats.map(({ key, value, color, glow, spot }, i) => (
              <motion.div
                key={key}
                className="glass neon-border relative min-w-[200px] overflow-hidden rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${glow} to-transparent`}
                />
                <div
                  className={`absolute -top-4 -right-4 h-16 w-16 rounded-full ${spot} pointer-events-none blur-xl`}
                />
                <p className={`font-bold font-display text-2xl sm:text-3xl ${color}`}>{value}</p>
                <p className="mt-1 font-medium text-slate-600 text-xs dark:text-slate-500">{t(key)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
