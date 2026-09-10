"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Crown, Award, Star } from "lucide-react";

interface SingleListProps {
  title: string;
  members: string[] | Record<string, string[]>;
}

const getCommitteeIcon = (title: string) => {
  if (title.toLowerCase().includes("chair") || title.toLowerCase().includes("general")) {
    return <Crown className="w-6 h-6 text-purple-600" />;
  }
  if (title.toLowerCase().includes("advisory")) {
    return <Star className="w-6 h-6 text-indigo-600" />;
  }
  if (title.toLowerCase().includes("program")) {
    return <Award className="w-6 h-6 text-pink-600" />;
  }
  return <Users className="w-6 h-6 text-purple-600" />;
};

const MemberItem = ({ member, idx }: { member: string; idx: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Parse member string: Name and Affiliation
  const commaIndex = member.indexOf(",");
  let name = member;
  let affiliation = "";

  if (commaIndex !== -1) {
    name = member.substring(0, commaIndex).trim();
    affiliation = member.substring(commaIndex + 1).trim();
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.5), ease: "easeOut" }}
      className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-3 sm:py-4 pl-8 sm:pl-10 pr-4 sm:pr-8 cursor-default"
    >
      {/* Slider Background Wrapper (overflow hidden to contain slider without clipping node) */}
      <div className="absolute inset-0 overflow-hidden z-0 rounded-r-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
      </div>

      {/* Node Indicator on the timeline */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[-5px] w-2.5 h-2.5 rounded-full bg-purple-300 border-[2px] border-[#fafafa] group-hover:bg-white group-hover:border-purple-600 group-hover:scale-150 transition-all duration-300 z-20 shadow-sm"></div>

      {/* Content wrapper (z-10 to stay above the slider) */}
      <div className="relative z-10 flex items-center mb-1 sm:mb-0">
        <span className="text-[17px] font-semibold text-gray-800 group-hover:text-white transition-colors duration-500">
          {name}
        </span>
      </div>

      {/* Affiliation / Role Badge */}
      {affiliation && (
        <div className="relative z-10 sm:ml-4">
          <span className="inline-block px-3 py-1 bg-white/60 backdrop-blur-sm text-purple-700 text-sm font-mono rounded-md border border-purple-200/50 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-all duration-500">
            {affiliation}
          </span>
        </div>
      )}
    </motion.div>
  );
};

const renderMemberList = (list: string[]) => (
  <div className="flex flex-col relative w-full">
    {list.map((member, idx) => (
      <MemberItem key={idx} member={member} idx={idx} />
    ))}
  </div>
);

export default function SingleList({ title, members }: SingleListProps) {
  const icon = getCommitteeIcon(title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-5xl mx-auto flex flex-col relative z-10"
    >
      {/* Header Node */}
      <div className="flex items-center space-x-6 mb-6 group relative z-20">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border border-purple-200 shadow-sm group-hover:border-purple-400 group-hover:shadow-purple-500/20 group-hover:shadow-lg transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Members Container with Left Border (Timeline Line) */}
      <div className="ml-7 border-l-2 border-purple-200/80 pb-12 flex flex-col relative z-10">
        {Array.isArray(members) ? (
          renderMemberList(members)
        ) : (
          Object.entries(members).map(([subTitle, subMembers]) => (
            <div key={subTitle} className="mb-8 last:mb-0">
              <h4 className="flex items-center text-lg font-bold text-gray-700 mb-4 pl-8 space-x-2 relative">
                {/* Sub-node indicator */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[-7px] w-3 h-3 rounded-full bg-indigo-400 border-[2px] border-[#fafafa]"></div>
                <span>{subTitle}</span>
              </h4>
              {subMembers.length ? (
                renderMemberList(subMembers)
              ) : (
                <p className="text-sm text-gray-500 pl-8 py-2 italic">To be announced</p>
              )}
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}
