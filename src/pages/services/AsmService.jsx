import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Globe, Eye, ShieldAlert, Radio, Search, Lock } from 'lucide-react';

export default function AsmService() {
  return (
    <ServicePageLayout
      title="Attack Surface Management (ASM)"
      tagline="SEE YOUR BUSINESS THROUGH AN ATTACKER’S EYES"
      subtitle="Continuous external asset discovery, dark web credential leak surveillance, and shadow IT detection — uncovering exposed digital blind spots before hackers can weaponize them."
      analogy="Flying an autonomous security drone continuously over your organization's perimeter to spot unlocked side windows, orphaned staging servers, or leaked corporate master keys before burglars do."
      serviceCode="ASM_04"
      features={[
        { 
          icon: <Globe className="w-5 h-5" />, 
          title: 'Continuous External Asset Discovery', 
          desc: 'Automated 24/7 scanning that maps every internet-facing domain, subdomain, IP address, API endpoint, and cloud workload belonging to your enterprise.' 
        },
        { 
          icon: <Eye className="w-5 h-5" />, 
          title: 'Dark Web Credential Leak Monitoring', 
          desc: 'Continuous surveillance of dark web forums, illicit paste sites, and cybercrime channels for leaked corporate credentials, employee passwords, and VIP accounts.' 
        },
        { 
          icon: <Search className="w-5 h-5" />, 
          title: 'Shadow IT & Orphaned Asset Detection', 
          desc: 'Instant detection of abandoned staging environments, unmonitored test servers, exposed S3 storage buckets, and rogue SaaS applications deployed without IT approval.' 
        },
        { 
          icon: <Radio className="w-5 h-5" />, 
          title: 'Real-Time Exposure Alerts', 
          desc: 'Immediate notifications and triage within minutes of newly opened vulnerable ports, exposed management panels (RDP/SSH), or misconfigured cloud access keys.' 
        },
        { 
          icon: <Lock className="w-5 h-5" />, 
          title: 'SSL/TLS & Domain Security Surveillance', 
          desc: 'Proactive detection of expiring certificates, DNS hijacking risks, sub-domain takeovers, and weak cryptographic configurations across all digital domains.' 
        },
        { 
          icon: <ShieldAlert className="w-5 h-5" />, 
          title: 'Actionable Threat Prioritization', 
          desc: 'Direct risk scoring based on active exploitability and weaponized adversary tactics, filtering out noise so engineering can fix critical exposures first.' 
        },
      ]}
      benefits={[
        'Continuous External Asset Discovery eliminating 100% of blind spots',
        'Dark Web Credential Leak Monitoring alerting you before credential stuffing attacks',
        'Shadow IT Detection preventing unauthorized employee software from causing breaches',
        'Real-time Exposure Alerts for critical vulnerabilities and exposed admin panels',
        'Zero-agent deployment — passive and non-intrusive external security surveillance',
      ]}
      tools={['Shodan Enterprise', 'Censys', 'OWASP Amass', 'SpiderFoot HX', 'ProjectDiscovery Chaos', 'Recorded Future Dark Web Feeds', 'SecurityTrails']}
      cta="AUDIT YOUR ATTACK SURFACE TODAY"
    />
  );
}
