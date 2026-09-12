-- =========================================================
-- BREACHBARRIER / ZEROWARD ADMIN PANEL DATABASE SCHEMA
-- For Supabase PostgreSQL (Run in Supabase SQL Editor)
-- =========================================================

-- 1. Create inquiries Table (Real Leads Only)
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  full_name TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  industry TEXT DEFAULT 'Technology & SaaS',
  employees TEXT DEFAULT '1-50',
  services TEXT[] DEFAULT '{}',
  message TEXT,
  status TEXT NOT NULL DEFAULT 'NEW', -- NEW, CONTACTED, IN_PROGRESS, PROPOSAL_SENT, WON, ARCHIVED
  notes TEXT,
  source TEXT DEFAULT 'Website Contact Form'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users (website visitors) to submit inquiries
CREATE POLICY "Allow anonymous inserts" ON public.inquiries
  FOR INSERT WITH CHECK (true);

-- Allow authenticated and anon select for Admin Dashboard
CREATE POLICY "Allow select inquiries" ON public.inquiries
  FOR SELECT USING (true);

-- Allow updates for inquiries (e.g. changing status, adding notes)
CREATE POLICY "Allow update inquiries" ON public.inquiries
  FOR UPDATE USING (true);

-- Allow delete inquiries (Super Admin only in application layer)
CREATE POLICY "Allow delete inquiries" ON public.inquiries
  FOR DELETE USING (true);

-- 2. Create admin_users Table (Real Accounts with Password Hash)
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'READ_ONLY', -- SUPER_ADMIN or READ_ONLY
  status TEXT NOT NULL DEFAULT 'ACTIVE',  -- ACTIVE or SUSPENDED
  password_hash TEXT NOT NULL,
  salt TEXT NOT NULL DEFAULT 'bb_secure_salt_2026'
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Allow select on admin_users
CREATE POLICY "Allow select admin_users" ON public.admin_users
  FOR SELECT USING (true);

-- Allow insert/update/delete on admin_users
CREATE POLICY "Allow modify admin_users" ON public.admin_users
  FOR ALL USING (true);

-- Insert Default Super Admin with SHA-256 Hashed Password ('Admin@ZeroWard2026')
INSERT INTO public.admin_users (email, full_name, role, status, password_hash, salt)
VALUES (
  'admin@zeroward.in', 
  'Zeroward Super Admin', 
  'SUPER_ADMIN', 
  'ACTIVE',
  'cd5effca995e4b5993caacafb889e50f0245e3854bbe164fd400cb32f0920efb',
  'bb_secure_salt_2026'
)
ON CONFLICT (email) DO UPDATE SET
  password_hash = EXCLUDED.password_hash,
  role = EXCLUDED.role;

-- Create Performance Indexes
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries (status);
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON public.inquiries (email);
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON public.admin_users (email);
