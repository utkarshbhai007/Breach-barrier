import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  ChevronDown, 
  Shield, 
  Activity, 
  Bug, 
  AlertOctagon, 
  Scan, 
  FileCheck 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BreachBarrierLogo from './BreachBarrierLogo';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const servicesList = [
    {
      title: 'SOC Monitoring (24×7)',
      path: '/services/soc',
      desc: '24/7/365 active telemetry & threat triage',
      icon: Shield
    },
    {
      title: 'Managed Detection & Response (MDR)',
      path: '/services/mdr',
      desc: 'Real-time hunting & automated endpoint isolation',
      icon: Activity
    },
    {
      title: 'Penetration Testing',
      path: '/services/pentesting',
      desc: 'Ethical hacking & offensive red team labs',
      icon: Bug
    },
    {
      title: 'Incident Response & Forensics',
      path: '/services/incident-response',
      desc: 'Rapid emergency containment & RCA',
      icon: AlertOctagon
    },
    {
      title: 'Vulnerability Management',
      path: '/services/vulnerability-management',
      desc: 'Continuous scanning & risk prioritization',
      icon: Scan
    },
    {
      title: 'Compliance Readiness (ISO/SOC2)',
      path: '/services/compliance',
      desc: 'ISO 27001, SOC 2, HIPAA & PIPEDA audit prep',
      icon: FileCheck
    },
  ];

  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdown(false);
    setMobileServicesOpen(false);
  }, [location]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on scroll so no menu stays popped up
  useEffect(() => {
    const handleScroll = () => {
      setServicesDropdown(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className="sticky top-0 z-50 bg-[#EAE7E0]/95 backdrop-blur-md border-b border-[#D6D0C2]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-8 py-2.5">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group py-0.5">
          <BreachBarrierLogo className="h-8 sm:h-9 max-h-[38px]" />
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase font-bold tracking-wider text-[#0F172A]">
          <Link to="/" className={`transition-colors hover:text-[#6D28D9] ${location.pathname === '/' ? 'text-[#6D28D9]' : ''}`}>
            HOME
          </Link>
          <span className="text-slate-300">/</span>

          <Link to="/about" className={`transition-colors hover:text-[#6D28D9] ${location.pathname === '/about' ? 'text-[#6D28D9]' : ''}`}>
            ABOUT
          </Link>
          <span className="text-slate-300">/</span>

          <Link to="/why-choose-us" className={`transition-colors hover:text-[#6D28D9] ${location.pathname === '/why-choose-us' ? 'text-[#6D28D9]' : ''}`}>
            WHY US
          </Link>
          <span className="text-slate-300">/</span>

          {/* Services Dropdown */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              onClick={() => setServicesDropdown(!servicesDropdown)}
              className={`cursor-target flex items-center gap-1 transition-colors uppercase font-bold text-xs hover:text-[#6D28D9] py-1 ${
                isServicesActive ? 'text-[#6D28D9]' : ''
              }`}
            >
              <span>SERVICES</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#6D28D9]' : ''}`} />
            </button>

            {/* Desktop Dropdown Panel */}
            <AnimatePresence>
              {servicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[480px] z-50"
                >
                  <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xl overflow-hidden">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-1.5 border-b border-slate-100 mb-1 flex items-center justify-between">
                      <span>MANAGED CYBERSECURITY SERVICES</span>
                      <span className="text-[#6D28D9] font-mono">// 6 VERTICALS</span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {servicesList.map((s, idx) => {
                        const Icon = s.icon;
                        const isActive = location.pathname === s.path;
                        return (
                          <Link
                            key={idx}
                            to={s.path}
                            className={`cursor-target p-2.5 rounded-xl transition-all duration-150 flex items-start gap-2.5 group ${
                              isActive 
                                ? 'bg-purple-50 border border-purple-200' 
                                : 'hover:bg-slate-50 border border-transparent hover:border-slate-200'
                            }`}
                          >
                            <div className="w-7 h-7 rounded-lg bg-purple-50 text-[#6D28D9] group-hover:bg-[#6D28D9] group-hover:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#6D28D9] transition-colors leading-tight">
                                {s.title}
                              </div>
                              <p className="text-[10.5px] text-slate-500 font-normal leading-tight line-clamp-1">
                                {s.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="pt-2 mt-1 border-t border-slate-100 px-3 py-1.5 flex items-center justify-between text-[11px] bg-slate-50 rounded-xl">
                      <span className="text-slate-500 font-medium">Need custom architecture?</span>
                      <Link to="/contact" className="text-[#6D28D9] font-bold hover:underline flex items-center gap-1">
                        <span>Talk to Architect</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="text-slate-300">/</span>

          <Link to="/industries" className={`transition-colors hover:text-[#6D28D9] ${location.pathname === '/industries' ? 'text-[#6D28D9]' : ''}`}>
            INDUSTRIES
          </Link>
          <span className="text-slate-300">/</span>

          <Link to="/resources" className={`transition-colors hover:text-[#6D28D9] ${location.pathname === '/resources' ? 'text-[#6D28D9]' : ''}`}>
            RESOURCES
          </Link>
          <span className="text-slate-300">/</span>

          <Link to="/contact" className={`transition-colors hover:text-[#6D28D9] ${location.pathname === '/contact' ? 'text-[#6D28D9]' : ''}`}>
            CONTACT
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            to="/contact"
            className="cursor-target px-4 py-2 bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <span>BOOK CONSULTATION</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 border border-slate-200 rounded-xl bg-white cursor-pointer"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white p-5 space-y-3 text-xs">
          <Link to="/" className="block py-2 border-b border-slate-100 font-bold">HOME</Link>
          <Link to="/about" className="block py-2 border-b border-slate-100 font-bold">ABOUT</Link>
          <Link to="/why-choose-us" className="block py-2 border-b border-slate-100 font-bold">WHY US</Link>
          
          {/* Mobile Services Accordion */}
          <div className="border-b border-slate-100 pb-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full py-2 flex items-center justify-between font-bold text-left"
            >
              <span>SERVICES</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#6D28D9]' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 py-1 space-y-2 bg-slate-50 rounded-xl p-3 mt-1 border border-slate-100">
                {servicesList.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={idx}
                      to={s.path}
                      className="flex items-center gap-2.5 py-1 text-slate-700 hover:text-[#6D28D9] font-medium"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#6D28D9]" />
                      <span>{s.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link to="/industries" className="block py-2 border-b border-slate-100 font-bold">INDUSTRIES</Link>
          <Link to="/resources" className="block py-2 border-b border-slate-100 font-bold">RESOURCES</Link>
          <Link to="/contact" className="block py-2 border-b border-slate-100 font-bold">CONTACT</Link>
          
          <div className="pt-2">
            <Link to="/contact" className="block w-full py-2.5 bg-[#6D28D9] text-white font-bold text-center rounded-xl">
              BOOK A FREE CONSULTATION ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
