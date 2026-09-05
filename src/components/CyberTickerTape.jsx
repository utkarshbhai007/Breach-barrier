import React from 'react';
import { motion } from 'framer-motion';

export default function CyberTickerTape({ 
  items = [
    "24×7 SOC MONITORING",
    "REAL-TIME THREAT CONTAINMENT",
    "ISO 27001 & SOC 2 AUDIT READY",
    "CLOUD & API PENETRATION TESTING",
    "ZERO TRUST ENDPOINT DEFENSE",
    "24×7 GLOBAL CYBER DEFENSE OPERATIONS",
    "INTELLIGENCE-LED THREAT HUNTING"
  ],
  speed = 25,
  variant = "purple" // "purple" or "yellow" or "black"
}) {
  const isYellow = variant === "yellow";
  const isBlack = variant === "black";

  const bgClass = isYellow 
    ? "bg-[#E2F952] text-[#0F172A] border-y border-black" 
    : isBlack 
      ? "bg-[#0F172A] text-white border-y border-black" 
      : "bg-[#6D28D9] text-white border-y border-black";

  const dotColor = isYellow ? "bg-[#0F172A]" : isBlack ? "bg-[#E2F952]" : "bg-[#E2F952]";

  return (
    <div className={`relative overflow-hidden py-3 font-sans text-xs font-black tracking-wider uppercase select-none ${bgClass}`}>
      <motion.div
        className="flex whitespace-nowrap gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span>{text}</span>
            <span className={`w-2 h-2 rounded-none ${dotColor} rotate-45 shrink-0 shadow-xs`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
