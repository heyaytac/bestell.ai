import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

interface OrderCardProps {
  order: {
    id: string;
    items: Array<{ name: string; quantity: number; price: number }>;
    total: number;
    isPriority: boolean;
    timestamp: Date;
  };
  onComplete: (id: string) => void;
}

export function OrderCard({ order, onComplete }: OrderCardProps) {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md p-6 
        animate-slide-in transform transition-all duration-500
        ${order.isPriority ? 'border-l-4 border-orange-500' : ''}
      `}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-lg">Order #{order.id}</h3>
        {order.isPriority && (
          <span className="flex items-center text-orange-500">
            <AlertTriangle size={16} className="mr-1" />
            Priority
          </span>
        )}
      </div>
      
      <div className="space-y-2 mb-4">
        {order.items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.quantity}x {item.name}</span>
            <span>€{item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t">
        <div className="flex items-center text-gray-500">
          <Clock size={16} className="mr-1" />
          <span>{new Date(order.timestamp).toLocaleTimeString()}</span>
        </div>
        <span className="font-bold">Total: €{order.total.toFixed(2)}</span>
      </div>
    </div>
  );
}