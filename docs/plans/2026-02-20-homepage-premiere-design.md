# Homepage Premiere Redesign

## Overview

Rebuild the homepage as a cinematic, scroll-driven premiere that showcases the full Compete Training Academy brand. 7 sections, each with generous whitespace and scroll-triggered reveals. Brand and mission lead; the book and services follow as part of the story arc.

**Tone:** Refined & cinematic — premium editorial feel, breathing room, slow reveals.
**Audience:** Athletes, coaches, leaders, and professionals equally.
**Lead focus:** Brand & mission first; products and services support the narrative.

## Design System

Existing palette and typography unchanged:
- Navy (#003366), Gold (#c9945c), Ink (#101b2d), Surface (#f8fbff)
- Display: Cormorant Garamond | Body: Montserrat
- Existing utilities: section-shell, grid-shell, sleek-lift, cinematic-glow, angled-divider, button-sheen
- Motion: framer-motion Reveal and StaggerItems components

## Section Breakdown

### 1. Full-Screen Hero

- Viewport-height section with Jordan photo as large background/feature image
- Dark gradient overlay (bottom-heavy) for text legibility
- Centered content:
  - Kicker: "COMPETE TRAINING ACADEMY" (gold, tracked)
  - Headline: "FAITH. MINDSET. PERFORMANCE." (display font, 7xl-9xl)
  - Subline: "Equipping athletes, coaches, and leaders to compete at the highest level."
  - CTA: "Explore Our Mission" button — smooth-scrolls to Section 2
- Subtle parallax on background image
- No form, no product — brand declaration only

### 2. Mission & Three Pillars

- Warm angled-divider background (gold/tan gradient, existing pattern)
- Mission paragraph: "Compete exists to equip athletes, coaches, and professionals with tools that connect faith, mindset, and performance."
- Three pillar cards (row on desktop, stack on mobile):
  - Faith: "The foundation. Everything we build starts here."
  - Mindset: "Ownership of how you think, prepare, and respond."
  - Performance: "Excellence as the standard, not the exception."
- Cards: navy border, gold kicker, staggered reveal animation

### 3. Services Overview

- Clean white/surface background
- Kicker: "WHAT WE DO" | Headline: "Built for Growth"
- Three service cards (row on desktop, stack on mobile):
  - Training — 2 sentences + "Learn More" link to /training or /services
  - Mindset Coaching — 2 sentences + link to /mindset-coaching or /services
  - Certifications — 2 sentences + link to /certifications or /services
- sleek-lift hover effect, stagger-animated on scroll

### 4. Get Better Book Feature

- Navy background — visual scene change for contrast
- Split layout (image left, content right; stacked on mobile):
  - Left: Book cover image with shadow/glow
  - Right:
    - Kicker: "NOW AVAILABLE" (gold)
    - Headline: "Get Better: Actualize Your True Self"
    - Authors: Jordan Delks & Trey Kaufman-Renn
    - 2 short paragraphs from existing book description
    - CTA: "Pre-Order Now" button
- White text on navy

### 5. Founder Spotlight

- Light background, asymmetric layout (photo one side, content other)
- Photo: existing Jordan photo, rounded border + shadow
- Kicker: "THE FOUNDER" | Headline: "Jordan Delks"
- Short personal paragraph — who he is, why Compete exists
- Link: "Meet the Team" to /founders
- Reveal animation from image side

### 6. Events & Social Proof

- Light warm background
- Kicker: "WHAT'S NEXT" | Headline: "Upcoming Events"
- 2-3 event cards from existing data:
  - Compete Leadership Intensive (April 12, 2026 — Indianapolis)
  - Get Better Launch Night (May 8, 2026 — Virtual)
  - Summer Athlete Mindset Camp (July 20 — Bloomington)
- Each card: event name, date/location, one-line description, "Learn More" link
- Below events: Compete Mentality Podcast mention with cover image + link

### 7. Closing CTA

- Full-width navy background with subtle radial gold glow
- Headline: "Ready to Compete?" (large, centered, white display text)
- Subline: "Start with a conversation. Book a session, explore our services, or grab the book."
- Two buttons:
  - Primary: "Book a Session" -> /book-session
  - Secondary/outline: "Pre-Order Get Better" -> /get-better
- No inline form — homepage drives to dedicated pages

## Architecture

- Replace current HomePage component content with the 7 new sections
- Each section is its own component in src/components/sections/home/
- Reuse existing Reveal, StaggerItems, Button, ButtonLink components
- Content strings live in src/content/site.ts (extend existing file)
- No new dependencies required — framer-motion + next/image + tailwind cover everything

## Assets

All images already available in public/images/source/:
- Hero: 06_Jordan_Photo_3.jpg or 04_Jordan_Photo_1.jpg
- Book: 02_Get_Better_Book_Cover.jpg
- Founder: 05_Jordan_Photo_2.jpg
- Podcast: 11_Compete_Mentality_Podcast.png
- Events: 12_Events_Screenshot_1.png, 13_Events_Screenshot_2.png

## What Changes

- HomePage.tsx: gutted and rebuilt with 7 section components
- HeroSection.tsx: replaced with new full-screen cinematic hero
- Lead form removed from homepage (lives on /book-session and /get-better)
- ProductShowcase grid removed from homepage (products referenced contextually in book section)
- New section components created in src/components/sections/home/
