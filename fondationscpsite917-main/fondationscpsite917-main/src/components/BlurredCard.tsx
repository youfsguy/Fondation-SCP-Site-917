
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface BlurredCardProps {
  children: React.ReactNode;
  className?: string;
  fadeIn?: boolean;
}

const BlurredCard: React.FC<BlurredCardProps> = ({ 
  children, 
  className = '',
  fadeIn = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (fadeIn && cardRef.current) {
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.classList.remove('opacity-0');
          cardRef.current.classList.add('opacity-100');
        }
      }, 100);
    }
  }, [fadeIn]);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        'glass-card p-6 transition-all duration-500',
        fadeIn ? 'opacity-0' : 'opacity-100',
        className
      )}
    >
      {children}
    </div>
  );
};

export default BlurredCard;
