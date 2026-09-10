"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Shield, Cloud, MonitorPlay } from "lucide-react";

const researchTracks = [
  {
    id: "track1",
    title: "AI And Robotics",
    icon: Cpu,
    topics: [
      "Expert Systems", "Fuzzy Sets and Systems", "AI in Modelling and Simulation",
      "Machine Learning", "Deep Learning", "Intelligent devices and instruments",
      "AI in Scheduling and Optimization", "Quantum Machine Learning", "Evolutionary Design",
      "Knowledge representation", "Robotics", "Multi-Robot systems",
      "Robot learning and adaptation", "Coordination in robotics",
      "Bioinformatics, Computational Biology", "Biomedical sensor & robotics",
      "Heuristic Algorithms", "Bio Inspired Algorithms", "Evolutionary Algorithms",
      "Brain Computer Interface"
    ]
  },
  {
    id: "track2",
    title: "Cyber Security, Blockchain and IoT",
    icon: Shield,
    topics: [
      "Networking Protocol", "Architecture", "Security and privacy", "Malware attacks",
      "Digital forensics", "Blockchain, and cryptocurrency", "Quantum cryptography",
      "AI & Sensors", "Brain Computing Interface", "Recent Trends in ICT",
      "Contemporary research in the field of ICT", "Industry 4.0/5.0 and Industrial",
      "Healthcare data privacy", "Biometric-based authentication systems",
      "Multi-factor-based authentication", "Passwordless authentication systems",
      "Smart cities, smart farming, e-health, and home automation applications",
      "Privacy-preserving communication"
    ]
  },
  {
    id: "track3",
    title: "Network Cloud and Big Data",
    icon: Cloud,
    topics: [
      "Big Data Analytics and Social Networking", "Recent Trends in ICT",
      "Cloud Architecture and applications", "Service-Oriented Architecture in Cloud Computing",
      "Cloud based parallel Processing", "Mobile Clouds", "Data Mining and Analytics",
      "AIML applications in Big Data", "Data Visualization", "5G and 6G beyond networks",
      "Low Power Wide Area (LPWA) networks", "Next generation networks",
      "NFV, RAN, Cloud-RAN, and Fog-RAN", "Software Defined Radio (SDR)",
      "Cognitive Radio (D2D) and (M2M) communications", "LoRa, Sigfox, NB-IoT", "WPAN"
    ]
  },
  {
    id: "track4",
    title: "VR/AR, Image Processing and NLP",
    icon: MonitorPlay,
    topics: [
      "Image Processing", "Speech & music processing", "3D and Video Processing",
      "Pattern Recognition", "Virtual and Augmented Reality",
      "Computational Linguistics & NLP Dialog Systems",
      "Graph, deep-learning-based methods of NLP and IR",
      "Information Extraction, Retrieval",
      "Opinion, personality and emotion detection in social media",
      "Color, Multi-spectral, and Hyper-spectral Imaging",
      "Image & Video Interpretation and Understanding",
      "Stereoscopic, Multi-view, Detection, Recognition, Retrieval, and Classification",
      "Image & Video Quality Models", "Biometrics, Forensics, and Security",
      "Biomedical and Biological Image Processing"
    ]
  }
];

export default function ResearchTracks() {
  const [activeTrack, setActiveTrack] = useState(researchTracks[0].id);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveTrack((current) => {
        const currentIndex = researchTracks.findIndex(t => t.id === current);
        const nextIndex = (currentIndex + 1) % researchTracks.length;
        return researchTracks[nextIndex].id;
      });
    }, 6000); // Cycles every 6 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const activeData = researchTracks.find(t => t.id === activeTrack) || researchTracks[0];

  return (
    <div 
      className="mb-24 relative overflow-hidden rounded-[3rem] p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/50 bg-gradient-to-br from-purple-50/80 via-white/80 to-purple-50/80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Subtle Animated Background Mesh */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12 text-center lg:text-left mx-auto lg:mx-0">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Research Tracks
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Explore four specialized research areas covering cutting-edge topics in computational intelligence, data science, and cloud computing. Each track welcomes innovative research contributions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Sidebar (Navigation) */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {researchTracks.map((track, idx) => {
              const isActive = activeTrack === track.id;
              const Icon = track.icon;
              return (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track.id)}
                  className={`relative flex items-center gap-4 p-4 lg:p-5 rounded-2xl text-left transition-all duration-300 group overflow-hidden ${
                    isActive
                      ? "shadow-[0_10px_30px_rgba(168,85,247,0.25)] transform lg:scale-[1.02] z-10"
                      : "hover:bg-white/60 hover:shadow-sm border border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {/* Sliding Background Animation */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabBackground"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900 via-purple-800 to-black pointer-events-none"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                    />
                  )}

                  <div className={`p-3 rounded-xl transition-colors duration-300 relative z-10 ${
                    isActive ? "bg-white/10 text-white backdrop-blur-sm shadow-inner" : "bg-gray-100 text-gray-500 group-hover:bg-purple-50 group-hover:text-purple-600"
                  }`}>
                    <Icon className="w-6 h-6" strokeWidth={isActive ? 2 : 1.5} />
                  </div>
                  <div className="flex-1 relative z-10">
                    <div className={`text-sm font-semibold mb-0.5 transition-colors duration-300 ${
                      isActive ? "text-purple-200" : "text-gray-400 group-hover:text-purple-500"
                    }`}>
                      Track {idx + 1}
                    </div>
                    <div className={`text-lg font-bold leading-tight transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-900"
                    }`}>
                      {track.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Display (Canvas) */}
          <div className="lg:w-2/3">
            <div className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[2rem] shadow-xl p-6 sm:p-10 h-full min-h-[450px] relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-6 border-b border-gray-200/50 relative z-10">
                <div className="p-4 bg-purple-100 rounded-2xl inline-flex self-start sm:self-auto">
                  <activeData.icon className="w-8 h-8 text-purple-700" strokeWidth={2} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                  {activeData.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                <AnimatePresence mode="popLayout">
                  {activeData.topics.map((topic, i) => (
                    <motion.div
                      key={`${activeData.id}-${i}`}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.1 } }}
                      transition={{ 
                        duration: 0.4, 
                        delay: i * 0.04, // Staggered delay for cascading effect
                        ease: [0.16, 1, 0.3, 1] // Custom spring-like ease
                      }}
                      className="group relative px-4 py-2 bg-white text-gray-800 text-[15px] font-medium rounded-full border border-purple-100 shadow-sm hover:shadow-[0_10px_20px_rgba(168,85,247,0.2)] hover:-translate-y-1 cursor-default transition-all duration-300 overflow-hidden"
                    >
                      {/* Hover Gradient Fill */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                      
                      {/* Topic Text */}
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        {topic}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
