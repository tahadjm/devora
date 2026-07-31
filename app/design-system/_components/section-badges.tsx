import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SectionHeading from "./section-heading";

function Row({
  label,
  children,
}: Readonly<{ label: string; children: React.ReactNode }>) {
  return (
    <div className="grid grid-cols-[180px_1fr] items-center gap-8 py-3">
      <p className="text-sm text-ink-secondary">{label}</p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

export default function SectionBadges() {
  return (
    <section id="badges" className="border-t border-zinc-200/70 py-16">
      <MaxWidthWrapper>
        <SectionHeading
          index="05"
          title="Badges & System Tags"
          description="High-contrast status indicators alongside notification dots and pill-shaped category tags."
        />
        <Card className="bg-white/78 p-8 ring-0 shadow-[0_10px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <Row label="Status Badges">
            <Badge variant="gold-soft" className="h-6 px-3">
              <span className="size-1.5 rounded-full bg-success" aria-hidden /> Active
            </Badge>
            <Badge variant="gold-soft" className="h-6 px-3">
              <span className="size-1.5 rounded-full bg-warning" aria-hidden /> Pending
            </Badge>
            <Badge variant="secondary" className="h-6 px-3 text-ink-secondary">
              <span className="size-1.5 rounded-full bg-zinc-400" aria-hidden /> Inactive
            </Badge>
          </Row>
          <Row label="Notification Badges">
            <Badge variant="destructive" className="h-6 min-w-6 justify-center rounded-full bg-destructive/92 px-1.5 font-semibold text-white">
              4
            </Badge>
            <Badge variant="gold" className="h-5 px-2 font-semibold">
              99+
            </Badge>
            <span className="text-sm text-ink-secondary">Alerts</span>
          </Row>
          <Row label="Category Pills">
            {["React", "Infrastructure", "GraphQL", "Scale System", "Next.js"].map((tag) => (
              <Badge key={tag} variant="pill" className="h-6 px-3">
                {tag}
              </Badge>
            ))}
          </Row>
        </Card>
      </MaxWidthWrapper>
    </section>
  );
}
