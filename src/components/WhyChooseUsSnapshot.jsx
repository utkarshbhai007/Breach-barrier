import React from 'react';
import { Target, ShieldCheck, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyChooseUsSnapshot() {
  const topReasons = [
    {
      num: '01',
      title: 'BUSINESS-FOCUSED SECURITY',
      desc: "We don't just find risks — we actively help you reduce them to protect revenue, customer trust, and operational continuity.",
      icon: Target,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      tag: 'REVENUE PROTECTION',
    },
    {
      num: '02',
      title: 'PROACTIVE SOC DEFENSE',
      desc: 'We work around the clock to detect and contain threats rapidly before they impact infrastructure or users.',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      tag: 'RAPID CONTAINMENT',
    },
    {
      num: '03',
      title: 'TRANSPARENT COLLABORATION',
      desc: 'Actionable executive reporting and direct senior engineer access with zero vendor jargon or unnecessary complexity.',
      icon: MessageSquare,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      tag: 'DIRECT ACCESS',
    },
  ];

  return (
    <section className="relative border-b border-[#D6D0C2] bg-[#EAE7E0] py-14 px-4 sm:px-8 overflow-hidden">
      {/* Subtle tech background grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, #EAE7E0 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-[1400px] mx-auto space-y-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#6D28D9]" />
            <span className="text-xs font-bold text-[#0F172A] uppercase tracking-widest">
              WHY CHOOSE US // CORE ADVANTAGES
            </span>
          </div>
          <Link to="/about" className="text-xs text-[#6D28D9] font-bold hover:underline flex items-center gap-1">
            <span>EXPLORE ALL 6 PILLARS ON ABOUT PAGE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Top Cards Grid with Image Backgrounds & Light Glassmorphic Overlays */}
        <div className="grid md:grid-cols-3 gap-6">
          {topReasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="group relative border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#6D28D9] transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 min-h-[220px]"
              >
                {/* Background Image Layer with Zoom Effect */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Clean Light Theme Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/94 to-white/80 backdrop-blur-[1px]" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                    <span className="text-xs font-black text-[#6D28D9] font-mono">REASON // {r.num}</span>
                    <span className="px-2 py-0.5 text-[9px] font-bold text-slate-600 bg-slate-100 rounded-full border border-slate-200 uppercase font-mono">
                      {r.tag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6D28D9] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading text-sm sm:text-base font-bold text-[#0F172A] uppercase tracking-tight group-hover:text-[#6D28D9] transition-colors leading-tight">
                        {r.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal pt-1">
                      {r.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="relative z-10 pt-4 border-t border-slate-100/90 flex items-center justify-between mt-3 text-[11px] font-bold text-slate-400 group-hover:text-[#6D28D9] transition-colors">
                  <span>ENTERPRISE GUARANTEE</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
