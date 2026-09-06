import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Shield, Activity, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SystemStatusSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section className="border-b border-[#D6D0C2] bg-[#F2EFE9] py-14 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* /04 JOIN THE SHIELD (Left 4 cols) */}
        <div className="lg:col-span-4 border border-[#D6D0C2] bg-white p-8 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <span className="font-mono-code text-sm font-bold text-[#7C3AED]">/04</span>
            <h2 className="font-brutal text-4xl sm:text-5xl font-black text-black uppercase tracking-tight leading-none">
              JOIN THE<br />RESISTANCE
            </h2>
            <p className="font-mono-code text-xs text-slate-600 leading-relaxed">
              Cyber Brutalism is more than a style. It's a statement. Shield your infrastructure with unapologetic 24/7 engineering.
            </p>
          </div>

          <div>
            <Link
              to="/contact"
              className="brutal-btn-black w-full py-4 text-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>LET'S BUILD</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* /05 SYSTEM STATUS (Center 4 cols) */}
        <div className="lg:col-span-4 border border-[#D4D4D8] bg-white p-8 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-5 font-mono-code">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <span className="text-sm font-bold text-[#7C3AED]">/05</span>
              <span className="text-xs font-bold text-black uppercase tracking-wider">SYSTEM STATUS</span>
            </div>

            {/* Metrics Bars */}
            <div className="space-y-3 text-xs">
              
              {/* CPU */}
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-bold">CPU_USAGE</span>
                <div className="w-32 bg-slate-200 h-2.5 border border-slate-300 overflow-hidden">
                  <div className="bg-[#7C3AED] h-full w-[72%]" />
                </div>
                <span className="text-black font-extrabold">72%</span>
              </div>

              {/* Memory */}
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-bold">MEMORY</span>
                <div className="w-32 bg-slate-200 h-2.5 border border-slate-300 overflow-hidden">
                  <div className="bg-[#7C3AED] h-full w-[54%]" />
                </div>
                <span className="text-black font-bold">8.6 GB / 16 GB</span>
              </div>

              {/* Uptime */}
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-bold">UPTIME</span>
                <span className="text-black font-extrabold tracking-wider">365D 24H 00M</span>
              </div>

              {/* Network */}
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-bold">NETWORK</span>
                <span className="text-emerald-600 font-black">SECURE // ENCRYPTED</span>
              </div>

            </div>
          </div>

          {/* Neon Yellow/Lime Status Box (Exact as image) */}
          <div className="bg-[#E2F952] border border-black p-3 flex items-center justify-between font-mono-code text-xs font-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="uppercase tracking-wider">ALL SYSTEMS OPERATIONAL</span>
            <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
          </div>
        </div>

        {/* /06 SUBSCRIBE TO SIGNAL (Right 4 cols) */}
        <div className="lg:col-span-4 border border-[#D4D4D8] bg-white p-8 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 font-mono-code">
              <span className="text-sm font-bold text-[#7C3AED]">/06</span>
              <span className="text-xs font-bold text-black uppercase tracking-wider">SUBSCRIBE TO SIGNAL</span>
            </div>

            <p className="font-mono-code text-xs text-slate-600 leading-relaxed">
              Updates on threat intelligence, zero-day CVE advisories, and experiments from the BreachBarrier Security SOC Lab.
            </p>

            {/* Subscribe Form */}
            {subscribed ? (
              <div className="p-3 bg-emerald-50 border border-emerald-300 font-mono-code text-xs font-bold text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>SIGNAL TRANSMISSION CONFIRMED.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 font-mono-code text-xs">
                <div className="flex">
                  <input
                    type="email"
                    required
                    placeholder="ENTER WORK EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-3 border border-r-0 border-black bg-slate-50 text-black text-xs font-mono-code focus:outline-none focus:bg-white"
                  />
                  <button
                    type="submit"
                    className="brutal-btn-purple px-4 py-3 text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>SUBSCRIBE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Diagonal Strip Pattern (Exact as image) */}
          <div className="h-6 strip-pattern border border-slate-200" />
        </div>

      </div>
    </section>
  );
}
