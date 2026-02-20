"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { Button } from "@/components/ui/Button";
import { homePage } from "@/content/site";

export function CinematicHero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const scrollToMission = () => {
    document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" });
  };

  const { hero } = homePage;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: imageY }}
      >
        <Image
          src="/images/source/06_Jordan_Photo_3.jpg"
          alt="Jordan Delks, Compete Training Academy"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/25" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        initial={reduce ? undefined : { opacity: 0, y: 30 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {hero.kicker}
        </p>
        <h1 className="mt-4 font-display text-6xl font-semibold uppercase leading-[0.92] tracking-[0.06em] text-white md:text-7xl lg:text-8xl xl:text-9xl">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
          {hero.subline}
        </p>
        <div className="mt-10">
          <Button size="lg" onClick={scrollToMission}>
            {hero.cta}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
