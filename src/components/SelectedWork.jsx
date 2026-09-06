import React from 'react';
import { ArrowRight, Shield, AlertOctagon, Bug, Globe, Scan, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SelectedWork() {
  const categories = [
    {
      categoryName: 'Category 1: Managed Defense (Protect & Respond)',
      categoryTag: 'Managed Defense',
      categoryDesc: '24/7 continuous threat monitoring, rapid containment, and digital forensics.',
      services: [
        {
          code: 'SVC 01',
          title: 'Security Operations Center (SOC) & MDR',
          tagline: 'True 24/7 Threat Hunting & Neutralization.',
          path: '/services/soc-mdr',
          image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=800&q=80',
          icon: Shield,
          deliverables: [
            '24/7/365 Network & Endpoint Monitoring',
            '15-Minute Critical Incident Response SLA',
            'Automated Threat Containment (MDR)',
            'Monthly Executive Security Dashboards',
          ],
        },
        {
          code: 'SVC 02',
          title: 'Incident Response (IR) & Digital Forensics',
          tagline: 'Your Digital Fire Department.',
          path: '/services/incident-response',
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
          icon: AlertOctagon,
          deliverables: [
            'Zero-Day Retainer Contracts',
            'Rapid Ransomware Containment',
            'Root-Cause Analysis & Forensics',
            'Post-Breach Recovery Assistance',
          ],
        },
      ],
    },
    {
      categoryName: 'Category 2: Offensive Security (Test & Prevent)',
      categoryTag: 'Offensive Security',
      categoryDesc: 'Proactive adversary emulation, attack surface exposure mapping, and risk prioritization.',
      services: [
        {
          code: 'SVC 03',
          title: 'Penetration Testing (VAPT)',
          tagline: 'Find Your Weak Spots Before Hackers Do.',
          path: '/services/pentesting',
          image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
          icon: Bug,
          deliverables: [
            'Web & Mobile Application Testing',
            'Internal & External Network Pen-Testing',
            'Actionable Technical Remediation Guides',
            'Board-Level Executive Risk Reports',
          ],
        },
        {
          code: 'SVC 04',
          title: 'Attack Surface Management (ASM)',
          tagline: 'See Your Business Through an Attacker’s Eyes.',
          path: '/services/asm',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
          icon: Globe,
          deliverables: [
            'Continuous External Asset Discovery',
            'Dark Web Credential Leak Monitoring',
            'Shadow IT Detection',
            'Real-time Exposure Alerts',
          ],
        },
        {
          code: 'SVC 05',
          title: 'Vulnerability Management',
          tagline: 'Proactive Patching & Risk Prioritization.',
          path: '/services/vulnerability-management',
          image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
          icon: Scan,
          deliverables: [
            'Automated Internal & Cloud Scanning',
            'Risk-Based Patch Prioritization',
            'Compliance-driven Vulnerability Tracking',
          ],
        },
      ],
    },
  ];

  return (
    <section className="border-b border-[#D6D0C2] dark:border-[#262736] bg-[#EAE7E0] dark:bg-[#0E0F17] py-10 sm:py-14 px-4 sm:px-8 transition-colors duration-200" id="services">
      <div className="max-w-[1400px] mx-auto space-y-12">

        {/* Header Tag & Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D6D0C2] dark:border-[#262736] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] dark:bg-[#EF4444] animate-pulse" />
              <span className="text-xs font-bold text-[#DC2626] dark:text-[#EF4444] uppercase tracking-wider font-sans">
                CORE CAPABILITIES • BREACHBARRIER SECURITY
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0F172A] dark:text-white font-heading">
              ENTERPRISE SECURITY SERVICES
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans max-w-2xl leading-relaxed">
              Comprehensive 24/7 defensive monitoring combined with rigorous offensive penetration testing. Engineered to eliminate vulnerabilities before adversaries can exploit them.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="cursor-target self-start md:self-auto px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] dark:bg-[#EF4444] dark:hover:bg-[#DC2626] text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-2 shrink-0 font-sans"
          >
            <span>GET CUSTOM SOW</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Categories Loop */}
        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-5">
            
            {/* Category Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white/70 dark:bg-[#151722]/80 backdrop-blur-sm border border-slate-200 dark:border-[#262838] px-5 py-3 rounded-2xl">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-lg bg-red-100 dark:bg-red-950/60 text-[#DC2626] dark:text-[#EF4444] font-bold text-xs uppercase tracking-wider border border-red-200 dark:border-red-900/50">
                  {cat.categoryTag}
                </span>
                <h3 className="font-heading text-sm sm:text-base font-bold text-[#0F172A] dark:text-white uppercase tracking-tight">
                  {cat.categoryName}
                </h3>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                {cat.categoryDesc}
              </span>
            </div>

            {/* Services Grid */}
            <div className={`grid grid-cols-1 ${cat.services.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-5`}>
              {cat.services.map((s, sIdx) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={sIdx}
                    to={s.path}
                    className="group relative bg-white dark:bg-[#13141E] border border-slate-200 dark:border-[#26283A] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#DC2626] dark:hover:border-[#EF4444] transition-all duration-300 flex flex-col justify-between p-6 cursor-target"
                  >
                    {/* Background Visual Layer */}
                    <div className="absolute inset-0 z-0 overflow-hidden opacity-10 dark:opacity-20 group-hover:opacity-15 dark:group-hover:opacity-25 transition-opacity">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 space-y-4">
                      {/* Top Bar: Icon + Code */}
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/40 flex items-center justify-center text-[#DC2626] dark:text-[#EF4444] group-hover:bg-[#DC2626] group-hover:text-white dark:group-hover:bg-[#EF4444] dark:group-hover:text-black transition-colors shadow-xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {s.code}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-1.5">
                        <h4 className="font-heading text-base sm:text-lg font-bold text-[#0F172A] dark:text-white group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors leading-snug">
                          {s.title}
                        </h4>
                        <p className="text-xs font-semibold text-[#DC2626] dark:text-[#EF4444] italic font-sans">
                          "{s.tagline}"
                        </p>
                      </div>

                      {/* Key Deliverables Bullet Points */}
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-sans">
                          KEY DELIVERABLES:
                        </div>
                        <ul className="space-y-1.5">
                          {s.deliverables.map((d, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 font-sans leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626] dark:text-[#EF4444] shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-5">
                      <span className="text-xs font-sans font-bold text-slate-500 dark:text-slate-400 group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors">
                        EXPLORE SERVICE CAPABILITY
                      </span>
                      <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-[#DC2626] dark:group-hover:bg-[#EF4444] group-hover:text-white dark:group-hover:text-black flex items-center justify-center text-slate-500 dark:text-slate-400 transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
