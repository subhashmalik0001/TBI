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
  return (
    <section className="bg-white text-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-16">
        <div className="text-left mb-20">
          <p className="text-sm font-bold tracking-widest text-gray-500 mb-2">PROCESS</p>
          <h2 className="text-5xl mx-auto text-center md:text-6xl font-bold tracking-tighter">
            Together as a team <br /> every step of the way
          </h2>
        </div>
        <div className="grid grid-cols-[120px_24px_1fr_120px] gap-x-4 w-1/2">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Day */}
              <div className="flex justify-end items-start pt-2">
                <p className="text-base font-bold text-gray-600 whitespace-nowrap">{step.day}</p>
              </div>
              {/* Vertical Line */}
              <div className="relative flex justify-center">
                {/* Only show line for all but last step */}
                {index !== processSteps.length - 1 && (
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-px h-full bg-gray-300" />
                )}
                {/* Dot */}
                {/* <div className="w-3 h-3 rounded-full bg-gray-400 z-10 mt-1" /> */}
              </div>
              {/* Content */}
              <div className="pb-16">
                <h3 className="text-4xl font-semibold mb-4 text-gray-700 leading-tight">{step.title}</h3>
                <p className="text-gray-600 text-lg max-w-xl leading-relaxed">{step.description}</p>
              </div>
              {/* Icon (only for the first step, as a placeholder) */}
               <div></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 