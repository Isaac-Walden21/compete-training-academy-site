import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/thank-you");

export default function ThankYouPage() {
  return (
    <section className="section-shell min-h-[60vh]">
      <div className="grid-shell rounded-3xl border border-navy/10 bg-white p-8 text-center shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Submission Received</p>
        <h1 className="mt-3 font-display text-5xl font-semibold uppercase text-navy">Thank You</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-navy/80">
          Your request has been received. The Compete team will follow up shortly.
        </p>
        <div className="mt-8">
          <ButtonLink size="lg" href="/">
            Return Home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
