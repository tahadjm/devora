import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <section id="contact" className="py-24">
      <MaxWidthWrapper className="max-w-[1440px]">
        <div className="rounded-3xl bg-gradient-to-br from-gold-soft/80 via-[#f9f4e6] to-gold-soft/50 px-8 py-20 text-center">
          <h2 className="font-display text-4xl font-bold text-ink">
            Ready to Build Something Great?
          </h2>
          <p className="mt-4 text-[15px] text-ink-secondary">
            Tell us about your project and we&apos;ll get back to you within 24
            hours
          </p>
          <Button variant="accent" size="lg" className="mt-10" asChild>
            <Link href="/book-a-call">Book a discovery call</Link>
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
