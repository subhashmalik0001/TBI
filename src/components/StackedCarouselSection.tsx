'use client';
import { useState } from "react";

const cards = [
  { color: "bg-yellow-100", z: 10 },
  { color: "bg-green-200", z: 20 },
  { color: "bg-red-400", z: 30 },
  { color: "bg-green-200", z: 20 },
  { color: "bg-yellow-100", z: 10 },
];

const companies = [
  { name: "Alt+Shift", icon: "🌊" },
  { name: "AlphaWave", icon: "🌐" },
  { name: "Acme Corp", icon: "✦" },
  { name: "45 Degrees°", icon: "↗" },
];

const StackedCarouselSection = () => {
  // For now, static center card
  const [center] = useState(2);

  return (
    <section className="bg-gray-100 py-16 flex flex-col items-center">
      {/* Carousel */}
      <div className="relative h-96 mb-16 w-full">
        {cards.map((card, i) => {
          const distance = Math.abs(i - center);
          const offset = (i - center) * 120;
          const shadow = i === center ? "shadow-xl" : "shadow-md";

          let scale = 1;
          if (distance === 1) scale = 0.85;
          if (distance === 2) scale = 0.7;
          
          return (
            <div
              key={i}
              className={`absolute top-1/2 left-1/2 ${card.color} ${shadow} rounded-2xl transition-all duration-300`}
              style={{
                zIndex: card.z,
                transform: `translateX(calc(-50% + ${offset}px)) translateY(-50%) scale(${scale})`,
                width: 600,
                height: 338,
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)',
              }}
            />
          );
        })}
      </div>
      {/* As Featured In */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">As Featured In</h2>
        <div className="flex gap-8 flex-wrap justify-center text-gray-500">
          
        </div>
      </div>
      {/* Animated Sponsor Logos */}
      <div className="w-full h-[20vh] overflow-hidden py-10">
        <div
          className="flex gap-8 whitespace-nowrap group hover:[animation-play-state:paused] px-1 animate-logo-scroll"
        >
          {Array(2).fill(null).flatMap(() => [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
          ]).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`sponsor-${idx}`}
              className="inline-block object-contain"
              style={{ width: "150px", height: "70px" }}
            />
          ))}
        </div>
        <style jsx>{`
          .animate-logo-scroll {
            animation: scroll 15s linear infinite;
            animation-fill-mode: forwards;
            animation-direction: normal;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
      <div className="w-full max-w-3xl mt-12">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1 bg-white rounded-2xl shadow-md p-8 flex items-center justify-center min-h-[180px]">
            <span className="text-gray-700 font-semibold text-lg">Box 2</span>
          </div>
          <div className="col-span-1 bg-white rounded-2xl shadow-md p-8 flex items-center justify-center min-h-[180px]">
            <span className="text-gray-700 font-semibold text-lg">Box 3</span>
          </div>
          <div className="col-span-2 bg-white rounded-2xl shadow-md p-8 flex items-center justify-center min-h-[180px]">
            <span className="text-gray-700 font-semibold text-lg">Box 1 (spans 2 columns)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedCarouselSection; 