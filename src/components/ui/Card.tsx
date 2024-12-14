import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-200 transition-shadow duration-200 hover:shadow-xl ${className}`}>
      {children}
    </div>
  );
}