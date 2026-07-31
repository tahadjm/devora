import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const dotGrid: React.CSSProperties = {
  backgroundImage: "radial-gradient(circle, #d4af37 1px, transparent 1px)",
  backgroundSize: "20px 20px",
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-44">
      {/* decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 size-[420px] rounded-full bg-info/10 blur-3xl" />
        <div className="absolute -right-24 -top-20 size-[380px] rounded-full bg-gold-soft/70 blur-3xl" />
        <div className="absolute right-24 top-64 size-[334px] rounded-full bg-warning/10 blur-2xl" />
        <div className="absolute left-28 top-56 size-44 opacity-40" style={dotGrid} />
        <div className="absolute right-24 top-80 size-44 opacity-40" style={dotGrid} />
        <div className="absolute left-1/2 top-72 size-[420px] -translate-x-1/2 rounded-full border border-zinc-200/70" />
        <div className="absolute left-1/2 top-80 size-[320px] -translate-x-1/2 rounded-full border border-zinc-200/50" />
      </div>

      <MaxWidthWrapper className="relative max-w-[900px] text-center">
        <Badge
          variant="pill"
          className="h-6 px-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-gold-deep"
        >
          Premium Software Development Services
        </Badge>
        <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-ink md:text-6xl">
          We Build Digital Products
          <br />
          <span className="text-gold">That Drive Growth</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary">
          From custom apps to full-scale platforms - Devora transforms your
          vision into powerful, scalable software trusted by businesses across
          12+ countries.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button variant="accent" size="lg" asChild>
            <Link href="#contact">Start Your Project</Link>
          </Button>
          <Button variant="secondary" size="lg" className="border-zinc-200" asChild>
            <Link href="#projects">View Our Work</Link>
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
