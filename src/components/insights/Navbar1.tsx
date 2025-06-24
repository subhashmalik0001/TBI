"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "☰", to: "#", isIcon: true },
  { name: "PLUS", to: "#", isPlus: true },
  { name: "Starting Up", to: "/startingup" },
  { name: "Tech", to: "/tech" },
  { name: "A.I.", to: "/ai" },
  { name: "INDIE HACKERS", to: "/", isIH: true },
  { name: "Creators", to: "/creators" },
  { name: "Lifestyle", to: "/lifestyle" },
  { name: "Money", to: "/money" },
  { name: "Join", to: "/join", isJoin: true },
];

// Perfectly square logo, increased padding
const IHLogo = () => (
  <span
    className="flex items-center justify-center bg-white text-[#1a3552] font-extrabold text-base mr-3"
    style={{
      width: 44,
      height: 44,
      borderRadius: 0, // Square
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "0.02em",
      fontSize: "1.35rem",
      padding: "8px", // Increased padding
      boxSizing: "border-box",
    }}
  >
    IH
  </span>
);

const IHNavbar = () => {
  const pathname = usePathname();
  // Track which tab is selected (clicked)
  const [selectedTab, setSelectedTab] = React.useState<number | null>(() => {
    const idx = navItems
      .slice(2, -1)
      .findIndex((item) => item.to === pathname);
    return idx >= 0 ? idx : null;
  });

  // Update selectedTab if pathname changes (e.g. via browser nav)
  React.useEffect(() => {
    const idx = navItems
      .slice(2, -1)
      .findIndex((item) => item.to === pathname);
    if (idx >= 0) setSelectedTab(idx);
  }, [pathname]);

  return (
    <>
      {/* Very thin top bar with same background, slightly taller than 1px */}
      <div className="h-31 bg-black">

      </div>
      <div
        className="bg-[url('/pattern.svg')] bg-white bg-repeat w-full"
        style={{ height: "7px" }}
      />
      {/* Main navbar */}
      <nav
        className="bg-[url('/pattern.svg')] bg-white bg-repeat border-b border-[#1a2a3a] shadow h-[62px] flex items-center text-lg font-semibold whitespace-nowrap w-full sticky top-30"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="w-full flex items-center h-full justify-between px-7">
          {/* Triple line and PLUS left, very close, left aligned, increased x padding for both but close together */}
          
          {/* Main nav tabs */}
          <div className="flex flex-1 items-center justify-center gap-1 h-full">
            {navItems.slice(2, -1).map((item, idx) => {
              // Custom padding for Tech, A.I., and Indie Hackers
              let paddingClass = "px-5";
              let content: React.ReactNode = item.name;
              let extraClass = "";
              if (item.name === "Tech") {
                paddingClass = "px-2";
              }
              if (item.name === "A.I.") {
                paddingClass = "px-1";
              }
              if (item.isIH) {
                paddingClass = "px-16";
                extraClass = "flex items-center font-bold";
                content = (
                  <>
                    <IHLogo />
                    <span
                      className="tracking-wide"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1.13rem",
                      }}
                    >
                      INDIE HACKERS
                    </span>
                  </>
                );
              }
              // If selected, keep dark blue background and white text
              const isSelected = selectedTab === idx;
              return (
                <Link
                  key={idx}
                  href={`/insights${item.to}`}
                  tabIndex={0}
                  className={`flex-1 text-center h-full flex items-center justify-center transition rounded-t-md text-lg ${paddingClass} whitespace-nowrap min-w-0 overflow-hidden text-ellipsis
                    ${isSelected
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-black hover:text-white active:bg-white"
                    }
                    transition-all duration-150 ${extraClass}`}
                  style={{
                    minWidth: 0,
                    height: "100%",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.13rem",
                  }}
                  onClick={() => setSelectedTab(idx)}
                >
                  {content}
                </Link>
              );
            })}
          </div>
          {/* Join right, right aligned, reduced height */}
          
        </div>
      </nav>
    </>
  );
};

export default IHNavbar;
