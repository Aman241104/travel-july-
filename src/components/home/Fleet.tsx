import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { fleet } from "@/data/fleet";

export default function Fleet() {
  return (
    <section className="bg-sand-dim py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our fleet"
          title="A vehicle for every group size"
          description="Every car is maintenance-checked and insured before it's added to the fleet."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((vehicle, i) => (
            <Reveal key={vehicle.slug} delay={i * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white/50 p-6">
                <svg
                  viewBox="0 0 64 32"
                  fill="none"
                  className="h-10 w-16 text-ember-600"
                  aria-hidden
                >
                  <path
                    d="M4 24l3-10a4 4 0 0 1 3.8-2.8h34.4A4 4 0 0 1 49 14l3 10M4 24v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2h28v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4M4 24h48M11 17.5h6M47 17.5h6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="mt-5 text-base font-semibold text-ink">
                  {vehicle.name}
                </h3>
                <dl className="mt-3 flex flex-col gap-1.5 text-sm text-stone-600">
                  <div className="flex justify-between gap-2">
                    <dt className="text-stone-400">Seats</dt>
                    <dd>{vehicle.seats}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-stone-400">Luggage</dt>
                    <dd>{vehicle.luggage}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {vehicle.bestFor}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
