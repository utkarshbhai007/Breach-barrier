import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, ArrowRight, UserCheck, AlertCircle } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';

export default function AdminLogin() {
  const { login, isAuthenticated } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('admin@zeroward.in');
  const [password, setPassword] = useState('••••••••••••');
  const [role, setRole] = useState('SUPER_ADMIN');
  const [error, setError] = useState('');

  const from = location.state?.from?.pathname || '/admin/dashboard';

  // If already authenticated, redirect
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide an email address.');
      return;
    }
    login(email, password, role);
    navigate(from, { replace: true });
  };

  const handleQuickLogin = (selectedRole) => {
    const loginEmail = selectedRole === 'SUPER_ADMIN' ? 'admin@zeroward.in' : 'team@zeroward.in';
    login(loginEmail, 'zeroward2026', selectedRole);
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#EAE7E0] dark:bg-[#090A0F] text-[#0F172A] dark:text-[#E2E8F0] font-sans flex flex-col justify-center items-center p-4 sm:p-6 transition-colors duration-200">
      
      {/* Background Ambience */}
      <div className="w-full max-w-md space-y-6">
        
        {/* Brand Banner */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0F172A] dark:bg-[#161826] border-2 border-[#DC2626] dark:border-[#EF4444] text-[#EF4444] shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight text-[#0F172A] dark:text-white font-mono">
              ZEROWARD <span className="text-[#DC2626] dark:text-[#EF4444]">ADMIN</span>
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium font-sans">
              Inquiry Management Portal &amp; Supabase Lead Database
            </p>
          </div>
        </div>

        {/* Login Box */}
        <div className="bg-white dark:bg-[#11121C] border border-slate-300 dark:border-[#27293D] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white font-mono flex items-center justify-between">
              <span>AUTHENTICATE PORTAL</span>
              <span className="text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">SSL ENCRYPTED</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Select your role access tier as defined in Proposal Section 7.1.
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 rounded-xl text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Quick Access Role Selection */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-mono">
              QUICK LOGIN ROLE (PROPOSAL SPEC)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setRole('SUPER_ADMIN');
                  setEmail('admin@zeroward.in');
                }}
                className={`p-3 rounded-xl border text-left text-xs transition-all flex flex-col justify-between gap-1 ${
                  role === 'SUPER_ADMIN'
                    ? 'border-[#DC2626] dark:border-[#EF4444] bg-red-50 dark:bg-red-950/30 text-slate-900 dark:text-white font-bold shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold font-mono">SUPER ADMIN</span>
                  <span className="w-2 h-2 rounded-full bg-[#DC2626] dark:bg-[#EF4444]" />
                </div>
                <span className="text-[10px] text-slate-500 leading-tight">Full rights, user management, status edits &amp; CSV export</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setRole('READ_ONLY');
                  setEmail('team@zeroward.in');
                }}
                className={`p-3 rounded-xl border text-left text-xs transition-all flex flex-col justify-between gap-1 ${
                  role === 'READ_ONLY'
                    ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/30 text-slate-900 dark:text-white font-bold shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold font-mono">READ-ONLY USER</span>
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                </div>
                <span className="text-[10px] text-slate-500 leading-tight">Team review access; view leads only without edit rights</span>
              </button>
            </div>
          </div>

          {/* Credentials Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block font-sans">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444] transition-colors"
                  placeholder="admin@zeroward.in"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block font-sans">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444] transition-colors"
                  placeholder="••••••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#DC2626] hover:bg-[#B91C1C] dark:bg-[#EF4444] dark:hover:bg-[#DC2626] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer mt-2"
            >
              <span>ACCESS ADMIN DASHBOARD</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* 1-Click Demo Buttons */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block text-center font-mono">
              OR DIRECT 1-CLICK DEMO AUTH
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleQuickLogin('SUPER_ADMIN')}
                className="flex-1 py-2 px-3 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] font-bold text-slate-800 dark:text-slate-200 rounded-lg transition-colors border border-slate-300 dark:border-slate-700 text-center"
              >
                Super Admin Demo
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin('READ_ONLY')}
                className="flex-1 py-2 px-3 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] font-bold text-slate-800 dark:text-slate-200 rounded-lg transition-colors border border-slate-300 dark:border-slate-700 text-center"
              >
                Read-Only Demo
              </button>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 font-mono">
          ZEROWARD • Supabase Cloud Database Protected
        </p>

      </div>
    </div>
  );
}
