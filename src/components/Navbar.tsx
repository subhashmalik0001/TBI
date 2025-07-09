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
} from "lucide-react";

interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
  className?: string;
  titleClassName?: string;
}

function MenuItem({ title, icon, onPress, className, titleClassName }: MenuItemProps) {
  return (
    <button
      onClick={onPress}
      className={`
        relative overflow-hidden rounded-2xl 
        transition-all duration-150
        ${className}
      `}
    >
      {/* Inner highlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 via-transparent to-black/10" />
      <div className="relative flex flex-col items-center justify-center h-full p-4">
        <div className="mb-2">{icon}</div>
        <span className={`font-medium text-center leading-tight ${titleClassName}`}>{title}</span>
      </div>
    </button>
  );
}

interface MobileMenuProps {
  onClose?: () => void;
}

function MobileMenu({ onClose }: MobileMenuProps) {
  const handleMenuPress = (item: string) => {
    if (onClose) onClose();
  };
  const handleApplyNow = () => {
    if (onClose) onClose();
  };
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700" />
      {/* Close button */}
      <div className="absolute top-0 right-0 p-4 z-20">
        <button
          className="text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
          onClick={onClose}
          aria-label="Close menu"
        >
          <HiX className="w-7 h-7" />
        </button>
      </div>
      {/* Menu content */}
      <div className="relative z-10 p-5 pt-16 pb-10 h-full w-full flex flex-col justify-center items-center">
        <div className="space-y-3 w-full max-w-md mx-auto">
          {/* Row 1 */}
          <div className="flex gap-3 h-24">
            <MenuItem
              title="Home"
              icon={<Home size={24} color="#4a5568" />}
              onPress={() => handleMenuPress("Home")}
              className="flex-[2] bg-gradient-to-b from-pink-200 via-pink-300 to-pink-400 border border-pink-200 shadow-lg"
              titleClassName="text-gray-700 text-sm"
            />
            <div className="flex-1 grid grid-cols-1 gap-3">
              <MenuItem
                title="About"
                icon={<Info size={16} color="#ffffff" />}
                onPress={() => handleMenuPress("About")}
                className="h-12 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 border border-gray-400 shadow-lg"
                titleClassName="text-white text-xs"
              />
              <MenuItem
                title="Offerings"
                icon={<ShoppingBag size={16} color="#ffffff" />}
                onPress={() => handleMenuPress("Offerings")}
                className="h-12 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 border border-gray-400 shadow-lg"
                titleClassName="text-white text-xs"
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex gap-3 h-12">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <MenuItem
                title="Team"
                icon={<Users size={16} color="#ffffff" />}
                onPress={() => handleMenuPress("Team")}
                className="bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 border border-gray-400 shadow-lg"
                titleClassName="text-white text-xs"
              />
              <MenuItem
                title="Insights"
                icon={<TrendingUp size={16} color="#ffffff" />}
                onPress={() => handleMenuPress("Insights")}
                className="bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 border border-gray-400 shadow-lg"
                titleClassName="text-white text-xs"
              />
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex gap-3 h-16">
            <MenuItem
              title="Events"
              icon={<Calendar size={16} color="#ffffff" />}
              onPress={() => handleMenuPress("Events")}
              className="w-16 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 border border-gray-400 shadow-lg"
              titleClassName="text-white text-xs"
            />
            <MenuItem
              title="Leadership"
              icon={<Crown size={20} color="#4a5568" />}
              onPress={() => handleMenuPress("Leadership")}
              className="flex-1 bg-gradient-to-b from-pink-200 via-pink-300 to-pink-400 border border-pink-200 shadow-lg"
              titleClassName="text-gray-700 text-sm"
            />
          </div>
          {/* Row 4 */}
          <div className="flex gap-3 h-16">
            <MenuItem
              title="Programs"
              icon={<Code size={20} color="#4a5568" />}
              onPress={() => handleMenuPress("Programs")}
              className="flex-1 bg-gradient-to-b from-pink-200 via-pink-300 to-pink-400 border border-pink-200 shadow-lg"
              titleClassName="text-gray-700 text-sm"
            />
            <div className="flex gap-3">
              <MenuItem
                title="X"
                icon={<LucideX size={16} color="#ffffff" />}
                onPress={() => handleMenuPress("X")}
                className="w-16 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 border border-gray-400 shadow-lg"
                titleClassName="text-white text-xs"
              />
              <MenuItem
                title="Instagram"
                icon={<Instagram size={16} color="#ffffff" />}
                onPress={() => handleMenuPress("Instagram")}
                className="w-16 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 border border-gray-400 shadow-lg"
                titleClassName="text-white text-xs"
              />
            </div>
          </div>
          {/* Row 5 */}
          <div className="flex gap-3 h-24">
            <MenuItem
              title="Incubation"
              icon={<Container size={24} color="#ffffff" />}
              onPress={() => handleMenuPress("Incubation")}
              className="flex-[2] bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 border border-gray-400 shadow-lg"
              titleClassName="text-white text-sm"
            />
            <div className="flex-1 grid grid-cols-1 gap-3">
              <MenuItem
                title="Offerings"
                icon={<ShoppingBag size={16} color="#ffffff" />}
                onPress={() => handleMenuPress("Offerings")}
                className="h-12 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 border border-gray-400 shadow-lg"
                titleClassName="text-white text-xs"
              />
              <MenuItem
                title="Journey"
                icon={<Route size={16} color="#ffffff" />}
                onPress={() => handleMenuPress("Journey")}
                className="h-12 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 border border-gray-400 shadow-lg"
                titleClassName="text-white text-xs"
              />
            </div>
          </div>
        </div>
        {/* Apply Now Button */}
        <button
          onClick={handleApplyNow}
          className="
            w-full mt-8 rounded-3xl overflow-hidden
            bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400
            border border-gray-300
            shadow-lg
            hover:from-gray-150 hover:via-gray-250 hover:to-gray-350
            active:from-gray-300 active:via-gray-400 active:to-gray-500
            transition-all duration-150
          "
        >
          <div className="py-4 px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 rounded-3xl" />
            <span className="relative text-gray-700 text-lg font-bold drop-shadow-sm">Apply Now</span>
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