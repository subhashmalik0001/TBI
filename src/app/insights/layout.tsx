import Navbar from "@/components/insights/Navbar1";
import type { ReactNode } from "react";

export default function InsightsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white ">
        {children}
      </div>
    </>
  );
}
