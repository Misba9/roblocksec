import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHero from '../../components/ui/PageHero';
import { FAQ_DATA } from '../../constants';
import FAQ from '../../components/shared/FAQ';
import Button from '../../components/ui/Button';
import { GraduationCap, Users, BookOpen, CheckSquare } from 'lucide-react';

const TrainingPage: React.FC = () => {
  const pageTitle = "Cybersecurity Training & Awareness";
  const pageDescription = "Empower your team with hands-on cybersecurity training, from corporate awareness programs to individual certification courses and advanced labs.";

  const offerings = [
    {
      icon: Users,
      title: 'Corporate Cybersecurity Training',
      description: 'Customized training programs for your organization. We offer everything from secure coding workshops for developers to incident response drills for your IT team and phishing awareness for all employees.'
    },
    {
      icon: GraduationCap,
      title: 'Individual Certification Courses',
      description: 'Advance your career with our expert-led certification courses. We provide in-depth training for aspiring VAPT professionals, SOC Analysts, GRC specialists, and more, preparing you for industry-recognized exams.'
    },
    {
      icon: BookOpen,
      title: 'Awareness Programs for Employees',
      description: 'Your employees are your first line of defense. Our engaging and interactive awareness programs teach your entire workforce how to spot and report threats like phishing and social engineering, building a strong security culture.'
    },
    {
      icon: CheckSquare,
      title: 'Hands-on Labs and Simulations',
      description: 'Theory is not enough. Our state-of-the-art cyber range provides a safe, realistic environment for your team to practice their skills in hands-on labs, capture-the-flag (CTF) events, and full-scale breach simulations.'
    }
  ];

  return (
    <div>
      <Helmet>
        <title>{pageTitle} | Roblocksec</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <PageHero title="Training & Awareness" subtitle="Empowering Your Team to Be Your Strongest Defense" />
      
      <div className="py-20 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-white light:text-light-text mb-4">Our Training Offerings</h2>
            <p className="text-gray-300 light:text-gray-600 text-lg">
                We believe that a well-trained team is a fundamental pillar of any robust security strategy. Our programs are designed to be practical, engaging, and directly applicable to real-world challenges.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card-bg p-8 rounded-lg glowing-border"
                >
                    <div className="flex items-start gap-6">
                        <offering.icon className="w-12 h-12 text-brand-cyan light:text-brand-blue flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold font-display text-white light:text-light-text mb-2">{offering.title}</h3>
                            <p className="text-gray-400 light:text-gray-600 mb-4">{offering.description}</p>
                            <Button href="/contact" variant="outline">Enroll Now</Button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
      
      <FAQ items={FAQ_DATA['training']} />
    </div>
  );
};

export default TrainingPage;
