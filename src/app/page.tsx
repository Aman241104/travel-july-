import Hero from "@/components/home/Hero";
import ServiceTeasers from "@/components/home/ServiceTeasers";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Fleet from "@/components/home/Fleet";
import PopularRoutes from "@/components/home/PopularRoutes";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import StatsBand from "@/components/home/StatsBand";
import Faq from "@/components/home/Faq";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceTeasers />
      <WhyChooseUs />
      <Fleet />
      <PopularRoutes />
      <HowItWorks />
      <Testimonials />
      <StatsBand />
      <Faq />
      <CtaBanner />
    </>
  );
}
