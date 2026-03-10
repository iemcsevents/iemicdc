"use client";

import React, { useState, useEffect } from "react";
import { BookOpen, Calendar, Clock, Download, MapPin, X, Trophy, Sparkles, User } from "lucide-react";
import Image from "next/image";

export default function GenAiWorkshop() {
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
        <div>
            <div id="genai-workshop" className="w-full max-w-5xl scroll-mt-24">
                {/* Section Header */}
                <div className="text-center space-y-4 mb-10">
                    <span className="inline-block bg-red-100 text-red-700 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                        GenAI Workshop
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                        Applied GenAI: From Beginner to Builder
                    </h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
                </div>

                {/* Main Workshop Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* Top banner */}
                    <div className="bg-gradient-to-r from-red-700 to-red-900 px-8 py-5 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 rounded-xl p-2">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-white font-bold text-lg">Workshop Details</span>
                        </div>
                        <span className="bg-yellow-400 text-yellow-900 font-bold px-4 py-1.5 rounded-full text-sm">
                            March 16, 2026
                        </span>
                    </div>

                    <div className="p-8 md:p-10 space-y-8">
                        {/* Title & Organizers */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug">
                                Workshop on:{" "}
                                <span className="text-red-600">
                                    Applied GenAI: From Beginner to Builder
                                </span>
                            </h3>
                            <p className="text-gray-500 text-base italic">
                                Go Beyond Theory. Build Real Systems. Get Industry Internship.
                            </p>
                        </div>

                        {/* Key Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-5 text-center">
                                <Clock className="w-7 h-7 text-red-600 mx-auto mb-3" />
                                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Time</div>
                                <div className="font-bold text-gray-800">10:00 AM – 1:00 PM</div>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-5 text-center">
                                <Trophy className="w-7 h-7 text-red-600 mx-auto mb-3" />
                                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Highlight</div>
                                <div className="font-bold text-gray-800">Industry Internships</div>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-5 text-center">
                                <MapPin className="w-7 h-7 text-red-600 mx-auto mb-3" />
                                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Venue</div>
                                <div className="font-bold text-gray-800">Godrej Genesis, 15th Floor</div>
                            </div>
                        </div>

                        {/* Highlight Section from Flyer */}
                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-400 p-2 rounded-lg shadow-sm">
                                    <Trophy className="w-5 h-5 text-yellow-900" />
                                </div>
                                <p className="text-gray-800 font-medium">
                                    <span className="font-bold text-red-700">Top 3 participants</span> win an exclusive <span className="bg-yellow-200 px-1">Industry Internship</span>.
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-red-600 p-2 rounded-lg shadow-sm">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-gray-800 font-medium">
                                    Limited to the <span className="font-bold">First 50 Participants</span> only.
                                </p>
                            </div>
                        </div>

                        {/* Facilitators & Closing Keynote */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 flex items-center gap-5">
                                <div className="bg-gradient-to-br from-red-100 to-red-50 p-3 rounded-xl flex-shrink-0">
                                    <BookOpen className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Conducted By</div>
                                    <div className="font-bold text-gray-800 text-lg">GenAI CoE Student Leads</div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 flex items-center gap-5">
                                <div className="bg-gradient-to-br from-gray-200 to-gray-100 p-3 rounded-xl flex-shrink-0">
                                    <User className="w-6 h-6 text-gray-700" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Special Address</div>
                                    <div className="font-bold text-gray-800 text-lg">Paromita Ghosh</div>
                                    <div className="text-gray-500 text-sm">GM Ericsson</div>
                                </div>
                            </div>
                        </div>

                        {/* Precursor Note */}
                        <div className="border-l-4 border-red-600 pl-4 py-2 italic text-gray-600 text-sm bg-gray-50 rounded-r-xl">
                            This workshop serves as a precursor to the International Conference on Computational Intelligence, Data Science and Cloud Computing (ICDC 2026).
                        </div>

                        {/* Flyer Trigger Section */}
                        <div
                            className="relative group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-md max-w-sm mx-auto"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Image
                                width={2318}
                                height={3000}
                                src="/images/workshop.jpeg"
                                alt="Workshop Flyer"
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
                                <h4 className="font-bold text-lg mb-1">Workshop Brochure</h4>
                                <p className="text-red-200 text-sm">
                                    Download the workshop brochure for full details.
                                </p>
                            </div>
                            <a
                                href="/images/workshop.jpeg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 flex items-center gap-2 bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-red-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                <Download className="w-5 h-5" />
                                Download PDF
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
                    <button
                        className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors backdrop-blur-md"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <Image
                        width={2318}
                        height={3000}
                        src="/images/workshop.jpeg"
                        alt="Workshop Flyer Fullscreen"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}