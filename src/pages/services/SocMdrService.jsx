import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Shield, Activity, Clock, Zap, BarChart3, Eye, Radio, Lock } from 'lucide-react';

export default function SocMdrService() {
  return (
    <ServicePageLayout
      title="Security Operations Center (SOC) & MDR"
      tagline="TRUE 24/7 THREAT HUNTING & NEUTRALIZATION"
      subtitle="A unified command center combining 24/7 continuous SIEM telemetry monitoring with automated Managed Detection & Response (MDR) to intercept and quarantine threats in seconds."
      analogy="A 24/7 high-tech command center monitoring every motion sensor and camera across your enterprise, backed by an armed rapid-response team that physically intercepts an intruder in seconds without waiting for permission."
      serviceCode="SOC_MDR_01"
      features={[
        { 
          icon: <Eye className="w-5 h-5" />, 
          title: '24/7/365 Network & Endpoint Monitoring', 
          desc: 'Round-the-clock telemetry ingestion and behavioral analysis across all workstations, servers, firewalls, and multi-cloud environments (AWS/Azure/GCP).' 
        },
        { 
          icon: <Clock className="w-5 h-5" />, 
          title: '15-Minute Critical Incident Response SLA', 
          desc: 'Contractually guaranteed 15-minute triage and containment SLA for P1 critical security incidents, backed by dedicated Tier-3 SOC engineers.' 
        },
        { 
          icon: <Zap className="w-5 h-5" />, 
          title: 'Automated Threat Containment (MDR)', 
          desc: 'Sub-second automated endpoint isolation, credential invalidation, and malicious process termination through integrated SOAR playbooks.' 
        },
        { 
          icon: <BarChart3 className="w-5 h-5" />, 
          title: 'Monthly Executive Security Dashboards', 
          desc: 'Comprehensive C-level risk posture reports, threat interception metrics, vulnerability dwell time trends, and strategic improvement roadmaps.' 
        },
        { 
          icon: <Activity className="w-5 h-5" />, 
          title: 'Proactive Human-Led Threat Hunting', 
          desc: 'Senior threat analysts continuously combing through logs and memory artifacts to uncover stealthy, fileless malware and advanced persistent threats (APTs).' 
        },
        { 
          icon: <Radio className="w-5 h-5" />, 
          title: 'Global Threat Intelligence Integration', 
          desc: 'Live correlation with global adversary telemetry feeds, zero-day CVE advisories, and industry-specific indicators of compromise (IOCs).' 
        },
      ]}
      benefits={[
        '24/7/365 Network & Endpoint Monitoring across all enterprise assets',
        '15-Minute Critical Incident Response SLA contractually guaranteed',
        'Automated Threat Containment (MDR) halting ransomware propagation in seconds',
        'Monthly Executive Security Dashboards tailored for Board and C-Suite audits',
        'Up to 80% lower cost compared to building and staffing an in-house 24/7 SOC team',
      ]}
      tools={['Microsoft Sentinel', 'CrowdStrike Falcon Complete', 'Splunk Cloud', 'Elastic Security', 'Wazuh Enterprise', 'Fortinet FortiSIEM', 'PagerDuty']}
      cta="ACTIVATE 24/7 SOC & MDR DEFENSE"
    />
  );
}
