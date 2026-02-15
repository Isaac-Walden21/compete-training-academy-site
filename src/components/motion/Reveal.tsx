"use client";

import type { PropsWithChildren } from "react";

import { motion, useReducedMotion } from "framer-motion";

interface RevealProps extends PropsWithChildren {
  delay?: number;
  y?: number;
  className?: string;
  immediate?: boolean;
}

export function Reveal({ children, delay = 0, y = 24, className, immediate = false }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce || immediate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.48, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
