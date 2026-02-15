import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { BulletCards } from "@/components/sections/BulletCards";
import { PageIntro } from "@/components/sections/PageIntro";
import { pageContent } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/get-better");

export default function GetBetterPage() {
  const content = pageContent.getBetter;

  return (
    <>
      <PageIntro kicker={content.kicker} title={content.title} intro={content.intro}>
        <ButtonLink className="mt-4" size="lg" href="/?subject=Get%20Better%20Pre-Order%20Request#lead-form">
          Request Pre-Order Details
        </ButtonLink>
      </PageIntro>
      <section className="section-shell">
        <div className="grid-shell">
          <BulletCards title="What You Will Build" items={content.highlights} />
        </div>
      </section>
    </>
  );
}
