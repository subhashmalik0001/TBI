'use client';

import React from "react";
import { useDeviceDetection } from "../hooks/useDeviceDetection";
import MobileHero from "./MobileHero";
import DesktopHero from "./DesktopHero";

export default function HookBasedHero() {
  const { isMobile, isTablet, isDesktop, isLoading } = useDeviceDetection();

  // Show loading state while detecting device
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  // Different functions for different devices
  const renderMobileView = () => <MobileHero />;
  const renderTabletView = () => <MobileHero />; // You can create a separate TabletHero component
  const renderDesktopView = () => <DesktopHero />;

  // Choose which function to call based on device
  if (isMobile) {
    return renderMobileView();
  } else if (isTablet) {
    return renderTabletView();
  } else if (isDesktop) {
    return renderDesktopView();
  }

  // Fallback to mobile view
  return renderMobileView();
} 