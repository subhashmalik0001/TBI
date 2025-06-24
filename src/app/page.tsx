import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import StackedCarouselSection from "@/components/StackedCarouselSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <StackedCarouselSection />
      <ProcessSection />
    </main>
  );
}
