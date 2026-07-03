import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-sand py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Trusted by travellers"
          title="What people say after the trip, not before"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-white/40 p-6 transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <blockquote className="text-sm leading-relaxed text-ink/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-ink">{t.name}</span>
                  <span className="block text-stone-600">{t.location}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
