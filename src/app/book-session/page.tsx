import type { Metadata } from "next";

import { LeadForm } from "@/components/forms/LeadForm";
import { PageIntro } from "@/components/sections/PageIntro";
import { pageContent } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/book-session");

export default function BookSessionPage() {
  const content = pageContent.booking;
  const calendlyUrl = process.env.CALENDLY_URL ?? "https://calendly.com";

  return (
    <>
      <PageIntro kicker={content.kicker} title={content.title} intro={content.intro} />
      <section className="section-shell">
        <div className="grid-shell grid gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-3xl border border-navy/10 bg-white p-4 shadow-lg">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Fastest Path</p>
            <iframe
              title="Calendly Scheduling"
              src={calendlyUrl}
              className="h-[660px] w-full rounded-2xl border border-navy/10"
            />
            <p className="mt-3 text-xs text-navy/70">
              If the embed is blocked, open this link directly: <a className="text-gold underline" href={calendlyUrl}>Book via Calendly</a>
            </p>
          </article>

          <article>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Manual Request</p>
            <LeadForm sourcePage="book-session" defaultSubject="Book A Session Request" formId="lead-form" />
          </article>
        </div>
      </section>
    </>
  );
}
