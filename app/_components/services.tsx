import Image, { type StaticImageData } from "next/image";
import {
  Monitor,
  Shield,
  ShoppingBag,
  SlidersHorizontal,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import customSoftwareSystemsImage from "@/public/images/services/custom-software-systems.webp";
import ecommerceSolutionsImage from "@/public/images/services/ecommerce-solutions.webp";
import maintenanceSupportImage from "@/public/images/services/maintenance-support.webp";
import mobileAppDevelopmentImage from "@/public/images/services/mobile-app-development.webp";
import uiUxDesignImage from "@/public/images/services/ui-ux-design.webp";
import webDevelopmentImage from "@/public/images/services/web-development.webp";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import SectionBadge from "./section-badge";

type Service = {
  icon: LucideIcon | string;
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  emphasized?: boolean;
};

const servicesRowOne: Service[] = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Custom websites built for performance, SEO, and conversion - from landing pages to complex web platforms.",
    image: {
      src: webDevelopmentImage,
      alt: "Modern web application displayed on a desktop screen",
    },
    emphasized: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps for iOS and Android that users love and businesses rely on.",
    image: {
      src: mobileAppDevelopmentImage,
      alt: "Mobile application interfaces displayed on smartphones",
    },
  },
  {
    icon: "/images/tools/figma.svg",
    title: "UI/UX Design",
    description:
      "Research-driven design that puts your users first and makes every interaction effortless.",
    image: {
      src: uiUxDesignImage,
      alt: "Digital product interface inside a collaborative design workspace",
    },
  },
];

const featuredService: Service = {
  icon: Shield,
  title: "Maintenance & Support",
  description:
    "Ongoing updates, monitoring, and optimization to keep your product running at peak performance. Includes 24/7 monitoring, regular security patches, performance tuning, and a dedicated support team for fast issue resolution.",
  image: {
    src: maintenanceSupportImage,
    alt: "Software monitoring dashboard showing application health",
  },
};

const servicesRowTwo: Service[] = [
  {
    icon: SlidersHorizontal,
    title: "Custom Software Systems",
    description:
      "Enterprise-grade systems - CRM, ERP, inventory, booking - designed around your workflow.",
    image: {
      src: customSoftwareSystemsImage,
      alt: "Custom business software dashboard showing operational data",
    },
    emphasized: true,
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description:
      "Online stores that sell - payment integration, inventory management, and seamless checkout.",
    image: {
      src: ecommerceSolutionsImage,
      alt: "Modern e-commerce storefront and product interface",
    },
    emphasized: true,
  },
];

function ServiceIcon({ icon }: { icon: LucideIcon | string }) {
  return (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-white text-gold-deep">
      {typeof icon === "string" ? (
        <span className="relative size-5">
          <Image src={icon} alt="" fill unoptimized />
        </span>
      ) : (
        (() => {
          const Icon = icon;
          return <Icon className="size-5" aria-hidden="true" />;
        })()
      )}
    </span>
  );
}

function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-130 flex-col justify-end overflow-hidden border border-zinc-200/70 shadow-[0_8px_16px_rgba(0,0,0,0.02)] transition-shadow duration-300 ease-out hover:shadow-[0_0_18px_rgba(212,175,55,0.25),0_12px_28px_-8px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <Image
        src={service.image.src}
        alt={service.image.alt}
        fill
        sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/75"
      />

      <div className="relative flex flex-col gap-3 p-6">
        <div className="flex items-center gap-3">
          <ServiceIcon icon={service.icon} />
          <h3
            className={cn(
              "font-display font-semibold text-white",
              service.emphasized ? "text-[22px]" : "text-lg",
            )}
          >
            {service.title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-white/80">
          {service.description}
        </p>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-white py-24"
    >
      <MaxWidthWrapper className="max-w-360">
        <SectionBadge>Our Expertise</SectionBadge>

        <h2
          id="services-title"
          className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-ink"
        >
          End-to-end software solutions tailored to your business needs
        </h2>

        <div className="mt-14 flex flex-col gap-6">
          <div className="grid gap-3 md:grid-cols-3">
            {servicesRowOne.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.53fr_1fr_1fr]">
            <article className="group relative flex h-130 flex-col justify-end overflow-hidden shadow-[0_0_18px_rgba(212,175,55,0.2),0_12px_28px_-8px_rgba(0,0,0,0.08)] transition-shadow duration-300 ease-out hover:shadow-[0_0_26px_rgba(212,175,55,0.32),0_12px_28px_-8px_rgba(0,0,0,0.12)] md:col-span-2 lg:col-span-1">
              <Image
                src={featuredService.image.src}
                alt={featuredService.image.alt}
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.92) 100%)",
                }}
              />

              <div className="relative flex flex-col items-start gap-3 p-5">
                <div className="flex items-center gap-2.5">
                  <ServiceIcon icon={featuredService.icon} />
                  <h3 className="font-display text-lg font-semibold text-white">
                    {featuredService.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/80">
                  {featuredService.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-1 h-10 rounded-full border-white/50 bg-transparent px-4 text-[13px] font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  See Similar Work
                </Button>
              </div>
            </article>

            {servicesRowTwo.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
