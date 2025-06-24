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
          {companies.map((c) => (
            <div key={c.name} className="flex items-center gap-2 text-lg font-medium">
              <span className="text-xl">{c.icon}</span>
              {c.name}
            </div>
          ))}
        </div>
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