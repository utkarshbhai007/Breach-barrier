import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { AlertOctagon, ShieldCheck, Search, RefreshCw, FileText, Database } from 'lucide-react';

export default function ForensicsService() {
  return (
    <ServicePageLayout
      title="Incident Response (IR) & Digital Forensics"
      tagline="YOUR DIGITAL FIRE DEPARTMENT"
      subtitle="When an incident strikes, our emergency team rushes in to extinguish the attack, contain ransomware immediately, and perform forensic root-cause analysis so you recover rapidly."
      analogy="Your emergency fire department arriving on scene in minutes to stop the flames and rescue the building, followed by lead forensic investigators uncovering exactly how the spark occurred."
      serviceCode="IR_DFIR_02"
      features={[
        { 
          icon: <ShieldCheck className="w-5 h-5" />, 
          title: 'Zero-Day Retainer Contracts', 
          desc: 'Guaranteed emergency response SLAs with zero ramp-up delays. Our forensic commanders are pre-authorized and on standby 24/7/365 to triage your environment.' 
        },
        { 
          icon: <AlertOctagon className="w-5 h-5" />, 
          title: 'Rapid Ransomware Containment', 
          desc: 'Sub-minute host isolation, C2 channel severing, and lateral propagation halts to prevent ransomware from encrypting critical backup shares or enterprise databases.' 
        },
        { 
          icon: <Search className="w-5 h-5" />, 
          title: 'Root-Cause Analysis & Forensics', 
          desc: 'Exhaustive forensic disk imaging, memory analysis, and log reconstruction to identify Patient Zero, assess data exposure, and preserve court-admissible evidence.' 
        },
        { 
          icon: <RefreshCw className="w-5 h-5" />, 
          title: 'Post-Breach Recovery Assistance', 
          desc: 'End-to-end guidance to safely rebuild compromised domains, restore systems from validated clean backups, and verify that attacker persistence has been purged.' 
        },
        { 
          icon: <Database className="w-5 h-5" />, 
          title: 'Malware Reverse Engineering', 
          desc: 'In-depth binary disassembly and sandbox analysis of attacker payloads to extract IOCs, command-and-control addresses, and adversary attribution.' 
        },
        { 
          icon: <FileText className="w-5 h-5" />, 
          title: 'Regulatory & Insurance Reports', 
          desc: 'Comprehensive post-incident documentation detailing breach scope, mitigating factors, and timelines needed for cyber insurance payouts and mandatory regulatory notifications.' 
        },
      ]}
      benefits={[
        'Zero-Day Retainer Contracts with guaranteed rapid response',
        'Rapid Ransomware Containment halting lateral spread immediately',
        'Root-Cause Analysis & Forensics pinpointing entry vectors',
        'Post-Breach Recovery Assistance ensuring clean infrastructure restoration',
        'Court-admissible digital forensic evidence documentation',
      ]}
      tools={['CrowdStrike Falcon Forensics', 'Volatility Memory Framework', 'Autopsy Digital Forensics', 'FTK Imager', 'Wireshark', 'EnCase', 'KAPE']}
      cta="ACTIVATE EMERGENCY IR RETAINER"
    />
  );
}
