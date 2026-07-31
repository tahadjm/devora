import { Cpu, Check, ArrowRight } from "lucide-react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./section-heading";

const glassCard =
  "bg-white/78 p-8 ring-0 shadow-[0_10px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl";

export default function SectionCards() {
  return (
    <section id="cards" className="border-t border-zinc-200/70 py-16">
      <MaxWidthWrapper>
        <SectionHeading
          index="06"
          title="Interface Cards & Panels"
          description="Core container components displaying specialized layouts for metrics, configurations, testimonials, and builds."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card className={glassCard}>
            <CardContent className="flex flex-col gap-4 p-0">
              <span className="flex size-10 items-center justify-center rounded-lg bg-gold-soft text-gold-deep">
                <Cpu className="size-5" aria-hidden />
              </span>
              <h3 className="font-display text-xl font-semibold text-ink">
                Serverless Compute
              </h3>
              <p className="text-sm leading-relaxed text-ink-secondary">
                Instantly provision low-latency sandboxes and secure clusters running
                isolated container runtimes globally.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-gold-deep hover:underline"
              >
                Documentation specs <ArrowRight className="size-4" aria-hidden />
              </a>
            </CardContent>
          </Card>

          <Card className={glassCard}>
            <CardContent className="flex flex-col gap-5 p-0">
              <p className="text-[15px] leading-relaxed text-ink">
                &ldquo;Devora modernized our legacy pipeline within three weeks. Build
                times went from minutes to near-instantaneous cloud execution.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-zinc-200 text-ink-secondary">MC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-ink">Marcus Chen</p>
                  <p className="text-xs text-ink-muted">VP of Engineering, CloudCore</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 text-white">
            <Badge variant="gold" className="h-6 px-3 font-semibold uppercase tracking-wider">
              Developer Tier
            </Badge>
            <p className="mt-4 font-display text-4xl font-bold">
              $79 <span className="text-base font-normal text-zinc-400">/ slot / month</span>
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-zinc-300">
              {[
                "Unlimited serverless micro-clusters",
                "Next.js automated CDN edge mapping",
                "Full SOC-2 repository integration",
                "Shared core team dashboard access",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2.5">
                  <Check className="size-4 text-gold" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="accent" className="mt-8 w-full">
              Activate Sandbox
            </Button>
          </div>

          <Card className={`${glassCard} p-0`}>
            <div
              className="h-44 w-full rounded-t-xl bg-gradient-to-br from-info/80 via-[#1e2a5a] to-[#0f1730]"
              role="img"
              aria-label="Aura GraphQL Router illustration"
            />
            <CardContent className="flex flex-col gap-3 p-8">
              <h3 className="font-display text-xl font-semibold text-ink">
                Aura GraphQL Router
              </h3>
              <p className="text-sm leading-relaxed text-ink-secondary">
                Next-generation schema assembly and unified API federated router.
              </p>
              <div className="flex gap-2">
                {["GraphQL", "Rust", "Federated"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="h-6 px-3 text-ink-secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
