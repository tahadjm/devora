"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SectionBadge from "./section-badge";

interface Testimonial {
  author: string;
  role: string;
  initials: string;
  title: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    author: "Bogdan Ungureanu",
    role: "Head of UI UX, NAGA.com",
    initials: "BU",
    title: "Strong Collaboration on a Full Trading App",
    quote:
      "I have had the pleasure of working with Devora for more than a year now on our biggest design challenges of creating a full trading app for both web and mobile. From the very start, the collaboration was smooth and effective. The team really understood our vision, and they quickly aligned with our high standards. Together, we designed a platform that feels intuitive, reliable, and engaging for our users. I highly recommend Devora to anyone looking for strong design.",
  },
  {
    author: "Nayef Al-Rashid",
    role: "CEO, Nayef Logistics",
    initials: "NA",
    title: "A Fleet Platform That Transformed Our Operations",
    quote:
      "Devora delivered a fleet management platform that gave us real-time visibility across our entire operation. Scheduling that used to take hours now happens automatically, and the reporting keeps every stakeholder informed. The team was responsive, professional, and genuinely invested in our success.",
  },
  {
    author: "Layla Haddad",
    role: "Founder, Bloom Beauty",
    initials: "LH",
    title: "Our E-Commerce App Exceeded Every Expectation",
    quote:
      "From the AR try-on experience to the subscription engine, Devora built an app our customers love. Sales grew month over month after launch, and the loyalty program keeps people coming back. Working with them felt like having a world-class product team in-house.",
  },
];

const cloudPositions = [
  "left-[8%] top-10 size-16",
  "left-[26%] top-24 size-[72px]",
  "left-1/2 top-2 size-28 -translate-x-1/2",
  "right-[26%] top-8 size-[72px]",
  "right-[10%] top-24 size-[72px]",
  "right-[2%] top-14 size-16",
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <section className="py-24">
      <MaxWidthWrapper className="max-w-[1440px]">
        <SectionBadge>Reviews</SectionBadge>
        <h2 className="mt-4 max-w-4xl font-display text-4xl font-bold text-ink">
          Don&apos;t take our word for it — hear from the businesses we&apos;ve
          helped succeed
        </h2>
        <Card className="mt-14 gap-0 bg-white/78 p-10 ring-0 shadow-[0_10px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="relative h-56" aria-hidden>
            {testimonials.concat(testimonials).slice(0, 6).map((t, i) => (
              <Avatar
                key={`${t.initials}-${i}`}
                className={cn(
                  "absolute rounded-2xl",
                  cloudPositions[i],
                  i === index && "ring-2 ring-gold",
                )}
              >
                <AvatarFallback className="rounded-2xl bg-zinc-200 font-semibold text-ink-secondary">
                  {t.initials}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="text-center">
            <p className="font-display text-2xl font-semibold text-gold-deep">
              {active.author}
            </p>
            <p className="mt-1 text-sm text-ink-muted">{active.role}</p>
          </div>
          <div className="mt-8 flex items-start gap-8">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="mt-8 flex size-12 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-ink-secondary transition-colors hover:border-gold hover:text-gold-deep"
            >
              <ArrowLeft className="size-5" aria-hidden />
            </button>
            <div className="min-h-40 flex-1 text-center">
              <h3 className="font-display text-2xl font-semibold text-ink">
                {active.title}
              </h3>
              <blockquote className="mx-auto mt-5 max-w-4xl text-sm leading-relaxed text-ink-secondary">
                {active.quote}
              </blockquote>
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="mt-8 flex size-12 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-ink-secondary transition-colors hover:border-gold hover:text-gold-deep"
            >
              <ArrowRight className="size-5" aria-hidden />
            </button>
          </div>
        </Card>
      </MaxWidthWrapper>
    </section>
  );
}
