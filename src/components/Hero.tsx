const Hero = () => {
  return (
    <div className="relative h-screen text-black overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20 transform scale-120 object-center"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 -z-10"></div>

      <div className="absolute inset-0 grid grid-cols-2 grid-rows-3">
        <div className="col-span-2 row-span-2 flex items-center justify-start pl-8">
          <h1 className="text-white text-7xl mt-20 font-bold leading-tight">
            Discover. <br></br> Learn.<br></br> Empower.
          </h1>
        </div>
        <div className="border-t-1 border-r-1 border-white">

          <div className="relative z-10 p-6 pl-8 h-full flex flex-col justify-center">
            <div className="transform transition-all duration-500 group-hover:scale-105 flex flex-wrap gap-8">
              {/* Startups Incubated */}
              <div>
                <h1 className="text-red-400 text-7xl font-bold leading-tight mb-2 transition-colors duration-300 group-hover:text-red-300">
                  10+
                </h1>
                <p className="text-white text-2xl font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  Startups Incubated
                </p>
              </div>



              {/* Accelerated */}
              <div>
                <h1 className="text-red-400 text-7xl font-bold leading-tight mb-2 transition-colors duration-300 group-hover:text-red-300">
                  25+
                </h1>
                <p className="text-white text-2xl font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  Startups Accelerated
                </p>
              </div>
            </div>
          </div>




        </div>
        <div className="border-t-1 border-r-1 border-white">

          <div className="relative z-10 p-6 pl-19 h-full flex flex-col justify-center">
            <div className="transform transition-all duration-500 group-hover:scale-105 flex flex-wrap gap-16">
    
              <div>
                <h1 className="text-red-400 text-7xl font-bold leading-tight mb-2 transition-colors duration-300 group-hover:text-red-300">
                ₹2.5Cr+
                </h1>
                <p className="text-white text-2xl font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                Total Funding Raised
                </p>
              </div>



  
              <div>
                <h1 className="text-red-400 text-7xl font-bold leading-tight mb-2 transition-colors duration-300 group-hover:text-red-300">
                2000+
                </h1>
                <p className="text-white text-2xl font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
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