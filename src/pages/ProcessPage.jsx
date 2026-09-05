import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Activity, Layers, FileCheck, BarChart3, ArrowUpRight } from 'lucide-react';

import PageHero from '../components/PageHero';

export default function ProcessPage() {
  const steps = [
    {
      num: '01',
      code: 'ASSESS_01',
      title: 'DISCOVERY & ASSET RECONNAISSANCE',
      desc: 'We map your entire attack surface — identifying exposed APIs, misconfigured cloud storage, vulnerable dependencies, and unmonitored endpoints. Complimentary initial threat assessment included.',
      duration: 'WEEK 01',
      tag: 'DISCOVERY_PHASE'
    },
    {
      num: '02',
      code: 'ARCH_02',
      title: 'DEFENSE ARCHITECTURE DESIGN',
      desc: 'Our senior architects design your Microsoft Sentinel SIEM ingestion pipeline, CrowdStrike Falcon EDR rule triggers, and Nessus automated scanning schedules tailored to your stack.',
      duration: 'WEEK 02',
      tag: 'ARCHITECTURE_PHASE'
    },
    {
      num: '03',
      code: 'DEPLOY_03',
      title: 'DEPLOYMENT & SIEM INTEGRATION',
      desc: 'Full deployment of agents, connectors for AWS/Azure/GCP, log forwarding from firewalls, and establishing encrypted communication channels with our Pune SOC.',
      duration: 'WEEK 02-03',
      tag: 'DEPLOYMENT_PHASE'
    },
    {
      num: '04',
      code: 'MONITOR_04',
      title: '24/7/365 CONTINUOUS SOC ACTIVATION',
      desc: 'Round-the-clock telemetry monitoring begins. Certified Tier-1 to Tier-3 analysts triage alerts, conduct intelligence-led threat hunting, and isolate suspicious hosts in sub-seconds.',
      duration: 'WEEK 03+',
      tag: 'OPERATIONAL_PHASE'
    },
    {
      num: '05',
      code: 'AUDIT_05',
      title: 'COMPLIANCE HARDENING & AUDIT PREP',
      desc: 'Automated evidence collection configured via Vanta/Drata, security policies drafted, and gap remediation executed so your company is 100% prepared for surprise auditor checks.',
      duration: 'ONGOING',
      tag: 'COMPLIANCE_PHASE'
    },
    {
      num: '06',
      code: 'OFFENSE_06',
      title: 'CONTINUOUS RED TEAMING & REPORTING',
      desc: 'Quarterly penetration testing by certified ethical hackers, weekly threat summaries, and proactive patch prioritization to keep your defenses ahead of active criminal vectors.',
      duration: 'CONTINUOUS',
      tag: 'EVOLUTION_PHASE'
    },
  ];

  return (
    <div className="bg-[#EAE7E0] text-black">
      
      {/* Header Hero */}
      <PageHero
        tag="Deployment Protocols • 6-Step Onboarding Roadmap"
        title="ENGINEERED"
        titleAccent="DEPLOYMENT."
        pillars={['Discover', 'Architect', 'Deploy', 'Protect']}
        description="From initial threat discovery to 24/7 continuous SOC interception in less than 3 weeks. A structured, non-disruptive onboarding framework engineered by Technical Lead Meet Shingore."
      />

      {/* 6 Steps Grid */}
      <section className="border-b border-[#D6D0C2] bg-[#EAE7E0] py-14 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="border border-[#D6D0C2] bg-white p-8 flex flex-col justify-between space-y-6 hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-xs font-semibold text-[#7C3AED] font-sans">Step {s.num}</span>
                    <span className="text-[10px] font-bold text-black bg-[#E2F952] px-2 py-0.5 border border-black">
                      {s.duration}
                    </span>
                  </div>

                  <h3 className="font-mono-code text-sm font-black text-black uppercase tracking-tight group-hover:text-[#7C3AED] transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-mono">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-bold">
                  <span>//{s.code}</span>
                  <span className="text-slate-700">{s.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-white py-16 px-4 sm:px-8 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="font-brutal text-4xl sm:text-5xl font-black text-black uppercase">
            START STEP 01 TODAY WITH ZERO COMMITMENT
          </h2>
          <p className="text-xs text-slate-600">
            Claim your complimentary discovery and threat surface audit. Receive actionable recommendations in 48 hours.
          </p>
          <div>
            <Link
              to="/contact"
              className="brutal-btn-black px-8 py-4 text-xs inline-flex items-center gap-2 cursor-pointer"
            >
              <span>INITIATE STEP 01 AUDIT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
