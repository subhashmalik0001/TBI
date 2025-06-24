"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProgramGrid from "./ProgramGrid";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showAboutPopover, setShowAboutPopover] = useState(false);
  const [mounted, setMounted] = useState(false);

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
  const headerClasses = mounted 
    ? `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white text-black shadow-lg border-black' : 'bg-transparent text-white border-white'} border-b-1`
    : 'fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent text-white border-white border-b-1';

  const logoClasses = mounted 
    ? `flex items-center gap-4 p-8 ${scrolled ? 'border-black' : 'border-white'} border-r-1`
    : 'flex items-center gap-4 p-8 border-white border-r-1';

  const logoImageClasses = mounted 
    ? `w-40 ${scrolled ? 'invert' : ''}`
    : 'w-40';

  const applyButtonClasses = mounted
    ? `${scrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white/20 hover:bg-white/30'} mr-8 py-2 px-6 rounded-lg font-bold transition-colors duration-300`
    : 'bg-white/20 hover:bg-white/30 mr-8 py-2 px-6 rounded-lg font-bold transition-colors duration-300';

  const aboutLinkClasses = (baseClasses: string) => mounted
    ? `${baseClasses} ${scrolled ? 'hover:bg-black/70 hover:text-white' : 'hover:bg-white/30'}`
    : `${baseClasses} hover:bg-white/30`;

  return (
    <header className={headerClasses}>
      <nav className="flex items-center justify-between relative">
        <Link href={`/`}>
        <div className={logoClasses}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className={logoImageClasses}
          />
        </div>
        </Link>

        <div className="flex gap-16 text-lg p-8">
          <div
            className="relative"
            onMouseEnter={() => setShowAboutPopover(true)}
            onMouseLeave={() => setShowAboutPopover(false)}
            onFocus={() => setShowAboutPopover(true)}
            onBlur={() => setShowAboutPopover(false)}
            tabIndex={0}
          >
            <a href="/about" className="hover:underline focus:outline-none">About</a>
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
            <a href="#" className="hover:underline focus:outline-none">Programs</a>
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-4 z-50 transition-all duration-300 ${showPrograms ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              style={{ minWidth: '420px' }}
            >
              <ProgramGrid onLinkClick={() => setShowPrograms(false)} />
            </div>
          </div>
          <a href="/insights" className="hover:underline">Insights</a>
          <a href="/events" className="hover:underline">Events</a>
        </div>

        <a href="/apply" className={applyButtonClasses}>
          APPLY TO INCUBATOR
        </a>
      </nav>
    </header>
  );
};

export default Navbar; 