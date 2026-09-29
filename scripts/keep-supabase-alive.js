/**
 * Keep Supabase Active Script
 * -------------------------------------------------------------
 * Supabase free tier pauses projects after 7 days of inactivity.
 * This script makes a lightweight read request to Supabase REST API
 * to register activity and reset the 7-day inactivity pause timer.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Helper to load .env if env vars aren't provided
function loadEnv() {
  const envPath = path.join(rootDir, '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;
      const eqIdx = line.indexOf('=');
      if (eqIdx !== -1) {
        const key = line.slice(0, eqIdx).trim();
        let val = line.slice(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

loadEnv();

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Error: Supabase URL or Anon Key is missing.');
  console.error('Please ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in .env or as environment variables.');
  process.exit(1);
}

async function pingSupabase() {
  const targetUrl = `${supabaseUrl.replace(/\/+$/, '')}/rest/v1/inquiries?select=id&limit=1`;
  console.log(`[INFO] Sending keepalive ping to Supabase at ${new Date().toISOString()}...`);

  try {
    const startTime = Date.now();
    const res = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Range-Unit': 'items',
        'Range': '0-0'
      }
    });

    const duration = Date.now() - startTime;

    if (res.ok) {
      console.log(`✅ [SUCCESS] Supabase project responded with HTTP ${res.status} (${duration}ms).`);
      console.log('Project activity registered — 7-day pause timer reset!');
      process.exit(0);
    } else {
      console.warn(`⚠️ [WARN] Supabase responded with status ${res.status}: ${res.statusText}`);
      // Even a 401/404 from the PostgREST server counts as incoming API traffic, but let's log the details
      const body = await res.text();
      console.log(`Response body: ${body.slice(0, 300)}`);
      process.exit(0);
    }
  } catch (err) {
    console.error('❌ [ERROR] Failed to reach Supabase:', err.message);
    process.exit(1);
  }
}

pingSupabase();
