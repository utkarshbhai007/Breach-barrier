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
  Shield
} from 'lucide-react';
import { fetchAdminUsers, addAdminUser, deleteAdminUser } from '../../lib/supabaseClient';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { Link } from 'react-router-dom';

export default function AdminUsers() {
  const { isSuperAdmin, currentUser } = useAdminAuth();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('READ_ONLY');
  const [feedback, setFeedback] = useState('');

  const loadUsers = async () => {
    setLoading(true);
    const data = await fetchAdminUsers();
    setUsers(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (!email || !fullName) return;

    if (!isSuperAdmin) {
      setFeedback('Unauthorized: Only Super Admin can create team accounts.');
      return;
    }

    const created = await addAdminUser({
      email,
      full_name: fullName,
      role
    });

    setUsers(prev => [...prev, created]);
    setEmail('');
    setFullName('');
    setFeedback(`Team user "${fullName}" added with ${role} permissions.`);
    setTimeout(() => setFeedback(''), 4000);
  };

  const handleDeleteUser = async (userId, userEmail) => {
    if (!isSuperAdmin) {
      setFeedback('Unauthorized: Only Super Admin can delete accounts.');
      return;
    }
    if (userEmail === 'admin@zeroward.in') {
      alert('Cannot delete Primary Super Admin account.');
      return;
    }
    if (window.confirm(`Delete user ${userEmail}?`)) {
      await deleteAdminUser(userId);
      setUsers(prev => prev.filter(u => u.id !== userId));
      setFeedback('User account removed.');
      setTimeout(() => setFeedback(''), 3000);
    }
  };

  if (!isSuperAdmin) {
    return (
      <div className="bg-white dark:bg-[#12131F] border border-amber-300 dark:border-amber-900/60 rounded-2xl p-8 text-center space-y-4 max-w-xl mx-auto my-12 shadow-md">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400 mx-auto">
          <Lock className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-black text-slate-900 dark:text-white font-mono uppercase">
            RESTRICTED ACCESS • SUPER ADMIN ONLY
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
            Per Proposal Section 7.1, team accounts hold <strong>Read-Only access</strong>. Only the primary Super Admin account is permitted to create or manage team members.
          </p>
        </div>
        <Link
          to="/admin/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#DC2626] dark:bg-[#EF4444] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
        >
          <span>Return to Inquiry Dashboard</span>
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
            TEAM USER ROLES &amp; <span className="text-[#DC2626] dark:text-[#EF4444]">PERMISSIONS</span>
          </h1>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950 text-[#EF4444] border border-red-800 font-bold">
            PROPOSAL 7.1
          </span>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-sans">
          Super Admin management console to invite team members with secure Read-Only access.
        </p>
      </div>

      {feedback && (
        <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-xl text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2 font-mono">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      {/* 2-Column Grid: Add User Form + Roles Matrix */}
      <div className="grid lg:grid-cols-12 gap-6">
        
        {/* Left Column: Create User Form */}
        <div className="lg:col-span-5 bg-white dark:bg-[#12131F] border border-slate-300 dark:border-[#27293D] rounded-2xl p-6 shadow-xs space-y-5">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-black uppercase text-slate-900 dark:text-white font-mono flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-[#DC2626] dark:text-[#EF4444]" />
              <span>INVITE TEAM MEMBER</span>
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              New accounts will be granted Read-Only view access to the leads database.
            </p>
          </div>

          <form onSubmit={handleCreateUser} className="space-y-4 text-xs font-sans">
            
            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl font-medium text-slate-900 dark:text-white focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444]"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                Work Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  placeholder="name@zeroward.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl font-medium text-slate-900 dark:text-white focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444]"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                Role Permission
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl font-medium text-slate-900 dark:text-white focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444]"
              >
                <option value="READ_ONLY">Read-Only User (View Leads Only)</option>
                <option value="SUPER_ADMIN">Super Admin (Full Management Rights)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] dark:bg-[#EF4444] dark:hover:bg-[#DC2626] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer"
            >
              CREATE TEAM ACCOUNT
            </button>
          </form>
        </div>

        {/* Right Column: Roles & Permission Matrix Table (Proposal 7.1) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#12131F] border border-slate-300 dark:border-[#27293D] rounded-2xl p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-black uppercase text-slate-900 dark:text-white font-mono flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>USER ROLE SPECIFICATION (PROPOSAL 7.1)</span>
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Strict separation between full administrative rights and read-only operational staff.
            </p>
          </div>

          <div className="overflow-x-auto text-xs font-sans">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 uppercase">
                  <th className="py-2.5 px-3 text-left">Platform Capability</th>
                  <th className="py-2.5 px-3 text-center text-[#DC2626] dark:text-[#EF4444] font-bold">Super Admin</th>
                  <th className="py-2.5 px-3 text-center text-amber-500 font-bold">Additional Users</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="py-2.5 px-3 font-semibold">View All Inquiries &amp; Filter</td>
                  <td className="py-2.5 px-3 text-center text-emerald-600 font-bold">✓ Full</td>
                  <td className="py-2.5 px-3 text-center text-emerald-600 font-bold">✓ Full</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold">Inspect Full Lead Message &amp; Contact</td>
                  <td className="py-2.5 px-3 text-center text-emerald-600 font-bold">✓ Full</td>
                  <td className="py-2.5 px-3 text-center text-emerald-600 font-bold">✓ Full</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold">Download / Export CSV Data</td>
                  <td className="py-2.5 px-3 text-center text-emerald-600 font-bold">✓ Full</td>
                  <td className="py-2.5 px-3 text-center text-slate-400 font-bold">✗ Restricted</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold">Update Lead Status &amp; Notes</td>
                  <td className="py-2.5 px-3 text-center text-emerald-600 font-bold">✓ Full</td>
                  <td className="py-2.5 px-3 text-center text-slate-400 font-bold">✗ Restricted</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold">Delete Inquiries</td>
                  <td className="py-2.5 px-3 text-center text-emerald-600 font-bold">✓ Full</td>
                  <td className="py-2.5 px-3 text-center text-slate-400 font-bold">✗ Restricted</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold">Manage Additional Team Users</td>
                  <td className="py-2.5 px-3 text-center text-emerald-600 font-bold">✓ Full</td>
                  <td className="py-2.5 px-3 text-center text-slate-400 font-bold">✗ Restricted</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-[#12131F] border border-slate-300 dark:border-[#27293D] rounded-2xl overflow-hidden shadow-xs">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#181A28] flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
            REGISTERED PANEL USERS ({users.length})
          </span>
          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
            ● Supabase Cloud Auth Active
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 font-mono text-slate-500 text-[10px] uppercase">
                <th className="py-3 px-4">User Name</th>
                <th className="py-3 px-4">Work Email</th>
                <th className="py-3 px-4">Assigned Role</th>
                <th className="py-3 px-4">Account Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
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
                        {isSuper ? 'SUPER ADMIN' : 'READ-ONLY USER'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        ACTIVE
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      {u.email !== 'admin@zeroward.in' && (
                        <button
                          onClick={() => handleDeleteUser(u.id, u.email)}
                          className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                          title="Revoke access"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
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
  );
}
