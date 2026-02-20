import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { bookDescription, homePage } from "@/content/site";

export function BookFeature() {
  const { bookFeature } = homePage;

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      {/* Subtle glow accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="grid-shell grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Image
            src="/images/source/02_Get_Better_Book_Cover.jpg"
            alt="Get Better book cover"
            width={600}
            height={780}
            className="mx-auto rounded-2xl shadow-2xl lg:mx-0"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {bookFeature.kicker}
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase tracking-[0.04em] text-white md:text-5xl lg:text-6xl">
            {bookFeature.headline}
          </h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-white/60">
            {bookFeature.authors}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85">
            {bookDescription.body1}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
            {bookDescription.body2}
          </p>
          <div className="mt-8">
            <ButtonLink href="/get-better" size="lg">
              {bookFeature.cta}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
