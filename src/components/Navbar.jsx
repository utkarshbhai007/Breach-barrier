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
  FileCheck,
  Sun,
  Moon 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BreachBarrierLogo from './BreachBarrierLogo';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
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

  return (    <header className="sticky top-0 z-50 bg-[#EAE7E0]/95 dark:bg-[#0A0A0E]/95 backdrop-blur-md border-b border-[#D6D0C2] dark:border-[#262736] transition-colors duration-200">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-8 py-2.5">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group py-1">
          <BreachBarrierLogo className="h-10 sm:h-12 md:h-13 max-h-[52px]" />
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase font-bold tracking-wider text-[#0F172A] dark:text-[#E2E8F0]">
          <Link to="/" className={`transition-colors hover:text-[#6D28D9] dark:hover:text-[#A78BFA] ${location.pathname === '/' ? 'text-[#6D28D9] dark:text-[#A78BFA]' : ''}`}>
            HOME
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>

          <Link to="/about" className={`transition-colors hover:text-[#6D28D9] dark:hover:text-[#A78BFA] ${location.pathname === '/about' ? 'text-[#6D28D9] dark:text-[#A78BFA]' : ''}`}>
            ABOUT
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>

          <Link to="/why-choose-us" className={`transition-colors hover:text-[#6D28D9] dark:hover:text-[#A78BFA] ${location.pathname === '/why-choose-us' ? 'text-[#6D28D9] dark:text-[#A78BFA]' : ''}`}>
            WHY US
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>

          {/* Services Dropdown */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              onClick={() => setServicesDropdown(!servicesDropdown)}
              className={`cursor-target flex items-center gap-1 transition-colors uppercase font-bold text-xs hover:text-[#6D28D9] dark:hover:text-[#A78BFA] py-1 ${
                isServicesActive ? 'text-[#6D28D9] dark:text-[#A78BFA]' : ''
              }`}
            >
              <span>SERVICES</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#6D28D9] dark:text-[#A78BFA]' : ''}`} />
            </button>

            {/* Mega Dropdown Panel */}
            <AnimatePresence>
              {servicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-[#13141D] border border-[#D6D0C2] dark:border-[#27293A] shadow-xl p-3 z-50 rounded-2xl"
                >
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 mb-1 flex items-center justify-between">
                      <span>CORE CAPABILITIES</span>
                      <span className="text-[#6D28D9] dark:text-[#A78BFA] font-mono">6 VERTICALS</span>
                    </div>

                    {servicesList.map((s, idx) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={idx}
                          to={s.path}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors group cursor-target"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#6D28D9] dark:text-[#A78BFA] group-hover:bg-[#6D28D9] group-hover:text-white transition-colors shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="space-y-0.5">
                            <div className="text-xs font-bold text-[#0F172A] dark:text-[#F8FAFC] group-hover:text-[#6D28D9] dark:group-hover:text-[#A78BFA] transition-colors leading-tight">
                              {s.title}
                            </div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal leading-snug">
                              {s.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}

                    <div className="pt-2 mt-1 border-t border-slate-100 dark:border-slate-800 px-3 py-1.5 flex items-center justify-between text-[11px] bg-slate-50 dark:bg-slate-900/60 rounded-xl">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Need custom architecture?</span>
                      <Link to="/contact" className="text-[#6D28D9] dark:text-[#A78BFA] font-bold hover:underline flex items-center gap-1">
                        <span>Talk to Architect</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="text-slate-300 dark:text-slate-700">/</span>

          <Link to="/industries" className={`transition-colors hover:text-[#6D28D9] dark:hover:text-[#A78BFA] ${location.pathname === '/industries' ? 'text-[#6D28D9] dark:text-[#A78BFA]' : ''}`}>
            INDUSTRIES
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>

          <Link to="/resources" className={`transition-colors hover:text-[#6D28D9] dark:hover:text-[#A78BFA] ${location.pathname === '/resources' ? 'text-[#6D28D9] dark:text-[#A78BFA]' : ''}`}>
            RESOURCES
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>

          <Link to="/contact" className={`transition-colors hover:text-[#6D28D9] dark:hover:text-[#A78BFA] ${location.pathname === '/contact' ? 'text-[#6D28D9] dark:text-[#A78BFA]' : ''}`}>
            CONTACT
          </Link>
        </nav>

        {/* Right CTA & Theme Toggle (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="cursor-target w-9 h-9 rounded-xl border border-[#D6D0C2] dark:border-[#2E3145] bg-white/90 dark:bg-[#151722] text-[#0F172A] dark:text-[#E2E8F0] hover:border-[#6D28D9] dark:hover:border-[#8B5CF6] hover:text-[#6D28D9] dark:hover:text-[#A78BFA] flex items-center justify-center transition-all duration-200 shadow-xs group"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-[#6D28D9] group-hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

          <Link
            to="/contact"
            className="cursor-target px-4 py-2 bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <span>BOOK CONSULTATION</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Actions: Theme Toggle + Menu */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 border border-slate-200 dark:border-[#2E3145] rounded-xl bg-white dark:bg-[#151722] text-[#0F172A] dark:text-[#E2E8F0] cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-[#6D28D9]" />
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 border border-slate-200 dark:border-[#2E3145] rounded-xl bg-white dark:bg-[#151722] text-[#0F172A] dark:text-[#E2E8F0] cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-[#262736] bg-white dark:bg-[#13141C] p-5 space-y-3 text-xs text-[#0F172A] dark:text-[#F8FAFC]">
          <Link to="/" className="block py-2 border-b border-slate-100 dark:border-slate-800 font-bold">HOME</Link>
          <Link to="/about" className="block py-2 border-b border-slate-100 dark:border-slate-800 font-bold">ABOUT</Link>
          <Link to="/why-choose-us" className="block py-2 border-b border-slate-100 dark:border-slate-800 font-bold">WHY US</Link>
          
          {/* Mobile Services Accordion */}
          <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full py-2 flex items-center justify-between font-bold text-left"
            >
              <span>SERVICES</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#6D28D9]' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 py-1 space-y-2 bg-slate-50 dark:bg-slate-900/60 rounded-xl p-3 mt-1 border border-slate-100 dark:border-slate-800">
                {servicesList.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={idx}
                      to={s.path}
                      className="flex items-center gap-2.5 py-1 text-slate-700 dark:text-slate-300 hover:text-[#6D28D9] dark:hover:text-[#A78BFA] font-medium"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#6D28D9]" />
                      <span>{s.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link to="/industries" className="block py-2 border-b border-slate-100 dark:border-slate-800 font-bold">INDUSTRIES</Link>
          <Link to="/resources" className="block py-2 border-b border-slate-100 dark:border-slate-800 font-bold">RESOURCES</Link>
          <Link to="/contact" className="block py-2 border-b border-slate-100 dark:border-slate-800 font-bold">CONTACT</Link>
          
          <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Theme</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#6D28D9]" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

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
