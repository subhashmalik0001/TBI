import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import ArticlesAndNewsletter from "@/components/ArticlesAndNewsletter";

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto px-4">
        <Hero />
        <ProcessSection />
        <ArticlesAndNewsletter />
      </div>
    </main>
  );
}
