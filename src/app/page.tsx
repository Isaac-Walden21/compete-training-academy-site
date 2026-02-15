import type { Metadata } from "next";
import { Suspense } from "react";

import { HomePage } from "@/components/sections/HomePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/");

export default function Page() {
  return (
    <Suspense fallback={<div className="section-shell"><div className="grid-shell" /></div>}>
      <HomePage />
    </Suspense>
  );
}
