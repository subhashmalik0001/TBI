'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function MobileHero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 800;
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blackText = "We believe that to maximize retimes, ";
  const greyText = "you need a fundamental, first-principles understanding of every asset in your portfolio. That's why we focus on providing granular-level visibility and insight, so you can develop winning strategies for every single investment.";
  const greyChars = greyText.split("");

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Hero Section */}
      <div className="relative h-[250px] w-full mx-auto overflow-hidden rounded-lg mt-2 px-2 shadow-lg border-b-2 border-r-2 border-gray-400">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute left-1/2 bottom-2 -translate-x-1/2 w-full px-2">
          <div className="text-white">
            <div className="absolute left-[-0.5rem] top-[-0rem] bottom-[-0.1rem] w-[0.03rem] bg-white"></div>
            <div className="text-2xl leading-tight font-['SF Pro',__sans-serif]">
              <div>Build</div>
              <div>Connect</div>
              <div>Grow</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="px-2 pt-2 pb-3">
        <div className="space-y-2">
          <div className="max-w-5xl w-full mx-auto">
            <p className="text-xs leading-relaxed font-light text-center px-1">
              <span className="text-black">{blackText}</span>
              {greyChars.map((char, index) => {
                const charProgress = index / greyChars.length;
                const shouldBeBlack = scrollProgress > charProgress;
                return (
                  <span
                    key={index}
                    className={`transition-colors duration-300 ease-out ${
                      shouldBeBlack ? "text-black" : "text-gray-400"
                    }`}
                    style={{ transitionDelay: `${index * 2}ms` }}
                  >
                    {char}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Grid Section */}
      <div className="w-full border-t border-b border-gray-300 min-h-[100px] relative pt-0">
        <div className="px-2 py-2 w-full col-span-2">
          <div className="mb-2">
            <h2 className="text-lg font-bold text-black leading-tight">
              Revolutionizing the Venture
              <br />
              Capital Ecosystem!
            </h2>
            <div className="fixed left-0 w-screen border-t border-gray-300 min-h-[40px] pt-1"></div>
          </div>
          <div className="w-full border-t border-gray-300 min-h-[40px] relative pt-1"></div>

          <div className="grid gap-4 items-center">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-start gap-2">
                <div className="w-1 h-8 bg-red-500 flex-shrink-0 mt-1"></div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  We help founders at their earliest stages regardless of their age.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-6 bg-red-500 flex-shrink-0 mt-1"></div>
                <p className="text-xs text-gray-700 leading-relaxed">We give startups a huge fundraising advantage.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-6 bg-red-500 flex-shrink-0 mt-1"></div>
                <p className="text-xs text-gray-700 leading-relaxed">We improve the success rate of our startups.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-8 bg-red-500 flex-shrink-0 mt-1"></div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Our companies have a track record of becoming billion dollar companies.
                </p>
              </div>
            </div>
            <div className="relative h-[150px] w-full overflow-hidden rounded-lg">
              <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpl-YRnxYXVx78kFqnXIi9I5b5s3bmQZXlg_ae8zgnoCXJAa837sfpK7eI2xZPZclrXAr2mKs1B1gXlOrHZqvQo4naWenEKgnrPeq8-NBQ1BZBqgoQk2vx4lAglHHgE_SpSnMwhBFiCdH6k6KRiIiBcHF66VriJF_vQXOHTOa-3tHGdVzNLZWyEBqwxozw/s2048/473544912_1018141797016754_6719124790330598010_n.jpg" alt="Community of innovative companies" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-end justify-end p-2 pb-4">
                <h3 className="text-white text-xs font-bold text-right leading-tight drop-shadow">
                  <div className="absolute left-[4rem] top-[-0rem] bottom-[-0rem] w-0.5 bg-white"></div>
                  Join A Community Of
                  <br />
                  Smart & Innovative
                  <br />
                  Companies
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 