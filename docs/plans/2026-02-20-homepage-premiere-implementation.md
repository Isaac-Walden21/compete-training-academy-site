# Homepage Premiere Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the current thin homepage (hero + form + product grid) with a 7-section cinematic premiere showcasing the full Compete Training Academy brand.

**Architecture:** New section components in `src/components/sections/home/` compose into a rebuilt `HomePage`. Content strings added to `src/content/site.ts`. Existing motion components (Reveal, StaggerItems) and UI primitives (Button, ButtonLink) reused throughout. No new dependencies.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS 3, framer-motion 11, TypeScript, vitest + testing-library

**Design doc:** `docs/plans/2026-02-20-homepage-premiere-design.md`

---

## Task 1: Add homepage content to site.ts

**Files:**
- Modify: `src/content/site.ts`

**Step 1: Add homepage content object**

Add a `homePage` export to `src/content/site.ts` after the existing `bookDescription`:

```typescript
export const homePage = {
  hero: {
    kicker: "COMPETE TRAINING ACADEMY",
    headline: "FAITH. MINDSET. PERFORMANCE.",
    subline: "Equipping athletes, coaches, and leaders to compete at the highest level.",
    cta: "Explore Our Mission"
  },
  mission: {
    kicker: "WHO WE ARE",
    headline: "The Compete Standard",
    body: "Compete exists to equip athletes, coaches, and professionals with tools that connect faith, mindset, and performance.",
    pillars: [
      {
        title: "Faith",
        description: "The foundation. Everything we build starts here."
      },
      {
        title: "Mindset",
        description: "Ownership of how you think, prepare, and respond."
      },
      {
        title: "Performance",
        description: "Excellence as the standard, not the exception."
      }
    ]
  },
  services: {
    kicker: "WHAT WE DO",
    headline: "Built for Growth",
    items: [
      {
        title: "Training",
        description: "Structured sessions for athletes and teams focused on fundamentals, consistency, and game-speed confidence.",
        href: "/services"
      },
      {
        title: "Mindset Coaching",
        description: "Personal and group coaching that helps clients identify limiting patterns and build new operating standards.",
        href: "/services"
      },
      {
        title: "Certifications",
        description: "Certification tracks for coaches and leaders who want to teach the Compete framework with confidence.",
        href: "/services"
      }
    ]
  },
  bookFeature: {
    kicker: "NOW AVAILABLE",
    headline: "Get Better: Actualize Your True Self",
    authors: "Jordan Delks & Trey Kaufman-Renn",
    cta: "Pre-Order Now"
  },
  founder: {
    kicker: "THE FOUNDER",
    headline: "Jordan Delks",
    body: "Jordan Delks started Compete Training Academy in 2016 with a clear conviction: real performance starts with who you are, not just what you do. As a mindset coach, speaker, and author, he has spent nearly a decade helping athletes, coaches, and leaders build systems rooted in faith, discipline, and purpose.",
    cta: "Meet the Team",
    href: "/founders"
  },
  eventsSection: {
    kicker: "WHAT'S NEXT",
    headline: "Upcoming Events"
  },
  closingCta: {
    headline: "Ready to Compete?",
    subline: "Start with a conversation. Book a session, explore our services, or grab the book.",
    primaryCta: "Book a Session",
    primaryHref: "/book-session",
    secondaryCta: "Pre-Order Get Better",
    secondaryHref: "/get-better"
  }
};
```

**Step 2: Commit**

```bash
git add src/content/site.ts
git commit -m "content: add homepage premiere content to site.ts"
```

---

## Task 2: Create CinematicHero section component

**Files:**
- Create: `src/components/sections/home/CinematicHero.tsx`

**Step 1: Write the component**

Full-viewport hero with background image, dark gradient overlay, centered text, parallax, and scroll-down CTA.

```tsx
"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { Button } from "@/components/ui/Button";
import { homePage } from "@/content/site";

export function CinematicHero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const scrollToMission = () => {
    document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" });
  };

  const { hero } = homePage;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: imageY }}
      >
        <Image
          src="/images/source/06_Jordan_Photo_3.jpg"
          alt="Jordan Delks, Compete Training Academy"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/25" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        initial={reduce ? undefined : { opacity: 0, y: 30 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {hero.kicker}
        </p>
        <h1 className="mt-4 font-display text-6xl font-semibold uppercase leading-[0.92] tracking-[0.06em] text-white md:text-7xl lg:text-8xl xl:text-9xl">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
          {hero.subline}
        </p>
        <div className="mt-10">
          <Button size="lg" onClick={scrollToMission}>
            {hero.cta}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/sections/home/CinematicHero.tsx
git commit -m "feat: add CinematicHero section component"
```

---

## Task 3: Create MissionPillars section component

**Files:**
- Create: `src/components/sections/home/MissionPillars.tsx`

**Step 1: Write the component**

Warm angled-divider background, mission statement, three pillar cards with stagger animation.

