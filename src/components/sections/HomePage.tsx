"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/motion/Reveal";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { trackEvent } from "@/lib/analytics";

const DEFAULT_SUBJECT = "Get Better Pre-Order Request";

export function HomePage() {
  const searchParams = useSearchParams();
  const [subjectPrefill, setSubjectPrefill] = useState(DEFAULT_SUBJECT);

  useEffect(() => {
    const subject = searchParams.get("subject");
    if (subject) {
      setSubjectPrefill(subject);
      const form = document.getElementById("lead-form");
      form?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams]);

  const handlePreOrderClick = () => {
    setSubjectPrefill(DEFAULT_SUBJECT);
    trackEvent("cta_preorder_click", { location: "hero" });
    const form = document.getElementById("lead-form");
    form?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <HeroSection onPreOrderClick={handlePreOrderClick} />

      <section className="section-shell">
        <div className="grid-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Lead Request</p>
              <h2 className="font-display text-4xl font-semibold uppercase text-navy md:text-5xl">
                Book Coaching or Pre-Order Details
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-navy/85">
                Submit your request and the Compete team will follow up directly. For immediate scheduling,
                use the session booking page.
              </p>
              <ButtonLink href="/book-session" variant="secondary" size="md">
                Go To Booking Page
              </ButtonLink>
            </div>
            <div className="mt-6">
              <LeadForm sourcePage="home" defaultSubject={subjectPrefill} formId="lead-form" />
            </div>
          </Reveal>
          <ProductShowcase />
        </div>
      </section>
    </>
  );
}
