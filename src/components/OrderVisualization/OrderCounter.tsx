import React from 'react';
import { ListChecks } from 'lucide-react';

interface OrderCounterProps {
  count: number;
}

export function OrderCounter({ count }: OrderCounterProps) {
  return (
    <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-sm flex items-center">
      <ListChecks size={20} className="text-green-500 mr-2" />
      <span className="font-semibold">{count} Active Orders</span>
    </div>
  );
}