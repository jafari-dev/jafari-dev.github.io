'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, ExternalLink, Phone, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/Icons';
import SectionTitle from '@/components/ui/SectionTitle';
import NeonButton from '@/components/ui/NeonButton';
import { socialLinks } from '@/data/portfolio';

export default function Contact() {
  const t = useTranslations('contact');
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  type ContactItem = {
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string | null;
    color: string;
    border: string;
    bg: string;
    glow: string;
    spot: string;
    external?: boolean;
    action?: () => void;
    actionIcon?: React.ReactNode;
    actionLabel?: string;
  };

  const contactItems: ContactItem[] = [
    {
      icon: <Mail size={28} />,
      label: t('email_label'),
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
      color: 'text-neon-pink',
      border: 'border-neon-pink/20 hover:border-neon-pink/50',
      bg: 'bg-neon-pink/5',
      glow: 'via-neon-pink/60',
      spot: 'bg-neon-pink/10',
      action: copyEmail,
      actionIcon: copied ? <Check size={16} /> : <Copy size={16} />,
      actionLabel: copied ? t('copied') : t('copy_email'),
    },
    {
      icon: <GitHubIcon size={28} />,
      label: t('github_label'),
      value: '@jafari-dev',
      href: socialLinks.github,
      color: 'text-neon-purple',
      border: 'border-neon-purple/20 hover:border-neon-purple/50',
      bg: 'bg-neon-purple/5',
      glow: 'via-neon-purple/60',
      spot: 'bg-neon-purple/10',
      external: true,
    },
    {
      icon: <Phone size={28} />,
      label: t('phone_label'),
      value: t('phone_value'),
      href: null,
      color: 'text-neon-green',
      border: 'border-neon-green/20 hover:border-neon-green/50',
      bg: 'bg-neon-green/5',
      glow: 'via-neon-green/60',
      spot: 'bg-neon-green/10',
    },
    {
      icon: <LinkedInIcon size={28} />,
      label: t('linkedin_label'),
      value: '@jafari-dev',
      href: socialLinks.linkedin,
      color: 'text-neon-orange',
      border: 'border-neon-orange/20 hover:border-neon-orange/50',
      bg: 'bg-neon-orange/5',
      glow: 'via-neon-orange/60',
      spot: 'bg-neon-orange/10',
      external: true,
    },
    {
      icon: <Send size={28} />,
      label: t('telegram_label'),
      value: t('telegram_value'),
      href: socialLinks.telegram,
      color: 'text-neon-cyan',
      border: 'border-neon-cyan/20 hover:border-neon-cyan/50',
      bg: 'bg-neon-cyan/5',
      glow: 'via-neon-cyan/60',
      spot: 'bg-neon-cyan/10',
      external: true,
    },
    {
      icon: <MapPin size={28} />,
      label: t('location_label'),
      value: t('location_value'),
      href: null,
      color: 'text-neon-pink',
      border: 'border-neon-pink/20 hover:border-neon-pink/50',
      bg: 'bg-neon-pink/5',
      glow: 'via-neon-pink/60',
      spot: 'bg-neon-pink/10',
    },
  ];

  return (
    <section id="contact" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-t from-dark-900/30 to-transparent pointer-events-none opacity-0 dark:opacity-100" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] glow-spot-cyan opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 glow-spot-purple opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 glow-spot-pink opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <motion.p
          className="text-center text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-12 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('description')}
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              className={`glass rounded-2xl p-5 border transition-colors duration-300 ${item.border} group relative overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * i } }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              whileHover={{ y: -3 }}
            >
              <div className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${item.glow} to-transparent`} />
              <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full ${item.spot} blur-2xl pointer-events-none`} />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center ${item.color} shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-500 font-mono mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className={`text-sm font-medium ${item.color} hover:underline flex items-center gap-1`}
                      >
                        {item.value}
                        {item.external && <ExternalLink size={12} />}
                      </a>
                    ) : (
                      <p className={`text-sm font-medium ${item.color}`}>{item.value}</p>
                    )}
                  </div>
                </div>

                {item.action && (
                  <motion.button
                    onClick={item.action}
                    className={`p-2 rounded-lg text-slate-600 dark:text-slate-500 hover:${item.color} hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 text-xs flex items-center gap-1`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={item.actionLabel}
                  >
                    {item.actionIcon}
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
