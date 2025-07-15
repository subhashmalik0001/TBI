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
    <div className="bg-white overflow-x-hidden flex flex-col pb-0 m-0">
      {/* First SVG Section */}
      <div
        className="relative w-full flex flex-col justify-center items-center h-[20vh] overflow-hidden p-0 m-0"
        style={{
          backgroundImage: "url('/assets/Container (2).svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "100% 100%",
        }}
      ></div>
      
      {/* Second SVG Section */}
      <div
        className="relative w-full flex flex-col justify-center -mt-10 items-center h-[20vh] overflow-hidden"
        style={{
          backgroundImage: "url('/assets/container (5).svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "100% 100%",
        }}
      >
      </div>
      
    </div>
  );
  
  const renderDesktopView = () => (
    <div className="bg-white relative">
      {/* First SVG Section */}
      <div
        className="relative w-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center h-[90vh]"
        style={{
          backgroundImage: "url('/assets/Container (2).svg')",
          backgroundSize: "cover"
        }}
      >
      </div>
      <div className="grid grid-cols-1 border-t border-gray-300 md:grid-cols-2"></div>

      {/* Overlapping SVG Section */}
      <div className="relative w-full min-h-[350px]">
        {/* The SVG that should overlap */}
        <div
          className="absolute w-full inset-6 z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/container (5).svg')",
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        ></div>
        {/* Grid Section */}
        <div className="relative z-20 w-full px-4 py-8 flex flex-col md:flex-row bg-transparent min-h-[800px] md:min-h-[800px]">
          <div className="w-full md:w-1/2"></div>
          <div className="w-full md:w-1/2 grid grid-cols-1 gap-0 h-full md:h-80">
            <div className="
  h-[300px]
  -mt-8 md:-mt-8 md:h-[800px]
  lg:h-[800px] xl:h-[800px]
  ml-20 md:ml-12 -mt-8 lg:ml-94 xl:ml-82 -mt-8
  border-t md:border-t-0 md:border-l border-gray-300
"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default Footer;