'use client';

import { useState, useEffect, useRef } from 'react';
import React from 'react';


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

const ProcessSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    function updateSectionMetrics() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setSectionTop(window.scrollY + rect.top);
      setSectionHeight(rect.height);
    }
    updateSectionMetrics();
    window.addEventListener('resize', updateSectionMetrics);
    return () => window.removeEventListener('resize', updateSectionMetrics);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate scroll progress for the section (0 = top, 1 = bottom)
      let progress = 1 - Math.max(0, Math.min(1, (rect.bottom - windowHeight) / (sectionHeight+100 - windowHeight)));

      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      // Set video currentTime based on progress
      const duration = videoRef.current.duration || 1;
      videoRef.current.currentTime = progress * duration;

      // Move video down as you scroll (optional, adjust multiplier as needed)
      videoRef.current.style.transform = `translateY(${progress * 1250}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to get per-step progress (0 to 1) for the line between dot i and i+1
  function getStepProgress(index: number) {
    if (!sectionHeight) return 0;
    const stepHeight = sectionHeight / processSteps.length;
    const stepStart = sectionTop + index * stepHeight;
    const stepEnd = stepStart + stepHeight;
    const progress = (scrollY + window.innerHeight / 2 - stepStart) / (stepEnd - stepStart);
    return Math.min(Math.max(progress, 0), 1);
  }

  useEffect(() => {
    const checkDevice = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white text-black pt-15">
      <div className="w-full bg-white mb-10">
        {/* Main Grid Container - Left and Right Layout (full width) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-t border-b border-gray-300 min-h-[120px] lg:min-h-[100px] relative">
          {/* Left Section */}
          <div className="px-6 py-4 lg:px-8 lg:py-6 flex items-center relative">
            <div className="relative w-full">
              <img src="/assets/image1.png" alt="Process Icon" className="w-8 h-6 absolute -top-[-1.1rem] left-0" />
              <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight pl-10">
                Alongside You at<br />
                Every Stage
              </h1>
            </div>
          </div>

          {/* Right Section */}
          <div className="  mb-10 ml-5 sm:mb-10 mt-20 flex-col items-start w-full">
              <span>STARTUP CUTBI</span>
              <div  style={{position: 'relative',width:'97%'}} className="h-[2px] bg-[#333] border-none w-full sm:w-full md:w-full lg:w-full mb-1" />
              </div>
                

          {/* Vertical Divider for large screens */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300" style={{transform: 'translateX(-0.5px)'}} />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto lg:ml-2 px-4 sm:px-6 lg:px-8">
        {/* Mobile & Tablet Layout */}
        {isMobileOrTablet ? (
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Day */}
                <div className="mb-4">
                  <p className="text-base font-bold text-gray-600">{step.day}</p>
                </div>
                {/* Content */}
                <div className="relative pl-6">
                  {/* Animated vertical line for all but last step */}
                  {index !== processSteps.length - 1 && (
                    (() => {
                      const progress = getStepProgress(index);
                      return (
                        <div
                          className="absolute left-[-4px] top-6 w-px"
                          style={{
                            height: `${progress * 100}%`,
                            background: `linear-gradient(to bottom, rgba(209,213,219,${1 - progress}), rgba(0,0,0,${progress}))`,
                            transition: 'height 0.3s linear, background 0.3s linear',
                            minHeight: '0px',
                            maxHeight: '100%'
                          }}
                        />
                      );
                    })()
                  )}
                  {/* Dot */}
                  <div className="w-3 h-3 rounded-full bg-gray-400 absolute left-[-0.6rem] top-4 z-10" />
                  <h3 className="text-2xl font-semibold mb-3 text-gray-700 leading-tight">{step.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
        <div className="grid md:grid-cols-[120px_24px_1fr_120px] gap-x-4 lg:gap-x-8 max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Day */}
              <div className="flex justify-end items-start pt-2">
                <p className="text-base font-bold text-gray-600 whitespace-nowrap">{step.day}</p>
              </div>
              {/* Vertical Line and Dot */}
              <div className="relative flex justify-center">
                {/* Only show line for all but last step */}
                {index !== processSteps.length - 1 && (
                  (() => {
                    const progress = getStepProgress(index);
                    return (
                      <div
                        className="absolute top-6 left-1/2 -translate-x-1/2 w-px"
                        style={{
                          height: `${progress * 95}%`,
                          background: `linear-gradient(to bottom, rgba(209,213,219,${1 - progress}), rgba(0,0,0,${progress}))`,
                          transition: 'height 0.3s linear, background 0.3s linear',
                          minHeight: '0px',
                          maxHeight: '100%'
                        }}
                      />
                    );
                  })()
                )}
                {/* Dot */}
                <div className="w-3 h-3 rounded-full bg-gray-400 z-10 mt-1" />
              </div>
              {/* Content */}
              <div className="pb-16">
                <h3 className="text-3xl lg:text-4xl font-semibold mb-4 text-gray-700 leading-tight">{step.title}</h3>
                <p className="text-gray-600 text-lg max-w-xl leading-relaxed">{step.description}</p>
              </div>
              {/* Icon (only for the first step, as a placeholder) */}
               <div></div>
            </React.Fragment>
          ))}
          <div  className="w-50 h-full hidden md:block">
          <video
            ref={videoRef}
            src="/assets/animation.mp4"
            autoPlay={false}
            loop={false}
            muted
            style={{
              borderColor: "white",
              position: "relative",
              top: "-1500px",
              left: "1000px",
              maxWidth: "100%",
             
              right: "0",
              width: "100%",
              height: "100%",
              
              transition: "transform 0.1s linear"
            }}
          />
          </div>
          
        </div>
        )}
      </div>
    </section>
  );
};

export default ProcessSection; 