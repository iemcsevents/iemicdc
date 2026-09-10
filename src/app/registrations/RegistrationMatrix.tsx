"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { IndianRupee, Globe, GraduationCap, UserCircle, Building2, Users, FileText } from "lucide-react";

const pricingData = [
  {
    category: "Author (Student)",
    icon: GraduationCap,
    inr: "₹8,000",
    usd: "$250"
  },
  {
    category: "Author (Academician / Researcher)",
    icon: UserCircle,
    inr: "₹9,000",
    usd: "$250"
  },
  {
    category: "Author (Industry Professional)",
    icon: Building2,
    inr: "₹10,000",
    usd: "$250"
  },
  {
    category: "Participation Only (Non-Paper)",
    icon: Users,
    inr: "₹3,000",
    usd: "$100"
  },
  {
    category: "Extra Page (Above 12 Pages)",
    icon: FileText,
    inr: "₹400",
    usd: "$50"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function RegistrationMatrix() {
  return (
    <div className="relative mb-8 mt-4">
      {/* Deep Glowing Orbs Behind the Matrix */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* The Floating Glass Matrix */}
      <div className="max-w-6xl mx-auto bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden relative">
        
        {/* Header Row */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-8 px-12 border-b border-gray-200/50 bg-white/40">
          <div className="col-span-6 font-bold text-gray-500 uppercase tracking-wider text-[11px] flex items-center">
            Registration Category
          </div>
          <div className="col-span-3 flex items-center gap-2 font-bold text-gray-500 uppercase tracking-wider text-[11px] border-l border-gray-200/50 pl-8">
            <IndianRupee size={14} /> Indian (INR)
          </div>
          <div className="col-span-3 flex items-center gap-2 font-bold text-gray-500 uppercase tracking-wider text-[11px] border-l border-gray-200/50 pl-8">
            <Globe size={14} /> International (USD)
          </div>
        </div>

        {/* Data Rows */}
        <motion.div 
          className="flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pricingData.map((row, idx) => {
            const Icon = row.icon;
            return (
              <motion.div 
                variants={itemVariants}
                key={idx} 
                className="group relative flex flex-col md:grid md:grid-cols-12 gap-4 p-8 md:px-12 border-b border-gray-200/40 last:border-b-0 hover:bg-white/60 transition-all duration-300 hover:shadow-lg"
              >
                {/* Sweep Slider Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-purple-800/90 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100 pointer-events-none rounded-none"></div>

                <div className="md:col-span-6 flex items-center gap-5 relative z-10">
                  <div className="p-3 bg-white/60 text-gray-600 rounded-xl shadow-sm border border-gray-100/50 group-hover:bg-white/20 group-hover:border-transparent group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold text-gray-900 text-lg group-hover:text-white transition-colors duration-300">
                    {row.category}
                  </span>
                </div>
                
                <div className="md:col-span-3 flex items-center justify-between md:justify-start relative z-10 md:border-l md:border-gray-200/50 md:pl-8 group-hover:border-transparent transition-colors">
                  <span className="md:hidden text-xs font-bold text-gray-400 uppercase group-hover:text-purple-200 transition-colors">INR</span>
                  <span className="text-2xl font-black text-gray-800 tracking-tight group-hover:text-white transition-colors duration-300">
                    {row.inr}
                    {idx === 4 && <span className="text-sm font-semibold opacity-50 ml-1.5 tracking-normal">/ page</span>}
                  </span>
                </div>
                
                <div className="md:col-span-3 flex items-center justify-between md:justify-start relative z-10 md:border-l md:border-gray-200/50 md:pl-8 group-hover:border-transparent transition-colors">
                  <span className="md:hidden text-xs font-bold text-gray-400 uppercase group-hover:text-purple-200 transition-colors">USD</span>
                  <span className="text-2xl font-black text-gray-800 tracking-tight group-hover:text-white transition-colors duration-300">
                    {row.usd}
                    {idx === 4 && <span className="text-sm font-semibold opacity-50 ml-1.5 tracking-normal">/ page</span>}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
