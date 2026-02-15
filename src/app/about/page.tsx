import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerItems } from "@/components/motion/StaggerItems";
import { BulletCards } from "@/components/sections/BulletCards";
import { PageIntro } from "@/components/sections/PageIntro";
import { pageContent } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/about");

export default function AboutPage() {
  const content = pageContent.about;
  const founders = pageContent.founders;

  return (
    <>
      <PageIntro kicker={content.kicker} title={content.title} intro={content.intro} />
      <section className="section-shell">
        <div className="grid-shell space-y-8">
          <BulletCards title="Core Pillars" items={content.pillars} />
          <StaggerItems className="grid gap-4 md:grid-cols-3">
            <Image
              src="/images/source/07_About_Photo_1.jpg"
              alt="About Compete photo one"
              width={900}
              height={620}
              className="sleek-lift h-56 w-full rounded-2xl border border-navy/10 object-cover shadow-md"
            />
            <Image
              src="/images/source/08_About_Photo_2.jpg"
              alt="About Compete photo two"
              width={900}
              height={620}
              className="sleek-lift h-56 w-full rounded-2xl border border-navy/10 object-cover shadow-md"
            />
            <Image
              src="/images/source/09_About_Photo_3.jpg"
              alt="About Compete photo three"
              width={900}
              height={620}
              className="sleek-lift h-56 w-full rounded-2xl border border-navy/10 object-cover shadow-md"
            />
          </StaggerItems>
        </div>
      </section>
      <section id="founders" className="section-shell">
        <div className="grid-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{founders.kicker}</p>
              <h2 className="font-display text-4xl font-semibold text-navy md:text-5xl">{founders.title}</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-navy/85 md:text-base">{founders.intro}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Image
                  src="/images/source/04_Jordan_Photo_1.jpg"
                  alt="Jordan Delks portrait"
                  width={900}
                  height={1240}
                  className="h-full min-h-80 w-full rounded-3xl border border-navy/10 object-cover shadow-xl sm:row-span-2"
                />
                <Image
                  src="/images/source/05_Jordan_Photo_2.jpg"
                  alt="Jordan Delks coaching photo"
                  width={900}
                  height={900}
                  className="h-full w-full rounded-3xl border border-navy/10 object-cover shadow-lg"
                />
                <Image
                  src="/images/source/06_Jordan_Photo_3.jpg"
                  alt="Jordan Delks training photo"
                  width={900}
                  height={620}
                  className="h-full w-full rounded-3xl border border-navy/10 object-cover shadow-lg"
                />
              </div>
            </div>
          </Reveal>
          <Reveal className="space-y-4" delay={0.1}>
            {founders.timeline.map((item) => (
              <article key={item.year} className="sleek-lift rounded-2xl border border-navy/10 bg-white p-5 shadow-md">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{item.year}</p>
                <h3 className="mt-1 font-display text-3xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/80">{item.detail}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
