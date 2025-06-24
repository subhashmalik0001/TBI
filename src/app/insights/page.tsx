"use client"; // Only if using in `/app` directory (Next.js App Router)

import React from "react";
import LeftSidebar from "@/components/insights/LeftSideBar";
import CenterFeaturedPost from "@/components/insights/CenterFeaturedPost";
import RightSidebar from "@/components/insights/RightSideBar";

const HomePage = () => {
  return (
    <main className="bg-white text-black min-h-screen py-6 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-6">
        {/* Left Sidebar */}
        <aside className="md:col-span-1 flex justify-start">
          <LeftSidebar />
        </aside>

        {/* Center Content */}
        <section className="md:col-span-2">
          <CenterFeaturedPost />
        </section>

        {/* Right Sidebar */}
        <aside className="md:col-span-1 flex justify-end">
          <RightSidebar />
        </aside>
      </div>
      
    </main>
  );
};

export default HomePage;
