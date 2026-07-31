import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "rounded-full bg-primary/92 text-primary-foreground shadow-[0_10px_24px_rgba(0,0,0,0.08)] backdrop-blur-lg hover:bg-primary disabled:rounded-lg disabled:bg-zinc-200 disabled:text-ink-muted disabled:opacity-100 disabled:shadow-none",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "rounded-full border-gold bg-white/72 text-ink shadow-[0_8px_20px_rgba(0,0,0,0.04)] backdrop-blur-lg hover:bg-white disabled:rounded-lg disabled:border-zinc-200 disabled:bg-zinc-50 disabled:text-ink-muted disabled:opacity-100 disabled:shadow-none",
        ghost:
          "rounded-full text-primary hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 disabled:rounded-lg disabled:text-ink-muted disabled:opacity-100",
        accent:
          "rounded-full bg-gold/92 text-primary shadow-[0_10px_24px_rgba(0,0,0,0.08)] backdrop-blur-lg hover:bg-gold disabled:rounded-lg disabled:bg-zinc-200 disabled:text-ink-muted disabled:opacity-100 disabled:shadow-none",
        destructive:
          "rounded-full bg-destructive/92 text-white shadow-[0_10px_24px_rgba(0,0,0,0.08)] backdrop-blur-lg hover:bg-destructive focus-visible:border-destructive/40 focus-visible:ring-destructive/20 disabled:rounded-lg disabled:bg-zinc-200 disabled:text-ink-muted disabled:opacity-100 disabled:shadow-none",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-1.5 px-[18px] font-semibold has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-3 text-[13px] font-semibold has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-1.5 px-6 text-base font-semibold has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
