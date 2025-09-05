import { NavigationBar } from "../components/NavigationBar";
import { Footer } from "../components/Footer";
import { ParticlesToggle } from "../components/ParticlesToggle";
import { ContactHero } from "../components/ContactHero";
import { ContactSection } from "../components/ContactSection";
import { ContactInfo } from "../components/ContactInfo";
import { ContactMap } from "../components/ContactMap";

export const metadata = {
  title:
    "Contact NexusHost - Get Expert Hosting Support | 24/7 Customer Service",
  description:
    "Get in touch with NexusHost's expert support team. 24/7 customer service, live chat, phone support, and email assistance for all your hosting needs.",
  keywords:
    "contact nexushost, customer support, hosting help, technical support, live chat",
};

export default function ContactPage() {
  return (
    <>
      <NavigationBar />
      <main>
        <ContactHero />
        <ContactSection />
        <ContactInfo />
        <ContactMap />
      </main>
      <Footer />
      <ParticlesToggle />
    </>
  );
}
