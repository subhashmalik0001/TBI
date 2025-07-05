'use client';

import React, { useState, useEffect } from "react";
import MobileHero from "./MobileHero";
import DesktopHero from "./DesktopHero";

export default function DeviceSpecificHero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      // Check if it's a mobile device
      const isMobileDevice = window.innerWidth < 768 || 
                           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      setIsMobile(isMobileDevice);
      setIsLoading(false);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Show loading state while detecting device
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  // Render appropriate component based on device
  return isMobile ? <MobileHero /> : <DesktopHero />;
} 