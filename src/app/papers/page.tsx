import React from "react";
import { Container } from "@/components/Container";
import { BookOpen, Calendar, Edit3, CheckCircle, ExternalLink, FileText, Award } from "lucide-react";

export const metadata = {
  title: "Call for Papers | IEM-ICDC 2027",
  description: "Submit your research papers to IEM-ICDC 2027. We invite high-quality, original submissions in Computational Intelligence, Data Science, and Cloud Computing.",
};

export default function PapersPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-purple-500/30">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/iem.jpeg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-8 backdrop-blur-md">
            <Award size={16} /> Best Paper Awards will be provided
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
            Call for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">Papers</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Join us at IEM-ICDC 2027. We invite high-quality, original submissions bridging the gap between theoretical research and practical solutions.
          </p>
          
          <a 
            href="https://easychair.org/conferences/?conf=iemicdc2027" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-900 font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Edit3 size={20} className="relative z-10" />
            <span className="relative z-10">Submit via EasyChair</span>
            <ExternalLink size={18} className="relative z-10 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      <Container className="relative z-10 py-20">

        {/* Requirements & Dates Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
          
          {/* Submission Guidelines (Spans 7 cols) */}
          <div className="lg:col-span-7 p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl relative overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-[80px]" />
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4 relative z-10">
              <BookOpen className="text-purple-600" /> Submission Guidelines
            </h2>
            <div className="space-y-6 relative z-10">
              {[
                { title: "Length Requirement", desc: "Papers must be at least 10 pages in length. Short papers will not be accepted.", highlight: true },
                { title: "Formatting", desc: "Follow the standard Springer format for conference proceedings." },
                { title: "Language", desc: "All papers must be written and presented in English." },
                { title: "Originality", desc: "Submissions must be original and not currently under review elsewhere." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1">
                    <CheckCircle className={`${item.highlight ? "text-purple-600" : "text-green-500"} group-hover:scale-110 transition-transform`} size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Dates (Spans 5 cols) */}
          <div className="lg:col-span-5 p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-50 to-purple-50 border border-purple-100 shadow-xl relative overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-shadow">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                <Calendar className="text-indigo-600" /> Important Dates
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-300 before:via-purple-200 before:to-transparent">
                {[
                  { event: "Paper Submission", date: "Dec 10, 2026", active: true },
                  { event: "Acceptance Notification", date: "Feb 04, 2027", active: false },
                  { event: "Registration Deadline", date: "Feb 10, 2027", active: false },
                  { event: "Camera-Ready Paper", date: "Feb 20, 2027", active: false },
                ].map((date, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className={`flex items-center justify-center w-5 h-5 rounded-full border-4 border-white ${date.active ? 'bg-indigo-600 shadow-md' : 'bg-purple-300'} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300 group-hover:bg-indigo-500`} />
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-2xl bg-white border border-white group-hover:border-indigo-100 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                      <p className={`font-bold ${date.active ? 'text-indigo-700' : 'text-gray-700'}`}>{date.date}</p>
                      <p className="text-sm text-gray-500 mt-1">{date.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>


      </Container>
    </div>
  );
}
