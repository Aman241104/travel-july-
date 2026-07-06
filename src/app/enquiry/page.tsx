import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import EnquiryForm from "@/components/enquiry/EnquiryForm";
import ContactPanel from "@/components/enquiry/ContactPanel";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Enquiry — Akshar Travels",
  description:
    "Tell us about your trip and our team will get back to you within 24 hours.",
};

type SearchParams = Promise<{
  service?: string;
  from?: string;
  to?: string;
  date?: string;
}>;

export default async function EnquiryPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const validService = services.some((s) => s.slug === params.service)
    ? params.service
    : "";

  const routeDetails =
    params.from || params.to
      ? `Route: ${params.from ?? "?"} → ${params.to ?? "?"}${
          params.date ? ` on ${params.date}` : ""
        }`
      : "";

  return (
    <section className="bg-sand py-16 sm:py-20">
      <Container>
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-600">
            Enquiry
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Let&apos;s book your cab
          </h1>
          <p className="mt-4 text-stone-600">
            Fill in a few details and our team will follow up within 24
            hours with a real quote — not a form-letter reply.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <EnquiryForm defaultService={validService} defaultDetails={routeDetails} />
          <ContactPanel />
        </div>
      </Container>
    </section>
  );
}
