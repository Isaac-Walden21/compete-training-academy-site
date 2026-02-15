import type { Metadata } from "next";

import { seoByRoute } from "@/content/seo";

const defaultBase = "https://www.competetrainingacademy.org";

export function createPageMetadata(route: keyof typeof seoByRoute): Metadata {
  const seo = seoByRoute[route];
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? defaultBase;

  return {
    title: seo.title,
    description: seo.description,
    metadataBase: new URL(base),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${base}${route}`,
      images: [{ url: seo.ogImage, width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage]
    }
  };
}
