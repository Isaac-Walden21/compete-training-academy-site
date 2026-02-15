import { Reveal } from "@/components/motion/Reveal";
import { StaggerItems } from "@/components/motion/StaggerItems";

interface BulletCardsProps {
  title: string;
  items: string[];
}

export function BulletCards({ title, items }: BulletCardsProps) {
  return (
    <Reveal className="rounded-3xl border border-navy/10 bg-white p-6 shadow-lg">
      <h2 className="font-display text-3xl font-semibold text-navy">{title}</h2>
      <StaggerItems className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item} className="sleek-lift rounded-xl border border-navy/10 bg-surface px-4 py-3 text-sm text-navy">
            {item}
          </article>
        ))}
      </StaggerItems>
    </Reveal>
  );
}
