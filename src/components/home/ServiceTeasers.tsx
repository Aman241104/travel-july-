import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";
import ServiceIcon from "@/components/ui/ServiceIcon";

export default function ServiceTeasers() {
  return (
    <section className="bg-sand py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Trip types"
          title="Whatever the trip, there's a fare for it"
          description="One-way, round trip, hourly rentals or airport runs — pick what fits and book in minutes."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember-400 hover:shadow-lg hover:shadow-ember-600/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember-600/10 text-ember-600">
                  <ServiceIcon icon={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {service.blurb}
                </p>
                <span className="mt-5 text-sm font-semibold text-ember-600 group-hover:text-ember-400">
                  Explore →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
