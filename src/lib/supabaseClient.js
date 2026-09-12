import { createClient } from '@supabase/supabase-js';

// Supabase Configuration from Project Credentials
export const SUPABASE_URL = 'https://icaanytcntdnfggywtmp.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljYWFueXRjbnRkbmZnZ3l3dG1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMTg5MTksImV4cCI6MjEwNDc5NDkxOX0.0QSDmynyZssdlxQp6nuMWQHdzwK1sgSx8PKquxOvf48';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const LOCAL_STORAGE_KEY = 'zeroward_cached_inquiries';
const LOCAL_USERS_KEY = 'zeroward_cached_admin_users';

// Initial Demo/Fallback Inquiries if database table is newly initialized
const INITIAL_FALLBACK_INQUIRIES = [
  {
    id: 'demo-lead-01',
    created_at: new Date(Date.now() - 1000 * 60 * 25).toISOString(), // 25 mins ago
    full_name: 'Vikram Malhotra',
    company_name: 'Apex FinTech Solutions',
    email: 'v.malhotra@apexfintech.io',
    phone: '+91 98201 44521',
    industry: 'Financial Services & Banking',
    employees: '51-200',
    services: ['Security Operations Center (SOC) & MDR', 'Penetration Testing (VAPT)'],
    message: 'Need 24/7 SOC monitoring for upcoming RBI audit and compliance filing.',
    status: 'NEW',
    notes: 'Priority prospect — request SOW quote within 24h.',
    source: 'Website Contact Form'
  },
  {
    id: 'demo-lead-02',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
    full_name: 'Sarah Jenkins',
    company_name: 'CloudScale SaaS Canada',
    email: 'sjenkins@cloudscale.ca',
    phone: '+1 416 890 2234',
    industry: 'Technology & SaaS',
    employees: '1-50',
    services: ['Penetration Testing (VAPT)', 'Attack Surface Management (ASM)'],
    message: 'Annual web app and external API pen-test required before our SOC 2 Type II assessment.',
    status: 'CONTACTED',
    notes: 'Intro call scheduled with Technical Lead.',
    source: 'Consultation Form'
  },
  {
    id: 'demo-lead-03',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 28).toISOString(), // Yesterday
    full_name: 'Rajesh Nair',
    company_name: 'MediCare Diagnostics',
    email: 'rnair@medicarelab.in',
    phone: '+91 99400 12890',
    industry: 'Healthcare & Life Sciences',
    employees: '201-1000',
    services: ['Incident Response (IR) & Digital Forensics', 'Vulnerability Management'],
    message: 'Looking for Zero-Day Retainer Contract for our healthcare hospital network.',
    status: 'IN_PROGRESS',
    notes: 'Sent pricing tier and SLA contract agreement.',
    source: 'Direct Consultation'
  }
];

const INITIAL_FALLBACK_USERS = [
  {
    id: 'user-01',
    email: 'admin@zeroward.in',
    full_name: 'Zeroward Super Admin',
    role: 'SUPER_ADMIN',
    status: 'ACTIVE',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString()
  },
  {
    id: 'user-02',
    email: 'team@zeroward.in',
    full_name: 'Operations Reviewer',
    role: 'READ_ONLY',
    status: 'ACTIVE',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString()
  }
];

// Helper to get local cache
function getLocalInquiries() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_FALLBACK_INQUIRIES));
      return INITIAL_FALLBACK_INQUIRIES;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_FALLBACK_INQUIRIES;
  }
}

function saveLocalInquiries(list) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn('LocalStorage save failed', e);
  }
}

/**
 * Submit Inquiry from Public Website Form
 */
export async function submitInquiry(data) {
  const payload = {
    id: crypto.randomUUID ? crypto.randomUUID() : 'lead_' + Date.now(),
    created_at: new Date().toISOString(),
    full_name: data.fullName || data.full_name || 'Anonymous Inquiry',
    company_name: data.companyName || data.company_name || '',
    email: data.email || '',
    phone: data.phone || '',
    industry: data.industry || 'Technology & SaaS',
    employees: data.employees || '1-50',
    services: Array.isArray(data.services) ? data.services : [data.services || 'General Inquiry'],
    message: data.message || '',
    status: 'NEW',
    notes: '',
    source: data.source || 'Website Contact Form'
  };

  // Always update local cache so dashboard is instant
  const localList = getLocalInquiries();
  saveLocalInquiries([payload, ...localList]);

  // Attempt insert into Supabase
  try {
    const { data: inserted, error } = await supabase
      .from('inquiries')
      .insert([payload])
      .select();

    if (error) {
      console.warn('Supabase insert note: Table may be newly initialized. Local queue active.', error.message);
      return { success: true, isLocalFallback: true, data: payload };
    }
    return { success: true, isLocalFallback: false, data: inserted };
  } catch (err) {
    console.warn('Supabase network catch, saved locally.', err);
    return { success: true, isLocalFallback: true, data: payload };
  }
}

