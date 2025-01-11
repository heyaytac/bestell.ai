import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}

export function FeatureCard({ icon: Icon, title, description, highlight }: FeatureCardProps) {
  return (
    <div className={`
      bg-white rounded-xl p-8 shadow-sm
      ${highlight ? 'ring-2 ring-green-500' : ''}
    `}>
      <div className={`
        text-green-500 mb-6
        ${highlight ? 'animate-pulse' : ''}
      `}>
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}