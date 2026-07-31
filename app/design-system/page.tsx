import type { Metadata } from "next";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import TopNav from "./_components/top-nav";
import Sidebar from "./_components/sidebar";
import SectionColors from "./_components/section-colors";
import SectionTypography from "./_components/section-typography";
import SectionButtons from "./_components/section-buttons";
import SectionInputs from "./_components/section-inputs";
import SectionBadges from "./_components/section-badges";
import SectionCards from "./_components/section-cards";
import SectionAvatars from "./_components/section-avatars";
import SectionToggles from "./_components/section-toggles";

export const metadata: Metadata = {
  title: "Devora Design System — Light Mode",
  description:
    "A comprehensive UI toolkit engineered for Devora's digital platforms.",
};

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <section className="pt-16">
            <MaxWidthWrapper>
              <Badge variant="pill" className="h-7 px-3 font-mono text-xs text-gold-deep">
                v1.2.0 Active Specification
              </Badge>
              <h1 className="mt-4 font-display text-4xl font-bold text-ink">
                Devora Design System — Light Mode
              </h1>
              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-secondary">
                A comprehensive UI toolkit engineered for Devora&apos;s digital
                platforms. Designed with a clean, Framer-inspired SaaS aesthetic
                emphasizing functional minimalism, elegant geometry, and high
                readability.
              </p>
            </MaxWidthWrapper>
          </section>
          <SectionColors />
          <SectionTypography />
          <SectionButtons />
          <SectionInputs />
          <SectionBadges />
          <SectionCards />
          <SectionAvatars />
          <SectionToggles />
        </main>
      </div>
    </div>
  );
}
