import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { ShieldQuestion, BrainCircuit, CheckSquare, FileText, BarChart } from 'lucide-react';
import { FAQ_DATA } from '../../../constants';

const RiskManagementPage: React.FC = () => {
    const pageTitle = "Cybersecurity Risk Management";
    const pageDescription = "Identify, assess, and mitigate cybersecurity risks across your organization with a structured risk management program that protects your most critical assets.";

    const sections = [
        {
            title: "Threat Assessment Methods",
            icon: BrainCircuit,
            content: <p>We conduct comprehensive risk assessments using industry-standard methodologies like NIST 800-30. This involves identifying critical assets, evaluating threats and vulnerabilities, and determining the potential impact of a breach.</p>
        },
        {
            title: "Risk Mitigation Plans",
            icon: ShieldQuestion,
            content: <p>Based on the assessment, we help you develop a practical risk treatment plan. This involves deciding whether to mitigate, transfer (e.g., via insurance), accept, or avoid each identified risk, ensuring resources are focused where they matter most.</p>
        },
        {
            title: "Risk Register & Reporting",
            icon: FileText,
            content: <p>We assist in creating and maintaining a central risk register to track all identified risks, their owners, and their treatment status. We also develop clear reporting templates to communicate risk posture to leadership and the board.</p>
        },
        {
            title: "Quantitative vs. Qualitative",
            icon: BarChart,
            content: <p>We can perform both qualitative (high, medium, low) and quantitative risk analysis, which assigns a financial value to risk. This helps in justifying security investments and making data-driven decisions.</p>
        },
        {
            title: "Benefits",
            icon: CheckSquare,
            content: <p>Proactively reduce the likelihood and impact of security incidents, optimize security spending by focusing on the highest risks, meet compliance requirements, and build a more resilient organization.</p>
        },
    ];

    return (
        <ServiceSubPageLayout
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            heroTitle="Cybersecurity Risk Management"
            heroSubtitle="Making Informed Decisions to Protect Your Business"
            sections={sections}
            faqData={FAQ_DATA['grc-services']}
            ctaText="Assess Your Risk"
            serviceName="Cybersecurity Risk Management"
        />
    );
};

export default RiskManagementPage;
