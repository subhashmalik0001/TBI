import { Button } from "@/components/programs/Button";
import {
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  DollarSign,
  Presentation,
  Star,
  Rocket,
  CheckCircle,
  Building,
  FileText,
  Calculator,
  Network,
  Globe,
  Award,
  Calendar,
  Clock,
  Heart,
  Smile,
  Diamond,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const Card = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

const CardHeader = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

const CardContent = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

const CardTitle = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h3 className={className}>{children}</h3>
);

const Badge = ({ children, variant, className }: { children: ReactNode; variant?: string; className?: string }) => (
  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${className}`}>
    {children}
  </span>
);

const ProgramStructure = () => {
  const programData = [
    {
      week: "Week 1-2",
      title: "Goal Setting & KPI Mapping",
      description: "Define growth metrics, set ambitious targets, and create accountability frameworks",
      icon: Target,
      color: "bg-black",
    },
    {
      week: "Week 3-4",
      title: "Customer Acquisition Strategy",
      description: "Develop scalable customer acquisition channels and retention strategies",
      icon: Users,
      color: "bg-gray-800",
    },
    {
      week: "Week 5",
      title: "Financial & Legal Planning",
      description: "Structure finances, legal compliance, and prepare for investment rounds",
      icon: Calculator,
      color: "bg-gray-600",
    },
    {
      week: "Week 6",
      title: "Pitch Deck & Demo Day",
      description: "Perfect your investor pitch and present to our angel network",
      icon: Presentation,
      color: "bg-gray-400",
    },
  ];

  return (
    <section id="structure" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-red-600 text-3xl md:text-4xl font-bold text-center mb-16">Program Structure</h2>
          {/* Animated Cards Container */}
          <div className="relative overflow-hidden">
            <div className="animate-slide-left-right flex gap-8 min-w-max">
              {programData.map((item, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors bg-white rounded-lg shadow-sm w-80 flex-shrink-0">
                  <CardHeader className="text-center p-6">
                    <div
                      className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="outline" className="border-black text-black mb-2">
                      {item.week}
                    </Badge>
                    <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-gray-600 text-center text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Timeline Visual */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step}
                  </div>
                  {index < 3 && <ArrowRight className="w-6 h-6 text-gray-400 mx-2" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slideLeftRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-slide-left-right {
          animation: slideLeftRight 15s linear infinite;
        }
        .custom-3d-card-shadow {
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.35), 0 0 0 8px rgba(0,0,0,0.10);
          border: 2px solid #111;
        }
      `}</style>
    </section>
  );
};

