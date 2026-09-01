import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FaCalendarAlt, FaMapMarkerAlt, FaRobot, FaBrain, FaCloud, FaLock } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About the Conference | IEM ICDC 2027",
  description: "Learn about IEM ICDC 2027 - International Conference on Computational Intelligence, Data Science and Cloud Computing. Discover our mission, vision, and the exciting research areas we cover in AI, data science, and cloud computing.",
  keywords: [
    "About IEM ICDC 2027",
    "Conference Information",
    "Research Areas",
    "Computational Intelligence",
    "Data Science Conference",
    "Cloud Computing Research",
    "AI Conference India",
    "Academic Research"
  ],
  openGraph: {
    title: "About IEM ICDC 2027 - Conference Details",
    description: "Learn about IEM ICDC 2027 - International Conference on Computational Intelligence, Data Science and Cloud Computing. Discover our mission, vision, and research areas.",
    images: ["/images/A1.jpeg"],
  },
};

export default function About() {
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
            About IEM ICDC <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">2027</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed font-light">
            5th International Conference on Computational Intelligence, Data Science and Cloud Computing
          </p>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-start gap-24 py-20">
        
        {/* Conference Overview Section */}
        <div className="w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Conference</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-purple-700">IEM ICDC 2027</span> is a premier endeavour to entice interest for Computational Intelligence and Data Science applications across diverse domains. As the world rapidly embraces Industry 4.0, these technologies are becoming increasingly pivotal to our society.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The three-day event will present substantial new findings, fostering global collaboration through insightful invited talks, innovative technical sessions, and informative workshops.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-shadow">
                  <div className="text-purple-600 mb-3"><FaCalendarAlt size={28} /></div>
                  <h4 className="font-bold text-gray-900">Dates</h4>
                  <p className="text-gray-600 mt-1">March 17-19, 2027</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-shadow">
                  <div className="text-purple-600 mb-3"><FaMapMarkerAlt size={28} /></div>
                  <h4 className="font-bold text-gray-900">Location</h4>
                  <p className="text-gray-600 mt-1">Kolkata</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-purple-100 bg-white">
                <Image
                  src="/images/logo.png"
                  alt="IEM ICDC 2027 Logo"
                  fill
                  className="object-contain p-12"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Major Tracks Section */}
        <div className="w-full max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Major Tracks & Topics</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaRobot, title: "AI & Robotics", desc: "Exploring the frontiers of artificial intelligence, machine learning, and autonomous robotic systems." },
              { icon: FaBrain, title: "Image Processing & NLP", desc: "Advancements in computer vision, pattern recognition, and natural language understanding." },
              { icon: FaCloud, title: "Cloud & Big Data", desc: "Scalable cloud architectures, distributed computing, and large-scale data analytics." },
              { icon: FaLock, title: "Security, Blockchain & IoT", desc: "Securing the future with cryptographic ledgers, connected devices, and robust cyber defense." }
            ].map((track, i) => (
              <div key={i} className="group bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgb(147,51,234,0.1)] hover:border-purple-200 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <track.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{track.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Host Institute Section */}
        <div className="w-full max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-5/12 w-full">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl text-center relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-3xl pointer-events-none"></div>
                <div className="relative w-48 h-48 mx-auto mb-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  <Image
                    src="/images/iem-logo.png"
                    alt="IEM Logo"
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Institute of Engineering & Management</h3>
                <p className="text-purple-300 font-medium mb-8">Kolkata, India • Est. 1989</p>
                
                <div className="flex flex-col gap-3 relative z-20">
                  <Link href="https://iem.edu.in/" target="_blank" className="w-full py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-purple-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                    Visit IEM Official Website
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="lg:w-7/12 space-y-8 text-white">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">About The Host Institute</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  The IEM group is an acclaimed educational group amongst the industry-centred academic training organisations of today. IEM has set sublime standards in addressing the technical and managerial resource shortage in the new era of dynamic globalisation.
                </p>
                <p>
                  Ranked among the top engineering colleges in Eastern India, IEM is renowned for its 100% job assistance and industry-aligned curriculum. Since its inception, the group has surpassed numerous benchmarks in research, industry collaboration, and student success.
                </p>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <h4 className="text-xl font-semibold text-white mb-6">Major International Conferences Organized</h4>
                <div className="flex flex-wrap gap-3">
                  {["IEEE IEMCON (Vancouver)", "IEEE UEMCON (New York)", "IEEE CCWC (Las Vegas)", "IEEE IEMANTENNA", "IEEE IEMTRONICS"].map((conf, idx) => (
                    <span key={idx} className="px-4 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-200 text-sm font-medium hover:bg-purple-500/20 transition-colors cursor-default">
                      {conf}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}
