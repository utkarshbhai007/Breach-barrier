import React from 'react';
import { ShieldCheck, Lock, FileCheck, Clock, Award, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyNeedCybersecurity() {
  const outcomes = [
    { title: "PROTECT SENSITIVE DATA", desc: "Shield intellectual property, financial records, and confidential customer databases from exfiltration.", icon: Lock },
    { title: "PREVENT DAMAGE EARLY", desc: "Catch warning signs and stop zero-day ransomware before it encrypts enterprise assets.", icon: ShieldCheck },
    { title: "MEET COMPLIANCE", desc: "Maintain continuous audit readiness for ISO 27001, SOC 2, HIPAA, and Canadian privacy laws.", icon: FileCheck },
    { title: "MINIMIZE DOWNTIME", desc: "Sub-15 minute threat containment ensures continuous business operational continuity.", icon: Clock },
    { title: "IMPROVE CUSTOMER TRUST", desc: "Demonstrate enterprise-grade security posture to enterprise buyers and board members.", icon: Award },
  ];

  return (
    <section className="relative border-b border-[#D4D4D8] bg-[#F8FAFC] py-14 px-4 sm:px-8 overflow-hidden">
      {/* Subtle high-tech cyber pattern watermark */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#6D28D9 1px, transparent 1px), radial-gradient(#0F172A 1px, #F8FAFC 1px)`,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />

      <div className="max-w-[1400px] mx-auto space-y-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#6D28D9] animate-ping" />
            <span className="text-xs font-bold text-[#0F172A] uppercase tracking-widest">
              WHY BUSINESSES NEED CYBERSECURITY // THREAT REALITY
            </span>
          </div>
        </div>

        {/* Intro Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-center">
            <h2 className="font-brutal text-3xl sm:text-5xl font-black text-[#0F172A] uppercase tracking-tight leading-none">
              EVERY ORGANIZATION<br />
              <span className="text-[#6D28D9]">IS A TARGET.</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Cyberattacks are more frequent, costly, and sophisticated than ever — from ransomware and phishing to data breaches and insider threats. Continuous 24×7 protection isn't optional anymore.
            </p>
          </div>

          {/* High-Tech Partner Callout Card with Image Background & Light Glass Overlay */}
          <div className="lg:col-span-6 relative rounded-2xl border border-slate-300/80 overflow-hidden shadow-sm p-7 flex flex-col justify-between space-y-4">
            {/* Background Image: Modern Cyber Data Center Infrastructure */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Cyber Infrastructure & SOC Operations"
                className="w-full h-full object-cover"
              />
              {/* Light Glassmorphic Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-purple-50/85 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#6D28D9] uppercase tracking-wider font-mono-code flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  // YOUR TRUSTED CYBERSECURITY PARTNER
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-100/90 border border-emerald-300 rounded-full font-mono">
                  24×7 ACTIVE SOC
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans font-normal">
                Breach Barrier helps businesses of every size — startups, SMEs, healthcare providers, financial institutions, and enterprises — strengthen their security posture through proactive, affordable cybersecurity solutions, so you can focus on growth instead of threats.
              </p>
            </div>

            <div className="relative z-10 pt-3 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-slate-600">
              <span className="flex items-center gap-1.5 text-[#6D28D9]">
                ✓ Proactive Threat Containment
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                ✓ Sub-15 Min Incident SLA
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                ✓ Continuous Compliance
              </span>
            </div>
          </div>

        </div>

        {/* 5 Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 border border-[#D4D4D8] divide-y sm:divide-y-0 sm:divide-x divide-[#D4D4D8] bg-white rounded-xl overflow-hidden shadow-xs">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white hover:bg-purple-50/40 transition-colors space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 border border-black flex items-center justify-center bg-[#F1F5F9] group-hover:bg-[#6D28D9] group-hover:text-white transition-colors text-[#0F172A]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xs sm:text-sm font-bold text-[#0F172A] uppercase tracking-tight group-hover:text-[#6D28D9] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
