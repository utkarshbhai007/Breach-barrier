import React from 'react';
import { ArrowUpRight, Shield, Target, Award, CheckCircle2, UserCheck, HeartHandshake, Zap, Lock, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveCyberGridCTA from '../components/InteractiveCyberGridCTA';

import PageHero from '../components/PageHero';

export default function About() {
  const values = [
    { name: "INTEGRITY", desc: "Honest vulnerability reporting and transparent remediation roadmaps without vendor lock-in.", icon: Lock },
    { name: "INNOVATION", desc: "Continuous adoption of advanced AI-driven SIEM, SOAR, and EDR threat-hunting capabilities.", icon: Zap },
    { name: "TRUST", desc: "Confidentiality and strict non-disclosure across all client telemetry and forensic evidence.", icon: Shield },
    { name: "CUSTOMER SUCCESS", desc: "Aligning security posture directly with our clients' business goals and compliance milestones.", icon: Award },
    { name: "CONTINUOUS IMPROVEMENT", desc: "Ongoing purple-team exercises and proactive threat intel updates to stay ahead of adversaries.", icon: RefreshCw },
    { name: "SECURITY FIRST", desc: "Embedding zero-trust principles into every architectural layer from endpoint to cloud.", icon: Target },
  ];

  const whyChooseUsFull = [
    {
      num: '01',
      title: 'BUSINESS-FOCUSED SECURITY',
      meaning: "We don't just identify risks — we actively help you reduce them to safeguard operations and revenue.",
    },
    {
      num: '02',
      title: 'EXPERIENCED PROFESSIONALS',
      meaning: 'Our team combines deep technical mastery with real-world enterprise incident response and SOC architecture experience.',
    },
    {
      num: '03',
      title: 'PROACTIVE APPROACH',
      meaning: 'We hunt silent threats and patch exploitable attack vectors before they can impact your organization.',
    },
    {
      num: '04',
      title: 'CUSTOMIZED SOLUTIONS',
      meaning: 'Every business infrastructure is unique — our defense strategies and SIEM rules are tailored to your environment.',
    },
    {
      num: '05',
      title: 'TRANSPARENT COMMUNICATION',
      meaning: 'Clear executive reporting, zero security jargon, and actionable engineering remediation guides.',
    },
    {
      num: '06',
      title: 'LONG-TERM PARTNERSHIP',
      meaning: "Security doesn't end after one test — we provide ongoing 24×7 monitoring, advisory, and audit readiness.",
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'UNDERSTAND YOUR BUSINESS',
      desc: 'We start by learning your infrastructure, cloud environments, business goals, and critical security challenges.',
    },
    {
      step: '02',
      title: 'SECURITY ASSESSMENT',
      desc: 'Our experts evaluate your systems, identify active vulnerabilities, and prioritize risks based on real-world threat intelligence.',
    },
    {
      step: '03',
      title: 'REMEDIATION PLANNING',
      desc: 'We provide practical, prioritized recommendations and runbooks to strengthen your security posture immediately.',
    },
    {
      step: '04',
      title: 'IMPLEMENTATION SUPPORT',
      desc: 'Our team assists with SIEM log ingestion, EDR sensor deployment, firewall hardening, and security best practices.',
    },
    {
      step: '05',
      title: 'CONTINUOUS PROTECTION',
      desc: '24×7 ongoing SOC monitoring, regular vulnerability scans, and continuous compliance posture maintenance.',
    },
  ];

  return (
    <div className="bg-[#F1F5F9] text-[#0F172A]">
      
      {/* 1. Header Hero */}
      <PageHero
        tag="// ABOUT BREACHBARRIER • CYBER DEFENSE REIMAGINED"
        title="BUILDING A SAFER"
        titleAccent="DIGITAL FUTURE."
        pillars={['TRUST', 'INNOVATION', 'SECURITY FIRST']}
        description="Breach Barrier delivers enterprise-grade cybersecurity protection to organizations worldwide. We combine elite cybersecurity talent with AI-driven detection to make world-class defense accessible without the massive overhead of an in-house team."
      />

      {/* 2. Why We Exist & Mission / Vision */}
      <section className="border-b border-[#D4D4D8] py-14 px-4 sm:px-8 bg-[#F1F5F9]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8">
          
          {/* Why We Exist */}
          <div className="lg:col-span-6 bg-white border border-black p-8 sm:p-10 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] space-y-4">
            <span className="text-xs font-black text-[#6D28D9] uppercase">// THE CHALLENGE</span>
            <h2 className="font-brutal text-3xl sm:text-4xl font-black uppercase">WHY WE EXIST</h2>
            <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
              Cyberattacks are increasing every year, but most small and mid-sized businesses can't afford a full in-house security team — and the industry itself faces a global shortage of experienced professionals. We close that gap: 24×7 managed cybersecurity delivered remotely, so organizations get continuous protection and expert support at a fraction of the cost.
            </p>
            <div className="p-4 bg-[#F1F5F9] border-l-4 border-[#6D28D9] text-xs font-bold text-[#0F172A]">
              "We believe cybersecurity isn't just about technology — it's about protecting businesses, people, and growth."
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white border border-[#D4D4D8] p-8 space-y-3">
              <span className="text-xs font-black text-[#6D28D9] uppercase">// PURPOSE</span>
              <h3 className="font-brutal text-2xl font-black uppercase">OUR MISSION</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                To empower organizations with proactive, 24×7 cybersecurity services — SOC, MDR, Penetration Testing, Incident Response, Vulnerability Management, and Compliance Readiness — delivering cost-effective, scalable, enterprise-grade protection worldwide.
              </p>
            </div>

            <div className="bg-white border border-[#D4D4D8] p-8 space-y-3">
              <span className="text-xs font-black text-[#6D28D9] uppercase">// HORIZON</span>
              <h3 className="font-brutal text-2xl font-black uppercase">OUR VISION</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                To become a globally trusted cybersecurity partner, recognized for innovation, expertise, and customer success — and to build India's leading cybersecurity delivery center serving Canada and other international markets.
              </p>
            </div>
          </div>

        </div>
      </section>



      {/* 4. Core Values (6 Values) */}
      <section className="border-b border-[#D4D4D8] py-14 px-4 sm:px-8 bg-[#F1F5F9]">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#0F172A] uppercase tracking-widest">
                OUR GUIDING VALUES // 6 PILLARS
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="border border-[#D4D4D8] bg-white p-6 space-y-3 hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all"
                >
                  <div className="w-9 h-9 border border-black flex items-center justify-center bg-[#F1F5F9] text-[#6D28D9]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-black text-[#0F172A] uppercase tracking-wider">{v.name}</h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-sans">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us (Full 6 Reasons Table) */}
      <section className="border-b border-[#D4D4D8] py-14 px-4 sm:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <div className="space-y-2">
            <div className="text-sm font-bold text-[#6D28D9]">WHY CHOOSE BREACHBARRIER</div>
            <h2 className="font-brutal text-4xl sm:text-5xl font-black uppercase">THE 6 STRATEGIC ADVANTAGES</h2>
          </div>

          <div className="border border-black divide-y divide-black bg-[#F1F5F9] shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
            {whyChooseUsFull.map((item, idx) => (
              <div key={idx} className="p-6 bg-white hover:bg-[#F1F5F9] transition-colors grid md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-1 text-xs font-black text-[#6D28D9]">
                  {item.num}
                </div>
                <div className="md:col-span-4 text-xs font-black text-[#0F172A] uppercase tracking-wider">
                  {item.title}
                </div>
                <div className="md:col-span-7 text-xs text-slate-600 font-sans leading-relaxed">
                  {item.meaning}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our 5-Step Process */}
      <section className="border-b border-[#D4D4D8] py-14 px-4 sm:px-8 bg-[#F1F5F9]">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <div className="space-y-2">
            <div className="text-sm font-bold text-[#6D28D9]">OUR DELIVERY ROADMAP</div>
            <h2 className="font-brutal text-4xl sm:text-5xl font-black uppercase">HOW WE ENGAGE & PROTECT</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((p, idx) => (
              <div key={idx} className="border border-black bg-white p-6 space-y-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-black text-[#6D28D9]">STEP // {p.step}</span>
                  <h3 className="text-xs font-black text-[#0F172A] uppercase tracking-wider leading-snug">{p.title}</h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-sans">{p.desc}</p>
                </div>
                <div className="text-[9px] text-slate-400 font-bold tracking-widest pt-2 border-t border-slate-100">
                  //MILESTONE_{p.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing Interactive Cyber Grid CTA (Photo 2 Reference) */}
      <InteractiveCyberGridCTA
        title="READY TO STRENGTHEN"
        highlightText="YOUR CYBERSECURITY?"
        subtitle="Schedule a free initial security architecture consultation with our Technical Lead."
        buttonText="BOOK A FREE SECURITY CONSULTATION"
        buttonLink="/contact"
      />

    </div>
  );
}
