import Image from "next/image";
import Link from "next/link";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Decoration = {
  name: string;
  src: string;
  wrapperClassName: string;
  bleedClassName: string;
};

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "12+", label: "Countries Served" },
  { value: "50+", label: "Happy Clients" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

const flags = [
  { country: "Algeria", src: "/images/hero/flags/algeria.png" },
  { country: "Palestine", src: "/images/hero/flags/palestine.png" },
  { country: "France", src: "/images/hero/flags/france.png" },
  { country: "Austria", src: "/images/hero/flags/austria.png" },
  { country: "Saudi Arabia", src: "/images/hero/flags/saudi-arabia.png" },
  { country: "Morocco", src: "/images/hero/flags/morocco.png" },
  { country: "United States", src: "/images/hero/flags/united-states.png" },
  { country: "United Kingdom", src: "/images/hero/flags/united-kingdom.png" },
  { country: "Germany", src: "/images/hero/flags/germany.png" },
  { country: "Turkey", src: "/images/hero/flags/turkey.png" },
  { country: "Canada", src: "/images/hero/flags/canada.png" },
  { country: "UAE", src: "/images/hero/flags/uae.png" },
] as const;

const decorations: Decoration[] = [
  {
    name: "orb-blue",
    src: "/images/hero/orb-blue.svg",
    wrapperClassName: "left-[-120px] top-[84px] size-[420px]",
    bleedClassName: "inset-[-26.19%]",
  },
  {
    name: "orb-cream",
    src: "/images/hero/orb-cream.svg",
    wrapperClassName: "right-[-160px] top-[-80px] size-[380px]",
    bleedClassName: "inset-[-26.32%]",
  },
  {
    name: "blob-warm",
    src: "/images/hero/blob-warm.svg",
    wrapperClassName: "right-[-140px] top-[264px] h-[336px] w-[334px]",
    bleedClassName: "inset-[-53.57%_-53.89%]",
  },
  {
    name: "circle-1",
    src: "/images/hero/circle-1.svg",
    wrapperClassName: "left-[-60px] top-[140px] size-[180px]",
    bleedClassName: "inset-[-22.22%]",
  },
  {
    name: "ring-1",
    src: "/images/hero/ring-1.svg",
    wrapperClassName: "right-[-80px] top-[260px] size-[220px]",
    bleedClassName: "inset-[-22.73%]",
  },
  {
    name: "circle-2",
    src: "/images/hero/circle-2.svg",
    wrapperClassName: "left-1/2 top-[-80px] size-[240px] -translate-x-1/2",
    bleedClassName: "inset-[-25%]",
  },
  {
    name: "circle-x-left",
    src: "/images/hero/circle-x-left.svg",
    wrapperClassName: "left-[-320px] top-[420px] size-[520px]",
    bleedClassName: "inset-[-7.25%]",
  },
  {
    name: "circle-x-right",
    src: "/images/hero/circle-x-right.svg",
    wrapperClassName: "right-[-360px] top-[420px] size-[560px]",
    bleedClassName: "inset-[-6.13%]",
  },
  {
    name: "circle-x-top",
    src: "/images/hero/circle-x-top.svg",
    wrapperClassName: "left-[220px] top-[-40px] size-[420px]",
    bleedClassName: "inset-[-10.96%]",
  },
  {
    name: "particle-1",
    src: "/images/hero/particle-1.svg",
    wrapperClassName: "left-[140px] top-[180px] size-[6px]",
    bleedClassName: "inset-[-166.67%]",
  },
  {
    name: "particle-2",
    src: "/images/hero/particle-2.svg",
    wrapperClassName: "left-[360px] top-[420px] size-[4px]",
    bleedClassName: "inset-[-250%]",
  },
  {
    name: "particle-3",
    src: "/images/hero/particle-3.svg",
    wrapperClassName: "right-[415px] top-[190px] size-[5px]",
    bleedClassName: "inset-[-200%]",
  },
  {
    name: "particle-4",
    src: "/images/hero/particle-4.svg",
    wrapperClassName: "right-[194px] top-[520px] size-[6px]",
    bleedClassName: "inset-[-166.67%]",
  },
  {
    name: "particle-5",
    src: "/images/hero/particle-5.svg",
    wrapperClassName: "left-[60%] top-[620px] size-[4px]",
    bleedClassName: "inset-[-250%]",
  },
  {
    name: "particle-6",
    src: "/images/hero/particle-6.svg",
    wrapperClassName: "left-[220px] top-[620px] size-[5px]",
    bleedClassName: "inset-[-200%]",
  },
];

function DotGrid({
  src,
  rows,
  className,
}: {
  src: string;
  rows: number;
  className: string;
}) {
  return (
    <div
      className={`absolute flex size-[180px] flex-col items-start gap-4 overflow-clip ${className}`}
    >
      {Array.from({ length: rows }, (_, index) => (
        <div key={index} className="relative h-1 w-[204px] shrink-0">
          <Image src={src} alt="" fill unoptimized className="max-w-none" />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/60 bg-white pb-24 pt-44">
      {/* decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {decorations.map((decoration) => (
          <div
            key={decoration.name}
            className={`absolute ${decoration.wrapperClassName}`}
          >
            <div className={`absolute ${decoration.bleedClassName}`}>
              <Image
                src={decoration.src}
                alt=""
                fill
                unoptimized
                className="max-w-none"
              />
            </div>
          </div>
        ))}

        <DotGrid
          src="/images/hero/dot-row-gold.svg"
          rows={9}
          className="left-[120px] top-[220px]"
        />
        <DotGrid
          src="/images/hero/dot-row-teal.svg"
          rows={8}
          className="right-[120px] top-[320px]"
        />

        <div className="absolute left-[21px] top-[520px] flex size-[198px] items-center justify-center">
          <div className="size-[140px] rotate-45 border-2 border-[rgba(167,139,250,0.1)] blur-[15px]" />
        </div>
      </div>

      <MaxWidthWrapper className="relative max-w-[900px] text-center">
        <Badge
          variant="pill"
          className="h-6 border-[#d4b038] bg-[#fdf8e8] px-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-gold"
        >
          Premium Software Development Services
        </Badge>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.1] tracking-[-1.5px] text-ink md:text-[64px]">
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
            <Link href="/#contact">Start Your Project</Link>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="border-zinc-200"
            asChild
          >
            <Link href="#projects">View Our Work</Link>
          </Button>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-[13px] font-medium text-ink-secondary">
            Trusted across 12+ countries
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {flags.map((flag) => (
              <li
                key={flag.country}
                className="relative h-7 w-10 overflow-hidden rounded-md border border-zinc-200 shadow-[0_2px_6px_rgba(0,0,0,0.05)]"
              >
                <Image
                  src={flag.src}
                  alt={`Flag of ${flag.country}`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="relative mt-16 max-w-290">
        <dl className="flex flex-col justify-between gap-8 rounded-3xl border-[2.5px] border-white/85 bg-white/80 px-12 py-6 shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.12)] backdrop-blur-sm sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:rounded-full">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <dd className="font-display text-[32px] font-extrabold leading-none tracking-[-1px] text-gold">
                {stat.value}
              </dd>
              <dt className="text-sm font-semibold uppercase tracking-[1px] text-ink-muted">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </MaxWidthWrapper>
    </section>
  );
}
