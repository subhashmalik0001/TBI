import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[450px] w-full max-w-[-95rem] xl:max-w-[1400px] mx-auto overflow-hidden rounded-3xl mt-9 md:mt-25 pr-3 md:pr-20 shadow-2xl  border-b-8 border-r-8 border-gray-400">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute left-50 top-90 -translate-y-1/2 md:left-16">
          <div className="text-white">
          <div className="absolute left-[-2rem] top-[-0rem] bottom-[-1.23rem] w-1 bg-white"></div>
            <div className="text-6xl md:text-5xl font-bold leading-tight">
              <div>Build</div>
              <div>Connect</div>
              <div>Grow</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 pt-4 pb-6 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Description */}
          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We believe that to maximize returns, you need a fundamental, first-principles understanding of every asset
              in your portfolio. That's why we focus on providing granular-level visibility and insight, so you can
              develop winning strategies for every single investment.
            </p>
          </div>

          {/* Right Column - Statistics */}
          <div className="relative">
            {/* Vertical line on the left - full height, thicker */}
            <div className="absolute left-0 top-[-1rem] bottom-[-1.23rem] w-px bg-black"></div>

            {/* Horizontal line in the middle - full width, thicker */}
            <div className="absolute left-0 right-[-5vw] top-1/2 h-px bg-black -translate-y-1/2"></div>
            <div className="absolute left-[-50rem] right-[-5vw] top-55 h-px bg-black -translate-y-1/2"></div>

            <div className="grid grid-cols-2 gap-4 pl-6">
              <div className="text-center py-4">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">10+</div>
                <div className="text-gray-600 text-xs md:text-sm">Startups Incubated</div>
              </div>
              <div className="text-center py-4">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">25+</div>
                <div className="text-gray-600 text-xs md:text-sm">Startups Accelerated</div>
              </div>
              <div className="text-center py-4">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">₹2.5Cr+</div>
                <div className="text-gray-600 text-xs md:text-sm">Total Funding Raised</div>
              </div>
              <div className="text-center py-4">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">2000+</div>
                <div className="text-gray-600 text-xs md:text-sm">Students Trained</div>
              </div>
            </div>
            
   
          </div>
       
        </div>
        
      </div>
      <div className="px-4 py-16 md:px-8 lg:px-16 border-t border-gray-200">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Revolutionizing the Venture
            <br />
            Capital Ecosystem!
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-1 h-20 bg-red-500 flex-shrink-0 mt-1"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We help founders at their earliest stages regardless of their age.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-1 h-16 bg-red-500 flex-shrink-0 mt-1"></div>
              <p className="text-lg text-gray-700 leading-relaxed">We give startups a huge fundraising advantage.</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-1 h-16 bg-red-500 flex-shrink-0 mt-1"></div>
              <p className="text-lg text-gray-700 leading-relaxed">We improve the success rate of our startups.</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-1 h-20 bg-red-500 flex-shrink-0 mt-1"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our companies have a track record of becoming billion dollar companies.
              </p>
            </div>
          </div>

          {/* Right Column - Community Image */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
           
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
                Join A Community Of
                <br />
                Smart & Innovative
                <br />
                Companies
              </h3>
            </div>
          </div>
          </div>
          </div>
      
    </div>
    
  );
};

export default Hero;