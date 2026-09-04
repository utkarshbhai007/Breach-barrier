import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Scan, ShieldCheck, Filter, FileText, AlertTriangle, Layers } from 'lucide-react';

export default function VulnService() {
  return (
    <ServicePageLayout
      title="Vulnerability Management"
      tagline="CONTINUOUS SCANNING, PRIORITIZED FIXES"
      subtitle="Continuous scanning finds new weak points as they appear, and we fix the ones real attackers are actually exploiting first — not just the longest list."
      analogy="Fixing the broken front door lock that real thieves are currently breaking into, before spending time polishing squeaky gate hinges."
      serviceCode="VULN_05"
      features={[
        { icon: <Scan className="w-5 h-5" />, title: 'Regular Vulnerability Scanning', desc: 'Automated weekly and monthly deep scans across all cloud infrastructure, IP ranges, and internal servers.' },
        { icon: <Filter className="w-5 h-5" />, title: 'Threat-Informed Risk Prioritization', desc: 'Filtering out theoretical noise to prioritize vulnerabilities with active exploits in the wild (CISA KEV).' },
        { icon: <Layers className="w-5 h-5" />, title: 'Patch Management Recommendations', desc: 'Actionable patch prioritization matrices and deployment roadmaps provided directly to your DevOps team.' },
        { icon: <AlertTriangle className="w-5 h-5" />, title: 'External Attack Surface Mapping', desc: 'Continuous discovery of rogue domains, exposed databases, orphaned subdomains, and shadow IT.' },
        { icon: <FileText className="w-5 h-5" />, title: 'Executive Security Reporting', desc: 'Clear trend analysis charts showing vulnerability dwell time reduction for executive leadership and board.' },
        { icon: <ShieldCheck className="w-5 h-5" />, title: 'Cloud Configuration Audits (CSPM)', desc: 'Automated detection of misconfigured AWS S3 buckets, permissive security groups, and IAM overprivilege.' },
      ]}
      benefits={[
        'Reduce mean time to remediate (MTTR) critical flaws from months to days',
        'Stop wasting developer hours on zero-impact low-risk vulnerabilities',
        'Continuous compliance proof for SOC 2, ISO 27001, and cyber insurance renewal',
        'Continuous visibility over newly discovered zero-day CVEs impacting your tech stack',
      ]}
      tools={['Nessus Professional', 'FortiGuard Threat Intel', 'Trend Micro', 'Qualys VMDR', 'OpenVAS', 'Tenable.io']}
      cta="STREAMLINE VULNERABILITY MANAGEMENT"
    />
  );
}
