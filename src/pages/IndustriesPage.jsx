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
  Search, 
  CheckCircle2, 
  Zap, 
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import InteractiveCyberGridCTA from '../components/InteractiveCyberGridCTA';
import SEO from '../components/SEO';

export default function IndustriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const industries = useMemo(() => [
    {
      id: '01',
      code: 'HLTH',
      title: 'Healthcare & Life Sciences',
      category: 'Critical Infrastructure',
      categoryGroup: 'critical',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      desc: 'Protect patient electronic health records (EHR), connected medical IoT devices, and ensure continuous compliance with HIPAA and Canadian PIPEDA standards.',
      compliance: ['HIPAA', 'PIPEDA', 'HITECH', 'IoMT Security'],
      threats: [
        'Ransomware locking emergency hospital systems',
        'Data exfiltration of patient EHR/EMR records',
        'Compromised IoMT medical equipment & monitors'
      ],
      defense: '24×7 SOC telemetry ingestion, rapid host quarantine, and continuous healthcare compliance audit readiness.',
      highlight: 'Zero clinical operational interruption with rapid automated containment.',
      icon: Hospital,
      metrics: { sla: 'Rapid Triage', audits: '100% HIPAA Ready', coverage: '24×7×365' }
    },
    {
      id: '02',
      code: 'FINS',
      title: 'Financial Services & FinTech',
      category: 'High-Value Assets',
      categoryGroup: 'high-value',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      desc: 'Safeguard transactional APIs, customer financial databases, banking networks, and eliminate wire fraud and executive BEC risks.',
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
      categoryGroup: 'high-value',
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
      categoryGroup: 'critical',
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
      categoryGroup: 'public-smb',
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
      categoryGroup: 'high-value',
      image: 'https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=800&q=80',
      desc: 'Protect customer credit card databases (PCI-DSS), online checkout gateways, point-of-sale (POS) systems, and defend against digital e-skimming.',
      compliance: ['PCI-DSS Level 1', 'SOC 2', 'CCPA / GDPR'],
      threats: [
        'Magecart JavaScript e-skimming on checkout pages',
        'Credential stuffing on customer loyalty accounts',
        'POS endpoint malware at physical branch locations'
      ],
      defense: 'Web application firewall (WAF) tuning, payment endpoint vulnerability assessments, and 24×7 SOC surveillance.',
      highlight: 'Zero transaction disruptions during high-traffic peak surges.',
      icon: ShoppingCart,
      metrics: { sla: 'Zero Latency', audits: 'PCI-DSS L1', coverage: 'Checkout Guard' }
    },
    {
      id: '07',
      code: 'GOVT',
      title: 'Government & Public Sector',
      category: 'Public Services',
      categoryGroup: 'public-smb',
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
      desc: 'Strengthen digital resilience and public trust with hardened defenses against nation-state threat actors and persistent targeted attacks.',
      compliance: ['NIST 800-53', 'ISO 27001', 'Zero Trust Mandate'],
      threats: [
        'Advanced Persistent Threats (APTs) targeting civil records',
        'DDoS extortion attacks on public citizen service portals',
        'Compromised contractor credentials accessing public databases'
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
      categoryGroup: 'public-smb',
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

  // Filtered list based on search or category
  const filteredIndustries = useMemo(() => {
    return industries.filter(ind => {
      const matchesSearch = 
        ind.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.compliance.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        ind.threats.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = 
        selectedCategory === 'all' || 
        ind.categoryGroup === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [industries, searchQuery, selectedCategory]);

  return (
    <div className="bg-[#EAE7E0] dark:bg-[#0A0A0E] text-[#0F172A] dark:text-[#F8FAFC] min-h-screen transition-colors duration-200">
      <SEO
        title="Industry Cybersecurity Solutions | Breach Barrier Security"
        description="Tailored cybersecurity compliance and defense solutions for Healthcare, Financial Services, SaaS & Tech, Retail, and Manufacturing by Breach Barrier Security."
        keywords="Industry Cybersecurity, Healthcare HIPAA, Fintech PCI DSS, SaaS Security, Manufacturing OT Security, Breach Barrier Security, Breach Barrier"
        canonicalPath="/industries"
        breadcrumbs={[{ name: 'Industries', path: '/industries' }]}
      />
      
      {/* 1. Header Hero */}
      <PageHero
        tag="Sector Specifications • 8 Specialized Domains"
        title="INDUSTRIES WE"
        titleAccent="SERVE."
        pillars={['Healthcare', 'FinTech', 'Cloud SaaS', 'Manufacturing']}
        description="From healthcare and high-growth SaaS to critical manufacturing and financial services, BreachBarrier Security engineers custom-tailored cybersecurity defense matrices for each industry's regulatory and threat landscape."
      />

      {/* 2. Key Industry Matrix Metrics Strip */}
      <div className="border-b border-[#D6D0C2] dark:border-[#262736] bg-white dark:bg-[#13141F]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="sm:border-r border-slate-200 dark:border-slate-800 pr-2">
            <div className="text-2xl sm:text-3xl font-black text-[#DC2626] dark:text-[#EF4444]">8 SECTOR MATRICES</div>
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mt-1">Tailored Threat Models</div>
          </div>
          <div className="sm:border-r border-slate-200 dark:border-slate-800 pr-2">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">100% AUDIT READY</div>
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mt-1">HIPAA, PCI-DSS & SOC 2</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#DC2626] dark:text-[#EF4444]">24×7×365 DEFENSE</div>
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mt-1">Active Threat Containment</div>
          </div>
        </div>
      </div>

      {/* 3. Streamlined Filter Bar (Single clean navigation bar, no repeated sub-rows) */}
      <section className="sticky top-[61px] z-40 bg-white/95 dark:bg-[#11121C]/95 backdrop-blur-md border-b border-[#D6D0C2] dark:border-[#262736] py-3.5 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Functional Category Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`cursor-target px-4 py-2 rounded-xl font-bold uppercase transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#DC2626] dark:bg-[#EF4444] text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-[#181926] text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-[#202234]'
              }`}
            >
              All Sectors ({industries.length})
            </button>
            <button
              onClick={() => setSelectedCategory('critical')}
              className={`cursor-target px-4 py-2 rounded-xl font-bold uppercase transition-all whitespace-nowrap ${
                selectedCategory === 'critical'
                  ? 'bg-[#DC2626] dark:bg-[#EF4444] text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-[#181926] text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-[#202234]'
              }`}
            >
              Critical Infrastructure
            </button>
            <button
              onClick={() => setSelectedCategory('high-value')}
              className={`cursor-target px-4 py-2 rounded-xl font-bold uppercase transition-all whitespace-nowrap ${
                selectedCategory === 'high-value'
                  ? 'bg-[#DC2626] dark:bg-[#EF4444] text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-[#181926] text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-[#202234]'
              }`}
            >
              FinTech, SaaS & Retail
            </button>
            <button
              onClick={() => setSelectedCategory('public-smb')}
              className={`cursor-target px-4 py-2 rounded-xl font-bold uppercase transition-all whitespace-nowrap ${
                selectedCategory === 'public-smb'
                  ? 'bg-[#DC2626] dark:bg-[#EF4444] text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-[#181926] text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-[#202234]'
              }`}
            >
              Public & Growing SMB
            </button>
          </div>

          {/* Live Search Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-500 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search threat, compliance, or sector..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-[#161724] border border-slate-300 dark:border-[#27293D] rounded-xl text-xs sm:text-sm font-medium text-slate-900 dark:text-white placeholder-slate-500 focus:bg-white dark:focus:bg-[#1A1C2C] focus:border-[#DC2626] dark:focus:border-[#EF4444] focus:outline-none transition-all"
            />
          </div>

        </div>
      </section>

      {/* 4. Complete Unified Industry Grid (Each industry shown ONCE in high detail) */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-[1400px] mx-auto space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D6D0C2] dark:border-[#262736] pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black uppercase text-[#0F172A] dark:text-white tracking-tight">
              {selectedCategory === 'all' && !searchQuery ? 'ALL 8 SECTOR SPECIFICATIONS' : `MATCHING SECTORS (${filteredIndustries.length})`}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              Each card details the primary adversary threats, required compliance standards, and tailored BreachBarrier defense protocols.
            </p>
          </div>
          <span className="text-xs font-bold text-[#DC2626] dark:text-[#EF4444] font-mono">
            {filteredIndustries.length} SECTOR MATRICES
          </span>
        </div>

        {/* 2-Column High-Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
          {filteredIndustries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.code}
                className="group relative bg-white dark:bg-[#13141F] border border-slate-200 dark:border-[#27293D] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#DC2626] dark:hover:border-[#EF4444] transition-all duration-300 flex flex-col justify-between p-6 sm:p-8"
              >
                {/* Background Visual Texture */}
                <div className="absolute inset-0 z-0 overflow-hidden opacity-10 dark:opacity-20 group-hover:opacity-15 transition-opacity">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-5">
                  
                  {/* Top Bar: Icon + Title + Category */}
                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#DC2626] dark:text-[#EF4444] shadow-xs group-hover:bg-[#DC2626] group-hover:text-white dark:group-hover:bg-[#EF4444] dark:group-hover:text-black transition-colors shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#DC2626] dark:text-[#EF4444]">
                            //{ind.code}_SPEC
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 uppercase">
                            {ind.category}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-[#0F172A] dark:text-white leading-snug group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors mt-0.5">
                          {ind.title}
                        </h3>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 block">
                        {ind.metrics.sla}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    {ind.desc}
                  </p>

                  {/* Threats & Compliance 2-Col Box */}
                  <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                    {/* Primary Cyber Threats */}
                    <div className="bg-red-50/70 dark:bg-red-950/30 rounded-2xl p-4 border border-red-200/80 dark:border-red-900/40 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-extrabold text-red-700 dark:text-red-400 uppercase tracking-wider">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0" />
                        <span>PRIMARY ATTACK THREATS</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-red-950 dark:text-red-200 font-medium">
                        {ind.threats.map((t, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-red-500 font-bold">×</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Compliance & Standards */}
                    <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626] dark:text-[#EF4444] shrink-0" />
                        <span>MANDATORY STANDARDS</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {ind.compliance.map((c, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 text-xs font-bold"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                      <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 pt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{ind.metrics.audits}</span>
                      </div>
                    </div>
                  </div>

                  {/* BreachBarrier Defense Highlight */}
                  <div className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#181926] border border-slate-200 dark:border-slate-800 flex items-start gap-2.5 text-xs font-medium text-slate-800 dark:text-slate-200">
                    <Shield className="w-4 h-4 text-[#DC2626] dark:text-[#EF4444] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F172A] dark:text-white font-bold">Defense Strategy: </strong>
                      <span>{ind.defense}</span>
                    </div>
                  </div>

                </div>

                {/* Card Bottom CTA */}
                <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-5">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 font-sans">
                    Coverage: <strong className="text-slate-900 dark:text-white">{ind.metrics.coverage}</strong>
                  </span>
                  <Link
                    to="/contact"
                    className="cursor-target px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] dark:bg-[#EF4444] dark:hover:bg-[#DC2626] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
                  >
                    <span>SCHEDULE {ind.code} AUDIT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {filteredIndustries.length === 0 && (
          <div className="p-12 text-center bg-white dark:bg-[#13141F] rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-white">No sector found matching "{searchQuery}"</h4>
            <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">Try searching for HIPAA, PCI-DSS, cloud, banking, or SMB.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-5 py-2 bg-[#DC2626] text-white text-xs font-bold rounded-xl mt-2 cursor-pointer"
            >
              Reset Search Filter
            </button>
          </div>
        )}

      </section>

      {/* 5. Interactive Custom Architecture CTA */}
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
