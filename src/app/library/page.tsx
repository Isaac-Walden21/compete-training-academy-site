import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { StaggerItems } from "@/components/motion/StaggerItems";
import { PageIntro } from "@/components/sections/PageIntro";
import { pageContent } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/library");

export default function LibraryPage() {
  const content = pageContent.library;

  return (
    <>
      <PageIntro kicker={content.kicker} title={content.title} intro={content.intro} />
      <section className="section-shell">
        <StaggerItems className="grid-shell grid gap-4 md:grid-cols-2">
          {content.resources.map((resource, index) => (
            <article key={resource} className="sleek-lift rounded-2xl border border-navy/10 bg-white p-5 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Resource {index + 1}</p>
              <h2 className="mt-1 font-display text-3xl font-semibold text-navy">{resource}</h2>
              <p className="mt-2 text-sm text-navy/80">
                Download placeholder. Replace this card with live resource link in final content pass.
              </p>
              <Button className="mt-4" size="sm" variant="secondary" disabled>
                Download (Coming Soon)
              </Button>
            </article>
          ))}
        </StaggerItems>
      </section>
    </>
  );
}
