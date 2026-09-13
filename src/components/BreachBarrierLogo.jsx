import React from 'react';

export default function BreachBarrierLogo({ 
  className = "h-11 sm:h-12 md:h-14",
  alt = "BreachBarrier Security - 24/7 Managed SOC & Cybersecurity Operations"
}) {
  return (
    <div className="inline-flex items-center">
      {/* Light Mode: new-logo.png with dark/black font */}
      <img 
        src="/new-logo.png" 
        alt={alt}
        className={`dark:hidden w-auto object-contain select-none shrink-0 drop-shadow-xs ${className}`}
        draggable={false}
      />
      {/* Dark Mode: new-logo-dark.png with white font */}
      <img 
        src="/new-logo-dark.png" 
        alt={alt}
        className={`hidden dark:block w-auto object-contain select-none shrink-0 drop-shadow-sm ${className}`}
        draggable={false}
      />
    </div>
  );
}
