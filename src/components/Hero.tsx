'use client';

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

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

export default function Hero() {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const servicesContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    let accumulatedScroll = 0;
    const maxAnimationScroll = 800;

    function lockScroll(e: Event) {
      if (!isAnimationComplete) {
        e.preventDefault();
        window.scrollTo(0, 0);
        accumulatedScroll += Math.abs((e as WheelEvent).deltaY || 1);
        const progress = Math.min(accumulatedScroll / maxAnimationScroll, 1);
        setScrollProgress(progress);
        if (progress >= 1) setIsAnimationComplete(true);
      }
    }

    function lockWheel(e: WheelEvent) {
      if (!isAnimationComplete) {
        e.preventDefault();
        accumulatedScroll += Math.abs(e.deltaY);
        const progress = Math.min(accumulatedScroll / maxAnimationScroll, 1);
        setScrollProgress(progress);
        if (progress >= 1) setIsAnimationComplete(true);
      }
    }

    if (!isAnimationComplete) {
      window.addEventListener("wheel", lockWheel, { passive: false });
      window.addEventListener("scroll", lockScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", lockWheel);
      window.removeEventListener("scroll", lockScroll);
    };
  }, [isAnimationComplete]);

  useEffect(() => {
    if (!isAnimationComplete) return;
    function handleScroll() {
      if (!scrollSectionRef.current) return;
    
      const container = scrollSectionRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const containerTop = rect.top + scrollY;
      const containerHeight = container.offsetHeight;
      const start = containerTop;
      const end = containerTop + containerHeight;
    
      if (scrollY >= start && scrollY < end) {
        setIsSticky(true);
    
        // ✅ Updated scroll logic for new structure
        const scrolled = scrollY - start;
        const index = Math.floor(scrolled / window.innerHeight);
    
        setActiveIndex(Math.min(index, services.length - 1));
      } else {
        setIsSticky(false);
        if (scrollY < start) {
          setActiveIndex(0);
        } else {
          setActiveIndex(services.length - 1);
        }
      }
    }
    
    
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAnimationComplete]);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!scrollSectionRef.current) return;
    scrollSectionRef.current.style.height = `${window.innerHeight * services.length}px`;
  }, [services.length]);

  useEffect(() => {
    if (!scrollSectionRef.current) return;
    scrollSectionRef.current.style.height = `${window.innerHeight * services.length}px`;
  }, [isAnimationComplete, services.length]);

  const blackText = "We  "
  const greyText =
    "believe that to maximize retimes, you need a fundamental, first-principles understanding of every asset in your portfolio. That's why we focus on providing granular-level visibility and insight, so you can develop winning strategies for every single investment."

  // Split grey text into individual characters for letter-by-letter animation
  const greyChars = greyText.split("")
  const totalChars = greyChars.length

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[550px] w-full xl:max-w-[1400px] mx-auto overflow-hidden rounded-3xl mt-8 md:mt-32 px-6 md:px-12 lg:px-32 shadow-2xl border-b-8 border-r-8 border-gray-400">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 w-full px-2 md:left-16 md:bottom-8 md:top-auto md:-translate-x-0">
          <div className="text-white">
            <div className="absolute left-[-2rem] top-[-0rem] bottom-[-0.1rem] w-[0.1rem] bg-white"></div>
            <div className="text-7xl md:text-7xl f leading-tight font-['SF Pro',__sans-serif]">
              <div>Build</div>
              <div>Connect</div>
              <div>Grow</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 pt-4 pb-6 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row gap-8 items-start md:justify-end">
          {/* Left Column - Description */}
          <div className="space-y-5 md:w-[75rem]">
            <div className="max-w-5xl w-full mx-auto">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-center">
                {/* Black text part - always black */}
                <span className="text-black">{blackText}</span>

                {/* Grey text part - animates letter by letter */}
                {greyChars.map((char, index) => {
                  // Calculate if this character should be black based on scroll progress
                  const charProgress = index / totalChars
                  const shouldBeBlack = scrollProgress > charProgress

                  return (
                    <span
                      key={index}
                      className={`transition-colors duration-300 ease-out ${
                        shouldBeBlack ? "text-black" : "text-gray-400"
                      }`}
                      style={{
                        transitionDelay: `${index * 2}ms`, // Slight delay for smoother wave effect
                      }}
                    >
                      {char}
                    </span>
                  )
                })}
              </p>
            </div>
          </div>


         
        </div>
      </div>

      {/* Add padding and a border before the grid section */}
      <div className="pt-12">
  <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-t border-b border-gray-300 min-h-[250px] lg:min-h-[130px] relative pt-0">
    <div className="px-2 py-5 md:px-4 lg:px-8 xl:px-2 2xl:px-4 w-full col-span-2">
      <div className="mb-7">
        <h2 className="text-3xl md:text-2xl lg:text-6xl text-black leading-tight">
          Revolutionizing the Venture
          <br />
          Capital Ecosystem!
        </h2>
        {/* Horizontal grey line after the heading */}
        <div className="w-full border-t border-gray-300 mt-6 mb-8"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 overflow-visible">
        {/* Left Column - Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4 md:pl-8 lg:pl-16 relative max-w-full">
          <div className="flex items-start gap-4 max-w-full pr-5 ml-16">
            <div className="w-1 h-20 bg-red-500 flex-shrink-0 mt-1"></div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-full break-words">
              We help founders at 
              <br />
              their earliest stages 
              <br />
              regardless of their age.
            </p>
          </div>

          <div className="flex items-start gap-4 max-w-full pr-5 ml-16">
            <div className="w-1 h-16 bg-red-500 flex-shrink-0 mt-1"></div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-full break-words">
              We give startups a huge
              <br />
              fundraising advantage.
            </p>
          </div>

          <div className="flex items-start gap-4 max-w-full pr-5 ml-16">
            <div className="w-1 h-16 bg-red-500 flex-shrink-0 mt-1"></div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-full break-words">
              We improve the success
              <br />
              rate of our startups.
            </p>
          </div>

          <div className="flex items-start gap-4 max-w-full pr-5 ml-16">
            <div className="w-1 h-20 bg-red-500 flex-shrink-0 mt-1"></div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-full break-words">
              Our companies have a 
              <br />
              becoming billion 
              <br />
              dollar companies.
            </p>
          </div>

          {/* Vertical border line */}
          <div className="absolute right-0 top-[-4.3rem] bottom-[-3.5rem] w-px bg-gray-300 hidden lg:block"></div>
        </div>

                 {/* Right Column - Community Image (Responsive) */}
         <div className="relative w-full sm:w-400 md:w-600 lg:w-800 h-48 sm:h-56 md:h-64 lg:h-70 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl ml-2 sm:ml-4 aspect-[4/3] overflow-hidden rounded-2xl">
           <Image
             src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpl-YRnxYXVx78kFqnXIi9I5b5s3bmQZXlg_ae8zgnoCXJAa837sfpK7eI2xZPZclrXAr2mKs1B1gXlOrHZqvQo4naWenEKgnrPeq8-NBQ1BZBqgoQk2vx4lAglHHgE_SpSnMwhBFiCdH6k6KRiIiBcHF66VriJF_vQXOHTOa-3tHGdVzNLZWyEBqwxozw/s2048/473544912_1018141797016754_6719124790330598010_n.jpg"
             alt="Community of innovative companies"
             fill
             className="object-cover"
           />
           <div className="absolute inset-0 bg-black/30" />
           <div className="absolute inset-0 flex items-end justify-end p-4 sm:p-6 pb-6 sm:pb-10">
             <div className="relative">
               <div className="absolute left-[8rem] sm:left-[12rem] md:left-[16rem] lg:left-[19rem] top-0 bottom-0 w-1 bg-white"></div>
               <h3 className="text-white text-sm sm:text-lg md:text-xl lg:text-3xl font-bold text-right leading-tight drop-shadow">
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
</div>


      {/* Services Section - Responsive */}
      {isDesktop ? (
        <div className="px-4 py-16 md:px-8 lg:px-16 bg-white">
          <div ref={scrollSectionRef} className="relative w-full">
            <div
              ref={servicesContainerRef}
              className="sticky top-0 h-screen flex items-center justify-center bg-white  "
            >
              <div className="grid lg:grid-cols-2 gap-16 items-start px-8 md:px-8 lg:px-16 ">
                {/* Left Column - Services Content */}
                <div style={{ paddingTop: '100px' }} className="space-y-4">
                  {/* Service Tag */}
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 border border-white-400 rounded-full"></div>
                    <span className="text-xs text-gray-600 uppercase tracking-wide">What Service We Offer</span>
                  </div>
                  {/* Main Heading */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                    Unleashing the Artistry of Block Studio's Services
                  </h2>
                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Discover Block Studio's dynamic ecosystem, empowering startups with cutting-edge resources, expert
                    mentorship, and innovative solutions. We nurture your vision through personalized guidance, strategic
                    growth support, and a collaborative community—where every idea matters, and every venture tells a unique
                    story. At Block Studio, we don't just incubate startups; we build the future.
                  </p>
                  {/* Services List */}
                  <div style={{ paddingTop: '10px' }} className="space-y-4 pt-2">
                    {services.map((service, idx) => (
                      <div
                        key={service.name}
                        ref={(el) => {
                          serviceRefs.current[idx] = el;
                        }}
                        className={`transition-all duration-300 cursor-pointer ${
                          activeIndex === idx
                            ? "border-l-4 border-red-500 pl-4 text-red-600 font-bold"
                            : "border-l-4 border-transparent pl-4 text-gray-800 hover:text-gray-600"
                        }`}
                      >
                        <div className="text-lg md:text-xl font-semibold">{service.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Right Column - Image with Overlay */}
                <div className="relative left-[8rem] h-[500px] top-35 w-[500px] ">
                  {services[activeIndex] && (
                    <Image
                      src={services[activeIndex].image}
                      alt={services[activeIndex].name}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                  )}
                
                  {/* Black overlay at bottom left */}
                  <div className="absolute left-10 bottom-0 w-24 h-24 bg-black/70 z-10 rounded-bl-2xl -ml-10" />
                  {/* Other overlays or content */}
                  <div style={{ marginLeft: '-300px' }} className="absolute bottom-0 left-0 right-90 bg-black/90 p-6 z-20">
                    <h3 className="text-white text-lg md:text-xl font-bold mb-4">{services[activeIndex].name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {services[activeIndex].description}
                    </p>
                    <button className="flex items-center gap-2 text-white text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">
                      <span>LEARN MORE</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      ) :
       (
        // Mobile: show static first service only
        <div className="px-4 py-8 md:px-8 lg:px-16 bg-white">
          <div className="grid gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 border border-white-400 rounded-full"></div>
                <span className="text-xs text-gray-600 uppercase tracking-wide">What Service We Offer</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                Unleashing the Artistry of Block Studio's Services
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Discover Block Studio's dynamic ecosystem, empowering startups with cutting-edge resources, expert
                mentorship, and innovative solutions. We nurture your vision through personalized guidance, strategic
                growth support, and a collaborative community—where every idea matters, and every venture tells a unique
                story. At Block Studio, we don't just incubate startups; we build the future.
              </p>
              <div className="space-y-4 pt-2">
                <div className="border-l-4 border-red-500 pl-4 text-red-600 font-bold">
                  <div className="text-lg md:text-xl font-semibold">{services[0].name}</div>
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={services[0].image}
                alt={services[0].name}
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-end justify-end p-6 pb-10">
                <h3 className="text-white text-lg md:text-2xl lg:text-3xl font-bold text-right leading-tight drop-shadow">
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
      )}
     
    </div>
  );
}