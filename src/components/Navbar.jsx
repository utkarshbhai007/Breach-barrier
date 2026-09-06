import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  ChevronDown, 
  Shield, 
  Bug, 
  AlertOctagon, 
  Scan, 
  Globe,
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

  const serviceCategories = [
    {
      categoryName: 'Category 1: Managed Defense (Protect & Respond)',
      items: [
        {
          title: 'SOC & MDR (24×7)',
          fullTitle: 'Security Operations Center (SOC) & MDR',
          path: '/services/soc-mdr',
          desc: 'True 24/7 Threat Hunting & Neutralization',
          icon: Shield
        },
        {
          title: 'Incident Response & Forensics',
          fullTitle: 'Incident Response (IR) & Digital Forensics',
          path: '/services/incident-response',
          desc: 'Your Digital Fire Department',
          icon: AlertOctagon
        },
      ]
    },
    {
      categoryName: 'Category 2: Offensive Security (Test & Prevent)',
      items: [
        {
          title: 'Penetration Testing (VAPT)',
          fullTitle: 'Penetration Testing (VAPT)',
          path: '/services/pentesting',
          desc: 'Find Your Weak Spots Before Hackers Do',
          icon: Bug
        },
        {
          title: 'Attack Surface Management (ASM)',
          fullTitle: 'Attack Surface Management (ASM)',
          path: '/services/asm',
          desc: 'See Your Business Through an Attacker’s Eyes',
          icon: Globe
        },
        {
          title: 'Vulnerability Management',
          fullTitle: 'Vulnerability Management',
          path: '/services/vulnerability-management',
          desc: 'Proactive Patching & Risk Prioritization',
          icon: Scan
        },
      ]
    }
  ];

  // Flat list for mobile menu iteration
  const allServices = serviceCategories.flatMap(c => c.items);

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
    <header className="sticky top-0 z-50 bg-[#EAE7E0]/95 dark:bg-[#0A0A0E]/95 backdrop-blur-md border-b border-[#D6D0C2] dark:border-[#262736] transition-colors duration-200">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-8 py-2.5">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group py-1">
          <BreachBarrierLogo className="h-10 sm:h-12 md:h-13 max-h-[52px]" />
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase font-bold tracking-wider text-[#0F172A] dark:text-[#E2E8F0]">
          <Link to="/" className={`transition-colors hover:text-[#DC2626] dark:hover:text-[#EF4444] ${location.pathname === '/' ? 'text-[#DC2626] dark:text-[#EF4444]' : ''}`}>
            HOME
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>

          <Link to="/about" className={`transition-colors hover:text-[#DC2626] dark:hover:text-[#EF4444] ${location.pathname === '/about' ? 'text-[#DC2626] dark:text-[#EF4444]' : ''}`}>
            ABOUT
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>

          <Link to="/why-choose-us" className={`transition-colors hover:text-[#DC2626] dark:hover:text-[#EF4444] ${location.pathname === '/why-choose-us' ? 'text-[#DC2626] dark:text-[#EF4444]' : ''}`}>
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
              className={`cursor-target flex items-center gap-1 transition-colors uppercase font-bold text-xs hover:text-[#DC2626] dark:hover:text-[#EF4444] py-1 ${
                isServicesActive ? 'text-[#DC2626] dark:text-[#EF4444]' : ''
              }`}
            >
              <span>SERVICES</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#DC2626] dark:text-[#EF4444]' : ''}`} />
            </button>

            {/* Mega Dropdown Panel */}
            <AnimatePresence>
              {servicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-[480px] bg-white dark:bg-[#13141D] border border-[#D6D0C2] dark:border-[#27293A] shadow-2xl p-4 z-50 rounded-2xl"
                >
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span>CORE CAPABILITIES</span>
                      <span className="text-[#DC2626] dark:text-[#EF4444] font-mono font-bold">5 SERVICES</span>
                    </div>

                    {serviceCategories.map((cat, cIdx) => (
                      <div key={cIdx} className="space-y-1.5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] dark:text-[#EF4444] px-2.5">
                          {cat.categoryName}
                        </div>
                        <div className="space-y-1">
                          {cat.items.map((s, idx) => {
                            const Icon = s.icon;
                            return (
                              <Link
                                key={idx}
                                to={s.path}
                                className="flex items-start gap-3 p-2 rounded-xl hover:bg-red-50/70 dark:hover:bg-red-950/30 transition-colors group cursor-target"
                              >
                                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#DC2626] dark:text-[#EF4444] group-hover:bg-[#DC2626] group-hover:text-white dark:group-hover:bg-[#EF4444] dark:group-hover:text-black transition-colors shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-xs font-bold text-[#0F172A] dark:text-[#F8FAFC] group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors leading-tight">
                                    {s.fullTitle}
                                  </div>
                                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal leading-snug">
                                    {s.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    <div className="pt-2 mt-1 border-t border-slate-100 dark:border-slate-800 px-3 py-2 flex items-center justify-between text-[11px] bg-slate-50 dark:bg-slate-900/60 rounded-xl">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Need customized security architecture?</span>
                      <Link to="/contact" className="text-[#DC2626] dark:text-[#EF4444] font-bold hover:underline flex items-center gap-1">
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

          <Link to="/industries" className={`transition-colors hover:text-[#DC2626] dark:hover:text-[#EF4444] ${location.pathname === '/industries' ? 'text-[#DC2626] dark:text-[#EF4444]' : ''}`}>
            INDUSTRIES
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>

          <Link to="/resources" className={`transition-colors hover:text-[#DC2626] dark:hover:text-[#EF4444] ${location.pathname === '/resources' ? 'text-[#DC2626] dark:text-[#EF4444]' : ''}`}>
            RESOURCES
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>

          <Link to="/contact" className={`transition-colors hover:text-[#DC2626] dark:hover:text-[#EF4444] ${location.pathname === '/contact' ? 'text-[#DC2626] dark:text-[#EF4444]' : ''}`}>
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
            className="cursor-target w-9 h-9 rounded-xl border border-[#D6D0C2] dark:border-[#2E3145] bg-white/90 dark:bg-[#151722] text-[#0F172A] dark:text-[#E2E8F0] hover:border-[#DC2626] dark:hover:border-[#EF4444] hover:text-[#DC2626] dark:hover:text-[#EF4444] flex items-center justify-center transition-all duration-200 shadow-xs group"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-[#DC2626] group-hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

          <Link
            to="/contact"
            className="cursor-target px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] dark:bg-[#EF4444] dark:hover:bg-[#DC2626] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
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
              <Moon className="w-4 h-4 text-[#DC2626]" />
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
              <span>SERVICES (5 CORE SERVICES)</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#DC2626]' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 py-1 space-y-2 bg-slate-50 dark:bg-slate-900/60 rounded-xl p-3 mt-1 border border-slate-100 dark:border-slate-800">
                {allServices.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={idx}
                      to={s.path}
                      className="flex items-center gap-2.5 py-1.5 text-slate-700 dark:text-slate-300 hover:text-[#DC2626] dark:hover:text-[#EF4444] font-medium"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#DC2626] dark:text-[#EF4444] shrink-0" />
                      <span>{s.fullTitle}</span>
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
                  <Moon className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2">
            <Link to="/contact" className="block w-full py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-center rounded-xl transition-colors">
              BOOK A FREE CONSULTATION ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
