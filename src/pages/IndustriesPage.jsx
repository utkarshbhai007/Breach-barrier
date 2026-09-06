import React, { useState, useMemo } from 'react';
import { 
  Hospital, 
  Landmark, 
  Cloud, 
  Factory, 
  GraduationCap, 
  ShoppingCart, 
  Building2, 
  Store, 
  ArrowUpRight, 
  ShieldCheck, 
  AlertTriangle, 
  Shield, 
  Search, 
  CheckCircle2, 
  Zap, 
  Layers,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import InteractiveCyberGridCTA from '../components/InteractiveCyberGridCTA';

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all' or code

  const industries = useMemo(() => [
    {
      id: '01',
      code: 'HLTH',
      title: 'Healthcare & Life Sciences',
      category: 'Critical Infrastructure',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      desc: 'Protect patient electronic health records (EHR), connected medical IoT devices, and ensure strict compliance with HIPAA and Canadian PIPEDA standards.',
      compliance: ['HIPAA', 'PIPEDA', 'HITECH', 'IoMT Security'],
      threats: [
        'Ransomware locking emergency hospital systems',
        'Data exfiltration of patient EHR/EMR records',
        'Compromised IoMT medical equipment & monitors'
      ],
      defense: '24×7 SOC telemetry ingestion, rapid host quarantine, and continuous healthcare compliance audit readiness.',
      highlight: 'Zero clinical operational interruption with rapid automated containment.',
      icon: Hospital,
      metrics: { sla: 'Rapid Response', audits: '100% HIPAA Ready', coverage: '24×7×365' }
    },
    {
      id: '02',
      code: 'FINS',
      title: 'Financial Services & FinTech',
      category: 'High-Value Assets',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      desc: 'Safeguard transactional APIs, customer financial information, banking networks, and eliminate fraud and business email compromise (BEC) risks.',
      compliance: ['PCI-DSS', 'ISO 27001', 'SOC 2 Type II', 'GLBA'],
      threats: [
        'Wire fraud, lookalike spoofing & executive BEC attacks',
        'Zero-day vulnerabilities in payment & banking APIs',
        'Privilege escalation and internal data exfiltration'
      ],
      defense: 'MDR instant containment, regular penetration testing of trading/payment gateways, and continuous ISO 27001 readiness.',
      highlight: 'Automated network isolation stops unauthorized funds transfer attempts instantly.',
      icon: Landmark,
      metrics: { sla: 'Instant Isolation', audits: 'PCI-DSS Validated', coverage: 'Real-time API Watch' }
    },
    {
      id: '03',
      code: 'SAAS',
      title: 'Technology & Cloud SaaS',
      category: 'Cloud Native',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      desc: 'Build and ship secure multi-tenant cloud products with confidence, protecting CI/CD pipelines, source code, and customer cloud environments.',
      compliance: ['SOC 2 (Vanta/Drata)', 'ISO 27001', 'GDPR', 'CIS Benchmarks'],
      threats: [
        'Supply chain vulnerabilities in open-source dependencies',
        'Misconfigured AWS / Azure / GCP cloud storage buckets',
        'Exposed developer API keys and OAuth token replay'
      ],
      defense: 'Continuous vulnerability management, cloud posture audits (CSPM), and automated Vanta/Drata SOC 2 readiness.',
      highlight: 'Continuous CI/CD secret scanning and posture hardening for multi-tenant architectures.',
      icon: Cloud,
      metrics: { sla: 'Continuous Watch', audits: 'Drata / Vanta Sync', coverage: 'Multi-Cloud Native' }
    },
    {
      id: '04',
      code: 'MFG',
      title: 'Manufacturing & Industrial OT',
      category: 'Operational Tech',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      desc: 'Protect industrial control systems (ICS/SCADA), operational technology, proprietary supply chain blueprints, and minimize factory floor downtime.',
      compliance: ['IEC 62443', 'NIST CSF', 'ISO 27001'],
      threats: [
        'OT / IT network bridging lateral movement attacks',
        'Operational extortion ransomware halting assembly lines',
        'Theft of proprietary CAD files & manufacturing IP'
      ],
      defense: 'Air-gapped network penetration testing, micro-segmentation monitoring, and rapid threat response.',
      highlight: 'Air-gapped telemetry inspection preventing factory floor disruptions.',
      icon: Factory,
      metrics: { sla: 'Active Guard', audits: 'OT Hardened', coverage: 'SCADA / ICS Safe' }
    },
    {
      id: '05',
      code: 'EDUC',
      title: 'Education & Research Universities',
      category: 'Higher Education',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      desc: 'Secure university research IP, faculty databases, student portals, and distributed digital learning platforms against credential harvesting.',
      compliance: ['FERPA', 'PIPEDA', 'NIST 800-171'],
      threats: [
        'Sophisticated phishing targeting professors and faculty',
        'Unauthorized student portal credential stuffing',
        'Espionage theft of sponsored research & patent drafts'
      ],
      defense: 'Automated phishing detection, multi-factor authentication enforcement, and central SIEM identity monitoring.',
      highlight: 'Proactive credential leak detection across decentralized campus networks.',
      icon: GraduationCap,
      metrics: { sla: 'Rapid Triage', audits: 'FERPA Ready', coverage: 'Campus-wide SIEM' }
    },
    {
      id: '06',
      code: 'RETL',
      title: 'Retail & E-Commerce Platforms',
      category: 'Consumer Digital',
      image: 'https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=800&q=80',
      desc: 'Protect customer credit card databases (PCI-DSS), online checkout gateways, point-of-sale (POS) systems, and defend against digital e-skimming.',
      compliance: ['PCI-DSS Level 1', 'SOC 2', 'CCPA / GDPR'],
      threats: [
        'Magecart JavaScript e-skimming on checkout pages',
        'Credential stuffing on customer loyalty accounts',
        'POS endpoint malware at physical branch locations'
      ],
      defense: 'Web application firewall (WAF) tuning, payment endpoint vulnerability assessments, and 24×7 SOC surveillance.',
      highlight: 'Zero transaction disruptions during high-traffic Black Friday / Cyber Monday surges.',
      icon: ShoppingCart,
      metrics: { sla: 'Zero Latency', audits: 'PCI-DSS L1', coverage: 'Checkout Guard' }
    },
    {
      id: '07',
      code: 'GOVT',
      title: 'Government & Public Sector',
      category: 'Public Services',
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
      desc: 'Strengthen digital resilience and public trust with hardened defenses against nation-state threat actors and persistent targeted attacks.',
      compliance: ['NIST 800-53', 'ISO 27001', 'Zero Trust Mandate'],
      threats: [
        'Advanced Persistent Threats (APTs) targeting civil records',
        'DDoS extortion attacks on public citizen service portals',
        'Compromised contractor credentials accessing gov databases'
      ],
      defense: 'Zero-trust architecture implementation, deep forensics & root-cause investigation, and emergency containment.',
      highlight: 'State-level threat actor detection rules and encrypted audit telemetry.',
      icon: Building2,
      metrics: { sla: 'Priority Defense', audits: 'Zero-Trust Audited', coverage: '24×7 SOC Patrol' }
    },
    {
      id: '08',
      code: 'SMB',
      title: 'Small & Medium Businesses (SMB)',
      category: 'Growing Enterprise',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      desc: 'Enterprise-grade protection tailored for growing organizations — full 24×7 SOC and MDR without the six-figure overhead of building an in-house team.',
      compliance: ['Cyber Insurance Ready', 'CIS Controls', 'SOC 2 Ready'],
      threats: [
        'Targeted phishing emails & fake vendor invoice scams',
        'Unpatched firewall & VPN appliance zero-day exploits',
        'Data hostage ransomware demanding crippling payments'
      ],
      defense: 'Remote managed SOC + MDR starting at flat affordable tiers, monthly executive reports, and virtual CISO advisory.',
      highlight: '80% cost savings compared to hiring 5 in-house cybersecurity specialists.',
      icon: Store,
      metrics: { sla: 'Turnkey SOC', audits: 'Insurance Qualified', coverage: 'Tier-3 Engineering' }
    },
  ], []);

  // Filtered list based on search or active tab
  const filteredIndustries = useMemo(() => {
    return industries.filter(ind => {
      const matchesSearch = 
        ind.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.compliance.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        ind.threats.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTab = activeTab === 'all' || ind.code === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [industries, searchQuery, activeTab]);

  const activeInd = industries[selectedIndustry] || industries[0];
  const ActiveIcon = activeInd.icon;

  return (
    <div className="bg-[#EAE7E0] text-[#0F172A] min-h-screen">
      
      {/* 1. Header Hero with Unified Background Animation & Text */}
      <PageHero
        tag="Sector Specifications • 8 Specialized Domains"
        title="INDUSTRIES WE"
        titleAccent="SERVE."
        pillars={['Healthcare', 'FinTech', 'Cloud SaaS', 'Manufacturing']}
        description="From healthcare and high-growth SaaS to critical manufacturing and financial services, BreachBarrier Security engineers custom-tailored cybersecurity defense matrices for each industry's regulatory and threat landscape."
      />

      {/* 2. Key Industry Matrix Metrics Strip */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="sm:border-r border-slate-200 pr-2">
            <div className="text-xl sm:text-2xl font-black text-[#6D28D9]">8 DOMAINS</div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tailored Threat Models</div>
          </div>
          <div className="sm:border-r border-slate-200 pr-2">
            <div className="text-xl sm:text-2xl font-black text-emerald-600">100% READY</div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Audit & Compliance Pass</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#6D28D9]">24×7×365</div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tier-3 Active Monitoring</div>
          </div>
        </div>
      </div>

      {/* 3. Interactive Industry Hub Section */}
      <section className="py-10 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto space-y-8">
        
        {/* Navigation & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          
          {/* Quick Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`cursor-target px-3.5 py-2 rounded-xl font-bold uppercase transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#6D28D9] text-white shadow-xs'
                  : 'text-slate-600 hover:text-black hover:bg-slate-100'
              }`}
            >
              ALL INDUSTRIES ({industries.length})
            </button>
            {industries.map((ind) => (
              <button
                key={ind.code}
                onClick={() => {
                  setActiveTab(ind.code);
                  const idx = industries.findIndex(i => i.code === ind.code);
                  if (idx !== -1) setSelectedIndustry(idx);
                }}
                className={`cursor-target px-3 py-2 rounded-xl font-bold text-[11px] uppercase transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === ind.code
                    ? 'bg-purple-100 text-[#6D28D9] border border-purple-300'
                    : 'text-slate-600 hover:text-black hover:bg-slate-100'
                }`}
              >
                <span>{ind.code}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search threat, compliance, sector..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-[#6D28D9] focus:outline-none transition-all"
            />
          </div>

        </div>

        {/* 4. Interactive Spotlight Explorer (High-Engagement Dashboard) */}
        {activeTab === 'all' && !searchQuery && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-bold text-[#6D28D9] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#6D28D9]" />
                  <span>INTERACTIVE SECTOR ARCHITECTURE EXPLORER</span>
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                  Select an industry below to reveal its threat containment blueprint:
                </h2>
              </div>
              <span className="text-xs text-slate-500 font-medium">Click any card to inspect</span>
            </div>

            {/* 8-Icon Sector Quick Selector Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                const isSelected = selectedIndustry === idx;
                return (
                  <button
                    key={ind.code}
                    onClick={() => setSelectedIndustry(idx)}
                    className={`cursor-target p-3 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between space-y-2 group ${
                      isSelected
                        ? 'bg-red-50 dark:bg-red-950/40 text-[#DC2626] dark:text-[#EF4444] border-2 border-[#DC2626] shadow-sm scale-[1.02]'
                        : 'bg-slate-50/70 dark:bg-[#151624] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-[#27293D] hover:border-red-300 dark:hover:border-red-900/60 hover:bg-white dark:hover:bg-[#1A1C2C]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-[#DC2626] text-white' 
                          : 'bg-white dark:bg-[#1B1D2E] text-[#DC2626] dark:text-[#EF4444] border border-slate-200 dark:border-slate-700 group-hover:border-red-300'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold ${
                        isSelected ? 'text-[#DC2626] dark:text-[#EF4444]' : 'text-slate-400'
                      }`}>
                        {ind.code}
                      </span>
                    </div>

                    <div>
                      <div className={`text-xs font-bold leading-tight truncate ${isSelected ? 'text-[#0F172A] dark:text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                        {ind.title.split(' ')[0]}
                      </div>
                      <div className={`text-[10px] truncate ${isSelected ? 'text-[#DC2626] dark:text-[#EF4444] font-medium' : 'text-slate-500 dark:text-slate-400'}`}>
                        {ind.category}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Spotlight Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInd.code}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-red-50/40 via-white to-slate-50/80 dark:from-[#18131B] dark:via-[#13141F] dark:to-[#0F101A] text-[#0F172A] dark:text-white rounded-2xl p-6 sm:p-8 border border-red-200 dark:border-[#27293D] shadow-sm space-y-6"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#DC2626] dark:text-[#EF4444]">//{activeInd.code}_SPECIFICATION</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 text-[#DC2626] dark:text-[#EF4444] font-semibold">
                          {activeInd.category}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white">{activeInd.title}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#181926] border border-slate-200 dark:border-slate-800 shadow-xs text-right">
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">Response Target</div>
                      <div className="text-xs font-black text-emerald-600 dark:text-emerald-400">{activeInd.metrics.sla}</div>
                    </div>
                    <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#181926] border border-slate-200 dark:border-slate-800 shadow-xs text-right">
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">Compliance</div>
                      <div className="text-xs font-black text-[#DC2626] dark:text-[#EF4444]">{activeInd.metrics.audits}</div>
                    </div>
                  </div>
                </div>

                {/* Description & Highlight */}
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-7 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {activeInd.desc}
                    </p>

                    {/* Compliance Badges */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">MANDATORY COMPLIANCE & STANDARDS:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {activeInd.compliance.map((comp, idx) => (
                          <span 
                            key={idx} 
                            className="px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-[#DC2626] dark:text-[#EF4444] text-xs font-semibold"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-red-50/70 dark:bg-red-950/25 rounded-xl p-4 border border-red-200 dark:border-red-900/40 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-700 dark:text-red-400">
                      <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                      <span>PRIMARY CYBER ATTACK THREATS</span>
                    </div>
                    <ul className="space-y-2 text-xs text-red-950 dark:text-red-200">
                      {activeInd.threats.map((t, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">×</span>
                          <span className="leading-tight">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Defense Protocol Banner & CTA */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span><strong className="text-[#0F172A] dark:text-white">BreachBarrier Security Defense:</strong> {activeInd.defense}</span>
                  </div>

                  <Link
                    to="/contact"
                    className="cursor-target px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-sm"
                  >
                    <span>SCHEDULE {activeInd.code} AUDIT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        )}

        {/* 5. Complete 8-Industry Grid View */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#0F172A] dark:text-white uppercase tracking-wider">
              {activeTab === 'all' && !searchQuery ? 'ALL 8 INDUSTRY DEFENSE BLUEPRINTS' : `FILTERED INDUSTRIES (${filteredIndustries.length})`}
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Enterprise SOC & MDR Tailored Profiles</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredIndustries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.code}
                  className="group relative bg-white dark:bg-[#13141F] border border-slate-200/90 dark:border-[#27293D] rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:border-red-300 dark:hover:border-red-900/60 transition-all duration-300 flex flex-col justify-between p-5 min-h-[290px]"
                >
                  {/* Background Industry Image with Dark/Light Glassmorphic Overlay */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/94 via-white/92 to-white/98 dark:from-[#13141F]/96 dark:via-[#13141F]/92 dark:to-[#13141F]/98 backdrop-blur-[1px]" />
                  </div>

                  {/* Foreground Content */}
                  <div className="relative z-10 space-y-3">
                    
                    {/* Top Row: Sector Icon & Code */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/90 dark:bg-white/10 border border-red-200/80 dark:border-white/15 flex items-center justify-center text-[#DC2626] dark:text-[#EF4444] shadow-xs group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-red-50 dark:bg-red-950/50 text-[#DC2626] dark:text-[#EF4444] border border-red-200 dark:border-red-900/50">
                          {ind.code}
                        </span>
                      </div>
                    </div>

                    {/* Title & Category */}
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {ind.category}
                      </div>
                      <h4 className="text-base font-bold text-[#0F172A] dark:text-white leading-snug group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors line-clamp-1">
                        {ind.title}
                      </h4>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed font-normal">
                      {ind.desc}
                    </p>

                    {/* Compliance Tags */}
                    <div className="flex flex-wrap items-center gap-1 pt-0.5">
                      {ind.compliance.slice(0, 3).map((c, cIdx) => (
                        <span 
                          key={cIdx} 
                          className="px-1.5 py-0.5 rounded bg-white/90 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/15 text-[9.5px] font-semibold"
                        >
                          {c}
                        </span>
                      ))}
                      {ind.compliance.length > 3 && (
                        <span className="text-[9px] text-slate-500 dark:text-slate-400 font-semibold">
                          +{ind.compliance.length - 3} more
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Card Bottom CTA */}
                  <div className="relative z-10 pt-3 border-t border-slate-100/90 dark:border-slate-800 flex items-center justify-end mt-3">
                    <Link
                      to="/contact"
                      className="cursor-target px-3 py-1.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[11px] font-bold rounded-lg flex items-center gap-1 transition-colors shadow-xs"
                    >
                      <span>Secure {ind.code}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>

          {filteredIndustries.length === 0 && (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-800">No industry found matching "{searchQuery}"</h4>
              <p className="text-xs text-slate-500">Try searching for HIPAA, PCI-DSS, cloud, banking, or SMB.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                className="px-4 py-2 bg-[#6D28D9] text-white text-xs font-bold rounded-xl mt-2"
              >
                Reset Search
              </button>
            </div>
          )}

        </div>

      </section>

      {/* 6. Interactive Custom Architecture CTA */}
      <InteractiveCyberGridCTA
        title="DON'T SEE YOUR SPECIFIC DOMAIN?"
        highlightText="WE CUSTOM-MAP DEFENSE."
        subtitle="Our Pune SOC architects and Canadian cybersecurity consultants tailor SIEM detection rules and compliance pipelines for any custom enterprise workflow."
        buttonText="REQUEST CUSTOM INDUSTRY ASSESSMENT"
        buttonLink="/contact"
      />

    </div>
  );
}
