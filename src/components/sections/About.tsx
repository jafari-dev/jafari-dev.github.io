"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";

const paragraphs = ["description", "description2", "description3", "description4"] as const;

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
          <div className="flex max-w-3xl flex-col gap-5">
            {paragraphs.map((key, i) => (
              <motion.p
                key={key}
                className="text-justify text-base text-slate-700 leading-relaxed sm:text-lg dark:text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15 + 0.1 * i }}
              >
                {t(key)}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
