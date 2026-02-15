import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { BrainCircuit, CheckSquare, Code, FileText, ShieldQuestion } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const AIMLSecurityPage: React.FC = () => {
  const pageTitle = "AI/ML Security Assessment";
  const pageDescription = "Evaluate the robustness of your machine learning models against adversarial attacks, data poisoning, and model theft to ensure their integrity and reliability.";

  const sections = [
    {
      title: "Overview",
      icon: BrainCircuit,
      content: <p>As AI/ML models become critical business assets, they also become targets. Our AI/ML security assessment evaluates the entire machine learning lifecycle for vulnerabilities, from data ingestion to model deployment, ensuring your AI is secure and trustworthy.</p>
    },
    {
      title: "Common Vulnerabilities",
      icon: ShieldQuestion,
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Adversarial Attacks (Evasion, Poisoning)</li>
          <li>Model Inversion and Extraction</li>
          <li>Data Privacy and Confidentiality Breaches</li>
          <li>Insecure AI Supply Chain</li>
          <li>Denial of Service against ML systems</li>
        </ul>
      )
    },
    {
      title: "Testing Methods",
      icon: BrainCircuit,
      content: <p>We use cutting-edge techniques to test your models' resilience. This includes generating adversarial examples, attempting data poisoning, and running model extraction queries to simulate real-world threats against AI systems.</p>
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      content: <p>We leverage frameworks like Adversarial Robustness Toolbox (ART), Counterfit, and custom-developed testing harnesses to assess the security and robustness of models built with TensorFlow, PyTorch, and other popular ML libraries.</p>
    },
    {
      title: "Benefits",
      icon: CheckSquare,
      content: <p>Protect your AI investments, ensure model reliability and fairness, prevent manipulation of AI-driven decisions, and maintain a competitive edge by building trustworthy AI systems.</p>
    },
    {
      title: "Deliverables",
      icon: FileText,
      content: <p>The final report provides a detailed analysis of your model's security posture, including its susceptibility to various attacks, and offers concrete recommendations for hardening your models and MLOps pipeline.</p>
    }
  ];

  return (
    <ServiceSubPageLayout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      heroTitle="AI/ML Security"
      heroSubtitle="Ensuring the Trust and Integrity of Your Intelligent Systems"
      sections={sections}
      faqData={FAQ_DATA['red-teaming']}
      ctaText="Request an AI/ML Security Report"
      serviceName="AI/ML Security"
    />
  );
};

export default AIMLSecurityPage;
