"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import { experiences } from "@/data/portfolio";

const colorMap = {
  cyan: {
    border: "border-neon-cyan/20! hover:border-neon-cyan/50!",
    borderHover: "border-neon-cyan/50",
    dot: "bg-neon-cyan",
    badge: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30",
    bullet: "text-neon-cyan",
    glow: "via-neon-cyan/60",
    spot: "bg-neon-cyan/10",
  },
  purple: {
    border: "border-neon-purple/20! hover:border-neon-purple/50!",
    borderHover: "border-neon-purple/50",
    dot: "bg-neon-purple",
    badge: "bg-neon-purple/10 text-neon-purple border-neon-purple/30",
    bullet: "text-neon-purple",
    glow: "via-neon-purple/60",
    spot: "bg-neon-purple/10",
  },
  green: {
    border: "border-neon-green/20! hover:border-neon-green/50!",
    borderHover: "border-neon-green/50",
    dot: "bg-neon-green",
    badge: "bg-neon-green/10 text-neon-green border-neon-green/30",
    bullet: "text-neon-green",
    glow: "via-neon-green/60",
    spot: "bg-neon-green/10",
  },
  pink: {
    border: "border-neon-pink/20! hover:border-neon-pink/50!",
    borderHover: "border-neon-pink/50",
    dot: "bg-neon-pink",
    badge: "bg-neon-pink/10 text-neon-pink border-neon-pink/30",
    bullet: "text-neon-pink",
    glow: "via-neon-pink/60",
    spot: "bg-neon-pink/10",
  },
  orange: {
    border: "border-neon-orange/20! hover:border-neon-orange/50!",
    borderHover: "border-neon-orange/50",
    dot: "bg-neon-orange",
    badge: "bg-neon-orange/10 text-neon-orange border-neon-orange/30",
    bullet: "text-neon-orange",
    glow: "via-neon-orange/60",
    spot: "bg-neon-orange/10",
  },
};

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function formatDuration(start: Date, end: Date | null): string {
  const to = end ?? new Date();
  const months = (to.getFullYear() - start.getFullYear()) * 12 + (to.getMonth() - start.getMonth());
  if (months < 12) {
    return `${months} mo`;
  }
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem > 0 ? `${years} yr ${rem} mo` : `${years} yr`;
}

export default function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="relative py-24">
      <div className="glow-spot-purple pointer-events-none absolute top-1/4 -left-10 h-128 w-lg opacity-25" />
      <div className="glow-spot-cyan pointer-events-none absolute -right-10 bottom-1/4 h-128 w-lg opacity-25" />
      <div className="glow-spot-pink pointer-events-none absolute top-1/2 left-1/2 h-112 w-md -translate-x-1/2 opacity-10" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <div className="relative">
          <div className="absolute inset-s-8 top-8 bottom-8 hidden w-px bg-linear-to-b from-neon-cyan/50 via-neon-purple/40 to-neon-cyan/30 md:block" />
          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const colors = colorMap[exp.color];
              return (
                <motion.div
                  key={exp.id}
                  className="relative flex gap-2 md:gap-10"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                >
                  <div className="relative hidden w-16 shrink-0 justify-center md:flex">
                    <div className={`mt-5 h-4 w-4 rounded-full ${colors.dot} z-10`} />
                  </div>
                  <div
                    className={`glass flex-1 rounded-2xl border p-6 transition-colors duration-300 ${colors.border} relative mb-2 overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${colors.glow} to-transparent`}
                    />
                    <div
                      className={`absolute -top-8 -right-8 h-32 w-32 rounded-full ${colors.spot} pointer-events-none blur-2xl`}
                    />
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold font-display text-lg text-slate-900 dark:text-white">{exp.role}</h3>
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                          <span className={`font-semibold ${colors.bullet}`}>{exp.company}</span>
                          <span className={`rounded-full border px-2 py-0.5 text-xs ${colors.badge}`}>
                            {exp.employmentType}
                          </span>
                        </div>
                      </div>
                      {exp.logo && (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white p-1 dark:border-white/10">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={32}
                            height={32}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                    <div className="mb-4 flex flex-col gap-2 text-slate-600 text-sm dark:text-slate-500">
                      <div className="flex flex-wrap items-center gap-1">
                        <Calendar size={13} />
                        {formatDate(exp.start)} — {exp.end ? formatDate(exp.end) : t("present")}
                        <span className="rounded-full border border-slate-300/50 bg-slate-100/60 px-2 py-0.5 text-slate-500 text-xs backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                          {formatDuration(exp.start, exp.end)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={13} />
                        {exp.location}
                        <span className="rounded-full border border-slate-300/50 bg-slate-100/60 px-2 py-0.5 text-slate-500 text-xs backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                          {exp.locationType}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, j) => (
                        <motion.li
                          key={j}
                          className="flex items-start gap-2 text-slate-600 text-sm leading-6 dark:text-slate-400"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * j + 0.2 }}
                        >
                          <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${colors.dot}`} />
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
