import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  glass = true,
  onClick
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      className={clsx(
        'rounded-xl p-6 transition-all duration-300',
        glass ? 'glass-card' : 'bg-white dark:bg-slate-800 shadow-lg',
        hover ? 'glass-card-hover cursor-pointer' : '',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;
