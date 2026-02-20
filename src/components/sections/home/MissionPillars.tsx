import { Reveal } from "@/components/motion/Reveal";
import { StaggerItems } from "@/components/motion/StaggerItems";
import { homePage } from "@/content/site";

export function MissionPillars() {
  const { mission } = homePage;

  return (
    <section
      id="mission"
      className="section-shell angled-divider bg-gradient-to-br from-[#f7efe4] via-[#efe3d1] to-[#e7d7bf]"
    >
      <div className="grid-shell space-y-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/70">
            {mission.kicker}
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-5xl font-semibold uppercase tracking-[0.04em] text-navy md:text-6xl">
            {mission.headline}
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-navy/90">
            {mission.body}
          </p>
        </Reveal>

        <StaggerItems className="grid gap-6 sm:grid-cols-3">
          {mission.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="sleek-lift rounded-2xl border border-navy/10 bg-white/80 p-6 shadow-md backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {pillar.title}
              </p>
              <p className="mt-3 text-base leading-relaxed text-navy/85">
                {pillar.description}
              </p>
            </article>
          ))}
        </StaggerItems>
      </div>
    </section>
  );
}
