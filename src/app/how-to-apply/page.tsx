"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Briefcase, Target } from "lucide-react";

export default function HowToApplyPage() {
  const steps = [
    "Complete the interest/application form.",
    "Interviews conducted by 2–3 experienced DECA judges.",
    "Leadership position applications released in Spring for current cohort members.",
  ];

  const eligibility = [
    "Open to all majors",
    "Must be a Howard undergraduate",
    "No prior DECA experience required",
  ];

  const qualities = [
    "Leadership potential",
    "Professionalism",
    "Willingness to train and compete",
    "Commitment to DECA’s values: Competence, Integrity, Teamwork, Innovation",
  ];

  return (
    <div className="w-full bg-neutral-50 min-h-screen py-14">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-3">
            How To Apply
          </h1>
          <div className="h-1 w-36 bg-[#005399] mx-auto rounded mb-4" />
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Learn how to become part of a competitive, career-focused community of student leaders.
          </p>
        </motion.header>

        {/* Applications Open */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-sm mb-6"
        >
          <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
            Applications Open
          </h2>
          <p className="text-neutral-700 text-lg">August 2026</p>
        </motion.section>

        {/* Steps to Join */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-sm mb-6"
        >
          <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Steps to Join</h2>
          <ul className="space-y-2">
            {steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 text-neutral-700">
                <CheckCircle className="h-5 w-5 text-[#005399] flex-shrink-0 mt-1" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Eligibility */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-sm mb-6"
        >
          <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Eligibility</h2>
          <ul className="space-y-2">
            {eligibility.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-neutral-700">
                <Briefcase className="h-5 w-5 text-[#005399] flex-shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* What We Look For */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-sm mb-6"
        >
          <h2 className="text-2xl font-bold text-[#0F172A] mb-3">What We Look For</h2>
          <ul className="space-y-2">
            {qualities.map((qual, idx) => (
              <li key={idx} className="flex items-start gap-2 text-neutral-700">
                <Target className="h-5 w-5 text-[#005399] flex-shrink-0 mt-1" />
                <span>{qual}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        
      </div>
    </div>
  );
}
