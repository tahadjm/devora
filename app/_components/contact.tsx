import Image from "next/image";

import MaxWidthWrapper from "@/components/max-width-wrapper";

import SectionBadge from "./section-badge";
import ContactTabs from "./contact-tabs";

const faqs = [
  {
    question: "Is the discovery call free?",
    answer:
      "Yes. The 30-minute discovery call is free and carries no obligation.",
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
    question: "What happens after I reach out?",
    answer:
      "If there is a good fit, we will outline the relevant next steps and any information needed from you.",
  },
  {
    question: "Can I reschedule or cancel a call?",
    answer:
      "Yes. Use the links in your Cal.com confirmation email to reschedule or cancel.",
  },
] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-[#faf5e8] py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[6%] -top-[10%] h-[130%] w-[115%] opacity-90"
      >
        <Image
          src="/images/contact/vector.svg"
          alt=""
          fill
          unoptimized
          className="object-contain object-left-top"
        />
      </div>

      <MaxWidthWrapper className="relative max-w-290">
        <div className="text-center">
          <SectionBadge>Contact Us</SectionBadge>

          <h2
            id="contact-title"
            className="mt-4 font-display text-4xl font-bold tracking-tight text-ink"
          >
            Let&apos;s build something great
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
            Get in touch with us — we&apos;d love to hear from you. Book a
            call directly on our calendar or send us the details of your
            project.
          </p>
        </div>

        <div className="mt-12">
          <ContactTabs />
        </div>

        <div className="mx-auto mt-24 max-w-[900px]">
          <div className="text-center">
            <SectionBadge>FAQ</SectionBadge>
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink">
              Before you reach out
            </h3>
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
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
