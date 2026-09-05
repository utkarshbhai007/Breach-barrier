import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, BookOpen, HelpCircle, Bot, Shield, Terminal, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveCyberGridCTA from '../components/InteractiveCyberGridCTA';

import PageHero from '../components/PageHero';

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      q: "What industries do you serve?",
      a: "We serve Healthcare, Financial Services, Technology & SaaS, Manufacturing, Education, Retail & E-commerce, Government & Public Sector, and Small & Medium Businesses worldwide.",
      tag: "COVERAGE",
    },
    {
      q: "Do you provide 24×7 monitoring?",
      a: "Yes. Our Security Operations Center (SOC) provides continuous 24×7×365 monitoring, real-time threat detection, and rapid active containment through our dedicated global delivery hub.",
      tag: "SOC_247",
    },
    {
      q: "Can you help us become ISO 27001 compliant?",
      a: "Yes. We support end-to-end ISO 27001 and SOC 2 readiness, security policies development, risk assessments, gap analysis, automated Vanta/Drata evidence syncing, and complete audit support.",
      tag: "COMPLIANCE",
    },
    {
      q: "How do I schedule a consultation?",
      a: "Simply complete our contact form or book a consultation — we provide a free initial security architecture assessment with our Technical Lead.",
      tag: "ONBOARDING",
    },
    {
      q: "Where is your team based, and who do you serve?",
      a: "We are based in India and deliver enterprise-grade managed cybersecurity services to organizations across Canada, North America, and other global international markets.",
      tag: "GLOBAL_HUB",
    },
  ];

  const glossary = [
    {
      term: "SOC (Security Operations Center)",
      meaning: "A team that watches your systems around the clock so threats are caught in real time, not after the damage is done.",
      analogy: "Like the mall security control room monitoring cameras 24/7.",
      code: "DEF_01",
    },
    {
      term: "MDR (Managed Detection & Response)",
      meaning: "We don't just spot a threat and alert you — our team contains and stops it on your behalf in sub-seconds.",
      analogy: "An armed rapid-response team locking the door and isolating the intruder.",
      code: "DEF_02",
    },
    {
      term: "Penetration Testing",
      meaning: "Ethical hackers try to break into your own systems first, so real attackers can't.",
      analogy: "Legally hiring an ex-thief to test every window, lock, and loading dock.",
      code: "DEF_03",
    },
    {
      term: "Vulnerability Management",
      meaning: "Ongoing scanning that finds and prioritizes your weakest points before attackers do.",
      analogy: "Fixing the broken front door lock before oiling squeaky door hinges.",
      code: "DEF_04",
    },
    {
      term: "Incident Response & Forensics",
      meaning: "Fast containment when an attack happens, followed by a root-cause investigation so it doesn't happen again.",
      analogy: "Hospital ER (stop bleeding first) + Police Detective (investigate root cause).",
      code: "DEF_05",
    },
    {
      term: "Compliance Readiness",
      meaning: "Staying audit-ready all year, not just scrambling before an inspection.",
      analogy: "Keeping vehicle papers organized in the glovebox for surprise checkpoints.",
      code: "DEF_06",
    },
  ];

  const filteredGlossary = glossary.filter(g => 
    g.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    g.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#EAE7E0] text-[#0F172A]">
      
      {/* Top Animated Cyber Ticker Tape */}

      {/* Header Hero */}
      <PageHero
        tag="// KNOWLEDGE HUB • FAQ & CYBERSECURITY GLOSSARY"
        title="RESOURCES &"
        titleAccent="EXPLAINERS."
        pillars={['FAQ', 'GLOSSARY', 'THREAT VECTORS', 'PLAIN ENGLISH']}
        description="Clear, plain-language answers to frequently asked questions and straightforward explanations of core cybersecurity concepts."
      />

      {/* Section 1: Animated Accordion FAQs */}
      <section className="py-14 px-4 sm:px-8 max-w-[1400px] mx-auto space-y-8 border-b border-[#D4D4D8]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-brutal text-3xl sm:text-4xl font-black uppercase">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <span className="text-xs text-slate-400 font-bold hidden sm:inline">// CLICK TO EXPAND</span>
        </div>

        <div className="border border-black bg-white shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] divide-y divide-[#D4D4D8]">
          {faqs.map((f, idx) => {
            const isOpen = openFaq === idx;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className={`w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer transition-all ${
                    isOpen ? 'bg-[#F2EFE9] border-l-4 border-l-[#6D28D9]' : 'hover:bg-[#F2EFE9]/60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-black px-2 py-0.5 border ${isOpen ? 'bg-[#6D28D9] text-white border-black' : 'bg-white text-[#6D28D9] border-slate-300'}`}>
                      Q0{idx + 1}
                    </span>
                    <span className="font-mono-code text-xs sm:text-sm font-bold text-[#0F172A]">{f.q}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-slate-400 font-bold hidden md:inline">// {f.tag}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-[#6D28D9]' : 'text-slate-500'}`} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 bg-[#F2EFE9] border-t border-slate-200">
                        <div className="p-5 bg-white border border-slate-300 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans font-medium shadow-xs">
                          {f.a}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Cybersecurity Explained with Search & Interactive Hover Cards */}
      <section className="py-14 px-4 sm:px-8 max-w-[1400px] mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="font-brutal text-3xl sm:text-4xl font-black uppercase">CYBERSECURITY, EXPLAINED</h2>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search concepts (e.g. MDR, SOC)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-black text-xs font-mono-code focus:outline-none focus:ring-2 focus:ring-[#6D28D9] shadow-[2px_2px_0px_0px_#0F172A]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGlossary.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, x: -4, boxShadow: '6px 6px 0px 0px #0F172A' }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="border border-black bg-white p-7 space-y-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between group cursor-default"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-[10px] font-black text-[#6D28D9] px-2 py-0.5 bg-[#F2EFE9] border border-slate-300">
                    {item.code}
                  </span>
                  <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-[#6D28D9] transition-colors" />
                </div>

                <h3 className="font-heading text-sm sm:text-base font-bold text-[#0F172A] uppercase tracking-tight group-hover:text-[#6D28D9] transition-colors">
                  {item.term}
                </h3>

                <p className="text-xs text-slate-700 font-sans leading-relaxed font-normal">
                  {item.meaning}
                </p>

                <div className="p-3.5 bg-[#F2EFE9] border-l-2 border-[#6D28D9] text-[11px] text-[#0F172A] font-sans">
                  💡 <span className="font-bold text-[#6D28D9]">Real-World Analogy:</span> {item.analogy}
                </div>
              </div>

              <div className="text-[10px] text-slate-400 font-bold tracking-widest pt-2.5 border-t border-slate-100 flex items-center justify-between font-mono-code">
                <span>//PLAIN_SPEC</span>
                <span className="text-emerald-600">● VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Middle Animated Ticker Tape */}

      {/* Closing Interactive Cyber Grid CTA (Photo 2 Reference) */}
      <InteractiveCyberGridCTA
        title="HAVE MORE QUESTIONS?"
        highlightText="TALK DIRECTLY WITH OUR ARCHITECTS."
        subtitle="Schedule a free initial security architecture consultation with our certified SOC engineering team."
        buttonText="BOOK A FREE SECURITY CONSULTATION"
        buttonLink="/contact"
      />

    </div>
  );
}
