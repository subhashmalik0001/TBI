"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProgramGrid from "./ProgramGrid";
import Link from "next/link";
import { HiX } from 'react-icons/hi';
import {
  Home,
  Info,
  ShoppingBag,
  Users,
  TrendingUp,
  Calendar,
  Crown,
  Code,
  Container,
  X as LucideX,
  Instagram,
  Route,
  User,
  Package,
  Box,
  Activity,
  Map
} from "lucide-react";
import React from "react"; // Added for React.cloneElement

interface MenuItemProps {
  title?: string;
  icon: React.ReactNode;
  onPress: () => void;
  className?: string;
  titleClassName?: string;
}
function MenuItem({ title, icon, onPress, className, titleClassName }: MenuItemProps) {
  const isHome = title === "Home";
  const isLeadership = title === "Leadership";
  const isPrograms = title === "Programs";
  const isBridgeProgram = title?.trim() === "Bridge Program";
  // Change: Use new color for all except Home, Leadership, Programs, Bridge Program
  const isSpecial = isHome || isLeadership || isPrograms || isBridgeProgram;
  const isIconOnly = !title;
  return (
    <button
      onClick={onPress}
      className={`
        relative overflow-hidden
        transition-all duration-150
        ${isSpecial ? '' : 'bg-[#ACAEB1]'}
        ${className}
        ${isHome ? 'rounded-[2.3rem]' : ''} // Extra roundness for Home only
        min-w-[80px] min-h-[80px] md:min-w-[100px] md:min-h-[100px] // Increased size
      `}
    >
      {/* Gradient background for Home, Leadership, Programs, and Bridge Program button only */}
      {isSpecial ? (
        <div className={`absolute inset-0 ${isHome ? 'rounded-[2em]' : 'rounded-[1.5rem]'} bg-gradient-to-br from-yellow-100  via-pink-100 to-gray-100 pointer-events-none z-0`} />
      ) : (
        <div
  className={`
    absolute inset-0 rounded-[1.5rem] 
    bg-[#B3B5B7] 
    pointer-events-none z-0 
    shadow-[inset_0_0_10px_rgba(255,255,255,0.5)]
  `}
/>
      )}
      <div className={`relative flex flex-col items-center justify-center h-full p-6 z-10 ${isIconOnly ? 'p-0' : ''}`}> {/* Remove padding for icon-only */}
        <div className={`mb-2 ${isIconOnly ? 'w-full h-full flex items-center justify-center' : ''}`}>
          {icon}
        </div>
        {title && <span className={`font-medium text-center leading-tight ${titleClassName}`}>{title}</span>}
      </div>
    </button>
  );
}

