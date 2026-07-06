import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const points: { title: string; description: string; path: string }[] = [
  {
    title: "Transparent Pricing",
    description: "One quoted fare, shown before you book — no hidden tolls or last-minute add-ons.",
    path: "M12 3v18M8 7.5c0-1.4 1.8-2.5 4-2.5s4 1.1 4 2.5-1.8 2.5-4 2.5-4 1.1-4 2.5 1.8 2.5 4 2.5 4-1.1 4-2.5",
  },
  {
    title: "Verified Drivers",
    description: "Every driver is ID-checked and background-verified before their first trip.",
    path: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8c0-3.3 3.1-6 7-6s7 2.7 7 6",
  },
  {
    title: "GPS-Tracked Rides",
    description: "Share your live trip link with family — every ride is tracked start to finish.",
    path: "M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Zm0-8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  },
  {
    title: "Wide Vehicle Range",
    description: "Hatchbacks to tempo travellers — a fit for solo trips and full group outings.",
    path: "M4 16l1.5-5A2 2 0 0 1 7.4 9.5h9.2a2 2 0 0 1 1.9 1.4L20 16M4 16v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3M4 16h16",
  },
  {
    title: "24/7 Support",
    description: "A real person on WhatsApp or phone, day or night, if your plans change.",
    path: "M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z",
  },
  {
    title: "Flexible Payments",
    description: "UPI, card or pay-on-arrival — pick whatever's easiest at the end of the ride.",
    path: "M3 8h18M3 8v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8M3 8V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2M7 15h4",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ink py-20 text-sand sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Akshar Travels"
          title="Booking a cab shouldn't feel like a gamble"
          tone="dark"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-sand/10 bg-sand/5 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember-600/15 text-ember-400">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                    <path
                      d={point.path}
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mt-5 text-base font-semibold text-sand">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/60">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
