import React, { useState, useEffect } from 'react';
import { 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Lock, 
  ShieldCheck, 
  ArrowRight, 
  RefreshCw, 
  Zap, 
  Shield, 
  FileCode, 
  KeyRound, 
  Database 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThreatSimulator() {
  const [selectedAttack, setSelectedAttack] = useState('ransomware');
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(4); // Default to completed state for instant clarity

  const scenarios = {
    ransomware: {
      title: "Ransomware & Zero-Day Exploit",
      subtitle: "Phishing invoice with hidden PowerShell macro",
      icon: FileCode,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
      target: "Endpoint: DEV-CAD-04 (Workstation)",
      timeToContain: "3.6s",
      steps: [
        {
          title: "Infection Trigger",
          time: "0.0s",
          desc: "Employee opens malicious email invoice; hidden process attempts execution.",
          status: "DETECTED"
        },
        {
          title: "Telemetry AI Correlation",
          time: "0.8s",
          desc: "SIEM behavioral engine flags unauthorized registry & process write attempts.",
          status: "ANALYZED"
        },
        {
          title: "Instant Endpoint Isolation",
          time: "1.8s",
          desc: "EDR automatically cuts network access to isolate the infected device.",
          status: "QUARANTINED"
        },
        {
          title: "SOC Forensic Triage",
          time: "2.7s",
          desc: "24×7 SOC analyst purges malicious payload & terminates attacker sessions.",
          status: "CLEARED"
        },
        {
          title: "Threat 100% Neutralized",
          time: "3.6s",
          desc: "Device restored. Enterprise servers and customer databases remain 100% untouched.",
          status: "SAFE"
        }
      ]
    },
    phishing: {
      title: "Executive Credential & Token Theft",
      subtitle: "Spoofed portal attempting MFA token replay",
      icon: KeyRound,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
      target: "Cloud Identity: CFO M365 Account",
      timeToContain: "2.4s",
      steps: [
        {
          title: "Suspicious Login Attempt",
          time: "0.0s",
          desc: "Attacker attempts to replay stolen session token from an unauthorized IP.",
          status: "DETECTED"
        },
        {
          title: "Geofence & AI Alert",
          time: "0.6s",
          desc: "Automated identity security flags anomalous geofence location instantly.",
          status: "ANALYZED"
        },
        {
          title: "Session Invalidation",
          time: "1.2s",
          desc: "All active cloud session tokens across M365 and AWS are revoked immediately.",
          status: "BLOCKED"
        },
        {
          title: "Domain Takedown Dispatched",
          time: "1.8s",
          desc: "Automated abuse notice dispatched to registrar to seize malicious domain.",
          status: "DISPATCHED"
        },
        {
          title: "Account Secured",
          time: "2.4s",
          desc: "Zero unauthorized access. Executive account reset and credentials protected.",
          status: "SAFE"
        }
      ]
    },
    api: {
      title: "Unauthorized API Data Exfiltration",
      subtitle: "Automated botnet with SQL injection probe",
      icon: Database,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
      target: "API Gateway: /api/v1/customer-vault",
      timeToContain: "1.9s",
      steps: [
        {
          title: "High-Volume Bot Probe",
          time: "0.0s",
          desc: "10,000 req/sec probe detected targeting customer database endpoint.",
          status: "DETECTED"
        },
        {
          title: "WAF Pattern Intercept",
          time: "0.5s",
          desc: "Cloud edge firewall identifies SQL injection signature pattern.",
          status: "INTERCEPTED"
        },
        {
          title: "Subnet Edge Ban",
          time: "1.0s",
          desc: "Attacker IP range permanently blocked at DNS & edge firewall layer.",
          status: "BANNED"
        },
        {
          title: "Hotfix & Rule Hardening",
          time: "1.5s",
          desc: "Security engineer verifies sanitized input rules in staging pipeline.",
          status: "HARDENED"
        },
        {
          title: "Database 100% Intact",
          time: "1.9s",
          desc: "0 customer records accessed. Comprehensive audit report logged.",
          status: "SAFE"
        }
      ]
    }
  };

  const current = scenarios[selectedAttack];

  const runSimulation = (key = selectedAttack) => {
    setSelectedAttack(key);
    setIsRunning(true);
    setActiveStep(0);

    let stepCounter = 0;
    const interval = setInterval(() => {
      stepCounter++;
      if (stepCounter < scenarios[key].steps.length) {
        setActiveStep(stepCounter);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 750);
  };

  return (
    <section id="simulator" className="relative border-b border-[#D6D0C2] bg-[#EAE7E0] py-10 sm:py-14 px-4 sm:px-8 overflow-hidden">
      {/* Subtle high-tech cyber pattern watermark */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#6D28D9 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, #EAE7E0 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-[1400px] mx-auto space-y-6 relative z-10">
        
        {/* Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-[#0F172A] uppercase tracking-widest">
              LIVE SOC ATTACK CONTAINMENT TERMINAL
            </span>
          </div>
          <span className="text-xs font-medium text-slate-500">
            Interactive demonstration of rapid automated threat neutralization
          </span>
        </div>

        {/* 3 Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {Object.keys(scenarios).map((key) => {
            const item = scenarios[key];
            const isSelected = selectedAttack === key;
            const Icon = item.icon;

            return (
              <button
                key={key}
                onClick={() => runSimulation(key)}
                className={`cursor-target group relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-3 overflow-hidden ${
                  isSelected
                    ? 'bg-white border-[#6D28D9] shadow-md ring-2 ring-[#6D28D9]/20'
                    : 'bg-white/90 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden opacity-30 group-hover:opacity-40 transition-opacity">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/70" />
                </div>

                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-[#6D28D9] text-white' : 'bg-purple-50 text-[#6D28D9] border border-purple-200/80'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="px-2 py-0.5 text-[10px] font-bold text-[#6D28D9] bg-purple-50 rounded-full border border-purple-200">
                        {isRunning ? 'SIMULATING...' : 'ACTIVE SCENARIO'}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A] leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 pt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-2 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-[#6D28D9]">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <Play className={`w-3 h-3 ${isSelected && isRunning ? 'animate-spin' : 'fill-[#6D28D9]'}`} />
                    <span>{isSelected && isRunning ? 'Containing Threat...' : 'Simulate Attack'}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">avg {item.timeToContain}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Clean Live Containment Flow Container */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6">
          
          {/* Top Control Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#6D28D9]" />
                <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                  Automated Defense Pipeline
                </span>
                <span className="text-[10px] text-slate-400 font-mono">({current.target})</span>
              </div>
              <p className="text-xs text-slate-500">
                Watching telemetry signals, isolating host, and securing credentials in real time.
              </p>
            </div>

            <button
              onClick={() => runSimulation(selectedAttack)}
              disabled={isRunning}
              className="cursor-target shrink-0 px-4 py-2 bg-[#6D28D9] hover:bg-[#5B21B6] disabled:opacity-50 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-all shadow-xs"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'Running Defense...' : 'Re-Run Simulation'}</span>
            </button>
          </div>

          {/* 5 Clean Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {current.steps.map((step, idx) => {
              const isPassed = idx <= activeStep;
              const isCurrent = idx === activeStep;

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between space-y-3 ${
                    isCurrent && isRunning
                      ? 'bg-purple-50/80 border-[#6D28D9] shadow-sm'
                      : isPassed
                      ? 'bg-[#F8FAFC] border-slate-200'
                      : 'bg-slate-50/50 border-slate-100 opacity-40'
                  }`}
                >
                  <div className="space-y-2">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400">
                        STEP 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#6D28D9]">
                        +{step.time}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xs font-bold text-[#0F172A] leading-tight">
                      {step.title}
                    </h4>

                    {/* Description */}
                    <p className="text-[11px] text-slate-600 leading-snug font-normal">
                      {step.desc}
                    </p>
                  </div>

                  {/* Status Footer */}
                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      {step.status}
                    </span>
                    {isPassed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <div className="w-3 h-3 rounded-full border border-slate-300" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reassuring Containment Summary Banner */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-950">
                  Threat Fully Neutralized in {current.timeToContain} — Zero Enterprise Impact
                </div>
                <div className="text-[11px] text-emerald-800 font-medium">
                  Malicious processes purged, session keys rotated, and audit logs prepared for ISO 27001/SOC 2 compliance.
                </div>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="px-2.5 py-1 text-[10px] font-bold text-emerald-800 bg-white rounded-lg border border-emerald-200">
                0 BYTES EXFILTRATED
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
