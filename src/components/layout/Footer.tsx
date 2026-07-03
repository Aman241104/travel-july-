"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { navLinks, siteInfo } from "@/data/nav";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  }

  return (
    <footer className="bg-ink text-sand">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-lg font-semibold">
            {siteInfo.name}
            <span className="ml-1.5 text-[0.7em] font-medium uppercase tracking-[0.2em] text-sand/60">
              {siteInfo.nameSuffix}
            </span>
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-sand/60">
            {siteInfo.tagline} Outstation cabs and curated getaways, backed
            by verified drivers and vetted travel partners.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-sand/50">
            Quick Links
          </h3>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-sand/70 hover:text-ember-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-sand/50">
            Services
          </h3>
          <ul className="mt-4 flex flex-col gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-sm text-sand/70 hover:text-ember-400"
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-sand/50">
            Get in touch
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-sand/70">
            <li>
              <a href={siteInfo.phoneHref} className="hover:text-ember-400">
                {siteInfo.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteInfo.email}`} className="hover:text-ember-400">
                {siteInfo.email}
              </a>
            </li>
            <li className="text-sand/50">{siteInfo.city}</li>
          </ul>

          <form onSubmit={handleSubscribe} className="mt-5">
            {subscribed ? (
              <p className="text-sm text-ember-400">You&apos;re on the list.</p>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full min-w-0 rounded-full border border-sand/15 bg-transparent px-4 py-2 text-sm text-sand placeholder:text-sand/40 focus:border-ember-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-ember-600 px-4 py-2 text-sm font-semibold text-sand hover:bg-ember-400"
                >
                  Join
                </button>
              </div>
            )}
          </form>
        </div>
      </Container>

      <div className="border-t border-sand/10 py-5">
        <Container>
          <p className="text-xs text-sand/40">
            © {new Date().getFullYear()} {siteInfo.name} {siteInfo.nameSuffix}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
