import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "./section-heading";

const ramp = [
  { name: "Display", spec: "48px / Weight: 700", sample: "The engineering standard", className: "font-display text-5xl font-bold" },
  { name: "H1", spec: "36px / Weight: 700", sample: "Production ready builds", className: "font-display text-4xl font-bold" },
  { name: "H2", spec: "30px / Weight: 600", sample: "Scalable API endpoints", className: "font-display text-3xl font-semibold" },
  { name: "H3", spec: "24px / Weight: 600", sample: "Modular design primitives", className: "font-display text-2xl font-semibold" },
  { name: "H4", spec: "20px / Weight: 600", sample: "System configuration", className: "font-display text-xl font-semibold" },
  { name: "Body Large", spec: "18px / Weight: 400", sample: "Devora guides your product architecture from initial prototype to web scale deployment.", className: "font-display text-lg" },
  { name: "Body Regular", spec: "15px / Weight: 400", sample: "High density information displays benefit from standard geometric typography and balanced tracking.", className: "font-display text-[15px]" },
  { name: "Body Small", spec: "13px / Weight: 400", sample: "Technical parameters, component state readouts, and developer console messages.", className: "font-display text-[13px]" },
  { name: "Caption", spec: "12px / Weight: 500", sample: "SWATCH REPAIR CODE: #6366F1", className: "font-display text-xs font-medium" },
  { name: "Overline", spec: "11px / Weight: 700", sample: "ACTIVE SPECIFICATION", className: "font-display text-[11px] font-bold tracking-wider" },
];

export default function SectionTypography() {
  return (
    <section id="typography" className="border-t border-zinc-200/70 py-16">
      <MaxWidthWrapper>
        <SectionHeading
          index="02"
          title="Typography Scale"
          description="A strict type ladder mapped to Outfit and Geist. Fine-tuned tracking and optical weight structures optimized for crisp digital hierarchy."
        />
        <div className="overflow-hidden rounded-xl border border-zinc-200/70 bg-white/60">
          {ramp.map((row, i) => (
            <div
              key={row.name}
              className={`grid grid-cols-[160px_1fr] items-center gap-8 px-8 py-5 ${i > 0 ? "border-t border-zinc-200/70" : ""}`}
            >
              <div>
                <p className="font-display text-base font-semibold text-ink">{row.name}</p>
                <p className="mt-1 font-mono text-xs text-ink-muted">{row.spec}</p>
              </div>
              <p className={`${row.className} text-ink`}>{row.sample}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
