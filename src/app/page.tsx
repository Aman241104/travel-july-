import Hero from "@/components/home/Hero";
import StatsBand from "@/components/home/StatsBand";
import ServiceTeasers from "@/components/home/ServiceTeasers";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ServiceTeasers />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
