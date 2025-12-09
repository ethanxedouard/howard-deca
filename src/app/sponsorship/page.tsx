"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle, DollarSign } from "lucide-react";

type TabKey = "benefits" | "tiers" | "ways-to-give";

export default function SponsorshipPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("benefits");

  const tabBtnBase =
    "px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold transition-all duration-200 border-b-2";

  const benefits = [
    {
      title: "Direct Impact on Student Success",
      description:
        "Your support reduces financial barriers so students can compete at the highest level, travel to state and national conferences, and access essential preparation resources.",
    },
    {
      title: "Access to a Diverse, High-Achieving Talent Pipeline",
      description:
        "Meet and recruit ambitious students in Finance, Marketing, Business Management, Hospitality, and Entrepreneurship, including students with real business ownership experience. Sponsors receive priority access to résumés, interest forms, and networking opportunities with some of Howard’s top emerging leaders.",
    },
    {
      title: "Recognition at All International DECA Events",
      description:
        "Your company will be acknowledged at training, banquets, send-offs, and competition briefings throughout the year.",
    },
    {
      title: "Brand Visibility Across Campus and DECA Platforms",
      description:
        "Your company logo will appear on chapter merchandise, promotional materials, event signage, competition jackets, social media, and sponsor recognition pages.",
    },
    {
      title: "Opportunities to Host Workshops, Case Trainings, and Panels",
      description:
        "Engage directly with DECA members through company-led professional development sessions or case-study workshops tailored to your industry.",
    },
    {
      title: "Strengthen Community and HBCU Partnerships",
      description:
        "Supporting Howard DECA contributes to expanding resources for Black and underrepresented students pursuing careers in competitive business fields.",
    },
  ];

  // Add colors for each tier
  const tiers = [
    {
      name: "Platinum — $10,000+",
      description:
        "Funds 10+ students for competitive travel, lodging, registration fees, and preparation materials. Highest level of sponsor recognition, including premium logo placement and VIP access to all DECA events.",
      color: "#E5E4E2", // Platinum
    },
    {
      name: "Gold — $5,000",
      description:
        "Funds 5 students. Featured recognition at all chapter events, social media highlights, and opportunities to host workshops.",
      color: "#FFD700", // Gold
    },
    {
      name: "Silver — $2,500",
      description:
        "Funds 2–3 students. Logo placement on select merchandise and sponsorship highlights on the website.",
      color: "#C0C0C0", // Silver
    },
    {
      name: "Bronze — $1,000",
      description:
        "Funds 1 student. Recognition on the website and in chapter programming materials.",
      color: "#CD7F32", // Bronze
    },
    {
      name: "Friend of DECA — $500",
      description:
        "Funds half of one student’s competition expenses. Listed on the “Friends of DECA” recognition page.",
      color: "#00BFFF", // Blue accent for smaller tier
    },
  ];

  return (
    <div className="w-full bg-neutral-50 min-h-screen py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
            Sponsorship
          </h1>
          <div className="h-1 w-32 bg-[#005399] mx-auto rounded mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Learn how to support Howard DECA, explore sponsorship tiers, and see ways to give.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-neutral-200">
          <button
            onClick={() => setActiveTab("benefits")}
            className={`${tabBtnBase} ${
              activeTab === "benefits"
                ? "border-[#005399] text-[#005399]"
                : "border-transparent text-neutral-600 hover:text-[#005399]"
            }`}
          >
            Sponsor Benefits
          </button>
          <button
            onClick={() => setActiveTab("tiers")}
            className={`${tabBtnBase} ${
              activeTab === "tiers"
                ? "border-[#005399] text-[#005399]"
                : "border-transparent text-neutral-600 hover:text-[#005399]"
            }`}
          >
            Sponsorship Tiers
          </button>
          <button
            onClick={() => setActiveTab("ways-to-give")}
            className={`${tabBtnBase} ${
              activeTab === "ways-to-give"
                ? "border-[#005399] text-[#005399]"
                : "border-transparent text-neutral-600 hover:text-[#005399]"
            }`}
          >
            Ways to Give
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {activeTab === "benefits" && (
            <div className="space-y-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-white p-4 rounded-xl shadow-sm flex items-start gap-4 border-l-4 border-[#005399]"
                >
                  <CheckCircle className="h-6 w-6 text-[#005399] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#1A1A1A]">{b.title}</div>
                    <div className="text-neutral-600 text-sm">{b.description}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "tiers" && (
            <div className="space-y-4">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="bg-white p-4 rounded-xl shadow-sm flex items-start gap-4"
                  style={{ borderLeft: `6px solid ${tier.color}` }}
                >
                  <DollarSign
                    className="h-6 w-6 mt-1 flex-shrink-0"
                    style={{ color: tier.color }}
                  />
                  <div>
                    <div className="font-semibold text-[#1A1A1A]">{tier.name}</div>
                    <div className="text-neutral-600 text-sm">{tier.description}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "ways-to-give" && (
            <div className="space-y-6">
              <p className="text-neutral-700 text-base">
                Support Howard DECA through GoFundMe or other donation methods. Scan the QR code below to contribute directly.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-sm w-64 mx-auto">
                <Image
                  src="/images/go-fund-me.jpeg"
                  alt="Howard DECA GoFundMe QR Code"
                  width={256}
                  height={256}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
