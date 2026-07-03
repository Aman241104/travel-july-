import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ServiceIcon from "@/components/ui/ServiceIcon";
import type { Service } from "@/data/services";

export default function ServiceSection({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <section
      id={service.slug}
      className={
        index % 2 === 0 ? "bg-sand py-16 sm:py-20" : "bg-sand-dim py-16 sm:py-20"
      }
    >
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ember-600/10 text-ember-600">
                <ServiceIcon icon={service.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">
                {service.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-600">
                {service.description}
              </p>
              <Link
                href={`/enquiry?service=${service.slug}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ember-600 hover:text-ember-400"
              >
                Enquire about {service.shortTitle} →
              </Link>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white/50 p-4 text-sm text-ink/80"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-ember-600"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M4 10.5l3.5 3.5L16 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
