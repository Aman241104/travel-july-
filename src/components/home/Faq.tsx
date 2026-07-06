"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/cn";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-sand-dim py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="FAQs" title="Common questions, answered upfront" />

        <div className="mt-10 flex max-w-3xl flex-col divide-y divide-ink/10 border-t border-b border-ink/10">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-ink sm:text-base">
                    {faq.question}
                  </span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className={cn(
                      "h-4 w-4 shrink-0 text-ember-600 transition-transform duration-200 motion-reduce:transition-none",
                      open && "rotate-45",
                    )}
                    aria-hidden
                  >
                    <path
                      d="M10 3v14M3 10h14"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                {open && (
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-stone-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
