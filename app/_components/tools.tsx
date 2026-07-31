import {
  Atom,
  Boxes,
  CircleX,
  Cloud,
  Code,
  Container,
  Database,
  Globe,
  PenTool,
  Server,
  ShoppingCart,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Card } from "@/components/ui/card";
import SectionBadge from "./section-badge";

type Tool = {
  icon: LucideIcon;
  name: string;
  category: string;
  description: string;
};

const tools: Tool[] = [
  {
    icon: CircleX,
    name: "Next.js",
    category: "Web Framework",
    description: "Fast and scalable web platforms.",
  },
  {
    icon: Atom,
    name: "React",
    category: "UI Library",
    description: "Reusable interfaces and dashboards.",
  },
  {
    icon: Smartphone,
    name: "React Native",
    category: "Mobile Framework",
    description: "iOS and Android applications.",
  },
  {
    icon: Boxes,
    name: "NestJS",
    category: "Backend Framework",
    description: "Structured and maintainable APIs.",
  },
  {
    icon: Server,
    name: "Node.js",
    category: "Backend Runtime",
    description: "Reliable server-side applications.",
  },
  {
    icon: Database,
    name: "PostgreSQL",
    category: "Database",
    description: "Secure transactional data storage.",
  },
  {
    icon: Container,
    name: "Docker",
    category: "Infrastructure",
    description: "Consistent production environments.",
  },
  {
    icon: Code,
    name: "Python",
    category: "Backend Language",
    description: "APIs, automation, and data services.",
  },
  {
    icon: Globe,
    name: "WordPress",
    category: "Content Platform",
    description: "Flexible content-driven websites.",
  },
  {
    icon: ShoppingCart,
    name: "Shopify",
    category: "E-Commerce",
    description: "Custom online commerce experiences.",
  },
  {
    icon: Cloud,
    name: "AWS",
    category: "Cloud Platform",
    description: "Scalable cloud infrastructure.",
  },
  {
    icon: PenTool,
    name: "Figma",
    category: "Product Design",
    description: "Interfaces, prototypes, and design systems.",
  },
];

export default function Tools() {
  return (
    <section className="py-24">
      <MaxWidthWrapper className="max-w-360">
        <div className="text-center">
          <SectionBadge>Our Tech Stack</SectionBadge>

          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink">
            Tools behind the products we build
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
            A focused stack for building web platforms, mobile applications,
            backend systems, and production infrastructure.
          </p>
        </div>

        <div className="-mx-4 mt-12 overflow-x-auto px-4 pb-6">
          <div className="flex w-max gap-4">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <Card
                  key={tool.name}
                  className="group w-62 shrink-0 gap-0 border-zinc-200/80 bg-white p-6 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_12px_28px_rgba(24,24,27,0.06)]"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-zinc-100 text-ink-secondary transition-colors duration-300 group-hover:bg-gold-soft group-hover:text-gold-deep">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {tool.name}
                  </h3>

                  <p className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-ink-muted transition-colors group-hover:text-gold-deep">
                    {tool.category}
                  </p>

                  <p className="mt-4 text-sm leading-5 text-ink-secondary">
                    {tool.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-ink-secondary">
          <span className="size-2 rounded-full bg-gold" aria-hidden="true" />
          We choose each technology according to the product requirements.
        </p>
      </MaxWidthWrapper>
    </section>
  );
}
