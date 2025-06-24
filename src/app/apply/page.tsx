"use client";
import { useState } from "react";
import Image from "next/image";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    industry: "",
    stage: "",
    teamSize: "",
    funding: "",
    description: "",
    problem: "",
    solution: "",
    market: "",
    traction: "",
    goals: "",
    timeline: "",
    mentor: "",
    resources: "",
    additional: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white text-black">
        <div className="w-full h-31 bg-black">

        </div>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            APPLY TO <span className="text-red-600">INCUBATOR</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our ecosystem of innovators and entrepreneurs. Transform your startup vision into reality with our comprehensive incubation program.
          </p>
        </div>

        {/* Application Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center border-b-2 border-black pb-4">
              APPLICATION FORM
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="border-2 border-black p-6">
                <h3 className="text-xl font-bold mb-6 text-red-600">PERSONAL INFORMATION</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="border-2 border-black p-6">
                <h3 className="text-xl font-bold mb-6 text-red-600">COMPANY INFORMATION</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Website</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Industry *</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="">Select Industry</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="education">Education</option>
                      <option value="retail">Retail</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Development Stage *</label>
                    <select
                      name="stage"
                      value={formData.stage}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="">Select Stage</option>
                      <option value="idea">Idea Stage</option>
                      <option value="prototype">Prototype</option>
                      <option value="mvp">MVP</option>
                      <option value="early-traction">Early Traction</option>
                      <option value="growth">Growth Stage</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Team Size</label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="">Select Team Size</option>
                      <option value="1">1 person</option>
                      <option value="2-5">2-5 people</option>
                      <option value="6-10">6-10 people</option>
                      <option value="11-20">11-20 people</option>
                      <option value="20+">20+ people</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Funding Raised</label>
                    <select
                      name="funding"
                      value={formData.funding}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="">Select Funding</option>
                      <option value="none">No funding</option>
                      <option value="friends-family">Friends & Family</option>
                      <option value="seed">Seed</option>
                      <option value="series-a">Series A</option>
                      <option value="series-b+">Series B+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Business Description */}
              <div className="border-2 border-black p-6">
                <h3 className="text-xl font-bold mb-6 text-red-600">BUSINESS DESCRIPTION</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Brief Description of Your Business *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                      placeholder="Describe your business in 2-3 sentences..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Problem You're Solving *</label>
                    <textarea
                      name="problem"
                      value={formData.problem}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                      placeholder="What problem does your product/service solve?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Your Solution *</label>
                    <textarea
                      name="solution"
                      value={formData.solution}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                      placeholder="How does your product/service solve this problem?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Target Market</label>
                    <textarea
                      name="market"
                      value={formData.market}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                      placeholder="Who is your target market?"
                    />
                  </div>
                </div>
              </div>

              {/* Traction & Goals */}
              <div className="border-2 border-black p-6">
                <h3 className="text-xl font-bold mb-6 text-red-600">TRACTION & GOALS</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Current Traction</label>
                    <textarea
                      name="traction"
                      value={formData.traction}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                      placeholder="What traction have you achieved so far? (users, revenue, partnerships, etc.)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Goals for Incubation Program *</label>
                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                      placeholder="What do you hope to achieve during the incubation program?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Timeline for Launch/Next Milestone</label>
                    <textarea
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                      placeholder="What's your timeline for the next major milestone?"
                    />
                  </div>
                </div>
              </div>

              {/* Program Expectations */}
              <div className="border-2 border-black p-6">
                <h3 className="text-xl font-bold mb-6 text-red-600">PROGRAM EXPECTATIONS</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Preferred Mentor/Expertise Area</label>
                    <textarea
                      name="mentor"
                      value={formData.mentor}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                      placeholder="What type of mentorship or expertise would be most valuable to you?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Resources You Need Most</label>
                    <textarea
                      name="resources"
                      value={formData.resources}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                      placeholder="What resources do you need most? (funding, office space, technical support, etc.)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Additional Information</label>
                    <textarea
                      name="additional"
                      value={formData.additional}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                      placeholder="Any additional information you'd like to share..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <button
                  type="submit"
                  className="bg-red-600 text-white px-12 py-4 text-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
                >
                  SUBMIT APPLICATION
                </button>
              </div>
            </form>
          </div>

          {/* Additional Information */}
          <div className="bg-gray-50 border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-6 text-center">WHAT TO EXPECT</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h4 className="font-bold mb-2">Application Review</h4>
                <p className="text-gray-600">We'll review your application within 2-3 weeks and contact you for next steps.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h4 className="font-bold mb-2">Interview Process</h4>
                <p className="text-gray-600">Selected candidates will be invited for an interview with our team.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h4 className="font-bold mb-2">Program Start</h4>
                <p className="text-gray-600">Accepted startups begin their incubation journey with comprehensive support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
