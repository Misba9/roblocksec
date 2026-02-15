import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { BrainCircuit, CheckSquare, Code, FileText, Globe, ShieldQuestion } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const WebAppSecurityPage: React.FC = () => {
  const pageTitle = "Web Application Security Testing";
  const pageDescription = "Identify and mitigate critical vulnerabilities in your web applications with our comprehensive VAPT services, covering everything from SQL injection to business logic flaws.";
  
  const sections = [
    {
      title: "Overview",
      icon: Globe,
      content: <p>Our web application security testing service provides a deep-dive analysis of your web-based platforms to identify security flaws. We simulate attacks that a malicious actor would use to compromise your data, ensuring your application is resilient against modern threats.</p>
    },
    {
      title: "Common Vulnerabilities",
      icon: ShieldQuestion,
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>SQL Injection & Cross-Site Scripting (XSS)</li>
          <li>Insecure Authentication & Session Management</li>
          <li>Broken Access Control</li>
          <li>Security Misconfigurations</li>
          <li>Business Logic Flaws</li>
        </ul>
      )
    },
    {
      title: "Testing Methods",
      icon: BrainCircuit,
      content: <p>We employ a hybrid approach combining automated scanning for broad coverage with in-depth manual testing to uncover complex vulnerabilities. Our methodology follows industry standards like the OWASP Top 10 and ASVS.</p>
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      content: <p>We utilize a combination of best-in-class commercial tools (like Burp Suite Pro, Invicti) and custom-developed scripts to perform comprehensive assessments tailored to your technology stack.</p>
    },
    {
      title: "Benefits",
      icon: CheckSquare,
      content: <p>Protect sensitive customer data, prevent financial loss, ensure regulatory compliance, and safeguard your brand's reputation by proactively identifying and fixing security weaknesses in your web applications.</p>
    },
    {
      title: "Deliverables",
      icon: FileText,
      content: <p>You will receive a comprehensive VAPT report detailing all findings, their risk levels, and clear, actionable recommendations for remediation, along with post-assessment support from our experts.</p>
    }
  ];

  return (
    <ServiceSubPageLayout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      heroTitle="Web Application Security"
      heroSubtitle="Fortifying Your Digital Storefront Against Cyber Threats"
      sections={sections}
      faqData={FAQ_DATA['red-teaming']}
      ctaText="Request a Web App VAPT Report"
      serviceName="Web Application Security"
    />
  );
};

export default WebAppSecurityPage;
