import {
  CircleX,
  Atom,
  Globe,
  PenTool,
  Smartphone,
  Server,
  Code,
  ShoppingCart,
  Layers,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SectionBadge from "./section-badge";

const tools: {
  icon: LucideIcon;
  name: string;
  category: string;
  description: string;
  active?: boolean;
}[] = [
  {
    icon: CircleX,
    name: "Next.js",
    category: "Frontend Framework",
    description: "Production-grade React applications",
    active: true,
  },
  {
    icon: Atom,
    name: "React",
    category: "UI Library",
    description: "Interactive client-side interfaces",
  },
  {
    icon: Globe,
    name: "WordPress",
    category: "Headless CMS",
    description: "Flexible content management",
  },
  {
    icon: PenTool,
    name: "Figma",
    category: "Design Tool",
    description: "Collaborative interface design",
  },
  {
    icon: Smartphone,
    name: "Flutter",
    category: "Mobile Framework",
    description: "Multi-platform native experiences",
  },
  {
    icon: Server,
    name: "Node.js",
    category: "Backend Runtime",
    description: "Scalable server-side JavaScript",
  },
  {
    icon: Code,
    name: "Python",
    category: "Backend Language",
    description: "Data, AI, and automation services",
  },
  {
    icon: ShoppingCart,
    name: "Shopify",
    category: "E-Commerce Platform",
    description: "High-converting online stores",
  },
  {
    icon: Layers,
    name: "Laravel",
    category: "PHP Framework",
    description: "Robust web application backends",
  },
  {
    icon: Cloud,
    name: "AWS",
    category: "Cloud Platform",
    description: "Reliable global infrastructure",
  },
];

export default function Tools() {
  return (
    <section className="py-24">
      <MaxWidthWrapper className="max-w-[1440px]">
        <div className="text-center">
          <SectionBadge>Our Tech Stack</SectionBadge>
          <h2 className="mt-4 font-display text-4xl font-bold text-ink">
            Tools &amp; Technologies We Work With
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
            We use the best tools to deliver exceptional results. From scalable
            cloud architectures to modern frontend frameworks, our stack is
            optimized for performance, security, and velocity.
          </p>
        </div>
        <div className="mt-16 overflow-x-auto pb-2">
          <div className="flex w-max gap-6">
            {tools.map((tool) => (
              <Card
                key={tool.name}
                className={cn(
                  "w-[280px] shrink-0 gap-0 bg-white p-7 ring-1 ring-zinc-200/70",
                  tool.active && "ring-gold",
                )}
              >
                <span
                  className={cn(
                    "flex size-12 items-center justify-center rounded-xl",
                    tool.active
                      ? "bg-gold-soft text-gold-deep"
                      : "bg-zinc-100 text-ink-secondary",
                  )}
                >
                  <tool.icon className="size-6" aria-hidden />
                </span>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {tool.name}
                  </h3>
                  {tool.active ? (
                    <Badge variant="gold" className="h-4 px-1.5 text-[9px] font-bold uppercase">
                      Active
                    </Badge>
                  ) : null}
                </div>
                <p
                  className={cn(
                    "mt-1 font-mono text-[11px] font-medium uppercase tracking-wider",
                    tool.active ? "text-gold-deep" : "text-ink-muted",
                  )}
                >
                  {tool.category}
                </p>
                <p className="mt-4 text-xs text-ink-secondary">{tool.description}</p>
              </Card>
            ))}
          </div>
        </div>
        <p className="mt-12 flex items-center justify-center gap-2 text-sm text-ink-secondary">
          <span className="size-2 rounded-full bg-gold" aria-hidden />
          All solutions are fully optimized, integrated, and supported 24/7 by
          our dedicated engineering team.
        </p>
      </MaxWidthWrapper>
    </section>
  );
}
