import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import WhyNeedCybersecurity from '../components/WhyNeedCybersecurity';
import SelectedWork from '../components/SelectedWork';
import IndustriesSnapshot from '../components/IndustriesSnapshot';
import WhyChooseUsSnapshot from '../components/WhyChooseUsSnapshot';
import SecurityPostureChecker from '../components/SecurityPostureChecker';
import ThreatSimulator from '../components/ThreatSimulator';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="flex flex-col bg-[#EAE7E0] text-[#0F172A]">
      <SEO
        title="Breach Barrier Security | 24/7 Managed SOC, MDR & Cybersecurity"
        description="Breach Barrier Security (BreachBarrier) delivers enterprise-grade 24/7 Security Operations Center (SOC) & MDR, Penetration Testing (VAPT), Incident Response, and Attack Surface Management worldwide."
        keywords="Breach Barrier Security, Breach Barrier, BreachBarrier, Managed SOC, MDR Services, Penetration Testing, VAPT, Incident Response, Digital Forensics, Attack Surface Management, 24/7 SOC"
        canonicalPath="/"
      />
      <Hero />
      <WhyNeedCybersecurity />
      <SelectedWork />
      <IndustriesSnapshot />
      <WhyChooseUsSnapshot />
      <SecurityPostureChecker />
      <ThreatSimulator />
      <ContactForm />
    </div>
  );
}
