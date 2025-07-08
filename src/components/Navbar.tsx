"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProgramGrid from "./ProgramGrid";
import Link from "next/link";
import { HiX } from 'react-icons/hi';

const Navbar = () => {
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
          <div className="mobile-menu fixed inset-0 bg-white z-50 lg:hidden">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-white">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={100}
                    height={60}
                    className="w-40 h-30"
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
                    className="text-black text-xl font-medium py-3 hover:text-red-400 transition-colors border-b border-gray-300  bg-white"
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