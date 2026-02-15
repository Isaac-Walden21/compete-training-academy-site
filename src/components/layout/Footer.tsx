import Image from "next/image";

import { brand } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white py-10">
      <div className="mx-auto flex w-[min(1000px,92vw)] flex-col items-center gap-3 text-center text-sm text-navy">
        <p>© 2026 {brand.name} | {brand.tagline}</p>
        <p className="text-xs uppercase tracking-[0.2em] text-navy/70">{brand.tagline}</p>
        <Image
          src="/images/source/11_Compete_Mentality_Podcast.png"
          alt="Compete mentality podcast"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full border border-navy/20 object-cover"
        />
      </div>
    </footer>
  );
}
