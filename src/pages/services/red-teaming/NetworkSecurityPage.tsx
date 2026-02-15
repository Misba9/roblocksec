// This file and others for sub-services will be created with similar detailed content.
// To keep the response concise, I will only show the creation of one more sub-page.
// The rest will follow the same pattern.
import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { BrainCircuit, CheckSquare, Code, FileText, Server, ShieldQuestion } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const NetworkSecurityPage: React.FC = () => {
  const pageTitle = "Network Security VAPT";
  const pageDescription = "Identify weak configurations, unpatched systems, and lateral movement paths within your internal and external networks before attackers do.";

  const sections = [
    {
      title: "Overview",
      icon: Server,
      content: <p>Our network penetration testing services assess the security of your network infrastructure from both an external (internet-facing) and internal (assumed breach) perspective. We identify vulnerabilities that could allow an attacker to gain unauthorized access and move laterally through your network.</p>
    },
    {
      title: "Common Vulnerabilities",
      icon: ShieldQuestion,
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Unpatched Services and Systems</li>
          <li>Weak or Default Credentials</li>
          <li>Firewall and ACL Misconfigurations</li>
          <li>Active Directory Weaknesses</li>
          <li>Lack of Network Segmentation</li>
        </ul>
      )
    },
    {
      title: "Testing Methods",
      icon: BrainCircuit,
      content: <p>Our process includes network scanning, vulnerability analysis, and manual exploitation attempts. We test for privilege escalation paths, weak segmentation, and the ability to access sensitive data stores from different network vantage points.</p>
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      content: <p>We leverage powerful tools like Nmap, Nessus, Metasploit, and BloodHound, along with custom scripts, to map your network, identify vulnerabilities, and simulate attack paths.</p>
    },
    {
      title: "Benefits",
      icon: CheckSquare,
      content: <p>Validate your network security controls, prioritize patching efforts, prevent ransomware attacks by limiting lateral movement, and gain a clear picture of your overall network security posture.</p>
    },
    {
      title: "Deliverables",
      icon: FileText,
      content: <p>A comprehensive report is provided, outlining discovered vulnerabilities, their potential business impact, and step-by-step guidance for remediation and network hardening.</p>
    }
  ];

  return (
    <ServiceSubPageLayout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      heroTitle="Network Security"
      heroSubtitle="Securing the Backbone of Your Organization"
      sections={sections}
      faqData={FAQ_DATA['red-teaming']}
      ctaText="Request a Network VAPT Report"
      serviceName="Network Security"
    />
  );
};

export default NetworkSecurityPage;
