import React from 'react';
import { Link } from 'react-router-dom';
import BreachBarrierLogo from './BreachBarrierLogo';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F1F5F9] text-[#0F172A] border-t border-[#D4D4D8]">
      
      {/* Main Footer Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Col 1: Brand & Slogan (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <Link to="/" className="inline-block">
            <BreachBarrierLogo showTagline={true} />
          </Link>

          <p className="text-xs text-slate-700 font-sans leading-relaxed max-w-sm">
            <strong className="text-[#0F172A]">BreachBarrier</strong> — Protecting Businesses. Securing Digital Futures. Enterprise-grade 24×7 managed cybersecurity delivery from India to Canada & global enterprises.
          </p>

          <div className="pt-2 flex items-center gap-3 text-xs text-[#6D28D9] font-bold">
            <Globe className="w-4 h-4" />
            <a href="https://breachbarrier.in" target="_blank" rel="noreferrer" className="hover:underline">
              breachbarrier.in
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links (2 cols) */}
        <div className="lg:col-span-2 space-y-3">
          <div className="text-xs font-black uppercase text-[#0F172A] tracking-wider border-b border-slate-200 pb-2">
            QUICK LINKS
          </div>
          <ul className="space-y-2 text-xs text-slate-700 font-sans font-medium">
            <li><Link to="/" className="hover:text-[#6D28D9] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#6D28D9] transition-colors">About Us</Link></li>
            <li><Link to="/why-choose-us" className="hover:text-[#6D28D9] transition-colors">Why Choose Us</Link></li>
            <li><Link to="/services/soc" className="hover:text-[#6D28D9] transition-colors">Services</Link></li>
            <li><Link to="/industries" className="hover:text-[#6D28D9] transition-colors">Industries</Link></li>
            <li><Link to="/process" className="hover:text-[#6D28D9] transition-colors">Deployment Process</Link></li>
            <li><Link to="/resources" className="hover:text-[#6D28D9] transition-colors">Resources</Link></li>
            <li><Link to="/faq" className="hover:text-[#6D28D9] transition-colors">FAQ & SOC Guide</Link></li>
            <li><Link to="/contact" className="hover:text-[#6D28D9] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Col 3: 6 Services (3 cols) */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-black uppercase text-[#0F172A] tracking-wider border-b border-slate-200 pb-2">
            6 CORE SERVICES
          </div>
          <ul className="space-y-1.5 text-xs text-slate-700 font-sans font-medium">
            <li><Link to="/services/soc" className="hover:text-[#6D28D9] transition-colors">24×7 SOC Monitoring</Link></li>
            <li><Link to="/services/mdr" className="hover:text-[#6D28D9] transition-colors">Managed Detection & Response (MDR)</Link></li>
            <li><Link to="/services/pentesting" className="hover:text-[#6D28D9] transition-colors">Penetration Testing</Link></li>
            <li><Link to="/services/incident-response" className="hover:text-[#6D28D9] transition-colors">Incident Response & Forensics</Link></li>
            <li><Link to="/services/vulnerability-management" className="hover:text-[#6D28D9] transition-colors">Vulnerability Management</Link></li>
            <li><Link to="/services/compliance" className="hover:text-[#6D28D9] transition-colors">Compliance Readiness (ISO/SOC2)</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact & Global Center (3 cols) */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-black uppercase text-[#0F172A] tracking-wider border-b border-slate-200 pb-2">
            GLOBAL OPERATIONS
          </div>
          <div className="space-y-2.5 text-xs text-slate-700 font-sans">
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-[#6D28D9] shrink-0 mt-0.5" />
              <a href="mailto:info@breachbarriersecurity.com" className="hover:text-[#6D28D9] transition-colors">
                info@breachbarriersecurity.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-[#6D28D9] shrink-0 mt-0.5" />
              <a href="tel:+916355496696" className="hover:text-[#6D28D9] transition-colors">
                +91 63554 96696
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#6D28D9] shrink-0 mt-0.5" />
              <span>India (Global Delivery Center)</span>
            </div>
            <div className="text-[11px] text-emerald-700 font-bold pt-1">
              ● 24×7 SOC Operations On-Duty
            </div>
          </div>
        </div>

      </div>

    </footer>
  );
}
