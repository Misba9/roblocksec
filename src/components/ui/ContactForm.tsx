import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { cn } from '../../lib/utils';

const ContactForm: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const inputClasses = "w-full form-input border rounded-md px-4 py-3 focus:outline-none focus:ring-2 transition-all";

  return (
    <motion.form
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 light:text-gray-700 mb-2">Full Name</label>
        <input type="text" id="name" className={inputClasses} placeholder="John Doe" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 light:text-gray-700 mb-2">Email Address</label>
        <input type="email" id="email" className={inputClasses} placeholder="you@company.com" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <label htmlFor="organization" className="block text-sm font-medium text-gray-300 light:text-gray-700 mb-2">Organization</label>
        <input type="text" id="organization" className={inputClasses} placeholder="Your Company, Inc." />
      </motion.div>
      <motion.div variants={itemVariants}>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 light:text-gray-700 mb-2">Message</label>
        <textarea id="message" rows={5} className={inputClasses} placeholder="How can we help secure your organization?"></textarea>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Button type="submit" variant="primary" className="w-full text-lg">Send Message</Button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
