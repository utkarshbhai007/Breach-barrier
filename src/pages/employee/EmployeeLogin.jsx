import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Users, Lock, Mail, ArrowRight, AlertCircle, KeyRound, Copy, Check } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';

export default function EmployeeLogin() {
  const { loginEmployee, isAuthenticated, isEmployee, fixedEmployee } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('team@zeroward.in');
  const [password, setPassword] = useState('Employee@ZeroWard2026');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const from = location.state?.from?.pathname || '/employee/dashboard';

  React.useEffect(() => {
    if (isAuthenticated && isEmployee) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, isEmployee, navigate, from]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const res = loginEmployee(email, password);
    if (res.success) {
      navigate('/employee/dashboard', { replace: true });
    } else {
      setError(res.error || 'Invalid Employee credentials.');
    }
  };

  const handleCopyCredentials = () => {
    navigator.clipboard?.writeText(`ID: ${fixedEmployee.email}\nPassword: ${fixedEmployee.password}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#EAE7E0] dark:bg-[#090A0F] text-[#0F172A] dark:text-[#E2E8F0] font-sans flex flex-col justify-center items-center p-4 sm:p-6 transition-colors duration-200">
      
      <div className="w-full max-w-md space-y-6">
        
        {/* Brand Banner */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0F172A] dark:bg-[#161826] border-2 border-amber-500 text-amber-500 shadow-xl">
            <Users className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0F172A] dark:text-white font-mono">
              ZEROWARD <span className="text-amber-600 dark:text-amber-500">EMPLOYEE</span>
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium font-sans">
              Team Member Portal • Operational Lead Inquiry Viewer
            </p>
          </div>
        </div>

        {/* Login Box */}
        <div className="bg-white dark:bg-[#11121C] border border-slate-300 dark:border-[#27293D] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5">
          
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-amber-500" />
                <span>EMPLOYEE AUTHENTICATION</span>
              </h2>
              <p className="text-[11px] text-slate-500 mt-0.5">Team inquiry review portal</p>
            </div>
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono font-bold bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 px-2 py-0.5 rounded">
              TEAM ACCESS
            </span>
          </div>

          {/* Fixed Credentials Info Card */}
          <div className="p-3.5 bg-slate-50 dark:bg-[#181A28] border border-slate-200 dark:border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400">
                FIXED EMPLOYEE CREDENTIALS:
              </span>
              <button
                type="button"
                onClick={handleCopyCredentials}
                className="text-[10px] font-mono text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer font-bold"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="text-[9px] text-slate-400 block uppercase">Work ID</span>
                <span className="font-bold text-slate-900 dark:text-white select-all">{fixedEmployee.email}</span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="text-[9px] text-slate-400 block uppercase">Password</span>
                <span className="font-bold text-amber-600 dark:text-amber-400 select-all">{fixedEmployee.password}</span>
              </div>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 rounded-xl text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block font-sans">
                Employee Email ID
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors"
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
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer mt-2"
            >
              <span>SIGN IN TO EMPLOYEE PORTAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Switch to Super Admin Portal Link */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-center">
            <Link
              to="/admin"
              className="text-xs text-slate-600 dark:text-slate-400 hover:text-[#DC2626] dark:hover:text-[#EF4444] font-medium transition-colors inline-flex items-center gap-1"
            >
              <span>Are you the administrator?</span>
              <span className="font-bold underline">Go to Admin Login →</span>
            </Link>
          </div>

        </div>

        {/* Footer info */}
        <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 font-mono">
          ZEROWARD • Employee Lead Terminal • Proposal v2.4
        </p>

      </div>
    </div>
  );
}
