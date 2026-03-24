import React from 'react';
import { motion } from 'framer-motion';
interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'medium' | 'large';
  className?: string;
  variant?: 'primary' | 'secondary';
}
export function CTAButton({
  children,
  onClick,
  size = 'medium',
  className = '',
  variant = 'primary'
}: CTAButtonProps) {
  const baseClasses =
  'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-xl';
  const sizeClasses =
  size === 'large' ?
  'px-10 py-5 text-lg md:text-xl' :
  'px-8 py-4 text-base md:text-lg';
  const variantClasses =
  variant === 'primary' ?
  'bg-gold-matte text-white hover:bg-gold-light' :
  'bg-white text-coffee-dark border border-taupe-light hover:border-gold-matte hover:text-gold-matte';
  return (
    <motion.button
      whileHover={{
        scale: 1.03
      }}
      whileTap={{
        scale: 0.98
      }}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
      
      {children}
    </motion.button>);

}