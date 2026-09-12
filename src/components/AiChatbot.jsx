import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Bot, 
  Sparkles, 
  RefreshCw, 
  ArrowUpRight, 
  ShieldAlert, 
  ShieldCheck, 
  Activity, 
  Bug, 
  Globe, 
  Scan,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "👋 Hello! I am the BreachBarrier Security AI Assistant.\n\nAsk me anything about our 24/7 SOC & MDR, ISO 27001 compliance, industries served, 5 core services, or how to schedule a consultation with our architecture team.",
      time: 'LIVE',
      quickActions: [
        "What industries do you serve?",
        "Do you provide 24×7 monitoring?",
        "Can you help with ISO 27001?",
        "Where is your team based?",
        "How do I schedule a consultation?"
      ]
    }
  ]);

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        inputRef.current?.focus();
      }, 150);
    }
  }, [messages, isOpen, isTyping]);

  const quickPrompts = [
    "What industries do you serve?",
    "Do you provide 24×7 monitoring?",
    "Can you help us become ISO 27001 compliant?",
    "How do I schedule a consultation?",
    "Where is your team based, and who do you serve?",
    "5 Core Services",
    "Penetration Testing (VAPT)",
    "Incident Response & Forensics",
    "Attack Surface Management",
    "Vulnerability Management",
    "Pricing & In-House Cost",
    "Founder Ravi Makwana"
  ];

  const getBotResponse = (query) => {
    const q = query.toLowerCase().trim();

    // 1. Greetings
    if (q === 'hi' || q === 'hello' || q === 'hey' || q.includes('good morning') || q.includes('good evening') || q.includes('kem cho') || q.includes('namaste')) {
      return {
        text: "Hello! Welcome to BreachBarrier Security. How can I assist you with your cybersecurity architecture today?",
        quickActions: ["What industries do you serve?", "Do you provide 24×7 monitoring?", "How do I schedule a consultation?"]
      };
    }

    // 2. Resource Q5: Where is your team based, and who do you serve?
    if (q.includes('where is your team') || q.includes('team based') || (q.includes('who') && q.includes('serve')) || q.includes('where are you') || q.includes('location') || q.includes('india') || q.includes('canada')) {
      return {
        text: "🌍 Team Location & Global Coverage:\n\nWe are based in India and deliver enterprise-grade managed cybersecurity services to organizations across Canada, North America, and other global international markets.\n\nOur centralized delivery hub provides 24×7×365 follow-the-sun defense with rapid SLA guarantees and high operational efficiency.",
        link: { text: "Learn About Our Global Delivery Hub ↗", path: "/about" },
        quickActions: ["What industries do you serve?", "Do you provide 24×7 monitoring?", "How do I schedule a consultation?"]
      };
    }

    // 3. Resource Q1: What industries do you serve?
    if (q.includes('industry') || q.includes('industries') || q.includes('sector') || q.includes('vertical') || q.includes('healthcare') || q.includes('fintech') || q.includes('retail') || q.includes('manufacturing')) {
      return {
        text: "🏢 Industries We Serve:\n\nWe serve Healthcare, Financial Services, Technology & SaaS, Manufacturing, Education, Retail & E-commerce, Government & Public Sector, and Small & Medium Businesses worldwide.\n\nEach sector receives tailored defense blueprints, specific regulatory compliance mapping (HIPAA, PCI-DSS, SOC 2, PIPEDA), and continuous threat hunting.",
        link: { text: "Explore All 8 Industry Defense Matrices ↗", path: "/industries" },
        quickActions: ["Do you provide 24×7 monitoring?", "Can you help with ISO 27001?", "How do I schedule a consultation?"]
      };
    }

    // 4. Resource Q2 & SOC: Do you provide 24×7 monitoring?
    if (q.includes('24/7') || q.includes('24×7') || q.includes('24x7') || q.includes('monitoring') || q.includes('soc') || q.includes('mdr') || q.includes('threat hunting') || q.includes('siem')) {
      return {
        text: "🕒 24×7×365 Continuous Monitoring (SOC & MDR):\n\nYes. Our Security Operations Center (SOC) provides continuous 24×7×365 monitoring, real-time threat detection, and rapid active containment through our dedicated global delivery hub.\n\nKey Deliverables:\n• 24/7/365 Network & Endpoint Telemetry Monitoring\n• 15-Minute Critical Incident Response SLA (Guaranteed)\n• Automated Threat Containment (sub-second isolation)\n• Monthly Executive Security Dashboards & C-Suite Metrics",
        link: { text: "Explore SOC & MDR Service ↗", path: "/services/soc-mdr" },
        quickActions: ["Can you help with ISO 27001?", "How do I schedule a consultation?", "5 Core Services"]
      };
    }

    // 5. Resource Q3 & Compliance: Can you help us become ISO 27001 compliant?
    if (q.includes('iso') || q.includes('27001') || q.includes('compliance') || q.includes('soc 2') || q.includes('audit') || q.includes('hipaa') || q.includes('pipeda') || q.includes('gdpr')) {
      return {
        text: "🛡️ ISO 27001 & Compliance Readiness:\n\nYes. We support end-to-end ISO 27001 and SOC 2 readiness, security policies development, risk assessments, gap analysis, automated Vanta/Drata evidence syncing, and complete audit support with certified assessors.\n\nWe ensure your systems stay audit-ready year-round rather than rushing before an inspection.",
        link: { text: "Schedule Compliance Architecture Audit ↗", path: "/contact" },
        quickActions: ["Penetration Testing (VAPT)", "How do I schedule a consultation?", "5 Core Services"]
      };
    }

    // 6. Resource Q4 & Consultation: How do I schedule a consultation?
    if (q.includes('schedule') || q.includes('consultation') || q.includes('book') || q.includes('appointment') || q.includes('how do i schedule') || q.includes('talk to') || q.includes('contact') || q.includes('phone') || q.includes('email')) {
      return {
        text: "📅 Scheduling a Consultation:\n\nSimply complete our contact form or book a consultation — we provide a free initial security architecture assessment with our Technical Lead & Founder Ravi Makwana.\n\n• Response SLA: Within 2 hours guaranteed\n• Email: info@breachbarriersecurity.com\n• Phone: +91 63554 96696\n• No obligation, 100% confidential security review.",
        link: { text: "Book Free Security Consultation ↗", path: "/contact" },
        quickActions: ["5 Core Services", "What industries do you serve?", "Do you provide 24×7 monitoring?"]
      };
    }

    // 7. 5 Core Services Overview
    if (q.includes('5 core') || q.includes('services') || q.includes('what do you do') || q.includes('offerings') || q.includes('capabilities') || q.includes('categories')) {
      return {
        text: "BreachBarrier Security delivers 5 Core Services across 2 Strategic Categories:\n\n🛡️ CATEGORY 1: MANAGED DEFENSE (Protect & Respond)\n1. Security Operations Center (SOC) & MDR — True 24/7 Threat Hunting & Neutralization\n2. Incident Response (IR) & Digital Forensics — Your Digital Fire Department\n\n🎯 CATEGORY 2: OFFENSIVE SECURITY (Test & Prevent)\n3. Penetration Testing (VAPT) — Find Your Weak Spots Before Hackers Do\n4. Attack Surface Management (ASM) — See Your Business Through an Attacker's Eyes\n5. Vulnerability Management — Proactive Patching & Risk Prioritization",
        link: { text: "View All 5 Services Together ↗", path: "/services" },
        quickActions: ["SOC & MDR Details", "Penetration Testing", "How do I schedule a consultation?"]
      };
    }

    // 8. Incident Response & Forensics
    if (q.includes('incident') || q.includes('response') || q.includes('ir') || q.includes('forensic') || q.includes('ransomware') || q.includes('breach') || q.includes('emergency')) {
      return {
        text: "Incident Response (IR) & Digital Forensics\nTagline: \"Your Digital Fire Department.\"\n\nKey Deliverables:\n• Zero-Day Retainer Contracts with priority standby\n• Rapid Ransomware Containment halting lateral spread\n• Root-Cause Analysis & Court-Admissible Forensics\n• Post-Breach Clean Infrastructure Recovery Assistance\n\nWe act like an emergency hospital trauma unit to stop the bleeding first, followed by forensic detectives investigating patient zero.",
        link: { text: "View Incident Response Details ↗", path: "/services/incident-response" },
        quickActions: ["How do I schedule a consultation?", "5 Core Services"]
      };
    }

    // 9. Penetration Testing (VAPT)
    if (q.includes('pentest') || q.includes('pen-test') || q.includes('vapt') || q.includes('penetration') || q.includes('ethical hack') || q.includes('web test') || q.includes('mobile test')) {
      return {
        text: "Penetration Testing (VAPT)\nTagline: \"Find Your Weak Spots Before Hackers Do.\"\n\nKey Deliverables:\n• Web & Mobile Application Testing (OWASP Top 10)\n• Internal & External Network Penetration Testing\n• Actionable Technical Remediation Guides with code fixes\n• Board-Level Executive Risk Reports & Free Re-Testing Pass\n\nOur tests are performed 100% manually by certified ethical hackers to uncover real-world exploit chains that scanners miss.",
        link: { text: "Explore Penetration Testing ↗", path: "/services/pentesting" },
        quickActions: ["Schedule Pen-Test", "5 Core Services"]
      };
    }

    // 10. Attack Surface Management (ASM)
    if (q.includes('asm') || q.includes('attack surface') || q.includes('dark web') || q.includes('external asset') || q.includes('shadow it') || q.includes('credential leak')) {
      return {
        text: "Attack Surface Management (ASM)\nTagline: \"See Your Business Through an Attacker’s Eyes.\"\n\nKey Deliverables:\n• Continuous External Asset Discovery (domains, IPs, APIs)\n• Dark Web Credential Leak Surveillance for corporate accounts\n• Shadow IT & Orphaned Staging Environment Detection\n• Real-Time Exposure Alerts for opened ports & misconfigurations\n\nZero agents required — 100% non-intrusive external reconnaissance.",
        link: { text: "Explore Attack Surface Management ↗", path: "/services/asm" },
        quickActions: ["How do I schedule a consultation?", "5 Core Services"]
      };
    }

    // 11. Vulnerability Management
    if (q.includes('vuln') || q.includes('patch') || q.includes('cve') || q.includes('scanner') || q.includes('nessus') || q.includes('qualys')) {
      return {
        text: "Vulnerability Management\nTagline: \"Proactive Patching & Risk Prioritization.\"\n\nKey Deliverables:\n• Automated Internal & Multi-Cloud Scanning\n• Risk-Based Patch Prioritization targeting active exploits (CISA KEV)\n• Compliance-Driven Vulnerability Tracking\n\nWe prioritize fixing the vulnerable front doors that adversaries are actively exploiting, rather than wasting engineering hours on low-risk noise.",
        link: { text: "Explore Vulnerability Management ↗", path: "/services/vulnerability-management" },
        quickActions: ["How do I schedule a consultation?", "5 Core Services"]
      };
    }

    // 12. Founder Ravi Makwana
    if (q.includes('ravi') || q.includes('makwana') || q.includes('founder') || q.includes('advisor') || q.includes('architect') || q.includes('who is the founder') || q.includes('who is ravi')) {
      return {
        text: "Ravi Makwana\nFounder & Principal Security Advisor, BreachBarrier Architect\n\n\"Cybersecurity is not a checkbox. It is an ongoing battle of wits.\"\n\nRavi founded BreachBarrier Security to close the gap between superficial compliance promises and real-world adversary tactics. With years of hands-on offensive research, weaponized exploit analysis, and perimeter engineering, he leads BreachBarrier's proactive defense model.",
        link: { text: "Read Founder's Full Message ↗", path: "/about" },
        quickActions: ["How do I schedule a consultation?", "5 Core Services"]
      };
    }

    // 13. Pricing & In-House Cost Comparison
    if (q.includes('price') || q.includes('pricing') || q.includes('cost') || q.includes('rate') || q.includes('how much') || q.includes('sow') || q.includes('quote') || q.includes('in-house')) {
      return {
        text: "BreachBarrier Security provides custom Statements of Work (SOW) based on your organization's exact infrastructure size and endpoints.\n\n💰 Why BreachBarrier beats an In-House SOC:\n• Building an in-house SOC costs upwards of $300k+/year (hiring, training 5+ 24/7 engineers, SIEM licenses, turnover overhead).\n• BreachBarrier delivers turnkey Tier-3 24/7 SOC operations and offensive security with up to 80% cost savings.\n\nWe include a free initial architecture assessment with every inquiry.",
        link: { text: "Request Custom SOW & Pricing ↗", path: "/contact" },
        quickActions: ["How do I schedule a consultation?", "What industries do you serve?"]
      };
    }

    // 14. Smart Fallback with Guided Options
    return {
      text: "I want to make sure you get the exact information you need. Could you clarify your question, or pick from our most common topics below?\n\n• What industries do you serve?\n• Do you provide 24×7 monitoring?\n• Can you help us become ISO 27001 compliant?\n• How do I schedule a consultation?\n• Where is your team based, and who do you serve?\n• 5 Core Services & SOC/MDR Operations",
      quickActions: ["What industries do you serve?", "Do you provide 24×7 monitoring?", "Can you help with ISO 27001?", "How do I schedule a consultation?"]
    };
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    // Add User Message
    const userMsg = { 
      sender: 'user', 
      text: query, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Dynamic typing delay simulating fast AI processing
    setTimeout(() => {
      const botResponse = getBotResponse(query);
      const botMsg = { 
        sender: 'bot', 
        text: botResponse.text, 
        link: botResponse.link,
        quickActions: botResponse.quickActions,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleResetChat = () => {
    setMessages([
      {
        sender: 'bot',
        text: "👋 Chat reset. I am BreachBarrier Security AI Assistant. What would you like to explore?",
        time: 'LIVE',
        quickActions: [
          "What industries do you serve?",
          "Do you provide 24×7 monitoring?",
          "Can you help with ISO 27001?",
          "Where is your team based?",
          "How do I schedule a consultation?"
        ]
      }
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans max-w-[calc(100vw-32px)]">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#0F172A] dark:bg-[#13141F] text-white border-2 border-[#DC2626] dark:border-[#EF4444] rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer text-xs font-bold uppercase tracking-wider transition-all duration-200 group"
          aria-label="Open BreachBarrier Security AI Assistant"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] animate-pulse" />
          <div className="flex items-center gap-1.5">
            <Bot className="w-4 h-4 text-[#EF4444] group-hover:rotate-12 transition-transform" />
            <span>ASK SECURITY AI</span>
          </div>
        </motion.button>
      )}

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[calc(100vw-32px)] sm:w-[440px] max-w-[440px] h-[82vh] max-h-[580px] bg-white dark:bg-[#11121C] border border-slate-200 dark:border-[#27293D] shadow-2xl rounded-2xl flex flex-col justify-between overflow-hidden backdrop-blur-xl"
          >
            
            {/* Header */}
            <div className="p-3.5 bg-[#0F172A] dark:bg-[#161826] text-white border-b border-slate-200 dark:border-[#27293D] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-red-950/80 border border-red-800/60 flex items-center justify-center text-[#EF4444]">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-tight uppercase flex items-center gap-1.5">
                    <span>BREACHBARRIER SECURITY AI</span>
                    <span className="text-[10px] text-[#EF4444] font-mono font-bold bg-red-950/60 px-1.5 py-0.2 rounded">v2.4</span>
                  </h4>
                  <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>24/7 Security Operations Telemetry</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  aria-label="Reset conversation"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 cursor-pointer transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  aria-label="Close chat"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3.5 bg-slate-50/60 dark:bg-[#0C0D15]">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-1.5`}
                >
                  <div
                    className={`p-3.5 max-w-[88%] text-xs leading-relaxed rounded-2xl shadow-xs transition-all ${
                      msg.sender === 'user'
                        ? 'bg-[#DC2626] dark:bg-[#EF4444] text-white dark:text-black font-medium rounded-br-xs'
                        : 'bg-white dark:bg-[#181A28] border border-slate-200/90 dark:border-[#27293D] text-[#0F172A] dark:text-[#E2E8F0] rounded-bl-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line leading-relaxed font-sans">{msg.text}</p>

                    {/* Optional Embedded Action Link */}
                    {msg.link && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <Link
                          to={msg.link.path}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#DC2626] dark:text-[#EF4444] hover:underline"
                        >
                          <span>{msg.link.text}</span>
                        </Link>
                      </div>
                    )}

                    <span className={`text-[9px] block mt-1 text-right font-mono ${msg.sender === 'user' ? 'opacity-80' : 'text-slate-400 dark:text-slate-500'}`}>
                      {msg.time}
                    </span>
                  </div>

                  {/* Contextual Quick Actions directly below bot message */}
                  {msg.quickActions && msg.quickActions.length > 0 && idx === messages.length - 1 && !isTyping && (
                    <div className="flex flex-wrap gap-1.5 pt-1 pl-1 max-w-[95%]">
                      {msg.quickActions.map((action, aIdx) => (
                        <button
                          key={aIdx}
                          onClick={() => handleSend(action)}
                          className="cursor-target text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white dark:bg-[#181A28] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#DC2626] dark:hover:border-[#EF4444] hover:text-[#DC2626] dark:hover:text-[#EF4444] transition-all shadow-2xs"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="p-3 bg-white dark:bg-[#181A28] border border-slate-200 dark:border-[#27293D] rounded-2xl text-xs text-slate-500 dark:text-slate-400 inline-flex items-center gap-2 shadow-xs rounded-bl-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] dark:bg-[#EF4444] animate-ping" />
                  <span className="font-mono text-[11px]">Correlating telemetry...</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompt Carousel/Chips at Bottom */}
            <div className="px-3 py-2 bg-white dark:bg-[#12131F] border-t border-slate-100 dark:border-slate-800/80 flex gap-1.5 overflow-x-auto no-scrollbar shrink-0">
              {quickPrompts.map((prompt, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => handleSend(prompt)}
                  className="cursor-target px-2.5 py-1 bg-slate-100/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-[10px] font-bold text-slate-700 dark:text-slate-300 rounded-lg hover:border-[#DC2626] dark:hover:border-[#EF4444] hover:text-[#DC2626] dark:hover:text-[#EF4444] shrink-0 whitespace-nowrap transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-[#10111A] border-t border-slate-200 dark:border-[#27293D] flex items-center gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask about SOC, VAPT, IR, pricing..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-3.5 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-[#181A28] text-[#0F172A] dark:text-white text-xs focus:outline-none focus:border-[#DC2626] dark:focus:border-[#EF4444] focus:bg-white dark:focus:bg-[#1A1C2C] transition-all font-sans"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputMessage.trim()}
                aria-label="Send message"
                className={`p-2.5 rounded-xl transition-all shadow-xs ${
                  inputMessage.trim()
                    ? 'bg-[#DC2626] hover:bg-[#B91C1C] dark:bg-[#EF4444] dark:hover:bg-[#DC2626] text-white dark:text-black cursor-pointer'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
