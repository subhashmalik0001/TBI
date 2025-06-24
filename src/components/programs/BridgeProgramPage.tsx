import React from "react";
import { Button } from "@/components/programs/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/programs/Card";
import { Badge } from "@/components/programs/Badge";
import {
  ArrowRight,
  Users,
  Target,
  BookOpen,
  Network,
  Presentation,
  Mail,
  Phone,
  MapPin,
  Star,
  Rocket,
  TrendingUp,
  CheckCircle,
  Building,
  Lightbulb,
  BarChart3,
  FileText,
  Scale,
  TestTube,
  DollarSign,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BridgeProgramPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}

      {/* Hero Section */}
      <section
        className="py-20 lg:py-34 bg-black text-white relative"
        style={{
          backgroundImage: 'url(https://scontent.fdel27-4.fna.fbcdn.net/v/t39.30808-6/472788822_8650603015046341_4895232034847481237_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BzidULJ005oQ7kNvwEicWhc&_nc_oc=AdkpYyhV5dhGXsXogPyGSNPxcGsY9JRxzy2YXpdZaxTEr0aZBCjLeplZH8lkd_NN56k&_nc_zt=23&_nc_ht=scontent.fdel27-4.fna&_nc_gid=vISom0hkcQ4ilSdGnPjY6w&oh=00_AfNa8GKSnTSe8MkGDP3OkeCxbqKQdhFjpBc2rHHxD2uHyA&oe=685F2F5F)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 pointer-events-none" style={{zIndex:1}} />
        <div className="container mx-auto px-4 text-center relative mt-24" style={{zIndex:2}}>
          <div className="max-w-5xl mx-auto">
           
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="">Bridge Program</span>
              <br />
              Your Next Step Toward <span className="">Startup Success</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              A curated transition pathway for validated ideas moving from pre-incubation to full-scale incubation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
    variant="outline"
    size="lg"
    className="bg-red-80 text-black border-red-30 hover:bg-gray-50 px-8 py-3 w-80"
  >
   Explore the Program

  </Button>
 
  <Button
    variant="outline"
    size="lg"
    className="bg-white text-black border-black hover:bg-gray-50 px-8 py-3 w-60"
  >
    View Requirements
  </Button>
</div>

            {/* Bridge Illustration */}
            <div className="relative max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-8 opacity-20">
                {/* Starting Point */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center mb-2">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium">Pre-Incubation</span>
                </div>

                {/* Bridge */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-1 bg-black"></div>
                  <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="w-8 h-1 bg-black"></div>
                  <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="w-8 h-1 bg-black"></div>
                </div>

                {/* End Point */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center mb-2">
                    <Building className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium">Full Incubation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is the Bridge Program */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What is the Bridge Program?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              The Bridge Program at TBI CU is designed to support student entrepreneurs who have completed
              pre-incubation and are ready to refine their MVP, build a business model, and prepare for full incubation.
              This is a short, focused program to help you build momentum and gain investor-readiness.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">6-8</div>
                <div className="text-gray-600">Weeks Duration</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-gray-600">Startups Bridged</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-gray-600">Industry Mentors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who Can Join?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Pre-Incubation Graduates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Graduates of the TBI CU Pre-Incubation Program with validated concepts
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>MVP Ready Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">Teams with a validated MVP and clear problem-solution fit</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Growth-Ready Startups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Early-stage student startups ready for business model development
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section id="offerings" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Deep-Dive Mentoring</h3>
                <p className="text-gray-600">Intensive one-on-one sessions with industry experts</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Business Model Canvas</h3>
                <p className="text-gray-600">Structured workshops to refine your business model</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Legal & Compliance</h3>
                <p className="text-gray-600">Guidance on legal structure and regulatory requirements</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <TestTube className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Market Validation</h3>
                <p className="text-gray-600">User testing and market research methodologies</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Extended Network</h3>
                <p className="text-gray-600">Access to TBI's investor and industry network</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fundraising Strategy</h3>
                <p className="text-gray-600">Pitch deck development and investor readiness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Program Timeline */}
      <section id="timeline" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Bridge Program Timeline</h2>
            <div className="space-y-8">
              {[
                {
                  week: "Week 1-2",
                  title: "Onboarding & Strategy Setting",
                  description: "Assessment of current status and goal setting for the program",
                  icon: Calendar,
                },
                {
                  week: "Week 3-4",
                  title: "Mentor-Mentee Engagements",
                  description: "Deep-dive sessions with assigned mentors and business model refinement",
                  icon: Users,
                },
                {
                  week: "Week 5-6",
                  title: "Workshops & Market Interactions",
                  description: "Intensive workshops and real market validation exercises",
                  icon: BookOpen,
                },
                {
                  week: "Week 7-8",
                  title: "Final Assessment & Pitching",
                  description: "Comprehensive evaluation and pitch presentation to the panel",
                  icon: Presentation,
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center">
                      <item.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge variant="outline" className="border-black text-black">
                        {item.week}
                      </Badge>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="flex-shrink-0 ml-8">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials / Results */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Bridge Program Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">SM</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Sneha Mehta</CardTitle>
                      <CardDescription>AgriTech Solutions</CardDescription>
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
                    "The Bridge Program helped us transition from a prototype to a market-ready product. We secured our
                    first round of funding within 3 months!"
                  </p>
                  <Badge variant="outline" className="border-green-600 text-green-600">
                    ₹15L Funding Secured
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">VK</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Vikram Kumar</CardTitle>
                      <CardDescription>FinTech Innovations</CardDescription>
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
                    "The mentorship and business model workshops were game-changers. We refined our strategy and are now
                    in full incubation!"
                  </p>
                  <Badge variant="outline" className="border-blue-600 text-blue-600">
                    Full Incubation Accepted
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">AT</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Ananya Tiwari</CardTitle>
                      <CardDescription>SocialTech Platform</CardDescription>
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
                    "Bridge Program provided the perfect stepping stone. The legal guidance and market validation
                    sessions were invaluable."
                  </p>
                  <Badge variant="outline" className="border-purple-600 text-purple-600">
                    1000+ Active Users
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
          <FileText className="w-4 h-4 mr-2" />
          Download Detailed Brochure
        </Button>
      </div>

      {/* Contact Information */}
      
      
      {/* Footer */}
    </div>
  )
} 