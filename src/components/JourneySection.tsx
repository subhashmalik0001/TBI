"use client";
import React, { useRef, useEffect, useState } from 'react';

const milestones = [
  {
    year: '2015',
    title: 'TBI Foundation Established',
    description: 'The Technology Business Incubator (TBI) was founded by a consortium of leading universities and industry partners to foster innovation and entrepreneurship in the region. The founding ceremony was attended by over 200 dignitaries and marked the beginning of a new era for local startups.',
    images: ['/milestone.jpg'],
  },
  {
    year: '2016',
    title: 'First Startup Bootcamp',
    description: 'Launched our inaugural 12-week Startup Bootcamp, attracting 30+ teams from across the country. The program featured mentorship from Silicon Valley veterans and culminated in a Demo Day attended by top investors.',
    images: ['/milestone.jpg'],
  },
  {
    year: '2017',
    title: 'Seed Fund & Angel Network',
    description: 'Established a $2M seed fund and formed an angel investor network, enabling early-stage funding for 15 promising startups. Several portfolio companies secured follow-on investments and media coverage.',
    images: ['/milestone.jpg'],
  },
  {
    year: '2018',
    title: 'International Partnerships',
    description: 'Signed MOUs with innovation hubs in Singapore and Berlin, facilitating global exchange programs. Hosted the first International Startup Summit, drawing 500+ attendees and 40 speakers from 10 countries.',
    images: ['/milestone.jpg'],
  },
  {
    year: '2019',
    title: 'Expansion to Health & AgriTech',
    description: 'Launched dedicated tracks for HealthTech and AgriTech startups, partnering with leading hospitals and agri-businesses. The HealthTech Demo Day saw 3 startups pilot their solutions in major clinics.',
    images: ['/milestone.jpg'],
  },
];

function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;
  return (
    <div id='journey' className="flex flex-col items-center justify-center w-40 mr-4 ml-4">
      <div className="relative w-36 h-36 mb-2">
        <img
          src={images[current]}
          alt="milestone visual"
          className="w-36 h-36 object-cover rounded-xl shadow-md border-4 border-white"
        />
        {images.length > 1 && (
          <>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 shadow hover:bg-opacity-100"
              onClick={() => setCurrent((current - 1 + images.length) % images.length)}
              aria-label="Previous image"
            >
              &#8592;
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 shadow hover:bg-opacity-100"
              onClick={() => setCurrent((current + 1) % images.length)}
              aria-label="Next image"
            >
              &#8594;
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-1">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`inline-block w-2 h-2 rounded-full ${idx === current ? 'bg-red-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const JourneySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (!containerRef.current) return;
      const elements = Array.from(
        containerRef.current.querySelectorAll('.milestone')
      ) as HTMLElement[];
      const newVisible: number[] = [];
      elements.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          newVisible.push(idx);
        }
      });
      setVisibleIndexes(newVisible);
    };
    
    // Only add scroll listener after mounting
    if (mounted) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mounted]);

  return (
    <section className="py-16  bg-white" ref={containerRef}>
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-black mb-2 tracking-tight">Our Journey</h2>
        <div className="flex justify-center mb-6">
          <span className="block w-10 h-0.5 rounded-full bg-gray-300"></span>
        </div>
        <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto text-base font-normal">
          The dedicated team supporting our mission and community every day.
        </p>
      <div className="relative flex flex-col items-center w-full max-w-2xl mx-auto">
        {milestones.map((milestone, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={milestone.year}
              className={`flex flex-col items-center w-full ${isEven ? 'items-end' : 'items-start'}`}
            >
              <div className="flex w-full items-center">
                {/* Image carousel to the left for odd, right for even */}
                {isEven && <div className="flex-1" />}
                {!isEven && <ImageCarousel images={milestone.images} />}
                <div
                  className={`milestone z-10 bg-white rounded-3xl shadow-xl px-8 py-6 border border-gray-100 w-full max-w-md text-center flex flex-col items-center gap-2`}
                >
                  <div className="flex items-center gap-3 justify-center mb-2"></div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-1 tracking-tight">
                    {milestone.title}
                  </h3>
                  <span className="inline-block bg-red-500 text-white text-base font-extrabold rounded-full px-6 py-2 shadow-lg border-2 border-red-600 mb-2">
                    {milestone.year}
                  </span>
                  <p className="text-gray-600 text-base font-medium">
                    {milestone.description}
                  </p>
                </div>
                {isEven && <ImageCarousel images={milestone.images} />}
                {!isEven && <div className="flex-1" />}
              </div>
              {idx < milestones.length - 1 && (
                <div className="relative w-full" style={{ height: '100px' }}>
                  <svg
                    width="0"
                    height="0"
                    style={{ position: 'absolute' }}
                  />
                  <svg
                    width="100%"
                    height="100"
                    viewBox="0 0 640 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-0"
                  >
                    <path
                      d={
                        isEven
                          ? "M 540 0 C 540 120, 100 0, 100 120"
                          : "M 100 0 C 100 120, 540 0, 540 120"
                      }
                      stroke="#ef4444"
                      strokeWidth="3"
                      strokeDasharray="15 8"
                      strokeDashoffset={mounted && visibleIndexes.includes(idx + 1) ? 0 : 100}
                      style={{
                        transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1)',
                      }}
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default JourneySection;
 