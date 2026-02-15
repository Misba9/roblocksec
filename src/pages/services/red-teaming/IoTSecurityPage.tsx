import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { BrainCircuit, CheckSquare, Code, FileText, Bot, ShieldQuestion } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const IoTSecurityPage: React.FC = () => {
  const pageTitle = "IoT Security Testing";
  const pageDescription = "Assess and secure your embedded devices, firmware, and communication protocols against threats unique to the Internet of Things ecosystem.";

  const sections = [
    {
      title: "Overview",
      icon: Bot,
      content: <p>Our IoT security testing service evaluates the entire ecosystem of your connected devices, including the hardware, firmware, mobile application, and cloud APIs. We identify vulnerabilities that could lead to device compromise, data breaches, or physical safety risks.</p>
    },
    {
      title: "Common Vulnerabilities",
      icon: ShieldQuestion,
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Weak, Guessable, or Hardcoded Passwords</li>
          <li>Insecure Network Services</li>
          <li>Insecure Ecosystem Interfaces</li>
          <li>Lack of Secure Update Mechanism</li>
          <li>Insecure Data Transfer and Storage</li>
        </ul>
      )
    },
    {
      title: "Testing Methods",
      icon: BrainCircuit,
      content: <p>Our methodology covers hardware analysis (e.g., UART, JTAG), firmware reverse engineering, radio communication analysis (e.g., BLE, Zigbee), and testing of the supporting mobile and web applications.</p>
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      content: <p>We use a specialized toolkit including hardware debugging tools, software-defined radios (SDR), firmware analysis platforms like Binwalk, and network traffic analysis tools to uncover deep-seated vulnerabilities.</p>
    },
    {
      title: "Benefits",
      icon: CheckSquare,
      content: <p>Ensure the safety and privacy of your users, protect your intellectual property, prevent large-scale device hijacking (botnets), and build a trusted and resilient IoT product.</p>
    },
    {
      title: "Deliverables",
      icon: FileText,
      content: <p>You'll receive a detailed report covering all components of the IoT ecosystem, with clear risk ratings and actionable recommendations for both hardware and software fixes.</p>
    }
  ];

  return (
    <ServiceSubPageLayout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      heroTitle="IoT Security"
      heroSubtitle="Securing the Connected World, One Device at a Time"
      sections={sections}
      faqData={FAQ_DATA['red-teaming']}
      ctaText="Request an IoT Security Report"
      serviceName="IoT Security"
    />
  );
};

export default IoTSecurityPage;
