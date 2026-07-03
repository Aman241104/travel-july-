"use client";

import { services } from "@/data/services";

export default function ServiceNavChips() {
  return (
    <div className="sticky top-16 z-30 border-b border-ink/10 bg-sand/90 backdrop-blur sm:top-24">
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 sm:px-8">
        {services.map((service) => (
          <a
            key={service.slug}
            href={`#${service.slug}`}
            className="shrink-0 rounded-full border border-ink/10 px-4 py-1.5 text-sm font-medium text-stone-600 transition-colors hover:border-ember-600 hover:text-ember-600"
          >
            {service.shortTitle}
          </a>
        ))}
      </div>
    </div>
  );
}
