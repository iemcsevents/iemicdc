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
              Organized by<br/>
              Department of Information Technology & Department of Computer Science & Engineering<br/>
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
                Professor at Indian Statistical Institute, Head of Computer Vision and Pattern Recognition Unit (CVPRU), Centre for Artificial Intelligence and Machine Learning (CAIML), ISI, Kolkata
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

          {/* <div className="group flex flex-col items-center justify-start gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6 hover-lift hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image src="/images/S3.png" width={120} height={120} alt="Dr. Indranil Mitra" className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-primary text-lg md:text-xl mb-3">Dr. Indranil Mitra</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Partner @ PwC | AI Whisperer | Digital Transformation Leader |
                Data Science & Emerging Technologies Expert.
              </p>
            </div>
          </div> */}

          {/* <div className="group flex flex-col items-center justify-start gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6 hover-lift hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image src="/images/S5.png" width={120} height={120} alt="Dr. Anbuthambi Bhojarajan" className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-primary text-lg md:text-xl mb-3">Dr. Anbuthambi Bhojarajan</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Head of Strategy, L&T EduTech, Larsen & Toubro Ltd.
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center justify-start gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6 hover-lift hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image src="/images/S6.png" width={120} height={120} alt="Prof. Treena Basu" className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-primary text-lg md:text-xl mb-3">Prof. Treena Basu</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Associate Professor, Department of Mathematics, Occidental College, Los Angeles.
                <br />
                <Link href={"https://www.oxy.edu"} className="text-red-500 hover:underline">https://www.oxy.edu</Link>
              </p>
            </div>
          </div> */}
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
        <div className="w-full max-w-6xl flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4 md:gap-8 stagger-animation">
          <div className="group bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/logo2.png" width={150} height={100} alt="Partner 1" className="object-contain max-h-[60px] md:max-h-[110px] w-full group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="group bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/logo3.png" width={150} height={100} alt="Partner 2" className="object-contain max-h-[60px] md:max-h-[110px] w-full group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="group bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/technical_sponsor.jpeg" width={150} height={100} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-full rounded group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="group bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/logo4.png" width={150} height={100} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-full rounded group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="group bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/IETE-Logo1.jpg" width={942} height={938} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-full rounded group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="group bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/IEEE_CS_IEM.jpg" width={942} height={938} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-full rounded group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="group bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/aenix.jpeg" width={1280} height={639} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-full rounded group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="group bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
            <Image src="/images/iem_rf.jpeg" width={1280} height={639} alt="Technical Sponsor" className="object-contain max-h-[60px] md:max-h-[110px] w-full rounded group-hover:scale-105 transition-transform duration-300" />
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
