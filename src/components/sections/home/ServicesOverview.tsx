import { Reveal } from "@/components/motion/Reveal";
import { StaggerItems } from "@/components/motion/StaggerItems";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homePage } from "@/content/site";

export function ServicesOverview() {
  const { services } = homePage;

  return (
    <section className="section-shell">
      <div className="grid-shell space-y-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {services.kicker}
          </p>
          <h2 className="mt-2 font-display text-5xl font-semibold uppercase tracking-[0.04em] text-navy md:text-6xl">
            {services.headline}
          </h2>
        </Reveal>

        <StaggerItems className="grid gap-6 sm:grid-cols-3">
          {services.items.map((service) => (
            <article
              key={service.title}
              className="sleek-lift flex flex-col justify-between rounded-2xl border border-navy/10 bg-white/80 p-6 shadow-md backdrop-blur-sm"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {service.title}
                </p>
                <p className="mt-3 text-base leading-relaxed text-navy/85">
                  {service.description}
                </p>
              </div>
              <div className="mt-6">
                <ButtonLink href={service.href} variant="secondary" size="sm">
                  Learn More
                </ButtonLink>
              </div>
            </article>
          ))}
        </StaggerItems>
      </div>
    </section>
  );
}
