import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { popularRoutes } from "@/data/routes";

export default function PopularRoutes() {
  return (
    <section className="bg-sand py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Popular routes"
          title="Frequently booked, transparently priced"
          description="Starting fares for a one-way sedan trip. Exact pricing depends on vehicle type and date."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularRoutes.map((route, i) => (
            <Reveal key={`${route.from}-${route.to}`} delay={i * 50}>
              <Link
                href={`/enquiry?service=oneway&from=${encodeURIComponent(route.from)}&to=${encodeURIComponent(route.to)}`}
                className="group flex items-center justify-between rounded-2xl border border-ink/10 bg-white/40 p-5 transition-colors hover:border-ember-400"
              >
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {route.from} <span className="text-stone-400">→</span> {route.to}
                  </p>
                  <p className="mt-1 text-xs text-stone-500">{route.distanceKm} km approx.</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-stone-400">Starting</p>
                  <p className="font-display text-lg font-semibold text-ember-600">
                    ₹{route.startingFare.toLocaleString("en-IN")}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
