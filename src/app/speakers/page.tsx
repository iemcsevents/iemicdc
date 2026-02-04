import { Container } from "@/components/Container";
import { Mic, Users, Star, Calendar } from "lucide-react";
import Image from "next/image";

const SpeakerCard = ({ name, role, imageSrc }: { name: string; role: string; imageSrc: string }) => (
  <div className="group flex flex-col items-center justify-start gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="relative">
      <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <Image 
        src={imageSrc} 
        width={120} 
        height={120} 
        alt={name} 
        className="rounded-full object-cover border-4 border-white shadow-lg relative z-10" 
      />
    </div>
    <div className="text-center">
      <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-3">{name}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {role}
      </p>
    </div>
  </div>
);

export default function Speakers() {
  const keynoteSpeakers = [
    {
      name: "Prof. Utpal Garain",
      role: "Professor, Head of Computer Vision and Pattern Recognition Unit (CVPRU), Centre for Artificial Intelligence and Machine Learning (CAIML), Indian Statistical Institute, Kolkata",
      imageSrc: "/images/S1.png"
    },
    {
      name: "Manojit Sengupta",
      role: "Delivery Centre Head, Industry Lead for Energy, Resource and Utilities, TCS, Kolkata",
      imageSrc: "/images/S2.png"
    },
    {
      name: "Soumya Sengupta",
      role: "Managing Director & Azure Cloud Practice Lead, PwC, India",
      imageSrc: "/images/S3.png"
    },
    {
      name: "Sankar Ghosh",
      role: "Technology Solutions Lead - Asia Pacific and LATAM, Accenture, India",
      imageSrc: "/images/S4.png"
    },
    {
      name: "Dr. Arpan Pal",
      role: "Distinguished Chief Scientist and Research Area Head, Embedded Devices and Intelligent Systems, TCS, Kolkata, India",
      imageSrc: "/images/S5.jpg"
    },
    {
      name: "Dr. Uemaru Wataru",
      role: "Associate Professor, Department of Electronics and Informatics, Ryukoku University, Kyoto, Japan",
      imageSrc: "/images/S6.png"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Speakers</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            World-renowned experts and visionary leaders sharing insights at IEM ICDC 2026
          </p>
        </div>
      </div>

      <Container className="py-20">
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent inline-block">
            Keynote Speakers - ICDC 2026
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {keynoteSpeakers.map((speaker, index) => (
            <SpeakerCard 
              key={index}
              name={speaker.name}
              role={speaker.role}
              imageSrc={speaker.imageSrc}
            />
          ))}
        </div>

        {/* Features / Expectation Section */}
        <div className="mt-24 w-full max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Users className="w-10 h-10 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-800">Industry Leaders</h3>
                <p className="text-gray-600 text-sm">Visionaries from top global firms</p>
              </div>
              <div className="text-center">
                <Star className="w-10 h-10 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-800">Academic Excellence</h3>
                <p className="text-gray-600 text-sm">Leading researchers & scholars</p>
              </div>
              <div className="text-center">
                <Calendar className="w-10 h-10 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-800">Expert Sessions</h3>
                <p className="text-gray-600 text-sm">Immersive 3-day knowledge sharing</p>
              </div>
            </div>
            
            {/* <div className="bg-gray-50 rounded-2xl p-6 md:p-10">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Session Tracks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 shrink-0"></div>
                  <p className="text-gray-700 font-medium">Technology Innovation & Emerging Tech</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 shrink-0"></div>
                  <p className="text-gray-700 font-medium">Research Methodologies & Excellence</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 shrink-0"></div>
                  <p className="text-gray-700 font-medium">Industry 4.0 Applications & Case Studies</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 shrink-0"></div>
                  <p className="text-gray-700 font-medium">Future Trends in Digital Landscape</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </>
  );
}