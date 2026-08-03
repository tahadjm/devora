"use client";

import Link from "next/link";
import { Crown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { links } from "./nav-links";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-80 bg-white">
        <SheetHeader className="border-b border-zinc-200/60 px-6 py-5">
          <SheetTitle className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <Crown className="size-5 text-gold" aria-hidden="true" />
            Devora
          </SheetTitle>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {links.map((link) => (
            <SheetClose key={link.label} asChild>
              <Link
                href={link.href}
                className={
                  link.active
                    ? "rounded-lg px-3 py-2.5 text-[15px] font-medium text-gold-deep"
                    : "rounded-lg px-3 py-2.5 text-[15px] text-ink-secondary transition-colors hover:bg-zinc-50 hover:text-ink"
                }
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto border-t border-zinc-200/60 p-6">
          <SheetClose asChild>
            <Button variant="accent" className="w-full" asChild>
              <Link href="/#contact">Discuss your project</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
