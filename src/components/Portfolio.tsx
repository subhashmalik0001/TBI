import Header from "./Header";
import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaCode, FaArrowRight } from "react-icons/fa6";
import PortfolioDetails from "./PortfolioDetails";
const Folder: any = require("./Folder").default;
import "./Folder.css";
import React, { useState, useEffect } from "react";
import MacNavbarDock from "./MacNavbarDock";
import { dockItems } from "./dockItems";

export default function Portfolio() {
    const [showSecondSet, setShowSecondSet] = useState(false);
    const allFolders: { name: string }[] = Array.from({ length: 28 }, (_, i) => ({ name: `Folder ${i + 1}` }));
    const visibleFolders = showSecondSet ? allFolders.slice(14, 28) : allFolders.slice(0, 14);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

 
    const detailsList = [
        {
            step: "01",
            stepLabel: "Openworks",
            stepCount: "1 / 6",
            title: "Openworks: AI-powered workflow automation",
            description: "Automate and optimize your business processes with Openworks' advanced AI tools.",
            features: [
                { title: "Workflow Builder", description: "Drag-and-drop interface for custom workflows." },
                { title: "AI Integrations" },
                { title: "Analytics Dashboard" },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
                { icon: <FaXTwitter />, href: "#", label: "X" },
                { icon: <FaCode />, href: "#", label: "Code" },
            ],
        },
        {
            step: "02",
            stepLabel: "TBI",
            stepCount: "2 / 6",
            title: "TBI: Incubating Innovation",
            description: "Empowering startups with resources, mentorship, and funding opportunities.",
            features: [
                { title: "Mentorship Program" },
                { title: "Seed Funding" },
                { title: "Startup Community" },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
                { icon: <FaXTwitter />, href: "#", label: "X" },
                { icon: <FaCode />, href: "#", label: "Code" },
            ],
        },
        {
            step: "03",
            stepLabel: "Kizer",
            stepCount: "3 / 6",
            title: "Kizer: Next-gen Health Tech",
            description: "Revolutionizing healthcare with smart diagnostics and patient management.",
            features: [
                { title: "Smart Diagnostics" },
                { title: "Patient Portal" },
                { title: "Data Security" },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
                { icon: <FaXTwitter />, href: "#", label: "X" },
                { icon: <FaCode />, href: "#", label: "Code" },
            ],
        },
        {
            step: "04",
            stepLabel: "Medoc",
            stepCount: "4 / 6",
            title: "Medoc: Medical Document AI",
            description: "AI-powered document management for clinics and hospitals.",
            features: [
                { title: "OCR Scanning" },
                { title: "Secure Storage" },
                { title: "Collaboration Tools" },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
                { icon: <FaXTwitter />, href: "#", label: "X" },
                { icon: <FaCode />, href: "#", label: "Code" },
            ],
        },
        {
            step: "05",
            stepLabel: "Simulate",
            stepCount: "5 / 6",
            title: "Simulate: Virtual Testing Labs",
            description: "Run simulations and tests in a virtual environment for rapid prototyping.",
            features: [
                { title: "3D Simulation" },
                { title: "Real-time Analytics" },
                { title: "API Access" },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
                { icon: <FaXTwitter />, href: "#", label: "X" },
                { icon: <FaCode />, href: "#", label: "Code" },
            ],
        },
        {
            step: "06",
            stepLabel: "Cube",
            stepCount: "6 / 6",
            title: "Cube: Modular Data Storage",
            description: "Flexible and scalable data storage solutions for modern businesses.",
            features: [
                { title: "Modular Storage" },
                { title: "Cloud Sync" },
                { title: "Encryption" },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
                { icon: <FaXTwitter />, href: "#", label: "X" },
                { icon: <FaCode />, href: "#", label: "Code" },
            ],
        },
    ];

    const [selectedIdx, setSelectedIdx] = useState(0);
    const [mobilePage, setMobilePage] = useState(0);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
    const mobilePageSize = 4;
    const totalMobilePages = Math.ceil(dockItems.length / mobilePageSize);

    // Handler for Next button
    const handleNext = () => {
        setSelectedIdx((selectedIdx + 1) % detailsList.length);
        if (isMobile) {
            setSlideDirection('right');
            setTimeout(() => {
                setMobilePage((prev) => (prev + 1) % totalMobilePages);
                setTimeout(() => setSlideDirection(null), 400); // clear after animation
            }, 0);
        }
    };

    // Handler for swipe gestures
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX = e.changedTouches[0].screenX;
    };
    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    };
    const handleSwipe = () => {
        const minSwipeDistance = 50;
        if (touchStartX - touchEndX > minSwipeDistance) {
            // Swipe left (next)
            setSelectedIdx((selectedIdx + 1) % detailsList.length);
            if (isMobile) {
                setSlideDirection('right');
                setTimeout(() => {
                    setMobilePage((prev) => (prev + 1) % totalMobilePages);
                    setTimeout(() => setSlideDirection(null), 400);
                }, 0);
            }
        } else if (touchEndX - touchStartX > minSwipeDistance) {
            // Swipe right (prev)
            setSelectedIdx((selectedIdx - 1 + detailsList.length) % detailsList.length);
            if (isMobile) {
                setSlideDirection('left');
                setTimeout(() => {
                    setMobilePage((prev) => (prev - 1 + totalMobilePages) % totalMobilePages);
                    setTimeout(() => setSlideDirection(null), 400);
                }, 0);
            }
        }
    };

    return (
        <div className="px-2 sm:px-4 md:px-[70px] min-h-screen overflow-x-hidden w-full lg:-mt-45 relative sm:mt-0">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-t border-b border-gray-300 min-h-[120px] lg:min-h-[100px] xl:min-h-[100px] relative">
                
                {/* Left Section */}
                <div className="px-6 py-4 lg:px-8 lg:py-6  flex items-center relative">
                    <div className="relative w-full">
                        <img src="/assets/image1.png" alt="Portfolio Icon" className="w-8 h-6 absolute -top-[-1.1rem] left-0" />
                        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold lg:text-gray-900 text-white leading-tight pl-10">
                            Portfolio.os
                        </h1>
                    </div>
                </div>

                {/* Right Section */}
                <div className=" mb-10 sm:mb-10 ml-5 mt-10 flex flex-col items-start w-full">
                    <span>STARTUP CUTBI</span>
                    <div  style={{position: 'relative',width:'97%'}} className="h-[2px] bg-[#333] border-none w-full sm:w-full md:w-full lg:w-full xl:w-full mb-1" />
                </div>

                {/* Vertical Divider for large screens */}
                <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300" style={{transform: 'translateX(-0.5px)'}} />
            </div>
            {/* Main content with background image */}
            <div
                style={{
                    backgroundImage: isMobile
                        ? 'url(https://wallpapers.ispazio.net/wp-content/uploads/2020/10/iSpazio-98-768x1663.jpg)'
                        : 'url(https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-3840x2160-1455.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '700px',
                    paddingBottom: '2px',
                    marginBottom:'-10px'
                }}
                className={`w-full max-w-[1600px] mx-auto ${isMobile ? 'rounded-2xl' : ''}`}
            >
                <div className="flex flex-col md:flex-row gap-8 md:gap-8 mt-10 w-full">
                    {/* Mobile: Only show PortfolioDetails and Next button */}
                    <div className="block text-white lg:hidden w-full pb-10"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <PortfolioDetails {...detailsList[selectedIdx]} />
                        <div className="mt-36">
                            <MacNavbarDock 
                                mobilePage={mobilePage}
                                slideDirection={slideDirection}
                            />
                        </div>
                    </div>
                    {/* Desktop: Show grid of folders and PortfolioDetails only on lg and up */}
                    <div className="hidden lg:flex flex-row w-full">
                        <PortfolioDetails {...detailsList[selectedIdx]} />
                        <div className="flex-1 flex flex-col items-center justify-center md:mt-10 w-full">
                            <div className="grid w-full max-w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 transition-all duration-300 overflow-visible gap-x-2 gap-y-0">
                                {/* Render 14 folders and the icon button in the grid */}
                                {visibleFolders.map((folder, idx) => (
                                    <div
                                        key={folder.name}
                                        className="flex flex-col items-center transition-all duration-300 overflow-visible min-w-[100px] sm:min-w-[140px] md:min-w-[180px]"
                                    >
                                        <div onClick={() => setSelectedIdx(showSecondSet ? idx + 14 : idx)} style={{ cursor: 'pointer' }}>
                                            <Folder
                                                color="#5227FF"
                                                size={0.9}
                                                items={[
                                                    <div className="flex items-center justify-center h-full text-xs font-semibold text-gray-700">Doc 1</div>,
                                                    <div className="flex items-center justify-center h-full text-xs font-semibold text-gray-700">Doc 2</div>,
                                                    <div className="flex items-center justify-center h-full text-xs font-semibold text-gray-700">Doc 3</div>,
                                                ] as unknown as any[]}
                                            />
                                        </div>
                                        <span className="mt-3 text-sm font-semibold lg:text-gray-800 text-white text-center">{folder.name}</span>
                                    </div>
                                ))}
                                <button
                                    key="icon"
                                    className="flex flex-col items-center transition-all duration-300 overflow-visible min-w-[100px] sm:min-w-[140px] md:min-w-[180px] min-h-[100px] sm:min-h-[140px] md:min-h-[180px] focus:outline-none"
                                    onClick={() => setShowSecondSet((prev) => !prev)}
                                    aria-label="Show more folders"
                                >
                                    <div className="flex items-center justify-center w-full h-full">
                                        <img src="/assets/icon.png" alt="icon" className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-10" />
                                    </div>
                                    <span className="mt-3 text-sm font-semibold lg:text-gray-800 text-white text-center"></span>
                                </button>
                            </div>
                            {/* Direct icon after the folders grid */}
                           
                        </div>
                    </div>
                </div>
                {/* Only show MacNavbarDock on lg and larger screens, inside the background */}
                <div className="hidden lg:block">
                    <MacNavbarDock />
                </div>
            </div>
        </div>
    );
}