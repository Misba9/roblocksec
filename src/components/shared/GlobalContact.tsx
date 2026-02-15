import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const GlobalContact: React.FC = () => {
  return (
    <section className="py-20 bg-brand-navy/70 light:bg-light-card border-t border-b border-brand-cyan/20 light:border-light-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white light:text-light-text">
          Ready to Fortify Your Defenses?
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-300 light:text-gray-600 text-lg">
          Don't wait for a breach to happen. Partner with Roblocksec today and stay ahead of cyber threats. Let's build a more secure future for your organization.
        </p>
        <Button href="/contact" variant="primary" className="mt-8 text-xl">
          Get a Free Security Assessment
        </Button>
      </motion.div>
    </section>
  );
};

export default GlobalContact;
