"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";

// Flat-top hexagon — text sits in the full-width vertical center band.
const HEX = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

// Honeycomb "flower": one hexagon at the center (x/y = 0) and six ringed around it.
// Offsets are multiples of the hexagon width — edge-adjacent neighbours sit at
// 0.75W horizontally and 0.866W·½ vertically, scaled by ~1.08 for a slight gap.
const stats = [
  {
    key: "stat_passion",
    value: "∞",
    color: "text-neon-pink",
    edge: "var(--color-neon-pink)",
    spot: "bg-neon-pink/15",
    shadow: "hover:drop-shadow-[0_0_16px_color-mix(in_srgb,var(--color-neon-pink)_30%,transparent)]",
    x: 0,
    y: 0,
  },
  {
    key: "stat_bookmarks",
    value: "200+",
    color: "text-neon-cyan",
    edge: "var(--color-neon-cyan)",
    spot: "bg-neon-cyan/15",
    shadow: "hover:drop-shadow-[0_0_16px_color-mix(in_srgb,var(--color-neon-cyan)_30%,transparent)]",
    x: 0,
    y: -0.935,
  },
  {
    key: "stat_duck",
    value: "0%",
    color: "text-neon-green",
    edge: "var(--color-neon-green)",
    spot: "bg-neon-green/15",
    shadow: "hover:drop-shadow-[0_0_16px_color-mix(in_srgb,var(--color-neon-green)_30%,transparent)]",
    x: 0.81,
    y: -0.468,
  },
  {
    key: "stat_coffee",
    value: "4k+",
    color: "text-neon-orange",
    edge: "var(--color-neon-orange)",
    spot: "bg-neon-orange/15",
    shadow: "hover:drop-shadow-[0_0_16px_color-mix(in_srgb,var(--color-neon-orange)_30%,transparent)]",
    x: 0.81,
    y: 0.468,
  },
  {
    key: "stat_side",
    value: "50+",
    color: "text-neon-blue",
    edge: "var(--color-neon-blue)",
    spot: "bg-neon-blue/15",
    shadow: "hover:drop-shadow-[0_0_16px_color-mix(in_srgb,var(--color-neon-blue)_30%,transparent)]",
    x: 0,
    y: 0.935,
  },
  {
    key: "stat_learning",
    value: "100%",
    color: "text-neon-purple",
    edge: "var(--color-neon-purple)",
    spot: "bg-neon-purple/15",
    shadow: "hover:drop-shadow-[0_0_16px_color-mix(in_srgb,var(--color-neon-purple)_30%,transparent)]",
    x: -0.81,
    y: 0.468,
  },
  {
    key: "stat_ctrlz",
    value: "3B+",
    color: "text-neon-yellow",
    edge: "var(--color-neon-yellow)",
    spot: "bg-neon-yellow/15",
    shadow: "hover:drop-shadow-[0_0_16px_color-mix(in_srgb,var(--color-neon-yellow)_30%,transparent)]",
    x: -0.81,
    y: -0.468,
  },
  {
    key: "stat_tabs",
    value: "1M+",
    color: "text-neon-green",
    edge: "var(--color-neon-green)",
    spot: "bg-neon-green/15",
    shadow: "hover:drop-shadow-[0_0_16px_color-mix(in_srgb,var(--color-neon-green)_30%,transparent)]",
    x: -0.81,
    y: 1.403,
  },
  {
    key: "stat_stackoverflow",
    value: "100+",
    color: "text-neon-yellow",
    edge: "var(--color-neon-yellow)",
    spot: "bg-neon-yellow/15",
    shadow: "hover:drop-shadow-[0_0_16px_color-mix(in_srgb,var(--color-neon-yellow)_30%,transparent)]",
    x: 0.81,
    y: 1.403,
  },
  {
    key: "stat_merge",
    value: "500+",
    color: "text-neon-pink",
    edge: "var(--color-neon-pink)",
    spot: "bg-neon-pink/15",
    shadow: "hover:drop-shadow-[0_0_16px_color-mix(in_srgb,var(--color-neon-pink)_30%,transparent)]",
    x: 0,
    y: 1.871,
  },
];

// The cluster now spans from y=-0.935 (top hex) to y=1.871 (bottom hex); its
// vertical midpoint is 0.468, so shift every hex up by that to re-centre it.
const Y_SHIFT = 0.468;

export default function Fun() {
  const t = useTranslations("fun");

  return (
    <section id="fun" className="relative overflow-hidden py-24">
      <div className="glow-spot-cyan pointer-events-none absolute top-1/4 left-0 h-72 w-72 opacity-15" />
      <div className="glow-spot-pink pointer-events-none absolute right-0 bottom-1/4 h-72 w-72 opacity-10" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <div className="flex justify-center">
          <div
            className="relative mx-auto"
            style={
              {
                // Hexagon width scales with the viewport; the cluster size derives from it.
                "--hex": "clamp(112px, 27vw, 196px)",
                width: "calc(var(--hex) * 2.7)",
                height: "calc(var(--hex) * 3.9)",
              } as CSSProperties
            }
          >
            {stats.map(({ key, value, color, edge, spot, shadow, x, y }, i) => (
              <div
                key={key}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: "var(--hex)",
                  transform: `translate(calc(-50% + var(--hex) * ${x}), calc(-50% + var(--hex) * ${y - Y_SHIFT}))`,
                }}
              >
                <motion.div
                  className={`group relative cursor-default hover:z-10 ${shadow}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.06 }}
                >
                  <div className="relative aspect-[1.15/1] w-full">
                    {/* Frosted glass hexagon — nothing opaque behind it, so the page shows through */}
                    <div
                      className="glass absolute inset-0 flex flex-col items-center justify-center border-0 p-4 text-center"
                      style={{ clipPath: HEX }}
                    >
                      <div
                        className={`pointer-events-none absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full ${spot} blur-2xl`}
                      />
                      <p className={`relative font-bold font-display text-xl sm:text-2xl ${color}`}>{value}</p>
                      <p className="relative mt-1 whitespace-pre-line font-medium text-slate-700 text-xs sm:text-sm dark:text-slate-400">
                        {t(key).split(" ").join("\n")}
                      </p>
                    </div>
                    {/* Neon edge drawn as a real hexagon outline so it follows every side */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      className="pointer-events-none absolute inset-0 h-full w-full"
                    >
                      <polygon
                        points="25,1 75,1 99,50 75,99 25,99 1,50"
                        fill="none"
                        stroke={edge}
                        strokeWidth={3}
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
