"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProgramGrid from "./ProgramGrid";
import Link from "next/link";
import { HiMenu, HiX } from 'react-icons/hi';
import { usePathname } from "next/navigation";

interface NavbarProps { forceWhiteBg?: boolean; hideOnInsights?: boolean; }

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

  // Prevent hydration mismatch by not rendering scroll-dependent styles until mounted
  const headerClasses = forceWhiteBg
    ? 'fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white text-black border-black border-b shadow-lg'
    : mounted 
      ? `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white text-black shadow-lg border-black' : 'bg-transparent text-white border-white'} border-b`
      : 'fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent text-white border-white border-b';

  const logoClasses = mounted 
    ? `flex items-center gap-2 md:gap-4 p-2 md:p-3 lg:p-4 ${scrolled ? 'border-black' : 'border-white'} border-r`
    : 'flex items-center gap-2 md:gap-4 p-2 md:p-3 lg:p-4 border-white border-r';

  const logoImageClasses = '';

  const applyButtonClasses = mounted
    ? `${scrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white/20 hover:bg-white/30'} mr-4 md:mr-6 lg:mr-8 py-2 px-4 md:px-6 rounded-lg font-bold transition-colors duration-300 text-sm md:text-base`
    : 'bg-white/20 hover:bg-white/30 mr-4 md:mr-6 lg:mr-8 py-2 px-4 md:px-6 rounded-lg font-bold transition-colors duration-300 text-sm md:text-base';

  const aboutLinkClasses = (baseClasses: string) => mounted
    ? `${baseClasses} ${scrolled ? 'hover:bg-black/70 hover:text-white' : 'hover:bg-white/30'}`
    : `${baseClasses} hover:bg-white/30`;

  // Fixed hamburger icon classes - now responds to scroll state
  const hamburgerClasses = mounted
    ? `md:hidden flex items-center p-4 focus:outline-none ${scrolled ? 'text-black' : 'text-white'}`
    : 'md:hidden flex items-center p-4 focus:outline-none text-white';

  return (
    <header className={headerClasses}>
      <nav className="flex items-center justify-between relative min-h-[64px] pr-6">
        <Link href={`/`}>
        <div className={logoClasses + ' relative flex items-center'}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-[190px] h-[80px]"
          />
          {/* Hamburger for mobile - now always white and right after logo, touching it */}
          <button
            className="md:hidden flex items-center p-3 ml-53 focus:outline-none bg-red-600 rounded text-red-600 absolute right-0 top-1/2 -translate-y-1/2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ left: '100%', position: 'absolute' }}
          >
            {mobileMenuOpen 
              ? <HiX className="w-6 h-6 text-red-600" /> 
              : <HiMenu className="w-6 h-6 text-red-600" />
            }
          </button>
        </div>
        </Link>

        {/* Desktop Menu */}
        <div className="gap-8 lg:gap-12 xl:gap-16 text-base lg:text-lg p-2 md:p-3 lg:p-4 hidden md:flex">
          <div
            className="relative"
            onMouseEnter={() => setShowAboutPopover(true)}
            onMouseLeave={() => setShowAboutPopover(false)}
            onFocus={() => setShowAboutPopover(true)}
            onBlur={() => setShowAboutPopover(false)}
            tabIndex={0}
          >
            <a href="/about" className="hover:underline focus:outline-none">
              About
            </a>
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-4 z-50 transition-all duration-300 ${showAboutPopover ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              style={{ minWidth: '280px' }}
            >
              <div className="bg-white/20 backdrop-blur py-6 px-4 flex flex-col rounded-2xl shadow-xl text-black">
                <Link
                  href="/about#journey"
                  className={aboutLinkClasses("block py-2 px-4 rounded-lg transition-colors font-semibold")}
                >
                  Our Journey
                </Link>
                <Link
                  href="/about#leadership"
                  className={aboutLinkClasses("block py-2 px-4 rounded-lg transition-colors font-semibold")}
                >
                  Leadership
                </Link>
                <Link
                  href="/about#team"
                  className={aboutLinkClasses("block py-2 px-4 rounded-lg transition-colors font-semibold")}
                >
                  Our Team
                </Link>
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
            <a href="#" className="hover:underline focus:outline-none">
              Programs
            </a>
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-4 z-50 transition-all duration-300 ${showPrograms ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              style={{ minWidth: '380px' }}
            >
              <ProgramGrid onLinkClick={() => setShowPrograms(false)} />
            </div>
          </div>
          <a href="/insights" className="hover:underline">
            Insights
          </a>
          <a href="/events" className="hover:underline">
            Events
          </a>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center md:hidden">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <HiX className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-6 text-xl text-white text-center">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 transition-colors"
              >
                About
              </Link>
              <Link href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-400 transition-colors">
                Programs
              </Link>
              <Link
                href="/insights"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 transition-colors"
              >
                Insights
              </Link>
              <Link
                href="/events"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 transition-colors"
              >
                Events
              </Link>
              <button
                  type="submit"
                  className="bg-red-600 text-white px-12 py-4 text-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
                >
              APPLY TO INCUBATOR
                </button>
            </div>
          </div>
        )}

        {/* Apply button for desktop */}
        <Link href="/apply" legacyBehavior>
          <a
            className="mr-10 bg-red-600 text-white px-7 py-3 text-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
          >
            APPLY TO INCUBATOR
          </a>
        </Link>

      
      </nav>
    </header>
  );
};

export default Navbar; 