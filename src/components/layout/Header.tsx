"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteInfo } from "@/data/nav";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileNav from "@/components/layout/MobileNav";
import { cn } from "@/lib/cn";

function LogoGlyph() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <path
        d="M3 20c3-1 5-4 6.5-7.5C11 9 13 4 17 4c2.5 0 3.5 2 3 4.5-1 5-6 9-13 10.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="20" cy="7" r="2" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-sand">
      <div className="hidden border-b border-sand/10 sm:block">
        <Container className="flex items-center justify-end gap-6 py-2 text-xs text-sand/70">
          <a
            href={siteInfo.phoneHref}
            className="flex items-center gap-1.5 hover:text-sand"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 3h3l1.5 5-2 1.5a11 11 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            {siteInfo.phoneDisplay}
          </a>
          <a
            href={siteInfo.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-sand"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8.5 8.8c.3 2.6 2.4 4.7 5 5l1-1.2 1.8.8v1.3c0 .6-.5 1-1 1-3.5 0-7.7-4.2-7.7-7.7 0-.5.4-1 1-1h1.3l.8 1.8-1.2 1Z"
                fill="currentColor"
              />
            </svg>
            WhatsApp
          </a>
        </Container>
      </div>

      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-ember-400">
          <LogoGlyph />
          <span className="font-display text-lg font-semibold leading-none text-sand">
            {siteInfo.name}
            <span className="ml-1.5 text-[0.7em] font-medium uppercase tracking-[0.2em] text-sand/60">
              {siteInfo.nameSuffix}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-ember-400"
                    : "text-sand/80 hover:text-sand",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/enquiry" variant="primary" className="hidden sm:inline-flex">
            Enquire Now
          </Button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="rounded-full p-2 text-sand hover:bg-sand/10 md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M3 6h16M3 11h16M3 16h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </Container>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
