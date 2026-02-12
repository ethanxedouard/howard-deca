"use client";

import Image from "next/image";
import { useState } from "react";
import { Award, GraduationCap, Users, TrendingUp } from "lucide-react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("deca-inc");

  const handleLearnMore = () => {
    setActiveTab("howard-deca");

    setTimeout(() => {
      document.getElementById("about-deca")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <section className="relative w-full bg-neutral-100 py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HERO SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mb-20">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-[#005399]">
              Howard University
              <br />
              Collegiate DECA Chapter
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-700 max-w-xl mx-auto lg:mx-0">
              Preparing emerging leaders and entrepreneurs in marketing,
              finance, hospitality, management, and entrepreneurship.
            </p>

            <div className="mt-8">
              <a
                href="/membership"
                className="inline-block rounded-lg bg-[#005399] px-8 py-3 text-white font-semibold transition-all duration-300 hover:bg-[#003E65] hover:scale-105 hover:shadow-lg"
              >
                Join Our Chapter
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — Hidden on small screens + padding added */}
          <div className="hidden lg:flex justify-end pr-8 xl:pr-12">
            <Image
              src="/images/deca-logo.png"
              alt="DECA Logo"
              width={500}
              height={500}
              className="w-[420px] h-auto object-contain"
              priority
            />
          </div>

        </div>

        {/* ================= Sponsorship Banner ================= */}
        <div className="flex justify-center">
          <div className="bg-white border border-[#005399] py-4 px-8 rounded-lg shadow-md">
            <p className="text-[#005399] font-semibold text-base sm:text-lg text-center">
              Corporate sponsorship opportunities now open for the 2025–2026 season.
            </p>
          </div>
        </div>

        {/* ================= About DECA Section ================= */}
        <div id="about-deca" className="mt-20">

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
              About DECA
            </h2>
            <div className="h-1 w-24 bg-[#005399] mx-auto rounded"></div>
          </div>

          {/* Tabs */}
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

            {activeTab === "deca-inc" && (
              <div>
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

                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                    Benefits of Joining DECA
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-[#005399]/5 rounded-lg">
                      <Award className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">Scholarships & awards</span>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-[#005399]/5 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">Professional development</span>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-[#005399]/5 rounded-lg">
                      <Users className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">Networking opportunities</span>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-[#005399]/5 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-[#005399] shrink-0 mt-1" />
                      <span className="text-neutral-700">
                        Competitive edge in the job market
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "howard-deca" && (
              <div className="bg-[#005399]/5 rounded-xl p-8 border-l-4 border-[#005399]">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                  About Howard University Collegiate DECA
                </h3>

                <p className="text-neutral-700 leading-relaxed">
                  One of the first HBCU Collegiate DECA chapters, founded in August 2025.
                  Open to students across all majors and classifications at Howard University.
                </p>

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

        {/* ================= Learn More Button — moved to bottom ================= */}
        <div className="mt-12 text-center">
          <button
            onClick={handleLearnMore}
            className="inline-block rounded-lg border-2 border-[#005399] px-8 py-3 font-semibold text-[#005399] transition-all duration-300 hover:bg-[#005399] hover:text-white hover:shadow-lg hover:scale-105"
          >
            Learn About Howard DECA
          </button>
        </div>

      </div>
    </section>
  );
}
