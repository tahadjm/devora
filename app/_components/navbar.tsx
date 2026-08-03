import Link from "next/link";
import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

import MobileNav from "./mobile-nav";
import { links } from "./nav-links";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-5 z-50 px-4">
      <header className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between rounded-full border border-zinc-200/60 bg-white/72 px-5 shadow-[0_8px_20px_rgba(0,0,0,0.04)] backdrop-blur-lg md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Crown className="size-6 text-gold" aria-hidden />
          <span className="font-display text-xl font-semibold text-ink">Devora</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? "text-sm font-medium text-gold-deep"
                  : "text-sm text-ink-secondary transition-colors hover:text-ink"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button
            variant="accent"
            size="sm"
            className="hidden h-9 px-5 sm:inline-flex"
            asChild
          >
            <Link href="/book-a-call">Discuss your project</Link>
          </Button>
          <MobileNav />
        </div>
      </header>
    </div>
  );
}
