import React, { useState, useEffect } from 'react';
import { 
  Users, 
  UserPlus, 
  ShieldCheck, 
  Lock, 
  Trash2, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Mail,
  User,
  Eye,
  EyeOff,
  KeyRound,
  Copy,
  Check,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { fetchAdminUsers, addAdminUser, deleteAdminUser } from '../../lib/supabaseClient';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { Link } from 'react-router-dom';

export default function AdminUsers() {
  const { isSuperAdmin } = useAdminAuth();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('READ_ONLY');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [newCreatedUser, setNewCreatedUser] = useState(null);
  const [copied, setCopied] = useState(false);

  const loadUsers = async () => {
    setLoading(true);
    const data = await fetchAdminUsers();
    setUsers(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const generateRandomPassword = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*';
    let result = '';
    for (let i = 0; i < 12; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !fullName || !password) {
      setError('Please fill in all required fields: Full Name, Email, and Password.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setIsSubmitting(true);
    try {
      const created = await addAdminUser({
        email,
        full_name: fullName,
        role,
        password
      });

      setNewCreatedUser({
        ...created,
        rawPassword: password,
        portalUrl: `${window.location.origin}/employee`
      });

      setUsers(prev => [...prev.filter(u => u.email !== created.email), created]);
      setEmail('');
      setFullName('');
      setPassword('');
    } catch (err) {
      setError('Failed to create user account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteUser = async (userId, userEmail) => {
    if (userEmail === 'admin@zeroward.in') {
      alert('Cannot delete the primary Super Admin account.');
      return;
    }
    if (window.confirm(`Are you sure you want to revoke access for ${userEmail}?`)) {
      await deleteAdminUser(userId);
      setUsers(prev => prev.filter(u => u.id !== userId));
    }
  };

  const handleCopyInvite = () => {
    if (!newCreatedUser) return;
    const msg = `*ZEROWARD Employee Portal Access*\n` +
      `Portal Link: ${newCreatedUser.portalUrl}\n` +
      `Login ID / Email: ${newCreatedUser.email}\n` +
      `Password: ${newCreatedUser.rawPassword}\n` +
      `Role: Team Member (Inquiry Viewer)`;
    navigator.clipboard?.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isSuperAdmin) {
    return (
      <div className="bg-white dark:bg-[#12131F] border border-amber-300 dark:border-amber-900/60 rounded-2xl p-8 text-center space-y-4 max-w-xl mx-auto my-12 shadow-md">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400 mx-auto">
          <Lock className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-black text-slate-900 dark:text-white font-mono uppercase">
            RESTRICTED ACCESS
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
            Team accounts do not have permission to manage portal users.
          </p>
        </div>
        <Link
          to="/employee/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
        >
          <span>Return to Dashboard</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-300 dark:border-slate-800 pb-5">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white font-mono">
            TEAM USER MANAGEMENT &amp; <span className="text-[#DC2626] dark:text-[#EF4444]">PASSWORDS</span>
          </h1>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-sans">
          Create live employee login accounts, assign secure passwords, and grant portal access.
        </p>
      </div>

      {/* Success Modal / Banner when Employee is Created */}
      {newCreatedUser && (
        <div className="p-5 bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500 rounded-2xl shadow-lg space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-sm font-bold text-emerald-900 dark:text-emerald-200 font-mono uppercase">
                EMPLOYEE ACCOUNT CREATED &amp; SAVED TO SUPABASE
              </h3>
            </div>
            <button
              onClick={() => setNewCreatedUser(null)}
              className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white font-bold"
            >
              Dismiss ✕
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-2.5 text-xs font-mono">
            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-emerald-900">
              <span className="text-[10px] text-slate-400 block uppercase">Employee Portal Link</span>
              <a 
                href={newCreatedUser.portalUrl} 
                target="_blank" 
                rel="noreferrer"
                className="font-bold text-[#DC2626] dark:text-[#EF4444] hover:underline flex items-center gap-1 mt-0.5"
              >
                <span>/employee</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-emerald-900">
              <span className="text-[10px] text-slate-400 block uppercase">Login Email ID</span>
              <span className="font-bold text-slate-900 dark:text-white select-all block mt-0.5">
                {newCreatedUser.email}
              </span>
            </div>

            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-emerald-900">
              <span className="text-[10px] text-slate-400 block uppercase">Assigned Password</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 select-all block mt-0.5">
                {newCreatedUser.rawPassword}
              </span>
            </div>
          </div>

          <button
            onClick={handleCopyInvite}
            className="flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold font-mono transition-colors shadow-xs cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Employee Login Credentials Message'}</span>
          </button>
        </div>
      )}

      {/* 2-Column Grid: Create Form + Registered Users */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Create Form */}
        <div className="lg:col-span-5 bg-white dark:bg-[#12131F] border border-slate-300 dark:border-[#27293D] rounded-2xl p-6 shadow-xs space-y-5">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-black uppercase text-slate-900 dark:text-white font-mono flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-[#DC2626] dark:text-[#EF4444]" />
              <span>CREATE NEW EMPLOYEE ACCOUNT</span>
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Set the employee's email and password. They will use these to log into <code className="text-[#DC2626] dark:text-[#EF4444]">/employee</code>.
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 rounded-xl text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleCreateUser} className="space-y-4 text-xs font-sans">
            
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                Employee Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl font-medium text-slate-900 dark:text-white focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444]"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                Work Email ID (Login ID) *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  placeholder="priya@zeroward.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl font-medium text-slate-900 dark:text-white focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444]"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                  Assign Password *
                </label>
                <button
                  type="button"
                  onClick={generateRandomPassword}
                  className="text-[10px] text-[#DC2626] dark:text-[#EF4444] hover:underline font-mono font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Generate Secure</span>
                </button>
              </div>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Set employee password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-10 py-2.5 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl font-medium text-slate-900 dark:text-white focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Role */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                Assign Role Access
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl font-medium text-slate-900 dark:text-white focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444]"
              >
                <option value="READ_ONLY">Employee (Inquiry Viewer — No Delete/Export)</option>
                <option value="SUPER_ADMIN">Super Admin (Full Management Rights)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#DC2626] hover:bg-[#B91C1C] dark:bg-[#EF4444] dark:hover:bg-[#DC2626] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer mt-2 disabled:opacity-70"
            >
              {isSubmitting ? 'CREATING ACCOUNT...' : 'SAVE & CREATE EMPLOYEE ACCOUNT'}
            </button>
          </form>
        </div>

        {/* Right Column: Registered Users Table */}
        <div className="lg:col-span-7 bg-white dark:bg-[#12131F] border border-slate-300 dark:border-[#27293D] rounded-2xl overflow-hidden shadow-xs space-y-0">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#181A28] flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
              ACTIVE ACCOUNTS IN DATABASE ({users.length})
            </span>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              ● Supabase Cloud Auth Sync
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 font-mono text-slate-500 text-[10px] uppercase bg-slate-100 dark:bg-[#151624]">
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Login Email ID</th>
                  <th className="py-3 px-4">Portal / Role</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {users.map((u) => {
                  const isSuper = u.role === 'SUPER_ADMIN';
                  return (
                    <tr key={u.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                        {u.full_name}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-700 dark:text-slate-300">
                        {u.email}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                          isSuper 
                            ? 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-800' 
                            : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-800'
                        }`}>
                          {isSuper ? 'SUPER ADMIN (/admin)' : 'EMPLOYEE (/employee)'}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          ACTIVE
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {u.email !== 'admin@zeroward.in' ? (
                          <button
                            onClick={() => handleDeleteUser(u.id, u.email)}
                            className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                            title="Delete User"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        ) : (
                          <span className="text-[10px] font-mono text-slate-400 font-bold">PRIMARY</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
