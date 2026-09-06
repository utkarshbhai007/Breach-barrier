import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Check, Shield, Activity, Bug, AlertOctagon, Scan, FileCheck, Zap, Cpu, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveCyberGridCTA from './InteractiveCyberGridCTA';
import GradientWaves from './GradientWaves';
import BlurText from './BlurText';
import FoldText from './FoldText';

export default function ServicePageLayout({ 
  title, 
  tagline,
  subtitle, 
  analogy,
  features, 
  benefits, 
  tools, 
  serviceCode = "SOC_01",
  cta 
}) {
  const location = useLocation();

  return (
    <div className="bg-[#EAE7E0] text-[#0F172A]">
      
      {/* Centered Service Hero Section with GradientWaves HUD */}
      <section className="relative border-b border-[#D6D0C2] bg-[#EAE7E0] overflow-hidden py-16 sm:py-20 px-4 sm:px-8">
        {/* Interactive GradientWaves Canvas Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-45">
          <GradientWaves
            horizonColor="#DC2626"
            waveColor="#EF4444"
            crestColor="#FFFFFF"
            speed={0.4}
            amplitude={2.5}
            waveScale={0.6}
            waveRatio={0.9}
            swell={35}
            turbulence={20}
            tilt={1.11}
            zoom={1.0}
            height={5.5}
            fogDepth={15}
            detail="medium"
            brightness={1.0}
            opacity={1.0}
            mouseInteraction={true}
            parallaxStrength={0.5}
            grain={true}
            grainIntensity={0.04}
          />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 relative z-10">
          
          {/* Top Status & Badges */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-2.5"
          >
            <span className="px-3 py-1 bg-white border border-purple-200/90 rounded-full text-xs font-semibold text-[#6D28D9] font-sans shadow-2xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
              {serviceCode}
            </span>
            <span className="px-3 py-1 bg-white border border-slate-300/80 rounded-full text-[11px] font-semibold text-[#0F172A] uppercase flex items-center gap-2 shadow-2xs font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>24×7 ACTIVE SERVICE SPECIFICATION</span>
            </span>
            <span className="px-3 py-1 bg-[#E2F952] text-black font-bold border border-black rounded-full text-[11px] font-sans">
              Active Threat Containment
            </span>
          </motion.div>

          {/* Centered Title & Tagline with BlurText */}
          <div className="space-y-3">
            <h1 className="font-brutal text-3xl sm:text-5xl md:text-7xl font-black leading-[1.08] tracking-tight uppercase flex flex-col items-center justify-center">
              <BlurText
                text={title}
                delay={120}
                animateBy="words"
                direction="top"
                className="text-[#0F172A]"
              />
            </h1>

            {tagline && (
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#D6D0C2] text-xs sm:text-sm font-medium text-slate-700 font-sans tracking-normal shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
                  <span>{tagline}</span>
                </span>
              </div>
            )}
          </div>

          {/* Subtitle with FoldText */}
          {subtitle && (
            <div className="max-w-2xl mx-auto text-center px-2 sm:px-0">
              <FoldText
                text={subtitle}
                splitBy="word"
                hinge="top"
                trigger="mount"
                duration={0.55}
                stagger={0.025}
                ease="power3.out"
                color="#334155"
                fontSize="clamp(0.875rem, 1.5vw, 1.025rem)"
                fontWeight={400}
                className="font-sans text-center"
                style={{ lineHeight: '1.65', letterSpacing: 'normal' }}
              />
            </div>
          )}

          {/* Centered Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none"
          >
            <Link
              to="/contact"
              className="brutal-btn-black w-full sm:w-auto px-7 py-3.5 text-xs flex items-center justify-center gap-2 cursor-pointer group text-center"
            >
              <span>GET STARTED WITH {title.toUpperCase()}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
            </Link>

            <Link
              to="/contact"
              className="brutal-btn-outline w-full sm:w-auto px-6 py-3.5 text-xs flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>REQUEST TECHNICAL SCOPE SOW</span>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* 3. Real-Life Analogy Explainer Card (if provided) */}
      {analogy && (
        <section className="border-b border-[#D6D0C2] bg-[#F2EFE9] py-8 px-4 sm:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="border border-black bg-white p-6 sm:p-7 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#DC2626] dark:text-[#EF4444] uppercase font-sans">
                  <span>💡 How It Works • Real-World Analogy</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-sans italic font-medium leading-relaxed">
                  "{analogy}"
                </p>
              </div>
              <div className="shrink-0 text-xs font-bold text-[#DC2626] dark:text-[#EF4444] font-sans">
                Ravi Makwana Philosophy
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Animated Ticker Tape */}

      {/* 4. Features Grid (Scope of Deliverables) with Hover Lifts */}
      {features && (
        <section className="border-b border-[#D6D0C2] bg-[#EAE7E0] py-14 px-4 sm:px-8">
          <div className="max-w-[1400px] mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider font-sans">
                  What's Included In Scope • Deliverables
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline font-sans">Enterprise Spec</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, x: -4, boxShadow: '6px 6px 0px 0px #0F172A' }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="border border-black bg-white p-7 space-y-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between group cursor-default"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                      <div className="w-10 h-10 border border-black flex items-center justify-center bg-[#F2EFE9] group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                        {f.icon}
                      </div>
                      <span className="text-[11px] font-bold text-[#6D28D9] font-sans">
                        Scope 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-heading text-sm sm:text-base font-bold text-[#0F172A] uppercase tracking-tight group-hover:text-[#6D28D9] transition-colors leading-snug">
                      {f.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                      {f.desc}
                    </p>
                  </div>

                  <div className="text-[10px] text-slate-500 font-medium pt-2.5 border-t border-slate-100 flex items-center justify-between font-sans">
                    <span>24×7 Dispatch</span>
                    <span className="text-emerald-600 font-bold">● Included</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Benefits Matrix */}
      {benefits && (
        <section className="border-b border-[#D4D4D8] bg-white py-14 px-4 sm:px-8">
          <div className="max-w-[1400px] mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider font-sans">
                  Core Technical &amp; Business Impact
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline font-sans">Proven Value</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((b, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 3 }}
                  className="flex items-start gap-3.5 p-5 border border-black bg-[#F2EFE9] shadow-xs"
                >
                  <span className="w-5 h-5 bg-[#E2F952] border border-black flex items-center justify-center text-black font-black text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-xs font-bold text-[#0F172A] leading-relaxed font-sans">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Integrated Tooling Matrix with Hover Glow Badges */}
      {tools && (
        <section className="border-b border-[#D6D0C2] bg-[#EAE7E0] py-14 px-4 sm:px-8">
          <div className="max-w-[1400px] mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider font-sans">
                  Deployed Tooling &amp; SIEM Integrations
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline font-sans">Zero Extra Licensing</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {tools.map((t, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-white border border-black text-xs font-bold text-[#0F172A] uppercase shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] flex items-center gap-2 cursor-default hover:border-[#6D28D9]"
                >
                  <span className="w-1.5 h-1.5 bg-[#6D28D9] rounded-none" />
                  <span>{t}</span>
                </motion.span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Middle Animated Ticker Tape */}

      {/* 7. Closing Interactive Cyber Grid CTA (Photo 2 Reference) */}
      <InteractiveCyberGridCTA
        title={cta ? cta : "READY TO DEPLOY"}
        highlightText={title ? title.toUpperCase() : "BREACHBARRIER SECURITY"}
        subtitle="Talk directly to Founder Ravi Makwana and our certified security engineers. Free initial architecture scope consultation."
        buttonText="BOOK A FREE CONSULTATION"
        buttonLink="/contact"
      />

    </div>
  );
}
