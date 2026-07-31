import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import SectionHeading from "./section-heading";

const scale = [
  { label: "XS / 24px", className: "size-6 text-[10px]" },
  { label: "SM / 32px", className: "size-8 text-xs" },
  { label: "MD / 40px", className: "size-10 text-sm" },
  { label: "LG / 48px", className: "size-12 text-base" },
  { label: "XL / 64px", className: "size-16 text-lg" },
];

const team = ["AK", "JR", "SM", "LT"];

export default function SectionAvatars() {
  return (
    <section id="avatars" className="border-t border-zinc-200/70 py-16">
      <MaxWidthWrapper>
        <SectionHeading
          index="07"
          title="Avatar Sizing & Groups"
          description="Unified system avatar scales with support for fallback lettermarks and overlapping crowd groupings."
        />
        <Card className="bg-white/78 p-8 ring-0 shadow-[0_10px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="grid grid-cols-[180px_1fr] items-center gap-8 py-4">
            <p className="text-sm text-ink-secondary">Scale System</p>
            <div className="flex items-end gap-5">
              {scale.map(({ label, className }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <Avatar className={className}>
                    <AvatarFallback className="bg-zinc-200 font-semibold text-ink-secondary">
                      DV
                    </AvatarFallback>
                  </Avatar>
                  <p className="font-mono text-[10px] text-ink-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[180px_1fr] items-center gap-8 py-4">
            <p className="text-sm text-ink-secondary">Avatar Group</p>
            <AvatarGroup className="-space-x-2">
              {team.map((initials) => (
                <Avatar key={initials} className="ring-2 ring-white">
                  <AvatarFallback className="bg-zinc-200 font-semibold text-ink-secondary">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              ))}
              <AvatarGroupCount className="bg-gold-soft font-semibold text-ink ring-2 ring-white">
                +8
              </AvatarGroupCount>
            </AvatarGroup>
          </div>
        </Card>
      </MaxWidthWrapper>
    </section>
  );
}
