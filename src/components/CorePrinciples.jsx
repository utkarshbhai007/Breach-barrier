import React from 'react';
import { Box, Grid, Cpu, Crosshair, Sparkles } from 'lucide-react';

export default function CorePrinciples() {
  const principles = [
    {
      num: '01',
      title: 'FUNCTION OVER FORM',
      icon: Box,
      desc: 'Security operations built to protect. Nothing more. Sub-15 min containment SLA.',
    },
    {
      num: '02',
      title: 'SYSTEMS THINKING',
      icon: Grid,
      desc: 'SIEM. EDR. Cloud logs. Everything is correlated in real time across your stack.',
    },
    {
      num: '03',
      title: 'OFFENSIVE MATRIX',
      icon: Cpu,
      desc: 'Offensive threat simulation, OSCP red teaming, and continuous attack surface testing.',
    },
    {
      num: '04',
      title: 'BOLD CONTRAST',
      icon: Crosshair,
      desc: 'Enterprise-grade protection without the massive capital overhead of building an in-house SOC.',
    },
    {
      num: '05',
      title: 'RAW & AUTHENTIC',
      icon: Sparkles,
      desc: 'No fluff. No vendor lock-in. Guaranteed ISO 27001 and SOC 2 audit readiness.',
    },
  ];

  return (
    <section className="border-b border-[#D4D4D8] bg-[#F4F4F6] py-12 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-black uppercase tracking-widest">
            CORE PRINCIPLES
          </span>
        </div>

        {/* 5-Column Modular Grid with Crosshairs */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border border-[#D4D4D8] bg-white divide-y md:divide-y-0 md:divide-x divide-[#D4D4D8]">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 relative group hover:bg-slate-50 transition-colors flex flex-col justify-between space-y-6"
              >
                {/* Crosshair top corner */}
                <div className="absolute top-2 right-2 font-mono-code text-[10px] text-slate-300 group-hover:text-[#7C3AED]">
                  +
                </div>

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-10 h-10 border border-black flex items-center justify-center bg-slate-50 group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-mono-code text-xs font-black text-black tracking-wider uppercase group-hover:text-[#7C3AED] transition-colors">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="font-mono-code text-[11px] text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="font-mono-code text-[10px] text-slate-400 font-bold">
                  //PRN_{p.num}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