```tsx
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
```

**Step 2: Commit**

```bash
git add src/components/sections/home/MissionPillars.tsx
git commit -m "feat: add MissionPillars section component"
```

---

## Task 4: Create ServicesOverview section component

**Files:**
- Create: `src/components/sections/home/ServicesOverview.tsx`

**Step 1: Write the component**

Clean surface background, three service cards with sleek-lift hover and links.

```tsx
import { Reveal } from "@/components/motion/Reveal";
import { StaggerItems } from "@/components/motion/StaggerItems";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homePage } from "@/content/site";

export function ServicesOverview() {
  const { services } = homePage;

  return (
    <section className="section-shell">
      <div className="grid-shell space-y-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {services.kicker}
          </p>
          <h2 className="mt-2 font-display text-5xl font-semibold uppercase tracking-[0.04em] text-navy md:text-6xl">
            {services.headline}
          </h2>
        </Reveal>

        <StaggerItems className="grid gap-6 sm:grid-cols-3">
          {services.items.map((service) => (
            <article
              key={service.title}
              className="sleek-lift flex flex-col justify-between rounded-2xl border border-navy/10 bg-white/80 p-6 shadow-md backdrop-blur-sm"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {service.title}
                </p>
                <p className="mt-3 text-base leading-relaxed text-navy/85">
                  {service.description}
                </p>
              </div>
              <div className="mt-6">
                <ButtonLink href={service.href} variant="secondary" size="sm">
                  Learn More
                </ButtonLink>
              </div>
            </article>
          ))}
        </StaggerItems>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/sections/home/ServicesOverview.tsx
git commit -m "feat: add ServicesOverview section component"
```

---

## Task 5: Create BookFeature section component

**Files:**
- Create: `src/components/sections/home/BookFeature.tsx`

**Step 1: Write the component**

Navy background, split layout with book cover image and description. Uses existing `bookDescription` from site.ts for the body paragraphs.

```tsx
import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { bookDescription, homePage } from "@/content/site";

export function BookFeature() {
  const { bookFeature } = homePage;

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      {/* Subtle glow accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="grid-shell grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Image
            src="/images/source/02_Get_Better_Book_Cover.jpg"
            alt="Get Better book cover"
            width={600}
            height={780}
            className="mx-auto rounded-2xl shadow-2xl lg:mx-0"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {bookFeature.kicker}
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase tracking-[0.04em] text-white md:text-5xl lg:text-6xl">
            {bookFeature.headline}
          </h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-white/60">
            {bookFeature.authors}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85">
            {bookDescription.body1}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
            {bookDescription.body2}
          </p>
          <div className="mt-8">
            <ButtonLink href="/get-better" size="lg">
              {bookFeature.cta}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/sections/home/BookFeature.tsx
git commit -m "feat: add BookFeature section component"
```

---

## Task 6: Create FounderSpotlight section component

**Files:**
- Create: `src/components/sections/home/FounderSpotlight.tsx`

**Step 1: Write the component**

Asymmetric layout — photo on one side, bio on the other.

```tsx
import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homePage } from "@/content/site";

export function FounderSpotlight() {
  const { founder } = homePage;

  return (
    <section className="section-shell">
      <div className="grid-shell grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <Image
            src="/images/source/05_Jordan_Photo_2.jpg"
            alt="Jordan Delks"
            width={640}
            height={720}
            className="rounded-2xl border border-navy/10 shadow-xl"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {founder.kicker}
          </p>
          <h2 className="mt-2 font-display text-5xl font-semibold uppercase tracking-[0.04em] text-navy md:text-6xl">
            {founder.headline}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/85 md:text-lg">
            {founder.body}
          </p>
          <div className="mt-8">
            <ButtonLink href={founder.href} variant="secondary" size="md">
              {founder.cta}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/sections/home/FounderSpotlight.tsx
git commit -m "feat: add FounderSpotlight section component"
```

---

## Task 7: Create EventsProof section component

**Files:**
- Create: `src/components/sections/home/EventsProof.tsx`

**Step 1: Write the component**

Warm background, event cards from existing data, podcast mention.

```tsx
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
```

**Step 2: Commit**

```bash
git add src/components/sections/home/EventsProof.tsx
git commit -m "feat: add EventsProof section component"
```

---

## Task 8: Create ClosingCta section component

**Files:**
- Create: `src/components/sections/home/ClosingCta.tsx`

**Step 1: Write the component**

Navy background with gold glow, headline, two CTA buttons.

```tsx
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homePage } from "@/content/site";

export function ClosingCta() {
  const { closingCta } = homePage;

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      {/* Gold radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-5xl font-semibold uppercase tracking-[0.04em] text-white md:text-6xl lg:text-7xl">
            {closingCta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            {closingCta.subline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={closingCta.primaryHref} size="lg">
              {closingCta.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={closingCta.secondaryHref}
              variant="secondary"
              size="lg"
              className="border-white/30 text-white hover:border-gold hover:text-gold"
            >
              {closingCta.secondaryCta}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/sections/home/ClosingCta.tsx
git commit -m "feat: add ClosingCta section component"
```

