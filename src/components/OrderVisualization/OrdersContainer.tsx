import React, { useState, useEffect } from 'react';
import { OrderCard } from './OrderCard';
import { OrderCounter } from './OrderCounter';

interface Order {
  id: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  total: number;
  isPriority: boolean;
  timestamp: Date;
}

const menuItems = [
  { name: 'Margherita Pizza', price: 10 },
  { name: 'Pepperoni Pizza', price: 12 },
  { name: 'Quattro Formaggi', price: 14 },
  { name: 'Caesar Salad', price: 8 },
  { name: 'Greek Salad', price: 9 },
  { name: 'Garlic Bread', price: 4 },
  { name: 'Tiramisu', price: 6 },
  { name: 'Coca Cola', price: 3 },
  { name: 'Bruschetta', price: 7 }
];

function generateRandomOrder(): Order {
  const numItems = Math.floor(Math.random() * 3) + 1;
  const items = [];
  let total = 0;

  for (let i = 0; i < numItems; i++) {
    const item = menuItems[Math.floor(Math.random() * menuItems.length)];
    const quantity = Math.floor(Math.random() * 3) + 1;
    const price = item.price;
    total += price * quantity;
    items.push({ name: item.name, quantity, price });
  }

  return {
    id: Math.random().toString(36).substr(2, 9),
    items,
    total,
    isPriority: Math.random() > 0.7,
    timestamp: new Date()
  };
}

export function OrdersContainer() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders(prev => {
        if (prev.length >= 9) {
          clearInterval(interval);
          return prev;
        }
        return [...prev, generateRandomOrder()];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleComplete = (id: string) => {
    setOrders(prev => prev.filter(order => order.id !== id));
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bestellungen in Echtzeit verfolgen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sehen Sie, wie unser System Bestellungen automatisch verarbeitet und priorisiert. 
            Neue Bestellungen erscheinen alle 5 Sekunden in dieser Live-Demo.
          </p>
        </div>

        <div className="relative min-h-[600px] bg-gray-50 p-8 rounded-lg">
          <OrderCounter count={orders.length} />
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {orders.map(order => (
              <OrderCard
                key={order.id}
                order={order}
                onComplete={handleComplete}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}