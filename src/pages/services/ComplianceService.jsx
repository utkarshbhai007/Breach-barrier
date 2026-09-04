import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { FileCheck, Shield, CheckCircle, FileText, Lock, Users } from 'lucide-react';

export default function ComplianceService() {
  return (
    <ServicePageLayout
      title="Compliance Readiness"
      tagline="ISO 27001 & SOC 2, AUDIT-READY YEAR-ROUND"
      subtitle="We keep you audit-ready year-round — documentation in order, regular self-checks, and gaps fixed immediately — instead of scrambling before an audit."
      analogy="Keeping vehicle registration and insurance papers neatly organized in the glovebox at all times for surprise police checkpoints."
      serviceCode="COMP_06"
      features={[
        { icon: <FileCheck className="w-5 h-5" />, title: 'ISO 27001 Preparation', desc: 'End-to-end ISMS framework buildout, Annex A controls alignment, and internal pre-audit assessment.' },
        { icon: <CheckCircle className="w-5 h-5" />, title: 'SOC 2 Type I & II Readiness', desc: 'Trust Services Criteria mapping (Security, Availability, Confidentiality) and automated evidence pipelines.' },
        { icon: <FileText className="w-5 h-5" />, title: 'Security Policy Development', desc: 'Custom tailored corporate security policies (Access Control, Incident Response, Data Classification).' },
        { icon: <Users className="w-5 h-5" />, title: 'Hands-On Audit Support', desc: 'Our security architects sit directly with external auditors to defend controls and present evidence.' },
        { icon: <Lock className="w-5 h-5" />, title: 'Vendor & Third-Party Risk Assessment', desc: 'Vendor risk questionnaires, supplier security audits, and third-party data processing reviews.' },
        { icon: <Shield className="w-5 h-5" />, title: 'Continuous Evidence Syncing', desc: 'Automated integration with compliance automation platforms for 24/7 continuous audit readiness.' },
      ]}
      benefits={[
        'Pass SOC 2 & ISO 27001 audits on the first attempt with zero non-conformities',
        'Close enterprise sales deals faster by proving enterprise security posture',
        'Eliminate weeks of frantic spreadsheet scrambling before auditor meetings',
        'Continuous compliance alignment with Canadian PIPEDA and global privacy standards',
      ]}
      tools={['Vanta', 'Drata', 'Secureframe', 'Microsoft Purview', 'Sprinto', 'OneTrust']}
      cta="GET AUDIT READY WITH BREACHBARRIER"
    />
  );
}
