'use client';
export const dynamic = "force-dynamic";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import FounderStories from "@/components/FounderStories";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import Portfolio from "@/components/Portfolio";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/programs/Accordion"

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto px-4">
        <Hero />
        <ProcessSection />
        <Portfolio />
        <FounderStories />
        <FAQ />
      </div>
    </main>
  );
}
