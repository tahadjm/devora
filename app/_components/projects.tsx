import type { StaticImageData } from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import repasGoImage from "@/public/images/projects/repasgo/cover.webp";
import capCompareImage from "@/public/images/projects/cap-compare/cover.webp";
import paperCheckImage from "@/public/images/projects/paper-check/cover.webp";
import bottsAiImage from "@/public/images/projects/botts-ai/cover.webp";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import MediaImage from "@/components/media-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import SectionBadge from "./section-badge";

const filters = [
  "All",
  "Mobile Apps",
  "Web Platforms",
  "SaaS",
  "Dashboards",
] as const;

type Project = {
  name: string;
  industry: string;
  description: string;
  stack: string[];
  href: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

const projects: Project[] = [
  {
    name: "RepasGo",
    industry: "Restaurant Technology",
    description:
      "A restaurant promotion ecosystem with customer and vendor mobile applications, an administration dashboard, and a production-ready backend.",
    stack: ["React Native", "NestJS", "PostgreSQL"],
    href: "/projects/repasgo",
    image: {
      src: repasGoImage,
      alt: "RepasGo customer, restaurant, and administration interfaces",
    },
  },
  {
    name: "Cap Compare",
    industry: "Insurance Technology",
    description:
      "An automobile insurance comparison platform for simulations, offer comparison, document submission, and application tracking.",
    stack: ["Next.js", "React Native", "NestJS"],
    href: "/projects/cap-compare",
    image: {
      src: capCompareImage,
      alt: "Cap Compare insurance quotation and administration interfaces",
    },
  },
  {
    name: "PaperCheck",
    industry: "Academic Technology",
    description:
      "An AI-powered academic review platform for analyzing papers, checking academic requirements, detecting plagiarism, and supporting defense preparation.",
    stack: ["AI", "SaaS", "Web Platform"],
    href: "https://papercheck.ai",
    image: {
      src: paperCheckImage,
      alt: "PaperCheck academic paper analysis platform",
    },
  },
  {
    name: "botts.ai",
    industry: "Business AI",
    description:
      "A business AI platform for deploying customer-facing and internal agents across chat, voice, company knowledge, and connected workflows.",
    stack: ["AI Agents", "Automation", "SaaS"],
    href: "https://botts.ai/en",
    image: {
      src: bottsAiImage,
      alt: "botts.ai business AI agent platform",
    },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-white py-24"
    >
      <MaxWidthWrapper className="max-w-360">
        <SectionBadge>Selected Work</SectionBadge>

        <h2
          id="projects-title"
          className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-ink"
        >
          Products designed and engineered for real business operations
        </h2>

        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
          Explore selected web, mobile, and backend products delivered across
          restaurant, insurance, and retail technology.
        </p>

        <div
          className="mt-10 flex flex-wrap gap-3"
          aria-label="Project categories"
        >
          {filters.map((filter, index) => (
            <span
              key={filter}
              className={cn(
                "inline-flex h-8 items-center rounded-full px-4 text-sm",
                index === 0
                  ? "bg-gold font-medium text-white"
                  : "border border-zinc-200 bg-white text-ink-secondary",
              )}
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="group flex h-full flex-col gap-0 overflow-hidden border-zinc-200/70 bg-white p-0 shadow-none transition-[transform,border-color,box-shadow] duration-300 ease-out motion-reduce:transition-none motion-safe:hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_38px_rgba(0,0,0,0.07)]"
            >
              <MediaImage
                src={project.image.src}
                alt={project.image.alt}
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 100vw"
                aspectRatio="16/10"
                objectFit="cover"
                className="w-full rounded-none"
                enableHoverZoom
              />

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {project.name}
                  </h3>

                  <Badge
                    variant="secondary"
                    className="h-auto shrink-0 whitespace-nowrap px-2.5 py-1 text-[10px] text-ink-secondary"
                  >
                    {project.industry}
                  </Badge>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="inline-flex h-6 items-center rounded-md bg-zinc-100 px-2.5 text-xs text-ink-secondary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="mt-6 w-full"
                >
                  <Link href={project.href}>
                    View case study
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/projects">
              Explore all work
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
