import React from 'react';
import { Users } from 'lucide-react';

export function SocialProof() {
  return (
    <div className="flex items-center gap-1 text-sm text-gray-600">
      <Users size={14} className="text-green-500" />
      <span>Join 10,000+ restaurants</span>
    </div>
  );
}