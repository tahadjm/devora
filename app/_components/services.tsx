import {
  Monitor,
  Smartphone,
  SlidersHorizontal,
  PenTool,
  ShoppingBag,
  Shield,
  type LucideIcon,
} from "lucide-react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Card } from "@/components/ui/card";
import SectionBadge from "./section-badge";

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
  imageClassName: string;
}[] = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Custom websites built for performance, SEO, and conversion - from landing pages to complex web platforms.",
    imageClassName: "from-zinc-100 via-zinc-200 to-zinc-300",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps for iOS and Android that users love and businesses rely on.",
    imageClassName: "from-gold-soft via-zinc-100 to-zinc-200",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Software Systems",
    description:
      "Enterprise-grade systems - CRM, ERP, inventory, booking - designed around your workflow.",
    imageClassName: "from-info/20 via-zinc-100 to-zinc-200",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Research-driven design that puts your users first and makes every interaction effortless.",
    imageClassName: "from-zinc-100 via-gold-soft/60 to-zinc-200",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description:
      "Online stores that sell - payment integration, inventory management, and seamless checkout.",
    imageClassName: "from-zinc-200 via-zinc-100 to-zinc-300",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "Ongoing updates, monitoring, and optimization to keep your product running at peak performance.",
    imageClassName: "from-[#0f1730] via-[#1e2a5a] to-info/60",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <MaxWidthWrapper className="max-w-[1440px]">
        <SectionBadge>Our Expertise</SectionBadge>
        <h2 className="mt-4 max-w-4xl font-display text-4xl font-bold text-ink">
          End-to-end software solutions tailored to your business needs
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="gap-0 bg-white p-8 ring-1 ring-zinc-200/70 transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-start gap-5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gold-soft text-gold-deep">
                  <service.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {service.description}
                  </p>
                </div>
              </div>
              <div
                className={`mt-5 h-40 w-full rounded-lg bg-gradient-to-br ${service.imageClassName}`}
                role="img"
                aria-label={`${service.title} illustration`}
              />
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
