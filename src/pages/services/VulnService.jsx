import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Scan, ShieldAlert, FileCheck, Layers, Filter, CheckCircle2 } from 'lucide-react';

export default function VulnService() {
  return (
    <ServicePageLayout
      title="Vulnerability Management"
      tagline="PROACTIVE PATCHING & RISK PRIORITIZATION"
      subtitle="Continuous automated internal and cloud scanning paired with threat intelligence to prioritize and patch the exact vulnerabilities that adversaries are actively exploiting."
      analogy="Continuously inspecting every lock and window in your high-rise, and immediately fixing the compromised front door lock that burglars are actively targeting before worrying about scuffed paint."
      serviceCode="VULN_05"
      features={[
        { 
          icon: <Scan className="w-5 h-5" />, 
          title: 'Automated Internal & Cloud Scanning', 
          desc: 'Scheduled automated vulnerability scans across on-premise servers, cloud workloads (AWS/Azure/GCP), containers, and corporate workstations.' 
        },
        { 
          icon: <Filter className="w-5 h-5" />, 
          title: 'Risk-Based Patch Prioritization', 
          desc: 'Filtering out theoretical noise to prioritize vulnerabilities with active weaponized exploits in the wild (CISA KEV), reducing developer patching fatigue.' 
        },
        { 
          icon: <FileCheck className="w-5 h-5" />, 
          title: 'Compliance-Driven Vulnerability Tracking', 
          desc: 'Continuous SLA monitoring and historical trend tracking to satisfy strict vulnerability remediation windows required by ISO 27001, SOC 2, HIPAA, and PCI-DSS.' 
        },
        { 
          icon: <Layers className="w-5 h-5" />, 
          title: 'DevOps & CI/CD Pipeline Integration', 
          desc: 'Automated software composition analysis (SCA) and container image scanning integrated directly into GitHub, GitLab, and CI/CD deployment pipelines.' 
        },
        { 
          icon: <ShieldAlert className="w-5 h-5" />, 
          title: 'Zero-Day Vulnerability Advisory', 
          desc: 'Emergency notifications and temporary mitigation workarounds issued within hours when high-impact zero-day CVEs threaten your tech stack.' 
        },
        { 
          icon: <CheckCircle2 className="w-5 h-5" />, 
          title: 'Patch Verification Auditing', 
          desc: 'Automatic post-patch rescan verification to confirm that updates were deployed properly and vulnerable libraries were completely expunged.' 
        },
      ]}
      benefits={[
        'Automated Internal & Cloud Scanning across all environments',
        'Risk-Based Patch Prioritization targeting weaponized CVEs first',
        'Compliance-driven Vulnerability Tracking for audit readiness',
        'Dramatic reduction in Mean Time to Remediate (MTTR) critical flaws',
        'Clear developer-ready patch guidance without scanner noise',
      ]}
      tools={['Nessus Professional', 'Qualys VMDR', 'Tenable.io', 'OpenVAS', 'Trivy Container Scanner', 'FortiGuard Threat Intel', 'CISA KEV Feeds']}
      cta="STREAMLINE VULNERABILITY MANAGEMENT"
    />
  );
}
