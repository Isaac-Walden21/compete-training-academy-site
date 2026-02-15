import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="section-shell min-h-[60vh]">
      <div className="grid-shell rounded-3xl border border-navy/10 bg-white p-8 text-center shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">404</p>
        <h1 className="mt-3 font-display text-5xl font-semibold uppercase text-navy">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-navy/80">
          The page you requested does not exist or has moved.
        </p>
        <div className="mt-8">
          <ButtonLink size="lg" href="/">
            Go Home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
