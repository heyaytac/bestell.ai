import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, CheckCircle } from 'lucide-react';

interface Order {
  id: string;
  items: string[];
  status: 'new' | 'preparing' | 'ready';
  priority: boolean;
  timestamp: Date;
}

export function KitchenDisplay() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const demoOrders: Order[] = [
      {
        id: '1234',
        items: ['2x Margherita', '1x Salat Caesar'],
        status: 'new',
        priority: true,
        timestamp: new Date()
      },
      {
        id: '1235',
        items: ['1x Pasta Carbonara', '2x Tiramisu'],
        status: 'preparing',
        priority: false,
        timestamp: new Date()
      },
      {
        id: '1236',
        items: ['3x Pizza Prosciutto', '1x Bruschetta'],
        status: 'ready',
        priority: false,
        timestamp: new Date()
      }
    ];

    setOrders(demoOrders);
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-8">Küchen-Display System</h3>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-3 gap-6">
          {['new', 'preparing', 'ready'].map((status) => (
            <div key={status} className="space-y-4">
              <h4 className="font-semibold text-lg capitalize mb-4">
                {status === 'new' ? 'Neue Bestellungen' : 
                 status === 'preparing' ? 'In Zubereitung' : 
                 'Fertig zur Abholung'}
              </h4>
              {orders
                .filter(order => order.status === status)
                .map(order => (
                  <div 
                    key={order.id}
                    className={`
                      p-4 rounded-lg border-l-4
                      ${order.priority ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-gray-50'}
                    `}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">#{order.id}</span>
                      {order.priority && (
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                      )}
                    </div>
                    <ul className="space-y-1 mb-3">
                      {order.items.map((item, index) => (
                        <li key={index} className="text-sm">{item}</li>
                      ))}
                    </ul>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(order.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}