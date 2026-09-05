import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Eye, Bell, BarChart3, FileText, Zap, Shield } from 'lucide-react';

export default function SocService() {
  return (
    <ServicePageLayout
      title="Security Operations Center (SOC)"
      tagline="24×7 MONITORING AND REAL-TIME THREAT DETECTION"
      subtitle="A dedicated team of security engineers monitors your systems around the clock, catching suspicious activity early — the way a smoke detector catches a spark before it becomes a fire."
      analogy="Without a SOC, your business is like a mall with cameras installed but nobody watching the screens."
      serviceCode="SOC_01"
      features={[
        { icon: <Eye className="w-5 h-5" />, title: '24×7 Continuous Monitoring', desc: 'Round-the-clock surveillance across all endpoints, cloud workloads (AWS/Azure), and network perimeters.' },
        { icon: <Bell className="w-5 h-5" />, title: 'Threat Detection & Analysis', desc: 'Real-time alert correlation that filters out false alarms and isolates high-severity indicators of compromise.' },
        { icon: <BarChart3 className="w-5 h-5" />, title: 'Security Event Monitoring', desc: 'Centralized SIEM log aggregation that unifies all telemetry streams into a single pane of glass.' },
        { icon: <Zap className="w-5 h-5" />, title: 'Rapid Triage Escalation', desc: 'Context-rich incident tickets with clear remediation steps dispatched instantly to your engineering team.' },
        { icon: <FileText className="w-5 h-5" />, title: 'Executive Reporting', desc: 'Weekly & monthly security posture reports covering threat trends, risk scores, and improvement roadmaps.' },
        { icon: <Shield className="w-5 h-5" />, title: 'Threat Intelligence Feeds', desc: 'Continuous integration of global threat intel feeds keeping detection rules armed against zero-day exploits.' },
      ]}
      benefits={[
        'Eliminate the overhead of hiring 5+ full-time in-house SOC analysts',
        'Enterprise SIEM deployment included with zero extra licensing headaches',
        'Up to 80% cost reduction vs. building an in-house security operations center',
        'True 24×7 coverage across Canadian and international time zones',
        'Dedicated senior security engineer assigned directly to your account',
        'Direct escalation and coordination via dedicated Slack/Teams channels',
      ]}
      tools={['Microsoft Sentinel', 'Elastic SIEM', 'Splunk Enterprise', 'CrowdStrike Falcon', 'PagerDuty', 'Slack & MS Teams Integration']}
      cta="READY TO ACTIVATE 24×7 SOC MONITORING?"
    />
  );
}
