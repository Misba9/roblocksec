import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
  return (
    <section className="py-20 md:py-32 text-center bg-brand-navy/30">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-display font-bold text-white uppercase"
        >
          <span className="text-glow">{title}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-body"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
