import React from "react";
import { Container } from "@/components/Container";
import { CreditCard, ShieldCheck, CheckCircle, GraduationCap, Building2, UserCircle, FileText, IndianRupee, Globe, Users } from "lucide-react";
import PaymentDetails from "./PaymentDetails";

export const metadata = {
  title: "Registrations | IEM-ICDC 2027",
  description: "Register for IEM-ICDC 2027. Check registration fees for authors, students, and industry participants, and find payment details.",
};

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

export default function RegistrationsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] text-gray-900 selection:bg-purple-500/30">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/iem.jpeg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-8 backdrop-blur-md">
            <ShieldCheck size={16} /> Secure Registration
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
            Registration & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">Fees</span>
          </h1>
          
          <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Pricing structures for domestic and international participants. Please note that registration links will open soon.
          </p>
          
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full cursor-not-allowed">
            <CreditCard size={20} className="opacity-70" />
            <span className="opacity-90">Registration Coming Soon</span>
          </div>
        </div>
      </div>

      <Container className="relative z-10 py-16">
        
        <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row items-center gap-3 justify-center text-gray-600 bg-purple-50/50 border border-purple-100 rounded-2xl p-4 text-sm font-medium">
          <CheckCircle size={18} className="text-purple-600 shrink-0" />
          <span>Registration is mandatory for all accepted papers. Certificates and conference kits are included.</span>
        </div>

        {/* The Floating Glass Matrix */}
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl border border-gray-200 rounded-[2rem] shadow-sm mb-8 overflow-hidden relative">
          
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-4 p-6 px-10 border-b border-gray-200 bg-gray-50/80">
            <div className="col-span-6 font-bold text-gray-500 uppercase tracking-wider text-xs">
              Registration Category
            </div>
            <div className="col-span-3 flex items-center gap-2 font-bold text-gray-500 uppercase tracking-wider text-xs">
              <IndianRupee size={14} /> Indian (INR)
            </div>
            <div className="col-span-3 flex items-center gap-2 font-bold text-gray-500 uppercase tracking-wider text-xs">
              <Globe size={14} /> International (USD)
            </div>
          </div>

          {/* Data Rows */}
          <div className="flex flex-col">
            {pricingData.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative flex flex-col md:grid md:grid-cols-12 gap-4 p-6 md:px-10 border-b border-gray-100 last:border-b-0 transition-colors duration-300"
                >
                  {/* Sweep Slider Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100 pointer-events-none"></div>

                  <div className="md:col-span-6 flex items-center gap-4 relative z-10">
                    <div className="p-2.5 bg-gray-100 text-gray-500 rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                      <Icon size={20} />
                    </div>
                    <span className="font-semibold text-gray-900 text-[17px] group-hover:text-white transition-colors duration-300">
                      {row.category}
                    </span>
                  </div>
                  
                  <div className="md:col-span-3 flex items-center justify-between md:justify-start relative z-10">
                    <span className="md:hidden text-xs font-bold text-gray-400 uppercase group-hover:text-purple-200 transition-colors">INR</span>
                    <span className="text-xl font-bold text-gray-700 group-hover:text-white transition-colors duration-300">
                      {row.inr}
                      {idx === 4 && <span className="text-sm font-medium opacity-60 ml-1">/ page</span>}
                    </span>
                  </div>
                  
                  <div className="md:col-span-3 flex items-center justify-between md:justify-start relative z-10">
                    <span className="md:hidden text-xs font-bold text-gray-400 uppercase group-hover:text-purple-200 transition-colors">USD</span>
                    <span className="text-xl font-bold text-gray-700 group-hover:text-white transition-colors duration-300">
                      {row.usd}
                      {idx === 4 && <span className="text-sm font-medium opacity-60 ml-1">/ page</span>}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Payment Information Component */}
        <PaymentDetails />

      </Container>
    </div>
  );
}
