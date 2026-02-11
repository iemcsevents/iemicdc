"use client";
import GithubCardShiny from "@/components/animata/card/github-card-shiny";
import Carousel from "@/components/Carousel";
import { Container } from "@/components/Container";
import { DataBox } from "@/components/DataBox";
import { Separator } from "@/components/Separator";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Bot,
  CalendarCheck,
  CalendarDays,
  Cpu,
  ImageIcon,
  ShieldHalf,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Card = ({
  track,
  Avatar,
  id,
}: {
  track: string;
  Avatar: React.ReactNode;
  id: string;
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/papers#${id}`)}
      className="group w-full cursor-pointer bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Icon Container */}
        <div className="relative z-10 p-4 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
          <div className="text-red-600 group-hover:text-red-700 transition-colors duration-300">
            {Avatar}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-lg font-bold text-center text-gray-800 leading-tight group-hover:text-red-700 transition-colors duration-300 relative z-10">
          {track}
        </h1>

        {/* Decorative element */}
        <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"></div>
      </div>
    </div>
  );
};

export default function Home() {
  useScrollAnimation();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = ['/images/dp2.jpg', '/images/dp3.jpg', '/images/dp6.jpg', '/images/iem.jpeg', '/images/dp7.jpg', '/images/dp8.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <Container className="flex flex-col items-center justify-start gap-16 pb-8 min-h-screen fade-in max-w-full overflow-hidden">
      {/* Hero Section with Image Carousel */}
      <div className="relative w-full max-w-7xl rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Images */}
        <div className="absolute inset-0 h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <Image
                src={image}
                alt={`Conference Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content - Not absolutely positioned, flows naturally */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-12 md:py-16 lg:py-20 px-4 space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              IEM ICDC 2026
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4 md:space-y-6 max-w-4xl">
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-white drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              4th International Conference on Computational Intelligence, Data Science and Cloud Computing
            </h2>
            <p className="text-sm font-bold sm:text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-4xl mx-auto drop-shadow-xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              Organized by<br />
              Department of Information Technology & Department of Computer Science & Engineering<br />
              Institute of Engineering & Management, Kolkata, India
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-5 items-center">
            <div className="space-y-1 md:space-y-2">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold text-white drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>March 16-18, 2026</div>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-lg font-bold text-white drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>Kolkata</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link href="/registrations" className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base">
              Register Now
            </Link>
            <Link href="/papers" className="bg-white text-red-600 border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base">
              Submit Paper
            </Link>
          </div>


        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Welcome to IEM ICDC 2026 Section */}
      <div className="w-full max-w-7xl flex flex-col items-center space-y-12 px-4 py-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Welcome to IEM ICDC 2026
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl text-justify space-y-6">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            <span className="font-semibold">IEM-ICDC 2026: International Conference on Computational Intelligence, Data Science and Cloud Computing</span> is an endeavour in enticing interest for Computational Intelligence and Data Science applications in diverse domains. As the world is moving towards industry 4.0, Computational Intelligence, Data Science and Cloud Computing are becoming more and more relevant in our society in all possible ways.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            The most substantial new findings about AI and Robotics, Image processing and NLP, Cloud Computing and big data analytics as well as in Cyber security, Blockchain and IoT and various allied fields will be presented in the three-day event comprised of insightful invited talks, innovative technical sessions and informative workshops.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            The general chair, the convener, along with the entire team invite researchers and industry personnel around the world to take part in the upcoming event to make the event a grand success.
          </p>
        </div>
      </div>

      <Separator />

      <div className="w-full max-w-6xl px-4">
        <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl border border-gray-100">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Image Section - Takes full height on large screens */}
            <div className="lg:w-2/5 relative bg-gray-50 flex items-center justify-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="relative group">
                {/* Subtle Frame Effect */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/10 to-transparent rounded-3xl blur-sm transition-all group-hover:blur-md"></div>

                <div className="relative h-[300px] w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]">
                  <Image
                    src="/images/guest_3.png"
                    fill
                    alt="Guest of honor"
                    className="rounded-2xl object-cover object-top shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              {/* Header Section */}
              <div className="mb-10 text-center lg:text-left">
                {/* <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full">
                  Keynote Presentation
                </span> */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                  Guest of <span className="text-red-600">Honor</span>
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-red-600 to-red-500 mt-4 rounded-full mx-auto lg:mx-0"></div>
              </div>

              {/* Credentials & Bio */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800">
                    Debashis Sen
                  </h4>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-red-600/90 leading-tight">
                      Former IAS officer (ex Additional Chief Secretary IT)
                    </p>
                    <p className="text-md font-medium text-gray-500 italic">
                      Managing Director, HIDCO and Chairman, New Town DA
                    </p>
                  </div>
                </div>

                <div className="relative">
                  {/* Quote decoration */}
                  <span className="absolute -top-4 -left-2 text-6xl text-gray-100 font-serif select-none pointer-events-none">“</span>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg text-justify relative z-10">
                    Experienced administrator with a demonstrated history of working in senior government positions.
                    Skilled in Policy Formulation, Governance, Smart Cities, Information Technology Policy,
                    Start Up Policy, Strategic Planning, and Public Administration. Strong professional expertise
                    in city development, urban analysis and democracy. Trained at Harvard Business School
                    and IMF Institute.
                  </p>
                </div>

                {/* Call to Action or Invitation */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-500 italic">
                    Joining us to share visionary perspectives on urban transformation and governance.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Separator />

      <div className="w-full max-w-7xl flex flex-col items-center animate-on-scroll px-4 mx-auto py-12">
        {/* Prof. Satyajit Chakrabarti Memorial Award... */}
        <div className="flex flex-col items-center max-w-3xl">
          <div className="text-center space-y-4 mb-10">
            <h3 className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Prof. Satyajit Chakrabarti Memorial Award for Outstanding Contribution to Academics
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Centered card container */}
          <div className="w-full flex justify-center">
            <div className="group flex flex-col items-center justify-start gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8 hover-lift hover:shadow-xl transition-all duration-300 max-w-sm w-full">
              <div className="relative">
                <Image
                  src="/images/guest_4.png"
                  width={140}
                  height={140}
                  alt="Prof. Utpal Garain"
                  className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800 text-xl mb-3">Prof. Nabanita Das</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Retired Professor at the Indian Statistical Institute, Kolkata
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 animate-on-scroll px-4 mx-auto pb-7 pt-2">

        {/* Academic Excellence Honouree Section */}
        <div className="flex flex-col items-center">
          <div className="text-center space-y-4 mb-10">
            <h3 className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Academic Excellence Honouree
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Centered card container */}
          <div className="w-full flex justify-center">
            <div className="group flex flex-col items-center justify-start gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8 hover-lift hover:shadow-xl transition-all duration-300 max-w-sm w-full">
              <div className="relative">
                <Image
                  src="/images/Guest (1).png"
                  width={140}
                  height={140}
                  alt="Prof. Utpal Garain"
                  className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800 text-xl mb-3">Prof. Debatosh Guha</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  INAE Chair Professor, University of Calcutta, Rajabazar Campus, Kolkata, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Leadership Honouree Section */}
        <div className="flex flex-col items-center">
          <div className="text-center space-y-4 mb-10">
            <h3 className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Industry Leadership Honouree
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Centered card container */}
          <div className="w-full flex justify-center">
            <div className="group flex flex-col items-center justify-start gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8 hover-lift hover:shadow-xl transition-all duration-300 max-w-sm w-full">
              <div className="relative">
                <Image
                  src="/images/Guest (2).png"
                  width={140}
                  height={140}
                  alt="Dr. Dipankar Chakrabarti"
                  className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800 text-xl mb-3">Dr. Dipankar Chakrabarti</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Founder, CtoE Consultancy Services, Kolkata & Director, BDSCube Technology Pvt., Ltd., Kolkata
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      

      <Separator />

      <div className="w-full max-w-7xl flex flex-col items-center justify-start gap-8 animate-on-scroll px-4">
        <div className="text-center space-y-4">
          <h1 className="w-full md:text-5xl text-3xl text-center text-primary font-bold fade-in bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Keynote Speakers - ICDC 2026
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-animation">
          <div className="group flex flex-col items-center justify-start gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6 hover-lift hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image src="/images/S1.png" width={120} height={120} alt="Prof. Utpal Garain" className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-primary text-lg md:text-xl mb-3">Prof. Utpal Garain</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Professor,  Head of Computer Vision and Pattern Recognition Unit (CVPRU), Centre for Artificial Intelligence and Machine Learning (CAIML),  Indian Statistical Institute, Kolkata
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center justify-start gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6 hover-lift hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image src="/images/S2.png" width={120} height={120} alt="Manojit Sengupta" className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-primary text-lg md:text-xl mb-3">Manojit Sengupta</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Delivery Centre Head, Industry Lead for Energy, Resource and Utilities, TCS, Kolkata
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center justify-start gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6 hover-lift hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="relative">
              <Image src="/images/S3.png" width={120} height={120} alt="Soumya Sengupta" className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-primary text-lg mb-2">Soumya Sengupta</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Managing Director & Azure Cloud Practice Lead, PwC, India
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center justify-start gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6 hover-lift hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image src="/images/S4.png" width={120} height={120} alt="Sankar Ghosh" className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-primary text-lg md:text-xl mb-3">Sankar Ghosh</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Technology Solutions Lead - Asia Pacific and LATAM, Accenture, India
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center justify-start gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6 hover-lift hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image src="/images/S5.jpg" width={120} height={120} alt="Dr. Arpan Pal" className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-primary text-lg md:text-xl mb-3">Dr. Arpan Pal</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Distinguished Chief Scientist and Research Area Head, Embedded Devices and Intelligent Systems, TCS, Kolkata, India
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center justify-start gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6 hover-lift hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image src="/images/S6.png" width={120} height={120} alt="Prof. Treena Basu" className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-primary text-lg md:text-xl mb-3">Dr. Uemaru Wataru</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Associate Professor, Department of Electronics and Informatics, Ryukoku University, Kyoto, Japan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-8 animate-on-scroll px-4">
        <div className="text-center space-y-4">
          <h1 className="w-full md:text-5xl text-3xl text-center text-primary font-bold fade-in bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Technical Co-Sponsorship
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>
        <div className="w-full max-w-6xl flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4 md:gap-8 stagger-animation">
          <div className="group bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="images/IEEE_kol_logo.png" width={150} height={100} alt="Partner 1" className="object-contain max-h-[60px] md:max-h-[110px] w-full group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <Separator />

      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-8 animate-on-scroll px-4">
        <div className="text-center space-y-4">
          <h1 className="w-full md:text-5xl text-3xl text-center text-primary font-bold fade-in bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Technical Partners
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        {/* CHANGED: From flex to grid for better row/col control */}
        <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 place-items-center stagger-animation">
          <div className="group w-full h-full flex items-center justify-center bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/math_works.png" width={150} height={100} alt="Partner 1" className="object-contain max-h-[60px] md:max-h-[110px] w-auto group-hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="group w-full h-full flex items-center justify-center bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/ieee_tems.jpg" width={1280} height={639} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-auto rounded group-hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="group w-full h-full flex items-center justify-center bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/gdg_horizontal.png" width={1280} height={639} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-auto rounded group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="group w-full h-full flex items-center justify-center bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/logo2.png" width={150} height={100} alt="Partner 1" className="object-contain max-h-[60px] md:max-h-[110px] w-auto group-hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="group w-full h-full flex items-center justify-center bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/logo3.png" width={150} height={100} alt="Partner 2" className="object-contain max-h-[60px] md:max-h-[110px] w-auto group-hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="group w-full h-full flex items-center justify-center bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/technical_sponsor.jpeg" width={150} height={100} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-auto rounded group-hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="group w-full h-full flex items-center justify-center bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/logo4.png" width={150} height={100} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-auto rounded group-hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="group w-full h-full flex items-center justify-center bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/IETE-Logo1.jpg" width={942} height={938} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-auto rounded group-hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="group w-full h-full flex items-center justify-center bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/IEEE_CS_IEM.jpg" width={942} height={938} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-auto rounded group-hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="group w-full h-full flex items-center justify-center bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/aenix.jpeg" width={1280} height={639} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-auto rounded group-hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="group w-full h-full flex items-center justify-center bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/iem_rf.jpeg" width={1280} height={639} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-auto rounded group-hover:scale-105 transition-transform duration-300" />
          </div>



          <div className="group w-full h-full flex items-center justify-center bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/coe_logo.png" width={1280} height={639} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-auto rounded group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <Separator />

      <div className="w-full max-w-6xl space-y-8 animate-on-scroll px-4">
        <div className="text-center space-y-4">
          <h1 className="w-full text-center md:text-5xl text-3xl text-primary font-bold fade-in bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Conference Tracks
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore four specialized research areas covering cutting-edge topics in computational intelligence
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 stagger-animation">
          <Card
            id="track1"
            track="AI And Robotics"
            Avatar={<Bot className="w-16 h-16" />}
          />
          <Card
            id="track2"
            track="Image Processing And NLP"
            Avatar={<ImageIcon className="w-16 h-16" />}
          />
          <Card
            id="track3"
            track="Cloud Computing And Big Data Analytics"
            Avatar={<Cpu className="w-16 h-16" />}
          />
          <Card
            id="track4"
            track="Cyber Security, Blockchain And IoT"
            Avatar={<ShieldHalf className="w-16 h-16" />}
          />
        </div>
      </div>

      <Separator />

      {/* Get Started Today Section */}
      {/* <div className="w-full max-w-7xl flex flex-col items-center space-y-12 px-4 py-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Get Started Today
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take the next step in your research journey with IEM ICDC 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          <Link href="/papers" className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="space-y-4">
              <div className="text-4xl">📄</div>
              <h3 className="text-xl font-bold text-gray-800">Submit Your Paper</h3>
              <p className="text-gray-600">
                Join the global community of researchers and share your innovations.
              </p>
              <div className="text-red-600 font-semibold group-hover:text-red-700">
                Learn More →
              </div>
            </div>
          </Link>

          <Link href="/registrations" className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="space-y-4">
              <div className="text-4xl">🎫</div>
              <h3 className="text-xl font-bold text-gray-800">Register Now</h3>
              <p className="text-gray-600">
                Secure your spot at the premier computational intelligence conference.
              </p>
              <div className="text-red-600 font-semibold group-hover:text-red-700">
                Learn More →
              </div>
            </div>
          </Link>

          <Link href="/papers" className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="space-y-4">
              <div className="text-4xl">🔬</div>
              <h3 className="text-xl font-bold text-gray-800">Explore Tracks</h3>
              <p className="text-gray-600">
                Discover four specialized research areas covering cutting-edge topics.
              </p>
              <div className="text-red-600 font-semibold group-hover:text-red-700">
                Learn More →
              </div>
            </div>
          </Link>
        </div>
      </div> */}

      <div className="space-y-8 text-center w-full max-w-5xl animate-on-scroll px-4" id="importantDates">
        <div className="text-center space-y-4">
          <h1 className="md:text-5xl text-3xl font-bold text-primary fade-in bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Important Dates
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 overflow-hidden fade-in-delay-1 hover-lift">
          <div className="overflow-x-auto">
            <table className="w-full text-lg text-left text-gray-700 min-w-[400px]">
              <thead className="text-primary bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold">
                    <div className="flex items-center gap-2">
                      <CalendarCheck className="w-5 h-5" />
                      <span>Event</span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 font-bold">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      <span>Date</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold">
                    Deadline for full paper Submission
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-red-600 font-semibold">Submission Closed</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold">
                    Acceptance notification for papers
                  </td>
                  <td className="px-6 py-4 font-semibold">February 4, 2026</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold">
                    Deadline for camera ready paper submission
                  </td>
                  <td className="px-6 py-4 font-semibold">February 20, 2026</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold">
                    Deadline for paper and participation registration
                  </td>
                  <td className="px-6 py-4 font-semibold">February 10, 2026</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold">
                    Presentation submission
                  </td>
                  <td className="px-6 py-4 font-semibold">March 2, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
}
