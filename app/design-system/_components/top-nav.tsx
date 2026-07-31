import Link from "next/link";
import { CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = ["Home", "Services", "Projects", "Pricing", "Blog", "Contact"];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-10 h-[72px] border-b border-zinc-200/60 bg-white/72 backdrop-blur-lg">
      <div className="flex h-full items-center justify-between px-12">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
            <CircleX className="size-[18px]" aria-hidden />
          </span>
          <span className="font-display text-lg font-semibold text-ink">Devora</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-sm text-ink-secondary transition-colors hover:text-ink"
            >
              {link}
            </Link>
          ))}
        </nav>
        <Button size="sm" className="h-[34px] px-4 text-sm">
          Start Project
        </Button>
      </div>
    </header>
  );
}
