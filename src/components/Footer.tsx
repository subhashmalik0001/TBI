'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Accordion, AccordionItem } from "@/components/programs/Accordion";
import { Button } from "@/components/programs/Button";
import { Card, CardContent } from "@/components/programs/Card";

const faqData = [
  {
    question: "Who Are we",
    answer: "We are a technology business incubator focused on supporting innovative startups and entrepreneurs."
  },
  {
    question: "What do we do",
    answer: "We provide mentorship, resources, and support to help technology startups grow and succeed."
  },
  {
    question: "How can we help you?",
    answer: "We can help you with business development, technical guidance, funding opportunities, and networking."
  },
  {
    question: "What do we do",
    answer: "We foster innovation and entrepreneurship in the technology sector through our comprehensive incubation programs."
  }
];

const Footer = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-white">
    {/* FAQ Section */}
    <div className="max-w-screen-2xl mx-auto px-1">
      <h1 className="text-9xl font-extrabold text-left ml-10 mt-10 text-black">FAQ</h1>
      <Accordion className="w-full max-w-12xl mx-auto my-8">
        {faqData.map((item, idx) => {
          let hoverBg = '';
          if (item.question === 'Who Are we') hoverBg = 'hover:bg-green-200';
          else if (item.question === 'What do we do') hoverBg = 'hover:bg-yellow-200';
          else if (item.question === 'How can we help you?') hoverBg = 'hover:bg-orange-200';
          const isOpen = openIdx === idx;
          let openBg = '';
          if (isOpen && item.question === 'Who Are we') openBg = 'bg-green-200';
          else if (isOpen && item.question === 'What do we do') openBg = 'bg-yellow-200';
          else if (isOpen && item.question === 'How can we help you?') openBg = 'bg-orange-200';
          return (
            <AccordionItem
              key={idx}
              className={`border-4 border-black rounded-tl-3xl rounded-tr-3xl mb-2 border-b-white p-0 ${isOpen ? openBg : ''}`}
            >
              <button
                className={`w-full text-left text-xl font-medium flex items-center focus:outline-none text-black ${hoverBg} rounded-tl-3xl rounded-tr-3xl p-6 min-h-[80px]`}
                style={{margin: 0, borderRadius: '1.5rem 1.5rem 0 0'}}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                onMouseEnter={() => { if (openIdx !== null && openIdx !== idx) setOpenIdx(null); }}
              >
                <span className="flex-grow text-black">{item.question}</span>
                <span className="ml-4 flex items-center justify-center w-10 h-10 rounded-full border border-black text-2xl font-bold flex-shrink-0 text-black">
                  {openIdx === idx ? '-' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-4 text-black">
                  {item.answer}
                </div>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
    <img src="/assets/Screenshot 2025-07-03 153915.png.png" alt="FAQ" className="w-full h-auto" />

    {/* Blue Banner Section */}
    <div className="relative">
      
    </div>

    {/* Technology Business Incubator Section */}
    
    <div style={{backgroundImage:"url('/assets/Screenshot 2025-07-03 160733.png.png')"}}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <h1
              style={{
                backgroundImage: "url('/assets/Screenshot 2025-07-03 155807.png.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                marginLeft: "-200px"
              }}
              className="text-6xl font-bold leading-tight"
            >
              Technology<br />
              <span style={{
                backgroundImage: "url('/assets/Screenshot 2025-07-03 155807.png.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                marginRight: "-100px"
              }}>
                Business
              </span><br />
              <span style={{
                backgroundImage: "url('/assets/Screenshot 2025-07-03 155807.png.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                marginRight: "-100px"
              }}>
                Incubator
              </span>
              <span style={{
                backgroundImage: "url('/assets/Screenshot 2025-07-03 160206.png.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                marginLeft: "100px"
              }}>
                <b> @ CU</b>
              </span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 bg-transparent border border-black text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-800 transition">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <span>Get in touch</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer; 