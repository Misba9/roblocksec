import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';
// import ThemeToggle from '../ui/ThemeToggle';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "header-bg backdrop-blur-lg border-b border-brand-cyan/20 light:border-light-border" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <ShieldCheck className="h-8 w-8 text-brand-cyan" />
          <span className="text-2xl font-display font-bold text-white light:text-light-text">Roblocksec</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.key}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "text-gray-300 light:text-gray-600 hover:text-brand-cyan light:hover:text-brand-blue transition-colors duration-300 relative font-medium",
                  "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-brand-cyan light:after:bg-brand-blue after:transition-all after:duration-300",
                  isActive ? "text-brand-cyan light:text-brand-blue after:w-full" : "hover:after:w-full"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          {/* <ThemeToggle /> */}
          <Button href="/contact" variant="primary">Get a Quote</Button>
        </div>
        <div className="md:hidden flex items-center gap-4">
          {/* <ThemeToggle /> */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white light:text-light-text focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden card-bg absolute w-full border-b border-brand-cyan/20 light:border-light-border"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.key}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn("text-xl", isActive ? "text-brand-cyan light:text-brand-blue font-semibold" : "text-gray-300 light:text-light-text")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button href="/contact" variant="primary" onClick={() => setIsOpen(false)}>Get a Quote</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
