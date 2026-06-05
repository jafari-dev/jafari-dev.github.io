'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const NAV_ITEMS = ['about', 'skills', 'experience', 'contact'] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 dark:bg-dark-900/80 dark:border-neon-cyan/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('hero')}
            className="font-mono text-lg font-bold text-neon-cyan neon-text-cyan cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-slate-400">{'<'}</span>
            Ahmad
            <span className="text-neon-purple"> Jafari</span>
            <span className="text-slate-400">{' />'}</span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item}
                onClick={() => scrollTo(item)}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-neon-cyan transition-colors duration-200 rounded-lg hover:bg-neon-cyan/5 cursor-pointer"
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
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                title={t('toggle_theme')}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            )}

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-200 cursor-pointer"
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
              className="absolute inset-0 bg-slate-900/70 dark:bg-dark-950/90 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="absolute top-16 left-0 right-0 bg-white/95 dark:bg-dark-800/95 border-b border-slate-200 dark:border-neon-cyan/10 py-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="w-full px-6 py-3 text-start text-slate-700 dark:text-slate-300 hover:text-neon-cyan hover:bg-neon-cyan/5 transition-colors font-medium cursor-pointer"
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
