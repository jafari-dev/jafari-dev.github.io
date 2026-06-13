"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const NAV_ITEMS = ["about", "skills", "experience", "projects", "contact"] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 right-0 left-0 z-50 w-full overflow-x-hidden transition-all duration-300 ${
          scrolled
            ? "border-slate-200 border-b bg-white/80 backdrop-blur-xl dark:border-neon-cyan/10 dark:bg-dark-900/80"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("hero")}
            className="neon-text-cyan cursor-pointer font-bold font-mono text-lg text-neon-cyan"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-slate-400">{"<"}</span>
            <span className="text-neon-cyan">A</span>
            <span className="text-neon-purple">J</span>
            <span className="text-slate-400">{"/>"}</span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item}
                onClick={() => scrollTo(item)}
                className="cursor-pointer rounded-lg px-4 py-2 font-medium text-slate-600 text-sm transition-colors duration-200 hover:bg-neon-cyan/5 hover:text-neon-cyan dark:text-slate-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -1 }}
              >
                {t(item)}
              </motion.button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                title={t("toggle_theme")}
                className="cursor-pointer rounded-lg p-2 text-slate-600 transition-all duration-200 hover:bg-neon-cyan/10 hover:text-neon-cyan dark:text-slate-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            )}

            {/* Mobile menu button */}
            <motion.button
              className="cursor-pointer rounded-lg p-2 text-slate-600 transition-all duration-200 hover:bg-neon-cyan/10 hover:text-neon-cyan md:hidden dark:text-slate-400"
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-white/70 backdrop-blur-xl dark:bg-dark-950/90"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="absolute top-16 right-0 left-0 border-slate-200 border-b bg-white/95 py-4 dark:border-neon-cyan/10 dark:bg-dark-800/95"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="w-full cursor-pointer px-6 py-3 text-start font-medium text-slate-700 transition-colors hover:bg-neon-cyan/5 hover:text-neon-cyan dark:text-slate-300"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {t(item)}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
