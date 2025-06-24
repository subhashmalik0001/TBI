import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen text-black overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20 transform scale-110 md:scale-120 object-center"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 -z-10"></div>

      {/* Mobile Layout */}
      <div className="absolute inset-0 flex flex-col md:hidden">
        {/* Main heading section */}
        <div className="flex-1 flex items-center justify-start pt-20">
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight text-left pl-0 ml-0">
            Build. <br /> Connect .
            <br /> Grow.
          </h1>
        </div>

        <div className="flex-1 flex flex-col justify-center px-4 pb-8">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4">
              <h2 className="text-red-400 text-3xl sm:text-4xl font-bold leading-tight mb-1">10+</h2>
              <p className="text-white text-sm sm:text-base font-medium opacity-80">Startups Incubated</p>
            </div>
            <div className="p-4">
              <h2 className="text-red-400 text-3xl sm:text-4xl font-bold leading-tight mb-1">25+</h2>
              <p className="text-white text-sm sm:text-base font-medium opacity-80">Startups Accelerated</p>
            </div>
            <div className="p-4">
              <h2 className="text-red-400 text-3xl sm:text-4xl font-bold leading-tight mb-1">₹2.5Cr+</h2>
              <p className="text-white text-sm sm:text-base font-medium opacity-80">Total Funding Raised</p>
            </div>
            <div className="p-4">
              <h2 className="text-red-400 text-3xl sm:text-4xl font-bold leading-tight mb-1">2000+</h2>
              <p className="text-white text-sm sm:text-base font-medium opacity-80">Students Trained</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="absolute inset-0 hidden md:grid grid-cols-2 grid-rows-3">
        <div className="col-span-2 row-span-2 flex items-center justify-start pl-8 lg:pl-12">
          <h1 className="text-white text-5xl lg:text-6xl xl:text-7xl mt-20 font-bold leading-tight">
            Build. <br /> Connect.
            <br /> Grow.
          </h1>
        </div>

        <div className="border-t border-r border-white">
          <div className="relative z-10 p-4 lg:p-6 xl:p-8 h-full flex flex-col justify-center">
            <div className="transform transition-all duration-500 group-hover:scale-105 flex flex-wrap gap-4 lg:gap-6 xl:gap-8">
              {/* Startups Incubated */}
              <div>
                <h1 className="text-red-400 text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight mb-2 transition-colors duration-300 group-hover:text-red-300">
                  10+
                </h1>
                <p className="text-white text-lg lg:text-xl xl:text-2xl font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  Startups Incubated
                </p>
              </div>

              {/* Accelerated */}
              <div>
                <h1 className="text-red-400 text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight mb-2 transition-colors duration-300 group-hover:text-red-300">
                  25+
                </h1>
                <p className="text-white text-lg lg:text-xl xl:text-2xl font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  Startups Accelerated
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-r border-white">
          <div className="relative z-10 p-4 lg:p-6 xl:p-8 h-full flex flex-col justify-center">
            <div className="transform transition-all duration-500 group-hover:scale-105 flex flex-wrap gap-4 lg:gap-8 xl:gap-16">
              <div>
                <h1 className="text-red-400 text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight mb-2 transition-colors duration-300 group-hover:text-red-300">
                  ₹2.5Cr+
                </h1>
                <p className="text-white text-lg lg:text-xl xl:text-2xl font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  Total Funding Raised
                </p>
              </div>

              <div>
                <h1 className="text-red-400 text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight mb-2 transition-colors duration-300 group-hover:text-red-300">
                  2000+
                </h1>
                <p className="text-white text-lg lg:text-xl xl:text-2xl font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  Students Trained
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 