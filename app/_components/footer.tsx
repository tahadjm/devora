import Link from "next/link";
import { Crown, AtSign, MessageCircle, Code, Camera } from "lucide-react";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const columns = [
  { heading: "Company", links: ["About", "Careers", "Blog"] },
  { heading: "Services", links: ["Web", "Mobile", "Custom"] },
  { heading: "Support", links: ["Contact", "FAQ", "Privacy"] },
];

const socials = [
  { icon: AtSign, label: "Twitter" },
  { icon: MessageCircle, label: "LinkedIn" },
  { icon: Code, label: "GitHub" },
  { icon: Camera, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white py-16">
      <MaxWidthWrapper className="max-w-[1440px]">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <Crown className="size-6 text-gold" aria-hidden />
              <span className="font-display text-xl font-semibold text-ink">
                Devora
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-ink-secondary">
              Built with passion. Powered by code. Custom luxury software
              development crafted for global brands.
            </p>
            <div className="mt-8 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-zinc-200 text-ink-secondary transition-colors hover:border-gold hover:text-gold-deep"
                >
                  <social.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-16">
            {columns.map((column) => (
              <div key={column.heading}>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                  {column.heading}
                </p>
                <ul className="mt-5 flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-ink-secondary transition-colors hover:text-ink"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-zinc-200/70 pt-8 text-sm text-ink-muted md:flex-row">
          <p>© 2025 Devora. All rights reserved.</p>
          <p>Premium Software Development Partner</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
