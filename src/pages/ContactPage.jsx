import React from 'react';
import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHero
        tag="// 24×7 ACTIVE ENGAGEMENT DESK"
        title="DIRECT"
        titleAccent="CONSULTATION."
        pillars={['INDIA GLOBAL SOC', 'FREE ARCHITECTURE AUDIT', '24×7 TELEMETRY DESK']}
        description="Connect directly with our senior security architects to review your threat vectors, discuss SOC/MDR deployment, or scope an ethical hacking engagement."
      />
      <ContactForm />
    </div>
  );
}
