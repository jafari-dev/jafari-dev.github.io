"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import NeonButton from "@/components/ui/NeonButton";

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
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg absolute inset-0 opacity-60" />
      {/* Radial glow spots */}
      <div className="glow-spot-purple pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 opacity-40" />
      <div className="glow-spot-cyan pointer-events-none absolute right-1/4 bottom-1/4 h-80 w-80 opacity-30" />
      {/* Scan line effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute h-px w-full bg-linear-to-r from-transparent via-neon-cyan/20 to-transparent"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:py-24">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
          {/* Avatar — top on mobile, right on desktop */}
          <motion.div
            className="relative shrink-0 lg:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          >
            <div className="absolute inset-0 scale-110 animate-pulse-glow rounded-full bg-linear-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 blur-2xl" />
            <div className="relative h-64 w-64 rounded-full bg-linear-to-br from-neon-cyan via-neon-purple to-neon-pink p-1">
              <div className="h-full w-full rounded-full bg-dark-950 p-1">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/avatar.jpg"
                    alt="Ahmad Jafari"
                    width={320}
                    height={320}
                    className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                    priority
                  />
                </div>
              </div>
            </div>
            <motion.div
              className="glass neon-border absolute -bottom-4 -left-4 rounded-xl px-4 py-2"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-center font-bold font-display text-2xl text-neon-cyan">15+</p>
              <p className="text-center text-slate-600 text-xs dark:text-slate-400">Business Projects</p>
            </motion.div>
            <motion.div
              className="glass neon-border absolute -top-4 -right-4 rounded-xl px-4 py-2"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <p className="text-center font-bold font-display text-2xl text-neon-purple">7+</p>
              <p className="text-center text-slate-600 text-xs dark:text-slate-400">Years of Experience</p>
            </motion.div>
          </motion.div>
          {/* Text content */}
          <motion.div
            className="flex flex-1 flex-col items-center gap-6 lg:items-start"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Available badge */}
            <motion.div variants={item} className="flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-neon-green/30 bg-neon-green/5 px-3 py-1 font-mono text-neon-green text-xs">
                <span className="h-2 w-2 animate-pulse-glow rounded-full bg-neon-green" />
                {t("available")}
              </span>
            </motion.div>
            {/* Greeting + Name */}
            <motion.div variants={item} className="text-center lg:text-left">
              <p className="mb-2 font-mono text-lg text-slate-600 dark:text-slate-400">{t("greeting")}</p>
              <h1 className="font-bold font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
                <span className="gradient-text">Ahmad Jafari</span>
              </h1>
            </motion.div>
            {/* Title */}
            <motion.div variants={item}>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <div className="h-px w-8 bg-neon-cyan/60" />
                <p className="font-mono text-lg text-neon-cyan tracking-wide">{t("title")}</p>
              </div>
            </motion.div>
            {/* Subtitle */}
            <motion.p
              variants={item}
              className="max-w-xl text-center text-base text-slate-600 leading-relaxed sm:text-lg lg:text-left dark:text-slate-400"
            >
              {t("subtitle")}
            </motion.p>
            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <NeonButton href="/AhmadJafari.pdf" download variant="primary" size="lg">
                <Download size={18} />
                {t("cta_cv")}
              </NeonButton>
              <NeonButton
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                variant="ghost"
                size="lg"
              >
                <MessageCircleMore size={18} />
                {t("cta_contact")}
              </NeonButton>
            </motion.div>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-0 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-slate-600 transition-colors hover:text-neon-cyan dark:text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="font-mono text-xs">{t("scroll")}</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
