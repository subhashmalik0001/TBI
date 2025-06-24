import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import StackedCarouselSection from "@/components/StackedCarouselSection";
import { Button } from "@/components/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/Accordion";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StackedCarouselSection />
      <ProcessSection />
      <Footer />
      
    </main>
  );
}
