import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ServiceNavChips from "@/components/services/ServiceNavChips";
import ServiceSection from "@/components/services/ServiceSection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Kestrel Voyages",
  description:
    "Outstation cabs, holiday packages, hotel bookings, flight assistance and visa support — all handled by one travel desk.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink py-16 text-sand sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-400">
            Services
          </p>
          <h1 className="mt-4 max-w-xl font-display text-3xl font-semibold sm:text-4xl">
            Everything between &ldquo;let&apos;s go&rdquo; and getting there
          </h1>
          <p className="mt-4 max-w-lg text-sand/70">
            Book a single cab ride or hand us the whole trip. Pick a category
            below to see what&apos;s included.
          </p>
        </Container>
      </section>

      <ServiceNavChips />

      {services.map((service, i) => (
        <ServiceSection key={service.slug} service={service} index={i} />
      ))}
    </>
  );
}