---

## Task 9: Rebuild HomePage to compose all sections

**Files:**
- Modify: `src/components/sections/HomePage.tsx`

**Step 1: Replace HomePage with the 7-section composition**

Gut the existing component and replace with imports of all new sections. Remove the lead form, product showcase, and old hero from the homepage.

```tsx
"use client";

import { BookFeature } from "@/components/sections/home/BookFeature";
import { CinematicHero } from "@/components/sections/home/CinematicHero";
import { ClosingCta } from "@/components/sections/home/ClosingCta";
import { EventsProof } from "@/components/sections/home/EventsProof";
import { FounderSpotlight } from "@/components/sections/home/FounderSpotlight";
import { MissionPillars } from "@/components/sections/home/MissionPillars";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";

export function HomePage() {
  return (
    <>
      <CinematicHero />
      <MissionPillars />
      <ServicesOverview />
      <BookFeature />
      <FounderSpotlight />
      <EventsProof />
      <ClosingCta />
    </>
  );
}
```

**Step 2: Clean up page.tsx**

The Suspense wrapper with `useSearchParams` is no longer needed since the form was removed. Simplify `src/app/page.tsx`:

```tsx
import type { Metadata } from "next";

import { HomePage } from "@/components/sections/HomePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/");

export default function Page() {
  return <HomePage />;
}
```

**Step 3: Run dev server and visually verify**

Run: `npm run dev`
Open http://localhost:3000 and scroll through all 7 sections. Check:
- Hero fills viewport with photo background
- Mission pillars render with warm background
- Services cards display in a row
- Book section has navy background with cover image
- Founder section shows photo + bio
- Events show upcoming items + podcast
- Closing CTA has navy background with two buttons

**Step 4: Commit**

```bash
git add src/components/sections/HomePage.tsx src/app/page.tsx
git commit -m "feat: rebuild HomePage with 7-section cinematic premiere"
```

---

## Task 10: Update tests

**Files:**
- Create: `tests/unit/homepage.test.tsx`

**Step 1: Write homepage smoke tests**

```tsx
import React from "react";
import { render, screen } from "@testing-library/react";

import { HomePage } from "@/components/sections/HomePage";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", async () => {
  const actual = await vi.importActual<typeof import("framer-motion")>("framer-motion");
  return {
    ...actual,
    useReducedMotion: () => true,
    useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
    useTransform: () => 0
  };
});

describe("HomePage", () => {
  it("renders the hero headline", () => {
    render(<HomePage />);
    expect(screen.getByText("FAITH. MINDSET. PERFORMANCE.")).toBeInTheDocument();
  });

  it("renders all three pillars", () => {
    render(<HomePage />);
    expect(screen.getByText("Faith")).toBeInTheDocument();
    expect(screen.getByText("Mindset")).toBeInTheDocument();
    expect(screen.getByText("Performance")).toBeInTheDocument();
  });

  it("renders service cards", () => {
    render(<HomePage />);
    expect(screen.getByText("Training")).toBeInTheDocument();
    expect(screen.getByText("Mindset Coaching")).toBeInTheDocument();
    expect(screen.getByText("Certifications")).toBeInTheDocument();
  });

  it("renders the book feature section", () => {
    render(<HomePage />);
    expect(screen.getByText(/Get Better: Actualize Your True Self/)).toBeInTheDocument();
  });

  it("renders the founder spotlight", () => {
    render(<HomePage />);
    expect(screen.getByText("Jordan Delks")).toBeInTheDocument();
  });

  it("renders the closing CTA", () => {
    render(<HomePage />);
    expect(screen.getByText("Ready to Compete?")).toBeInTheDocument();
  });
});
```

**Step 2: Run tests**

Run: `npx vitest run tests/unit/homepage.test.tsx`
Expected: All 6 tests PASS

**Step 3: Commit**

```bash
git add tests/unit/homepage.test.tsx
git commit -m "test: add homepage premiere smoke tests"
```

---

## Task 11: Final visual review and cleanup

**Step 1: Run full test suite**

Run: `npx vitest run`
Expected: All tests pass (existing + new homepage tests)

**Step 2: Run type check**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Run lint**

Run: `npx eslint src/components/sections/home/ src/components/sections/HomePage.tsx`
Expected: No errors

**Step 4: Visual review in browser**

Open http://localhost:3000 and verify:
- Smooth scroll from hero to mission works
- All animations trigger on scroll
- Mobile responsive (check at 375px, 768px, 1024px)
- Navy sections (book, closing CTA) create visual rhythm breaks
- All links navigate correctly
- No console errors

**Step 5: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: homepage premiere polish and cleanup"
```
