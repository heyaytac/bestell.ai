import React, { useState } from 'react';
import { Button } from '../Button';
import { validateEmail } from './utils';

interface EmailFormProps {
  onSubmit: (email: string) => void;
}

export function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      onSubmit(email);
      setEmail('');
      setError('');
    } else {
      setError('Please enter a valid email');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-md">
      <div className="relative flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          placeholder="Enter your email"
          className={`w-full px-4 py-2 rounded-lg border ${
            error ? 'border-red-300' : 'border-gray-200'
          } focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none`}
        />
        {error && (
          <span className="absolute -bottom-5 left-0 text-xs text-red-500">
            {error}
          </span>
        )}
      </div>
      <Button variant="primary" type="submit" size="sm">
        Get Started
      </Button>
    </form>
  );
}