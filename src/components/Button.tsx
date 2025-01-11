import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:shadow-sm';
  
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 ring-2 ring-green-600 hover:ring-green-700 transform hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-white text-gray-800 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 active:bg-gray-100 transform hover:-translate-y-0.5 active:translate-y-0'
  };
  
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}