import React from 'react';

export default function BreachBarrierLogo({ 
  className = "h-11 sm:h-12 md:h-14",
  alt = "BreachBarrier - 24/7 Managed SOC & Cybersecurity Operations"
}) {
  return (
    <img 
      src="/breach-barrier-logo-removebg-preview.png" 
      alt={alt}
      className={`w-auto object-contain select-none shrink-0 drop-shadow-xs ${className}`}
      draggable={false}
    />
  );
}
