import React from 'react';

interface Metric {
  label: string;
  value: string;
}

interface CaseStudyCardProps {
  name: string;
  image: string;
  metrics: Metric[];
  quote: string;
  author: string;
}

export function CaseStudyCard({ name, image, metrics, quote, author }: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{name}</h3>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-green-600">{metric.value}</div>
              <div className="text-xs text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
        <blockquote className="text-gray-600 italic mb-4">"{quote}"</blockquote>
        <p className="text-sm text-gray-500">- {author}</p>
      </div>
    </div>
  );
}