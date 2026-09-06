import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const serviceOptions = [
  'Security Operations Center (SOC) & MDR',
  'Incident Response (IR) & Digital Forensics',
  'Penetration Testing (VAPT)',
  'Attack Surface Management (ASM)',
  'Vulnerability Management'
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: 'Technology & SaaS',
    employees: '1-50',
    services: ['Security Operations Center (SOC) & MDR'],
    message: '',
  });

  const toggleService = (svc) => {
    setFormData((prev) => {
      const exists = prev.services.includes(svc);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== svc)
          : [...prev.services, svc]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="border-b border-[#D6D0C2] dark:border-[#262736] bg-[#F2EFE9] dark:bg-[#0B0C12] py-8 sm:py-12 px-4 sm:px-8 transition-colors duration-200" id="contact">
      <div className="max-w-[1300px] mx-auto space-y-5">
        
        {/* Header Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] dark:bg-[#EF4444] animate-pulse" />
            <span className="text-xs font-bold text-[#DC2626] dark:text-[#EF4444] uppercase tracking-wider font-sans">
              Direct Consultation • BreachBarrier Security
            </span>
          </div>
        </div>

        {/* Unified 2-Column Container */}
        <div className="grid lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Brand & Contact Info */}
          <div className="lg:col-span-5 bg-[#0F172A] text-white p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-[#EF4444] uppercase tracking-wider">GET IN TOUCH</span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  READY TO STRENGTHEN<br />
                  <span className="text-[#EF4444]">YOUR CYBERSECURITY?</span>
                </h2>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal font-sans">
                Let's discuss how BreachBarrier Security can protect your organization with 24×7 enterprise-grade security at a fraction of the cost of an in-house team.
              </p>

              {/* Contact Details List */}
              <div className="space-y-2.5 pt-3 border-t border-slate-800/80 text-xs">
                <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-red-950/60 border border-red-800/50 flex items-center justify-center text-[#EF4444] shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <a href="mailto:info@breachbarriersecurity.com" className="text-slate-200 text-xs font-medium hover:text-[#EF4444] transition-colors font-sans">
                    info@breachbarriersecurity.com
                  </a>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-red-950/60 border border-red-800/50 flex items-center justify-center text-[#EF4444] shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <a href="tel:+916355496696" className="text-slate-200 text-xs font-medium hover:text-[#EF4444] transition-colors font-sans">
                    +91 63554 96696
                  </a>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-red-950/60 border border-red-800/50 flex items-center justify-center text-[#EF4444] shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-200 text-xs font-medium font-sans">India (Global Delivery Center)</span>
                </div>
              </div>
            </div>

            {/* Assessment Included Badge */}
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-[11px] text-[#EF4444] font-semibold flex items-center gap-2.5 font-sans">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Free Initial Security Architecture Assessment Included</span>
            </div>
          </div>

          {/* Right Column: Professional Consultation Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#13141D] border border-slate-200/90 dark:border-[#26283A] rounded-2xl p-6 sm:p-7 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-3.5">
                <div className="w-12 h-12 bg-red-50 dark:bg-red-950/60 text-[#DC2626] dark:text-[#EF4444] border border-red-200 dark:border-red-900/60 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white uppercase tracking-tight">INQUIRY DISPATCHED</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed font-sans">
                  Thank you, <span className="font-bold text-slate-900 dark:text-white">{formData.fullName}</span>. A BreachBarrier Security Senior Architect will review your requirements and reach out within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="cursor-target px-5 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl mt-2 transition-colors font-sans"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                
                {/* Row 1: Name & Company */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300 block text-[11px] uppercase tracking-wider font-sans">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ravi Makwana"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="cursor-target w-full py-2 px-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[#DC2626] dark:focus:border-[#EF4444] focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all text-xs text-slate-900 dark:text-white font-sans"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300 block text-[11px] uppercase tracking-wider font-sans">COMPANY NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Corp"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="cursor-target w-full py-2 px-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[#DC2626] dark:focus:border-[#EF4444] focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all text-xs text-slate-900 dark:text-white font-sans"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300 block text-[11px] uppercase tracking-wider font-sans">BUSINESS EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="ravi@breachbarriersecurity.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="cursor-target w-full py-2 px-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[#DC2626] dark:focus:border-[#EF4444] focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all text-xs text-slate-900 dark:text-white font-sans"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="font-bold text-slate-700 dark:text-slate-300 block text-[11px] uppercase tracking-wider font-sans">
                        PHONE NUMBER <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                      </label>
                    </div>
                    <input
                      type="tel"
                      placeholder="+91 63554 96696"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="cursor-target w-full py-2 px-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[#DC2626] dark:focus:border-[#EF4444] focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all text-xs text-slate-900 dark:text-white font-sans"
                    />
                  </div>
                </div>

                {/* Row 3: Industry & Employees */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300 block text-[11px] uppercase tracking-wider font-sans">INDUSTRY</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="cursor-target w-full py-2 px-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[#DC2626] dark:focus:border-[#EF4444] focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all text-xs text-slate-900 dark:text-white font-sans"
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
                    <label className="font-bold text-slate-700 dark:text-slate-300 block text-[11px] uppercase tracking-wider font-sans">EMPLOYEES</label>
                    <select
                      value={formData.employees}
                      onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                      className="cursor-target w-full py-2 px-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[#DC2626] dark:focus:border-[#EF4444] focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all text-xs text-slate-900 dark:text-white font-sans"
                    >
                      <option>1-50</option>
                      <option>51-200</option>
                      <option>201-1000</option>
                      <option>1000+</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Services You Need (Multiple Choice) */}
                <div className="space-y-1.5 pt-0.5">
                  <div className="flex items-center justify-between">
                    <label className="font-bold text-slate-700 dark:text-slate-300 block text-[11px] uppercase tracking-wider font-sans">
                      SERVICES YOU NEED <span className="text-[#DC2626] dark:text-[#EF4444] font-semibold text-[10px] normal-case">(Select multiple)</span>
                    </label>
                    {formData.services.length > 0 && (
                      <span className="text-[10px] text-slate-500 font-medium">
                        {formData.services.length} selected
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((svc) => {
                      const isSelected = formData.services.includes(svc);
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => toggleService(svc)}
                          className={`cursor-target p-2.5 rounded-xl text-left border text-[11px] transition-all flex items-center justify-between gap-1.5 font-sans ${
                            isSelected
                              ? 'bg-red-50 dark:bg-red-950/40 text-[#DC2626] dark:text-[#EF4444] border-2 border-[#DC2626] dark:border-[#EF4444] font-bold shadow-xs'
                              : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-800 hover:bg-white font-medium'
                          }`}
                        >
                          <span className="leading-snug">{svc}</span>
                          <span className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 text-[10px] font-bold transition-colors ${
                            isSelected ? 'bg-[#DC2626] dark:bg-[#EF4444] text-white dark:text-black' : 'border border-slate-300 dark:border-slate-600 text-transparent'
                          }`}>
                            ✓
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 5: Message */}
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300 block text-[11px] uppercase tracking-wider font-sans">YOUR MESSAGE / SCOPE CHALLENGES</label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your security goals, compliance deadlines, or current tooling..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="cursor-target w-full py-2 px-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[#DC2626] dark:focus:border-[#EF4444] focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all text-xs text-slate-900 dark:text-white font-sans"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="cursor-target w-full py-3 bg-[#DC2626] hover:bg-[#B91C1C] dark:bg-[#EF4444] dark:hover:bg-[#DC2626] text-white dark:text-black text-xs font-bold rounded-xl tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs mt-1 font-sans"
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
