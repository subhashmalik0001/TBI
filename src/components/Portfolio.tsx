import Header from "./Header";
import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaCode, FaArrowRight } from "react-icons/fa6";
import PortfolioDetails from "./PortfolioDetails";
const Folder: any = require("./Folder").default;
import "./Folder.css";
import React, { useState, useRef } from "react";
import MacNavbarDock from "./MacNavbarDock";

export default function Portfolio() {
    const [showSecondSet, setShowSecondSet] = useState(false);
    // List of 27 startup names
    const startupNames = [
        'Openworks', 'TBI', 'Kizer', 'Medoc', 'Simulate', 'Cube', 'NovaTech', 'BluePeak', 'InnoSpark', 'GreenCore',
        'SkylineAI', 'PulseLabs', 'QuantumLeap', 'BrightHive', 'EcoSync', 'UrbanNest', 'DataForge', 'Healthify',
        'AgroNext', 'Finverse', 'EduBridge', 'Foodly', 'Travelio', 'Buildify', 'SmartGrid', 'AquaPure', 'CloudNest'
    ];
    // Hardcoded unique details for each startup
    const detailsList = [
        {
            step: '01', stepLabel: 'Openworks', stepCount: '1 / 27',
            title: 'Openworks: AI-powered Workflow Automation',
            description: 'Openworks provides advanced AI tools to automate and optimize business processes for enterprises.',
            features: [
                { title: 'Workflow Builder', description: 'Drag-and-drop interface for custom workflows.' },
                { title: 'AI Integrations', description: 'Seamless integration with popular AI services.' },
                { title: 'Analytics Dashboard', description: 'Real-time analytics and reporting.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '02', stepLabel: 'TBI', stepCount: '2 / 27',
            title: 'TBI: Incubating Innovation',
            description: 'TBI empowers startups with resources, mentorship, and funding opportunities.',
            features: [
                { title: 'Mentorship Program', description: 'Guidance from industry experts.' },
                { title: 'Seed Funding', description: 'Initial capital for promising startups.' },
                { title: 'Startup Community', description: 'Collaborative network of entrepreneurs.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '03', stepLabel: 'Kizer', stepCount: '3 / 27',
            title: 'Kizer: Next-gen Health Tech',
            description: 'Kizer revolutionizes healthcare with smart diagnostics and patient management.',
            features: [
                { title: 'Smart Diagnostics', description: 'AI-powered health assessments.' },
                { title: 'Patient Portal', description: 'Secure access to health records.' },
                { title: 'Data Security', description: 'End-to-end encryption for patient data.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '04', stepLabel: 'Medoc', stepCount: '4 / 27',
            title: 'Medoc: Medical Document AI',
            description: 'Medoc offers AI-powered document management for clinics and hospitals.',
            features: [
                { title: 'OCR Scanning', description: 'Extracts data from medical documents.' },
                { title: 'Secure Storage', description: 'HIPAA-compliant cloud storage.' },
                { title: 'Collaboration Tools', description: 'Share and annotate documents securely.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '05', stepLabel: 'Simulate', stepCount: '5 / 27',
            title: 'Simulate: Virtual Testing Labs',
            description: 'Simulate enables rapid prototyping with virtual simulations and tests.',
            features: [
                { title: '3D Simulation', description: 'Realistic 3D environments for testing.' },
                { title: 'Real-time Analytics', description: 'Instant feedback on test results.' },
                { title: 'API Access', description: 'Integrate simulations into your workflow.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '06', stepLabel: 'Cube', stepCount: '6 / 27',
            title: 'Cube: Modular Data Storage',
            description: 'Cube delivers flexible and scalable data storage solutions.',
            features: [
                { title: 'Modular Storage', description: 'Customizable storage modules.' },
                { title: 'Cloud Sync', description: 'Automatic cloud backup.' },
                { title: 'Encryption', description: 'Advanced encryption for all data.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '07', stepLabel: 'NovaTech', stepCount: '7 / 27',
            title: 'NovaTech: Next-Gen IoT Devices',
            description: 'NovaTech creates smart IoT devices for home and industry.',
            features: [
                { title: 'Smart Sensors', description: 'Monitor and automate environments.' },
                { title: 'Mobile App', description: 'Control devices from anywhere.' },
                { title: 'Energy Efficient', description: 'Low power consumption.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '08', stepLabel: 'BluePeak', stepCount: '8 / 27',
            title: 'BluePeak: Cloud Infrastructure',
            description: 'BluePeak offers robust and scalable cloud infrastructure for businesses.',
            features: [
                { title: 'High Availability', description: '99.99% uptime guarantee.' },
                { title: 'Global CDN', description: 'Fast content delivery worldwide.' },
                { title: 'Developer Tools', description: 'APIs and SDKs for easy integration.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '09', stepLabel: 'InnoSpark', stepCount: '9 / 27',
            title: 'InnoSpark: EdTech Platform',
            description: 'InnoSpark delivers interactive learning experiences for students and teachers.',
            features: [
                { title: 'Live Classes', description: 'Real-time virtual classrooms.' },
                { title: 'Gamified Learning', description: 'Engaging, game-based lessons.' },
                { title: 'Progress Tracking', description: 'Monitor student achievement.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '10', stepLabel: 'GreenCore', stepCount: '10 / 27',
            title: 'GreenCore: Renewable Energy Solutions',
            description: 'GreenCore specializes in solar and wind energy systems for homes and businesses.',
            features: [
                { title: 'Solar Panels', description: 'High-efficiency solar modules.' },
                { title: 'Wind Turbines', description: 'Compact wind energy solutions.' },
                { title: 'Energy Storage', description: 'Battery systems for backup power.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '11', stepLabel: 'SkylineAI', stepCount: '11 / 27',
            title: 'SkylineAI: Real Estate Intelligence',
            description: 'SkylineAI leverages artificial intelligence to provide real-time real estate market insights.',
            features: [
                { title: 'Market Analytics', description: 'Comprehensive property data analysis.' },
                { title: 'Investment Tools', description: 'AI-driven investment recommendations.' },
                { title: 'Portfolio Tracking', description: 'Monitor real estate assets in real time.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '12', stepLabel: 'PulseLabs', stepCount: '12 / 27',
            title: 'PulseLabs: Wearable Health Devices',
            description: 'PulseLabs develops next-generation wearable devices for health monitoring.',
            features: [
                { title: 'Heart Rate Monitor', description: 'Continuous heart rate tracking.' },
                { title: 'Sleep Analysis', description: 'Advanced sleep quality insights.' },
                { title: 'Mobile Sync', description: 'Sync data with your smartphone.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '13', stepLabel: 'QuantumLeap', stepCount: '13 / 27',
            title: 'QuantumLeap: Quantum Computing Solutions',
            description: 'QuantumLeap brings quantum computing power to solve complex business problems.',
            features: [
                { title: 'Quantum Algorithms', description: 'Optimized for speed and accuracy.' },
                { title: 'Cloud Access', description: 'Run quantum jobs in the cloud.' },
                { title: 'Consulting Services', description: 'Expert guidance for quantum adoption.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '14', stepLabel: 'BrightHive', stepCount: '14 / 27',
            title: 'BrightHive: Data Collaboration Platform',
            description: 'BrightHive enables secure data sharing and collaboration between organizations.',
            features: [
                { title: 'Data Governance', description: 'Control access and usage of shared data.' },
                { title: 'Collaboration Tools', description: 'Work together on shared datasets.' },
                { title: 'Audit Trails', description: 'Track all data access and changes.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '15', stepLabel: 'EcoSync', stepCount: '15 / 27',
            title: 'EcoSync: Smart Energy Management',
            description: 'EcoSync provides IoT-based solutions for efficient energy management in buildings.',
            features: [
                { title: 'Smart Thermostats', description: 'Automated temperature control.' },
                { title: 'Energy Analytics', description: 'Detailed energy usage reports.' },
                { title: 'Remote Access', description: 'Control systems from anywhere.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '16', stepLabel: 'UrbanNest', stepCount: '16 / 27',
            title: 'UrbanNest: Smart Home Solutions',
            description: 'UrbanNest delivers integrated smart home automation systems.',
            features: [
                { title: 'Home Security', description: 'Advanced surveillance and alarms.' },
                { title: 'Voice Control', description: 'Integrates with Alexa and Google Home.' },
                { title: 'Lighting Automation', description: 'Automated lighting schedules.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '17', stepLabel: 'DataForge', stepCount: '17 / 27',
            title: 'DataForge: Big Data Analytics',
            description: 'DataForge offers scalable analytics for large and complex datasets.',
            features: [
                { title: 'Data Pipelines', description: 'Automate data ingestion and processing.' },
                { title: 'Visualization Tools', description: 'Interactive dashboards and charts.' },
                { title: 'Machine Learning', description: 'Built-in ML model support.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '18', stepLabel: 'Healthify', stepCount: '18 / 27',
            title: 'Healthify: Digital Health Platform',
            description: 'Healthify connects patients and doctors through a secure telemedicine platform.',
            features: [
                { title: 'Video Consultations', description: 'HD video calls with healthcare providers.' },
                { title: 'E-Prescriptions', description: 'Digital prescriptions sent to your pharmacy.' },
                { title: 'Health Records', description: 'Access your medical history online.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '19', stepLabel: 'AgroNext', stepCount: '19 / 27',
            title: 'AgroNext: Smart Agriculture',
            description: 'AgroNext uses IoT and AI to optimize crop yields and farm management.',
            features: [
                { title: 'Soil Sensors', description: 'Monitor soil health in real time.' },
                { title: 'Weather Forecasting', description: 'Localized weather predictions.' },
                { title: 'Yield Analytics', description: 'Predict and maximize crop output.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '20', stepLabel: 'Finverse', stepCount: '20 / 27',
            title: 'Finverse: FinTech for Everyone',
            description: 'Finverse democratizes financial services with easy-to-use digital tools.',
            features: [
                { title: 'Personal Finance', description: 'Budgeting and expense tracking.' },
                { title: 'Microloans', description: 'Instant small loans for users.' },
                { title: 'Investment Tools', description: 'Grow your wealth with smart investing.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '21', stepLabel: 'EduBridge', stepCount: '21 / 27',
            title: 'EduBridge: Bridging Education Gaps',
            description: 'EduBridge connects students with tutors and learning resources worldwide.',
            features: [
                { title: 'Tutor Marketplace', description: 'Find the best tutors for any subject.' },
                { title: 'Resource Library', description: 'Access thousands of learning materials.' },
                { title: 'Progress Reports', description: 'Track your learning journey.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '22', stepLabel: 'Foodly', stepCount: '22 / 27',
            title: 'Foodly: Smart Food Delivery',
            description: 'Foodly delivers fresh meals from local restaurants with real-time tracking.',
            features: [
                { title: 'Live Tracking', description: 'Track your order in real time.' },
                { title: 'Contactless Delivery', description: 'Safe and hygienic delivery options.' },
                { title: 'Meal Customization', description: 'Personalize your meal orders.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '23', stepLabel: 'Travelio', stepCount: '23 / 27',
            title: 'Travelio: Seamless Travel Booking',
            description: 'Travelio makes booking flights, hotels, and experiences easy and affordable.',
            features: [
                { title: 'One-Stop Booking', description: 'Book flights, hotels, and more in one place.' },
                { title: 'Travel Deals', description: 'Exclusive discounts and offers.' },
                { title: 'Itinerary Planner', description: 'Organize your entire trip.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '24', stepLabel: 'Buildify', stepCount: '24 / 27',
            title: 'Buildify: Construction Project Management',
            description: 'Buildify streamlines construction projects with digital tools and real-time collaboration.',
            features: [
                { title: 'Project Dashboard', description: 'Track progress and milestones.' },
                { title: 'Team Collaboration', description: 'Communicate with your team instantly.' },
                { title: 'Document Management', description: 'Store and share project files securely.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '25', stepLabel: 'SmartGrid', stepCount: '25 / 27',
            title: 'SmartGrid: Intelligent Power Networks',
            description: 'SmartGrid modernizes power distribution with smart meters and grid analytics.',
            features: [
                { title: 'Smart Meters', description: 'Real-time energy usage monitoring.' },
                { title: 'Grid Analytics', description: 'Optimize power distribution.' },
                { title: 'Outage Detection', description: 'Instant alerts for power outages.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '26', stepLabel: 'AquaPure', stepCount: '26 / 27',
            title: 'AquaPure: Clean Water Solutions',
            description: 'AquaPure develops advanced water purification systems for homes and communities.',
            features: [
                { title: 'Filtration Technology', description: 'Removes 99.9% of contaminants.' },
                { title: 'Smart Monitoring', description: 'Track water quality in real time.' },
                { title: 'Eco-Friendly', description: 'Sustainable and energy-efficient.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
        {
            step: '27', stepLabel: 'CloudNest', stepCount: '27 / 27',
            title: 'CloudNest: Secure Cloud Storage',
            description: 'CloudNest offers encrypted, scalable cloud storage for individuals and businesses.',
            features: [
                { title: 'End-to-End Encryption', description: 'Your files are always protected.' },
                { title: 'Multi-Device Sync', description: 'Access your files from any device.' },
                { title: 'Collaboration Tools', description: 'Share and work on files together.' },
            ],
            socialLinks: [
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaXTwitter />, href: '#', label: 'X' },
                { icon: <FaCode />, href: '#', label: 'Code' },
            ],
        },
    ];
    const allFolders: { name: string }[] = Array.from({ length: startupNames.length }, (_, i) => ({
        name: startupNames[i] || `Folder ${i + 1}`
    }));
    const visibleFolders = showSecondSet ? allFolders.slice(14, startupNames.length) : allFolders.slice(0, 14);

 
    const [selectedIdx, setSelectedIdx] = useState(0);
    // Mobile swipe state
    const [mobilePage, setMobilePage] = useState(0);
    const [slideDirection, setSlideDirection] = useState<null | 'left' | 'right'>(null);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    // Handle swipe gestures
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const diff = touchStartX.current - touchEndX.current;
            if (Math.abs(diff) > 50) { // threshold
                if (diff > 0) {
                    // Swipe left
                    setSlideDirection('left');
                    setTimeout(() => setSlideDirection(null), 300);
                    setSelectedIdx((prev) => (prev + 1) % detailsList.length);
                    setMobilePage((prev) => (prev + 1) % Math.ceil(detailsList.length));
                } else {
                    // Swipe right
                    setSlideDirection('right');
                    setTimeout(() => setSlideDirection(null), 300);
                    setSelectedIdx((prev) => (prev - 1 + detailsList.length) % detailsList.length);
                    setMobilePage((prev) => (prev - 1 + Math.ceil(detailsList.length)) % Math.ceil(detailsList.length));
                }
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div className="px-7 sm:px-8 md:px-[70px] min-h-screen overflow-x-hidden w-full -mt-0 relative">
            <div className="w-[1500px] mr-[-6] grid grid-cols-1 lg:grid-cols-2 border-t border-b border-gray-300 min-h-[120px] lg:min-h-[100px] xl:min-h-[100px] relative">
                {/* Left Section */}
                <div className="px-6 py-4 lg:px-8 lg:py-6 flex items-center relative">
                    <div className="relative w-full">
                        <img src="/assets/image1.png" alt="Process Icon" className="w-8 h-6 absolute -top-[-1.1rem] left-0" />
                        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight pl-10">
                        Portfolio.os<br />
                            
                        </h1>
                    </div>
                </div>
                {/* Right Section */}
                <div className="mb-10 ml-5 sm:mb-10 mt-20 flex-col items-start w-full">
                    <span>STARTUP CUTBI</span>
                    <div style={{position: 'relative',width:'97%'}} className="h-[2px] bg-[#333] border-none w-full sm:w-full md:w-full lg:w-full mb-1" />
                </div>
                {/* Vertical Divider for large screens */}
                <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300" style={{transform: 'translateX(-0.5px)'}} />
            </div>
            {/* Main content with background image */}
            <div
                className="portfolio-bg w-full max-w-[1600px] mx-auto"
                style={{
                    minHeight: '700px',
                    paddingBottom: '1px',
                }}
            >
                <div className="flex flex-col md:flex-row gap-8 md:gap-8 mt-0 w-full">
                    {/* 📱 Mobile View Only */}
                    <div
                        className="block text-white lg:hidden w-full pb-10"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Show selected portfolio details, only 4 doc items on mobile */}
                        <PortfolioDetails
                            {...{
                                ...detailsList[selectedIdx],
                                features: detailsList[selectedIdx].features.slice(0, 4),
                            }}
                        />
                        {/* Mac-style navbar dock */}
                        <div className="mt-20">
                            <MacNavbarDock 
                                mobilePage={mobilePage}
                                slideDirection={slideDirection}
                            />
                        </div>
                    </div>
                    {/* Desktop: Show grid of folders and PortfolioDetails only on lg and up */}
                    <div className="hidden lg:flex flex-row w-full">
                        <PortfolioDetails {...detailsList[selectedIdx]} />
                        <div className="flex-1 flex flex-col items-center justify-center mr-20  md:mt-10 w-full">
                            <div className="grid grid-cols-1 md:grid-cols-5 transition-all duration-300 overflow-visible gap-x-2 gap-y-0">
                                {/* Render 14 folders and the icon button in the grid */}
                                {visibleFolders.map((folder, idx) => (
                                    <div
                                        key={folder.name + idx}
                                        className="flex flex-col items-center transition-all duration-300 overflow-visible min-w-[180px] min-h-[180px]"
                                    >
                                        <div onClick={() => setSelectedIdx(showSecondSet ? idx + 14 : idx)} style={{ cursor: 'pointer' }}>
                                            <Folder
                                                color="#5227FF"
                                                size={0.7}
                                                items={[
                                                    <div className="flex items-center justify-center h-full text-xs font-semibold text-gray-700">{folder.name}</div>,
                                                    <div className="flex items-center justify-center h-full text-xs font-semibold text-gray-700">{folder.name}</div>,
                                                    <div className="flex items-center justify-center h-full text-xs font-semibold text-gray-700">{folder.name}</div>,
                                                ] as unknown as any[]}
                                            />
                                        </div>
                                        <span className="mt-3 text-sm font-semibold text-gray-800 text-center">{folder.name}</span>
                                    </div>
                                ))}
                                <button
                                    key="icon"
                                    className="flex flex-col items-center transition-all duration-300 overflow-visible min-w-[180px] min-h-[180px] focus:outline-none bg-white hover:translate-y-4 hover:scale-95  active:scale-90"
                                    onClick={() => setShowSecondSet((prev) => !prev)}
                                    aria-label="Show more folders"
                                >
                                    <div className="flex items-center justify-center w-full h-full">
                                        <img src="/assets/icon.png" alt="icon" className="w-20 h-20 mx-auto mb-20" />
                                    </div>
                                    <span className="mt-3 text-sm font-semibold text-gray-800 text-center"></span>
                                </button>
                            </div>
                            {/* Direct icon after the folders grid */}
                           
                        </div>
                    </div>
                </div>
                {/* Only show MacNavbarDock on lg and larger screens, inside the background */}
                <div className=" hidden lg:block">
                    <MacNavbarDock />
                </div>
            </div>
        </div>
    );
}