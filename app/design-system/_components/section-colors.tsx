import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "./section-heading";

type Swatch = { name: string; value: string; className?: string; style?: React.CSSProperties };

const brand: Swatch[] = [
  { name: "Primary", value: "#1A1A1A", className: "bg-primary" },
  {
    name: "Primary Gradient",
    value: "Linear #1A1A1A",
    style: { background: "linear-gradient(135deg, #1a1a1a 0%, #d4af37 100%)" },
  },
  { name: "Secondary Gold", value: "#C9A84C", className: "bg-gold-deep" },
  { name: "Secondary Light", value: "#F3E5C5", className: "bg-gold-soft" },
];

const neutrals: Swatch[] = [
  { name: "Neutral 50", value: "#FAFAFA", className: "bg-zinc-50" },
  { name: "Neutral 100", value: "#F4F4F5", className: "bg-zinc-100" },
  { name: "Neutral 200", value: "#E4E4E7", className: "bg-zinc-200" },
  { name: "Neutral 300", value: "#D4D4D8", className: "bg-zinc-300" },
  { name: "Neutral 400", value: "#A1A1AA", className: "bg-zinc-400" },
  { name: "Neutral 500", value: "#71717A", className: "bg-zinc-500" },
  { name: "Neutral 600", value: "#52525B", className: "bg-zinc-600" },
  { name: "Neutral 700", value: "#3F3F46", className: "bg-zinc-700" },
  { name: "Neutral 800", value: "#27272A", className: "bg-zinc-800" },
  { name: "Neutral 900", value: "#18181B", className: "bg-zinc-900" },
];

const semantic: Swatch[] = [
  { name: "Success Green", value: "#10B981", className: "bg-success" },
  { name: "Warning Amber", value: "#F59E0B", className: "bg-warning" },
  { name: "Error Red", value: "#EF4444", className: "bg-error" },
  { name: "Info Blue", value: "#3B82F6", className: "bg-info" },
];

function SwatchGrid({
  label,
  swatches,
  size = "large",
}: Readonly<{ label: string; swatches: Swatch[]; size?: "large" | "small" }>) {
  return (
    <div className="mt-8">
      <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">
        {label}
      </p>
      <div className="flex flex-wrap gap-4">
        {swatches.map((swatch) => (
          <div key={swatch.name} className={size === "large" ? "w-28" : "w-[88px]"}>
            <div
              className={`h-16 rounded-lg border border-zinc-200/60 ${swatch.className ?? ""}`}
              style={swatch.style}
            />
            <p className="mt-2 text-xs font-medium text-ink">{swatch.name}</p>
            <p className="font-mono text-[10px] text-ink-muted">{swatch.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SectionColors() {
  return (
    <section id="colors" className="py-16">
      <MaxWidthWrapper>
        <SectionHeading
          index="01"
          title="Color Palette"
          description="Our brand values mapped to precise hues. Clean neutrals paired with a commanding gold gradient as the core digital marker."
        />
        <SwatchGrid label="Brand Colors & Accent" swatches={brand} />
        <SwatchGrid label="Neutral Scale" swatches={neutrals} size="small" />
        <SwatchGrid label="Semantic System" swatches={semantic} />
      </MaxWidthWrapper>
    </section>
  );
}
