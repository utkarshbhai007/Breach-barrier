import React from 'react';
import { ArrowRight, Shield, Activity, Bug, AlertOctagon, Scan, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SelectedWork() {
  const services = [
    {
      code: 'SOC 01',
      title: 'SECURITY OPERATIONS CENTER (SOC)',
      subtitle: '24×7 real-time monitoring & continuous SIEM threat triage',
      path: '/services/soc',
      image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=800&q=80',
      icon: Shield,
    },
    {
      code: 'MDR 02',
      title: 'MANAGED DETECTION & RESPONSE (MDR)',
      subtitle: 'Active threat hunting & automated endpoint isolation',
      path: '/services/mdr',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      icon: Activity,
    },
    {
      code: 'PT 03',
      title: 'PENETRATION TESTING',
      subtitle: 'Offensive ethical hacking & zero-day vulnerability discovery',
      path: '/services/pentesting',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      icon: Bug,
    },
    {
      code: 'DFIR 04',
      title: 'INCIDENT RESPONSE & DIGITAL FORENSICS',
      subtitle: 'Sub-second breach containment & deep root-cause investigation',
      path: '/services/incident-response',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      icon: AlertOctagon,
    },
    {
      code: 'VM 05',
      title: 'VULNERABILITY MANAGEMENT',
      subtitle: 'Continuous cloud & infrastructure scanning with smart prioritization',
      path: '/services/vulnerability-management',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      icon: Scan,
    },
    {
      code: 'COMP 06',
      title: 'COMPLIANCE READINESS',
      subtitle: 'Audit-ready security policies for ISO 27001, SOC 2, HIPAA & PIPEDA',
      path: '/services/compliance',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      icon: FileCheck,
    },
  ];

  return (
    <section className="border-b border-[#D6D0C2] bg-[#EAE7E0] py-8 sm:py-10 px-4 sm:px-8" id="services">
      <div className="max-w-[1400px] mx-auto space-y-6">

        {/* Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6D28D9]" />
            <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider font-sans">
              Services Snapshot • 6 Core Managed Capabilities
            </span>
          </div>
          <Link to="/contact" className="text-xs text-[#6D28D9] font-bold hover:underline flex items-center gap-1 font-sans">
            <span>GET CUSTOM SOW ↗</span>
          </Link>
        </div>

        {/* 6 Services Grid with Background Images & Light Theme Glass Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Link
                key={idx}
                to={s.path}
                className="group relative bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#6D28D9] transition-all duration-300 flex flex-col justify-between p-6 min-h-[160px]"
              >
                {/* Background Image with Light Gradient Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Clean Light Theme Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80 backdrop-blur-[1px]" />
                </div>

                {/* Card Content Layer */}
                <div className="relative z-10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#6D28D9] group-hover:bg-[#6D28D9] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-sans font-semibold px-2 py-0.5 rounded-md bg-purple-50 text-[#6D28D9] border border-purple-200/60">
                      {s.code}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-xs sm:text-sm font-bold text-[#0F172A] uppercase tracking-tight group-hover:text-[#6D28D9] transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 pt-1 line-clamp-1 font-normal font-sans">
                      {s.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="relative z-10 pt-3 border-t border-slate-100/90 flex items-center justify-between mt-2">
                  <span className="text-[10px] font-sans font-semibold text-slate-500 group-hover:text-[#6D28D9] transition-colors">
                    EXPLORE CAPABILITY
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#6D28D9] group-hover:text-white flex items-center justify-center text-slate-500 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
