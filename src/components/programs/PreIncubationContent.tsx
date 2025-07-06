import React from "react";
import { Button } from "@/components/programs/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/programs/Card";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const PreIncubationContent = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
    

      {/* About Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              About Pre-Incubation <span className="text-red-600">@ TBI CU</span>
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              The Pre-Incubation Program at TBI CU is designed to support early-stage student entrepreneurs who have
              innovative ideas but need guidance to develop them into working models. We help you validate your idea,
              connect with mentors, and create your first MVP (Minimum Viable Product).
            </p>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-gray-600">Ideas Incubated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">25+</div>
                <div className="text-gray-600">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-gray-600">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it For */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 text-center mb-8">Who is it For?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center"> 
                  <CardTitle>Raw Ideas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">Students with raw or undeveloped startup ideas</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                  <CardTitle>Seeking Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">Innovators looking for mentorship and resources</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                  <CardTitle>Exploring Entrepreneurship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Anyone seeking to explore entrepreneurship before formal incubation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* World Class Facilities Section */}
      <div className="bg-gray-50 py-8 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
              We provide World Class <span className="text-red-600 font-semibold">Facilities</span>
            </h1>
            <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Chandigarh University houses various multifaceted Labs that gives our innovators & researchers a platform to
              work with ease of technology.
            </p>
          </div>
          {/* Labs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Genetics Lab */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://naslefarda-clinic.com/en/wp-content/uploads/2023/08/shutterstock_1491119384_baixa-scaled-2.webp"
                  alt="Genetics Lab - Researcher using microscope"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                  <h3 className="text-lg font-semibold text-gray-800">Genetics Lab</h3>
                </div>
              </div>
            </div>
            {/* SEM Lab */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                 src="https://www.eas.ualberta.ca/sem/files/P1080549.JPG"
                  alt="SEM Lab - Scanning Electron Microscope equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                  <h3 className="text-lg font-semibold text-gray-800">SEM Lab</h3>
                </div>
              </div>
            </div>
            {/* XRD Lab */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://www.irec.cat/wp-content/uploads/2020/08/Field-Emission-Scanning-Electron-Microscope_FE-SEM.jpg"
                  alt="XRD Lab - X-ray Diffraction equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                  <h3 className="text-lg font-semibold text-gray-800">XRD Lab</h3>
                </div>
              </div>
            </div>
            {/* Artificial Intelligence Lab */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                 src="https://imgcdn.stablediffusionweb.com/2024/12/19/d0a7139b-dd33-4f4e-a963-78394fe151e9.jpg"
                  alt="Artificial Intelligence Lab - AI and robotics technology"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                  <h3 className="text-lg font-semibold text-gray-800">Artificial Intelligence Lab</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Benefits */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-red-600 font-bold text-center mb-10">Program Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <h3 className="text-lg font-semibold mb-1">Expert Mentorship</h3>
                <p className="text-gray-600">Connect with industry experts and successful entrepreneurs</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <h3 className="text-lg font-semibold mb-1">Idea Validation</h3>
                <p className="text-gray-600">Test and refine your concept with market research</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <h3 className="text-lg font-semibold mb-1">University Resources</h3>
                <p className="text-gray-600">Access to labs, libraries, and research facilities</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <h3 className="text-lg font-semibold mb-1">Networking</h3>
                <p className="text-gray-600">Connect with fellow entrepreneurs and industry leaders</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <h3 className="text-lg font-semibold mb-1">Workshops & Bootcamps</h3>
                <p className="text-gray-600">Skill-building sessions and intensive training programs</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg hover:border-black transition-colors">
                <h3 className="text-lg font-semibold mb-1">Pitch Opportunity</h3>
                <p className="text-gray-600">Chance to pitch for full incubation program</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Incubation Journey */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-red-600 font-bold text-center mb-10">Pre-Incubation Journey</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Apply Online", description: "Submit your application with your innovative idea" },
                {
                  step: "02",
                  title: "Idea Evaluation & Shortlisting",
                  description: "Our experts review and evaluate your proposal",
                },
                {
                  step: "03",
                  title: "Mentor Allocation",
                  description: "Get paired with industry mentors matching your domain",
                },
                {
                  step: "04",
                  title: "MVP & Strategy Building",
                  description: "Develop your minimum viable product with guidance",
                },
                {
                  step: "05",
                  title: "Demo Day / Pitching",
                  description: "Present your progress and compete for full incubation",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {index < 4 && (
                    <div className="flex-shrink-0 ml-4">
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-10">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-base font-bold">AK</span>
                    </div>
                    <div>
                      <CardTitle className="text-base">Arjun Kumar</CardTitle>
                      <CardDescription>EcoTech Solutions</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic text-sm">
                    "TBI CU's pre-incubation program helped me transform my environmental idea into a working prototype.
                    The mentorship was invaluable."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-base font-bold">PS</span>
                    </div>
                    <div>
                      <CardTitle className="text-base">Priya Sharma</CardTitle>
                      <CardDescription>HealthTech Innovations</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic text-sm">
                    "From a simple healthcare app idea to a funded startup - the journey started here at TBI CU. Amazing
                    support system!"
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-base font-bold">RG</span>
                    </div>
                    <div>
                      <CardTitle className="text-base">Rahul Gupta</CardTitle>
                      <CardDescription>EdTech Platform</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic text-sm">
                    "The structured approach and expert guidance helped me build a solid foundation for my EdTech
                    startup. Highly recommended!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreIncubationContent; 