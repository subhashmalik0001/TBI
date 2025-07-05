import { ReactNode } from "react";

interface HeaderProps {
  leftText: ReactNode;
  rightText: string;
  iconSrc?: string;
}

export default function Header({ leftText, rightText, iconSrc }: HeaderProps) {
  return (
    <div className="w-full bg-white mb-20">
      {/* Main Grid Container - Left and Right Layout (full width) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-t border-b border-gray-300 min-h-[120px] lg:min-h-[100px] relative">
        {/* Left Section */}
        <div className="px-6 py-4 lg:px-8 lg:py-6 flex items-center relative">
          <div className="relative w-full">
            {iconSrc && (
              <img 
                src={iconSrc} 
                alt="Section Icon" 
                className="w-8 h-6 absolute -top-[-1.1rem] left-0" 
              />
            )}
            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight pl-10">
              {leftText}
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="px-6 py-4 lg:px-8 lg:py-6 flex items-center">
          <div className="w-full">
            <h2 className="text-xs lg:text-sm font-semibold text-gray-900 tracking-wider uppercase">
              {rightText}
            </h2>
          </div>
        </div>

        {/* Vertical Divider for large screens */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300" style={{transform: 'translateX(-0.5px)'}} />
      </div>
    </div>
  );
} 