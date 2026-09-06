import React, { useState } from 'react';
import { ShieldCheck, ArrowUpRight, Cpu, Activity, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SecurityPostureChecker() {
  const [infra, setInfra] = useState('cloud');
  const [mfa, setMfa] = useState('partial');
  const [soc, setSoc] = useState('none');
  const [compliance, setCompliance] = useState('iso');

  const calculateScore = () => {
    let score = 100;
    if (infra === 'hybrid') score -= 10;
    if (infra === 'onprem') score -= 15;
    if (mfa === 'none') score -= 35;
    if (mfa === 'partial') score -= 15;
    if (soc === 'none') score -= 30;
    if (soc === 'office_hours') score -= 15;
    return Math.max(score, 25);
  };

  const score = calculateScore();
  const getGrade = (s) => {
    if (s >= 85) return { grade: 'GRADE: A', color: 'text-emerald-700 bg-emerald-100 border-emerald-300', text: 'LOW BREACH PROBABILITY', barColor: 'bg-emerald-500', action: 'Maintain proactive threat hunting & zero-trust posture.' };
    if (s >= 70) return { grade: 'GRADE: B', color: 'text-blue-700 bg-blue-100 border-blue-300', text: 'MODERATE RISK EXPOSURE', barColor: 'bg-blue-500', action: 'Deploy 24/7 SIEM correlation & active EDR containment.' };
    if (s >= 50) return { grade: 'GRADE: C', color: 'text-amber-800 bg-amber-100 border-amber-300', text: 'HIGH RANSOMWARE VULNERABILITY', barColor: 'bg-amber-500', action: 'Critical gaps in after-hours detection. Urgent SOC escalation needed.' };
    return { grade: 'GRADE: F', color: 'text-rose-800 bg-rose-100 border-rose-300', text: 'CRITICAL RISK: SEVERE EXPOSURE', barColor: 'bg-rose-500', action: 'Immediate emergency incident triage & MFA lockdown required.' };
  };

  const result = getGrade(score);

  return (
    <section className="relative border-b border-[#D6D0C2] bg-[#F2EFE9] py-8 sm:py-10 px-4 sm:px-8 overflow-hidden" id="audit">
      {/* Subtle tech background grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#6D28D9 1px, transparent 1px), radial-gradient(#0F172A 1px, #F2EFE9 1px)`,
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 14px 14px'
        }}
      />

      <div className="max-w-[1400px] mx-auto space-y-5 relative z-10">
        
        {/* Header Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6D28D9]" />
            <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider font-sans">
              Interactive Risk Benchmark Engine
            </span>
          </div>
        </div>

        {/* Compact 2-Column Dashboard Box */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: 2x2 Question Grid (7 cols) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              
              {/* Q1: Infrastructure */}
              <div className="space-y-1.5 p-3.5 bg-[#F8FAFC] dark:bg-[#151624] rounded-xl border border-slate-200/70 dark:border-[#27293D]">
                <label className="text-[11px] font-bold text-slate-900 dark:text-white uppercase flex items-center gap-1.5">
                  <span className="text-[#DC2626]">+</span> 1. INFRASTRUCTURE
                </label>
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { id: 'cloud', label: 'CLOUD' },
                    { id: 'hybrid', label: 'HYBRID' },
                    { id: 'onprem', label: 'ON-PREM' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setInfra(opt.id)}
                      className={`cursor-target py-1.5 px-1 text-[10px] font-bold rounded-lg transition-all text-center ${
                        infra === opt.id 
                          ? 'bg-[#DC2626] text-white shadow-xs' 
                          : 'bg-white dark:bg-[#1B1D2E] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#25283E] border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q2: MFA */}
              <div className="space-y-1.5 p-3.5 bg-[#F8FAFC] dark:bg-[#151624] rounded-xl border border-slate-200/70 dark:border-[#27293D]">
                <label className="text-[11px] font-bold text-slate-900 dark:text-white uppercase flex items-center gap-1.5">
                  <span className="text-[#DC2626]">+</span> 2. MFA ENFORCEMENT
                </label>
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { id: 'full', label: '100%' },
                    { id: 'partial', label: 'PARTIAL' },
                    { id: 'none', label: 'NONE' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setMfa(opt.id)}
                      className={`cursor-target py-1.5 px-1 text-[10px] font-bold rounded-lg transition-all text-center ${
                        mfa === opt.id 
                          ? 'bg-[#DC2626] text-white shadow-xs' 
                          : 'bg-white dark:bg-[#1B1D2E] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#25283E] border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q3: SOC Monitoring */}
              <div className="space-y-1.5 p-3.5 bg-[#F8FAFC] dark:bg-[#151624] rounded-xl border border-slate-200/70 dark:border-[#27293D]">
                <label className="text-[11px] font-bold text-slate-900 dark:text-white uppercase flex items-center gap-1.5">
                  <span className="text-[#DC2626]">+</span> 3. SOC MONITORING
                </label>
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { id: '247', label: '24/7/365' },
                    { id: 'office_hours', label: '8×5' },
                    { id: 'none', label: 'NO SOC' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setSoc(opt.id)}
                      className={`cursor-target py-1.5 px-1 text-[10px] font-bold rounded-lg transition-all text-center ${
                        soc === opt.id 
                          ? 'bg-[#DC2626] text-white shadow-xs' 
                          : 'bg-white dark:bg-[#1B1D2E] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#25283E] border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q4: Compliance */}
              <div className="space-y-1.5 p-3.5 bg-[#F8FAFC] dark:bg-[#151624] rounded-xl border border-slate-200/70 dark:border-[#27293D]">
                <label className="text-[11px] font-bold text-slate-900 dark:text-white uppercase flex items-center gap-1.5">
                  <span className="text-[#DC2626]">+</span> 4. COMPLIANCE TARGET
                </label>
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { id: 'iso', label: 'ISO / SOC2' },
                    { id: 'hipaa', label: 'HIPAA' },
                    { id: 'internal', label: 'INTERNAL' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setCompliance(opt.id)}
                      className={`cursor-target py-1.5 px-1 text-[10px] font-bold rounded-lg transition-all text-center ${
                        compliance === opt.id 
                          ? 'bg-[#DC2626] text-white shadow-xs' 
                          : 'bg-white dark:bg-[#1B1D2E] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#25283E] border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Compact Live Telemetry Gauge with Subtle Backdrop Image (5 cols) */}
            <div className="lg:col-span-5 relative p-5 bg-[#F8FAFC] dark:bg-[#151624] rounded-xl border border-slate-200/80 dark:border-[#27293D] space-y-3.5 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <img
                  src="https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=600&q=80"
                  alt="Telemetry"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/70 dark:from-[#151624] dark:via-[#151624]/90 dark:to-[#151624]/70" />
              </div>

              {/* Top Row: Score + Grade */}
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">BENCHMARK SCORE</span>
                  <div className="text-3xl font-black text-[#0F172A] dark:text-white tracking-tight">{score} <span className="text-sm font-normal text-slate-400">/ 100</span></div>
                </div>
                <div className="text-right">
                  <span className={`px-2.5 py-1 text-xs font-black rounded-lg border ${result.color}`}>
                    {result.grade}
                  </span>
                  <div className="text-[10px] font-bold text-slate-700 dark:text-slate-300 pt-1">{result.text}</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative z-10 w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 rounded-full ${
                    score >= 80 ? 'bg-emerald-500' : score >= 60 ? 'bg-blue-500' : score >= 40 ? 'bg-amber-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${score}%` }}
                />
              </div>

              {/* Bottom Action Strip */}
              <div className="relative z-10 pt-1 flex items-center justify-between gap-3 text-xs">
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug line-clamp-2">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Action:</span> {result.action}
                </p>
                <Link
                  to="/contact"
                  className="cursor-target shrink-0 px-3.5 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[11px] font-bold rounded-lg flex items-center gap-1 transition-colors shadow-xs"
                >
                  <span>CLAIM AUDIT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
