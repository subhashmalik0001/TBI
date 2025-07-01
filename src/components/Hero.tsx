import React from "react";
import Image from "next/image";

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
      <div className="absolute left-[-50rem] right-[-5vw] top-348 h-px bg-black -translate-y-1/2"></div>
      <div className="absolute left-[-50rem] right-[-5vw] top-255 h-px bg-black -translate-y-1/2"></div>
      
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
          <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpl-YRnxYXVx78kFqnXIi9I5b5s3bmQZXlg_ae8zgnoCXJAa837sfpK7eI2xZPZclrXAr2mKs1B1gXlOrHZqvQo4naWenEKgnrPeq8-NBQ1BZBqgoQk2vx4lAglHHgE_SpSnMwhBFiCdH6k6KRiIiBcHF66VriJF_vQXOHTOa-3tHGdVzNLZWyEBqwxozw/s2048/473544912_1018141797016754_6719124790330598010_n.jpg" alt="Community of innovative companies" fill className="object-cover" />
           
            <div className="absolute inset-0 bg-black/30" />
            
            <div className="absolute inset-0 flex items-end justify-end p-6 pb-10">
              
              <h3 className="text-white text-lg md:text-2xl lg:text-3xl font-bold text-right leading-tight drop-shadow">
              <div className="absolute left-[19.5rem] top-[-0rem] bottom-[-0rem] w-1 bg-white"></div>
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
      <div className="px-4 py-16 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Services Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 mt-8 lg:mt-0">
              {/* Service Tag */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 border border-gray-400 rounded-full"></div>
                <span className="text-xs text-gray-600 uppercase tracking-wide">What Service We Offer</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                Unleashing the Artistry of Block Studio's Services
              </h2>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Discover Block Studio's dynamic ecosystem, empowering startups with cutting-edge resources, expert
                mentorship, and innovative solutions. We nurture your vision through personalized guidance, strategic
                growth support, and a collaborative community—where every idea matters, and every venture tells a unique
                story. At Block Studio, we don't just incubate startups; we build the future.
              </p>

              {/* Services List */}
              <div className="space-y-4 lg:space-y-6 pt-4 lg:pt-8">
                <div className="text-lg md:text-xl font-semibold text-gray-800">Mentoring</div>
                <div className="text-lg md:text-xl font-semibold text-gray-800">Coworking Space</div>
                <div className="text-lg md:text-xl font-semibold text-gray-800">Creative Studio</div>
                <div className="text-lg md:text-xl font-semibold text-gray-800">Product Studio</div>
                <div className="text-lg md:text-xl font-semibold text-gray-800">X | Labs</div>
                <div className="text-lg md:text-xl font-semibold text-gray-800">House Renovation</div>
              </div>
            </div>

            {/* Right Column - Image with Overlay */}
            <div className="relative w-full order-1 lg:order-2">
              {/* Main Image Container */}
              <div className="relative h-56 xs:h-64 sm:h-72 md:h-80 lg:h-[500px] w-full overflow-hidden rounded-lg">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5605AQFF8a6PY2Kltw/feedshare-thumbnail_720_1280/B56ZZhzaO5HUAw-/0/1745397591544?e=2147483647&v=beta&t=Ml4Y3aWM9rqdPLCPjxL1NJFOmO1wcO7OYN4QtMCI4dE"
                  alt="Team collaboration workspace"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay Card */}
              <div className="absolute left-1/2 bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-[-4rem] lg:right-[-3rem] -translate-x-1/2 lg:translate-x-0 bg-black/90 p-3 sm:p-4 md:p-6 max-w-xs md:max-w-sm w-[90vw] sm:w-auto rounded-lg shadow-lg z-10">
                <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4">Interior Design</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 md:mb-6">
                  Elevate any space with our unparalleled mastery, harmonizing the perfect balance between captivating
                  aesthetics and flawless functionality, enriching every environment with a touch of
                </p>
                <button className="flex items-center gap-2 text-white text-xs sm:text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">
                  <span>{"LET'S BUILD"}</span>
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;