import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerItems } from "@/components/motion/StaggerItems";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { events, homePage } from "@/content/site";

export function EventsProof() {
  const { eventsSection } = homePage;
  const upcomingEvents = events.filter((e) => e.status === "upcoming");

  return (
    <section className="section-shell bg-gradient-to-br from-[#f7efe4]/50 via-[#f3ece2]/30 to-transparent">
      <div className="grid-shell space-y-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {eventsSection.kicker}
          </p>
          <h2 className="mt-2 font-display text-5xl font-semibold uppercase tracking-[0.04em] text-navy md:text-6xl">
            {eventsSection.headline}
          </h2>
        </Reveal>

        <StaggerItems className="grid gap-6 md:grid-cols-2">
          {upcomingEvents.map((event) => (
            <article
              key={event.id}
              className="sleek-lift rounded-2xl border border-navy/10 bg-white/80 p-6 shadow-md backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                {event.date}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
                {event.title}
              </h3>
              <p className="mt-1 text-sm text-navy/60">{event.location}</p>
              <p className="mt-3 text-base leading-relaxed text-navy/85">
                {event.description}
              </p>
            </article>
          ))}
        </StaggerItems>

        <Reveal>
          <div className="flex items-center gap-6 rounded-2xl border border-navy/10 bg-white/80 p-5 shadow-md backdrop-blur-sm">
            <Image
              src="/images/source/11_Compete_Mentality_Podcast.png"
              alt="Compete Mentality Podcast"
              width={80}
              height={80}
              className="shrink-0 rounded-xl"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                Podcast
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-navy">
                Compete Mentality Podcast
              </p>
              <p className="mt-1 text-sm text-navy/70">
                Conversations on faith, mindset, and performance.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <ButtonLink href="/events" variant="secondary" size="md">
            View All Events
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
