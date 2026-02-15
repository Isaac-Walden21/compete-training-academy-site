import type { PageSEO } from "@/types";

const og = "/images/source/02_Get_Better_Book_Cover.jpg";

export const seoByRoute: Record<string, PageSEO> = {
  "/": {
    title: "Compete Training Academy | Faith. Mindset. Performance.",
    description:
      "Discover personal growth through mindset coaching. Pre-order Get Better by Jordan Delks and Trey Kaufman-Renn.",
    ogImage: og
  },
  "/founders": {
    title: "Jordan and Courtney Delks | Compete Training Academy",
    description: "Meet the founders and story behind Compete Training Academy.",
    ogImage: og
  },
  "/get-better": {
    title: "Get Better Book | Compete Training Academy",
    description: "Explore the Get Better book and request pre-order details.",
    ogImage: og
  },
  "/about": {
    title: "About | Compete Training Academy",
    description: "Learn the mission and values of Compete Training Academy.",
    ogImage: og
  },
  "/services": {
    title: "Services | Compete Training Academy",
    description: "Training, mindset coaching, and certifications in one unified services hub.",
    ogImage: og
  },
  "/engage": {
    title: "Speaking and Events | Compete Training Academy",
    description: "Book speaking and explore upcoming Compete Training Academy events.",
    ogImage: og
  },
  "/training": {
    title: "Training Programs | Compete Training Academy",
    description: "Athlete development and high-performance training programs.",
    ogImage: og
  },
  "/mindset-coaching": {
    title: "Mindset Coaching | Compete Training Academy",
    description: "Mindset coaching to improve clarity, confidence, and consistency.",
    ogImage: og
  },
  "/certifications": {
    title: "Certifications | Compete Training Academy",
    description: "Certification pathways for coaches and leaders.",
    ogImage: og
  },
  "/library": {
    title: "Library | Compete Training Academy",
    description: "Resources and tools to implement winning mindset habits.",
    ogImage: og
  },
  "/speaking": {
    title: "Speaking | Compete Training Academy",
    description: "Book speaking engagements focused on mindset and leadership.",
    ogImage: og
  },
  "/book-session": {
    title: "Book a Session | Compete Training Academy",
    description: "Book a session or send a request to the Compete team.",
    ogImage: og
  },
  "/events": {
    title: "Events | Compete Training Academy",
    description: "See upcoming Compete Training Academy events and workshops.",
    ogImage: og
  },
  "/thank-you": {
    title: "Thank You | Compete Training Academy",
    description: "Your submission has been received.",
    ogImage: og
  },
  "/404": {
    title: "Page Not Found | Compete Training Academy",
    description: "The page you requested could not be found.",
    ogImage: og
  }
};
