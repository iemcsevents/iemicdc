import React from "react";
import { Container } from "./Container";
import Link from "next/link";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/iem.jpeg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full backdrop-blur-md">
            <span className="text-purple-200 font-semibold tracking-wider uppercase text-sm">March 17-19, 2027 • Kolkata</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">2027</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed font-light">
            Details for this section are currently being finalized.
          </p>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-center py-20 px-4 fade-in">
        <div className="relative group w-full max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-purple-800 to-black shadow-2xl p-12 md:p-20 text-center border border-purple-500/20">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400 via-transparent to-transparent"></div>

          <div className="relative z-10 space-y-8 flex flex-col items-center">
            <div className="inline-flex items-center justify-center p-4 bg-purple-500/20 rounded-full backdrop-blur-md border border-purple-400/30 mb-2">
              <svg className="w-12 h-12 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Coming <span className="text-purple-400">Soon</span>
            </h2>

            <p className="text-lg md:text-xl text-purple-200 max-w-2xl leading-relaxed font-light">
              We are working hard to finalize the details for the IEM-ICDC 2027 edition. Please check back later!
            </p>

            <div className="pt-8">
              <Link href="/" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
