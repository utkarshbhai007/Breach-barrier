import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { AlertOctagon, Search, FileText, Database, ShieldCheck, RefreshCw } from 'lucide-react';

export default function ForensicsService() {
  return (
    <ServicePageLayout
      title="Incident Response & Forensics"
      tagline="CONTAIN THE DAMAGE, THEN FIND THE ROOT CAUSE"
      subtitle="When something happens, we stop the bleeding first, then investigate exactly how the breach occurred so it can't happen again."
      analogy="Hospital emergency room (stop the bleeding immediately) + Police detective (investigate the exact point of entry so it never happens again)."
      serviceCode="DFIR_04"
      features={[
        { icon: <AlertOctagon className="w-5 h-5" />, title: 'Emergency Breach Containment', desc: 'Rapid 24×7 dispatch to halt lateral movement, terminate malicious C2 channels, and preserve memory.' },
        { icon: <Search className="w-5 h-5" />, title: 'Root-Cause Investigation', desc: 'Deep forensic analysis of disk images, network packet captures, and authentication logs to trace patient zero.' },
        { icon: <Database className="w-5 h-5" />, title: 'Malware Analysis & Reverse Eng', desc: 'Static and dynamic reverse engineering of malicious payloads to uncover attacker intent and IOCs.' },
        { icon: <FileText className="w-5 h-5" />, title: 'Chain of Custody Evidence', desc: 'Court-admissible digital evidence preservation for insurance claims, regulatory filings, and legal disputes.' },
        { icon: <RefreshCw className="w-5 h-5" />, title: 'Recovery & Remediation Support', desc: 'Step-by-step guidance to safely restore systems from trusted backups and eliminate persistence mechanisms.' },
        { icon: <ShieldCheck className="w-5 h-5" />, title: 'Post-Incident Architecture Hardening', desc: 'Comprehensive post-mortem report and architectural recommendations to prevent repeat incidents.' },
      ]}
      benefits={[
        '24×7 emergency hotline with dedicated incident commander dispatch',
        'Legally admissible forensic evidence documentation for cyber insurance claims',
        'Definitive confirmation of what data was accessed, exfiltrated, or untouched',
        'Compliance breach notification assistance (within required 72-hour windows)',
      ]}
      tools={['CrowdStrike Falcon Forensics', 'Fortinet FortiAnalyzer', 'Volatility Memory Framework', 'Autopsy Digital Forensics', 'EnCase', 'Wireshark']}
      cta="ACTIVATE 24×7 EMERGENCY DFIR RETAINER"
    />
  );
}