interface MobileMenuProps {
  onClose?: () => void;
}
// MobileMenu.tsx
function MobileMenu({ onClose }: { onClose?: () => void }) {
  const handleMenuPress = (item: string) => {
    if (onClose) onClose();
  };
  const handleApplyNow = () => {
    if (onClose) onClose();
  };

  
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-[#4E5258]" />

      <div className="absolute top-0 right-0 p-4 z-20">
        <button
          className="text-black p-2 rounded-full hover:bg-gray-200 focus:outline-none"
          onClick={onClose}
          aria-label="Close menu"
        >
          <HiX className="w-7 h-7 text-white" />
        </button>
      </div>

      <div className="relative z-10 p-5 pt-16 pb-10 h-full w-full flex flex-col justify-center items-center">
        <div className="space-y-3 w-full max-w-md mx-auto">
          <div className="flex gap-4 h-44 w-full">
            <MenuItem
              title="Home"
              icon={<Image src="/assets/home.svg" alt="Home" width={35} height={35} />}
              onPress={() => handleMenuPress("Home")}
              className={`flex-1 border-4 border-gray-400 rounded-[1.5rem]`.replace('bg-[#AFAFAF]', '')}
              titleClassName="text-[#444] text-sm"
            />
            <div className="flex flex-col ml-auto gap-4">
              <div className="flex gap-4 h-18">
                <MenuItem
                  title="About"
                  icon={<Image src="/assets/about.svg" alt="Home" width={25} height={25} />}
                  onPress={() => handleMenuPress("X")}
                  className={`w-16 sm:w-14 xs:w-12 border-4 border-gray-400 rounded-[1.5rem]`}
                  titleClassName="text-white text-30"
                />
                <MenuItem
                  title="Offering"
                  icon={<Image src="/assets/offering.svg" alt="Home" width={25} height={25} />}
                  onPress={() => handleMenuPress("Instagram")}
                  className={`w-16 sm:w-14 xs:w-12 border-4 border-gray-400 rounded-[1.5rem]`}
                  titleClassName="text-white text-30"
                />
              </div>
              <div className="flex gap-4 h-16">
                <MenuItem title="Team"  icon={<Image src="/assets/offering.svg" alt="Home" width={25} height={25} />} onPress={() => handleMenuPress("X")} className={`w-16 sm:w-14 xs:w-12 border-4 border-gray-400 rounded-[1.5rem]`} titleClassName="text-white text-30" />
                <MenuItem title="Insights" icon={<Image src="/assets/offering.svg" alt="Home" width={25} height={25} />} onPress={() => handleMenuPress("Instagram")} className={`w-16 sm:w-14 xs:w-12 border-4 border-gray-400 rounded-[1.5rem]`} titleClassName="text-white text-30" />
              </div>
            </div>
          </div>

          <div className="flex gap-4 h-16">
          <MenuItem
  title="Events"
  icon={<Image src="/assets/team.svg" alt="Home" width={30} height={30} />}
  onPress={() => handleMenuPress("Events")}
  className={`
    w-16
    border-4 border-gray-400
    rounded-[1.5rem]
   
    backdrop-blur-md
 
    hover:scale-105
    transition-transform duration-300
  `}
  titleClassName="text-white text-30"
/>



          </div>
          <div className="flex gap-4 ml-55 mt-[-5rem]  h-20">
            <MenuItem
              title="Leadership"
              icon={<Image src="/assets/home.svg" alt="Home" width={30} height={30} />}
              onPress={() => handleMenuPress("Leadership")}
              className={`flex-1 border-4 border-gray-400 rounded-[2rem]`}
              titleClassName="text-[#444] text-sm"
            />
          </div>
          <div className="flex gap-5 h-22 w-full">
            <MenuItem
              title="Programs"
              icon={<Image src="/assets/home.svg" alt="Home" width={35} height={35} />}
              onPress={() => handleMenuPress("Home")}
              className={`flex-1 border-4 border-gray-400 rounded-[2rem]`.replace('bg-[#AFAFAF]', '')}
              titleClassName="text-[#444] text-sm"
            />
            <div className="flex flex-col ml-auto gap-4">
              <div className="flex gap-4 h-16">
                <MenuItem
                  icon={<Image src="/assets/X.svg" alt="X" width={160} height={160} className="object-cover" />}
                  onPress={() => handleMenuPress("X")}
                  className={`w-20 h-20 border-4 border-gray-400 rounded-[1.5rem]`}
                />
                <MenuItem
                  icon={<Image src="/assets/instagram.svg" alt="Instagram" width={160} height={160} className="object-cover" />}
                  onPress={() => handleMenuPress("Instagram")}
                  className={`w-20 h-20 border-4 border-gray-400 rounded-[1.5rem]`}
                />
              </div>
           
            </div>
            
          </div>
          
            
          

         

         

         
          <div className="flex gap-4 h-44 w-full">
            <MenuItem
              title="Incubation"
              icon={<Image src="/assets/incubation.svg" alt="Home" width={35} height={35} />}
              onPress={() => handleMenuPress("Home")}
              className={`flex-1 border-4 border-gray-400 rounded-[1.5rem] bg-[#B3B5B7]`}
              titleClassName="text-white text-30"
            />
             <div className="flex flex-col ml-auto gap-4">
              <div className="flex gap-4 h-20">
                <MenuItem
                  title="About"
                  icon={<Image src="/assets/about.svg" alt="Home" width={25} height={25} />}
                  onPress={() => handleMenuPress("X")}
                  className={`w-16 sm:w-14 xs:w-12 border-4 border-gray-400 rounded-[1.5rem]`}
                  titleClassName="text-white text-30"
                />
                <MenuItem
                  title="Offering"
                  icon={<Image src="/assets/offering.svg" alt="Home" width={25} height={25} />}
                  onPress={() => handleMenuPress("Instagram")}
                  className={`w-16 sm:w-14 xs:w-12 border-4 border-gray-400 rounded-[1.5rem]`}
                  titleClassName="text-white text-30"
                />
              </div>
              <div className="flex gap-4 h-16">
                <MenuItem title="Team"  icon={<Image src="/assets/offering.svg" alt="Home" width={25} height={25} />} onPress={() => handleMenuPress("X")} className={`w-16 sm:w-14 xs:w-12 border-4 border-gray-400 rounded-[1.5rem]`} titleClassName="text-white text-30" />
               
              </div>
            </div>
         
          </div>

         

         

         
          
        </div>

        <button
          onClick={handleApplyNow}
          className="w-44 h-16 ml-96 mr-40 mt-[2rem] rounded-[15rem] overflow-hidden bg-[#AFAFAF] border border-white/30 shadow-[inset_0_0_0.5px_rgba(255,255,255,0.4),0_4px_30px_rgba(0,0,0,0.1)] hover:bg-[#BFBFBF] transition-all duration-300"
        >
          <div className="py-5 px-10 relative">
            <div className="absolute inset-0 bg-gray-200 rounded-[1px]" />
            <span className="relative text-[#444] text-lg font-bold drop-shadow-sm ">Apply Now</span>
          </div>
        </button>
      </div>
    </div>
  );
}



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showAboutPopover, setShowAboutPopover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobilePrograms, setShowMobilePrograms] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // Set initial scroll state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent hydration mismatch by not rendering scroll-dependent styles until mounted
  const headerClasses = 'fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white text-black border-b border-black';

  const logoClasses = 'flex items-center gap-4 p-4 border-r-1';

  const logoImageClasses = 'w-38';

  const applyButtonClasses = 'bg-black text-white mr-8 py-2 px-6 rounded-lg font-bold transition-colors duration-300 hover:bg-gray-800';

  const aboutLinkClasses = (baseClasses: string) => `${baseClasses} hover:bg-black/70 hover:text-white`;

  // Mobile-specific render function
  const renderMobileView = () => (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white text-black">
      <div className="border-b-[1px] border-white max-w-screen-2xl mx-auto px-4">
        <nav className="flex items-center justify-between relative">
          <Link href={`/`}>
          <div className="flex items-center py-0 relative h-full ml-0">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              className="w-40 h-17 sm:w-50 sm:h-10 md:w-50 md:h-20"
              priority
            />
          </div>
          </Link>

        {/* Mobile Hamburger Menu */}
        <button
          className="ml-auto lg:hidden flex flex-col justify-center items-center w-10 h-8 focus:outline-none transition-colors duration-200 text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Image src="/assets/line.png" alt="Menu" width={30} height={40} />
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        )}
        </nav>
      </div>
    </header>
  );

  // Desktop-specific render function
  const renderDesktopView = () => (
  <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white text-black">
    <div className="max-w-screen-2xl mx-auto px-9 custom-15inch-padding">
      <div className="border-b ml-10 mr-10 border-gray-300 px-6 lg:px-10">
        <nav className="flex items-center justify-between relative">
          <Link href={`/`}>
            <div className="flex items-center py-0 relative h-full ml-0">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={11}
                height={50}
                className="w-40 h-12 sm:w-50 sm:h-10 md:w-50 md:h-20"
                priority
              />
            </div>
          </Link>

          {/* Vertical divider after logo */}
          <div className="hidden lg:block h-25 border-l border-gray-300 mx-4"></div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg bg-white p-6">
            <div
              className="relative"
              onMouseEnter={() => setShowAboutPopover(true)}
              onMouseLeave={() => setShowAboutPopover(false)}
              onFocus={() => setShowAboutPopover(true)}
              onBlur={() => setShowAboutPopover(false)}
              tabIndex={0}
            >
              <a href="/about" className="text-black hover:underline focus:outline-none">About</a>
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-4 z-50 transition-all duration-300 ${showAboutPopover ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                style={{ minWidth: '320px' }}
              >
                <div className="bg-white/20 backdrop-blur py-6 px-4 flex flex-col rounded-2xl shadow-xl text-black">
                  <Link href="/about#journey" className={aboutLinkClasses("block py-2 px-4 rounded-lg transition-colors font-semibold")}>Our Journey</Link>
                  <Link href="/about#leadership" className={aboutLinkClasses("block py-2 px-4 rounded-lg transition-colors font-semibold")}>Leadership</Link>
                  <Link href="/about#team" className={aboutLinkClasses("block py-2 px-4 rounded-lg transition-colors font-semibold")}>Our Team</Link>
                </div>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setShowPrograms(true)}
              onMouseLeave={() => setShowPrograms(false)}
              onFocus={() => setShowPrograms(true)}
              onBlur={() => setShowPrograms(false)}
              tabIndex={0}
            >
              <a href="#" className="py-2 text-black bg-white hover:underline focus:outline-none">
                Programs
              </a>
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-2 z-50 transition-all duration-300 ${
                  showPrograms ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                style={{ minWidth: '380px' }}
              >
                <ProgramGrid onLinkClick={() => setShowPrograms(false)} />
              </div>
            </div>

            <a href="/insights" className="py-2 text-black bg-white hover:underline">
              Insights
            </a>
            <a href="/events" className="py-2 text-black bg-white hover:underline">
              Events
            </a>
          </div>

          {/* Desktop Apply Button */}
          <div className="hidden lg:flex">
            <Link href="/apply">
              <button className="bg-red-600 text-white px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200 whitespace-nowrap mr-9">
                APPLY TO INCUBATOR
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  </header>
);

return (
  <>
    {/* Mobile View */}
    <div className="lg:hidden">
      {renderMobileView()}
    </div>

    {/* Desktop View */}
    <div className="hidden lg:block">
      {renderDesktopView()}
    </div>
  </>
);

};

export default Navbar;