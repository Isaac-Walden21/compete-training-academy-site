"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { Button } from "@/components/ui/Button";
import { assetById } from "@/content/assets";
import { bookDescription } from "@/content/site";

interface HeroSectionProps {
  onPreOrderClick: () => void;
}

export function HeroSection({ onPreOrderClick }: HeroSectionProps) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [0, 64]);
  const textParallaxY = useTransform(scrollYProgress, [0, 1], [0, 26]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#f7f8fa] to-[#eef1f4] py-20 text-ink"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,71,161,0.14),transparent_45%)]"
        initial={reduce ? undefined : { scale: 1, opacity: 0.45 }}
        animate={reduce ? undefined : { scale: 1.05, opacity: 0.38 }}
        transition={{ duration: 9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <div className="relative grid-shell grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, x: -24 }}
          animate={reduce ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6 rounded-3xl border border-navy/12 bg-white/82 p-6 shadow-2xl backdrop-blur-sm md:p-8"
          style={reduce ? undefined : { y: textParallaxY }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">{bookDescription.subhead}</p>
          <h1 className="text-balance font-display text-6xl font-semibold uppercase leading-[0.92] tracking-[0.08em] text-navy md:text-7xl lg:text-8xl">
            {bookDescription.headline}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-navy/85 md:text-lg">{bookDescription.body1}</p>
          <p className="max-w-xl text-base leading-relaxed text-navy/85 md:text-lg">{bookDescription.body2}</p>
          <Button size="lg" onClick={onPreOrderClick}>
            Pre-Order Book
          </Button>
        </motion.div>

        <motion.figure
          initial={reduce ? undefined : { opacity: 0, y: 20, scale: 0.95 }}
          animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          className="relative rounded-2xl border border-navy/18 bg-white/60 p-3 shadow-2xl backdrop-blur-sm"
          style={reduce ? undefined : { y: imageParallaxY }}
        >
          <Image
            src={assetById["TODO-ASSET-001"].current}
            alt={assetById["TODO-ASSET-001"].alt}
            width={760}
            height={640}
            className="h-full w-full rounded-xl object-cover"
            priority
          />
          <figcaption className="absolute bottom-7 left-7 rounded-full bg-black/50 px-4 py-2 text-sm italic text-white">
            Jordan Delks, Compete Training Academy
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
