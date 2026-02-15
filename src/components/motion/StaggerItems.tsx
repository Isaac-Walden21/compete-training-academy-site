"use client";

import type { PropsWithChildren } from "react";
import { Children } from "react";

import { motion, useReducedMotion } from "framer-motion";

interface StaggerItemsProps extends PropsWithChildren {
  className?: string;
  delayStep?: number;
}

export function StaggerItems({ children, className, delayStep = 0.08 }: StaggerItemsProps) {
  const reduce = useReducedMotion();
  const nodes = Children.toArray(children);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className}>
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.42, delay: index * delayStep, ease: "easeOut" }}
        >
          {node}
        </motion.div>
      ))}
    </div>
  );
}
