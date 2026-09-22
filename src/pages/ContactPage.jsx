import React from 'react';
import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <div className="bg-[#EAE7E0]">
      <SEO
        title="Contact Security Advisory | Breach Barrier Security"
        description="Schedule a 30-minute threat briefing or request an urgent cybersecurity assessment with the Breach Barrier Security team."
        keywords="Contact Breach Barrier Security, Book Threat Briefing, Emergency Cybersecurity Support, Ravi Makwana Contact, Breach Barrier"
        canonicalPath="/contact"
        breadcrumbs={[{ name: 'Contact', path: '/contact' }]}
      />
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
