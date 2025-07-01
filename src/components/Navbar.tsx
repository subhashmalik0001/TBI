"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProgramGrid from "./ProgramGrid";
import Link from "next/link";
import { HiMenu, HiX } from 'react-icons/hi';
import { usePathname } from "next/navigation";

interface NavbarProps { 
  forceWhiteBg?: boolean; 
  hideOnInsights?: boolean; 
}

const Navbar = ({ forceWhiteBg = false, hideOnInsights = false }: NavbarProps) => {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  if (hideOnInsights && pathname.startsWith("/insights")) {
    return null;
  }
  
  const [scrolled, setScrolled] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showAboutPopover, setShowAboutPopover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobilePrograms, setShowMobilePrograms] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Set initial scroll state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const headerClasses = forceWhiteBg
    ? 'fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white text-black border-black border-b shadow-lg'
    : mounted 
      ? `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white text-black shadow-lg border-black' : 'bg-transparent text-white border-white'} border-b`
      : 'fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent text-white border-white border-b';

  const aboutLinkClasses = (baseClasses: string) => mounted
    ? `${baseClasses} ${scrolled ? 'hover:bg-black/70 hover:text-white' : 'hover:bg-white/30'}`
    : `${baseClasses} hover:bg-white/30`;

  return (
    <header className={headerClasses}>
      <nav className="flex items-center justify-between relative px-4 sm:px-6 lg:px-8 min-h-[64px]">
        {/* Logo Section */}
        <Link href="/" className="flex-shrink-0">
          <div className="flex items-center py-2 relative h-full">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={40}
              className="w-32 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16"
              priority
            />
            <div className="h-full w-px bg-black ml-4 absolute right-[-9rem] top-0 bottom-0" />
          </div>
        </Link>
       

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg bg-white">
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
            <button className="bg-red-600 text-white px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200 whitespace-nowrap">
              APPLY TO INCUBATOR
            </button>
          </Link>
        </div>
      

        {/* Mobile Hamburger Menu */}
        <button style={{marginLeft:'200px'
        }}
          className={`ml-auto lg:hidden flex flex-col justify-center items-center w-15 h-8 pr-75 focus:outline-none transition-colors duration-200 ${
            mounted && scrolled && !forceWhiteBg ? 'text-black' : 'text-black'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
            mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1.5 ${
            mobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1.5 ${
            mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-menu fixed inset-0 bg-white z-50 lg:hidden">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-white">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={100}
                    height={40}
                    className="w-32 h-12"
                  />
                </Link>
                <button
                  className="text-black p-2"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 flex flex-col justify-center items-center px-6 bg-white">
                <div className="flex flex-col gap-8 text-center w-full max-w-sm">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-black text-xl font-medium py-3 hover:text-red-400 transition-colors border-b border-gray-300 bg-white"
                  >
                    About
                  </Link>
                  <button
                    onClick={() => setShowMobilePrograms((v) => !v)}
                    className="text-black text-xl font-medium py-3 hover:text-red-400 transition-colors border-b border-gray-300 text-left bg-white"
                  >
                    Programs
                  </button>
                  {showMobilePrograms && (
                    <div className="w-full py-4 mx-auto">
                      <ProgramGrid onLinkClick={() => {
                        setShowMobilePrograms(false);
                        setMobileMenuOpen(false);
                      }} />
                    </div>
                  )}
                  <Link
                    href="/insights"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-black text-xl font-medium py-3 hover:text-red-400 transition-colors border-b border-gray-300 bg-white"
                  >
                    Insights
                  </Link>
                  <Link
                    href="/events"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-black text-xl font-medium py-3 hover:text-red-400 transition-colors border-b border-gray-300 bg-white"
                  >
                    Events
                  </Link>
                  {/* Mobile Apply Button */}
                  <div className="pt-6">
                    <Link href="/apply" onClick={() => setMobileMenuOpen(false)}>
                      <button className="w-full bg-red-600 text-white px-8 py-4 text-lg font-bold border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 rounded-md">
                        APPLY TO INCUBATOR
                      </button>
                    </Link>
                  
                  </div>
                 
                  
                </div>
             
              </div>
             
            </div>
            
          </div>
          
        )}
      </nav>
      <div className="absolute left-0 right-[-5vw] top-[-3re] h-px bg-black -translate-y-1/2"></div>
    </header>
  );
};

export default Navbar;