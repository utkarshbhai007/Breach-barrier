import React from 'react';
import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  return (
    <div className="bg-[#EAE7E0]">
      <PageHero
        tag="24×7 Active Engagement Desk"
        title="DIRECT"
        titleAccent="CONSULTATION."
        pillars={['India Global SOC', 'Free Architecture Audit', '24×7 Telemetry Desk']}
        description="Connect directly with our senior security architects to review your threat vectors, discuss SOC/MDR deployment, or scope an ethical hacking engagement."
      />
      <ContactForm />
    </div>
  );
}
