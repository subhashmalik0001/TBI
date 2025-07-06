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
    <div className="min-h-screen bg-white ml-50">
      <div className="flex">
        {/* Left Navigation */}
        <div className="w-80 p-8">
          <div className="space-y-4">
            <div className="text-gray-500 text-sm font-normal mb-6">INCLUDING:</div>
            <div className="space-y-3">
              <div className="text-black font-medium">DATA MATURITY +</div>
              <div className="text-black font-medium">DATA STRATEGY +</div>
              <div className="text-black font-medium">DATA ARCHITECTURE</div>
              <div className="text-black font-medium">ANALYTICS & INSIGHTS</div>
              <div className="text-black font-medium">DATA GOVERNANCE</div>
              <div className="text-black font-medium">DATA QUALITY ASSESSMENT</div>
              <div className="text-black font-medium">+ MANY MORE</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 pr-16">
          <div className="max-w-4xl space-y-8">
            <p className="text-black text-lg leading-relaxed">
              We understand that data is more than a by-product of business operations, it is the key to unlocking
              competitive advantage and innovation. But making the leap from raw data to valuable insights requires more
              than just tools. It demands a clear vision, a robust foundation, and the right expertise.
            </p>

            <p className="text-black text-lg leading-relaxed">
              We have, and continue to help organisations build strong data foundations through smart governance,
              quality management, and aligned data strategy, the essentials for trusted, scalable insight generation.
              With these basics in place, we enable teams to move beyond compliance and control, ensuring that they can
              use data confidently and creatively.
            </p>

            <p className="text-black text-lg leading-relaxed">
              From establishing governance frameworks to enabling self-service analytics and advanced data science, we
              partner with teams across every stage of your data journey. Our experts bring real-life knowledge of
              leading technologies and tools, helping businesses unlock insights that are accessible, timely, and
              directly connected to their strategic goals.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-4 mt-16 mb-16">
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full bg-white hover:bg-gray-50">
              <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-0.5"></div>
              </div>
              View Guides + Articles
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full bg-white hover:bg-gray-50">
              <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-0.5"></div>
              </div>
              AI in the Data space
            </button>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Experian Case Study */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Modern building architecture"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 rounded">CASE STUDY</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-6">
                  Creating a Scalable Data Management Governance Framework for Experian
                </h3>
                <div className="flex items-center justify-between">
                  <img src="/placeholder.svg?height=24&width=80" alt="Experian logo" className="h-6" />
                  <div className="w-5 h-5 text-gray-400">→</div>
                </div>
              </div>
            </div>

            {/* UK Food & Drink Manufacturer Case Study */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Industrial manufacturing equipment"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 rounded">CASE STUDY</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-6">
                  Strategy for Data Governance Optimisation for a UK Food & Drink Manufacturer
                </h3>
                <div className="flex justify-end">
                  <div className="w-5 h-5 text-gray-400">→</div>
                </div>
              </div>
            </div>

            {/* Wilson James Case Study */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="City skyline"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 rounded">CASE STUDY</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-6">Digital Due Diligence for Wilson James</h3>
                <div className="flex items-center justify-between">
                  <img src="/placeholder.svg?height=24&width=80" alt="Wilson James logo" className="h-6" />
                  <div className="w-5 h-5 text-gray-400">→</div>
                </div>
              </div>
            </div>

            {/* FitFlop Case Study */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Shoes and sneakers"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 rounded">CASE STUDY</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-6">
                  Maximising GDPR Compliance; Minimising Cyber Security Risks for FitFlop
                </h3>
                <div className="flex items-center justify-between">
                  <img src="/placeholder.svg?height=24&width=80" alt="FitFlop logo" className="h-6" />
                  <div className="w-5 h-5 text-gray-400">→</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreAccelerationContent; 