import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section className="bg-ember-600 py-16 text-sand">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Ready for your next trip?
          </h2>
          <p className="mt-2 text-sand/85">
            Tell us where you&apos;re headed — we&apos;ll take it from there.
          </p>
        </div>
        <Button href="/enquiry" variant="outline-dark" className="shrink-0 border-sand text-sand hover:border-ink hover:bg-ink hover:text-sand">
          Start an Enquiry
        </Button>
      </Container>
    </section>
  );
}
