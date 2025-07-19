import React from "react";

export interface Feature {
    title: string;
    description?: string;
}

export interface SocialLink {
    icon: React.ReactNode;
    href: string;
    label: string;
}

export interface PortfolioDetailsProps {
    step: string;
    stepLabel: string;
    stepCount: string;
    title: string;
    description: string;
    features: Feature[];
    socialLinks: SocialLink[];
}

const PortfolioDetails: React.FC<PortfolioDetailsProps> = ({
    step,
    stepLabel,
    stepCount,
    title,
    description,
    features,
    socialLinks,
}) => {
    return (
        <div className="flex-1 max-w-full md:max-w-lg md:mr-20 ">
            <div className="flex flex-wrap items-center gap-4 ml-20 mt-10 mb-20">
                <div className="border border-gray-300 lg:text-gray-500 text-black rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-xs md:text-sm font-semibold">{step}</div>
                <div className="lg:text-gray-500 text-black text-xs ml-2 md:text-sm">{stepLabel}</div>
                <div className="lg:text-gray-400 text-black text-xs ml-2">{stepCount}</div>
            </div>
            <h2 className="text-lg md:text-2xl ml-20 lg:text-gray-800 text-black font-semibold">{title}</h2>
            <p className="lg:text-gray-500 text-black ml-20 text-sm md:text-base">{description}</p>
            <ol className="mb-8 ml-20 lg:text-gray-700 text-black">
                {features.map((feature, idx) => (
                    <li className={idx < features.length - 1 ? "mb-3" : ""} key={feature.title}>
                        <span className="font-semibold text-sm md:text-base">{feature.title}</span>
                        {feature.description && (
                            <p className="lg:text-gray-500 text-black text-xs md:text-sm mt-1 ">{feature.description}</p>
                        )}
                    </li>
                ))}
            </ol>
            <div className="flex items-center gap-4 justify-start mt-10 ml-20">
                {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} aria-label={link.label} className="lg:text-gray-400 text-white hover:text-gray-700 text-xl md:text-2xl">
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PortfolioDetails; 