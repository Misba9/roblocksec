import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', href, className, ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-md transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark light:focus:ring-offset-light-bg inline-flex items-center justify-center gap-2";

  const variantClasses = {
    primary: "bg-brand-cyan text-brand-dark hover:bg-white light:bg-brand-blue light:text-white light:hover:bg-blue-700 hover:shadow-lg hover:shadow-brand-cyan/30 focus:ring-brand-cyan light:focus:ring-brand-blue",
    secondary: "bg-brand-blue text-white hover:bg-blue-500 focus:ring-brand-blue light:bg-gray-700 light:hover:bg-gray-900",
    outline: "bg-transparent border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 focus:ring-brand-cyan light:border-brand-blue light:text-brand-blue light:hover:bg-brand-blue/10 light:focus:ring-brand-blue",
  };

  const combinedClasses = cn(baseClasses, variantClasses[variant], className);

  const MotionComponent = href ? motion(Link) : motion.button;
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    ...(href ? { to: href } : {}),
  };

  return (
    <MotionComponent className={combinedClasses} {...motionProps} {...(href ? {} : props)}>
      {children}
    </MotionComponent>
  );
};

export default Button;
