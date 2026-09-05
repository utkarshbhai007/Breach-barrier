import React from 'react';
import { Shield, Lock, Cpu, Server, CheckCircle2 } from 'lucide-react';

export default function TrustedBuilders() {
  const logos = [
    { name: 'MICROSOFT SENTINEL', tag: 'SIEM' },
    { name: 'CROWDSTRIKE FALCON', tag: 'EDR' },
    { name: 'VANTA COMPLIANCE', tag: 'AUTOMATION' },
    { name: 'AWS SECURITY HUB', tag: 'CLOUD' },
    { name: 'NESSUS PRO', tag: 'VULN SCAN' },
    { name: 'ISO 27001 / SOC 2', tag: 'AUDIT' },
  ];

  return (
    <section className="border-b border-[#D6D0C2] bg-[#EAE7E0] py-12 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        {/* Header Tag */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-black uppercase tracking-widest">
            TRUSTED BY BUILDERS &amp; ENTERPRISE ECOSYSTEM
          </span>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-[#D6D0C2] divide-y sm:divide-y-0 sm:divide-x divide-[#D6D0C2] bg-[#F2EFE9]">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="p-6 text-center flex flex-col justify-center items-center space-y-1 hover:bg-white transition-colors group cursor-default"
            >
              <div className="font-mono-code text-xs font-black text-black uppercase tracking-tight group-hover:text-[#7C3AED] transition-colors">
                {logo.name}
              </div>
              <div className="font-mono-code text-[9px] text-slate-400 font-bold uppercase">
                {logo.tag}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
