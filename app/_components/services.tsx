import type { StaticImageData } from "next/image";
import {
  Monitor,
  PenTool,
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
import MediaImage from "@/components/media-image";
import { Card } from "@/components/ui/card";

import SectionBadge from "./section-badge";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

const services: Service[] = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Custom websites built for performance, SEO, and conversion—from landing pages to complex web platforms.",
    image: {
      src: webDevelopmentImage,
      alt: "Modern web application displayed on a desktop screen",
    },
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform applications for iOS and Android that users enjoy and businesses can depend on.",
    image: {
      src: mobileAppDevelopmentImage,
      alt: "Mobile application interfaces displayed on smartphones",
    },
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Software Systems",
    description:
      "Business systems such as CRM, inventory, booking, and operational platforms designed around your workflow.",
    image: {
      src: customSoftwareSystemsImage,
      alt: "Custom business software dashboard showing operational data",
    },
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Research-driven product design that gives users clear, accessible, and consistent digital experiences.",
    image: {
      src: uiUxDesignImage,
      alt: "Digital product interface inside a collaborative design workspace",
    },
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description:
      "Online stores with payment integration, product management, inventory workflows, and streamlined checkout.",
    image: {
      src: ecommerceSolutionsImage,
      alt: "Modern e-commerce storefront and product interface",
    },
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "Ongoing updates, monitoring, troubleshooting, and optimization to keep your product reliable in production.",
    image: {
      src: maintenanceSupportImage,
      alt: "Software monitoring dashboard showing application health",
    },
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-white py-24"
    >
      <MaxWidthWrapper className="max-w-[1440px]">
        <SectionBadge>Our Expertise</SectionBadge>

        <h2
          id="services-title"
          className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-ink"
        >
          End-to-end software solutions tailored to your business needs
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group flex h-full flex-col gap-0 overflow-hidden border-zinc-200/70 bg-white p-0 shadow-none transition-[transform,box-shadow,border-color] duration-300 ease-out motion-reduce:transition-none motion-safe:hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="flex flex-1 items-start gap-5 p-8 pb-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gold-soft text-gold-deep">
                    <Icon className="size-5" aria-hidden="true" />
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

                <div className="mx-8 mb-8 mt-1">
                  <MediaImage
                    src={service.image.src}
                    alt={service.image.alt}
                    sizes="(min-width: 1024px) 29vw, (min-width: 768px) 44vw, calc(100vw - 4rem)"
                    aspectRatio="3/2"
                    className="rounded-lg"
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
