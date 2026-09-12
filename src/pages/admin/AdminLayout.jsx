import React from 'react';
import { Link, Outlet, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Users, 
  Inbox, 
  LogOut, 
  ExternalLink, 
  Database, 
  Sun, 
  Moon, 
  CheckCircle2, 
  Lock,
  ArrowUpRight,
  HardDrive
} from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';

export default function AdminLayout() {
  const { currentUser, isAuthenticated, isSuperAdmin, logout, switchRole } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Dark mode state
  const isDarkMode = document.documentElement.classList.contains('dark');
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  const navLinks = [
    {
      name: 'Inquiry Management',
      path: '/admin/dashboard',
      icon: Inbox,
      badge: 'Leads'
    },
    {
      name: 'Team & Roles',
      path: '/admin/users',
      icon: Users,
      badge: isSuperAdmin ? 'Super Admin' : 'Restricted',
      restricted: !isSuperAdmin
    }
  ];

  return (
    <div className="min-h-screen bg-[#EAE7E0] dark:bg-[#0A0B10] text-[#0F172A] dark:text-[#E2E8F0] font-sans flex flex-col selection:bg-[#DC2626] selection:text-white transition-colors duration-200">
      
      {/* Top Cyber Telemetry Bar */}
      <header className="sticky top-0 z-40 bg-[#0F172A] text-white border-b border-slate-800 shadow-md">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Logo & Portal Identity */}
          <div className="flex items-center gap-3">
            <Link to="/admin/dashboard" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-red-950/80 border border-red-800 flex items-center justify-center text-[#EF4444] group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-xs font-black tracking-widest text-white">ZEROWARD</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-red-950 text-[#EF4444] border border-red-800/80 rounded font-mono font-bold">ADMIN</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono tracking-tight">Supabase Lead Hub • Proposal v2.4</span>
              </div>
            </Link>
          </div>

          {/* Center Navigation Tabs (Desktop) */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#DC2626] text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                  {link.restricted && (
                    <Lock className="w-3 h-3 text-slate-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            
            {/* Quick Role Tester (Proposal Section 7.1) */}
            <div className="hidden lg:flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl p-1 text-[11px] font-mono">
              <span className="text-slate-400 px-2 text-[10px] uppercase font-bold">Role:</span>
              <button
                onClick={() => switchRole('SUPER_ADMIN')}
                className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                  isSuperAdmin 
                    ? 'bg-[#DC2626] text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Super Admin: Full management and export permissions"
              >
                Super Admin
              </button>
              <button
                onClick={() => switchRole('READ_ONLY')}
                className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                  !isSuperAdmin 
                    ? 'bg-amber-600 text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Additional User: Read-only access as per Section 7.1"
              >
                Read-Only
              </button>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-400" />}
            </button>

            {/* Live Website Link */}
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <span>View Site</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {/* Logout Button */}
            <button
              onClick={() => {
                logout();
                navigate('/admin/login');
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-950/40 hover:bg-red-950/80 border border-red-900/50 hover:border-red-700 text-[#EF4444] rounded-xl text-xs font-bold transition-all cursor-pointer"
              title="Logout from Admin Panel"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>

          </div>

        </div>

        {/* Mobile Navigation Tabs */}
        <div className="md:hidden flex items-center justify-around border-t border-slate-800 px-4 py-2 bg-slate-950">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase ${
                  isActive ? 'text-[#EF4444]' : 'text-slate-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </header>

      {/* Database & Storage Status Ribbon (Proposal Section 7.2) */}
      <div className="bg-[#F2EFE9] dark:bg-[#11121C] border-b border-slate-300 dark:border-[#27293D] px-4 sm:px-6 py-2 text-xs font-mono transition-colors">
        <div className="max-w-[1500px] mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-600 dark:text-slate-400">
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-900 dark:text-white">Backend: Supabase PostgreSQL</span>
            <span className="text-[11px] text-slate-500">(`icaanytcntdnfggywtmp.supabase.co`)</span>
          </div>

          {/* 512 MB Storage Quota Indicator (Proposal Section 7.2) */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-slate-400" />
              <span>Storage Allotted:</span>
              <span className="font-bold text-slate-900 dark:text-white">512 MB</span>
            </div>
            <div className="w-24 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="w-[2%] h-full bg-[#DC2626] dark:bg-[#EF4444] rounded-full" />
            </div>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">&lt; 1% Utilized</span>
          </div>

        </div>
      </div>

      {/* Main Admin Content Body */}
      <main className="flex-1 max-w-[1500px] w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        <Outlet />
      </main>

    </div>
  );
}
