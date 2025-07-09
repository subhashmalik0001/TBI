import Navbar from "@/components/insights/Navbar1";
import type { ReactNode } from "react";

export default function InsightsLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <div className="h-20 absolute top-0 w-full bg-white">
    </div>
    <div className="">
        {children}
    </div>
    </>
  );
}
