"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/data/portfolio";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative border-neon-cyan/10 border-t py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row">
        <div className="flex items-center gap-4">
          {[
            { href: socialLinks.github, icon: <GitHubIcon size={18} />, label: "GitHub" },
            { href: socialLinks.linkedin, icon: <LinkedInIcon size={18} />, label: "LinkedIn" },
            { href: `mailto:${socialLinks.email}`, icon: <Mail size={18} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-slate-500 transition-colors duration-200 hover:text-neon-cyan"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        <p className="text-center text-slate-600 text-sm md:text-end dark:text-slate-500">
          © {new Date().getFullYear()} Ahmad Jafari. {t("rights")}.
        </p>
      </div>
    </footer>
  );
}
