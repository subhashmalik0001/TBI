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
        className="relative w-full flex flex-col justify-center items-center h-[40vh] overflow-hidden p-0 m-0"
        style={{
          backgroundImage: "url('/assets/Container (2).svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "100% 100%",
        }}
      ></div>
      
      {/* Second SVG Section */}
      <div
        className="relative w-full flex flex-col justify-center -mt-35 items-center h-[20vh] overflow-hidden"
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
    <div className="bg-white">
      {/* First SVG Section */}
      <div
        className="relative w-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center h-[90vh]"
        style={{
          backgroundImage: "url('/assets/Container (2).svg')",
          backgroundSize: "cover"
        }}
      >
      </div>
      {/* Second SVG Section */}
      <div
        className="relative w-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center -mt-60 h-[70vh]"
        style={{
          backgroundImage: "url('/assets/container (5).svg')",
          backgroundSize: "cover"
        }}
      >
      </div>
    </div>
  );

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default Footer;