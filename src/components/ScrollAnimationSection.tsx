"use client";

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollAnimationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const triggerTextRef = useRef<HTMLHeadingElement>(null);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !triggerTextRef.current) return;

    // Create the scroll trigger animation with better bidirectional support
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerTextRef.current,
        start: "top center",
        end: "bottom center",
        pin: true,
        pinSpacing: true,
        scrub: true, // Use true for immediate response
        onEnter: () => {
          setIsAnimationStarted(true);
          console.log("Animation started - text entered viewport");
        },
        onUpdate: (self) => {
          // Always update color based on scroll progress, regardless of direction
          const progress = self.progress;
          const grayColor = { r: 107, g: 114, b: 128 }; // #6b7280
          const whiteColor = { r: 255, g: 255, b: 255 }; // #ffffff
          
          const currentColor = {
            r: grayColor.r + (whiteColor.r - grayColor.r) * progress,
            g: grayColor.g + (whiteColor.g - grayColor.g) * progress,
            b: grayColor.b + (whiteColor.b - grayColor.b) * progress
          };
          
          if (textRef.current) {
            textRef.current.style.color = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
          }
        },
        onLeave: () => {
          console.log("Animation completed - leaving trigger area");
        },
        onEnterBack: () => {
          setIsAnimationStarted(true);
          console.log("Scrolling back up - entering trigger area");
        },
        onLeaveBack: () => {
          setIsAnimationStarted(false);
          console.log("Scrolling back up - leaving trigger area");
          
          // Reset text color to gray when leaving the area
          if (textRef.current) {
            textRef.current.style.color = "#6b7280";
          }
        }
      }
    });

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, [isAnimationStarted]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* First Section - Before the trigger */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Welcome to Our Platform
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Scroll down to see the animation trigger.
          </p>
        </div>
      </section>

      {/* Trigger Section - This contains the trigger text */}
      <section ref={sectionRef} className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={triggerTextRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white"
          >
            Revolutionizing the Venture Capital Ecosystem!
          </h1>
          
          <p 
            ref={textRef}
            className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-gray-400"
            style={{ 
              opacity: isAnimationStarted ? 1 : 0.8,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            We believe that to maximize returns, you need a fundamental, first-principles understanding of every asset in your portfolio. That's why we focus on providing granular-level visibility and insight, so you can develop winning strategies for every single investment.
          </p>
        </div>
      </section>

      {/* Next Section - Content continues after the pinned section */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-100 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Next Section
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            This section appears after the animation completes and scrolling resumes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ScrollAnimationSection; 