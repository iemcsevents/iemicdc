"use client";

import React, { useState } from "react";
import { Landmark, Copy, Check, QrCode } from "lucide-react";
import Image from "next/image";

type CopyFieldProps = {
  label: string;
  value: string;
  fullWidth?: boolean;
};

const CopyField = ({ label, value, fullWidth = false }: CopyFieldProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`space-y-2 ${fullWidth ? 'md:col-span-2' : ''}`}>
      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest pl-1">{label}</p>
      <div 
        onClick={handleCopy}
        className="flex items-center justify-between gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_20px_-5px_rgba(168,85,247,0.3)] hover:border-purple-400/50 rounded-2xl cursor-pointer transition-all duration-300 group hover:-translate-y-0.5"
        title="Click to copy"
      >
        <p className="text-[15px] font-bold text-white tracking-tight truncate">{value}</p>
        <div className="shrink-0 p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/20 transition-colors">
          {copied ? (
            <Check size={18} className="text-green-400" />
          ) : (
            <Copy size={18} className="text-gray-400 group-hover:text-purple-300 transition-colors" />
          )}
        </div>
      </div>
    </div>
  );
};

export default function PaymentDetails() {
  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-700/50 mb-20 p-10 md:p-16 relative overflow-hidden text-white">
      
      {/* Dark glow effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="flex items-center gap-5 mb-10 pb-8 border-b border-gray-700/50 relative z-10">
        <div className="p-4 bg-white/10 rounded-2xl text-purple-400 shadow-sm border border-white/10 shrink-0">
          <Landmark size={28} strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Payment Terminal</h2>
          <p className="text-gray-400 mt-1 font-medium text-[15px]">Securely copy details below to complete your transfer</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        {/* Bank Details Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 h-fit">
          <CopyField label="Beneficiary / In Favour Of" value="Institute of Engineering and Management Trust" fullWidth />
          <CopyField label="Bank Name" value="Indian Overseas Bank" />
          <CopyField label="Branch" value="Sector V, Kolkata" />
          <CopyField label="A/C No" value="164201000000488" />
          <CopyField label="IFSC Code" value="IOBA0001642" />
        </div>

        {/* QR Code Section */}
        <div className="lg:w-[320px] shrink-0 bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden group hover:bg-white/10 transition-colors duration-300">
          
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[40px] pointer-events-none"></div>

          <div className="flex items-center justify-center gap-2 mb-2 relative z-10">
            <QrCode size={20} strokeWidth={2} className="text-purple-400" />
            <h3 className="font-extrabold tracking-wide text-lg text-white">Scan to Pay</h3>
          </div>
          <p className="text-[11px] text-purple-300/70 mb-6 uppercase tracking-widest font-bold relative z-10">UPI (Indian Payments)</p>
          
          <div className="relative w-48 h-48 bg-white/10 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.2)] border border-white/20 p-3 relative z-10 group-hover:scale-105 transition-transform duration-500">
            <Image 
              src="/images/indian_payments_qr.png" 
              alt="UPI QR Code" 
              fill 
              className="object-contain p-3"
              unoptimized
            />
          </div>
        </div>
      </div>

    </div>
  );
}
