import { createClient } from '@supabase/supabase-js';

// Read credentials securely from Vite environment variables (.env in local, Project Settings in Vercel)
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://icaanytcntdnfggywtmp.supabase.co';
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY || 'placeholder-anon-key');

const LOCAL_STORAGE_KEY = 'zeroward_live_inquiries';
const LOCAL_USERS_KEY = 'zeroward_live_admin_users';
const DEFAULT_SALT = 'bb_secure_salt_2026';

// Cryptographic Password Hashing using Web Crypto SHA-256
export async function hashPassword(password, salt = DEFAULT_SALT) {
  const text = password + ':' + salt;
  const msgUint8 = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Initial Primary Super Admin Seed (Pre-hashed Admin@ZeroWard2026)
const INITIAL_SUPER_ADMIN = {
  id: 'usr_superadmin_01',
  email: 'admin@zeroward.in',
  full_name: 'Zeroward Super Admin',
  role: 'SUPER_ADMIN',
  status: 'ACTIVE',
  password_hash: 'cd5effca995e4b5993caacafb889e50f0245e3854bbe164fd400cb32f0920efb',
  salt: DEFAULT_SALT,
  created_at: new Date().toISOString()
};

function getLocalUsers() {
  try {
    const raw = localStorage.getItem(LOCAL_USERS_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify([INITIAL_SUPER_ADMIN]));
      return [INITIAL_SUPER_ADMIN];
    }
    return JSON.parse(raw);
  } catch {
    return [INITIAL_SUPER_ADMIN];
  }
}

function saveLocalUsers(users) {
  try {
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
  } catch (e) {
    console.warn('Local users save error:', e);
  }
}

function getLocalInquiries() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalInquiries(list) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn('Local inquiries save error:', e);
  }
}

/**
 * Real Live Authentication against Supabase Database / Secure Hash
 */
export async function authenticateUser(email, password, expectedPortal = 'admin') {
  const cleanEmail = (email || '').trim().toLowerCase();
  const cleanPassword = (password || '').trim();

  if (!cleanEmail || !cleanPassword) {
    return { success: false, error: 'Please provide both Email ID and Password.' };
  }

  let userRecord = null;

  // 1. Try querying Supabase admin_users table
  try {
    const { data, error } = await supabase
      .from('admin_users')
      .select('*')
      .ilike('email', cleanEmail)
      .maybeSingle();

    if (!error && data) {
      userRecord = data;
    }
  } catch (err) {
    console.warn('Supabase auth network query note:', err);
  }

  // 2. Fallback to local stored users if table not yet run in Supabase SQL editor
  if (!userRecord) {
    const localUsers = getLocalUsers();
    userRecord = localUsers.find(u => u.email.toLowerCase() === cleanEmail);
  }

  if (!userRecord) {
    return { 
      success: false, 
      error: `No account found with email "${cleanEmail}". Please check your credentials or contact the administrator.` 
    };
  }

  if (userRecord.status !== 'ACTIVE') {
    return { 
      success: false, 
      error: 'This account is suspended or inactive. Please contact the administrator.' 
    };
  }

  // 3. Verify Password Hash
  const userSalt = userRecord.salt || DEFAULT_SALT;
  const inputHash = await hashPassword(cleanPassword, userSalt);

  if (inputHash !== userRecord.password_hash) {
    return { 
      success: false, 
      error: 'Incorrect password. Please verify and try again.' 
    };
  }

  // 4. Role & Portal Verification
  if (expectedPortal === 'admin' && userRecord.role !== 'SUPER_ADMIN') {
    return { 
      success: false, 
      error: 'Access Denied: This account is an Employee account. Please log in via the Employee Portal (/employee).' 
    };
  }

  if (expectedPortal === 'employee' && userRecord.role === 'SUPER_ADMIN') {
    // Allow Super Admin to also view Employee portal if desired, or guide them
  }

  return { 
    success: true, 
    user: {
      id: userRecord.id,
      email: userRecord.email,
      full_name: userRecord.full_name,
      role: userRecord.role,
      status: userRecord.status,
      portal: expectedPortal
    } 
  };
}

/**
 * Submit Inquiry from Website Contact Form (Real Leads Only)
 */
