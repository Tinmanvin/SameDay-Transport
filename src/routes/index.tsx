import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ServiceAreas } from "@/components/sections/service-areas";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SameDay Transport — Fast, careful van transport. Book today." },
      {
        name: "description",
        content:
          "Same-day collections, deliveries and small moves across Greater Manchester. Real people, real vans, fair upfront pricing. Get a fast quote in minutes.",
      },
      { property: "og:title", content: "SameDay Transport — Move it today." },
      {
        property: "og:description",
        content: "Fast, reliable van transport for collections, deliveries and urgent moves. Book in minutes.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-cream text-ink">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <WhyUs />
      <HowItWorks />
      <ServiceAreas />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
