import Link from "next/link";
import React from "react";

interface IrrationalGridWithTabProps {
  onLinkClick?: () => void;
}

const IrrationalGridWithTab: React.FC<IrrationalGridWithTabProps> = ({ onLinkClick }) => {
  const items = [
    { title: "Pre - Acceleration", height: 200, route: "/pre-acceleration" },
    { title: "Master Classes", height: 250, route: "/master-class" },
    { title: "Pre - Incubation", height: 290, route: "/preincubation" },
    { title: "Bridge Program", height: 160, route: "/bridge-program" },
  ];

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur py-8 px-4 flex justify-center rounded-2xl shadow-xl">
      <div className="w-[500px] flex flex-col ">
        {/* Irrational Masonry Grid */}
        <div className="columns-2 gap-2 mb-6">
          {items.map((item, index) => (
            <Link href={`/programs${item.route}`} key={index} onClick={handleLinkClick}>
              <div
                className="mb-2 break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-cover bg-center text-black relative"
                style={{
                  height: `${item.height}px`,
                  backgroundImage: `url(https://source.unsplash.com/random/600x400?sig=${index})`,
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 p-4 h-full flex items-end justify-between">
                  <span className="text-sm font-semibold">{item.title}</span>
                  <span className="text-xl">↗️</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Slide Tab */}

        <Link href="/programs/incubation" onClick={handleLinkClick}>
          <div className="sticky bottom-0 font-bold bg-gray-100 border border-gray-300 rounded-xl shadow-md p-4 text-center text-sm text-gray-700">
            INCUBATION
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IrrationalGridWithTab;
