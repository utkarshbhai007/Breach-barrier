import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: 'Technology & SaaS',
    employees: '1-50',
    service: 'Security Operations Center (SOC)',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="border-b border-slate-200 bg-[#F8FAFC] py-8 sm:py-10 px-4 sm:px-8" id="contact">
      <div className="max-w-[1300px] mx-auto space-y-5">
        
        {/* Header Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6D28D9]" />
            <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              DIRECT CONSULTATION // START AN ENGAGEMENT
            </span>
          </div>
        </div>

        {/* Unified 2-Column Professional Container */}
        <div className="grid lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Sleek Brand & Contact Info */}
          <div className="lg:col-span-5 bg-[#0F172A] text-white p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-[#A855F7] uppercase tracking-wider">GET IN TOUCH</span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  READY TO STRENGTHEN<br />
                  <span className="text-[#A855F7]">YOUR CYBERSECURITY?</span>
                </h2>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Let's discuss how Breach Barrier can protect your organization with 24×7 enterprise-grade security at a fraction of the cost of an in-house team.
              </p>

              {/* Contact Details List */}
              <div className="space-y-2.5 pt-3 border-t border-slate-800/80 text-xs">
                <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-purple-950/60 border border-purple-800/50 flex items-center justify-center text-[#A855F7] shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-200 text-xs font-medium">contact@breachbarrier.in</span>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-purple-950/60 border border-purple-800/50 flex items-center justify-center text-[#A855F7] shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-200 text-xs font-medium">+1 (800) 550-BREACH / India SOC Desk</span>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-purple-950/60 border border-purple-800/50 flex items-center justify-center text-[#A855F7] shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-200 text-xs font-medium">India (Global Delivery Center) • Canada</span>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-purple-950/60 border border-purple-800/50 flex items-center justify-center text-[#A855F7] shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-200 text-xs font-medium">Mon – Fri: 9:00 AM – 6:00 PM (24×7 SOC)</span>
                </div>
              </div>
            </div>

            {/* Assessment Included Badge */}
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-[11px] text-[#A855F7] font-semibold flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Free Initial Security Architecture Assessment Included</span>
            </div>
          </div>

          {/* Right Column: Professional Consultation Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-3.5">
                <div className="w-12 h-12 bg-purple-50 text-[#6D28D9] border border-purple-200 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] uppercase tracking-tight">INQUIRY DISPATCHED</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. A BreachBarrier Senior Security Architect will review your requirements and reach out within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="cursor-target px-5 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl mt-2 transition-colors"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                
                {/* Row 1: Name & Company */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="Meet Shingore"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="cursor-target w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#6D28D9] focus:bg-white focus:outline-none transition-all text-xs text-slate-900"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">COMPANY NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Corp"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="cursor-target w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#6D28D9] focus:bg-white focus:outline-none transition-all text-xs text-slate-900"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">BUSINESS EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="meet@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="cursor-target w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#6D28D9] focus:bg-white focus:outline-none transition-all text-xs text-slate-900"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="cursor-target w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#6D28D9] focus:bg-white focus:outline-none transition-all text-xs text-slate-900"
                    />
                  </div>
                </div>

                {/* Row 3: Industry, Employees, Service */}
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">INDUSTRY</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="cursor-target w-full py-2 px-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#6D28D9] focus:bg-white focus:outline-none transition-all text-xs text-slate-900"
                    >
                      <option>Technology & SaaS</option>
                      <option>Financial Services</option>
                      <option>Healthcare</option>
                      <option>Manufacturing</option>
                      <option>Education</option>
                      <option>Retail & E-commerce</option>
                      <option>Government & Public</option>
                      <option>Small & Medium Business</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">EMPLOYEES</label>
                    <select
                      value={formData.employees}
                      onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                      className="cursor-target w-full py-2 px-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#6D28D9] focus:bg-white focus:outline-none transition-all text-xs text-slate-900"
                    >
                      <option>1-50</option>
                      <option>51-200</option>
                      <option>201-1000</option>
                      <option>1000+</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">PRIMARY SERVICE</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="cursor-target w-full py-2 px-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#6D28D9] focus:bg-white focus:outline-none transition-all text-xs text-slate-900"
                    >
                      <option>Security Operations Center (SOC)</option>
                      <option>Managed Detection & Response (MDR)</option>
                      <option>Penetration Testing</option>
                      <option>Incident Response & Forensics</option>
                      <option>Vulnerability Management</option>
                      <option>Compliance Readiness (ISO/SOC2)</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">YOUR MESSAGE / SCOPE CHALLENGES</label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your security goals, compliance deadlines, or current tooling..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="cursor-target w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#6D28D9] focus:bg-white focus:outline-none transition-all text-xs text-slate-900"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="cursor-target w-full py-3 bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold rounded-xl tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs mt-1"
                >
                  <span>BOOK A FREE SECURITY CONSULTATION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
