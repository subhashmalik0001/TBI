"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white text-black shadow-lg border-black' : 'bg-transparent text-white border-white'} border-b-1 `}>
      <nav className="flex items-center justify-between">
        <div className={`flex items-center gap-4 p-8 ${scrolled ? 'border-black' : 'border-white'} border-r-1 `}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className={`w-40 ${scrolled ? 'invert' : ''}`}
          />
        </div>

        <div className="flex gap-16 text-lg p-8">
          <a href="#" className="hover:underline">About</a>
          <button
            className="hover:underline focus:outline-none"
            onClick={() => setShowPrograms(true)}
            type="button"
          >
            Programs
          </button>
          <a href="#" className="hover:underline">Insights</a>
          <a href="#" className="hover:underline">Events</a>
        </div>

        <a href="#" className={`mr-8 py-2 px-6 rounded-lg font-bold transition-colors duration-300 ${scrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white/20 hover:bg-white/30'}`}>
          APPLY TO INCUBATOR
        </a>
      </nav>

      {showPrograms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 min-w-[300px] text-black relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
              onClick={() => setShowPrograms(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-6">Select Program</h3>
            <div className="flex flex-col gap-4">
              <button
                className="w-full py-2 px-4 rounded bg-black text-white hover:bg-gray-800 transition"
                onClick={() => { setShowPrograms(false); router.push('/preincubation'); }}
              >
                Pre-Incubation
              </button>
              <button
                className="w-full py-2 px-4 rounded border border-black text-black hover:bg-gray-100 transition"
                onClick={() => { setShowPrograms(false); router.push('/bridge-program'); }}
              >
                Bridge Program
              </button>
              <button
                className="w-full py-2 px-4 rounded border border-black text-black hover:bg-gray-100 transition"
                onClick={() => { setShowPrograms(false); router.push('/pre-acceleration'); }}
              >
                Pre-Acceleration
              </button>
              <button
                className="w-full py-2 px-4 rounded border border-black text-black hover:bg-gray-100 transition"
                onClick={() => { setShowPrograms(false); router.push('/master-class'); }}
              >
                Master Class
              </button>
              <button
                className="w-full py-2 px-4 rounded border border-black text-black hover:bg-gray-100 transition"
                onClick={() => { setShowPrograms(false); router.push('/incubation'); }}
              >
                Incubation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 