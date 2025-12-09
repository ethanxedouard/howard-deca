"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users, Award, TrendingUp, Briefcase, Target, GraduationCap } from "lucide-react";


export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("deca-inc");

  // Array of slide images - update these paths with your actual images
  const slides = [
    "/images/slide1.png",
    "/images/slide2.png",
    "/images/slide3.png",
    "/images/slide4.png",
    "/images/slide5.png",
    "/images/slide6.png",
  ];

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  

  return (
    <section className="relative w-full bg-neutral-100 min-h-screen flex items-center justify-center py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Slideshow Container */}
        <div className="relative mx-auto max-w-6xl flex items-center gap-4">
          {/* Left Arrow - Outside */}
          <button
            onClick={goToPrevious}
            className="shrink-0 bg-transparent hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-8 w-8 text-[#1A1A1A] group-hover:text-[#005399]" />
          </button>

          {/* Image Slideshow with Overlay Text */}
          <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl flex-1">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}

            {/* Text Overlay on Image */}
            <div className="absolute bottom-[8%] left-[5%] right-[5%]">
              <h1 className="text-[clamp(1.5rem,4vw,3.5rem)] font-bold text-white mb-[2%] leading-tight drop-shadow-2xl">
                Howard University
                <br />
                Collegiate DECA Chapter
              </h1>
              <p className="text-[clamp(0.875rem,1.8vw,1.5rem)] text-white leading-relaxed max-w-[90%] drop-shadow-xl">
                Preparing <span className="font-semibold">emerging leaders</span> and{" "}
                <span className="font-semibold">entrepreneurs</span> in marketing, finance,{" "}
                <span className="font-semibold">hospitality</span>, management, and entrepreneurship.
              </p>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow - Outside */}
          <button
            onClick={goToNext}
            className="shrink-0 bg-transparent hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none group"
            aria-label="Next slide"
          >
            <ChevronRight className="h-8 w-8 text-[#1A1A1A] group-hover:text-[#005399]" />
          </button>
        </div>

        {/* Fact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-[#005399] hover:bg-[#005399] group cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#005399]/10 group-hover:bg-white/20 rounded-full p-4 mb-4 transition-colors duration-300">
                <Users className="h-8 w-8 text-[#005399] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-white mb-2 transition-colors duration-300">300+</h3>
              <p className="text-sm text-neutral-600 group-hover:text-white/90 transition-colors duration-300">Student Interest Forms</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-[#005399] hover:bg-[#005399] group cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#005399]/10 group-hover:bg-white/20 rounded-full p-4 mb-4 transition-colors duration-300">
                <Award className="h-8 w-8 text-[#005399] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-white mb-2 transition-colors duration-300">Selective</h3>
              <p className="text-sm text-neutral-600 group-hover:text-white/90 transition-colors duration-300">Acceptance</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-[#005399] hover:bg-[#005399] group cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#005399]/10 group-hover:bg-white/20 rounded-full p-4 mb-4 transition-colors duration-300">
                <TrendingUp className="h-8 w-8 text-[#005399] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-white mb-2 transition-colors duration-300">Competitive</h3>
              <p className="text-sm text-neutral-600 group-hover:text-white/90 transition-colors duration-300">Training Program</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-[#005399] hover:bg-[#005399] group cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#005399]/10 group-hover:bg-white/20 rounded-full p-4 mb-4 transition-colors duration-300">
                <Briefcase className="h-8 w-8 text-[#005399] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-white mb-2 transition-colors duration-300">5</h3>
              <p className="text-sm text-neutral-600 group-hover:text-white/90 transition-colors duration-300">DECA Career Clusters Represented</p>
            </div>
          </div>
        </div>

        {/* Sponsorship Banner */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white border border-[#005399] py-4 px-8 rounded-lg shadow-md">
            <p className="text-[#005399] font-semibold text-base sm:text-lg text-center">
              Corporate sponsorship opportunities now open for the 2025–2026 season.
            </p>
          </div>
        </div>

        {/* About DECA Section */}
        <div className="mt-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
              About DECA
            </h2>
            <div className="h-1 w-24 bg-[#005399] mx-auto rounded"></div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-8 border-b border-neutral-200">
            <button
              onClick={() => setActiveTab("deca-inc")}
              className={`px-6 py-3 text-base sm:text-lg font-semibold transition-all duration-300 border-b-2 ${
                activeTab === "deca-inc"
                  ? "border-[#005399] text-[#005399]"
                  : "border-transparent text-neutral-600 hover:text-[#005399]"
              }`}
            >
              What Is DECA Inc.?
            </button>
            <button
              onClick={() => setActiveTab("howard-deca")}
              className={`px-6 py-3 text-base sm:text-lg font-semibold transition-all duration-300 border-b-2 ${
                activeTab === "howard-deca"
                  ? "border-[#005399] text-[#005399]"
                  : "border-transparent text-neutral-600 hover:text-[#005399]"
              }`}
            >
              What Is Howard DECA?
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            {/* DECA Inc. Tab */}
            {activeTab === "deca-inc" && (
              <div className="animate-fade-in">
                {/* Main Description */}
                <div className="bg-neutral-50 rounded-xl p-8 mb-8">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    DECA is an international organization preparing students for careers in{" "}
                    <span className="font-semibold text-[#005399]">business</span>,{" "}
                    <span className="font-semibold text-[#005399]">marketing</span>,{" "}
                    <span className="font-semibold text-[#005399]">finance</span>,{" "}
                    <span className="font-semibold text-[#005399]">hospitality</span>, and{" "}
                    <span className="font-semibold text-[#005399]">entrepreneurship</span>.
                  </p>
                </div>

                {/* Collegiate DECA Provides */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                    Collegiate DECA Provides:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 bg-white border border-neutral-200 rounded-lg p-4 hover:border-[#005399] transition-colors">
                      <Briefcase className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">Case studies</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white border border-neutral-200 rounded-lg p-4 hover:border-[#005399] transition-colors">
                      <Target className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">Prepared business plans</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white border border-neutral-200 rounded-lg p-4 hover:border-[#005399] transition-colors">
                      <Users className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">Leadership conferences</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white border border-neutral-200 rounded-lg p-4 hover:border-[#005399] transition-colors">
                      <TrendingUp className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">Real-world business simulations</span>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                    Benefits of Joining DECA
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-[#005399]/5 rounded-lg hover:bg-[#005399]/10 transition-colors">
                      <Award className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">Scholarships & awards</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-[#005399]/5 rounded-lg hover:bg-[#005399]/10 transition-colors">
                      <GraduationCap className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">Professional development</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-[#005399]/5 rounded-lg hover:bg-[#005399]/10 transition-colors">
                      <Users className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">Networking with industry leaders</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-[#005399]/5 rounded-lg hover:bg-[#005399]/10 transition-colors">
                      <TrendingUp className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">Competitive edge in the job market</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-[#005399]/5 rounded-lg hover:bg-[#005399]/10 transition-colors">
                      <Target className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">
                        Skill development (communication, strategic thinking, financial analysis, marketing)
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-[#005399]/5 rounded-lg hover:bg-[#005399]/10 transition-colors">
                      <Briefcase className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">Leadership opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Howard DECA Tab */}
            {activeTab === "howard-deca" && (
              <div className="animate-fade-in">
                <div className="bg-[#005399]/5 rounded-xl p-8 border-l-4 border-[#005399]">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                    About Howard University Collegiate DECA
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#005399] rounded-full p-2 shrink-0">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-[#1A1A1A] mb-2">
                          Historic Chapter
                        </h4>
                        <p className="text-neutral-700">
                          One of the first HBCU Collegiate DECA chapters, breaking new ground in business education.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#005399] rounded-full p-2 shrink-0">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-[#1A1A1A] mb-2">
                          Founded in August 2025
                        </h4>
                        <p className="text-neutral-700">
                          Founded by student <span className="font-semibold">Kadijah Mansaray</span> in the Howard University School of Business.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#005399] rounded-full p-2 shrink-0">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-[#1A1A1A] mb-2">
                          Open to All Students
                        </h4>
                        <p className="text-neutral-700">
                          Open to students across all majors and classifications at Howard University.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 text-center">
                  <a
                    href="/membership"
                    className="inline-flex items-center justify-center rounded-lg bg-[#005399] px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-[#003E65] hover:scale-105 hover:shadow-lg"
                  >
                    Learn About Membership
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}