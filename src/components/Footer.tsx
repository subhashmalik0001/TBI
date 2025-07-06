'use client';

import React, { useRef, useState, useEffect } from "react";
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/programs/Accordion"
import { Button } from "../components/programs/Button"
import { Card, CardContent } from "../components/programs/Card"
import Navbar from "@/components/Navbar"

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      
      // Mobile: < 768px
      // Tablet: 768px - 1024px  
      // Desktop: > 1024px
      const mobileDevice = width < 768 || 
                          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const tabletDevice = width >= 768 && width < 1024;
      const desktopDevice = width >= 1024;

      setIsMobile(mobileDevice);
      setIsTablet(tabletDevice);
      setIsDesktop(desktopDevice);
      setIsLoading(false);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Mobile-specific render function
  const renderMobileView = () => (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Work Section */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat flex flex-col items-start justify-center max-w-screen-2xl mx-auto px-4"
        style={{
          backgroundImage: "url('assets/container (2).png')",
          minHeight: "300px",
          paddingBottom:"60px",
          backgroundSize: "100% 100%"
        }}
      >
        <div className="text-center text-[#D6E4FA] font-bold text-base mb-0 w-full flex flex-col items-center justify-center leading-tight" style={{fontFamily: "var(--font-geist-sans)", marginBottom: "60px"}}>
          <b>Want to work next to the with</b><br/>
          <b>The best team</b><br/>
          <b>In the world</b>
        </div>
        <button
          className="group flex items-center h-8 w-60 max-w-xs bg-transparent border border-black text-black pl-2 pr-6 py-2 rounded-full font-medium text-xs hover:bg-gray-800 hover:text-white transition self-center ml-auto mr-auto"
          style={{
            backgroundColor: "#B0C8F2",
            color: "black",
            fontFamily: "var(--font-geist-sans)",
            marginTop: "-40px",
          }}
        >
          <div className="w-6 h-6 bg-black rounded-full ml-0 transition-colors duration-200 group-hover:bg-white"></div>
          <span className="truncate"> CONNECT WITH US TODAY</span>
        </button>
      </div>

      {/* Mobile Technology Section */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat max-w-screen-2xl mx-auto px-4"
        style={{
          backgroundImage: "url('/assets/container (3).png')",
          minHeight: "200px",
          paddingBottom: "2vh",
          backgroundSize: "100% 100%"
        }}
      >
        <div className="max-w-2xl mx-auto px-4" style={{ marginTop: "10px" }}>
          <div className="flex flex-col items-start">
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
                  fontFamily: "var(--font-geist-sans)",
                  paddingBottom: "10px"
                }}
                className="text-3xl font-black leading-tight text-left"
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
                  fontSize: "2rem"
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
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "4rem",
                  marginTop: "-15px",
                  top: "0px"
                }}>
                  <b> CU </b>
                </span>
              </h1>
            </div>
            <div style={{ marginTop: "20px" }} className="flex items-center">
              <button className="group flex items-center h-8 w-40 bg-transparent border border-black text-black pl-0 pr-6 py-2 rounded-full font-medium text-xs hover:bg-gray-800 hover:text-white transition">
                <div className="w-6 h-6 ml-2 bg-black rounded-full mr-2"></div>
                <span className="truncate">Get in touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Desktop-specific render function
  const renderDesktopView = () => (
    <div className="min-h-screen bg-gray-100">
      {/* Desktop Work Section */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center max-w-screen-2xl mx-auto px-4"
        style={{
          backgroundImage: "url('assets/container (2).png')",
          minHeight: "600px",
          paddingBottom:"120px",
          backgroundSize: "100% 100%"
        }}
      >
        <div className="text-left text-[#D6E4FA] font-bold text-lg sm:text-xl md:text-2xl mb-3 px-4 sm:px-8 lg:px-16 ml-2 sm:ml-12 lg:ml-[-25rem]" style={{fontFamily: "var(--font-geist-sans)", marginBottom: "100px", marginTop: "-50px"}}>
          <b>Want to work next to the with</b><br/>
          <b>The best team</b><br/>
          <b>In the world</b>
        </div>
                                      <button
            className="group flex items-center h-10 w-full max-w-xs min-w-fit sm:w-1/2 md:w-1/3 lg:w-1/4 bg-transparent border border-black text-black pl-10 pr-8 py-3 rounded-full font-medium text-xs sm:text-sm md:text-base hover:bg-gray-800 hover:text-white transition px-4 sm:px-8 lg:px-16 ml-auto mr-70"
            style={{
              backgroundColor: "#B0C8F2",
              color: "black",
              fontFamily: "var(--font-geist-sans)",
              marginTop: "-80px",
              
            }}
          >

            <span className="truncate">CONNECT WITH US TODAY</span>
          </button>
      </div>

      {/* Desktop Technology Section */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat max-w-screen-2xl mx-auto px-4"
        style={{
          backgroundImage: "url('/assets/container (3).png')",
          minHeight: "350px",
          paddingBottom: "3vh",
          backgroundSize: "100% 100%"
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
            <div style={{ marginTop: "80px" }} className="flex items-center space-x-8 px-4 sm:px-8 lg:px-16">
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

  // Show loading state while detecting device
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  // Return the appropriate view based on device type
  return isMobile ? renderMobileView() : renderDesktopView();
};

export default Footer; 