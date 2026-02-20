import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homePage } from "@/content/site";

export function FounderSpotlight() {
  const { founder } = homePage;

  return (
    <section className="section-shell">
      <div className="grid-shell grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <Image
            src="/images/source/05_Jordan_Photo_2.jpg"
            alt="Jordan Delks"
            width={640}
            height={720}
            className="rounded-2xl border border-navy/10 shadow-xl"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {founder.kicker}
          </p>
          <h2 className="mt-2 font-display text-5xl font-semibold uppercase tracking-[0.04em] text-navy md:text-6xl">
            {founder.headline}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/85 md:text-lg">
            {founder.body}
          </p>
          <div className="mt-8">
            <ButtonLink href={founder.href} variant="secondary" size="md">
              {founder.cta}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
