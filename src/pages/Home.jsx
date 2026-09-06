import React from 'react';
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
