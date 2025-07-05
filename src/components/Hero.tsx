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
const processSteps = [
  {
    day: "DAY 0",
    title: "Your Initial Hypothesis",
    description: "Before you invest a single dollar, we analyze your data and objectives to ensure that our partnership is a good match."
  },
  {
    day: "DAY 1",
    title: "We Align With You",
    description: "We hold breakouts with you and internal experts, quickly documenting and understanding nuances and messaging angles for your product and industry."
  },
  {
    day: "DAY 7",
    title: "We Research for You",
    description: "We conduct two focused research types: external research, which examines your market, competitors, and existing gaps, and internal research, which searches your data for areas of immediate enhancement."
  },
  {
    day: "DAY 30",
    title: "We Deliver your Blueprint",
    description: "We provide a blueprint with a detailed 90-day plan for growth initiatives, including activation, optimization, or overhaul. On this day, we align, approve, and launch our first campaigns and efforts."
  },
  {
    day: "DAY 30+",
    title: "Your Dashboards Go Live",
    description: "Your key data is visualized in one place, updated in real time, allowing you to track initiatives and confidently make informed decisions. We continually enhance and refine these dashboards over time."
  },
  {
    day: "DAY 45",
    title: "We Have Weekly War Rooms",
    description: "Throughout our partnership we'll meet every week to review data, trade notes on progress, and war-room future strategies, ensuring close collaboration every step of the way."
  },
  {
    day: "DAY 90+",
    title: "We Iterate and Pivot to Success",
    description: "Each quarter, we meet to review past performance data and present prospective blueprint. Aiming for substantial growth over incremental, we deliver a path forward we're all excited about."
  }
];

const Hero = () => {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const servicesContainerRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!servicesContainerRef.current) return;
      const container = servicesContainerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalServices = services.length;
      const containerTop = rect.top + window.scrollY;
      const scrollY = window.scrollY;
      const start = containerTop;
      const end = containerTop + windowHeight * totalServices;
      if (scrollY >= start && scrollY < end - windowHeight) {
        setIsSticky(true);
        const scrolled = scrollY - start;
        const index = Math.floor(scrolled / (windowHeight / 2));
        setActiveIndex(Math.min(index, totalServices - 1));
      } else {
        setIsSticky(false);
        if (scrollY < start) {
          setActiveIndex(0);
        } else {
          setActiveIndex(totalServices - 1);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[620px] w-full xl:max-w-[1600px] mx-auto overflow-hidden rounded-3xl mt-9 md:mt-25 px-6 md:px-12 lg:px-32 shadow-2xl border-b-8 border-r-8 border-gray-400">
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
            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
              We believe that to maximize returns, you need a fundamental, first-principles understanding of every asset
              in your portfolio. That's why we focus on providing granular-level visibility and insight, so you can
              develop winning strategies for every single investment.
            </p>
          </div>


         
        </div>
      </div>

      {/* Grid/Border Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-t border-b border-gray-300 min-h-[120px] lg:min-h-[100px] relative">
        <div className="px-4 py-16 md:px-8 lg:px-16 w-full col-span-2">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Revolutionizing the Venture
              <br />
              Capital Ecosystem!
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-b border-gray-300 min-h-[120px] lg:min-h-[30px] relative mb-12 -mx-4 md:-mx-10 lg:-mx-[0rem]"></div>
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
            <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
              <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpl-YRnxYXVx78kFqnXIi9I5b5s3bmQZXlg_ae8zgnoCXJAa837sfpK7eI2xZPZclrXAr2mKs1B1gXlOrHZqvQo4naWenEKgnrPeq8-NBQ1BZBqgoQk2vx4lAglHHgE_SpSnMwhBFiCdH6k6KRiIiBcHF66VriJF_vQXOHTOa-3tHGdVzNLZWyEBqwxozw/s2048/473544912_1018141797016754_6719124790330598010_n.jpg" alt="Community of innovative companies" fill className="object-cover" />
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

      {/* Services Section (unchanged) */}
      <div className="px-4 py-16 md:px-8 lg:px-16 bg-white">
        <div
          ref={servicesContainerRef}
          style={{ height: `calc(98vh * ${services.length})`, position: "relative" }}
        >
          <div
            style={{
              position: isSticky ? "fixed" : "static",
              top: 15,
              paddingTop: '50px',
              left: 63,
              right: 63,
              zIndex: 10,
              background: "#ffffff",
              height: "100vh",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-start px-8 md:px-8 lg:px-16">
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
    </div>
  );
};

export default Hero;