import Image from "next/image";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Card } from "@/components/ui/card";
import SectionBadge from "./section-badge";

type Tool = {
  icon: string;
  name: string;
  category: string;
  description: string;
};

const tools: Tool[] = [
  {
    icon: "/images/tools/nextjs.png",
    name: "Next.js",
    category: "Frontend Framework",
    description: "Production-grade React applications",
  },
  {
    icon: "/images/tools/react.png",
    name: "React",
    category: "UI Library",
    description: "Interactive client-side interfaces",
  },
  {
    icon: "/images/tools/wordpress.png",
    name: "WordPress",
    category: "Headless CMS",
    description: "Flexible content management",
  },
  {
    icon: "/images/tools/figma.png",
    name: "Figma",
    category: "Design Tool",
    description: "Collaborative interface design",
  },
  {
    icon: "/images/tools/flutter.png",
    name: "Flutter",
    category: "Mobile SDK",
    description: "Multi-platform native applications",
  },
  {
    icon: "/images/tools/nodejs.png",
    name: "Node.js",
    category: "Runtime Environment",
    description: "Scalable backend services",
  },
  {
    icon: "/images/tools/python.png",
    name: "Python",
    category: "Backend & AI",
    description: "Data pipelines & machine learning",
  },
  {
    icon: "/images/tools/shopify.png",
    name: "Shopify",
    category: "E-Commerce",
    description: "High-conversion digital storefronts",
  },
  {
    icon: "/images/tools/laravel.png",
    name: "Laravel",
    category: "PHP Framework",
    description: "Robust custom business systems",
  },
  {
    icon: "/images/tools/aws.png",
    name: "AWS",
    category: "Cloud Infrastructure",
    description: "Secure, global hosting & DevOps",
  },
];

export default function Tools() {
  return (
    <section className="border-y border-zinc-200/60 bg-white py-24">
      <MaxWidthWrapper className="max-w-360">
        <div className="text-center">
          <SectionBadge>Our Tech Stack</SectionBadge>

          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink">
            Tools &amp; Technologies We Work With
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
            We use the best tools to deliver exceptional results. From scalable
            cloud architectures to modern frontend frameworks, our stack is
            optimized for performance, security, and velocity.
          </p>
        </div>

        <div className="-mx-4 mt-12 overflow-x-auto px-4 pb-6 pt-1">
          <div className="flex w-max gap-6">
            {tools.map((tool) => (
              <Card
                key={tool.name}
                className="group w-70 shrink-0 gap-4 rounded-2xl border-[1.5px] border-zinc-200/80 bg-white p-7 shadow-none transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#e8a838] hover:shadow-[0_12px_24px_rgba(232,168,56,0.12)]"
              >
                <span className="relative block size-12 overflow-hidden rounded-xl border border-zinc-200/40 transition-colors duration-300 group-hover:border-[rgba(232,168,56,0.3)]">
                  <Image
                    src={tool.icon}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </span>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {tool.name}
                  </h3>

                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.5px] text-ink-muted transition-colors duration-300 group-hover:text-[#e8a838]">
                    {tool.category}
                  </p>
                </div>

                <p className="text-[13px] leading-[1.4] text-ink-secondary">
                  {tool.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <p className="mt-6 flex items-center justify-center gap-3 text-[13px] font-medium text-ink-muted">
          <span className="size-2 rounded-full bg-gold" aria-hidden="true" />
          All solutions are fully optimized, integrated, and supported 24/7 by
          our dedicated engineering team.
        </p>
      </MaxWidthWrapper>
    </section>
  );
}
