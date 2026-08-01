"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const CAL_LINK = "djemili-taha-abdelwadoud-gf4gqz/project-discovery-call";
const CAL_NAMESPACE = "project-discovery-call";
const CAL_URL = `https://cal.com/${CAL_LINK}`;

export type CalBookingEmbedProps = {
  className?: string;
};

export default function CalBookingEmbed({
  className,
}: CalBookingEmbedProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "unavailable">(
    "loading",
  );

  useEffect(() => {
    let isActive = true;
    let calApi: Awaited<ReturnType<typeof getCalApi>> | undefined;

    const handleReady = () => {
      if (isActive) {
        window.clearTimeout(unavailableTimer);
        setStatus("ready");
      }
    };

    const handleUnavailable = () => {
      if (isActive) {
        setStatus("unavailable");
      }
    };

    const unavailableTimer = window.setTimeout(handleUnavailable, 15000);

    void getCalApi({ namespace: CAL_NAMESPACE })
      .then((cal) => {
        if (!isActive) {
          return;
        }

        calApi = cal;
        cal("on", { action: "linkReady", callback: handleReady });
        cal("on", { action: "linkFailed", callback: handleUnavailable });
        cal("ui", {
          theme: "light",
          colorScheme: "light",
          styles: {
            body: {
              background: "#ffffff",
            },
          },
          cssVarsPerTheme: {
            light: {
              "cal-brand": "#D4AF37",
            },
            dark: {
              "cal-brand": "#D4AF37",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      })
      .catch(handleUnavailable);

    return () => {
      isActive = false;
      window.clearTimeout(unavailableTimer);
      calApi?.("off", { action: "linkReady", callback: handleReady });
      calApi?.("off", {
        action: "linkFailed",
        callback: handleUnavailable,
      });
    };
  }, []);

  return (
    <div
      className={cn(
        "relative min-h-[720px] w-full min-w-0 overflow-hidden md:min-h-[760px] lg:min-h-[800px]",
        className,
      )}
    >
      {status === "loading" ? (
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-white p-4 sm:p-6"
          aria-hidden="true"
        >
          <div className="h-full animate-pulse rounded-xl border border-zinc-200/70 bg-zinc-50 motion-reduce:animate-none">
            <div className="h-16 border-b border-zinc-200/70" />
            <div className="grid gap-6 p-5 md:grid-cols-[0.7fr_1.3fr] md:p-8">
              <div className="space-y-3">
                <div className="h-5 w-36 rounded bg-zinc-200/80" />
                <div className="h-4 w-48 max-w-full rounded bg-zinc-200/60" />
                <div className="h-4 w-28 rounded bg-zinc-200/60" />
              </div>
              <div className="h-96 rounded-lg bg-zinc-200/60" />
            </div>
          </div>
        </div>
      ) : null}

      {status === "unavailable" ? (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white px-6 text-center">
          <div className="max-w-sm">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Scheduler unavailable
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
              The scheduler could not be loaded. You can continue on Cal.com.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-ink transition-colors hover:bg-gold-deep focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-gold/40"
            >
              Open Cal.com
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : null}

      <Cal
        namespace={CAL_NAMESPACE}
        calLink={CAL_LINK}
        className="min-h-180 w-full min-w-0 md:min-h-190 lg:min-h-200"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
        config={{
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
          theme: "light",
          "ui.color-scheme": "light",
        }}
      />
    </div>
  );
}
