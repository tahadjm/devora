import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Check,
  Clock3,
  Globe2,
  Video,
} from "lucide-react";

import Footer from "@/app/_components/footer";
import Navbar from "@/app/_components/navbar";
import SectionBadge from "@/app/_components/section-badge";
import CalBookingEmbed from "@/components/cal-booking-embed";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Book a Discovery Call | North Studio",
  description:
    "Schedule a 30-minute conversation with North Studio to discuss your web, mobile, or software product.",
};

const meetingDetails = [
  { icon: Clock3, label: "30 minutes" },
  { icon: Video, label: "Google Meet" },
  { icon: Globe2, label: "Times shown in your timezone" },
  { icon: CalendarClock, label: "No-obligation introduction" },
] as const;

const discussionTopics = [
  "Your product and business objective",
  "Current project stage",
  "Required web, mobile, backend, or design work",
  "Important integrations and constraints",
  "Expected timeline and possible next steps",
] as const;

const faqs = [
  {
    question: "Is the discovery call free?",
    answer: "Yes. The 30-minute discovery call is free and carries no obligation.",
  },
  {
    question: "Who should join the call?",
    answer:
      "Anyone who understands the product goals, requirements, or key business decisions is welcome.",
  },
  {
    question: "Do I need a complete specification?",
    answer:
      "No. A clear summary of the problem, intended users, and current stage is enough.",
  },
  {
    question: "Can we discuss an existing product?",
    answer:
      "Yes. We can discuss improvements, new features, technical challenges, or a broader rebuild.",
  },
  {
    question: "What happens after the call?",
    answer:
      "If there is a good fit, we will outline the relevant next steps and any information needed from you.",
  },
  {
    question: "Can I reschedule or cancel?",
    answer:
      "Yes. Use the links in your Cal.com confirmation email to reschedule or cancel.",
  },
] as const;

export default function BookACallPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-canvas">
      <Navbar />
      <main>
        <section className="pb-14 pt-36 sm:pb-16 sm:pt-40">
          <MaxWidthWrapper className="max-w-[1100px] px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <SectionBadge>Discovery Call</SectionBadge>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Let&apos;s discuss your project
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg">
                Choose a suitable time for a 30-minute conversation about your
                product, current requirements, timeline, and possible next
                steps.
              </p>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-4" aria-label="Meeting details">
              {meetingDetails.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm text-ink-secondary"
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-gold-soft/80 text-gold-deep">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </MaxWidthWrapper>
        </section>

        <section aria-label="Book your discovery call" className="pb-20">
          <MaxWidthWrapper className="max-w-[1100px] px-2 sm:px-5 md:px-8">
            <div className="w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white sm:rounded-3xl">
              <CalBookingEmbed />
            </div>
          </MaxWidthWrapper>
        </section>

        <section
          aria-labelledby="discussion-title"
          className="border-y border-zinc-200/70 bg-white py-20"
        >
          <MaxWidthWrapper className="max-w-[1100px] px-5 sm:px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <SectionBadge>Call Agenda</SectionBadge>
                <h2
                  id="discussion-title"
                  className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
                >
                  What we&apos;ll discuss
                </h2>
              </div>

              <div>
                <ul className="divide-y divide-zinc-200/70 border-y border-zinc-200/70">
                  {discussionTopics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-3 py-4 text-[15px] leading-relaxed text-ink-secondary"
                    >
                      <Check
                        className="mt-0.5 size-5 shrink-0 text-gold-deep"
                        aria-hidden="true"
                      />
                      {topic}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl border border-gold/30 bg-gold-soft/35 p-5 sm:p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    A simple overview is enough
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    You do not need a complete specification before the call. A
                    short explanation of the problem, intended users, and
                    current project stage is enough.
                  </p>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        <section aria-labelledby="faq-title" className="py-20">
          <MaxWidthWrapper className="max-w-[900px] px-5 sm:px-6 md:px-10">
            <div className="text-center">
              <SectionBadge>FAQ</SectionBadge>
              <h2
                id="faq-title"
                className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
              >
                Before you book
              </h2>
            </div>

            <div className="mt-10 divide-y divide-zinc-200/80 border-y border-zinc-200/80">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-base font-semibold text-ink focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-gold/30 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span
                      className="relative size-5 shrink-0 text-gold-deep after:absolute after:left-1/2 after:top-1/2 after:h-px after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-current before:absolute before:left-1/2 before:top-1/2 before:h-3 before:w-px before:-translate-x-1/2 before:-translate-y-1/2 before:bg-current before:transition-transform group-open:before:rotate-90 motion-reduce:before:transition-none"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="max-w-2xl pt-3 text-sm leading-relaxed text-ink-secondary">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </MaxWidthWrapper>
        </section>

        <section className="bg-white py-20" aria-labelledby="alternative-contact-title">
          <MaxWidthWrapper className="max-w-[900px] px-5 sm:px-6 md:px-10">
            <div className="flex flex-col items-start justify-between gap-7 rounded-2xl border border-zinc-200/80 p-7 sm:p-9 md:flex-row md:items-center">
              <div>
                <h2
                  id="alternative-contact-title"
                  className="font-display text-2xl font-bold text-ink"
                >
                  Prefer to send the details first?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  Use the project inquiry form and share your requirements at
                  your own pace.
                </p>
              </div>
              <Button variant="secondary" size="lg" className="shrink-0" asChild>
                <Link href="mailto:hello@devora.dev">
                  Send project details
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </MaxWidthWrapper>
        </section>
      </main>
      <Footer />
    </div>
  );
}
