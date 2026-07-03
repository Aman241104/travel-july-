"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteInfo } from "@/data/nav";
import { cn } from "@/lib/cn";

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-ink/60 transition-opacity duration-300 motion-reduce:transition-none",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col gap-8 bg-ink px-6 py-6 shadow-xl transition-transform duration-300 ease-out motion-reduce:transition-none",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-sand">
            {siteInfo.name} <span className="text-ember-400">{siteInfo.nameSuffix}</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-2 text-sand/80 hover:bg-sand/10 hover:text-sand"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                  active
                    ? "bg-sand/10 text-ember-400"
                    : "text-sand/85 hover:bg-sand/5 hover:text-sand",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-3 border-t border-sand/10 pt-6">
          <a
            href={siteInfo.phoneHref}
            className="text-sm font-medium text-sand/80 hover:text-sand"
          >
            Call {siteInfo.phoneDisplay}
          </a>
          <a
            href={siteInfo.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-sand/80 hover:text-sand"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
