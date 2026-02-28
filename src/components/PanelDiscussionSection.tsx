"use client";

import React, { useState, useEffect } from "react";
import { BookOpen, Download, X } from "lucide-react";
import Image from "next/image";

export default function PanelDiscussionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock background scrolling when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <div id="panel-discussion" className="w-full max-w-5xl scroll-mt-24">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10">
          <span className="inline-block bg-red-100 text-red-700 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
            Panel Discussion
          </span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            From Innovation to Responsibility: Can Generative AI Scale Ethically?
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Workshop Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Top banner */}
          <div className="bg-gradient-to-r from-red-700 to-red-900 px-8 py-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-xl p-2">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                Panel Discussion Details
              </span>
            </div>
            <span className="bg-yellow-400 text-yellow-900 font-bold px-4 py-1.5 rounded-full text-sm">
              March 17, 2026
            </span>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            {/* Title, Organizers & Description */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug">
                  Panel Discussion on:{" "}
                  <span className="text-red-600">
                    From Innovation to Responsibility: Can Generative AI Scale Ethically?
                  </span>
                </h3>
                {/* <p className="text-gray-500 text-base">
                  Organized by{" "}
                  <span className="font-semibold text-gray-700">GenAI-IEM</span>
                </p> */}
              </div>

              {/* Added Description Segment */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  How can organizations balance rapid GenAI innovation with{" "}
                  <span className="text-red-600 font-semibold">governance</span>,{" "}
                  <span className="text-red-600 font-semibold">safety</span>, and{" "}
                  <span className="text-red-600 font-semibold">regulatory compliance</span>{" "}
                  without slowing competitive advantage?
                </p>
                
                {/* Updated Tags Segment */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-gray-200 shadow-sm">
                    <span className="text-xl">⚖️</span>
                    <span className="text-sm font-medium text-gray-700">AI Ethics</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-gray-200 shadow-sm">
                    <span className="text-xl">🛡️</span>
                    <span className="text-sm font-medium text-gray-700">Governance & Safety</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-gray-200 shadow-sm">
                    <span className="text-xl">📈</span>
                    <span className="text-sm font-medium text-gray-700">Scaling GenAI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Clickable Flyer Image */}
            <div 
              className="relative group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-md max-w-sm mx-auto"
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                width={2318}
                height={3000}
                src="/images/panel_discussion.png" 
                alt="Panel Discussion Flyer"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg bg-black/60 px-6 py-3 rounded-xl backdrop-blur-sm">
                  Click to Enlarge
                </span>
              </div>
            </div>

            {/* Download Brochure */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="text-white">
                <h4 className="font-bold text-lg mb-1">Panel Discussion Brochure</h4>
                <p className="text-red-200 text-sm">
                  Download the brochure for full details.
                </p>
              </div>
              <a
                href="/images/panel_discussion.png" 
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex-shrink-0 flex items-center gap-2 bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-red-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Image
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 overscroll-contain"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Enlarged Image */}
          <Image
            width={2318}
            height={3000}
            src="/images/panel_discussion.png" 
            alt="Panel Discussion Flyer Fullscreen"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}