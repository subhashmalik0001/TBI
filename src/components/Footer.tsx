'use client';

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/programs/Accordion"
import { Button } from "../components/programs/Button"
import { Card, CardContent } from "../components/programs/Card"
import Navbar from "@/components/Navbar"

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const renderMobileView = () => (
    <div className="bg-white flex flex-col pb-0 m-0 w-full">
      {/* First SVG Section */}
      <div
        className="relative w-full flex flex-col justify-center items-center h-[20vh] sm:h-[22vh] md:h-[28vh] lg:h-[32vh] overflow-hidden p-0 m-0"
        style={{
          backgroundImage: "url('/assets/Container (2).svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "100% 100%",
        }}
      ></div>
      {/* Second SVG Section - truly full width */}
      <div
        className="relative left-1/2 right-1/2 w-screen flex flex-col justify-center items-center 
          -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16
          h-[20vh] sm:h-[24vh] md:h-[28vh] lg:h-[32vh] xl:h-[36vh]
          overflow-hidden
          -translate-x-1/2"
        style={{
          backgroundImage: "url('/assets/container (5).svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
      </div>
    </div>
  );
  
  const renderDesktopView = () => (
    <div className="bg-white relative w-full">
      {/* First SVG Section */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center h-[32vh] sm:h-[40vh] md:h-[60vh] lg:h-[90vh]"
        style={{
          backgroundImage: "url('/assets/Container (2).svg')",
          backgroundSize: "cover"
        }}
      >
      </div>
      <div className="grid grid-cols-1 border-t border-gray-300 md:grid-cols-2"></div>
      {/* Overlapping SVG Section - truly full width */}
      <div className="relative w-full min-h-[200px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
        {/* The SVG that should overlap */}
        <div
          className="absolute left-1/2 right-1/2 w-screen z-10 bg-cover bg-center bg-no-repeat 
            h-[48vh] sm:h-[48vh] md:h-[52vh] lg:h-[60vh] xl:h-[64vh]
            -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16
            -translate-x-1/2"
          style={{
            backgroundImage: "url('/assets/container (5).svg')",
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        ></div>
        {/* Grid Section */}
        <div className="relative z-20 w-full px-2 sm:px-4 md:px-8 py-4 sm:py-8 flex flex-col md:flex-row bg-transparent">
          <div className="w-full md:w-1/2"></div>
          <div className="w-full md:w-1/2 grid grid-cols-1 gap-0 h-full md:h-90">
            <div className="h-[120px] sm:h-[200px] md:h-[300px] lg:h-[400px] ml-8 sm:ml-16 md:ml-32 lg:ml-40 xl:ml-56 -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-5 xl:-mt-6 border-t md:border-t-0 md:border-l border-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default Footer;