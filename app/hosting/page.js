import { NavigationBar } from "../components/NavigationBar";
import { Footer } from "../components/Footer";
import { ParticlesToggle } from "../components/ParticlesToggle";
import { HostingHero } from "../components/HostingHero";
import { PricingPlans } from "../components/PricingPlans";
import { FeatureComparison } from "../components/FeatureComparison";
import { HostingFAQ } from "../components/HostingFAQ";

export const metadata = {
  title: "Web Hosting Plans & Pricing | NexusHost - Affordable & Reliable",
  description:
    "Choose from our range of web hosting plans. Shared hosting, VPS, dedicated servers, and cloud hosting with 99.9% uptime guarantee and 24/7 support.",
  keywords:
    "web hosting plans, hosting pricing, shared hosting, VPS hosting, dedicated servers, cloud hosting",
};

export default function HostingPage() {
  return (
    <>
      <NavigationBar />
      <main>
        <HostingHero />
        <PricingPlans />
        <FeatureComparison />
        <HostingFAQ />
      </main>
      <Footer />
      <ParticlesToggle />
    </>
  );
}
