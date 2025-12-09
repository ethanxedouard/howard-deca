"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function MediaPage() {
  const tabs = [
    {
      title: "Trainings",
      images: [],
    },
    {
      title: "Events",
      images: [
        "/images/slide2.png",
        "/images/slide3.png",
        "/images/slide4.png",
        "/images/slide5.png",
        "/images/slide6.png",
        "/images/eventPic1.jpeg",
        "/images/eventPic2.jpeg",
        "/images/eventPic3.jpeg",
        "/images/eventPic4.jpeg",
        "/images/eventPic5.jpeg",
      ],
    },
    {
      title: "Competitions",
      images: [],
    },
    {
      title: "Professional Headshots",
      images: [],
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].title);
  const currentTab = tabs.find((t) => t.title === activeTab);

  const hasImages = currentTab?.images && currentTab.images.length > 0;

  return (
    <div className="w-full bg-neutral-50 min-h-screen py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#0F172A] mb-4">
            Media & Gallery
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Explore photos from our trainings, events, competitions, and professional headshots.
          </p>
        </header>

        {/* MODERN TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.title;

            return (
              <button
                key={tab.title}
                onClick={() => setActiveTab(tab.title)}
                className={`
                  px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300
                  shadow-sm border
                  ${
                    isActive
                      ? "bg-[#005399] text-white border-transparent shadow-md scale-105"
                      : "bg-white text-[#0F172A] border-neutral-300 hover:bg-neutral-100 hover:shadow"
                  }
                `}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* EMPTY STATE */}
        {!hasImages && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <p className="text-xl text-neutral-500 font-medium">
              No images available for <span className="font-semibold">{activeTab}</span> yet.
            </p>
            <p className="text-neutral-400 mt-2">Check back soon for updates!</p>
          </div>
        )}

        {/* IMAGE GRID */}
        {hasImages && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
            {currentTab!.images.map((src, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={src}
                  alt={`${activeTab} image ${i + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
