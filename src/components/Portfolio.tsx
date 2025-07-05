import Header from "./Header";
import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaCode } from "react-icons/fa6";
import PortfolioDetails from "./PortfolioDetails";

export default function Portfolio() {
    return (
        <div className="px-4 sm:px-8 md:px-[70px] min-h-screen overflow-x-hidden w-full">
            <Header
                leftText={<>Portfolio.os</>}
                rightText="PROCESS"
                iconSrc="/assets/image1.png"
            />
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
                            src="/assets/Screenshot 2025-07-03 153915.png.png"
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