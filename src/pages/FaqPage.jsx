import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function FaqPage() {
  const faqs = [
    {
      q: "1. WHAT IS A SOC (SECURITY OPERATIONS CENTER)?",
      a: "A SOC is like a 24/7 control room where security experts watch over a company's servers, computers, emails, and data all day, all night, every single day of the year — to catch hackers before they cause damage. Without a SOC, your business is like a shopping mall with cameras installed but nobody watching the screens. The cameras are useless if no one's monitoring them in real time.",
      analogy: "Smoke Detector Analogy: It doesn't wait for the whole house to catch fire — it detects small warning signs (like repeated wrong password attempts) and sounds the alarm immediately."
    },
    {
      q: "2. WHAT IS MANAGED DETECTION & RESPONSE (MDR)?",
      a: "MDR is a complete outsourced security service where experts don't just watch for problems — they take immediate action to stop attacks themselves on your behalf. Think of the difference between a CCTV camera operator who just calls you saying 'Sir, there is a thief in your shop' vs a trained security company that watches the cameras AND immediately sends guards to catch the thief and lock the doors.",
      analogy: "Quarantine Analogy: Like isolating a contagious patient immediately so disease doesn't spread, MDR instantly isolates an infected workstation from the network in sub-seconds so ransomware cannot spread."
    },
    {
      q: "3. WHAT IS INCIDENT RESPONSE & FORENSICS?",
      a: "When a cyber incident happens, this is the emergency team that jumps in immediately to stop the damage, fix the problem, and investigate exactly why it happened so it never happens again. Think of it like a hospital's Emergency Room (ER) + Police Investigation team combined. The ER team stops the bleeding (Incident Response), and forensic detectives investigate how the thief broke in so the back door is fixed permanently (Forensics).",
      analogy: "Fire Brigade Speed: The fire brigade puts out the fire first before asking questions. Incident Response isolates the host first, then investigates the root cause."
    },
    {
      q: "4. WHAT IS VULNERABILITY MANAGEMENT & SMART PRIORITIZATION?",
      a: "This is the ongoing process of checking a company's systems for weak points (outdated software, weak passwords, open ports) and fixing the most dangerous ones first. Instead of checking once a year, we scan continuously every day like a daily safety inspector.",
      analogy: "Broken Door vs Squeaky Gate: If you have a broken front door and a squeaky gate hinge, you fix the broken front door first because thieves actively target it. We prioritize the 5 critical vulnerabilities active hackers are exploiting right now, rather than getting overwhelmed by 200 low-risk items."
    },
    {
      q: "5. WHAT IS PENETRATION TESTING?",
      a: "Penetration testing means hiring ethical hackers to deliberately try to break into your own systems — legally and safely — to find weaknesses before real criminals do. Think of it like a bank hiring an ex-thief legally to test every vault lock, camera angle, and back door.",
      analogy: "Shopping Mall Multiple Entrances: A mall has main doors (website), side doors (mobile apps), loading docks (APIs), and back corridors (internal network). If you only test the main entrance, a thief walks through the loading dock. We test every single entrance."
    },
    {
      q: "6. WHAT IS CONTINUOUS COMPLIANCE READINESS (ISO 27001 / SOC 2)?",
      a: "This ensures your company is always meeting legal and industry security standards (data privacy laws, HIPAA, PCI-DSS) so that when an auditor checks you anytime, you pass without panic or last-minute scrambling.",
      analogy: "Traffic Police Checkpoint Analogy: Like keeping your car papers in the glovebox and lights working every single day — not scrambling to buy insurance the moment you spot a police checkpoint ahead."
    },
    {
      q: "7. HOW DOES THE INDIA DELIVERY CENTER + CANADIAN OPERATIONS WORK?",
      a: "BreachBarrier Security combines top-tier cybersecurity engineers at our 24/7 delivery hub with international client management led by Founder Ravi Makwana. This model gives enterprises Tier-3 SOC and offensive security talent at up to 80% lower cost than building in-house teams.",
      analogy: "Global Advantage: Real-time night and day rotation across time zones ensuring rapid guaranteed response."
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="bg-[#EAE7E0] text-black">
      
      {/* Header Hero */}
      <PageHero
        tag="Frequently Asked Questions • SOC Guide"
        title="KNOWLEDGE"
        titleAccent="BASE."
        pillars={['Plain English', 'Real-World Analogies', 'Zero Jargon']}
        description="Plain-English explanations and real-world analogies on how modern 24/7 SOC, MDR, Forensics, Penetration Testing, and Vulnerability Management work."
      />

      {/* FAQ Accordion List */}
      <section className="border-b border-[#D6D0C2] bg-[#EAE7E0] py-14 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-black bg-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-mono-code text-xs sm:text-sm font-black text-black uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 border border-black flex items-center justify-center bg-[#F2EFE9] shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-[#E2F952]' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-200 text-xs text-slate-700 space-y-3 font-mono leading-relaxed bg-[#F2EFE9]">
                    <p>{faq.a}</p>
                    <div className="p-3 bg-white border border-[#DC2626] text-[11px] text-black">
                      <strong className="text-[#DC2626] font-bold">REAL-LIFE ANALOGY: </strong>
                      {faq.analogy}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-white py-16 px-4 sm:px-8 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="font-brutal text-4xl sm:text-5xl font-black text-black uppercase">
            HAVE SPECIFIC INFRASTRUCTURE QUESTIONS?
          </h2>
          <p className="text-xs text-slate-600">
            Talk directly to Founder Ravi Makwana and get an exact technical assessment for your environment.
          </p>
          <div>
            <Link
              to="/contact"
              className="brutal-btn-black px-8 py-4 text-xs inline-flex items-center gap-2 cursor-pointer"
            >
              <span>ASK RAVI MAKWANA DIRECTLY</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
