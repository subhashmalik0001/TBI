"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Starting Up", to: "/startingup" },
  { name: "Tech", to: "/tech" },
  { name: "A.I.", to: "/ai" },
  { name: "INDIE HACKERS", to: "/", isIH: true },
  { name: "Creators", to: "/creators" },
  { name: "Lifestyle", to: "/lifestyle" },
  { name: "Money", to: "/money" },
];

const IHLogo = () => (
  <span
    className="flex items-center justify-center bg-white text-[#1a3552] font-extrabold text-base mr-3"
    style={{
      width: 44,
      height: 100,
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.35rem",
      padding: "8px",
    }}
  >
    IH
  </span>
);

const IHNavbar = () => {
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = useState<number | null>(() => {
    const idx = navItems.findIndex((item) => item.to === pathname);
    return idx >= 0 ? idx : null;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const idx = navItems.findIndex((item) => item.to === pathname);
    if (idx >= 0) setSelectedTab(idx);
  }, [pathname]);

  return (
    <>
      <div className="w-full h-20 bg-black"></div>
      <div className="bg-[url('/pattern.svg')] bg-white bg-repeat w-full" style={{ height: "7px" }} />

      <nav className="bg-white border-b border-[#1a2a3a] shadow sticky top-20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[62px]">
            {/* Mobile Menu Toggle */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black hover:text-gray-700 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Centered Tabs (Desktop only) */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-1 h-full">
              {navItems.map((item, idx) => {
                let paddingClass = "px-4";
                let content: React.ReactNode = item.name;
                let extraClass = "";

                if (item.name === "Tech") paddingClass = "px-2";
                if (item.name === "A.I.") paddingClass = "px-1";
                if (item.isIH) {
                  paddingClass = "px-10";
                  extraClass = "flex items-center font-bold";
                  content = (
                    <>
                      <IHLogo />
                      <span className="tracking-wide text-[1.13rem] font-semibold">INDIE HACKERS</span>
                    </>
                  );
                }

                const isSelected = selectedTab === idx;

                return (
                  <Link
                    key={idx}
                    href={`/insights${item.to}`}
                    tabIndex={0}
                    onClick={() => setSelectedTab(idx)}
                    className={`text-center h-full flex items-center justify-center transition ${paddingClass} whitespace-nowrap
                      ${isSelected ? "bg-black text-white" : "text-gray-700 hover:bg-black hover:text-white"}
                      ${extraClass} font-semibold rounded-t-md`}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "1.13rem",
                    }}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={`/insights${item.to}`}
                  onClick={() => {
                    setSelectedTab(idx);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    selectedTab === idx ? "bg-black text-white" : "text-gray-700 hover:bg-black hover:text-white"
                  }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default IHNavbar;
