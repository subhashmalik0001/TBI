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

// Define tag arrays at the top of the file, outside the component
const topRowTags = [
  "Residential Space",
  "Schematic",
  "Functional",
  "Structural Design",
  "Residential Space",
  "Schematic",
  "Functional",
  "Structural Design",
  "Residential Space",
  "Schematic",
  "Functional",
  "Structural Design",
];

const bottomRowTags = [
  "Architecture",
  "Construction",
  "Renovation",
  "Kitchen",
  "Architecture",
  "Construction",
  "Renovation",
  "Kitchen",
  "Architecture",
  "Construction",
  "Renovation",
  "Kitchen",
];

export default function Hero() {
  // Detect mobile view
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const servicesContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const nextSectionHeadingRef = useRef<HTMLDivElement>(null);
  
  // Services section - no scroll lock, scrolls normally

  // Hero text animation based on normal scroll
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);

  // Hero text scroll lock and wheel-to-animate states
  const [isHeroScrollLocked, setIsHeroScrollLocked] = useState(false);
  const [isHeroAnimationDone, setIsHeroAnimationDone] = useState(false);
  const [heroWheelProgress, setHeroWheelProgress] = useState(0);

  // Services section scroll logic - works independently
  useEffect(() => {
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
        const sectionHeight = window.innerHeight * 0.5; // make each section 60% of screen height
        const index = Math.floor(scrolled / sectionHeight);
        
    
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
  }, []);



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
  
    const updateHeight = () => {
      if (window.innerWidth >= 1024) {
        // Set scroll height for desktop
        scrollSectionRef.current!.style.height = `${window.innerHeight * services.length}px`;
      } else {
        // Reset height for mobile
        scrollSectionRef.current!.style.height = "auto";
      }
    };
  
    updateHeight(); // Run once on mount
  
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [services.length]);
  
  useEffect(() => {
    const handleHeroScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const heroSectionHeight = 550; // Height of hero video section
      const progress = Math.min(scrollY / (heroSectionHeight * 0.5), 1);
      setHeroScrollProgress(progress);
    };

    window.addEventListener("scroll", handleHeroScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleHeroScroll);
  }, []);

  // Lock scroll when hero text enters view
  useEffect(() => {
    if (isMobile) return; // Disable scroll lock on mobile
    const onScroll = () => {
      if (isHeroScrollLocked || isHeroAnimationDone || !heroTextRef.current) return;
      const rect = heroTextRef.current.getBoundingClientRect();
      const isInMiddle = rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;
      if (isInMiddle) {
        setIsHeroScrollLocked(true);
        document.body.style.overflow = "hidden";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHeroScrollLocked, isHeroAnimationDone, isMobile]);

  // Animate hero text with wheel while locked
  useEffect(() => {
    if (isMobile) return; // Disable wheel animation on mobile
    if (!isHeroScrollLocked || isHeroAnimationDone) return;
    let accumulated = 0;
    const maxScroll = 800;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      accumulated += Math.abs(e.deltaY);
      const progress = Math.min(accumulated / maxScroll, 1);
      setHeroWheelProgress(progress);
      if (progress >= 1) {
        setIsHeroScrollLocked(false);
        setIsHeroAnimationDone(true);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [isHeroScrollLocked, isHeroAnimationDone, isMobile]);

  // Prevent scroll jumps while hero is locked
  useEffect(() => {
    if (!isHeroScrollLocked) return;
    const lockPosition = () => {
      window.scrollTo({ top: window.scrollY });
    };
    window.addEventListener("scroll", lockPosition);
    return () => window.removeEventListener("scroll", lockPosition);
  }, [isHeroScrollLocked]);

  // Always enable scroll on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'auto';
    }
  }, [isMobile]);

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
          <div className="space-y-5 md:w-[86rem] flex justify-center">
            <div ref={heroTextRef} className="max-w-5xl w-full mx-auto">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-center mx-auto">
                {/* Black text part - always black */}
                <span className="text-black">{blackText}</span>

                {/* Grey text part - animates letter by letter, or all black on mobile */}
                {isMobile ? (
                  <span className="text-black">{greyText}</span>
                ) : (
                  greyChars.map((char, index) => {
                    const charProgress = index / greyChars.length;
                    const shouldBeBlack = heroWheelProgress > charProgress;
                    return (
                      <span
                        key={index}
                        className={`transition-colors duration-300 ${
                          shouldBeBlack ? "text-black" : "text-gray-400"
                        }`}
                      >
                        {char}
                      </span>
                    );
                  })
                )}
              </p>
            </div>
          </div>


         
        </div>
      </div>

      {/* Add padding and a border before the grid section */}
      <div className="pt-12"></div>
  
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-t border-b border-gray-300 min-h-[250px] lg:min-h-[130px] relative pt-0">
        <div className="px-2 py-5 md:px-8 lg:px-16 w-full col-span-2">
          <div className="mb-7">
          <h2 className="text-3xl md:text-2xl lg:text-6xl text-black leading-tight">
          Revolutionizing the Venture
          <br />
          Capital Ecosystem!
        </h2>
        {/* Horizontal grey line after the heading */}
        <div className="w-full border-t border-gray-300 mt-6 mb-8"></div>
             <div className="fixed left-0 w-screen border-t border-gray-300 min-h-[100px] lg:min-h-[40px] pt-10"></div>
          </div>


          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Features */}
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
            {/* Right Column - Community Image */}
            <div className="relative w-full sm:w-400 md:w-600 lg:w-800 h-48 sm:h-56 md:h-64 lg:h-70 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl ml-2 sm:ml-4 aspect-[4/3] overflow-hidden rounded-2xl">
           <Image
             src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpl-YRnxYXVx78kFqnXIi9I5b5s3bmQZXlg_ae8zgnoCXJAa837sfpK7eI2xZPZclrXAr2mKs1B1gXlOrHZqvQo4naWenEKgnrPeq8-NBQ1BZBqgoQk2vx4lAglHHgE_SpSnMwhBFiCdH6k6KRiIiBcHF66VriJF_vQXOHTOa-3tHGdVzNLZWyEBqwxozw/s2048/473544912_1018141797016754_6719124790330598010_n.jpg"
             alt="Community of innovative companies"
             fill
             className="object-cover"
           />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-end justify-end p-6 pb-10">
                <h3 className="text-white text-lg md:text-2xl lg:text-3xl font-bold text-right leading-tight drop-shadow">
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

      {/* Services Section - Responsive */}
      {isDesktop ? (
        <>
        <div className="px-4  md:px-8 lg:px-16 bg-white  ">
        <div ref={scrollSectionRef} className="relative w-full">
            <div
              ref={servicesContainerRef}
              className="sticky top-0 h-screen flex items-center justify-center bg-white  pb-15 "
            >
              <div className="grid lg:grid-cols-2 gap-16 items-start px-8 md:px-8 lg:px-16 ">
                {/* Left Column - Services Content */}
                <div style={{ paddingTop: '129px' }} className="space-y-4">
                  {/* Service Tag */}
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 border border-white-400 rounded-full"></div>
                    <span className="text-xs text-gray-600 uppercase tracking-wide">What Service We Offer</span>
                  </div>
                  {/* Main Heading */}
                  <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-black leading-tight">
                    Unleashing the Artistry of Block Studio's Services
                  </h2>
                  {/* Description */}
                  <p className="text-[16px] leading-[22px] text-gray-600 leading-relaxed text-left">
                    Discover Block Studio's dynamic ecosystem, empowering startups with cutting-edge resources, expert
                    mentorship, and innovative solutions. We nurture your vision through personalized guidance, strategic
                    growth support, and a collaborative community—where every idea matters, and every venture tells a unique
                    story. At Block Studio, we don't just incubate startups; we build the future.
                  </p>
                  {/* Services List */}
                  <div style={{ paddingTop: '20px' }} className="space-y-5 pt-2 ">
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

                <div className="relative left-[3rem] h-[674.19px] top-10 w-[652.8px] ">
                  {services[activeIndex] && (
                    <Image
                      src={services[activeIndex].image}
                      alt={services[activeIndex].name}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                  )}
                 <div className="spac"/>
                    {/* Black overlay at bottom left */}
                    <div className="absolute left-10 bottom-0 w-24 h-24 bg-black/70 z-10 rounded-bl-2xl -ml-10" />
                  {/* Other overlays or content */}
                  <div style={{ marginLeft: '-230px',width: '452.41px', height: '250.56px', }} className="absolute bottom-0 left-0 right-90 bg-black/90 p-6 z-20">
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
        {/* Animated Tag Rows for Desktop */}
        <div className="hidden md:block w-full bg-white  py-1 z-10 px-10 lg:px-16 overflow-hidden">
          {/* Top row */}
          <div className="relative mb-2">
            <div className="flex animate-scroll-right-to-left whitespace-nowrap">
              {[...topRowTags, ...topRowTags].map((tag, index) => (
                <span
                  key={index}
                  className={`inline-block px-8 py-3 mx-0 bg-white text-gray-600 text-lg font-medium ${
                    index % 2 === 0
                      ? "border-t border-l border-r border-gray-300 rounded-t-full rounded-l-full rounded-r-full"
                      : ""
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Bottom row */}
          <div className="relative">
            <div className="flex animate-scroll-left-to-right whitespace-nowrap">
              {[...bottomRowTags, ...bottomRowTags].map((tag, index) => (
                <span
                  key={index}
                  className={`inline-block px-8 py-3 mx-0 bg-white text-gray-600 text-lg font-medium ${
                    index % 2 === 0
                      ? "border-t border-l border-r border-gray-300 rounded-t-full rounded-l-full rounded-r-full"
                      : ""
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        </>
      ) :
       (
        // MOBILE SERVICES SECTION
        <>
        <div className="bg-white px-4 pt-4 pb-2 block md:hidden">
          {/* Section Title */}
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 border border-gray-400 rounded-full" />
              <span className="text-xs text-gray-600 uppercase tracking-wide">What Service We Offer</span>
            </div>
            <h2 className="text-xl font-bold text-black leading-tight">
              Unleashing the Artistry of Block Studio's Services
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Discover Block Studio's dynamic ecosystem, empowering startups with cutting-edge resources,
              expert mentorship, and innovative solutions.
            </p>
          </div>

          {/* SERVICES ROW (horizontal buttons) */}
          <div className="flex flex-wrap gap-2 mb-1"> {/* Reduced margin-bottom */}
            {services.map((service, idx) => (
              <button
                key={service.name}
                onClick={() => setMobileActiveIndex(idx)}
                className={`px-3 py-2 text-xs rounded-full border transition ${
                  mobileActiveIndex === idx
                    ? 'bg-red-600 text-white font-semibold'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* IMAGE SECTION */}
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl transition-all duration-500">
            <Image
              src={services[mobileActiveIndex].image}
              alt={services[mobileActiveIndex].name}
              fill
              className="object-cover"
            />
            {/* Black overlay layer */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Floating black square box */}
            <div className="absolute left-4 bottom-28 w-16 h-16 bg-black/70 z-10 rounded-bl-xl" />

            {/* Info overlay at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-4 z-20 rounded-b-2xl">
              <h3 className="text-white text-lg font-bold mb-1">
                {services[mobileActiveIndex].name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-2">
                {services[mobileActiveIndex].description}
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
        {/* Animated Tag Rows for Mobile */}
        <div className="block md:hidden w-full bg-white py-2 z-10 px-4">
          {/* Top row */}
          <div className="relative mb-2">
            <div className="flex animate-scroll-right-to-left whitespace-nowrap overflow-x-auto max-w-full">
              {[...topRowTags, ...topRowTags].map((tag, index) => (
                <span
                  key={index}
                  className={`inline-block px-5 py-2 mx-0 bg-white text-gray-600 text-base font-medium ${
                    index % 2 === 0
                      ? "border-t border-l border-r border-gray-300 rounded-t-full rounded-l-full rounded-r-full"
                      : ""
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Bottom row */}
          <div className="relative">
            <div className="flex animate-scroll-left-to-right whitespace-nowrap overflow-x-auto max-w-full">
              {[...bottomRowTags, ...bottomRowTags].map((tag, index) => (
                <span
                  key={index}
                  className={`inline-block px-5 py-2 mx-0 bg-white text-gray-600 text-base font-medium ${
                    index % 2 === 0
                      ? "border-t border-l border-r border-gray-300 rounded-t-full rounded-l-full rounded-r-full"
                      : ""
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        </>
      )}
     
    </div>
  );
}