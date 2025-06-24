import { Button } from "@/components/programs/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/programs/Card"
import { Badge } from "@/components/programs/Badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/programs/Accordion"
import {
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  DollarSign,
  Presentation,
  Mail,
  Phone,
  MapPin,
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
} from "lucide-react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function PreAccelerationPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      {/* Hero Section */}
      
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <Badge variant="outline" className="mb-6 border-black text-black">
              Advanced Program
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="">Pre-Acceleration</span>
              <br />
              <span className="">Accelerate</span> Your Startup Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Designed for startups ready to refine, scale, and raise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4 inline" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-black border-black hover:bg-gray-50 px-8 py-3"
              >
                View Program Details
              </Button>
            </div>

            {/* Rocket Launch Illustration */}
            <div className="relative max-w-4xl mx-auto">
              <div className="flex items-end justify-center space-x-8 opacity-20">
                {/* Growth Curve */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6" />
                  </div>
                  <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div className="w-20 h-20 border-4 border-black rounded-full flex items-center justify-center">
                    <Rocket className="w-10 h-10" />
                  </div>
                </div>

                {/* Launch Trail */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-2 h-8 bg-black opacity-30"></div>
                  <div className="w-3 h-12 bg-black opacity-50"></div>
                  <div className="w-4 h-16 bg-black opacity-70"></div>
                  <div className="w-6 h-20 bg-black"></div>
                </div>

                {/* Success Indicators */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="w-20 h-20 border-4 border-black rounded-full flex items-center justify-center">
                    <Globe className="w-10 h-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Pre-Acceleration Program */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About the Pre-Acceleration Program</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              The Pre-Acceleration Program at TBI CU is for early-stage startups who have validated their product and
              are now ready to scale, refine their go-to-market strategy, and prepare for investor pitches. This program
              builds business maturity before full acceleration.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4-6</div>
                <div className="text-gray-600">Weeks Intensive</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-gray-600">Funding Success</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">₹2.5Cr+</div>
                <div className="text-gray-600">Total Funding Raised</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-gray-600">Startups Accelerated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who Should Apply?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Working MVP</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Student-led startups with a working MVP and initial traction
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Market Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">Founders ready to enter the market and scale operations</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Investor Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Teams seeking investor readiness & startup acceleration support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get (Key Offerings) */}
      <section id="offerings" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What You'll Get</h2>
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
      <section id="structure" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Program Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
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
              ].map((item, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="outline" className="border-black text-black mb-2">
                      {item.week}
                    </Badge>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
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
      </section>

      {/* Success Highlights */}
      <section id="success" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Success Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">RJ</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Rajesh Jain</CardTitle>
                      <CardDescription>TechFlow Solutions</CardDescription>
                    </div>
                  </div>
                </CardHeader>
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
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">NK</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Neha Kapoor</CardTitle>
                      <CardDescription>EcoSmart Innovations</CardDescription>
                    </div>
                  </div>
                </CardHeader>
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
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">AS</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Amit Singh</CardTitle>
                      <CardDescription>HealthTech Pro</CardDescription>
                    </div>
                  </div>
                </CardHeader>
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
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <Accordion className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What's the difference between pre-incubation, bridge, and pre-acceleration?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Pre-incubation is for raw ideas, Bridge helps transition validated concepts, and Pre-acceleration is
                  for startups with working MVPs ready to scale and raise funding. Each program builds on the previous
                  stage of startup maturity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">Do I need revenue to join?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  While revenue is not mandatory, we prefer startups with some initial traction, user validation, or
                  early revenue indicators. The program is designed for market-ready startups preparing for growth and
                  investment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What's expected at the end of the program?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  You'll present a comprehensive pitch to our angel network on Demo Day, have a refined business model,
                  clear growth strategy, and be investor-ready. Many graduates secure funding within 3-6 months of
                  completion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Is this program only for tech startups?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  No, we welcome startups from all sectors including tech, healthcare, fintech, edtech, social impact,
                  and traditional businesses with innovative approaches. The key is having a scalable business model and
                  growth potential.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      
      {/* Contact Information */}
      

      {/* Footer */}
    </div>
  )
} 