import { Button } from "@/components/programs/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/programs/Card"
import { Badge } from "@/components/programs/Badge"
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
  CheckCircle,
  Calendar,
  Clock,
  Award,
  Lightbulb,
  DollarSign,
  Scale,
  TrendingUp,
  MessageCircle,
  FileText,
  Globe,
  Zap,
} from "lucide-react"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function MasterclassPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col min-h-screen">
      {/* Header */}
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <Badge variant="outline" className="mb-6 border-black text-black">
              Expert-Led Training
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              TBI <span className="underline decoration-4">Masterclass</span> Series
              <br />
              <span className="italic">Learn</span>, Build, <span className="italic">Launch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert-led workshops and startup training sessions to empower your entrepreneurial journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                Join the Next Masterclass
                <ArrowRight className="ml-2 w-4 h-4 inline" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-black border-black hover:bg-gray-50 px-8 py-3"
              >
                View Schedule
              </Button>
            </div>
            {/* Workshop Illustration */}
            <div className="relative max-w-4xl mx-auto">
              <div className="grid grid-cols-5 gap-4 opacity-20">
                {/* Instructor */}
                <div className="col-span-2 flex flex-col items-center space-y-4">
                  <div className="w-20 h-20 border-4 border-black rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10" />
                  </div>
                  <div className="w-16 h-2 bg-black rounded"></div>
                  <div className="text-sm font-medium">Expert Instructor</div>
                </div>
                {/* Students */}
                <div className="col-span-3 grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 text-center opacity-20">
                <div className="text-sm font-medium">Interactive Learning Environment</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ... rest of the provided code ... */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What is the TBI Masterclass?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              The TBI Masterclass is a structured series of sessions designed to educate, empower, and elevate young
              innovators. From ideation to execution, our workshops cover startup essentials, product design, business
              models, fundraising, pitching, and more — all led by industry experts, entrepreneurs, and professors.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-gray-600">Sessions Conducted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2000+</div>
                <div className="text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-gray-600">Expert Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Sessions Conducted */}
      <section id="sessions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Types of Sessions Conducted</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors bg-white">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Design Thinking Workshops</h3>
                <p className="text-gray-600">Human-centered design approach to innovation and problem-solving</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors bg-white">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">MVP & Product Validation</h3>
                <p className="text-gray-600">Build and test your minimum viable product with real users</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors bg-white">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fundraising & Pitching</h3>
                <p className="text-gray-600">Master the art of investor presentations and funding strategies</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors bg-white">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Legal & IP Training</h3>
                <p className="text-gray-600">Navigate legal structures, intellectual property, and compliance</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors bg-white">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Business Model Canvas</h3>
                <p className="text-gray-600">Structure your business model and value proposition effectively</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors bg-white">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Market Research & GTM</h3>
                <p className="text-gray-600">Understand your market and develop go-to-market strategies</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors bg-white">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fireside Chats</h3>
                <p className="text-gray-600">Intimate conversations with successful founders and industry leaders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who Should Attend?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">Aspiring Entrepreneurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">
                    Student entrepreneurs with innovative ideas seeking guidance
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">Startup Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">Teams across all stages of startup development</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">Innovators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">
                    Creative minds looking for hands-on training and practical skills
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">TBI Participants</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">
                    Members of pre-incubation, bridge, or pre-acceleration programs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights from Past Masterclasses */}
      <section id="highlights" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Highlights from Past Masterclasses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200 bg-white">
                <CardHeader>
                  <Badge variant="outline" className="border-black text-black w-fit mb-2">
                    Design Thinking Workshop
                  </Badge>
                  <CardTitle className="text-lg">Building User-Centric Products</CardTitle>
                  <CardDescription>
                    <strong>Speaker:</strong> Dr. Rajesh Kumar, Design Director at Microsoft India
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">SK</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Shreya Kapoor</div>
                      <div className="text-xs text-gray-600">CSE Student</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic text-sm">
                    "This workshop completely changed how I approach product development. The hands-on exercises were
                    incredibly valuable!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 bg-white">
                <CardHeader>
                  <Badge variant="outline" className="border-black text-black w-fit mb-2">
                    Fundraising Masterclass
                  </Badge>
                  <CardTitle className="text-lg">Pitching to Investors</CardTitle>
                  <CardDescription>
                    <strong>Speaker:</strong> Ankit Agarwal, Partner at Elevation Capital
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">VM</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Vikram Mehta</div>
                      <div className="text-xs text-gray-600">MBA Student</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic text-sm">
                    "Learned the insider secrets of what investors really look for. Applied these techniques and secured
                    our first meeting!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 bg-white">
                <CardHeader>
                  <Badge variant="outline" className="border-black text-black w-fit mb-2">
                    Fireside Chat
                  </Badge>
                  <CardTitle className="text-lg">Journey of a Unicorn Founder</CardTitle>
                  <CardDescription>
                    <strong>Speaker:</strong> Ritesh Agarwal, Founder & CEO, OYO Rooms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">PT</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Priya Tiwari</div>
                      <div className="text-xs text-gray-600">ECE Student</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic text-sm">
                    "Incredibly inspiring! Ritesh's story showed that age is just a number when it comes to building
                    something impactful."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Masterclasses */}
      <section id="upcoming" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Upcoming Masterclasses</h2>
            <div className="space-y-6">
              {[
                {
                  date: "March 15, 2024",
                  time: "2:00 PM - 4:00 PM",
                  title: "AI & Machine Learning for Startups",
                  speaker: "Dr. Priya Sharma, AI Research Lead at Google",
                  topic: "Integrating AI into your startup strategy",
                  seats: "25 seats available",
                },
                {
                  date: "March 22, 2024",
                  time: "3:00 PM - 5:00 PM",
                  title: "Building Scalable Tech Architecture",
                  speaker: "Rohit Kumar, CTO at Razorpay",
                  topic: "Technical foundations for growing startups",
                  seats: "30 seats available",
                },
                {
                  date: "March 29, 2024",
                  time: "4:00 PM - 6:00 PM",
                  title: "Digital Marketing for Startups",
                  speaker: "Neha Agarwal, Growth Head at Swiggy",
                  topic: "Customer acquisition and retention strategies",
                  seats: "40 seats available",
                },
              ].map((event, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div className="flex flex-col">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm text-gray-600">{event.time}</span>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Speaker:</strong> {event.speaker}
                        </p>
                        <p className="text-sm text-gray-600">{event.topic}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge variant="outline" className="border-green-600 text-green-600">
                          {event.seats}
                        </Badge>
                        <Button className="bg-black text-white hover:bg-gray-800">Register Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Join?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Learn from Industry Experts</h3>
                  <p className="text-gray-600">
                    Get direct access to successful entrepreneurs, VCs, and industry leaders who share real-world
                    insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-World Insights & Tools</h3>
                  <p className="text-gray-600">
                    Practical frameworks, templates, and strategies you can immediately apply to your startup journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Certification of Participation</h3>
                  <p className="text-gray-600">
                    Receive official certificates that validate your learning and commitment to entrepreneurship.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Networking with Startup Ecosystem</h3>
                  <p className="text-gray-600">
                    Connect with fellow entrepreneurs, mentors, and potential co-founders in our vibrant community.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Practical, Action-Driven Content</h3>
                  <p className="text-gray-600">
                    Every session is designed to provide actionable takeaways you can implement immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 