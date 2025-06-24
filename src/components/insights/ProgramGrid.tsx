import React from "react";

const IrrationalGridWithTab = () => {
  const items = [
    { title: "Pre - Incubation", height: 200 },
    { title: "Idea Validation", height: 250 },
    { title: "Pitch Practice", height: 290 },
    { title: "Mentorship", height: 160 },
  ];

  return (
    <div className="bg-white/20 backdrop-blur py-8 px-4 flex justify-center rounded-2xl shadow-xl">
      <div className="w-[500px] flex flex-col ">
        {/* Irrational Masonry Grid */}
        <div className="columns-2 gap-2 mb-6">
          {items.map((item, index) => (
            <div
              key={index}
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
          ))}
        </div>

        {/* Bottom Slide Tab */}
        <div className="sticky bottom-0 bg-gray-100 border border-gray-300 rounded-xl shadow-md p-4 text-center text-sm text-gray-700">
          🚀 Explore More Opportunities – Tap here to view all programs!
        </div>
      </div>
    </div>
  );
};

export default IrrationalGridWithTab;
