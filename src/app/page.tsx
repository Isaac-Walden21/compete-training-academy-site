import type { Metadata } from "next";

import { HomePage } from "@/components/sections/HomePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/");

export default function Page() {
  return <HomePage />;
}
