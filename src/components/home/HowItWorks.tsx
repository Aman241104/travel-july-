import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    title: "Share your trip",
    description: "Pickup, drop and dates — takes under a minute.",
  },
  {
    title: "Pick your vehicle",
    description: "Hatchback, sedan, SUV or tempo traveller, matched to your group size.",
  },
  {
    title: "Confirm & pay your way",
    description: "Card, UPI or pay-on-arrival — whatever's easiest for you.",
  },
  {
    title: "24/7 support on the road",
    description: "A real person on WhatsApp if plans change mid-trip.",
  },
];

const badges = [
  "GPS-tracked vehicles",
  "ID-verified drivers",
  "Transparent per-km pricing",
  "24/7 support line",
];

export default function HowItWorks() {
  return (
    <section className="bg-sand-dim py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Four steps, no back-and-forth"
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 70}>
              <div>
                <span className="font-display text-3xl font-semibold text-ember-600/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <div className="mt-14 flex flex-wrap gap-3 border-t border-ink/10 pt-8">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-ink/10 bg-white/60 px-4 py-2 text-xs font-medium text-stone-600"
              >
                {badge}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
