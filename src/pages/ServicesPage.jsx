import React, { useState } from 'react';
import { 
  Shield, 
  AlertOctagon, 
  Bug, 
  Globe, 
  Scan, 
  ArrowUpRight, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import InteractiveCyberGridCTA from '../components/InteractiveCyberGridCTA';
import SEO from '../components/SEO';

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    {
      id: 'managed-defense',
      categoryNum: 'Category 1',
      categoryTitle: 'Managed Defense (Protect & Respond)',
      tag: 'Continuous Defense',
      description: '24/7 real-time monitoring, AI-correlated threat intelligence, and sub-second automated host quarantine to stop breaches before business interruption.',
      services: [
        {
          id: 'soc-mdr',
          code: 'SVC 01',
          title: 'Security Operations Center (SOC) & MDR',
          tagline: 'True 24/7 Threat Hunting & Neutralization.',
          path: '/services/soc-mdr',
          sla: '15-Minute Critical SLA',
          coverage: '24/7/365 Continuous Watch',
          icon: Shield,
          image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=800&q=80',
          deliverables: [
            '24/7/365 Network & Endpoint Monitoring',
            '15-Minute Critical Incident Response SLA',
            'Automated Threat Containment (MDR)',
            'Monthly Executive Security Dashboards',
          ],
          deepDiveDesc: 'Our SOC engineers ingest telemetry across your cloud, servers, firewalls, and endpoints into an AI-accelerated SIEM to detect abnormal behavior and neutralize attackers immediately.'
        },
        {
          id: 'incident-response',
          code: 'SVC 02',
          title: 'Incident Response (IR) & Digital Forensics',
          tagline: 'Your Digital Fire Department.',
          path: '/services/incident-response',
          sla: 'Immediate Emergency Triage',
          coverage: 'Zero-Day Retainer Ready',
          icon: AlertOctagon,
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
          deliverables: [
            'Zero-Day Retainer Contracts',
            'Rapid Ransomware Containment',
            'Root-Cause Analysis & Forensics',
            'Post-Breach Recovery Assistance',
          ],
          deepDiveDesc: 'When an active compromise occurs, our rapid deployment forensics squad stops lateral movement, extracts adversary artifacts, and rebuilds your secure operations with forensic proof.'
        },
      ],
    },
    {
      id: 'offensive-security',
      categoryNum: 'Category 2',
      categoryTitle: 'Offensive Security (Test & Prevent)',
      tag: 'Adversary Simulation',
      description: 'Proactive penetration testing, continuous attack surface mapping, and risk-based vulnerability prioritization engineered through the mindset of elite adversaries.',
      services: [
        {
          id: 'pentesting',
          code: 'SVC 03',
          title: 'Penetration Testing (VAPT)',
          tagline: 'Find Your Weak Spots Before Hackers Do.',
          path: '/services/pentesting',
          sla: 'Zero Exploit Overlooked',
          coverage: 'Web, Mobile, Cloud & APIs',
          icon: Bug,
          image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
          deliverables: [
            'Web & Mobile Application Testing',
            'Internal & External Network Pen-Testing',
            'Actionable Technical Remediation Guides',
            'Board-Level Executive Risk Reports',
          ],
          deepDiveDesc: 'Hands-on offensive simulations targeting logic flaws, authentication bypasses, and API vulnerabilities that automated scanners consistently miss.'
        },
        {
          id: 'asm',
          code: 'SVC 04',
          title: 'Attack Surface Management (ASM)',
          tagline: 'See Your Business Through an Attacker’s Eyes.',
          path: '/services/asm',
          sla: 'Continuous Dark Web & Asset Watch',
          coverage: 'External Digital Perimeter',
          icon: Globe,
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
          deliverables: [
            'Continuous External Asset Discovery',
            'Dark Web Credential Leak Monitoring',
            'Shadow IT Detection',
            'Real-time Exposure Alerts',
          ],
          deepDiveDesc: 'Uncover forgotten staging subdomains, exposed developer credentials on dark web forums, and shadow IT infrastructure before threat actors leverage them.'
        },
        {
          id: 'vulnerability-management',
          code: 'SVC 05',
          title: 'Vulnerability Management',
          tagline: 'Proactive Patching & Risk Prioritization.',
          path: '/services/vulnerability-management',
          sla: 'Daily Vulnerability Triage',
          coverage: 'Internal & Multi-Cloud Infrastructure',
          icon: Scan,
          image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
          deliverables: [
            'Automated Internal & Cloud Scanning',
            'Risk-Based Patch Prioritization',
            'Compliance-driven Vulnerability Tracking',
          ],
          deepDiveDesc: 'We cut through scan noise to prioritize the top 5% of vulnerabilities actively exploited in the wild, saving your DevOps and engineering teams hundreds of hours.'
        },
      ],
    },
  ];

  const filteredCategories = categories.filter(cat => {
    if (activeFilter === 'all') return true;
    return cat.id === activeFilter;
  });

  return (
    <div className="bg-[#EAE7E0] dark:bg-[#0A0A0E] text-[#0F172A] dark:text-[#F8FAFC] min-h-screen transition-colors duration-200">
      <SEO
        title="Cybersecurity Services | Breach Barrier Security"
        description="Explore enterprise cybersecurity services by Breach Barrier Security: 24/7 Managed SOC & MDR, VAPT, Incident Response, Forensics, and Attack Surface Management."
        keywords="Cybersecurity Services, Managed SOC, MDR Services, Penetration Testing, VAPT, Incident Response, Attack Surface Management, Vulnerability Management"
        canonicalPath="/services"
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
      />
      
      {/* 1. Hero Section */}
      <PageHero
        tag="All 5 Core Capabilities • BreachBarrier Security"
        title="OUR DEFENSIVE &"
        titleAccent="OFFENSIVE SERVICES."
        pillars={['Managed Defense', 'Offensive Security', '24×7 SOC', '15-Min SLA']}
        description="Comprehensive cybersecurity architecture tailored for modern enterprises. Explore all five core services simultaneously or inspect individual service specifications below."
      />

      {/* 2. Quick Category Filter Bar */}
      <section className="sticky top-[61px] z-40 bg-white/95 dark:bg-[#11121C]/95 backdrop-blur-md border-b border-[#D6D0C2] dark:border-[#262736] py-3.5 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveFilter('all')}
              className={`cursor-target px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-[#DC2626] dark:bg-[#EF4444] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-[#181926] text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-[#202234]'
              }`}
            >
              All 5 Services
            </button>
            <button
              onClick={() => setActiveFilter('managed-defense')}
              className={`cursor-target px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeFilter === 'managed-defense'
                  ? 'bg-[#DC2626] dark:bg-[#EF4444] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-[#181926] text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-[#202234]'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Category 1: Managed Defense (2)</span>
            </button>
            <button
              onClick={() => setActiveFilter('offensive-security')}
              className={`cursor-target px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeFilter === 'offensive-security'
                  ? 'bg-[#DC2626] dark:bg-[#EF4444] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-[#181926] text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-[#202234]'
              }`}
            >
              <Bug className="w-3.5 h-3.5" />
              <span>Category 2: Offensive Security (3)</span>
            </button>
          </div>

          <Link
            to="/contact"
            className="cursor-target self-start sm:self-auto px-4 py-2 bg-[#0F172A] dark:bg-white text-white dark:text-black hover:bg-[#DC2626] dark:hover:bg-[#EF4444] dark:hover:text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors shadow-xs shrink-0"
          >
            <span>REQUEST FULL SOW BRIEFING</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 3. All Services Master View */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-[1400px] mx-auto space-y-16">
        {filteredCategories.map((category) => (
          <div key={category.id} className="space-y-6">
            
            {/* Category Banner */}
            <div className="bg-white dark:bg-[#13141F] border border-slate-200 dark:border-[#26283A] rounded-2xl p-6 sm:p-7 shadow-xs space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-lg bg-red-100 dark:bg-red-950/70 text-[#DC2626] dark:text-[#EF4444] font-bold text-xs uppercase tracking-wider border border-red-200 dark:border-red-900/60">
                    {category.categoryNum}
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-black uppercase text-[#0F172A] dark:text-white tracking-tight">
                    {category.categoryTitle}
                  </h2>
                </div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 font-sans">
                  {category.services.length} Specialized Capabilities
                </span>
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 max-w-4xl leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Services Grid for This Category */}
            <div className={`grid grid-cols-1 ${category.services.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-6`}>
              {category.services.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.id}
                    className="group relative bg-white dark:bg-[#13141E] border border-slate-200 dark:border-[#26283A] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#DC2626] dark:hover:border-[#EF4444] transition-all duration-300 flex flex-col justify-between p-6 sm:p-7"
                  >
                    {/* Background Visual Layer */}
                    <div className="absolute inset-0 z-0 overflow-hidden opacity-10 dark:opacity-20 group-hover:opacity-15 dark:group-hover:opacity-25 transition-opacity">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-5">
                      {/* Top Bar: Icon + Code + SLA */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/40 flex items-center justify-center text-[#DC2626] dark:text-[#EF4444] group-hover:bg-[#DC2626] group-hover:text-white dark:group-hover:bg-[#EF4444] dark:group-hover:text-black transition-colors shadow-xs">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                            {svc.code}
                          </span>
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                            {svc.sla}
                          </span>
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-1.5">
                        <h3 className="font-heading text-xl font-black text-[#0F172A] dark:text-white group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors leading-snug">
                          {svc.title}
                        </h3>
                        <p className="text-sm font-bold text-[#DC2626] dark:text-[#EF4444] italic font-sans">
                          "{svc.tagline}"
                        </p>
                        <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 pt-1 leading-relaxed">
                          {svc.deepDiveDesc}
                        </p>
                      </div>

                      {/* Key Deliverables */}
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                        <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-sans flex items-center justify-between">
                          <span>CORE DELIVERABLES:</span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{svc.coverage}</span>
                        </div>
                        <ul className="space-y-2">
                          {svc.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 leading-snug">
                              <CheckCircle2 className="w-4 h-4 text-[#DC2626] dark:text-[#EF4444] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action CTAs */}
                    <div className="relative z-10 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 mt-6">
                      <Link
                        to={svc.path}
                        className="cursor-target text-xs sm:text-sm font-bold text-[#DC2626] dark:text-[#EF4444] hover:underline flex items-center gap-1.5 font-sans"
                      >
                        <span>VIEW SPEC SHEET</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        to="/contact"
                        className="cursor-target px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] dark:bg-[#EF4444] dark:hover:bg-[#DC2626] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors shadow-xs font-sans"
                      >
                        <span>BOOK CONSULTATION</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </section>

      {/* 4. Bottom Architecture CTA */}
      <InteractiveCyberGridCTA
        title="NEED MULTI-DISCIPLINARY COVERAGE?"
        highlightText="LET'S MAP YOUR DEFENSE MATRIX."
        subtitle="Our Pune SOC architects and Canadian cybersecurity consultants integrate 24/7 MDR, continuous ASM, and regular VAPT pen-testing into a single consolidated agreement."
        buttonText="TALK TO PRINCIPAL SECURITY ARCHITECT"
        buttonLink="/contact"
      />

    </div>
  );
}
