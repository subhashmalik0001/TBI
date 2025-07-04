'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/programs/Accordion"
import { Button } from "../components/programs/Button"
import { Card, CardContent } from "../components/programs/Card"
import Navbar from "@/components/Navbar"

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
    <div
      className="relative w-full bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('assets/container (2).png')",
        minHeight: "900px",
        paddingBottom:"200px"
        
      }}
    >
      <div className="text-left text-[#D6E4FA] font-bold text-lg mr-200 sm:text-xl md:text-2xl mb-4" style={{fontFamily: "var(--font-geist-sans)", marginBottom: "100px"}}>
        <b>want to work next to the with</b><br/>
        <b>the best team</b><br/>
        <b>in the world</b>
      </div>
      <button
        className="group flex items-center ml-100 h-10 w-full max-w-xs min-w-fit sm:w-1/2 md:w-1/3 lg:w-1/4 bg-transparent border border-black text-black pl-2 pr-8 py-2 rounded-full font-medium text-xs sm:text-sm md:text-base hover:bg-gray-800 hover:text-white transition"
        style={{
          backgroundColor: "#B0C8F2",
          color: "black",
          fontFamily: "var(--font-geist-sans)",
          marginTop: "-40px",
        }}
      >
        <div className="w-8 h-8 bg-black rounded-full ml-4 transition-colors duration-200 group-hover:bg-white"></div>
        <span className="truncate">* CONNECT WITH US TODAY</span>
      </button>
    </div>
    <div
      className="w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/container (3).png')",
        minHeight: "500px",
        paddingBottom: "3vh",
      }}
    >
      <div className="max-w-2xl mx-auto px-4" style={{ marginTop: "10px" }}>
        <div className="flex items-center justify-between">
          <div>
            <h1
              style={{
                backgroundImage: "url('/assets/Screenshot 2025-07-03 155807.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                marginLeft: "-250px",
                fontFamily: "var(--font-geist-sans)",
                paddingBottom: "20px"
              }}
              className="text-8xl font-black leading-tight"
            >
              Technology<br />
              <span style={{
                backgroundImage: "url('/assets/Screenshot 2025-07-03 155807.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                marginRight: "-100px"
              }}>
                Business
              </span><br/>
              <span style={{
                backgroundImage: "url('/assets/Screenshot 2025-07-03 155807.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                marginRight: "-100px",
                marginTop: "-20px"
              }}>
                Incubator
              </span>
              <span style={{
                backgroundImage: "url('/assets/@cu.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                marginLeft: "100px",
                fontSize: "4rem"
              }}>
                <b> @ </b>
              </span>
              <span style={{
                position: "relative",
                backgroundImage: "url('/assets/@cu.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                marginLeft: "600px",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "10rem",
                marginTop: "-90px",
                top: "-150px"
              }}>
                <b> CU </b>
              </span>
            </h1>
          </div>
          <div style={{ marginTop: "80px", marginLeft: "100px" }} className="flex items-center space-x-8">
            <button className="group flex items-center h-10 w-50 bg-transparent border border-black text-black pl-0 pr-8 py-2 rounded-full font-medium text-sm hover:bg-gray-800 hover:text-white transition">
              <div className="w-8 h-8 ml-2 bg-black rounded-full mr-4"></div>
              <span className="truncate">Get in touch</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer; 
