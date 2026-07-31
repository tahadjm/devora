import Link from "next/link";
import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "/", active: true },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-5 z-50 px-4">
      <header className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between rounded-full border border-zinc-200/60 bg-white/72 px-6 shadow-[0_8px_20px_rgba(0,0,0,0.04)] backdrop-blur-lg md:px-10">
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
        <Button variant="accent" size="sm" className="h-9 px-5" asChild>
          <Link href="#contact">Start Project</Link>
        </Button>
      </header>
    </div>
  );
}
