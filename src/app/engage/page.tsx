import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { BulletCards } from "@/components/sections/BulletCards";
import { PageIntro } from "@/components/sections/PageIntro";
import { StaggerItems } from "@/components/motion/StaggerItems";
import { events, pageContent } from "@/content/site";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/engage");

export default function EngagePage() {
  const speaking = pageContent.speaking;
  const eventContent = pageContent.events;

  return (
    <>
      <PageIntro
        kicker="Engage"
        title="Speaking and Events"
        intro="Everything related to live engagement is now consolidated here, including speaking topics and upcoming events."
      >
        <ButtonLink className="mt-4" size="lg" href="/book-session?subject=Speaking%20Engagement%20Request#lead-form">
          Request Speaking Info
        </ButtonLink>
      </PageIntro>

      <section id="speaking" className="section-shell">
        <div className="grid-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{speaking.kicker}</p>
            <h2 className="mt-1 font-display text-4xl font-semibold text-navy md:text-5xl">{speaking.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/85 md:text-base">{speaking.intro}</p>
          </article>
          <BulletCards title="Popular Topics" items={speaking.topics} />
        </div>
      </section>

      <section id="events" className="section-shell">
        <div className="grid-shell">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{eventContent.kicker}</p>
          <h2 className="mt-1 font-display text-4xl font-semibold text-navy md:text-5xl">{eventContent.title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-navy/85 md:text-base">{eventContent.intro}</p>

          <StaggerItems className="mt-6 grid gap-6">
            {events.map((event, index) => (
              <article key={event.id} className="sleek-lift flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-md sm:flex-row">
                <div className="relative aspect-[4/3] w-full shrink-0 sm:aspect-auto sm:w-64">
                  <Image
                    src={index % 2 === 0 ? "/images/source/12_Events_Screenshot_1.png" : "/images/source/13_Events_Screenshot_2.png"}
                    alt={`${event.title} preview`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-5">
                  <p
                    className={cn(
                      "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
                      event.status === "upcoming" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"
                    )}
                  >
                    {event.status}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-navy">{event.title}</h3>
                  <p className="mt-2 text-sm font-medium text-navy/80">{event.date} • {event.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-navy/80">{event.description}</p>
                </div>
              </article>
            ))}
          </StaggerItems>
        </div>
      </section>
    </>
  );
}
