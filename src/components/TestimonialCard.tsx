import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <Quote className="w-8 h-8 text-blue-600 mb-4" />
      <p className="text-gray-700 mb-4">{quote}</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-gray-600 text-sm">{role}, {company}</p>
      </div>
    </div>
  );
}