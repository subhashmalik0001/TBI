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
      <div className="mx-auto sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl px-2 sm:px-4 md:px-8 lg:px-12">
        <Hero />
        <ProcessSection />
        <Portfolio />
        <FounderStories />
        <FAQ />
      </div>
    </main>
  );
}
