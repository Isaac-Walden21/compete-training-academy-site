import type { Metadata } from "next";
import Image from "next/image";

import { BulletCards } from "@/components/sections/BulletCards";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageIntro } from "@/components/sections/PageIntro";
import { pageContent } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/services");

export default function ServicesPage() {
  const training = pageContent.training;
  const mindset = pageContent.mindsetCoaching;
  const certs = pageContent.certifications;

  return (
    <>
      <PageIntro
        kicker="Programs"
        title="Services"
        intro="A unified view of Compete training, mindset coaching, and certification tracks so clients can choose the right growth path in one place."
      >
        <ButtonLink className="mt-4" size="lg" href="/book-session?subject=Services%20Inquiry#lead-form">
          Start a Services Inquiry
        </ButtonLink>
      </PageIntro>

      <section id="training" className="section-shell">
        <div className="grid-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{training.kicker}</p>
            <h2 className="mt-1 font-display text-4xl font-semibold text-navy md:text-5xl">{training.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/85 md:text-base">{training.intro}</p>
          </article>
          <BulletCards title="Program Outcomes" items={training.outcomes} />
        </div>
      </section>

      <section id="mindset-coaching" className="section-shell">
        <div className="grid-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{mindset.kicker}</p>
            <h2 className="mt-1 font-display text-4xl font-semibold text-navy md:text-5xl">{mindset.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/85 md:text-base">{mindset.intro}</p>
          </article>
          <BulletCards title="Coaching Process" items={mindset.process} />
        </div>
      </section>

      <section id="certifications" className="section-shell">
        <div className="grid-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{certs.kicker}</p>
            <h2 className="mt-1 font-display text-4xl font-semibold text-navy md:text-5xl">{certs.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/85 md:text-base">{certs.intro}</p>
            <div className="mt-5 max-w-sm rounded-3xl border border-navy/10 bg-white p-6 text-center shadow-lg">
              <Image
                src="/images/source/10_Certification_Badge.png"
                alt="Compete certification badge"
                width={540}
                height={675}
                className="mx-auto h-auto w-52 object-contain"
              />
              <p className="mt-3 text-sm text-navy/80">Credential badge preview for program graduates.</p>
            </div>
          </article>
          <BulletCards title="Certification Tracks" items={certs.tracks} />
        </div>
      </section>
    </>
  );
}
