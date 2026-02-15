import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerItems } from "@/components/motion/StaggerItems";
import { placeholderAssets } from "@/content/assets";

const products = placeholderAssets
  .filter((asset) => asset.id !== "TODO-ASSET-001" && asset.id !== "TODO-ASSET-006")
  .map((asset) => ({
    ...asset,
    title:
      asset.id === "TODO-ASSET-002"
        ? "Compete Daily Journal"
        : asset.id === "TODO-ASSET-003"
          ? "Compete Winners Manual"
          : asset.id === "TODO-ASSET-004"
            ? "Dream Szn Strategic Plan"
            : "Get Better Book"
  }));

export function ProductShowcase() {
  return (
    <Reveal className="rounded-3xl border border-navy/10 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
      <h3 className="font-display text-3xl font-semibold text-navy">Compete Products</h3>
      <p className="mt-2 text-sm text-navy/75">Current product visuals from the provided brand asset pack.</p>
      <StaggerItems className="mt-6 grid gap-4 sm:grid-cols-2">
        {products.map((product) => (
          <article key={product.id} className="sleek-lift overflow-hidden rounded-xl border border-navy/10 bg-surface">
            <Image
              src={product.current}
              alt={product.alt}
              width={540}
              height={420}
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="space-y-1 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{product.title}</p>
              <p className="text-sm text-navy/80">Asset tag: {product.id}</p>
            </div>
          </article>
        ))}
      </StaggerItems>
    </Reveal>
  );
}
