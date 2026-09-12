import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, ArrowRight, AlertCircle, KeyRound, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';

export default function AdminLogin() {
  const { loginAdmin, isAuthenticated, isSuperAdmin } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const from = location.state?.from?.pathname || '/admin/dashboard';

  React.useEffect(() => {
    if (isAuthenticated && isSuperAdmin) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, isSuperAdmin, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both Admin Email ID and Password.');
      return;
    }

    setLoading(true);
    try {
      const res = await loginAdmin(email, password);
      if (res.success) {
        navigate('/admin/dashboard', { replace: true });
      } else {
        setError(res.error || 'Authentication failed. Please verify your credentials.');
      }
    } catch (err) {
      setError('Authentication server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EAE7E0] dark:bg-[#090A0F] text-[#0F172A] dark:text-[#E2E8F0] font-sans flex flex-col justify-center items-center p-4 sm:p-6 transition-colors duration-200">
      
      <div className="w-full max-w-md space-y-6">
        
        {/* Brand Banner */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0F172A] dark:bg-[#161826] border-2 border-[#DC2626] dark:border-[#EF4444] text-[#EF4444] shadow-xl">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0F172A] dark:text-white font-mono">
              ZEROWARD <span className="text-[#DC2626] dark:text-[#EF4444]">ADMIN</span>
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium font-sans">
              Super Admin Control Portal • Full Lead Management &amp; Team Administration
            </p>
          </div>
        </div>

        {/* Login Box */}
        <div className="bg-white dark:bg-[#11121C] border border-slate-300 dark:border-[#27293D] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5">
          
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-[#DC2626] dark:text-[#EF4444]" />
                <span>ADMIN AUTHENTICATION</span>
              </h2>
              <p className="text-[11px] text-slate-500 mt-0.5">Secure Supabase Database Verification</p>
            </div>
            <span className="text-[10px] text-emerald-500 font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
              SSL ENCRYPTED
            </span>
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
                Admin Email ID
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  placeholder="admin@zeroward.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444] transition-colors font-sans"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block font-sans">
                Admin Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444] transition-colors font-sans"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#DC2626] hover:bg-[#B91C1C] dark:bg-[#EF4444] dark:hover:bg-[#DC2626] text-white font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer mt-2 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>AUTHENTICATING SECURELY...</span>
                </>
              ) : (
                <>
                  <span>SIGN IN TO ADMIN PORTAL</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Switch to Employee Portal Link */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-center">
            <Link
              to="/employee"
              className="text-xs text-slate-600 dark:text-slate-400 hover:text-[#DC2626] dark:hover:text-[#EF4444] font-medium transition-colors inline-flex items-center gap-1"
            >
              <span>Team member?</span>
              <span className="font-bold underline">Go to Employee Login Portal →</span>
            </Link>
          </div>

        </div>

        {/* Footer info */}
        <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 font-mono">
          ZEROWARD • Live Cryptographic Security • SHA-256 Hashed
        </p>

      </div>
    </div>
  );
}