/**
 * Fetch All Inquiries for Admin Dashboard
 */
export async function fetchInquiries() {
  try {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data && data.length > 0) {
      // Sync to local cache
      saveLocalInquiries(data);
      return { data, isSupabaseLive: true };
    }
  } catch (err) {
    console.warn('Supabase fetch notice, loading cached leads:', err);
  }

  // Fallback to local storage
  const localData = getLocalInquiries();
  return { data: localData, isSupabaseLive: false };
}

/**
 * Update Inquiry Status (Super Admin only)
 */
export async function updateInquiryStatus(id, newStatus) {
  // Update local
  const localList = getLocalInquiries();
  const updated = localList.map(item => item.id === id ? { ...item, status: newStatus } : item);
  saveLocalInquiries(updated);

  // Attempt Supabase update
  try {
    await supabase
      .from('inquiries')
      .update({ status: newStatus })
      .eq('id', id);
  } catch (e) {
    console.warn('Supabase remote status sync notice:', e);
  }
  return true;
}

/**
 * Update Inquiry Notes (Super Admin only)
 */
export async function updateInquiryNotes(id, notes) {
  const localList = getLocalInquiries();
  const updated = localList.map(item => item.id === id ? { ...item, notes } : item);
  saveLocalInquiries(updated);

  try {
    await supabase
      .from('inquiries')
      .update({ notes })
      .eq('id', id);
  } catch (e) {
    console.warn('Supabase remote notes sync notice:', e);
  }
  return true;
}

/**
 * Delete Inquiry (Super Admin only)
 */
export async function deleteInquiry(id) {
  const localList = getLocalInquiries();
  const filtered = localList.filter(item => item.id !== id);
  saveLocalInquiries(filtered);

  try {
    await supabase
      .from('inquiries')
      .delete()
      .eq('id', id);
  } catch (e) {
    console.warn('Supabase remote delete sync notice:', e);
  }
  return true;
}

/**
 * Manage Admin Users (Proposal Section 7.1)
 */
export async function fetchAdminUsers() {
  try {
    const { data, error } = await supabase
      .from('admin_users')
      .select('*')
      .order('created_at', { ascending: true });

    if (!error && data && data.length > 0) {
      localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(data));
      return data;
    }
  } catch (e) {
    console.warn('Supabase admin_users fetch notice:', e);
  }

  try {
    const raw = localStorage.getItem(LOCAL_USERS_KEY);
    return raw ? JSON.parse(raw) : INITIAL_FALLBACK_USERS;
  } catch {
    return INITIAL_FALLBACK_USERS;
  }
}

export async function addAdminUser(user) {
  const newUser = {
    id: crypto.randomUUID ? crypto.randomUUID() : 'usr_' + Date.now(),
    created_at: new Date().toISOString(),
    email: user.email,
    full_name: user.full_name,
    role: user.role || 'READ_ONLY',
    status: 'ACTIVE'
  };

  const current = await fetchAdminUsers();
  const updated = [...current, newUser];
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(updated));

  try {
    await supabase.from('admin_users').insert([newUser]);
  } catch (e) {
    console.warn('Supabase remote user insert notice:', e);
  }
  return newUser;
}

export async function deleteAdminUser(id) {
  const current = await fetchAdminUsers();
  const updated = current.filter(u => u.id !== id);
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(updated));

  try {
    await supabase.from('admin_users').delete().eq('id', id);
  } catch (e) {
    console.warn('Supabase remote user delete notice:', e);
  }
  return true;
}

/**
 * Export Inquiries to CSV File
 */
export function exportInquiriesToCSV(inquiries, filename = 'Zeroward_Inquiries_Export.csv') {
  if (!inquiries || !inquiries.length) return;

  const headers = [
    'Lead ID',
    'Received At (ISO)',
    'Full Name',
    'Company Name',
    'Email Address',
    'Phone Number',
    'Industry',
    'Employees',
    'Services Requested',
    'Status',
    'Message',
    'Internal Notes',
    'Source'
  ];

  const rows = inquiries.map(item => [
    `"${item.id || ''}"`,
    `"${item.created_at || ''}"`,
    `"${(item.full_name || '').replace(/"/g, '""')}"`,
    `"${(item.company_name || '').replace(/"/g, '""')}"`,
    `"${(item.email || '').replace(/"/g, '""')}"`,
    `"${(item.phone || '').replace(/"/g, '""')}"`,
    `"${(item.industry || '').replace(/"/g, '""')}"`,
    `"${(item.employees || '').replace(/"/g, '""')}"`,
    `"${(Array.isArray(item.services) ? item.services.join('; ') : item.services || '').replace(/"/g, '""')}"`,
    `"${item.status || ''}"`,
    `"${(item.message || '').replace(/"/g, '""')}"`,
    `"${(item.notes || '').replace(/"/g, '""')}"`,
    `"${(item.source || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
