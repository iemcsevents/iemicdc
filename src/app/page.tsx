"use client";
import { Container } from "@/components/Container";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Cloud, ShieldCheck, Network, Calendar, MapPin } from "lucide-react";

export default function Home() {
  useScrollAnimation();

  const puzzleImagesData = [
    { id: 'img1', src: '/gallery/ICDC group1.png' },
    { id: 'img2', src: '/gallery/ICDC25.png' },
    { id: 'img3', src: '/gallery/dp2.jpg' },
    { id: 'img4', src: '/gallery/dp3.jpg' },
    { id: 'img5', src: '/gallery/dp6.jpg' },
    { id: 'img7', src: '/gallery/dp8.jpg' },
    { id: 'img8', src: '/gallery/iem.jpeg' },
  ];
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Container className="flex flex-col items-center justify-start gap-16 pb-16 min-h-screen fade-in max-w-full overflow-hidden">
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .gallery-group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* Modern Hero Section */}
      <div className="w-full max-w-7xl mt-24 mb-6 px-4 flex flex-col gap-8">
        {/* Main Title Box (Full Width Rectangle) */}
        <div className="w-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-900 via-purple-800 to-black rounded-[2rem] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl border border-purple-500/20 group">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-screen pointer-events-none z-0"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* Decorative Blurs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/30 blur-[80px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150 z-0"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150 z-0"></div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tighter leading-tight mb-4 drop-shadow-lg">
              IEM ICDC <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200 drop-shadow-md">2027</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-purple-100 max-w-3xl leading-relaxed font-light mt-4">
              <span className="font-semibold text-white">5th International Conference</span> on Computational Intelligence, Data Science and Cloud Computing
            </p>

            {/* Professional Date & Location Highlight */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-2">
              <div className="flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover:bg-white/20 transition-colors group cursor-default">
                <div className="p-2 bg-purple-500/30 rounded-xl group-hover:bg-purple-500/50 transition-colors">
                  <Calendar className="w-6 h-6 text-purple-200" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-purple-200/80 uppercase tracking-widest font-semibold mb-0.5">Conference Date</p>
                  <p className="text-base md:text-lg text-white font-bold tracking-wide">March 17-19, 2027</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover:bg-white/20 transition-colors group cursor-default">
                <div className="p-2 bg-purple-500/30 rounded-xl group-hover:bg-purple-500/50 transition-colors">
                  <MapPin className="w-6 h-6 text-purple-200" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-purple-200/80 uppercase tracking-widest font-semibold mb-0.5">Location</p>
                  <p className="text-base md:text-lg text-white font-bold tracking-wide">Kolkata, India</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/registrations" className="px-8 py-4 bg-white text-purple-900 font-bold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                Register Interest
              </Link>
              <Link href="/about" className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-md border border-white/20 shadow-xl">
                Explore Event
              </Link>
            </div>
          </div>
        </div>

        {/* Professional Marquee Gallery */}
        <div 
          className="w-full overflow-hidden relative py-2 gallery-group cursor-grab active:cursor-grabbing"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex gap-6 w-max animate-marquee">
            {[...puzzleImagesData, ...puzzleImagesData].map((img, idx) => (
              <div 
                key={`${img.id}-${idx}`} 
                className="relative w-[280px] md:w-[350px] lg:w-[420px] h-[200px] md:h-[260px] rounded-[1.5rem] overflow-hidden shadow-xl border border-gray-200/50 cursor-zoom-in shrink-0 bg-white"
                onClick={() => setSelectedImage(img.id)}
              >
                <Image 
                  src={img.src} 
                  alt="Gallery Entry" 
                  fill 
                  className="object-cover hover:scale-110 transition-transform duration-700" 
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 420px"
                />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-300 z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
          >
            {(() => {
              const imgData = puzzleImagesData.find(img => img.id === selectedImage);
              if (!imgData) return null;
              return (
                <motion.div
                  layoutId={selectedImage}
                  className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image src={imgData.src} alt="Full Screen" fill className="object-contain" priority />

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-3 hover:bg-black/80 hover:scale-110 transition-all z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* About The Conference Section - Premium Bento Layout */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16 flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-2 w-full max-w-3xl mx-auto">
          <div className="h-px bg-purple-300 flex-1"></div>
          <span className="text-purple-600 font-bold uppercase tracking-widest text-sm px-4 text-center">Welcome to IEM ICDC 2027</span>
          <div className="h-px bg-purple-300 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          
          {/* Main Welcome Card */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-10 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden group flex flex-col justify-center hover:shadow-2xl transition-shadow duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-[80px] -mr-20 -mt-20 transition-transform duration-1000 group-hover:scale-150"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] -ml-20 -mb-20 transition-transform duration-1000 group-hover:scale-150"></div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight relative z-10">
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Industry 4.0</span> Innovations
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed relative z-10 mb-6 font-light">
              <strong className="font-bold text-purple-900">IEM-ICDC 2027</strong> is a premier global endeavour designed to entice interest and showcase breakthroughs in Computational Intelligence and Data Science applications across diverse domains.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed relative z-10 font-light">
              As society rapidly embraces Industry 4.0, our three-day event bridges the gap between theoretical research and practical, impactful solutions. Join us for insightful invited talks, innovative technical sessions, and informative workshops led by global experts.
            </p>
          </div>

          {/* Key Domains Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { title: "AI & Robotics", icon: <Bot size={48} className="text-blue-500" />, color: "from-blue-500 to-cyan-400" },
              { title: "Cloud & Big Data", icon: <Cloud size={48} className="text-purple-500" />, color: "from-purple-500 to-indigo-500" },
              { title: "Cyber Security", icon: <ShieldCheck size={48} className="text-emerald-500" />, color: "from-emerald-500 to-teal-400" },
              { title: "Blockchain & IoT", icon: <Network size={48} className="text-orange-500" />, color: "from-orange-500 to-red-500" },
            ].map((domain, idx) => (
              <div key={idx} className="bg-white rounded-[1.5rem] p-6 shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col items-center justify-center text-center cursor-default">
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{domain.icon}</div>
                <h3 className="text-base md:text-lg font-bold text-gray-800">{domain.title}</h3>
              </div>
            ))}
            
            {/* Call to Action Mini Card */}
            <Link href="/papers" className="col-span-2 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-[1.5rem] p-8 shadow-xl relative overflow-hidden flex items-center justify-between group cursor-pointer hover:shadow-2xl transition-all duration-300 border border-purple-500/30">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="relative z-10">
                 <p className="text-purple-200 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">Join the Innovation</p>
                 <h3 className="text-xl md:text-2xl font-bold text-white">Call for Papers</h3>
               </div>
               <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-white group-hover:text-purple-900 transition-all duration-300 text-white border border-white/20">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </div>
            </Link>
          </div>

        </div>
      </div>

      {/* Important Deadlines Section */}
      <div className="w-full max-w-7xl px-4 flex flex-col items-center justify-center py-16 animate-on-scroll">
        <div className="relative group w-full overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-purple-800 to-black shadow-2xl p-10 md:p-16 text-center border border-purple-500/20">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400 via-transparent to-transparent"></div>

          <div className="relative z-10 space-y-10 flex flex-col items-center w-full">
            <div className="inline-flex items-center justify-center p-4 bg-purple-500/20 rounded-full backdrop-blur-md border border-purple-400/30 mb-2">
              <svg className="w-10 h-10 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Important <span className="text-purple-400">Deadlines</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors text-left flex flex-col justify-center">
                <h3 className="text-purple-300 font-semibold text-lg md:text-xl">Full Paper Submission</h3>
                <p className="text-white text-2xl md:text-3xl font-bold mt-2">December 10, 2026</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors text-left flex flex-col justify-center">
                <h3 className="text-purple-300 font-semibold text-lg md:text-xl">Acceptance Notification</h3>
                <p className="text-white text-2xl md:text-3xl font-bold mt-2">February 04, 2027</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors text-left flex flex-col justify-center">
                <h3 className="text-purple-300 font-semibold text-lg md:text-xl">Registration</h3>
                <p className="text-white text-2xl md:text-3xl font-bold mt-2">February 10, 2027</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors text-left flex flex-col justify-center">
                <h3 className="text-purple-300 font-semibold text-lg md:text-xl">Camera-Ready Paper Submission</h3>
                <p className="text-white text-2xl md:text-3xl font-bold mt-2">February 20, 2027</p>
              </div>
            </div>

            <div className="pt-8">
              <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