export async function submitInquiry(data) {
  const payload = {
    id: crypto.randomUUID ? crypto.randomUUID() : 'lead_' + Date.now(),
    created_at: new Date().toISOString(),
    full_name: data.fullName || data.full_name || 'Anonymous Prospect',
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

  // Add to local storage
  const current = getLocalInquiries();
  saveLocalInquiries([payload, ...current]);

  // Insert into Supabase
  try {
    const { data: inserted, error } = await supabase
      .from('inquiries')
      .insert([payload])
      .select();

    if (error) {
      console.warn('Supabase inquiries insert note (Check if table exists):', error.message);
      return { success: true, isLive: false, data: payload };
    }
    return { success: true, isLive: true, data: inserted };
  } catch (e) {
    console.warn('Supabase inquiries network catch:', e);
    return { success: true, isLive: false, data: payload };
  }
}

/**
 * Fetch Inquiries (Real Leads Only — No Dummy Data)
 */
export async function fetchInquiries() {
  try {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      saveLocalInquiries(data);
      return { data, isSupabaseLive: true };
    }
  } catch (err) {
    console.warn('Supabase inquiries fetch notice:', err);
  }

  return { data: getLocalInquiries(), isSupabaseLive: false };
}

export async function updateInquiryStatus(id, newStatus) {
  const list = getLocalInquiries();
  const updated = list.map(item => item.id === id ? { ...item, status: newStatus } : item);
  saveLocalInquiries(updated);

  try {
    await supabase.from('inquiries').update({ status: newStatus }).eq('id', id);
  } catch (e) {
    console.warn('Supabase remote status sync notice:', e);
  }
  return true;
}

export async function updateInquiryNotes(id, notes) {
  const list = getLocalInquiries();
  const updated = list.map(item => item.id === id ? { ...item, notes } : item);
  saveLocalInquiries(updated);

  try {
    await supabase.from('inquiries').update({ notes }).eq('id', id);
  } catch (e) {
    console.warn('Supabase remote notes sync notice:', e);
  }
  return true;
}

export async function deleteInquiry(id) {
  const list = getLocalInquiries();
  const filtered = list.filter(item => item.id !== id);
  saveLocalInquiries(filtered);

  try {
    await supabase.from('inquiries').delete().eq('id', id);
  } catch (e) {
    console.warn('Supabase remote delete sync notice:', e);
  }
  return true;
}

/**
 * Manage Admin & Employee Users (Real Password Hash Stored)
 */
export async function fetchAdminUsers() {
  try {
    const { data, error } = await supabase
      .from('admin_users')
      .select('id, created_at, email, full_name, role, status')
      .order('created_at', { ascending: true });

    if (!error && data && data.length > 0) {
      return data;
    }
  } catch (e) {
    console.warn('Supabase fetchAdminUsers notice:', e);
  }

  const local = getLocalUsers();
  return local.map(({ password_hash, salt, ...safeUser }) => safeUser);
}

/**
 * Admin creates an Employee account with their assigned password
 */
export async function addAdminUser({ email, full_name, role = 'READ_ONLY', password }) {
  const cleanEmail = email.trim().toLowerCase();
  const userSalt = 'bb_salt_' + Date.now();
  const passwordHash = await hashPassword(password.trim(), userSalt);

  const newUser = {
    id: crypto.randomUUID ? crypto.randomUUID() : 'usr_' + Date.now(),
    created_at: new Date().toISOString(),
    email: cleanEmail,
    full_name: full_name.trim(),
    role: role || 'READ_ONLY',
    status: 'ACTIVE',
    password_hash: passwordHash,
    salt: userSalt
  };

  // Save to local cache
  const current = getLocalUsers().filter(u => u.email.toLowerCase() !== cleanEmail);
  saveLocalUsers([...current, newUser]);

  // Insert into Supabase
  try {
    const { error } = await supabase
      .from('admin_users')
      .insert([newUser]);

    if (error) {
      console.warn('Supabase admin_users insert error (Run supabase_schema.sql in editor):', error.message);
    }
  } catch (e) {
    console.warn('Supabase admin_users network insert notice:', e);
  }

  const { password_hash, salt, ...safeUser } = newUser;
  return safeUser;
}

/**
 * Delete User
 */
export async function deleteAdminUser(id) {
  const current = getLocalUsers().filter(u => u.id !== id);
  saveLocalUsers(current);

  try {
    await supabase.from('admin_users').delete().eq('id', id);
  } catch (e) {
    console.warn('Supabase admin_users delete notice:', e);
  }
  return true;
}

/**
 * Export Inquiries to CSV
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
