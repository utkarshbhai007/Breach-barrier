// Google Analytics 4 (GA4) Integration Utility
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

let isInitialized = false;

export function initGA() {
  if (isInitialized || typeof window === 'undefined') return;

  // If gtag is already loaded via index.html, use it directly
  if (window.gtag) {
    isInitialized = true;
    return;
  }

  if (!GA_MEASUREMENT_ID) {
    return;
  }

  // Inject gtag.js script if not already present in DOM
  const existingScript = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
  if (!existingScript) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We manually trigger on React Router navigation
    anonymize_ip: true
  });

  isInitialized = true;
}

export function trackPageView(path, title) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href
  });
}

export function trackEvent(action, category, label, value) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
}
