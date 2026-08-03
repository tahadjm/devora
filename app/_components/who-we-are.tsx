import Image from "next/image";
import Link from "next/link";

import {
  Award,
  Cpu,
  Globe,
  Handshake,
  Palette,
  type LucideIcon,
} from "lucide-react";

import studioImage from "@/public/images/about/studio.jpg";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import MediaImage from "@/components/media-image";
import { Button } from "@/components/ui/button";

import SectionBadge from "./section-badge";

type Tenet = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const tenets: Tenet[] = [
  {
    icon: Cpu,
    title: "Elite Engineering",
    description:
      "Clean, maintainable, and robust system architectures optimized for extreme performance.",
  },
  {
    icon: Palette,
    title: "UI/UX Excellence",
    description:
      "Intuitive and visually spectacular interfaces crafted to keep users deeply engaged.",
  },
  {
    icon: Globe,
    title: "Global-Ready Scale",
    description:
      "Multi-region solutions built from day one to operate securely across diverse borders.",
  },
  {
    icon: Handshake,
    title: "True Partnerships",
    description:
      "We embed deeply with your product leadership to operate as one unified team.",
  },
];

export default function WhoWeAre() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-25 top-20 size-[380px]"
      >
        <div className="absolute inset-[-31.58%]">
          <Image
            src="/images/about/bg-glow.svg"
            alt=""
            fill
            unoptimized
            className="max-w-none"
          />
        </div>
      </div>

      <MaxWidthWrapper className="relative max-w-360">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
          <div className="max-w-[640px]">
            <SectionBadge>Who We Are</SectionBadge>

            <h2
              id="about-title"
              className="mt-4 font-display text-4xl font-bold leading-[1.15] tracking-tight text-ink md:text-[44px]"
            >
              Fusing Creative Artistry with{" "}
              <span className="text-gold">Technical Precision</span>
            </h2>

            <p className="mt-8 text-base leading-relaxed text-ink-secondary">
              At Devora, we believe that world-class digital products are born
              at the intersection of rigorous engineering and beautiful
              human-centric design. We are a dedicated team of developers,
              designers, and strategists committed to architecting scalable
              platforms that solve complex workflows and accelerate real
              growth.
            </p>

            <div className="mt-8 grid gap-6 gap-x-8 sm:grid-cols-2">
              {tenets.map((tenet) => {
                const Icon = tenet.icon;

                return (
                  <div key={tenet.title}>
                    <div className="flex items-center gap-2">
                      <Icon
                        className="size-[18px] text-gold"
                        aria-hidden="true"
                      />
                      <h3 className="font-display text-base font-semibold text-ink">
                        {tenet.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-secondary">
                      {tenet.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <Button variant="accent" size="lg" className="mt-10" asChild>
              <Link href="/#contact">Meet the Team</Link>
            </Button>
          </div>

          <div className="relative w-full max-w-[520px] shrink-0">
            <div className="mr-10 mt-10">
              <MediaImage
                src={studioImage}
                alt="The Devora team collaborating in the studio"
                sizes="(min-width: 1024px) 480px, calc(100vw - 3rem)"
                aspectRatio="12/11"
                className="rounded-2xl border border-zinc-200"
              />
            </div>

            <div className="absolute right-0 top-0 flex w-[200px] flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_12px_24px_rgba(0,0,0,0.07)]">
              <div className="flex items-center gap-2">
                <Award className="size-4 text-gold" aria-hidden="true" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.5px] text-ink">
                  Founded
                </span>
              </div>
              <p className="font-display text-[32px] font-extrabold leading-none text-gold">
                2018
              </p>
              <p className="text-[13px] leading-snug text-ink-secondary">
                Providing premium digital services for scale-ups globally.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-14 size-3"
            >
              <div className="absolute inset-[-66.67%]">
                <Image
                  src="/images/about/gold-bead.svg"
                  alt=""
                  fill
                  unoptimized
                  className="max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
