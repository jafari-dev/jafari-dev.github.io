'use client';

import { useTranslations } from 'next-intl';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/Icons';
import { socialLinks } from '@/data/portfolio';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative border-t border-neon-cyan/10 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm text-center md:text-start">
          {t('built_with')}
        </p>

        <div className="flex items-center gap-4">
          {[
            { href: socialLinks.github, icon: <GitHubIcon size={18} />, label: 'GitHub' },
            { href: socialLinks.linkedin, icon: <LinkedInIcon size={18} />, label: 'LinkedIn' },
            { href: `mailto:${socialLinks.email}`, icon: <Mail size={18} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="text-slate-500 hover:text-neon-cyan transition-colors duration-200"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        <p className="text-slate-600 text-sm text-center md:text-end">
          © {new Date().getFullYear()} Ahmad Jafari. {t('rights')}.
        </p>
      </div>
    </footer>
  );
}
