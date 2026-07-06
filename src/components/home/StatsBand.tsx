import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/data/stats";

export default function StatsBand() {
  return (
    <section className="bg-ink-soft py-20 text-sand sm:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl font-semibold text-ember-400 sm:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? stat.decimals : 0}
                  />
                </p>
                <p className="mt-2 text-sm text-sand/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
