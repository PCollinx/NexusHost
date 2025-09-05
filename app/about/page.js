import { NavigationBar } from "../components/NavigationBar";
import { Footer } from "../components/Footer";
import { ParticlesToggle } from "../components/ParticlesToggle";
import { AboutHero } from "../components/AboutHero";
import { TeamSection } from "../components/TeamSection";
import { CompanyStats } from "../components/CompanyStats";
import { MissionVision } from "../components/MissionVision";

export const metadata = {
  title: "About NexusHost - Leading Web Hosting Provider | Our Story",
  description:
    "Learn about NexusHost's journey, mission, and team. Discover why we're the trusted choice for web hosting solutions with over a decade of experience.",
  keywords:
    "about nexushost, web hosting company, hosting provider history, team, mission, vision",
};

export default function AboutPage() {
  return (
    <>
      <NavigationBar />
      <main>
        <AboutHero />
        <CompanyStats />
        <MissionVision />
        <TeamSection />
      </main>
      <Footer />
      <ParticlesToggle />
    </>
  );
}
