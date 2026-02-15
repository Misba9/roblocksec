import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-display font-bold text-white text-center"
      >
        Privacy & Terms
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 text-gray-300 max-w-4xl mx-auto space-y-6"
      >
        <h2 className="text-2xl font-bold font-display text-brand-cyan">Privacy Policy</h2>
        <p>Your privacy is important to us. It is Roblocksec's policy to respect your privacy regarding any information we may collect from you across our website.</p>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>

        <h2 className="text-2xl font-bold font-display text-brand-cyan mt-12">Terms of Service</h2>
        <p>By accessing the website at [Your Website URL], you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
        <p>The materials contained in this website are protected by applicable copyright and trademark law.</p>
      </motion.div>
    </div>
  );
};

export default PrivacyPage;
