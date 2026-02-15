import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/Reveal";

interface PageIntroProps {
  kicker: string;
  title: string;
  intro: string;
  children?: ReactNode;
}

export function PageIntro({ kicker, title, intro, children }: PageIntroProps) {
  return (
    <section className="section-shell angled-divider bg-gradient-to-br from-[#f7efe4] via-[#efe3d1] to-[#e7d7bf]">
      <div className="grid-shell space-y-8">
        <Reveal immediate>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/70">{kicker}</p>
          <h1 className="mt-2 max-w-4xl font-display text-5xl font-semibold uppercase tracking-[0.04em] text-navy md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy/90 md:text-lg">{intro}</p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
