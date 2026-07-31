import { Badge } from "@/components/ui/badge";

export default function SectionBadge({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Badge
      variant="pill"
      className="h-6 px-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-gold-deep"
    >
      {children}
    </Badge>
  );
}
