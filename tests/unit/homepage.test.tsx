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
    expect(screen.getAllByText(/Get Better: Actualize Your True Self/).length).toBeGreaterThan(0);
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
