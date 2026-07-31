import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionHeading from "./section-heading";

const sizes = [
  { size: "sm", label: "Small (S)" },
  { size: "default", label: "Medium (M)" },
  { size: "lg", label: "Large (L)" },
] as const;

const variants = [
  { variant: "default", name: "Primary", label: "Primary" },
  { variant: "secondary", name: "Secondary", label: "Secondary" },
  { variant: "ghost", name: "Ghost", label: "Ghost" },
  { variant: "destructive", name: "Destructive", label: "Delete" },
] as const;

export default function SectionButtons() {
  return (
    <section id="buttons" className="border-t border-zinc-200/70 py-16">
      <MaxWidthWrapper>
        <SectionHeading
          index="03"
          title="Buttons & Trigger States"
          description="Four distinct hierarchy variants rendered in small, medium, and large modes with matching disabled configurations."
        />
        <Card className="overflow-x-auto bg-white/78 p-8 ring-0 shadow-[0_10px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr>
                <th className="w-32 text-left font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">
                  Variant
                </th>
                {sizes.map(({ label }) => (
                  <th
                    key={label}
                    className="text-left font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {variants.map(({ variant, name, label }) => (
                <tr key={name}>
                  <td className="text-sm text-ink">{name}</td>
                  {sizes.map(({ size }) => (
                    <td key={size}>
                      <span className="flex items-center gap-3">
                        <Button variant={variant} size={size}>
                          {label}
                        </Button>
                        <Button variant={variant} size={size} disabled>
                          Disabled
                        </Button>
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </MaxWidthWrapper>
    </section>
  );
}
