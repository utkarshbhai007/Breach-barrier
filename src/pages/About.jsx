import React from 'react';
import { 
  Shield, 
  Target, 
  Award, 
  CheckCircle2, 
  Zap, 
  Lock, 
  RefreshCw, 
  Terminal, 
  Flame, 
  Check, 
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import InteractiveCyberGridCTA from '../components/InteractiveCyberGridCTA';
import PageHero from '../components/PageHero';

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 1 0-1.45 1.45m1.37 9.74V9.93H5.09v8.57h2.74Z" />
    </svg>
  );
}

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

  const credentials = [
    'Certified Penetration Tester (CPTE)',
    'Network Administrator',
    'Top 3% TryHackMe Player',
    'HackTheBox CTF Player',
    'Ethical Hacking Essentials (EHE)',
  ];

  return (
    <div className="bg-[#EAE7E0] dark:bg-[#0A0A0E] text-[#0F172A] dark:text-[#F8FAFC] transition-colors duration-200">
      
      {/* 1. Header Hero */}
      <PageHero
        tag="About BreachBarrier Security • Cyber Defense Reimagined"
        title="BUILDING A SAFER"
        titleAccent="DIGITAL FUTURE."
        pillars={['Offensive Resilience', '24/7 Threat Neutralization', 'Zero-Trust Architecture']}
        description="BreachBarrier Security delivers enterprise-grade cybersecurity protection to organizations worldwide. We combine elite offensive and defensive cybersecurity talent with continuous threat monitoring to make world-class protection accessible without the overhead of a bloated in-house team."
      />

      {/* 2. FOUNDER'S MESSAGE (Prominent Highlight) */}
      <section className="border-b border-[#D6D0C2] dark:border-[#262736] py-14 sm:py-20 px-4 sm:px-8 bg-white dark:bg-[#10111A]">
        <div className="max-w-[1300px] mx-auto space-y-8">
          
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] dark:bg-[#EF4444] animate-pulse" />
            <span className="text-xs font-bold text-[#DC2626] dark:text-[#EF4444] uppercase tracking-wider font-sans">
              LEADERSHIP & VISION • FOUNDER'S MESSAGE
            </span>
          </div>

          <div className="bg-[#F2EFE9] dark:bg-[#151722] border-2 border-black dark:border-[#2E3145] p-6 sm:p-10 rounded-2xl shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] dark:shadow-[6px_6px_0px_0px_rgba(239,68,68,0.8)] grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Founder Profile Card */}
            <div className="lg:col-span-4 space-y-4 bg-white dark:bg-[#1A1C2A] p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/60 border-2 border-[#DC2626] dark:border-[#EF4444] flex items-center justify-center text-[#DC2626] dark:text-[#EF4444] shrink-0 shadow-sm">
                  <Terminal className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-black text-[#0F172A] dark:text-white uppercase tracking-tight">
                    Ravi Makwana
                  </h3>
                  <div className="text-xs font-bold text-[#DC2626] dark:text-[#EF4444] font-sans">
                    Founder & Principal Security Architect
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                    BreachBarrier Security
                  </div>
                </div>
              </div>

              {/* Verified Credentials Pills */}
              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-sans">
                  PROVEN CREDENTIALS & RANKINGS:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {credentials.map((cred, cIdx) => (
                    <span 
                      key={cIdx} 
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-red-50 dark:bg-red-950/50 text-slate-800 dark:text-slate-200 border border-red-200/80 dark:border-red-900/50 font-sans"
                    >
                      <Check className="w-3 h-3 text-[#DC2626] dark:text-[#EF4444]" />
                      {cred}
                    </span>
                  ))}
                </div>
              </div>

              {/* LinkedIn Connect Button */}
              <div className="pt-3">
                <a
                  href="https://www.linkedin.com/in/ravi-makwana89?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target w-full py-2.5 px-4 bg-[#0077B5] hover:bg-[#005f93] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm font-sans"
                >
                  <LinkedInIcon className="w-4 h-4 fill-current" />
                  <span>CONNECT ON LINKEDIN</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Col: Personal Message */}
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 text-xs font-bold text-[#DC2626] dark:text-[#EF4444] font-sans uppercase tracking-wider">
                A Note From The Founder
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0F172A] dark:text-white leading-snug">
                "CYBERSECURITY IS NOT A CHECKBOX. IT IS AN ONGOING BATTLE OF WITS."
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                <p>
                  "In the modern cyber landscape, adversaries don't wait for your office hours, and they don't give second chances. Having spent years hunting exploits, competing in elite CTFs, and ranking in the top 3% globally on TryHackMe, I have seen firsthand how easily standard passive defenses fall apart under real offensive pressure."
                </p>
                <p>
                  "I founded <strong className="text-[#0F172A] dark:text-white font-bold">BreachBarrier Security</strong> with one core objective: to arm organizations with true offensive and defensive resilience. We don't just hand you automated scanner reports or generic compliance templates. We look at your infrastructure through an attacker's eyes, expose vulnerabilities before criminals find them, and back it with 24/7 active SOC & MDR containment."
                </p>
                <p className="font-medium text-[#0F172A] dark:text-white">
                  "Our commitment to every partner is simple: enterprise-grade security architecture, transparent communication, and 100% accountability in defending what you've built."
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <div className="w-8 h-0.5 bg-[#DC2626] dark:bg-[#EF4444]" />
                <span className="text-xs font-bold text-[#0F172A] dark:text-white uppercase font-sans tracking-wide">
                  Ravi Makwana — Founder, BreachBarrier Security
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Why We Exist & Mission / Vision */}
      <section className="border-b border-[#D6D0C2] dark:border-[#262736] py-14 px-4 sm:px-8 bg-[#EAE7E0] dark:bg-[#0E0F17]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8">
          
          {/* Why We Exist */}
          <div className="lg:col-span-6 bg-white dark:bg-[#13141E] border border-black dark:border-[#26283A] p-8 sm:p-10 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(220,38,38,0.7)] space-y-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 text-xs font-semibold text-[#DC2626] dark:text-[#EF4444] font-sans">
              The Challenge
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-[#0F172A] dark:text-white">WHY WE EXIST</h2>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-medium">
              Cyberattacks are increasing exponentially every year, but most growing businesses cannot afford the millions required for an internal 24/7 Security Operations Center. We close that gap: 24/7 managed defense and offensive security delivered remotely, giving organizations continuous enterprise protection and expert support at a fraction of the cost.
            </p>
            <div className="p-4 bg-[#F2EFE9] dark:bg-[#1A1C2A] border-l-4 border-[#DC2626] dark:border-[#EF4444] text-xs font-bold text-[#0F172A] dark:text-white">
              "We believe cybersecurity isn't just about technology — it's about protecting businesses, people, and uninterrupted digital growth."
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-[#13141E] border border-slate-300 dark:border-[#26283A] p-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 text-xs font-semibold text-[#DC2626] dark:text-[#EF4444] font-sans">
                Purpose
              </span>
              <h3 className="font-heading text-xl font-black uppercase text-[#0F172A] dark:text-white">OUR MISSION</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                To empower organizations with proactive, 24×7 cybersecurity services across 5 core disciplines: Security Operations Center (SOC) & MDR, Incident Response (IR) & Forensics, Penetration Testing (VAPT), Attack Surface Management (ASM), and Vulnerability Management.
              </p>
            </div>

            <div className="bg-white dark:bg-[#13141E] border border-slate-300 dark:border-[#26283A] p-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 text-xs font-semibold text-[#DC2626] dark:text-[#EF4444] font-sans">
                Horizon
              </span>
              <h3 className="font-heading text-xl font-black uppercase text-[#0F172A] dark:text-white">OUR VISION</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                To become a globally trusted cybersecurity powerhouse recognized for technical excellence and relentless defense — delivering elite security capabilities from India to enterprises across Canada and worldwide.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Values (6 Values) */}
      <section className="border-b border-[#D6D0C2] dark:border-[#262736] py-14 px-4 sm:px-8 bg-[#F2EFE9] dark:bg-[#0B0C12]">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#DC2626] dark:text-[#EF4444] uppercase tracking-wider font-sans">
                Our Guiding Values • 6 Pillars
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="border border-[#D6D0C2] dark:border-[#26283A] bg-white dark:bg-[#13141E] p-6 space-y-3 hover:border-black dark:hover:border-[#EF4444] hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] transition-all"
                >
                  <div className="w-9 h-9 border border-slate-300 dark:border-slate-700 flex items-center justify-center bg-[#EAE7E0] dark:bg-slate-800 text-[#DC2626] dark:text-[#EF4444] rounded-lg">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-black text-[#0F172A] dark:text-white uppercase tracking-wider">{v.name}</h3>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-sans">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="border-b border-[#D4D4D8] dark:border-[#262736] py-14 px-4 sm:px-8 bg-white dark:bg-[#10111A]">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <div className="space-y-2">
            <div className="text-sm font-bold text-[#DC2626] dark:text-[#EF4444]">WHY CHOOSE BREACHBARRIER SECURITY</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-[#0F172A] dark:text-white">THE 6 STRATEGIC ADVANTAGES</h2>
          </div>

          <div className="border border-black dark:border-[#26283A] divide-y divide-black dark:divide-[#26283A] bg-[#F2EFE9] dark:bg-[#151722] shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] dark:shadow-[6px_6px_0px_0px_rgba(220,38,38,0.7)]">
            {whyChooseUsFull.map((item, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-[#13141E] hover:bg-[#F2EFE9] dark:hover:bg-[#1A1C2A] transition-colors grid md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-1 text-xs font-black text-[#DC2626] dark:text-[#EF4444]">
                  {item.num}
                </div>
                <div className="md:col-span-4 text-xs font-black text-[#0F172A] dark:text-white uppercase tracking-wider">
                  {item.title}
                </div>
                <div className="md:col-span-7 text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  {item.meaning}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our 5-Step Process */}
      <section className="border-b border-[#D6D0C2] dark:border-[#262736] py-14 px-4 sm:px-8 bg-[#EAE7E0] dark:bg-[#0A0A0E]">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <div className="space-y-2">
            <div className="text-sm font-bold text-[#DC2626] dark:text-[#EF4444]">OUR DELIVERY ROADMAP</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-[#0F172A] dark:text-white">HOW WE ENGAGE & PROTECT</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((p, idx) => (
              <div key={idx} className="border border-black dark:border-[#26283A] bg-white dark:bg-[#13141E] p-6 space-y-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(220,38,38,0.6)] flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#DC2626] dark:text-[#EF4444] font-sans">Step {p.step}</span>
                  <h3 className="text-xs font-black text-[#0F172A] dark:text-white uppercase tracking-wider leading-snug">{p.title}</h3>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-sans">{p.desc}</p>
                </div>
                <div className="text-[10px] text-slate-400 font-medium pt-2 border-t border-slate-100 dark:border-slate-800 font-sans">
                  Milestone {p.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing Interactive CTA */}
      <InteractiveCyberGridCTA
        title="READY TO STRENGTHEN"
        highlightText="YOUR CYBERSECURITY?"
        subtitle="Schedule a free initial security architecture consultation with Founder Ravi Makwana and our engineering team."
        buttonText="BOOK A FREE SECURITY CONSULTATION"
        buttonLink="/contact"
      />

    </div>
  );
}
