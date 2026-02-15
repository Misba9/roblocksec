import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { ALL_SERVICES } from '../constants';
import Button from '../components/ui/Button';

const ServicesPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div>
      <PageHero 
        title="Our Services"
        subtitle="A comprehensive suite of cybersecurity services designed to protect your organization from every angle."
      />
      <div className="py-20">
        <motion.div 
          className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {ALL_SERVICES.map(service => (
            <motion.div key={service.slug} variants={itemVariants} className="h-full">
              <div className="bg-brand-navy p-8 rounded-lg glowing-border h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="w-10 h-10 text-brand-cyan" />
                  <h3 className="text-2xl font-bold font-display text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 flex-grow mb-6">{service.description}</p>
                <Button href={`/services/${service.slug}`} variant="outline">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
