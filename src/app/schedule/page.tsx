import { Container } from "@/components/Container";
import GDGBootcamp from "@/components/GDGBootcamp";
import GenAiWorkshop from "@/components/GenAiWorkshop";
import PanelDiscussionSection from "@/components/PanelDiscussionSection";
import PreConferenceWorkshop from "@/components/PreConferenceWorkshop";
import { Calendar, Clock, MapPin, Download, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule - IEM ICDC 2026",
  description:
    "Full schedule for IEM ICDC 2026 — including the Pre-Conference Workshop on Voice AI Agents & End-to-End Automation with n8n by GDGoC-IEM and InnovAI CoE, and the main conference schedule.",
  keywords: [
    "Conference Schedule",
    "Pre-Conference Workshop",
    "Voice AI Agents",
    "n8n Automation",
    "GDGoC-IEM",
    "InnovAI CoE",
    "Panel Discussion",
    "Generative AI",
    "IEM ICDC 2026 Schedule",
  ],
  openGraph: {
    title: "Schedule - IEM ICDC 2026",
    description:
      "Pre-Conference Workshop on Voice AI & n8n Automation + Full Conference Schedule for IEM ICDC 2026.",
  },
};

export default function Schedule() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Schedule</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Pre-Conference Workshop &amp; Conference Program — March 16–18, 2026
          </p>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-start gap-16 py-16">

        {/* ─── Section 1: Web3 Bootcamp ─────────────────────────────── */}

        <GDGBootcamp/>

        {/* Divider */}
        <div className="w-full max-w-5xl flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
        </div>

        {/* ─── Section 2: Pre-Conference Workshop ─────────────────────────────── */}

        <PreConferenceWorkshop/>

        {/* Divider */}
        <div className="w-full max-w-5xl flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
        </div>

        {/* Section 2: GenAI Workshop */}

        <GenAiWorkshop/>

        {/* Divider */}
        <div className="w-full max-w-5xl flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
        </div>

        {/* ─── Section 3: Panel Discussion ─────────────────────────────── */}
        <PanelDiscussionSection/>

        {/* Divider */}
        <div className="w-full max-w-5xl flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
        </div>

        {/* ─── Section 3: Conference Schedule ─────────────────────────────────── */}
        <div id="conference-schedule" className="w-full max-w-5xl scroll-mt-24">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-10">
            <span className="inline-block bg-red-100 text-red-700 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              Main Conference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Conference Schedule
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              4th International Conference on Computational Intelligence, Data Science and Cloud Computing (IEM ICDC 2026) — March 16–18, 2026
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Top banner */}
            <div className="bg-gradient-to-r from-red-700 to-red-900 px-8 py-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-xl p-2">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-bold text-lg">IEM ICDC 2026 — Program at a Glance</span>
              </div>
              <span className="bg-white/20 text-white font-semibold px-4 py-1.5 rounded-full text-sm border border-white/30">
                March 16–18, 2026
              </span>
            </div>

            <div className="p-8 md:p-10 space-y-8">
              {/* At a Glance */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-5 text-center">
                  <Calendar className="w-7 h-7 text-red-600 mx-auto mb-3" />
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Dates</div>
                  <div className="font-bold text-gray-800">March 16–18, 2026</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-5 text-center">
                  <Clock className="w-7 h-7 text-red-600 mx-auto mb-3" />
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Duration</div>
                  <div className="font-bold text-gray-800">3 Days</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-5 text-center">
                  <MapPin className="w-7 h-7 text-red-600 mx-auto mb-3" />
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</div>
                  <div className="font-bold text-gray-800">Software Technology Parks of India</div>
                </div>
              </div>

              {/* Download Schedule */}
              <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="text-white">
                  <h4 className="font-bold text-lg mb-1">Full Conference Schedule</h4>
                  <p className="text-red-200 text-sm">
                    Download the detailed day-by-day program including all sessions, keynotes, and venue details.
                  </p>
                </div>
                <a
                  href="/documents/ICDC 2026 Schedule new.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-2 bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-red-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download Schedule PDF
                </a>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}