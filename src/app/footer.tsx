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
    <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-9xl font-extrabold text-left ml-2 sm:ml-4 md:ml-6 lg:ml-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-black">FAQ</h1>
      <Accordion className="w-full max-w-12xl mx-auto my-3 sm:my-5 md:my-6 lg:my-8">
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
              className={`border-1 sm:border-2 md:border-3 lg:border-4 border-black rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-3xl rounded-tr-xl sm:rounded-tr-2xl md:rounded-tr-3xl mb-2 sm:mb-3 border-b-white p-0 ${isOpen ? openBg : ''}`}
            >
              <button
                className={`w-full text-left text-sm sm:text-base md:text-lg lg:text-xl font-medium flex items-center focus:outline-none text-black ${hoverBg} rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-3xl rounded-tr-xl sm:rounded-tr-2xl md:rounded-tr-3xl p-3 sm:p-4 md:p-5 lg:p-6 min-h-[45px] sm:min-h-[55px] md:min-h-[65px] lg:min-h-[80px]`}
                style={{margin: 0, borderRadius: '0.75rem 0.75rem 0 0'}}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                onMouseEnter={() => { if (openIdx !== null && openIdx !== idx) setOpenIdx(null); }}
              >
                <span className="flex-grow text-black pr-2 sm:pr-3">{item.question}</span>
                <span className="ml-2 sm:ml-3 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full border border-black text-sm sm:text-base md:text-lg lg:text-2xl font-bold flex-shrink-0 text-black">
                  {openIdx === idx ? '-' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="px-3 sm:px-4 md:px-5 lg:px-6 pb-3 sm:pb-4 md:pb-5 text-black text-xs sm:text-sm md:text-base">
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
        minHeight: "350px",
        paddingBottom:"50px"
        
      }}
    >
      <div className="text-left text-[#D6E4FA] font-bold text-sm sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 px-3 sm:px-4 md:px-6 lg:px-8" style={{fontFamily: "var(--font-geist-sans)", marginBottom: "40px", marginTop: "25px"}}>
        <b>want to work next to the with</b><br/>
        <b>the best team</b><br/>
        <b>in the world</b>
      </div>
      <button
        className="group flex items-center h-8 sm:h-10 md:h-12 lg:h-14 w-3 max-w-xs min-w-fit sm:w-1/2 md:w-1/3 lg:w-1/4 bg-transparent border border-black text-black pl-2 sm:pl-3 md:pl-2 lg:pl-2 pr-4 sm:pr-6 md:pr-6 lg:pr-8 py-1 sm:py-2 md:py-2 rounded-full font-medium text-xs sm:text-sm md:text-sm lg:text-base hover:bg-gray-800 hover:text-white transition mx-3 sm:mx-4 md:mx-4"
        style={{
          backgroundColor: "#B0C8F2",
          color: "black",
          fontFamily: "var(--font-geist-sans)",
          marginTop: "-15px",
        }}
      >
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-black rounded-full ml-1 sm:ml-2 md:ml-2 lg:ml-4 transition-colors duration-200 group-hover:bg-white"></div>
        <span className="truncate text-xs sm:text-sm md:text-sm">* CONNECT WITH US TODAY</span>
      </button>
    </div>
    <div
      className="w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/container (3).png')",
        minHeight: "200px",
        paddingBottom: "3vh",
      }}
    >
      <div className="max-w-2xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8" style={{ marginTop: "15px" }}>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <h1
              style={{
                backgroundImage: "url('/assets/Screenshot 2025-07-03 155807.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                marginLeft: "0px",
                fontFamily: "var(--font-geist-sans)",
                paddingBottom: "10px",
                fontSize: "1.5rem"
              }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight"
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
                marginRight: "0px"
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
                marginRight: "0px",
                marginTop: "-3px"
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
                marginLeft: "8px",
                fontSize: "1.2rem"
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
                marginLeft: "15px",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1.8rem",
                marginTop: "5px",
                top: "5px"
              }}>
                <b> CU </b>
              </span>
            </h1>
          </div>
          <div style={{ marginTop: "20px", marginLeft: "5px" }} className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 w-full sm:w-auto justify-center sm:justify-end">
            <button className="group flex items-center h-8 sm:h-10 md:h-12 lg:h-14 w-40 sm:w-auto bg-transparent border border-black text-black pl-2 sm:pl-3 md:pl-0 lg:pl-0 pr-4 sm:pr-6 md:pr-6 lg:pr-8 py-1 sm:py-2 md:py-2 rounded-full font-medium text-xs sm:text-sm md:text-sm lg:text-sm hover:bg-gray-800 hover:text-white transition">
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 ml-1 sm:ml-2 md:ml-2 bg-black rounded-full mr-1 sm:mr-2 md:mr-2 lg:mr-4"></div>
              <span className="truncate text-xs sm:text-sm md:text-sm">Get in touch</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
