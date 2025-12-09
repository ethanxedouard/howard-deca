"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  TrendingUp,
  Award,
  Briefcase,
  Target,
  CheckCircle,
  FileText,
  MessageSquare,
  Presentation,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type TabKey = "current-cohort" | "career-distribution" | "selective-process";

interface InfoCardProps {
  Icon: React.ComponentType<any>;
  title: string;
  text: string;
}

const careerData = [
  { name: "Finance", percent: 35 },
  { name: "Marketing", percent: 27.5 },
  { name: "Business Mgmt", percent: 17.5 },
  { name: "Hospitality", percent: 15 },
  { name: "Entrepreneurship", percent: 5 },
];

const stackedData = [
  { name: "Cohort", Applicants: 300, Selected: 35, Others: 265 },
];

const InfoCard = ({ Icon, title, text }: InfoCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-2xl p-6 border-l-4 border-[#005399] shadow-sm"
  >
    <div className="flex items-start gap-4">
      <Icon className="h-8 w-8 text-[#005399] shrink-0" />
      <div>
        <h3 className="font-semibold text-lg text-[#0F172A] mb-1">{title}</h3>
        <p className="text-sm text-neutral-600 leading-relaxed">{text}</p>
      </div>
    </div>
  </motion.div>
);

export default function MembershipPage(){
  const [activeTab, setActiveTab] = useState<TabKey>("current-cohort");
  const [applicants, setApplicants] = useState(0);
  const [selected, setSelected] = useState(0);
  const [acceptRate, setAcceptRate] = useState(0);

  useEffect(() => {
    const animate = (target: number, setter: (v: number) => void, duration = 800) => {
      const start = performance.now();
      const from = 0;
      const tick = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(1, elapsed / duration);
        const val = Math.round(from + (target - from) * t);
        setter(val);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    animate(300, setApplicants, 900);
    animate(35, setSelected, 900);
    animate(11, setAcceptRate, 900);
  }, []);

  const barChartData = useMemo(
    () =>
      careerData.map((d) => ({
        name: d.name,
        percent: d.percent,
      })),
    []
  );

  const tabBtnBase =
    "px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold transition-all duration-200 border-b-2";

  return (
    <div className="w-full bg-neutral-50 min-h-screen py-14">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-3">
            Membership
          </h1>
          <div className="h-1 w-36 bg-[#005399] mx-auto rounded mb-4" />
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Join a thoughtful, competitive community of students — career-focused,
            collaborative, and ready to lead in business competitions and beyond.
          </p>
        </motion.header>

        {/* Tabs */}
        <nav className="flex flex-wrap justify-center mb-8 border-b border-neutral-200">
          <button
            onClick={() => setActiveTab("current-cohort")}
            aria-selected={activeTab === "current-cohort"}
            className={`${tabBtnBase} ${
              activeTab === "current-cohort"
                ? "border-[#005399] text-[#005399]"
                : "border-transparent text-neutral-600 hover:text-[#005399]"
            }`}
          >
            Current Cohort
          </button>
          <button
            onClick={() => setActiveTab("career-distribution")}
            aria-selected={activeTab === "career-distribution"}
            className={`${tabBtnBase} ${
              activeTab === "career-distribution"
                ? "border-[#005399] text-[#005399]"
                : "border-transparent text-neutral-600 hover:text-[#005399]"
            }`}
          >
            Career Distribution
          </button>
          <button
            onClick={() => setActiveTab("selective-process")}
            aria-selected={activeTab === "selective-process"}
            className={`${tabBtnBase} ${
              activeTab === "selective-process"
                ? "border-[#005399] text-[#005399]"
                : "border-transparent text-neutral-600 hover:text-[#005399]"
            }`}
          >
            Our Process
          </button>
        </nav>

        {/* Tab content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait" initial={false}>
            {/* Current Cohort Tab */}
            {activeTab === "current-cohort" && (
              <motion.section
                key="cohort"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28 }}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
                      Membership Highlights
                    </h2>
                    <p className="text-neutral-600 mb-4">
                      A focused cohort of students who blend academic rigor with competitive
                      experience. Members represent several majors and DECA career clusters,
                      bringing real-world skills to campus competitions and industry pursuits.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <InfoCard
                        Icon={TrendingUp}
                        title="High-Performing Students"
                        text="Ambitious, competitive students committed to academic and professional growth."
                      />
                      <InfoCard
                        Icon={Briefcase}
                        title="5 DECA Career Clusters"
                        text="Representation across Finance, Marketing, Business Mgmt, Hospitality, & Entrepreneurship."
                      />
                      <InfoCard
                        Icon={Users}
                        title="Multiple Majors"
                        text="Members from diverse academic backgrounds and career interests."
                      />
                      <InfoCard
                        Icon={Target}
                        title="Student Entrepreneurs"
                        text="Includes students who operate active small businesses or startups."
                      />
                    </div>
                  </div>

                  <div className="bg-linear-to-br from-[#005399] to-[#003E65] rounded-2xl p-6 text-white shadow-md flex flex-col gap-4 justify-between">
                    <div>
                      <div className="text-3xl font-bold mb-1">{applicants}+</div>
                      <div className="text-sm text-white/90">Applicants</div>
                    </div>

                    <div>
                      <div className="text-3xl font-bold mb-1">{selected}</div>
                      <div className="text-sm text-white/90">Selected</div>
                    </div>

                    <div>
                      <div className="text-3xl font-bold mb-1">{acceptRate}%</div>
                      <div className="text-sm text-white/90">Acceptance Rate</div>
                    </div>

                    <div className="mt-4 text-sm text-white/90 border-t border-white/20 pt-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 shrink-0" />
                        <span>Strong pipeline of Freshman & Sophomore members</span>
                      </div>
                      <div className="flex items-start gap-2 mt-2">
                        <CheckCircle className="h-5 w-5 shrink-0" />
                        <span>Representation across business & tech-related majors</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Snapshot Breakdown */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                    Snapshot Breakdown
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    <div className="h-24">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          layout="vertical"
                          data={stackedData}
                          margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                        >
                          <XAxis type="number" hide />
                          <YAxis type="category" dataKey="name" hide />
                          <Tooltip />
                          <Legend />
                          <Bar
                            dataKey="Applicants"
                            stackId="a"
                            fill="#005399"
                            radius={[6, 6, 0, 0]}
                          />
                          <Bar
                            dataKey="Selected"
                            stackId="a"
                            fill="#0077A8"
                            radius={[6, 6, 0, 0]}
                          />
                          <Bar
                            dataKey="Others"
                            stackId="a"
                            fill="#9FBFD9"
                            radius={[6, 6, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div>
                      <p className="text-neutral-700">
                        The cohort is selected from a competitive applicant pool. Members
                        maintain strong academic performance while engaging in leadership and
                        professional development opportunities.
                      </p>

                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className="h-5 w-5 text-[#005399]" />
                          <span>DECA competition experience and case prep</span>
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className="h-5 w-5 text-[#005399]" />
                          <span>Industry networking and corporate partnerships</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* Career Distribution */}
            {activeTab === "career-distribution" && (
              <motion.section
                key="distribution"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-[#0F172A]">Career Distribution</h2>
                    <p className="text-sm text-neutral-600">By declared career interest</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={barChartData}
                          layout="vertical"
                          margin={{ left: 30, right: 10 }}
                        >
                          <XAxis type="number" hide domain={[0, 40]} />
                          <YAxis dataKey="name" type="category" width={140} />
                          <Tooltip formatter={(v: any) => `${v}%`} />
                          <Bar dataKey="percent" fill="#005399" radius={[6, 6, 6, 6]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="flex flex-col justify-center gap-4">
                      {careerData.map((c) => (
                        <div key={c.name} className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold text-[#0F172A]">{c.name}</div>
                            <div className="text-xs text-neutral-600">{c.percent}% of members</div>
                          </div>
                          <div className="w-48 h-3 bg-neutral-200 rounded overflow-hidden">
                            <div
                              className="h-full bg-[#005399] rounded"
                              style={{ width: `${c.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* Selective Process */}
            {activeTab === "selective-process" && (
              <motion.section
                key="process"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28 }}
                className="space-y-6"
              >
                <div className="bg-[#005399]/5 rounded-2xl p-6 border-l-4 border-[#005399]">
                  <p className="text-neutral-700 text-base">
                    Howard DECA identifies students with exceptional{" "}
                    <span className="font-semibold text-[#005399]">leadership potential</span>,{" "}
                    <span className="font-semibold text-[#005399]">professionalism</span>, and{" "}
                    <span className="font-semibold text-[#005399]">competitive drive</span> through
                    a multi-stage evaluation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="bg-linear-to-r from-[#005399] to-[#0077A8] text-white px-5 py-4 flex items-center gap-3">
                      <div className="bg-white text-[#005399] rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                      <h4 className="text-lg font-bold">Four Short Essays</h4>
                    </div>
                    <div className="p-4 flex items-start gap-3">
                      <FileText className="h-6 w-6 text-[#005399]" />
                      <p className="text-neutral-700 text-sm">200–400 words each, reflecting on leadership and business scenarios.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="bg-linear-to-r from-[#005399] to-[#0077A8] text-white px-5 py-4 flex items-center gap-3">
                      <div className="bg-white text-[#005399] rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                      <h4 className="text-lg font-bold">Behavioral Interview</h4>
                    </div>
                    <div className="p-4 flex items-start gap-3">
                      <MessageSquare className="h-6 w-6 text-[#005399]" />
                      <p className="text-neutral-700 text-sm">Evaluates communication, professionalism, and cultural fit.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="bg-linear-to-r from-[#005399] to-[#0077A8] text-white px-5 py-4 flex items-center gap-3">
                      <div className="bg-white text-[#005399] rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                      <h4 className="text-lg font-bold">Two Case Interviews</h4>
                    </div>
                    <div className="p-4 flex items-start gap-3">
                      <Presentation className="h-6 w-6 text-[#005399]" />
                      <p className="text-neutral-700 text-sm">DECA-style cases that assess problem solving and presentation under pressure.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-[#005399] to-[#003E65] rounded-2xl p-6 text-white shadow-md flex items-start gap-4">
                  <Award className="h-10 w-10" />
                  <div>
                    <h3 className="text-xl font-bold">Result</h3>
                    <p className="text-sm text-white/90">
                      A group of high-achieving, competition-ready students who are prepared to excel in business environments.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="/how-to-apply"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#005399] px-6 py-3 text-sm font-medium text-white shadow hover:bg-[#003E65] transition"
                  >
                    Learn How to Apply
                  </a>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
