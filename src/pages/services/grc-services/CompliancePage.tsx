import React from 'react';
import ServiceSubPageLayout from '../../../components/layout/ServiceSubPageLayout';
import { Briefcase, CheckSquare, FileText } from 'lucide-react';
import { FAQ_DATA, COMPLIANCE_LOGOS } from '../../../constants';

const CompliancePage: React.FC = () => {
    const pageTitle = "Cybersecurity Compliance";
    const pageDescription = "Achieve and maintain compliance with key industry standards and regulations like ISO 27001, GDPR, HIPAA, and PCI DSS with our expert audit and advisory services.";

    const sections = [
        {
            title: "Key Compliance Standards",
            icon: Briefcase,
            content: (
                <div>
                    <p className="mb-4">We provide expert guidance and audit assistance for a wide range of regulatory frameworks, including:</p>
                    <div className="flex flex-wrap gap-4 items-center">
                        {COMPLIANCE_LOGOS.map(logo => (
                            <img key={logo.name} src={logo.image} alt={`${logo.name} Compliance`} className="h-10" />
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: "Audit Assistance",
            icon: FileText,
            content: <p>We act as your trusted partner during audits. We help you prepare evidence, answer auditor questions, and manage the entire audit process, from readiness assessment to final certification.</p>
        },
        {
            title: "Gap Analysis",
            icon: CheckSquare,
            content: <p>Our compliance journey begins with a thorough gap analysis. We compare your current security controls against the requirements of your target standard and provide a detailed roadmap to bridge any gaps.</p>
        },
    ];

    return (
        <ServiceSubPageLayout
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            heroTitle="Cybersecurity Compliance"
            heroSubtitle="Navigating the Complex Landscape of Regulations"
            sections={sections}
            faqData={FAQ_DATA['grc-services']}
            ctaText="Prepare for Your Audit"
            serviceName="Cybersecurity Compliance"
        />
    );
};

export default CompliancePage;
