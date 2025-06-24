"use client"

import { Button } from "@/components/programs/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/programs/Card"
import { Badge } from "@/components/programs/Badge"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  Users,
  Target,
  BookOpen,
  Mail,
  Phone,
  MapPin,
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
} from "lucide-react"

// Counter Animation Hook
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  return { count, setIsVisible }
}

// Animated Counter Component
function AnimatedCounter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const { count, setIsVisible } = useCounter(end)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById(`counter-${label.replace(/\s+/g, "-").toLowerCase()}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [setIsVisible, label])

  return (
    <div id={`counter-${label.replace(/\s+/g, "-").toLowerCase()}`} className="text-center">
      <div className="text-4xl font-bold mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

export default function IncubationPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col min-h-screen">
      {/* ... rest of the provided code, replacing <header> with <Navbar /> and <footer> with <Footer /> ... */}
      {/* Place all sections and content here, as in the provided code, except for header/footer */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <Badge variant="outline" className="mb-6 border-black text-black animate-fade-in">
              DST, GoI Supported
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Full Startup <span className="underline decoration-4">Incubation</span>
              <br />
              at TBI CU
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              Where student ideas become funded startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-delay-2">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                Apply for Incubation
                <ArrowRight className="ml-2 w-4 h-4 inline" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-black border-black hover:bg-gray-50 px-8 py-3"
              >
                Explore Programs
              </Button>
            </div>

            {/* Animated Startup Launch Illustration */}
            <div className="relative max-w-4xl mx-auto animate-float">
              <div className="flex items-center justify-center space-x-12 opacity-20">
                {/* Idea Stage */}
                <div className="flex flex-col items-center space-y-4 animate-bounce-slow">
                  <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium">Idea</span>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-8 h-8 animate-pulse" />

                {/* MVP Stage */}
                <div className="flex flex-col items-center space-y-4 animate-bounce-slow-delay">
                  <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium">MVP</span>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-8 h-8 animate-pulse" />

                {/* Market Stage */}
                <div className="flex flex-col items-center space-y-4 animate-bounce-slow">
                  <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium">Market</span>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-8 h-8 animate-pulse" />

                {/* Funded Startup */}
                <div className="flex flex-col items-center space-y-4 animate-bounce-slow-delay">
                  <div className="w-20 h-20 border-4 border-black rounded-full flex items-center justify-center">
                    <Rocket className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-medium">Funded Startup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is TBI CU */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-on-scroll">What is TBI CU?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12 animate-on-scroll">
              Technology Business Incubator (TBI) at Chandigarh University is an institution supported by DST, GoI, and
              the university ecosystem to nurture innovative and scalable ideas. TBI supports budding student
              entrepreneurs by offering space, mentoring, tech infrastructure, funding access, and business services to
              turn ideas into companies.
            </p>

            {/* Support Ecosystem */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">DST, GoI</h3>
                <p className="text-gray-600">Government of India Department of Science & Technology support</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Chandigarh University</h3>
                <p className="text-gray-600">Complete university ecosystem and academic support</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Industry Partners</h3>
                <p className="text-gray-600">Extensive network of mentors, investors, and industry experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How TBI Works - Animated Timeline */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">How TBI Works</h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Application & Screening",
                  description: "Submit your startup idea and go through our comprehensive evaluation process",
                  icon: FileText,
                },
                {
                  step: "02",
                  title: "Onboarding + Goal Setting",
                  description: "Welcome to TBI with structured goal setting and milestone planning",
                  icon: Target,
                },
                {
                  step: "03",
                  title: "Mentorship & Tech Access",
                  description: "Get paired with industry mentors and access our technical infrastructure",
                  icon: Users,
                },
                {
                  step: "04",
                  title: "Business Model Development",
                  description: "Refine your business model with expert guidance and market validation",
                  icon: TrendingUp,
                },
                {
                  step: "05",
                  title: "Legal, IP & Compliance",
                  description: "Navigate legal structures, intellectual property, and regulatory requirements",
                  icon: Scale,
                },
                {
                  step: "06",
                  title: "Demo Day / Investor Pitching",
                  description: "Present to our investor network and secure funding for growth",
                  icon: Presentation,
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 animate-timeline-item">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center space-x-4 mb-2">
                      <item.icon className="w-6 h-6" />
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {index < 5 && (
                    <div className="flex-shrink-0 ml-8">
                      <div className="w-px h-16 bg-gray-300 animate-line-grow"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What TBI Provides */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">What TBI Provides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Coffee, title: "Co-Working Space", description: "Modern workspace with all amenities" },
                { icon: Users, title: "Mentorship", description: "Industry & academic expert guidance" },
                { icon: Cpu, title: "Tech Infrastructure", description: "Labs, servers, and development tools" },
                { icon: Scale, title: "Legal & IP Support", description: "Legal guidance and IP protection" },
                {
                  icon: DollarSign,
                  title: "Funding Access",
                  description: "Grants, investors, and funding opportunities",
                },
                { icon: Briefcase, title: "Business Tools", description: "Essential startup tools and resources" },
                { icon: Megaphone, title: "Marketing Support", description: "Branding and marketing assistance" },
                { icon: Network, title: "Networking Events", description: "Hackathons, demo days, and meetups" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-all duration-300 animate-service-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 transform transition-transform hover:scale-110">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives by TBI CU */}
      <section id="initiatives" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
              Initiatives by TBI CU
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Pre-Incubation Program",
                  description: "For students with raw ideas seeking initial guidance and validation",
                  icon: Lightbulb,
                  badge: "Idea Stage",
                },
                {
                  title: "Bridge Program",
                  description: "Transition pathway from pre-incubation to full-scale incubation",
                  icon: Target,
                  badge: "Transition",
                },
                {
                  title: "Pre-Acceleration Program",
                  description: "For startups ready to scale, refine, and prepare for investment",
                  icon: Rocket,
                  badge: "Growth Stage",
                },
                {
                  title: "Masterclass Series",
                  description: "Expert-led workshops and training sessions for skill development",
                  icon: BookOpen,
                  badge: "Learning",
                },
                {
                  title: "Startup Bootcamps",
                  description: "Intensive training programs and hackathons for rapid development",
                  icon: Zap,
                  badge: "Intensive",
                },
                {
                  title: "Founder Talks",
                  description: "Fireside chats and networking sessions with successful entrepreneurs",
                  icon: MessageCircle,
                  badge: "Networking",
                },
              ].map((initiative, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-black transition-all duration-300 animate-initiative-card"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <initiative.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className="border-black text-black">
                        {initiative.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{initiative.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{initiative.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Impact - Animated Counters */}
      <section id="impact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">Achievements & Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <AnimatedCounter end={150} suffix="+" label="Startups Incubated" />
              <AnimatedCounter end={75} suffix="+" label="Mentors Onboarded" />
              <AnimatedCounter end={50} suffix="+" label="Grants Disbursed" />
              <AnimatedCounter end={25} suffix="+" label="Investors Engaged" />
              <AnimatedCounter end={500} suffix="+" label="Student Founders" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Arjun Patel",
                  startup: "TechFlow Solutions",
                  quote:
                    "TBI CU transformed our idea into a ₹2Cr funded startup. The mentorship and infrastructure support were game-changing.",
                  initials: "AP",
                },
                {
                  name: "Priya Sharma",
                  startup: "EcoSmart Innovations",
                  quote:
                    "From pre-incubation to full acceleration, TBI CU supported us at every step. We're now expanding internationally.",
                  initials: "PS",
                },
                {
                  name: "Vikram Singh",
                  startup: "HealthTech Pro",
                  quote:
                    "The legal support and investor network at TBI CU helped us navigate complex regulations and secure Series A funding.",
                  initials: "VS",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-200 animate-testimonial-card"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold">{testimonial.initials}</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.startup}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-black" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 