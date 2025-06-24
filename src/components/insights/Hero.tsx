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
        <div className="col-span-2 row-span-2"></div>
        <div className="border-t-1 border-r-1 border-white"></div>
        <div className="border-t-1 border-l-1 border-white"></div>
      </div>
    </div>
  );
};

export default Hero; 