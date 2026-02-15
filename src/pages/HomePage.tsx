import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { useTypewriter } from '../hooks/useTypewriter';
import { ALL_SERVICES, STATS } from '../constants';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  const typedTagline = useTypewriter("Defend. Detect. Secure.", 100);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const servicesPreview = ALL_SERVICES.slice(0, 4);

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Roblocksec | Advanced Cybersecurity Solutions</title>
        <meta name="description" content="Roblocksec: Leading cybersecurity firm specializing in Red Teaming, Blue Teaming, GRC, and Cybersecurity Product Development. Defend. Detect. Secure." />
        <link rel="canonical" href="https://roblocksec.dualite.dev" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4">
        <div className="z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mb-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white light:text-light-text uppercase tracking-wider">
              <span className="animate-glow light:text-brand-blue light:animate-none">{typedTagline}</span>
              <span className="text-brand-cyan light:text-brand-blue animate-pulse-fast">_</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 light:text-gray-600 font-body mb-8"
          >
            Advanced Cybersecurity for the Modern World.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" variant="primary" className="text-lg">
              Get a Free Security Assessment <ArrowRight className="ml-2" />
            </Button>
            <Button href="/services" variant="outline" className="text-lg">
              Explore Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 page-bg">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-white light:text-light-text">Our Core Services</h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-400 light:text-gray-600">We provide a comprehensive suite of services to secure your digital ecosystem.</p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {servicesPreview.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <div className="card-bg p-8 rounded-lg glowing-border h-full flex flex-col text-center items-center">
                  <service.icon className="w-16 h-16 text-brand-cyan light:text-brand-blue mb-4" />
                  <h3 className="text-xl font-bold font-display text-white light:text-light-text mb-2">{service.title}</h3>
                  <p className="text-gray-400 light:text-gray-600 flex-grow">{service.description}</p>
                  <Button href={`/services/${service.slug}`} variant="outline" className="mt-6">Learn More</Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-cyan light:text-brand-blue">
                  <AnimatedCounter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </h3>
                <p className="text-gray-400 light:text-gray-500 mt-2 font-body uppercase tracking-widest text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
