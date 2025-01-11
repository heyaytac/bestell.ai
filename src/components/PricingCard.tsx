import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

interface PricingCardProps {
  tier: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({ tier, price, features, popular }: PricingCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md p-8 ${popular ? 'ring-2 ring-blue-600' : ''}`}>
      {popular && (
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mt-4">{tier}</h3>
      <p className="mt-4">
        <span className="text-4xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-600">/month</span>
      </p>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="primary" className="w-full mt-8">
        Get Started
      </Button>
    </div>
  );
}