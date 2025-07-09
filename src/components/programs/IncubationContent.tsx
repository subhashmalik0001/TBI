import { Button } from "@/components/programs/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/programs/Card";
import { Badge } from "@/components/programs/Badge";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Users,
  Target,
  BookOpen,
  Star,
  Rocket,
  Award,
  Lightbulb,
  DollarSign,
  Scale,
  TrendingUp,
  MessageCircle,
  FileText,
  Globe,
  Zap,
  Building,
  Network,
  Presentation,
  Briefcase,
  Cpu,
  Megaphone,
  Coffee,
} from "lucide-react";

// Counter Animation Hook
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return { count, setIsVisible };
}

// Animated Counter Component
function AnimatedCounter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const { count, setIsVisible } = useCounter(end);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    const element = document.getElementById(`counter-${label.replace(/\s+/g, "-").toLowerCase()}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [setIsVisible, label]);

  return (
    <div id={`counter-${label.replace(/\s+/g, "-").toLowerCase()}`} className="text-center">
      <div className="text-4xl font-bold mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="min-h-screen bg-white ml-0">
      <div className="flex flex-col md:flex-row">
        {/* Left Navigation */}
        <div className="w-full md:w-80 p-2 md:p-10 md:ml-39 ">
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
        <div className="flex-1 p-4 md:pl-101 md:pr-20 md:py-10">
          <div className="max-w-4xl space-y-8">
            <p className="text-black text-base md:text-lg leading-relaxed">
              We understand that data is more than a by-product of business operations, it is the key to unlocking
              competitive advantage and innovation. But making the leap from raw data to valuable insights requires more
              than just tools. It demands a clear vision, a robust foundation, and the right expertise.
            </p>

            <p className="text-black text-base md:text-lg leading-relaxed">
              We have, and continue to help organisations build strong data foundations through smart governance,
              quality management, and aligned data strategy, the essentials for trusted, scalable insight generation.
              With these basics in place, we enable teams to move beyond compliance and control, ensuring that they can
              use data confidently and creatively.
            </p>

            <p className="text-black text-base md:text-lg leading-relaxed">
              From establishing governance frameworks to enabling self-service analytics and advanced data science, we
              partner with teams across every stage of your data journey. Our experts bring real-life knowledge of
              leading technologies and tools, helping businesses unlock insights that are accessible, timely, and
              directly connected to their strategic goals.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-4 mt-8 md:mt-16 mb-8 md:mb-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
  )
} 