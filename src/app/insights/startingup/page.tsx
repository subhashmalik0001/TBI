import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const StartingUp = () => {
  return (
    <section className="bg-white text-black py-8 px-6 md:px-12 relative overflow-hidden">
      {/* Background Confetti Dots */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,_#ffffff20_1px,_transparent_1px)] bg-[size:16px_16px] opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-black text-white  text-sm font-medium mb-6">
            🎉 It's a new era!
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Over{" "}
            <span className="inline-flex bg-red-700 text-white px-2 py-1 rounded-md font-mono text-3xl md:text-5xl tracking-widest shadow">
              289,256
            </span>{" "}
            indie hackers <br />
            are turning their ideas into income.
          </h1>

          <div className="flex items-center gap-4 mt-6">
            <button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:opacity-90 text-black text-lg font-semibold px-6 py-2 rounded">
              Get Started
            </button>
            <span className="text-gray-700 text-sm md:text-base">
              or learn more below ↘
            </span>
          </div>
        </div>

        {/* Right Stacked Cards */}
        <div className="relative w-full md:w-auto flex flex-col items-end mt-12 md:mt-0 space-y-0">
          <div className="relative bg-[#E23B49] text-black font-semibold p-4 w-64 rounded-md shadow-lg transform rotate-[-6deg] z-30 mb-[-1.5rem]">
            <p>Building a Side Project Without Quitting Your Day Job</p>
            <FaExternalLinkAlt className="absolute top-2 right-2 text-sm" />
          </div>

          <div className="relative bg-[#FDBB2D] text-[#0B1F36] font-semibold p-4 w-64 rounded-md shadow-lg transform rotate-[-2deg] z-20 mb-[-1.5rem]">
            <p>How I Went From Indie Lurker to Indie Hacker</p>
            <FaExternalLinkAlt className="absolute top-2 right-2 text-sm" />
          </div>

          <div className="relative bg-[#2E8CEB] text-black font-semibold p-4 w-64 rounded-md shadow-lg transform rotate-[3deg] z-10">
            <p>Bootstrapping My Side Project to $20,000/Month</p>
            <FaExternalLinkAlt className="absolute top-2 right-2 text-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartingUp;
