import type { EventItem } from "@/types";

export const brand = {
  name: "Compete Training Academy",
  tagline: "Faith. Mindset. Performance.",
  siteUrl: "https://www.competetrainingacademy.org"
};

export const bookDescription = {
  headline: "GET BETTER",
  subhead: "PRE-ORDER NOW",
  body1:
    "Get Better: Actualize Your True Self is a candid look at what it takes to grow from the inside out. Written through the lived experience of mindset coach Jordan Delks and athlete Trey Kaufman-Renn, this book brings the reader into the real work of personal change. It is built on honest conversations, shared struggles, and the steady pursuit of a life rooted in purpose.",
  body2:
    "Jordan and Trey show how growth begins with clarity. You learn who you are, what drives you, and how your design shapes the path ahead. From there, they guide you through the process of forming a clear direction so your actions match the person you want to become. They share stories of training sessions, honest reflections, and moments when they had to reset and make new choices. Each chapter shows how mindset shifts can influence performance, relationships, and daily habits."
};

export const pageContent = {
  founders: {
    title: "Jordan and Courtney Delks",
    kicker: "Founders",
    intro:
      "Compete Training Academy was built to train the whole person. Jordan and Courtney Delks lead with faith-centered coaching, practical systems, and high-performance accountability.",
    timeline: [
      {
        year: "2016",
        title: "Compete launched",
        detail:
          "Started as a mindset and performance initiative focused on athletes and leaders."
      },
      {
        year: "2020",
        title: "Program expansion",
        detail:
          "Expanded into coaching frameworks, journals, and speaking engagements."
      },
      {
        year: "2025",
        title: "Get Better movement",
        detail:
          "Book-led growth curriculum designed to convert insight into measurable action."
      }
    ]
  },
  getBetter: {
    title: "Get Better",
    kicker: "Book",
    intro:
      "A practical framework for actualizing your true self through clear identity, disciplined decisions, and aligned action.",
    highlights: [
      "Identity and clarity before strategy",
      "Daily habit execution with measurable accountability",
      "Mindset resets for performance pressure",
      "Applied lessons for relationships and leadership"
    ]
  },
  about: {
    title: "About Compete",
    kicker: "Academy",
    intro:
      "Compete exists to equip athletes, coaches, and professionals with tools that connect faith, mindset, and performance.",
    pillars: ["Faith-first leadership", "Mindset ownership", "Performance standards"]
  },
  training: {
    title: "Training Programs",
    kicker: "Train",
    intro:
      "Structured sessions for athletes and teams focused on fundamentals, consistency, and game-speed confidence.",
    outcomes: [
      "Game-ready routines",
      "Better decision-making under pressure",
      "Confidence and composure",
      "Personalized development plans"
    ]
  },
  mindsetCoaching: {
    title: "Mindset Coaching",
    kicker: "Coaching",
    intro:
      "Personal and group coaching that helps clients identify limiting patterns and build new operating standards.",
    process: [
      "Clarify goals and current reality",
      "Install weekly mindset systems",
      "Measure progress and adjust"
    ]
  },
  certifications: {
    title: "Certifications",
    kicker: "Programs",
    intro:
      "Certification tracks for coaches and leaders who want to teach the Compete framework with confidence.",
    tracks: ["Foundations", "Performance Coach", "Team Culture Facilitator"]
  },
  library: {
    title: "Library",
    kicker: "Resources",
    intro:
      "A practical resource hub including worksheets, playbooks, and implementation guides.",
    resources: [
      "Weekly reflection templates",
      "Mindset reset checklist",
      "Performance planning worksheet",
      "Accountability scorecard"
    ]
  },
  speaking: {
    title: "Speaking",
    kicker: "Engagements",
    intro:
      "Book Jordan and the Compete team for keynotes and workshops on faith, leadership, mindset, and performance.",
    topics: [
      "Faith under pressure",
      "Winning mindset culture",
      "Leadership through adversity",
      "Performance without burnout"
    ]
  },
  booking: {
    title: "Book a Session",
    kicker: "Contact",
    intro:
      "Use the scheduler for the fastest response, or submit the form and we will follow up directly."
  },
  events: {
    title: "Events",
    kicker: "Live",
    intro:
      "Upcoming clinics, speaking events, and private training opportunities."
  }
};

export const events: EventItem[] = [
  {
    id: "evt-1",
    title: "Compete Leadership Intensive",
    date: "April 12, 2026",
    location: "Indianapolis, IN",
    status: "upcoming",
    description: "A one-day immersive workshop for coaches and team leaders."
  },
  {
    id: "evt-2",
    title: "Get Better Launch Night",
    date: "May 8, 2026",
    location: "Virtual Event",
    status: "upcoming",
    description: "Live conversation and Q&A around the Get Better framework."
  },
  {
    id: "evt-3",
    title: "Summer Athlete Mindset Camp",
    date: "July 20, 2025",
    location: "Bloomington, IN",
    status: "past",
    description: "Performance sessions combining mental reps with on-court execution."
  }
];
