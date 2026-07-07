import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-sand py-20">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-600">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Looks like this route doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-stone-600">
          The page you&apos;re looking for may have moved. Let&apos;s get you
          back on the road.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/enquiry" variant="outline">
            Book a Cab
          </Button>
        </div>
      </Container>
    </section>
  );
}
