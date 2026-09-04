import React from 'react';

export default function BreachBarrierLogo({ 
  className = "h-10", 
  showTagline = true,
  variant = "primary" // "primary", "dark", "symbol", "wordmark", "vertical"
}) {
  const isDark = variant === "dark";
  const isVertical = variant === "vertical";
  const isSymbolOnly = variant === "symbol";
  const isWordmarkOnly = variant === "wordmark";

  const textColorLeft = isDark ? "#FFFFFF" : "#0F172A";
  const textColorRight = isDark ? "#A855F7" : "#6D28D9";
  const taglineColor = isDark ? "#94A3B8" : "#64748B";

  const LogoIcon = (
    <div className="relative flex items-center justify-center shrink-0">
      <img 
        src="/logo.svg" 
        alt="BreachBarrier Emblem" 
        className="w-10 h-10 min-w-[40px] min-h-[40px] max-h-[44px] object-contain shrink-0 drop-shadow-xs" 
      />
    </div>
  );

  if (isSymbolOnly) {
    return <div className={`inline-flex items-center shrink-0 ${className}`}>{LogoIcon}</div>;
  }

  return (
    <div className={`inline-flex ${isVertical ? 'flex-col items-center text-center gap-2' : 'items-center gap-3'} select-none shrink-0 ${className}`}>
      
      {/* Official Cropped Vector SVG Emblem */}
      {!isWordmarkOnly && LogoIcon}

      {/* Stylized Brand Wordmark + Tagline */}
      <div className={`flex flex-col justify-center leading-none ${isVertical ? 'items-center' : ''}`}>
        <div 
          className="flex items-center text-lg sm:text-2xl font-black tracking-tight" 
          style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.02em" }}
        >
          <span style={{ color: textColorLeft }}>BREACH</span>
          <span style={{ color: textColorRight }}>BARRIER</span>
        </div>

        {showTagline && (
          <div 
            className="flex items-center gap-1 sm:gap-1.5 text-[7.5px] sm:text-[9px] font-bold tracking-[0.12em] sm:tracking-[0.22em] uppercase mt-1 whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif", color: taglineColor }}
          >
            <span>DETECT</span>
            <span style={{ color: "#6D28D9" }}>•</span>
            <span>DEFEND</span>
            <span style={{ color: "#6D28D9" }}>•</span>
            <span>STAY AHEAD</span>
          </div>
        )}
      </div>

    </div>
  );
}
