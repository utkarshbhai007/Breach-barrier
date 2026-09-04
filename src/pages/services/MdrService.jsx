import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Activity, ShieldAlert, Lock, Zap, Search, ShieldCheck } from 'lucide-react';

export default function MdrService() {
  return (
    <ServicePageLayout
      title="Managed Detection & Response (MDR)"
      tagline="WE DON'T JUST ALERT YOU, WE STOP THE ATTACK"
      subtitle="Beyond detection, our team actively responds: isolating affected systems, stopping attacker access, and hunting for hidden threats before they cause catastrophic damage."
      analogy="Beyond watching the CCTV, we deploy an armed rapid-response force to instantly lock the doors and isolate the intruder in sub-seconds."
      serviceCode="MDR_02"
      features={[
        { icon: <Activity className="w-5 h-5" />, title: 'Advanced Threat Detection', desc: 'Behavioral AI detection that spots sophisticated living-off-the-land techniques and ransomware execution.' },
        { icon: <Lock className="w-5 h-5" />, title: 'Rapid Incident Containment', desc: 'Instant automated and human-validated host isolation that severs compromised endpoints from your network.' },
        { icon: <Search className="w-5 h-5" />, title: 'Proactive Threat Hunting', desc: 'Intelligence-led hypothesis hunting through historical telemetry to uncover dormant adversaries.' },
        { icon: <ShieldAlert className="w-5 h-5" />, title: 'Malware & Ransomware Defense', desc: 'Active eradication of malicious payloads, encrypted process termination, and persistence cleanup.' },
        { icon: <Zap className="w-5 h-5" />, title: 'Automated SOAR Playbooks', desc: 'Sub-second API-driven containment triggers that lock down compromised accounts and revoke access tokens.' },
        { icon: <ShieldCheck className="w-5 h-5" />, title: 'Continuous Telemetry Analysis', desc: 'Deep endpoint telemetry correlation across process trees, network sockets, and registry keys.' },
      ]}
      benefits={[
        'Sub-15 minute mean time to contain active ransomware and intrusions',
        'Zero burden on internal IT teams during midnight security incidents',
        'Comprehensive root-cause post-containment forensic debriefs',
        'Direct coordination with company leadership during active events',
        'Continuous EDR sensor tuning to eliminate alert fatigue',
      ]}
      tools={['CrowdStrike Falcon Complete', 'Trend Micro Vision One', 'SentinelOne Singularity', 'Microsoft Defender for Endpoint', 'Cortex XDR']}
      cta="DEPLOY ARMED MDR DEFENSE TODAY"
    />
  );
}
