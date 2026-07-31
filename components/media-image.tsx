"use client";

import Image, { type ImageProps, type StaticImageData } from "next/image";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type MediaImageProps = {
  src: string | StaticImageData;
  alt: string;
  sizes: string;
  aspectRatio?: `${number}/${number}`;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  quality?: number;
  fallbackLabel?: string;
  objectFit?: "cover" | "contain";
  enableHoverZoom?: boolean;
  position?: ImageProps["style"];
};

export default function MediaImage({
  src,
  alt,
  sizes,
  aspectRatio = "3/2",
  className,
  imageClassName,
  priority = false,
  quality = 85,
  fallbackLabel = "Preview unavailable",
  objectFit = "cover",
  enableHoverZoom = true,
  position,
}: MediaImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isStaticImage = typeof src !== "string";

  return (
    <div
      className={cn(
        "group/media relative isolate overflow-hidden bg-zinc-100",
        className,
      )}
      style={{ aspectRatio: aspectRatio.replace("/", " / ") }}
    >
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 z-10 overflow-hidden bg-zinc-100 transition-opacity duration-500"
          aria-hidden="true"
        >
          <div className="absolute inset-0 animate-pulse bg-zinc-200/60 motion-reduce:animate-none" />

          <div className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent motion-safe:animate-[image-shimmer_1.6s_ease-in-out_infinite]" />
        </div>
      )}

      {hasError ? (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-zinc-100 px-6 text-center text-ink-muted"
        >
          <ImageIcon className="size-5" aria-hidden="true" />
          <span className="text-xs">{fallbackLabel}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          placeholder={isStaticImage ? "blur" : "empty"}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={position}
          className={cn(
            objectFit === "cover" ? "object-cover" : "object-contain",
            "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
            isLoaded ? "opacity-100" : "opacity-0",
            enableHoverZoom && "motion-safe:group-hover/media:scale-[1.025]",
            imageClassName,
          )}
        />
      )}

      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-black/[0.02] opacity-0",
          "transition-opacity duration-500 motion-reduce:transition-none",
          enableHoverZoom && "group-hover/media:opacity-100",
        )}
        aria-hidden="true"
      />
    </div>
  );
}
