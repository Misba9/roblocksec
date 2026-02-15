import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { BrainCircuit, CheckSquare, Code, FileText, ShieldCheck, ShieldQuestion } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const BlockchainAuditPage: React.FC = () => {
  const pageTitle = "Smart Contract & Blockchain Audit";
  const pageDescription = "Ensure the integrity, security, and resilience of your decentralized applications and smart contracts with our meticulous blockchain auditing services.";

  const sections = [
    {
      title: "Overview",
      icon: ShieldCheck,
      content: <p>Our blockchain audit service provides a comprehensive security analysis of your smart contracts and underlying blockchain infrastructure. We identify design flaws, coding errors, and vulnerabilities that could lead to financial loss or exploitation of your decentralized application (dApp).</p>
    },
    {
      title: "Common Vulnerabilities",
      icon: ShieldQuestion,
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Reentrancy Attacks</li>
          <li>Integer Overflow/Underflow</li>
          <li>Unchecked External Calls</li>
          <li>Gas Limit and Loop Vulnerabilities</li>
          <li>Business Logic Flaws in Contract Design</li>
        </ul>
      )
    },
    {
      title: "Testing Methods",
      icon: BrainCircuit,
      content: <p>We combine automated analysis using tools like Slither and Mythril with rigorous manual code review. Our experts trace every possible execution path to identify subtle logic flaws that automated tools might miss.</p>
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      content: <p>We are proficient in auditing Solidity, Rust, and other smart contract languages. Our toolkit includes static and dynamic analysis tools, formal verification methods, and custom testing frameworks for various blockchain platforms like Ethereum, Solana, and Polkadot.</p>
    },
    {
      title: "Benefits",
      icon: CheckSquare,
      content: <p>Protect user funds and assets, build trust within the Web3 community, prevent costly exploits, and ensure your dApp functions as intended, providing a secure and reliable experience for your users.</p>
    },
    {
      title: "Deliverables",
      icon: FileText,
      content: <p>You will receive an in-depth audit report containing a list of all identified vulnerabilities, categorized by severity, along with code-level recommendations for mitigation and best practice suggestions for future development.</p>
    }
  ];

  return (
    <ServiceSubPageLayout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      heroTitle="Blockchain & Smart Contract Audit"
      heroSubtitle="Securing the Future of Decentralized Finance and Web3"
      sections={sections}
      faqData={FAQ_DATA['red-teaming']}
      ctaText="Request a Smart Contract Audit"
      serviceName="Blockchain Audit"
    />
  );
};

export default BlockchainAuditPage;
