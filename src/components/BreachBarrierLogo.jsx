import React from 'react';

export default function BreachBarrierLogo({ 
  className = "h-11 sm:h-12 md:h-14",
  alt = "BreachBarrier - 24/7 Managed SOC & Cybersecurity Operations"
}) {
  return (
    <div className="inline-flex items-center">
      <img 
        src="/breach-barrier-logo-removebg-preview.png" 
        alt={alt}
        className={`dark:hidden w-auto object-contain select-none shrink-0 drop-shadow-xs ${className}`}
        draggable={false}
      />
      <img 
        src="/breach-barrier-logo-red-dark.png" 
        alt={alt}
        className={`hidden dark:block w-auto object-contain select-none shrink-0 drop-shadow-sm ${className}`}
        draggable={false}
      />
    </div>
  );
}
