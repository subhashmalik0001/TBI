'use client';

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const services = [
  {
    name: "Mentoring",
    image: "https://media.licdn.com/dms/image/v2/D5605AQFF8a6PY2Kltw/feedshare-thumbnail_720_1280/B56ZZhzaO5HUAw-/0/1745397591544?e=2147483647&v=beta&t=Ml4Y3aWM9rqdPLCPjxL1NJFOmO1wcO7OYN4QtMCI4dE",
    description: "Personalized guidance and expert mentorship to help you grow your startup.",
  },
  {
    name: "Coworking Space",
    image: "https://pbs.twimg.com/media/Gre7cpwbwAAPfiy?format=jpg&name=4096x4096",
    description: "Collaborative and creative coworking spaces designed for productivity.",
  },
  {
    name: "Creative Studio",
    image: "https://imageio.forbes.com/specials-images/imageserve/60638bbdbe8ac107c34ae7fc/Developers-Working-From-Home-Office-/960x0.jpg?height=473&width=711&fit=bounds",
    description: "A studio for creative minds to bring their ideas to life with the latest tools.",
  },
  {
    name: "Product Studio",
    image: "https://images.ctfassets.net/y4cma050c2bp/782rVF82Aj4LLJ2VT2BSch/10a4728e9912371d282a000af8f89be6/2.jpg",
    description: "From concept to launch, we help you build and refine your product.",
  },
  {
    name: "X | Labs",
    image: "https://media.licdn.com/dms/image/v2/D5605AQFF8a6PY2Kltw/feedshare-thumbnail_720_1280/B56ZZhzaO5HUAw-/0/1745397591544?e=2147483647&v=beta&t=Ml4Y3aWM9rqdPLCPjxL1NJFOmO1wcO7OYN4QtMCI4dE",
    description: "Experimental labs for innovation and breakthrough solutions.",
  },
  {
    name: "House Renovation",
    image: "https://pbs.twimg.com/media/Gre7cpwbwAAPfiy?format=jpg&name=4096x4096",
    description: "Transforming spaces with a perfect blend of aesthetics and functionality.",
  },
];

export default function ResponsiveHero() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical mobile breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

  // Mobile-specific render function
  const renderMobileView = () => (
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

  // Desktop-specific render function
  const renderDesktopView = () => (
    <div className="min-h-screen bg-white">
      {/* Desktop Hero Section */}
      <div className="relative h-[550px] w-full max-w-[1400px] mx-auto overflow-hidden rounded-3xl mt-32 px-32 shadow-2xl border-b-8 border-r-8 border-gray-400">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute left-16 bottom-8 w-full px-2">
          <div className="text-white">
            <div className="absolute left-[-2rem] top-[-0rem] bottom-[-0.1rem] w-[0.1rem] bg-white"></div>
            <div className="text-7xl leading-tight font-['SF Pro',__sans-serif]">
              <div>Build</div>
              <div>Connect</div>
              <div>Grow</div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Content */}
      <div className="px-16 pt-4 pb-6">
        <div className="flex flex-row gap-8 items-start justify-end">
          <div className="space-y-5 w-[75rem]">
            <div className="max-w-5xl w-full mx-auto">
              <p className="text-3xl leading-relaxed font-light text-center">
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
      </div>

      {/* Desktop Grid Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-t border-b border-gray-300 min-h-[130px] relative pt-0">
        <div className="px-16 py-5 w-full col-span-2">
          <div className="mb-7">
            <h2 className="text-5xl font-bold text-black leading-tight">
              Revolutionizing the Venture
              <br />
              Capital Ecosystem!
            </h2>
            <div className="fixed left-0 w-screen border-t border-gray-300 min-h-[40px] pt-1"></div>
          </div>
          <div className="w-340 border-t border-gray-300 min-h-[40px] relative pt-1"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-1 h-20 bg-red-500 flex-shrink-0 mt-1"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We help founders at their earliest stages regardless of their age.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-16 bg-red-500 flex-shrink-0 mt-1"></div>
                <p className="text-lg text-gray-700 leading-relaxed">We give startups a huge fundraising advantage.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-16 bg-red-500 flex-shrink-0 mt-1"></div>
                <p className="text-lg text-gray-700 leading-relaxed">We improve the success rate of our startups.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-20 bg-red-500 flex-shrink-0 mt-1"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our companies have a track record of becoming billion dollar companies.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
              <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpl-YRnxYXVx78kFqnXIi9I5b5s3bmQZXlg_ae8zgnoCXJAa837sfpK7eI2xZPZclrXAr2mKs1B1gXlOrHZqvQo4naWenEKgnrPeq8-NBQ1BZBqgoQk2vx4lAglHHgE_SpSnMwhBFiCdH6k6KRiIiBcHF66VriJF_vQXOHTOa-3tHGdVzNLZWyEBqwxozw/s2048/473544912_1018141797016754_6719124790330598010_n.jpg" alt="Community of innovative companies" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-end justify-end p-6 pb-10">
                <h3 className="text-white text-3xl font-bold text-right leading-tight drop-shadow">
                  <div className="absolute left-[19.5rem] top-[-0rem] bottom-[-0rem] w-1 bg-white"></div>
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

  // Return the appropriate view based on screen size
  return isMobile ? renderMobileView() : renderDesktopView();
} 