import Header from "./Header";
import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaCode } from "react-icons/fa6";
import PortfolioDetails from "./PortfolioDetails";

export default function Portfolio() {
    return (
        <div className="px-4 sm:px-8 md:px-[70px] min-h-screen overflow-x-hidden w-full">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-t border-b border-gray-300 min-h-[120px] lg:min-h-[100px] xl:min-h-[100px] relative">
                {/* Left Section */}
                <div className="px-6 py-4 lg:px-8 lg:py-6 flex items-center relative">
                    <div className="relative w-full">
                        <img src="/assets/image1.png" alt="Portfolio Icon" className="w-8 h-6 absolute -top-[-1.1rem] left-0" />
                        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight pl-10">
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

            <div className="flex flex-col md:flex-row gap-8 md:gap-8 mt-10 md:mt-24 w-full md:mx-[188px]">
                {/* Left Column as Component */}
                <PortfolioDetails
                    step="01"
                    stepLabel="Openworks"
                    stepCount="1 / 34"
                    title="Turn production data into a competitive edge"
                    description="Visualize complex AI workflows, run real-time evaluations, collect real-world performance data, and optimize for cost, latency, and quality at scale."
                    features={[
                        {
                            title: "Full traces and spans",
                            description:
                                "Understand the complete journey of each request through your AI system with detailed visualization of execution paths, helping you identify bottlenecks and optimization opportunities.",
                        },
                        { title: "Continuous evaluations" },
                        { title: "Human annotations" },
                    ]}
                    socialLinks={[
                        { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
                        { icon: <FaXTwitter />, href: "#", label: "X" },
                        { icon: <FaCode />, href: "#", label: "Code" },
                    ]}
                />
                {/* Right Column */}
                <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 w-full">
                    <div className="relative w-full max-w-xs sm:max-w-md md:max-w-xl aspect-[4/3] bg-[#f8faf8] rounded-xl overflow-hidden flex items-center justify-center">
                        <Image
                            src="https://i.ytimg.com/vi/nuJFjx44ILM/maxresdefault.jpg"
                            alt="Stacked cards"
                            fill
                            style={{ objectFit: 'contain', opacity: 0.9 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}