const PreAccelerationContent = () => {
  return (
    <div className="bg-gradient-to-br from-white-200 via-white-50 to-white">
      <div className="container mx-auto px-4 py-16 pt-50">
        <div className="grid lg:grid-cols-2 gap- items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                Pre-Acceleration
              </h2>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Accelerate Your  Startup Journey
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Transform your innovative ideas into successful ventures with our comprehensive pre-acceleration program
                designed to fast-track your startup's growth.
              </p>
            </div>
            <div className="space-y-4">
              <div className="hidden lg:flex">
                <Link href="/apply">
                  <button className="bg-red-600 text-white px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200 whitespace-nowrap">
                    Apply For Pre-Acceleration
                  </button>
                </Link>
              </div>
              <p className="text-gray-500 text-sm">Application deadline approaching</p>
            </div>
          </div>
          {/* Right Content - Widget Examples */}
          <div className="space-y-6">
            {/* Main Stats Card */}
            <Card className="relative z-10 p-6 bg-white/90 backdrop-blur-md rounded-2xl pt-10 px-20 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-300 ease-in-out">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Startups we've accelerated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">85%</div>
                  <div className="text-sm text-gray-600 mt-1">Success rate of our graduates</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600 mt-1">Years of startup mentoring</div>
                </div>
              </div>
            </Card>
            {/* Blue Highlight Card */}
            <Card className="relative z-10 p-6 bg-red-600 text-white rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-300 ease-in-out">
              <div className="text-center">
                <div className="text-4xl font-bold">₹2.5Cr+</div>
                <div className="text-blue-100 mt-2">Total Funding Raised</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      {/* About the Pre-Acceleration Program */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-8">About the Pre-Acceleration Program</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              The Pre-Acceleration Program at TBI CU is for early-stage startups who have validated their product and
              are now ready to scale, refine their go-to-market strategy, and prepare for investor pitches. This program
              builds business maturity before full acceleration.
            </p>
          </div>
        </div>
      </section>
      {/* Who Should Apply */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-red-600 text-3xl md:text-4xl font-bold text-center mb-12">Who Should Apply?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex justify-center my-12">
                <div className="w-[320px] border-4 border-black bg-white p-6 shadow-[10px_10px_0_#ff0000] font-sans">
                  <div className="flex items-center gap-4 mb-4 border-b-2 border-black pb-4">
                    <div className="text-2xl font-black text-black uppercase"> Startups with MVP  </div>
                  </div>
                  <div className="mt-4 text-black text-sm font-semibold leading-relaxed border-b-2 border-black pb-4">
                    Startups founded by students that have developed a working Minimum Viable Product (MVP) and are ready to refine, validate, and prepare for market entry.
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-12">
                <div className="w-[320px] border-4 border-black bg-white p-6 shadow-[10px_10px_0_#ff0000] font-sans">
                  <div className="flex items-center gap-4 mb-4 border-b-2 border-black pb-4">
                    <div className="text-2xl font-black text-black uppercase">Startups Early Traction</div>
                  </div>
                  <div className="mt-4 text-black text-sm font-semibold leading-relaxed border-b-2 border-black pb-4">
                    Teams that have begun getting user feedback, initial signups, or revenue and are looking to scale operations, optimize product-market fit, and prepare for funding.
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-12">
                <div className="w-[320px] border-4 border-black bg-white p-6 shadow-[10px_10px_0_#ff0000] font-sans">
                  <div className="flex items-center gap-4 mb-4 border-b-2 border-black pb-4">
                    <div className="text-2xl font-black text-black uppercase"> Founders Structured Growth</div>
                  </div>
                  <div className="mt-4 text-black text-sm font-semibold leading-relaxed border-b-2 border-black pb-4">
                    Student founders who need hands-on guidance, mentoring, and strategy to build a scalable business model and become investor-ready.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What You'll Get (Key Offerings) */}
      <section id="offerings" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className=" text-red-600 text-3xl md:text-4xl font-bold text-center mb-16">What You'll Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1-on-1 Growth Mentorship</h3>
                <p className="text-gray-600">
                  Personalized guidance from successful entrepreneurs and industry leaders
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Market Entry Strategy</h3>
                <p className="text-gray-600">Comprehensive go-to-market planning and scalability roadmaps</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <Presentation className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Investor Pitch Training</h3>
                <p className="text-gray-600">Professional pitch deck development and presentation coaching</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Product-Market Fit Analysis</h3>
                <p className="text-gray-600">Deep dive into customer validation and market positioning</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Financial Modeling</h3>
                <p className="text-gray-600">Revenue projections, unit economics, and financial planning sessions</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Angel Network Access</h3>
                <p className="text-gray-600">Direct access to investors and exclusive demo day opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Program Structure / Timeline */}
      <ProgramStructure />
      {/* Success Highlights */}
      <section id="success" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-red-600 text-3xl md:text-4xl font-bold text-center mb-16">Success Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">RJ</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Rajesh Jain</CardTitle>
                      <CardContent>
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-black" />
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-4">
                          "Pre-Acceleration transformed our startup from idea to funded company. We raised ₹50L in seed
                          funding within 2 months of graduation!"
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-green-600 text-green-600">
                            ₹50L Seed Funding
                          </Badge>
                          <Badge variant="outline" className="border-blue-600 text-blue-600">
                            500+ Customers
                          </Badge>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">NK</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Neha Kapoor</CardTitle>
                      <CardContent>
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-black" />
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-4">
                          "The investor pitch training was game-changing. We went from nervous founders to confident
                          entrepreneurs ready to scale globally!"
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-purple-600 text-purple-600">
                            Series A Ready
                          </Badge>
                          <Badge variant="outline" className="border-orange-600 text-orange-600">
                            International Expansion
                          </Badge>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">AS</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Amit Singh</CardTitle>
                      <CardContent>
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-black" />
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-4">
                          "From 0 to 10,000 users in 4 months! The customer acquisition strategies we learned were incredibly
                          effective for our healthcare platform."
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-red-600 text-red-600">
                            10K+ Users
                          </Badge>
                          <Badge variant="outline" className="border-teal-600 text-teal-600">
                            ₹25L Revenue
                          </Badge>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreAccelerationContent; 