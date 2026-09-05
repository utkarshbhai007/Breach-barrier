import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, X } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function WhyUsPage() {
  const comparisons = [
    { feature: '24/7/365 REAL-TIME SOC MONITORING', us: 'INCLUDED (ROTATIONAL TIER-3 SHIFTS)', inHouse: 'REQUIRES 5+ DEDICATED FTEs', passiveMSSP: 'ALERT-ONLY (NO LIVE ACTION)' },
    { feature: 'INCIDENT ACTION (QUARANTINE)', us: 'ARMED GUARDS: HOST ISOLATED IN < 0.4s', inHouse: 'DELAYED UNTIL ON-CALL WAKES UP', passiveMSSP: 'CCTV ONLY: SENDS AN EMAIL ALERT' },
    { feature: 'ENTERPRISE SIEM (SENTINEL)', us: 'FULL INGESTION & RULES INCLUDED', inHouse: 'SEPARATE ENTERPRISE LICENSING', passiveMSSP: 'GENERIC BASIC OPEN-SOURCE SIEM' },
    { feature: 'EDR (CROWDSTRIKE FALCON)', us: 'FULL FALCON SUITE INCLUDED', inHouse: 'SEPARATE ENDPOINT LICENSING', passiveMSSP: 'ADD-ON CHARGE PER ENDPOINT' },
    { feature: 'VULNERABILITY PRIORITIZATION', us: 'FIXES BROKEN FRONT DOOR FIRST', inHouse: 'OVERWHELMED BY 200 UNPRIORITIZED CVEs', passiveMSSP: 'ANNUAL STATIC PDF DUMP' },
    { feature: 'PENETRATION TESTING LAB', us: 'INCLUDED REGULAR RED TEAMING', inHouse: 'COSTLY AD-HOC OUTSOURCING', passiveMSSP: 'NOT INCLUDED' },
    { feature: 'AUDIT & COMPLIANCE READY', us: 'ALWAYS READY FOR SURPRISE POLICE CHECK', inHouse: 'PANIC BEFORE ANNUAL AUDIT', passiveMSSP: 'NO AUDIT ASSURANCE' },
    { feature: 'RESOURCE & OPERATIONAL EFFICIENCY', us: 'TURNKEY FULLY MANAGED PARTNERSHIP', inHouse: 'HEAVY HIRING & TRAINING OVERHEAD', passiveMSSP: 'HIDDEN SURCHARGES & OVERAGES' },
  ];

  return (
    <div className="bg-[#EAE7E0] text-black">
      
      {/* Header Hero */}
      <PageHero
        tag="Comparative Architecture Matrix"
        title="WHY CHOOSE"
        titleAccent="BREACHBARRIER?"
        pillars={['Armed Defense', 'Rapid Response', 'Turnkey Efficiency']}
        description="Compare BreachBarrier's proactive engineering model with traditional passive MSSPs and complex in-house operations. Real telemetry, sub-second quarantine speed, and dedicated Tier-3 engineers."
      />

      {/* Comparison Matrix Table */}
      <section className="border-b border-[#D6D0C2] bg-[#EAE7E0] py-14 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="border border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-black bg-[#0A0A0C] text-white">
                  <th className="p-4 uppercase font-bold tracking-wider">DEFENSE CAPABILITY</th>
                  <th className="p-4 uppercase font-extrabold tracking-wider text-[#E2F952] bg-[#7C3AED]/30">BREACHBARRIER</th>
                  <th className="p-4 uppercase font-bold tracking-wider text-slate-400">IN-HOUSE SOC</th>
                  <th className="p-4 uppercase font-bold tracking-wider text-slate-400">PASSIVE MSSP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 border-r border-slate-200">{row.feature}</td>
                    <td className="p-4 font-bold text-[#7C3AED] bg-purple-50/50 border-r border-slate-200">{row.us}</td>
                    <td className="p-4 text-slate-600 border-r border-slate-200">{row.inHouse}</td>
                    <td className="p-4 text-slate-600">{row.passiveMSSP}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="border-b border-[#D6D0C2] bg-[#F2EFE9] py-14 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8">
          <div className="border border-black p-8 bg-white space-y-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#7C3AED] font-sans">The Passive MSSP Flaw</div>
            <h3 className="font-brutal text-3xl font-black text-black">CCTV OPERATOR VS ARMED GUARDS</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Traditional vendors act like CCTV operators who watch cameras and call to say "Sir, someone is in your shop." 
              BreachBarrier is the armed response team that detects, rushes in, locks down the infected host, and neutralizes the attacker before you even wake up.
            </p>
          </div>

          <div className="border border-black p-8 bg-[#E2F952] space-y-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/10 border border-black/20 text-xs font-semibold text-black font-sans">Smart Prioritization</div>
            <h3 className="font-brutal text-3xl font-black text-black">FIXING THE FRONT DOOR FIRST</h3>
            <p className="text-xs text-slate-800 leading-relaxed font-bold">
              We don't waste your engineering bandwidth on 200 minor low-risk vulnerabilities. We prioritize the exact 5 critical weak points that active ransomware gangs are exploiting in the wild right now.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-white py-16 px-4 sm:px-8 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="font-brutal text-4xl sm:text-5xl font-black text-black uppercase">
            SEE THE BREACHBARRIER ADVANTAGE LIVE
          </h2>
          <p className="text-xs text-slate-600">
            Book an architecture review with Meet Shingore to explore your custom enterprise security blueprint.
          </p>
          <div>
            <Link
              to="/contact"
              className="brutal-btn-black px-8 py-4 text-xs inline-flex items-center gap-2 cursor-pointer"
            >
              <span>REQUEST ARCHITECTURE BRIEFING</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
