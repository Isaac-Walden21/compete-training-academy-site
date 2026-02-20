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
