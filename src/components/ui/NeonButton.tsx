"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface NeonButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/20 hover:border-neon-cyan hover:neon-glow-cyan dark:bg-neon-cyan/10 dark:border-neon-cyan/50 dark:text-neon-cyan dark:hover:bg-neon-cyan/20 dark:hover:border-neon-cyan",
  secondary:
    "bg-neon-purple/10 border border-neon-purple/50 text-neon-purple hover:bg-neon-purple/20 hover:border-neon-purple hover:neon-glow-purple dark:bg-neon-purple/10 dark:border-neon-purple/50 dark:text-neon-purple dark:hover:bg-neon-purple/20 dark:hover:border-neon-purple",
  ghost:
    "bg-transparent border border-slate-400 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-neon-cyan/50 hover:text-neon-cyan",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-2.5 text-lg",
};

export default function NeonButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  download,
  target,
  rel,
  type = "button",
}: NeonButtonProps) {
  const baseClass = `inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-300 shine cursor-pointer select-none ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={baseClass}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClass}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
