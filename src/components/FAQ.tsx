"use client";

import React, { useState } from 'react';
import { Plus, Minus } from "lucide-react";
import PreIncubationContent from "@/components/programs/PreIncubationContent";
import IncubationContent from "@/components/programs/IncubationContent";
import PreAccelerationContent from "@/components/programs/PreAccelerationContent";

export default function Component() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const capabilities = [
    {
      id: "pre-incubation",
      title: "Pre-Incubation",
      content:
        "Our pre-incubation program provides early-stage entrepreneurs with foundational support, mentorship, and resources to validate their business ideas and develop initial prototypes.",
    },
    {
      id: "incubation",
      title: "Incubation",
      content:
        "The incubation phase offers comprehensive support including workspace, funding opportunities, expert mentorship, and access to our network of industry professionals.",
    },
    {
      id: "acceleration",
      title: "Acceleration",
      content:
        "Our acceleration program is designed for growth-stage startups, providing intensive mentorship, investment readiness training, and connections to potential investors.",
    },
    {
      id: "venture-studio",
      title: "Venture Studio",
      content:
        "The venture studio model combines our expertise with entrepreneurial talent to build companies from the ground up, providing resources, funding, and operational support.",
    },
    {
      id: "insights",
      title: "Insights",
      content:
        "Access market research, industry trends, and data-driven insights to help inform your business decisions and strategic planning.",
    },
    {
      id: "networking",
      title: "Networking",
      content:
        "Connect with fellow entrepreneurs, industry experts, potential partners, and investors through our extensive network and regular networking events.",
    },
    {
      id: "faqs",
      title: "FAQ's",
      content:
        "Find answers to commonly asked questions about our programs, application processes, requirements, and what to expect during your journey with us.",
    },
  ];

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="w-full mx-auto mt-8 md:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8 2xl:max-w-7xl 2xl:px-16">
      <div className="space-y-0">
        {capabilities.map((capability, index) => (
          <div
            key={capability.id}
            className={`bg-white overflow-hidden relative rounded-2xl md:rounded-3xl border-t-2 border-t-black transition-all duration-300 ease-in-out ${
              openItem === capability.id ? 'py-3 md:py-6' : 'hover:py-3 md:hover:py-6'
            }`}
          >
            <button
              onClick={() => toggleItem(capability.id)}
              className="w-full px-0 py-6 md:py-10 hover:no-underline group relative z-10 focus:outline-none rounded-2xl md:rounded-3xl"
            >
              <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-10 relative">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                  <span className="text-[10px] sm:text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Capabilities
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-stone-900 text-center sm:text-left flex-1 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:w-max md:text-center z-10">
                  {capability.title}
                </h3>
                <div className="flex-shrink-0 ml-2 sm:ml-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-stone-400 flex items-center justify-center transition-transform duration-200">
                    {openItem === capability.id ? (
                      <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-stone-600" />
                    ) : (
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-stone-600" />
                    )}
                  </div>
                </div>
              </div>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openItem === capability.id ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 sm:px-6 md:px-10 relative z-10 max-h-[70vh] overflow-y-auto">
                {capability.id === "pre-incubation" ? (
                  <PreIncubationContent />
                ) : capability.id === "incubation" ? (
                  <IncubationContent />
                ) : capability.id === "acceleration" ? (
                  <PreAccelerationContent />
                ) : (
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
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