"use client";

import React, { useState, useEffect } from 'react';
import { Plus, Minus } from "lucide-react";
import PreIncubationContent from "@/components/programs/PreIncubationContent";
import IncubationContent from "@/components/programs/IncubationContent";
import PreAccelerationContent from "@/components/programs/PreAccelerationContent";

function CapabilitiesLabelMobile() {
  return (
    <div className="flex flex-col w-full justify-center items-center text-center">
      <span className="text-[10px] sm:text-xs font-medium text-stone-500 uppercase tracking-wider ml-0">
        Capabilities /
      </span>
    </div>
  );
}

function CapabilitiesLabelDesktop() {
  return (
    <div className="flex flex-row items-center gap-4">
      <span className="text-xs font-medium text-stone-500 uppercase tracking-wider ml-50">
        Capabilities 
      </span>
    </div>
  );
}

export default function Component() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640); // sm breakpoint
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const capabilities = [
    {
      id: "pre-incubation",
      title: "Pre-Incubation",
      content:
        "Our pre-incubation program provides early-stage entrepreneurs with foundational support, mentorship, and resources to validate their business ideas and develop initial prototypes.",
      preview: "Foundational support, mentorship, and resources for early-stage entrepreneurs.",
    },
    {
      id: "incubation",
      title: "Incubation",
      content:
        "The incubation phase offers comprehensive support including workspace, funding opportunities, expert mentorship, and access to our network of industry professionals.",
      preview: "Comprehensive support, workspace, funding, and mentorship for startups.",
    },
    {
      id: "acceleration",
      title: "Acceleration",
      content:
        "Our acceleration program is designed for growth-stage startups, providing intensive mentorship, investment readiness training, and connections to potential investors.",
      preview: "Intensive mentorship and investment readiness for growth-stage startups.",
    },
    {
      id: "venture-studio",
      title: "Venture Studio",
      content:
        "The venture studio model combines our expertise with entrepreneurial talent to build companies from the ground up, providing resources, funding, and operational support.",
      preview: "Building companies from scratch with resources and operational support.",
    },
    {
      id: "insights",
      title: "Insights",
      content:
        "Access market research, industry trends, and data-driven insights to help inform your business decisions and strategic planning.",
      preview: "Market research, industry trends, and data-driven insights for your business.",
    },
    {
      id: "networking",
      title: "Networking",
      content:
        "Connect with fellow entrepreneurs, industry experts, potential partners, and investors through our extensive network and regular networking events.",
      preview: "Connect with entrepreneurs, experts, and investors through our network.",
    },
    {
      id: "faqs",
      title: "FAQ's",
      content:
        "Find answers to commonly asked questions about our programs, application processes, requirements, and what to expect during your journey with us.",
      preview: "Answers to common questions about our programs and processes.",
    },
  ];

  const hoverColors = [
    'hover:bg-green-300',
    'hover:bg-blue-200',
    'hover:bg-purple-300',
    'hover:bg-orange-300',
    'hover:bg-pink-300',
    'hover:bg-indigo-300',
    'hover:bg-yellow-300',
  ];

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="w-full  mt-9 md:mt-16 lg:mt-20">
      <div className="space-y-0">
        {capabilities.map((capability, index) => (
          <div
            key={capability.id}
            className={`bg-white overflow-hidden relative rounded-4xl md:rounded-6xl border-t-3 border-t-black ${
              openItem === capability.id
                ? (isMobile ? 'py-3' : 'py-3 md:py-6')
                : (isMobile ? '' : `hover:py-3 md:hover:py-6 ${hoverColors[index]}`)
            }`}
            style={{ borderTopWidth: '3px', borderTopColor: '#000', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
            onMouseEnter={isMobile ? undefined : () => setHoveredItem(capability.id)}
            onMouseLeave={isMobile ? undefined : () => setHoveredItem(null)}
          >
            <button
              onClick={() => toggleItem(capability.id)}
              className="w-full px-0 py-6 md:py-10 hover:no-underline group relative z-10 focus:outline-none rounded-4xl md:rounded-6xl"
            >
              <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-10 relative">
                <div className="block sm:hidden w-full">
                  <CapabilitiesLabelMobile />
                </div>
                <div className="hidden sm:flex w-auto">
                  <CapabilitiesLabelDesktop />
                </div>
                <div className="w-full flex flex-col sm:flex-row items-start sm:items-center">
                  {/* Capabilities text - only show on mobile */}
           
                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl text-stone-900 text-left ml-2 sm:ml-10 md:ml-150">
                    {capability.title}
                  </h3>
                  {/* Capabilities text - only show on desktop */}
              
                </div>
                <div className="flex-shrink-0 ml-2 sm:ml-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-stone-400 flex items-center justify-center transition-transform duration-200 bg-white">
                    {openItem === capability.id ? (
                      <Minus className="w-14 h-14 sm:w-16 sm:h-16 text-stone-600" />
                    ) : (
                      <Plus className="w-14 h-14 sm:w-16 sm:h-16 text-stone-600" />
                    )}
                  </div>
                </div>
              </div>
            </button>
            {/* Inline preview for all capabilities on hover, only if not open, and after the button */}
            {hoveredItem === capability.id && openItem !== capability.id && (
              <div className="hidden sm:block px-10 sm:px-6 md:px-10">
                <div className="flex flex-col text-stone-700 text-base w-full animate-fade-in text-left">
                  <div className="text-[12px] sm:text-lg font-semibold text-stone-500 uppercase tracking-wider ml-50">INCLUDING:</div>
                  <div className="flex flex-col">
                    <div className="mb-1 ml-50 text-base sm:text-lg font-medium">DATA MATURITY +</div>
                    <div className="mb-1 ml-50 text-base sm:text-lg font-medium">DATA STRATEGY +</div>
                  </div>
                </div>
              </div>
            )}
            <div
              className={`${
                isMobile
                  ? (openItem === capability.id ? 'block pb-6' : 'hidden')
                  : `transition-all duration-300 ease-in-out overflow-hidden ${openItem === capability.id ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'}`
              }`}
            >
              {openItem === capability.id && (
                <div className="w-full border-t border-gray-200 my-2" />
              )}
              <div className="px-4 sm:px-6 md:px-10 relative z-10 max-h-[70vh] overflow-y-auto">
                {capability.id === "pre-incubation" ? (
                  <PreIncubationContent />
                ) : capability.id === "incubation" ? (
                  <IncubationContent />
                ) : capability.id === "acceleration" ? (
                  <PreAccelerationContent />
                ) : (
                  <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed break-words">
                    {capability.content}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}