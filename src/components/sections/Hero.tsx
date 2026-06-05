"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import NeonButton from "@/components/ui/NeonButton";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-spot-purple opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 glow-spot-cyan opacity-30 pointer-events-none" />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-full h-px bg-linear-to-r from-transparent via-neon-cyan/20 to-transparent"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-20">
          {/* Text content */}
          <motion.div
            className="flex-1 flex flex-col gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Available badge */}
            <motion.div variants={item} className="flex">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse-glow" />
                {t("available")}
              </span>
            </motion.div>

            {/* Greeting + Name */}
            <motion.div variants={item}>
              <p className="text-slate-600 dark:text-slate-400 font-mono text-lg mb-2">
                {t("greeting")}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-tight">
                <span className="gradient-text">Ahmad Jafari</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={item}>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-neon-cyan/60" />
                <p className="text-neon-cyan font-mono text-lg tracking-wide">
                  {t("title")}
                </p>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              {t("subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <NeonButton
                href="/AhmadJafari.pdf"
                download
                variant="primary"
                size="lg"
              >
                <Download size={18} />
                {t("cta_cv")}
              </NeonButton>
              <NeonButton
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="ghost"
                size="lg"
              >
                {t("cta_contact")}
                <ArrowRight size={18} />
              </NeonButton>
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 blur-2xl scale-110 animate-pulse-glow" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-linear-to-br from-neon-cyan via-neon-purple to-neon-pink">
              <div className="w-full h-full rounded-full p-1 bg-dark-950">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/avatar.jpg"
                    alt="Ahmad Jafari"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    priority
                  />
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-4 -left-4 glass neon-border rounded-xl px-4 py-2"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-2xl text-center font-bold font-display text-neon-cyan">
                15+
              </p>
              <p className="text-xs text-center text-slate-600 dark:text-slate-400">
                Business Projects
              </p>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 glass neon-border rounded-xl px-4 py-2"
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <p className="text-2xl text-center font-bold font-display text-neon-purple">
                7+
              </p>
              <p className="text-xs text-center text-slate-600 dark:text-slate-400">
                Years of Experience
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 dark:text-slate-500 hover:text-neon-cyan transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs font-mono">{t("scroll")}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
