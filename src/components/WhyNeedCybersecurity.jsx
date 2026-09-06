import React from 'react';
import { ShieldCheck, Lock, FileCheck, Zap, Award } from 'lucide-react';

export default function WhyNeedCybersecurity() {
  const outcomes = [
    { title: "PROTECT SENSITIVE DATA", desc: "Shield intellectual property, financial records, and confidential customer databases from exfiltration.", icon: Lock },
    { title: "PREVENT DAMAGE EARLY", desc: "Catch warning signs and stop zero-day ransomware before it encrypts enterprise assets.", icon: ShieldCheck },
    { title: "MEET COMPLIANCE", desc: "Maintain continuous audit readiness for ISO 27001, SOC 2, HIPAA, and Canadian privacy laws.", icon: FileCheck },
    { title: "MINIMIZE DOWNTIME", desc: "Rapid automated threat containment ensures continuous business operational continuity.", icon: Zap },
    { title: "IMPROVE CUSTOMER TRUST", desc: "Demonstrate enterprise-grade security posture to enterprise buyers and board members.", icon: Award },
  ];

  return (
    <section className="relative border-b border-[#D6D0C2] dark:border-[#262736] bg-[#F2EFE9] dark:bg-[#0B0C12] py-14 px-4 sm:px-8 overflow-hidden transition-colors duration-200">
      <div className="max-w-[1400px] mx-auto space-y-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] dark:bg-[#EF4444] animate-pulse" />
            <span className="text-xs font-bold text-[#DC2626] dark:text-[#EF4444] uppercase tracking-wider font-sans">
              Why Businesses Need Cybersecurity • Threat Reality
            </span>
          </div>
        </div>

        {/* Intro Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-center">
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#0F172A] dark:text-white uppercase tracking-tight leading-none">
              EVERY ORGANIZATION<br />
              <span className="text-[#DC2626] dark:text-[#EF4444]">IS A TARGET.</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              Cyberattacks are more frequent, costly, and sophisticated than ever — from ransomware and phishing to data breaches and insider threats. Continuous 24×7 protection isn't optional anymore.
            </p>
          </div>

          {/* High-Tech Partner Callout Card with Image Background */}
          <div className="lg:col-span-6 relative rounded-2xl border border-slate-300/80 dark:border-[#26283A] overflow-hidden shadow-sm p-7 flex flex-col justify-between space-y-4 bg-white dark:bg-[#13141E]">
            {/* Background Image: Modern Cyber Data Center Infrastructure */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Cyber Infrastructure & SOC Operations"
                className="w-full h-full object-cover opacity-15 dark:opacity-20"
              />
            </div>

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 dark:bg-[#1A1C2A] border border-red-200 dark:border-red-900/50 text-xs font-semibold text-[#DC2626] dark:text-[#EF4444] font-sans">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Your Trusted Cybersecurity Partner
                </span>
                <span className="px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 rounded-full font-sans">
                  24×7 Active SOC
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans font-normal">
                BreachBarrier Security helps businesses of every size — startups, SMEs, healthcare providers, financial institutions, and enterprises — strengthen their security posture through proactive, affordable cybersecurity solutions, so you can focus on growth instead of threats.
              </p>
            </div>

            <div className="relative z-10 pt-3 border-t border-slate-200/90 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-[#DC2626] dark:text-[#EF4444]">
                ✓ Proactive Threat Containment
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                ✓ Rapid Incident Containment
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                ✓ Continuous Attack Surface Visibility
              </span>
            </div>
          </div>

        </div>

        {/* 5 Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 border border-[#D6D0C2] dark:border-[#26283A] divide-y sm:divide-y-0 sm:divide-x divide-[#D6D0C2] dark:divide-[#26283A] bg-white dark:bg-[#13141E] rounded-xl overflow-hidden shadow-xs">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-[#13141E] hover:bg-red-50/40 dark:hover:bg-red-950/20 transition-colors space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 border border-slate-300 dark:border-slate-700 flex items-center justify-center bg-[#EAE7E0] dark:bg-slate-800 group-hover:bg-[#DC2626] dark:group-hover:bg-[#EF4444] group-hover:text-white dark:group-hover:text-black transition-colors text-[#0F172A] dark:text-white rounded-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xs sm:text-sm font-bold text-[#0F172A] dark:text-white uppercase tracking-tight group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans font-normal">
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
