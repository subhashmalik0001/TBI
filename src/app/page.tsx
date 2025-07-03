import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import ArticlesAndNewsletter from "@/components/ArticlesAndNewsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProcessSection />
      <ArticlesAndNewsletter />
    </main>
  );
}
