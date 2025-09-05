import { NavigationBar } from "../components/NavigationBar";
import { Footer } from "../components/Footer";
import { ParticlesToggle } from "../components/ParticlesToggle";
import { BlogHero } from "../components/BlogHero";
import { BlogGrid } from "../components/BlogGrid";
import { BlogCategories } from "../components/BlogCategories";
import { BlogNewsletter } from "../components/BlogNewsletter";

export const metadata = {
  title: "NexusHost Blog - Web Hosting Tips, Tutorials & Industry News",
  description:
    "Stay updated with the latest web hosting trends, tutorials, and industry insights. Expert tips to help you succeed online with NexusHost.",
  keywords:
    "web hosting blog, hosting tutorials, website tips, industry news, nexushost blog",
};

export default function BlogPage() {
  return (
    <>
      <NavigationBar />
      <main>
        <BlogHero />
        <BlogCategories />
        <BlogGrid />
        <BlogNewsletter />
      </main>
      <Footer />
      <ParticlesToggle />
    </>
  );
}
