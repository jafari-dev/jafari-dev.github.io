"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Education() {
  const t = useTranslations("education");

  return (
    <section className="relative py-16">
      <div className="glow-spot-purple pointer-events-none absolute top-1/3 -left-10 h-[28rem] w-[28rem] opacity-20" />
      <div className="glow-spot-cyan pointer-events-none absolute -right-10 bottom-0 h-[24rem] w-[24rem] opacity-15" />
      <div className="glow-spot-pink pointer-events-none absolute top-0 left-1/2 h-[20rem] w-[30rem] -translate-x-1/2 opacity-8" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <motion.div
          className="mx-auto max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass neon-border group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:border-neon-purple/50">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-neon-purple/60 to-transparent" />
            <div className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 rounded-full bg-neon-purple/10 blur-2xl" />
            {/* Background glow */}
            <div className="glow-spot-purple pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30" />

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-neon-purple/30 bg-neon-purple/10">
                <GraduationCap size={28} className="text-neon-purple" />
              </div>

              <div className="flex-1">
                <h3 className="mb-1 font-bold font-display text-slate-900 text-xl dark:text-white">{t("degree")}</h3>
                <p className="mb-4 font-semibold text-neon-purple">{t("university")}</p>

                <div className="flex flex-wrap gap-4 text-slate-600 text-sm dark:text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-neon-cyan/60" />
                    {t("location")}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-neon-cyan/60" />
                    {t("period")}
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
