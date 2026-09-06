import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, Terminal, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "👋 Hello! I am BreachBarrier Security Cyber Assistant. Ask me anything about our 5 core services: 24/7 SOC & MDR, Incident Response, Penetration Testing, Attack Surface Management, Vulnerability Management, or Founder Ravi Makwana's vision!",
      time: 'LIVE'
    }
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const quickPrompts = [
    "What are BreachBarrier's 5 core services?",
    "Difference between SOC and MDR?",
    "How does ASM discover external assets?",
    "Who is Founder Ravi Makwana?"
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    // Add User Message
    const userMsg = { sender: 'user', text: query, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Generate Automated Bot Response
    setTimeout(() => {
      let responseText = "BreachBarrier Security delivers enterprise-grade cybersecurity across 2 categories and 5 core services: SOC & MDR, Incident Response & Forensics, Penetration Testing (VAPT), Attack Surface Management (ASM), and Vulnerability Management.";

      const q = query.toLowerCase();
      if (q.includes('5 core') || q.includes('service') || q.includes('category') || q.includes('offer')) {
        responseText = "BreachBarrier Security delivers 5 core services across 2 categories:\n\n• Category 1: Managed Defense (Protect & Respond):\n  1. Security Operations Center (SOC) & MDR\n  2. Incident Response (IR) & Digital Forensics\n\n• Category 2: Offensive Security (Test & Prevent):\n  3. Penetration Testing (VAPT)\n  4. Attack Surface Management (ASM)\n  5. Vulnerability Management";
      } else if (q.includes('soc') && q.includes('mdr')) {
        responseText = "As Founder Ravi Makwana explains: SOC is the 24/7 control room constantly watching the monitors across your enterprise. MDR is the specialized armed response force that catches intruders and quarantines threats in sub-seconds automatically.";
      } else if (q.includes('asm') || q.includes('attack surface') || q.includes('external asset')) {
        responseText = "Attack Surface Management (ASM) provides continuous external asset discovery, dark web credential leak surveillance, shadow IT detection, and real-time exposure alerts — showing your business through an attacker's eyes.";
      } else if (q.includes('ravi') || q.includes('founder') || q.includes('makwana') || q.includes('who is')) {
        responseText = "Ravi Makwana is the Founder & Principal Security Architect of BreachBarrier Security. He is a Certified Penetration Tester (CPTE), Network Administrator, ranked in the top 3% on TryHackMe, active HackTheBox CTF Player, and holds Ethical Hacking Essentials (EHE) certification.";
      } else if (q.includes('save') || q.includes('cost') || q.includes('price') || q.includes('pricing') || q.includes('in-house')) {
        responseText = "Building an in-house SOC requires hiring, training, and retaining 5+ dedicated security engineers around the clock plus licensing overhead. BreachBarrier Security delivers turnkey, enterprise-grade 24×7 protection with customized Statements of Work (SOW) tailored to your organization's exact infrastructure size at up to 80% lower cost.";
      } else if (q.includes('ir') || q.includes('incident') || q.includes('forensic')) {
        responseText = "Our Incident Response (IR) & Digital Forensics acts as your digital fire department: rapid zero-day retainer contracts, sub-minute ransomware containment, and court-admissible root-cause forensics.";
      }

      const botMsg = { sender: 'bot', text: responseText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-mono-code max-w-[calc(100vw-32px)]">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#0A0A0C] text-white border border-black shadow-[3px_3px_0px_0px_rgba(220,38,38,1)] cursor-pointer text-[11px] sm:text-xs font-bold uppercase tracking-wider"
        >
          <span className="w-2 h-2 rounded-full bg-[#E2F952] animate-pulse" />
          <span>&gt; ASK BREACHBARRIER SECURITY AI_</span>
        </motion.button>
      )}

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-[calc(100vw-32px)] sm:w-[420px] max-w-[420px] h-[75vh] max-h-[520px] bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between overflow-hidden"
          >
            
            {/* Header */}
            <div className="p-3.5 bg-[#0A0A0C] text-white border-b-2 border-black flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[#E2F952] font-black">&gt;</span>
                <div>
                  <h4 className="text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
                    <span>BREACHBARRIER_SECURITY_AI</span>
                    <span className="text-[10px] text-[#E2F952] font-normal">//V2</span>
                  </h4>
                  <div className="text-[9px] text-emerald-400 font-bold">
                    ● 24/7 SOC INGESTION READY
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 bg-white text-black border border-black hover:bg-[#E2F952] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-[#F4F4F6]">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`p-3 max-w-[88%] text-xs leading-relaxed border ${
                      msg.sender === 'user'
                        ? 'bg-[#DC2626] text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                        : 'bg-white border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-[9px] opacity-70 block mt-1 text-right">{msg.time}</span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="p-2.5 bg-white border border-black text-xs text-slate-500 inline-flex items-center gap-1 shadow-xs">
                  <span>ANALYZING TELEMETRY</span>
                  <span className="animate-pulse">...</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 bg-white border-t border-b border-slate-200 flex gap-2 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 bg-[#F4F4F6] border border-slate-300 text-[10px] font-bold text-black hover:border-black hover:bg-[#E2F952] shrink-0 whitespace-nowrap cursor-pointer transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white flex items-center gap-2">
              <input
                type="text"
                placeholder="ASK SOC TELEMETRY QUESTION..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-3 py-2 border border-black bg-[#F4F4F6] text-black text-xs font-mono-code focus:outline-none focus:bg-white"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 text-xs bg-[#DC2626] hover:bg-[#B91C1C] text-white border border-black cursor-pointer transition-colors shadow-xs"
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
