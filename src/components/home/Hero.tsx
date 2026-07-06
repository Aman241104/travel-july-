import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BookingWidget from "@/components/home/BookingWidget";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-16 text-sand sm:pb-24 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[32rem] w-[32rem] rounded-full bg-ember-600/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-ember-800/20 blur-3xl"
      />

      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay"
      >
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <svg
        aria-hidden
        viewBox="0 0 500 200"
        className="pointer-events-none absolute inset-x-0 bottom-10 mx-auto hidden w-[36rem] opacity-30 sm:block"
      >
        <path
          d="M10 150 C 120 150, 120 60, 220 60 S 340 150, 420 150 S 480 90, 490 40"
          fill="none"
          stroke="var(--color-ember-400)"
          strokeWidth="2"
          strokeDasharray="6 8"
          strokeLinecap="round"
          pathLength={420}
          style={{
            strokeDasharray: 420,
            animation: "route-draw 2.4s ease-out forwards",
          }}
        />
      </svg>

      <Container className="relative">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-ember-400">
            Outstation cabs, booked your way
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Your city, any city — one trusted cab away.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-sand/70 sm:text-lg">
            One-way, round trip or a few hours in town — book a verified
            outstation cab in minutes. Transparent per-km pricing, no surge,
            no guesswork.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/enquiry" variant="primary">
              Book a Cab
            </Button>
            <Button href="/services" variant="outline-dark">
              Explore Trip Types
            </Button>
          </div>
        </div>

        <div className="relative z-10 mt-14">
          <BookingWidget />
        </div>
      </Container>
    </section>
  );
}
