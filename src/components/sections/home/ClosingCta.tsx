import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homePage } from "@/content/site";

export function ClosingCta() {
  const { closingCta } = homePage;

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      {/* Gold radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-5xl font-semibold uppercase tracking-[0.04em] text-white md:text-6xl lg:text-7xl">
            {closingCta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            {closingCta.subline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={closingCta.primaryHref} size="lg">
              {closingCta.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={closingCta.secondaryHref}
              variant="secondary"
              size="lg"
              className="border-white/30 text-white hover:border-gold hover:text-gold"
            >
              {closingCta.secondaryCta}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
