import Hero from "@/components/hero/Hero";
import CookiesShowcase from "@/components/sections/CookiesShowcase";
import BrowniesShowcase from "@/components/sections/BrowniesShowcase";
import BrandStory from "@/components/sections/BrandStory";
import Gallery from "@/components/sections/Gallery";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full relative bg-cream">
      <Hero />
      <BrandStory />
      <CookiesShowcase />
      <BrowniesShowcase />
      <Gallery />
      <InstagramFeed />

      <Footer />
    </main>
  );
}
