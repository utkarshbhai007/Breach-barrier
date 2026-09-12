import React, { useState, useEffect } from 'react';
import { 
  Inbox, 
  Search, 
  Filter, 
  Download, 
  RefreshCw, 
  Clock, 
  Mail, 
  Phone, 
  Building, 
  Eye, 
  Trash2, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ShieldAlert, 
  ArrowUpRight,
  Lock,
  Edit3
} from 'lucide-react';
import { 
  fetchInquiries, 
  updateInquiryStatus, 
  updateInquiryNotes, 
  deleteInquiry, 
  exportInquiriesToCSV 
} from '../../lib/supabaseClient';
import { useAdminAuth } from '../../context/AdminAuthContext';

const STATUS_CONFIG = {
  NEW: { label: 'NEW LEAD', bg: 'bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400 border-red-300 dark:border-red-800' },
  CONTACTED: { label: 'CONTACTED', bg: 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-800' },
  IN_PROGRESS: { label: 'IN PROGRESS', bg: 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-800' },
  PROPOSAL_SENT: { label: 'PROPOSAL SENT', bg: 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-800' },
  WON: { label: 'WON / SIGNED', bg: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800' },
  ARCHIVED: { label: 'ARCHIVED', bg: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-700' }
};

export default function AdminDashboard() {
  const { isSuperAdmin, currentUser } = useAdminAuth();
  
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSupabaseLive, setIsSupabaseLive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [industryFilter, setIndustryFilter] = useState('ALL');
  const [selectedLead, setSelectedLead] = useState(null);
  const [editNotes, setEditNotes] = useState('');
  const [notification, setNotification] = useState('');

  const loadData = async () => {
    setLoading(true);
    const result = await fetchInquiries();
    setInquiries(result.data || []);
    setIsSupabaseLive(result.isSupabaseLive);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3500);
  };

  const handleStatusChange = async (leadId, newStatus) => {
    if (!isSuperAdmin) {
      showNotification('Read-only access: Only Super Admin can change lead status.');
      return;
    }
    await updateInquiryStatus(leadId, newStatus);
    setInquiries(prev => prev.map(item => item.id === leadId ? { ...item, status: newStatus } : item));
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead(prev => ({ ...prev, status: newStatus }));
    }
    showNotification(`Status updated to ${newStatus}`);
  };

  const handleSaveNotes = async () => {
    if (!selectedLead || !isSuperAdmin) return;
    await updateInquiryNotes(selectedLead.id, editNotes);
    setInquiries(prev => prev.map(item => item.id === selectedLead.id ? { ...item, notes: editNotes } : item));
    setSelectedLead(prev => ({ ...prev, notes: editNotes }));
    showNotification('Notes saved successfully.');
  };

  const handleDelete = async (leadId) => {
    if (!isSuperAdmin) {
      showNotification('Read-only access: Only Super Admin can delete leads.');
      return;
    }
    if (window.confirm('Are you sure you want to delete this inquiry record?')) {
      await deleteInquiry(leadId);
      setInquiries(prev => prev.filter(item => item.id !== leadId));
      if (selectedLead?.id === leadId) setSelectedLead(null);
      showNotification('Inquiry record deleted.');
    }
  };

  const handleExport = () => {
    if (!isSuperAdmin) {
      showNotification('Export restricted: Super Admin permission required.');
      return;
    }
    exportInquiriesToCSV(filteredInquiries);
    showNotification(`Exported ${filteredInquiries.length} leads to CSV.`);
  };

  // Filtered Leads
  const filteredInquiries = inquiries.filter(item => {
    const matchesSearch = 
      (item.full_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.company_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.phone || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (Array.isArray(item.services) ? item.services.join(' ') : item.services || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    const matchesIndustry = industryFilter === 'ALL' || item.industry === industryFilter;

    return matchesSearch && matchesStatus && matchesIndustry;
  });

  // KPI Calculations
  const totalLeads = inquiries.length;
  const newLeads = inquiries.filter(i => i.status === 'NEW').length;
  const inProgressLeads = inquiries.filter(i => i.status === 'IN_PROGRESS' || i.status === 'PROPOSAL_SENT').length;
  const wonLeads = inquiries.filter(i => i.status === 'WON').length;

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Alert Toast */}
      {notification && (
        <div className="fixed top-18 right-4 sm:right-6 z-50 bg-[#0F172A] text-white border-2 border-[#DC2626] dark:border-[#EF4444] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs font-bold font-mono animate-bounce">
          <Sparkles className="w-4 h-4 text-[#EF4444]" />
          <span>{notification}</span>
        </div>
      )}

      {/* Page Header with Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-300 dark:border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white font-mono">
              {isSuperAdmin ? (
                <>INQUIRY MANAGEMENT <span className="text-[#DC2626] dark:text-[#EF4444]">DASHBOARD</span></>
              ) : (
                <>CUSTOMER INQUIRIES <span className="text-amber-600 dark:text-amber-500">VIEWER</span></>
              )}
            </h1>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
              {filteredInquiries.length} LEADS
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-sans">
            {isSuperAdmin
              ? 'Centralized Super Admin control hub capturing website consultation inquiries, SLAs, and prospect requirements.'
              : 'Team review hub for examining prospect requirements, SLAs, and consultation messages.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Refresh Data */}
          <button
            onClick={loadData}
            disabled={loading}
            className="p-2.5 bg-white dark:bg-[#161826] border border-slate-300 dark:border-slate-700 rounded-xl hover:border-slate-400 text-slate-700 dark:text-slate-200 transition-colors shadow-2xs cursor-pointer"
            title="Refresh Inquiries"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>

          {/* Export CSV Button (Super Admin Only) */}
          {isSuperAdmin && (
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0F172A] dark:bg-[#161826] text-white hover:bg-slate-800 border border-slate-700 cursor-pointer shadow-sm"
              title="Export leads as CSV / Spreadsheet (Proposal 7.3)"
            >
              <Download className="w-4 h-4 text-[#EF4444]" />
              <span>EXPORT CSV</span>
            </button>
          )}
        </div>
      </div>

      {/* KPI Metrics Ribbon */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        
        <div className="bg-white dark:bg-[#12131F] p-4 sm:p-5 rounded-2xl border border-slate-300 dark:border-[#27293D] shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">TOTAL INQUIRIES</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">{totalLeads}</span>
            <span className="text-xs text-slate-500 font-mono font-bold">100% CAPTURED</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#12131F] p-4 sm:p-5 rounded-2xl border border-red-200 dark:border-red-950/80 shadow-xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#DC2626] dark:text-[#EF4444] uppercase tracking-wider font-mono">NEW UNTOUCHED</span>
            <span className="w-2 h-2 rounded-full bg-[#DC2626] dark:bg-[#EF4444] animate-pulse" />
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-black text-[#DC2626] dark:text-[#EF4444] font-mono">{newLeads}</span>
            <span className="text-[11px] text-red-600 dark:text-red-400 font-mono font-bold">&lt; 2h SLA TARGET</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#12131F] p-4 sm:p-5 rounded-2xl border border-slate-300 dark:border-[#27293D] shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider font-mono">IN NEGOTIATION</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">{inProgressLeads}</span>
            <span className="text-xs text-slate-500 font-mono font-bold">ACTIVE PIPELINE</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#12131F] p-4 sm:p-5 rounded-2xl border border-slate-300 dark:border-[#27293D] shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">WON &amp; SIGNED</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">{wonLeads}</span>
            <span className="text-xs text-slate-500 font-mono font-bold">CLIENTS RETAINED</span>
          </div>
        </div>

      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white dark:bg-[#12131F] p-3 sm:p-4 rounded-2xl border border-slate-300 dark:border-[#27293D] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search leads by name, company, email, phone, or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444]"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-2">
          
          <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl px-2.5 py-1 text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500 font-bold uppercase text-[10px]">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent text-slate-900 dark:text-white font-semibold focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Statuses</option>
              <option value="NEW">New</option>
              <option value="CONTACTED">Contacted</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="PROPOSAL_SENT">Proposal Sent</option>
              <option value="WON">Won / Signed</option>
              <option value="ARCHIVED">Archived</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl px-2.5 py-1 text-xs">
            <Building className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500 font-bold uppercase text-[10px]">Industry:</span>
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="bg-transparent text-slate-900 dark:text-white font-semibold focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Sectors</option>
              <option value="Technology & SaaS">Tech & SaaS</option>
              <option value="Financial Services & Banking">FinTech & Banks</option>
              <option value="Healthcare & Life Sciences">Healthcare</option>
              <option value="Manufacturing & Industrial">Manufacturing</option>
              <option value="Retail & E-commerce">Retail</option>
              <option value="Small & Medium Business">SMB</option>
            </select>
          </div>

        </div>

      </div>

      {/* Main Inquiries Table */}
      <div className="bg-white dark:bg-[#12131F] border border-slate-300 dark:border-[#27293D] rounded-2xl overflow-hidden shadow-xs">
        
        {loading ? (
          <div className="p-12 text-center text-slate-500 space-y-3">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#DC2626] dark:text-[#EF4444]" />
            <p className="text-xs font-mono">Querying Supabase database...</p>
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="p-12 text-center text-slate-500 space-y-3">
            <Inbox className="w-8 h-8 mx-auto text-slate-400" />
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">No customer inquiries match your current filter.</p>
            <button
              onClick={() => { setSearchTerm(''); setStatusFilter('ALL'); setIndustryFilter('ALL'); }}
              className="text-xs text-[#DC2626] dark:text-[#EF4444] font-bold hover:underline font-mono"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              
              {/* Table Header */}
              <thead>
                <tr className="bg-slate-100 dark:bg-[#181A28] border-b border-slate-300 dark:border-slate-800 font-mono text-slate-600 dark:text-slate-400 text-[10px] uppercase tracking-wider">
                  <th className="py-3 px-4">Date &amp; Time (UTC)</th>
                  <th className="py-3 px-4">Prospect &amp; Company</th>
                  <th className="py-3 px-4">Contact Details</th>
                  <th className="py-3 px-4">Industry / Size</th>
                  <th className="py-3 px-4">Services Needed</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-200 dark:divide-[#202234]">
                {filteredInquiries.map((item) => {
                  const statusInfo = STATUS_CONFIG[item.status] || STATUS_CONFIG.NEW;
                  const dateObj = new Date(item.created_at);
                  const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                  const formattedTime = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                  return (
                    <tr 
                      key={item.id}
                      className="hover:bg-slate-50 dark:hover:bg-[#181A28]/60 transition-colors"
                    >
                      {/* Received Date & Time (Proposal Section 7.3) */}
                      <td className="py-3 px-4 font-mono text-[11px] whitespace-nowrap">
                        <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#DC2626] dark:text-[#EF4444]" />
                          <span>{formattedDate}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 pl-5">{formattedTime}</span>
                      </td>

                      {/* Prospect Name & Company */}
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900 dark:text-white text-sm">
                          {item.full_name}
                        </div>
                        <div className="text-slate-500 font-medium text-xs flex items-center gap-1">
                          <Building className="w-3 h-3 text-slate-400" />
                          <span>{item.company_name || 'Individual / Confidential'}</span>
                        </div>
                      </td>

                      {/* Email & Phone */}
                      <td className="py-3 px-4 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                          <a 
                            href={`mailto:${item.email}`}
                            className="text-slate-800 dark:text-slate-200 hover:text-[#DC2626] dark:hover:text-[#EF4444] font-medium transition-colors"
                          >
                            {item.email}
                          </a>
                        </div>
                        {item.phone && (
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                            <a 
                              href={`tel:${item.phone}`}
                              className="text-slate-600 dark:text-slate-400 hover:text-[#DC2626] font-mono text-[11px]"
                            >
                              {item.phone}
                            </a>
                          </div>
                        )}
                      </td>

                      {/* Industry & Size */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                          {item.industry || 'General'}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          Employees: {item.employees || '1-50'}
                        </span>
                      </td>

                      {/* Services Requested */}
                      <td className="py-3 px-4 max-w-xs">
                        <div className="flex flex-wrap gap-1">
                          {Array.isArray(item.services) && item.services.length > 0 ? (
                            item.services.map((svc, sIdx) => (
                              <span 
                                key={sIdx}
                                className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                              >
                                {svc}
                              </span>
                            ))
                          ) : (
                            <span className="text-slate-400 text-xs italic">Not specified</span>
                          )}
                        </div>
                      </td>

                      {/* Status Dropdown (Super Admin) or Static Badge (Read-Only) */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        {isSuperAdmin ? (
                          <select
                            value={item.status}
                            onChange={(e) => handleStatusChange(item.id, e.target.value)}
                            className={`px-2 py-1 rounded-lg text-[10px] font-bold border uppercase tracking-wider cursor-pointer focus:outline-none ${statusInfo.bg}`}
                          >
                            <option value="NEW">New Lead</option>
                            <option value="CONTACTED">Contacted</option>
                            <option value="IN_PROGRESS">In Progress</option>
                            <option value="PROPOSAL_SENT">Proposal Sent</option>
                            <option value="WON">Won / Signed</option>
                            <option value="ARCHIVED">Archived</option>
                          </select>
                        ) : (
                          <span className={`inline-block px-2 py-0.5 rounded-lg text-[10px] font-bold border uppercase tracking-wider ${statusInfo.bg}`}>
                            {statusInfo.label}
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right whitespace-nowrap space-x-1">
                        <button
                          onClick={() => {
                            setSelectedLead(item);
                            setEditNotes(item.notes || '');
                          }}
                          className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-[#DC2626] dark:hover:text-[#EF4444] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                          title="View Full Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {isSuperAdmin && (
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors"
                            title="Delete Lead Record (Super Admin)"
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
        )}

      </div>

      {/* Detail & Notes Slide-Over Drawer */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-lg bg-white dark:bg-[#11121C] border-l border-slate-300 dark:border-[#27293D] h-full overflow-y-auto p-6 space-y-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
            
            <div className="space-y-6">
              
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-950/80 border border-red-800 flex items-center justify-center text-[#EF4444]">
                    <Inbox className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-black uppercase text-slate-900 dark:text-white font-mono">
                      LEAD SPECIFICATION
                    </h3>
                    <span className="text-[10px] text-slate-500 font-mono">ID: {selectedLead.id}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Selector in Drawer */}
              <div className="p-4 bg-slate-50 dark:bg-[#181A28] rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">CURRENT STATUS</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {STATUS_CONFIG[selectedLead.status]?.label || selectedLead.status}
                  </span>
                </div>
                {isSuperAdmin && (
                  <select
                    value={selectedLead.status}
                    onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
                    className="py-1 px-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-200 cursor-pointer"
                  >
                    <option value="NEW">NEW</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="PROPOSAL_SENT">PROPOSAL SENT</option>
                    <option value="WON">WON</option>
                    <option value="ARCHIVED">ARCHIVED</option>
                  </select>
                )}
              </div>

              {/* Prospect Information Cards */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white">{selectedLead.full_name}</h4>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{selectedLead.company_name}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 dark:bg-[#181A28] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Email</span>
                    <a href={`mailto:${selectedLead.email}`} className="font-bold text-[#DC2626] dark:text-[#EF4444] hover:underline break-all">
                      {selectedLead.email}
                    </a>
                  </div>

                  <div className="p-3 bg-slate-50 dark:bg-[#181A28] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Phone</span>
                    <a href={`tel:${selectedLead.phone}`} className="font-bold text-slate-900 dark:text-white font-mono">
                      {selectedLead.phone || 'N/A'}
                    </a>
                  </div>

                  <div className="p-3 bg-slate-50 dark:bg-[#181A28] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Industry</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {selectedLead.industry || 'General'}
                    </span>
                  </div>

                  <div className="p-3 bg-slate-50 dark:bg-[#181A28] rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Employees</span>
                    <span className="font-bold text-slate-900 dark:text-white font-mono">
                      {selectedLead.employees || '1-50'}
                    </span>
                  </div>
                </div>

                {/* Services */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-wider">REQUESTED SERVICES</span>
                  <div className="flex flex-wrap gap-1.5">
                    {Array.isArray(selectedLead.services) && selectedLead.services.length > 0 ? (
                      selectedLead.services.map((s, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-red-50 dark:bg-red-950/40 text-[#DC2626] dark:text-[#EF4444] border border-red-200 dark:border-red-900/60 rounded-lg text-xs font-bold font-sans">
                          {s}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400">None selected</span>
                    )}
                  </div>
                </div>

                {/* Client Message */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-wider">CLIENT MESSAGE / SCOPE</span>
                  <div className="p-3.5 bg-slate-50 dark:bg-[#181A28] rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-sans font-medium whitespace-pre-wrap">
                    {selectedLead.message || 'No additional notes provided by client.'}
                  </div>
                </div>

                {/* Internal Notes: Super Admin edit mode, or clean read-only if note exists */}
                {isSuperAdmin ? (
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-wider">INTERNAL AUDIT NOTES</span>
                    <textarea
                      rows={3}
                      value={editNotes}
                      onChange={(e) => setEditNotes(e.target.value)}
                      placeholder="Add team follow-up notes, quote numbers, or contract status..."
                      className="w-full p-3 bg-slate-50 dark:bg-[#181A28] border border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444]"
                    />
                    <button
                      type="button"
                      onClick={handleSaveNotes}
                      className="px-3 py-1.5 bg-[#0F172A] dark:bg-slate-800 text-white rounded-lg text-xs font-bold hover:bg-slate-800 cursor-pointer"
                    >
                      Save Internal Notes
                    </button>
                  </div>
                ) : selectedLead.notes ? (
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-wider">NOTES</span>
                    <div className="p-3 bg-slate-50 dark:bg-[#181A28] rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                      {selectedLead.notes}
                    </div>
                  </div>
                ) : null}
              </div>

            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
              <a
                href={`mailto:${selectedLead.email}?subject=Zeroward / BreachBarrier Cybersecurity Follow-Up`}
                className="flex-1 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] dark:bg-[#EF4444] dark:hover:bg-[#DC2626] text-white text-center font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
              >
                Send Email Reply
              </a>
              {selectedLead.phone && (
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors border border-slate-300 dark:border-slate-700"
                >
                  Call
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
