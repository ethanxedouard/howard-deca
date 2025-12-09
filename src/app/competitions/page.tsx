"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Target, Award, CheckCircle } from "lucide-react";

export default function CompetitionsPage() {
  const clusters = [
    "Business Management & Administration",
    "Entrepreneurship",
    "Finance",
    "Hospitality & Tourism",
    "Marketing",
  ];

  const eventFormats = [
    {
      type: "Individual Events",
      steps: [
        "Written exam → case study → judged presentation",
      ],
    },
    {
      type: "Team Events",
      steps: [
        "Individual exams → collaborative case → joint presentation",
      ],
    },
    {
      type: "Prepared Presentation Events",
      steps: [
        "Business plan created beforehand → formal pitch",
      ],
    },
  ];

  return (
    <div className="w-full bg-neutral-50 min-h-screen py-14">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-3">
            Competitions
          </h1>
          <div className="h-1 w-36 bg-[#005399] mx-auto rounded mb-4" />
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Howard DECA competes in all five Collegiate DECA clusters, showcasing
            skill, strategy, and professionalism across multiple event formats.
          </p>
        </motion.header>

        {/* Competition Overview */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-sm space-y-6"
        >
          <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Competition Overview</h2>

          {/* Clusters */}
          <div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Collegiate DECA Clusters</h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-1">
              {clusters.map((cluster) => (
                <li key={cluster}>{cluster}</li>
              ))}
            </ul>
          </div>

          {/* Event Formats */}
          <div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Event Formats</h3>
            <div className="space-y-4">
              {eventFormats.map((event) => (
                <div key={event.type} className="bg-[#F3F4F6] rounded-lg p-4">
                  <h4 className="font-semibold text-[#005399] mb-1">{event.type}</h4>
                  <ul className="list-disc list-inside text-neutral-700 space-y-1">
                    {event.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Scoring */}
          <div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Scoring</h3>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-6 w-6 text-[#005399] flex-shrink-0 mt-1" />
              <p className="text-neutral-700">
                Combination of exam + presentation score. Top 3 participants are required
                to win glass awards.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-6">
            <a
              href="/how-to-apply"
              className="inline-flex items-center gap-2 rounded-lg bg-[#005399] px-6 py-3 text-sm font-medium text-white shadow hover:bg-[#003E65] transition"
            >
              Learn How to Join Competitions
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
