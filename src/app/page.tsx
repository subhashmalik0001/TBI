import Footer from "@/components/Footer";
import FounderStories from "@/components/FounderStories";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto px-4">
        <Hero />
        <ProcessSection />
        <Portfolio />
        <FounderStories />
      </div>
    </main>
  );
}
