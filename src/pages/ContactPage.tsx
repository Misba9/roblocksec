import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import ContactForm from '../components/ui/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHero 
        title="Contact Us"
        subtitle="Let’s Secure Your Organization. Get in Touch Now."
      />
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">Contact Information</h2>
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-brand-cyan mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Email</h3>
                  <a href="mailto:contact@roblocksec.dev" className="text-gray-300 hover:text-brand-cyan transition">info@roblocksec.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-brand-cyan mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Phone</h3>
                  <p className="text-gray-300">+91 93470 12418</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-brand-cyan mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Headquarters</h3>
                  <p className="text-gray-300">Hyderabad, India</p>
                </div>
              </div>
              <div className="mt-8 rounded-lg overflow-hidden glowing-border">
                <img src="https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0d1117/00ffff?text=Map+Placeholder" alt="Map to headquarters" className="w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
