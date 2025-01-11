import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, PhoneCall } from 'lucide-react';

const data = [
  { name: 'Mo', orders: 45 },
  { name: 'Di', orders: 52 },
  { name: 'Mi', orders: 48 },
  { name: 'Do', orders: 61 },
  { name: 'Fr', orders: 78 },
  { name: 'Sa', orders: 85 },
  { name: 'So', orders: 71 }
];

export function AnalyticsDemo() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8">Echtzeit-Analysen</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Tagesumsatz</p>
              <p className="text-2xl font-bold">€2,847</p>
            </div>
          </div>
          <p className="text-sm text-green-600">+12.5% vs. letzte Woche</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Neue Kunden</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </div>
          <p className="text-sm text-green-600">+8% vs. gestern</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <PhoneCall className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Angenommene Anrufe</p>
              <p className="text-2xl font-bold">100%</p>
            </div>
          </div>
          <p className="text-sm text-green-600">Alle Anrufe automatisch angenommen</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="font-semibold mb-6">Wöchentliche Bestellübersicht</h4>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="orders" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}