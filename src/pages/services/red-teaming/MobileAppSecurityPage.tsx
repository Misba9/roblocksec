import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { BrainCircuit, CheckSquare, Code, FileText, Smartphone, ShieldQuestion } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const MobileAppSecurityPage: React.FC = () => {
  const pageTitle = "Mobile Application Security Testing";
  const pageDescription = "Secure your iOS and Android applications against data leakage, insecure storage, and other mobile-specific threats with our expert mobile VAPT services.";

  const sections = [
    {
      title: "Overview",
      icon: Smartphone,
      content: <p>Our mobile VAPT service assesses your application's security posture on both client-side and server-side. We analyze the application binary, its data storage, and its communication channels to find and fix vulnerabilities that could lead to a compromise.</p>
    },
    {
      title: "Common Vulnerabilities",
      icon: ShieldQuestion,
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Insecure Data Storage</li>
          <li>Weak Server-Side Controls</li>
          <li>Insufficient Transport Layer Protection</li>
          <li>Unintended Data Leakage</li>
          <li>Reverse Engineering & Code Tampering</li>
        </ul>
      )
    },
    {
      title: "Testing Methods",
      icon: BrainCircuit,
      content: <p>We perform both static (SAST) and dynamic (DAST) analysis, including reverse engineering the app, intercepting traffic, and testing API endpoints. Our methodology is aligned with the OWASP Mobile Application Security Verification Standard (MASVS).</p>
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      content: <p>We use specialized tools like MobSF, Frida, and Objection, in addition to network analysis tools like Burp Suite Pro, to conduct a thorough investigation of your mobile application's security.</p>
    },
    {
      title: "Benefits",
      icon: CheckSquare,
      content: <p>Protect user privacy and sensitive data, meet app store security requirements, prevent fraudulent activity, and build trust with your mobile user base by ensuring your application is secure.</p>
    },
    {
      title: "Deliverables",
      icon: FileText,
      content: <p>You receive a detailed report with prioritized vulnerabilities, evidence of exploitation (PoCs), and practical remediation guidance specific to mobile development frameworks.</p>
    }
  ];

  return (
    <ServiceSubPageLayout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      heroTitle="Mobile Application Security"
      heroSubtitle="Securing Your Business and Users on Every Device"
      sections={sections}
      faqData={FAQ_DATA['red-teaming']}
      ctaText="Request a Mobile App VAPT Report"
      serviceName="Mobile Application Security"
    />
  );
};

export default MobileAppSecurityPage;
