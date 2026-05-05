import React from "react";
import { motion, useInView, Variant } from "framer-motion";

type AnimationPreset = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationPreset;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

const presets: Record<AnimationPreset, { initial: any; animate: any }> = {
  "fade-up": {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-down": {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-left": {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
  "fade-right": {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  "scale-up": {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  "none": {
    initial: {},
    animate: {},
  },
};

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  once = true,
  className = "",
}: ScrollRevealProps) {
  const { initial, animate } = presets[animation];

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Premium quint ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
