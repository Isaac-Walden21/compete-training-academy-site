import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { brand } from "@/content/site";

import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const body = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? brand.siteUrl;

export const metadata: Metadata = {
  title: "Compete Training Academy",
  description: "Faith. Mindset. Performance.",
  metadataBase: new URL(siteUrl)
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: siteUrl,
  logo: `${siteUrl}/images/source/compete-training-logo-final.png`,
  description: "Mindset coaching and training academy",
  sameAs: [
    "https://facebook.com/competeacademy",
    "https://instagram.com/competeacademy",
    "https://twitter.com/competeacademy"
  ],
  founder: [
    { "@type": "Person", name: "Jordan Delks" },
    { "@type": "Person", name: "Trey Kaufman-Renn" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgSchema)}
        </Script>
        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <ScrollToTopButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
