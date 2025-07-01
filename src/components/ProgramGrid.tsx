import Link from "next/link";
import React from "react";

interface IrrationalGridWithTabProps {
  onLinkClick?: () => void;
}

const IrrationalGridWithTab: React.FC<IrrationalGridWithTabProps> = ({ onLinkClick }) => {
  const items = [
    {
      title: "Pre - Acceleration",
      height: 85,
      route: "/pre-acceleration",
      bg: "https://media.licdn.com/dms/image/sync/v2/D4E27AQEo_tvCgXk4yQ/articleshare-shrink_800/articleshare-shrink_800/0/1711545884171?e=2147483647&v=beta&t=0hipUQWjqJUXfCCM4vw9EpIp9NFANrrZF6ck-FBvEFI",
      hoverText: "Launch your startup journey with foundational knowledge and essential skills development."
    },
    {
      title: "Master Classes",
      height: 171,
      route: "/master-class",
      bg: "https://pbs.twimg.com/media/Gre7cpwbwAAPfiy?format=jpg&name=4096x4096",
      hoverText: "Learn from industry experts through specialized workshops and advanced training sessions."
    },
    {
      title: "Pre - Incubation",
      height: 171,
      route: "/preincubation",
      bg: "https://imageio.forbes.com/specials-images/imageserve/60638bbdbe8ac107c34ae7fc/Developers-Working-From-Home-Office-/960x0.jpg?height=473&width=711&fit=bounds",
      hoverText: "We believe that to maximize returns, you need a fundamental, first-principles understanding of every asset in your portfolio. That's why we focus on providing granular-level visibility and insight, so you can develop winning strategies for every single investment."
    },
    {
      title: "Bridge Program",
      height: 85,
      route: "/bridge-program",
      bg: "https://images.ctfassets.net/y4cma050c2bp/782rVF82Aj4LLJ2VT2BSch/10a4728e9912371d282a000af8f89be6/2.jpg",
      hoverText: "Connect your ideas to market-ready solutions through our comprehensive bridge program."
    },
  ];

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur py-8 px-4 flex justify-center rounded-2xl shadow-xl">
      <div className="w-[356px] flex flex-col ">
        {/* Irrational Masonry Grid */}
        <div className="columns-2 gap-2 mb-2">
          {items.map((item, index) => (
            <Link href={`/programs${item.route}`} key={index} onClick={handleLinkClick}>
              <div
                className="mb-2 break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-cover bg-center text-black relative group"
                style={{
                  height: `${item.height}px`,
                  backgroundImage: `url(${item.bg})`,
                }}
              >
                {/* Default overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition-opacity duration-300" />
                
                {/* Hover overlay with red background */}
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Default content */}
                <div className="relative z-10 p-4 h-full flex items-end justify-between group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-sm font-semibold text-white">{item.title}</span>
                </div>
                
                {/* Hover content */}
                <div className="absolute inset-0 p-2 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  {/* Icon in the top-right corner */}
                  <img 
                    src="https://thumbs.dreamstime.com/b/hospital-cross-symbol-medical-health-icon-isolated-white-background-emergency-design-186320803.jpg" 
                    alt="corner icon" 
                    className="absolute top-2 right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                    style={{ pointerEvents: 'none' }}
                  />
                  <h3 className="text-base font-bold text-white mb-1 break-words leading-tight">{item.title}</h3>
                  <p className="text-[10px] text-white leading-snug break-words">{item.hoverText}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Slide Tab */}
        <Link href="/programs/incubation" onClick={handleLinkClick}>
          <div className="font-bold bg-red-600 border border-gray-300 rounded-xl shadow-md p-4 text-center text-sm text-white">
            INCUBATION
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IrrationalGridWithTab;