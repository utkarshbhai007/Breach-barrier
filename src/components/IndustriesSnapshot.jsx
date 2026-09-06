import React from 'react';
import { 
  Hospital, 
  Landmark, 
  Cloud, 
  Factory, 
  GraduationCap, 
  ShoppingCart, 
  Building2, 
  Store, 
  ArrowUpRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IndustriesSnapshot() {
  const row1Industries = [
    {
      id: '001',
      colSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
      title: 'Healthcare',
      category: 'PATIENT DATA SHIELD',
      desc: 'Protect patient EHR records & maintain continuous HIPAA/PIPEDA compliance.',
      chips: ['HIPAA', 'EHR ENCRYPT', 'IoMT DEFENSE'],
      icon: Hospital,
      path: '/industries',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: '002',
      colSpan: 'col-span-12 md:col-span-6 lg:col-span-5',
      featured: true,
      title: 'Financial Services',
      category: 'FINANCIAL FRAUD DEFENSE',
      desc: 'Safeguard banking APIs & eliminate unauthorized wire fraud and BEC risk.',
      chips: ['FINTECH APIS', 'WIRE SHIELD', 'SOC 2 TYPE II'],
      icon: Landmark,
      path: '/industries',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: '003',
      colSpan: 'col-span-12 md:col-span-12 lg:col-span-3',
      title: 'Technology & SaaS',
      category: 'SECURE CLOUD PLATFORMS',
      desc: '24×7 multi-tenant cloud threat visibility & CI/CD pipeline defense.',
      chips: ['AWS / AZURE', 'K8S CI/CD', 'VANTA'],
      icon: Cloud,
      path: '/industries',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80',
    },
  ];

  const row2Industries = [
    {
      id: '004',
      colSpan: 'col-span-12 sm:col-span-6 lg:col-span-3',
      title: 'Manufacturing & OT',
      category: 'CRITICAL OT PROTECTION',
      desc: 'Protect industrial SCADA networks and prevent operational downtime.',
      chips: ['ICS / SCADA', 'AIR-GAPPED', '0-DOWNTIME'],
      icon: Factory,
      path: '/industries',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: '005',
      colSpan: 'col-span-12 sm:col-span-6 lg:col-span-2',
      title: 'Education',
      category: 'CAMPUS DEFENSE',
      desc: 'Secure portals, student data, and research IP.',
      chips: ['RESEARCH IP', 'SSO'],
      icon: GraduationCap,
      path: '/industries',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: '006',
      colSpan: 'col-span-12 sm:col-span-6 lg:col-span-2',
      title: 'Retail & E-Commerce',
      category: 'PAYMENT SECURITY',
      desc: 'Protect customer payment databases (PCI-DSS) & POS.',
      chips: ['PCI-DSS', 'WAF'],
      icon: ShoppingCart,
      path: '/industries',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: '007',
      colSpan: 'col-span-12 sm:col-span-6 lg:col-span-2',
      title: 'Government & Public',
      category: 'CIVIC RESILIENCE',
      desc: 'Defend public infrastructure from nation-state threats.',
      chips: ['ZERO TRUST', 'APT'],
      icon: Building2,
      path: '/industries',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: '008',
      colSpan: 'col-span-12 sm:col-span-6 lg:col-span-3',
      title: 'Small & Medium Business',
      category: 'AFFORDABLE ENTERPRISE DEFENSE',
      desc: 'Enterprise 24×7 SOC & MDR defense tailored for growing companies.',
      chips: ['24×7 SOC', 'ENTERPRISE MDR', 'vCISO'],
      icon: Store,
      path: '/industries',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80',
    },
  ];

  return (
    <section className="relative border-b border-[#D6D0C2] bg-[#F2EFE9] py-8 sm:py-10 px-4 sm:px-8 overflow-hidden" id="industries">
      {/* Subtle background tech grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#6D28D9 1px, transparent 1px), radial-gradient(#0F172A 1px, #F2EFE9 1px)`,
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 14px 14px'
        }}
      />

      <div className="max-w-[1400px] mx-auto space-y-5 relative z-10">
        
        {/* Header Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6D28D9]" />
            <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider font-sans">
              Industries We Serve Snapshot • 8 Verticals
            </span>
          </div>
          <Link to="/industries" className="text-xs text-[#DC2626] font-bold hover:underline flex items-center gap-1">
            <span>VIEW ALL INDUSTRIES</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetrical Bento Grid: Row 1 (3 Variable Width Cards) */}
        <div className="grid grid-cols-12 gap-3.5 sm:gap-4">
          {row1Industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Link
                key={idx}
                to={ind.path}
                className={`cursor-target group relative bg-white dark:bg-[#13141F] border border-slate-200/90 dark:border-[#27293D] rounded-[22px] p-4.5 sm:p-5 flex flex-col justify-between space-y-3.5 hover:shadow-xl hover:border-[#DC2626] dark:hover:border-[#DC2626] hover:-translate-y-1 transition-all duration-300 overflow-hidden ${ind.colSpan}`}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/94 to-white/75 dark:from-[#13141F] dark:via-[#13141F]/94 dark:to-[#13141F]/75 backdrop-blur-[1px]" />
                </div>

                <div className="relative z-10 space-y-2.5">
                  {/* Top Bar: Domain Icon in Rounded Box + Circular Arrow */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-red-50/80 dark:bg-red-950/40 border border-red-100 dark:border-red-900/40 flex items-center justify-center text-[#DC2626] dark:text-[#EF4444] group-hover:bg-[#DC2626] group-hover:text-white group-hover:border-[#DC2626] transition-all duration-300">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-300 group-hover:bg-[#DC2626] group-hover:text-white group-hover:border-[#DC2626] transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title, Category & Description */}
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-[#0F172A] dark:text-white tracking-tight group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors leading-tight">
                      {ind.title}
                    </h3>
                    <div className="text-[10px] font-bold text-[#DC2626] dark:text-[#EF4444] uppercase tracking-wider">
                      {ind.category}
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal pt-0.5 line-clamp-2">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                {/* Divider & Tag Badges */}
                <div className="relative z-10 pt-2.5 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {ind.chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 text-[9px] font-bold tracking-wider text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 rounded-full border border-slate-200/80 dark:border-slate-700/80 uppercase group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold hidden sm:inline">
                    //{ind.id}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Asymmetrical Bento Grid: Row 2 (5 Variable Width Cards) */}
        <div className="grid grid-cols-12 gap-3.5 sm:gap-4">
          {row2Industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Link
                key={idx}
                to={ind.path}
                className={`cursor-target group relative bg-white dark:bg-[#13141F] border border-slate-200/90 dark:border-[#27293D] rounded-[22px] p-4 sm:p-4.5 flex flex-col justify-between space-y-3 hover:shadow-xl hover:border-[#DC2626] dark:hover:border-[#DC2626] hover:-translate-y-1 transition-all duration-300 overflow-hidden ${ind.colSpan}`}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/94 to-white/75 dark:from-[#13141F] dark:via-[#13141F]/94 dark:to-[#13141F]/75 backdrop-blur-[1px]" />
                </div>

                <div className="relative z-10 space-y-2">
                  {/* Top Bar: Domain Icon in Rounded Box + Circular Arrow */}
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-red-50/80 dark:bg-red-950/40 border border-red-100 dark:border-red-900/40 flex items-center justify-center text-[#DC2626] dark:text-[#EF4444] group-hover:bg-[#DC2626] group-hover:text-white group-hover:border-[#DC2626] transition-all duration-300">
                      <Icon className="w-4.5 h-4.5 stroke-[1.8]" />
                    </div>

                    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-300 group-hover:bg-[#DC2626] group-hover:text-white group-hover:border-[#DC2626] transition-all duration-300">
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title, Category & Description */}
                  <div className="space-y-0.5">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] dark:text-white tracking-tight group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors leading-tight">
                      {ind.title}
                    </h3>
                    <div className="text-[9.5px] font-bold text-[#DC2626] dark:text-[#EF4444] uppercase tracking-wider truncate">
                      {ind.category}
                    </div>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug font-normal line-clamp-2">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                {/* Divider & Tag Badges */}
                <div className="relative z-10 pt-2 border-t border-slate-200/70 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1">
                    {ind.chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-1.5 py-0.5 text-[8.5px] font-bold tracking-wider text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 rounded-full border border-slate-200/80 dark:border-slate-700/80 uppercase group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors"
                      >
                        {chip}
                      </span>
                    ))}
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
