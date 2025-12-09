"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users, Briefcase } from "lucide-react";

type TabKey = "executive-board" | "role-descriptions";

const executiveBoard = [
  { role: "President", name: "Kadijah Mansaray" },
  { role: "Executive Vice President", name: "Kendall Claytor" },
  { role: "Vice President of Leadership", name: "Daija Simmons" },
  { role: "Vice President of Career Development", name: "Caleb Tamon" },
  { role: "Vice President of Marketing", name: "Amani Kerr" },
  { role: "Vice President of Finance (Treasurer)", name: "Nmesoma Emmanuel" },
  { role: "Vice President of Hospitality", name: "Justin Dunbar" },
  { role: "Secretary", name: "Jordan Sales" },
];

const roleDescriptions = [
  { role: "President", description: "Leads the chapter and sets strategic direction" },
  { role: "Executive VP", description: "Supports the president and oversees operations" },
  { role: "VP of Leadership", description: "Organizes leadership development" },
  { role: "VP of Career Development", description: "Prepares competitors" },
  { role: "VP of Marketing", description: "Oversees branding, PR, and social media" },
  { role: "VP of Finance", description: "Handles sponsorships, budgeting, fundraising" },
  { role: "VP of Hospitality", description: "Coordinates member engagement and events" },
  { role: "Secretary", description: "Manages records, minutes, and communication" },
];

export default function LeadershipPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("executive-board");

  const tabBtnBase =
    "px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold transition-all duration-200 border-b-2";

  return (
    <div className="w-full bg-neutral-50 min-h-screen py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
            Leadership
          </h1>
          <div className="h-1 w-32 bg-[#005399] mx-auto rounded mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Meet the Executive Board of Howard DECA (25–26) and learn about each leadership role.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12 border-b border-neutral-200">
          <button
            onClick={() => setActiveTab("executive-board")}
            className={`${tabBtnBase} ${
              activeTab === "executive-board"
                ? "border-[#005399] text-[#005399]"
                : "border-transparent text-neutral-600 hover:text-[#005399]"
            }`}
          >
            Executive Board
          </button>
          <button
            onClick={() => setActiveTab("role-descriptions")}
            className={`${tabBtnBase} ${
              activeTab === "role-descriptions"
                ? "border-[#005399] text-[#005399]"
                : "border-transparent text-neutral-600 hover:text-[#005399]"
            }`}
          >
            Role Descriptions
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {activeTab === "executive-board" && (
            <div className="space-y-6">
              {/* Group Picture */}
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/slide1.png" 
                  alt="Howard DECA Executive Board"
                  width={1200}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Executive Board List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {executiveBoard.map((member) => (
                  <div
                    key={member.role}
                    className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 border-l-4 border-[#005399]"
                  >
                    <Briefcase className="h-6 w-6 text-[#005399]" />
                    <div>
                      <div className="font-semibold text-[#1A1A1A]">{member.role}</div>
                      <div className="text-neutral-600 text-sm">{member.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "role-descriptions" && (
            <div className="space-y-4">
              {roleDescriptions.map((role) => (
                <div
                  key={role.role}
                  className="bg-white p-4 rounded-xl shadow-sm flex items-start gap-4 border-l-4 border-[#005399]"
                >
                  <Users className="h-6 w-6 text-[#005399] mt-1" />
                  <div>
                    <div className="font-semibold text-[#1A1A1A]">{role.role}</div>
                    <div className="text-neutral-600 text-sm">{role.description}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
