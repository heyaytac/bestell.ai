import React from 'react';
import { Check, X } from 'lucide-react';

const features = [
  { name: 'KI-Sprachassistent', starter: true, professional: true, enterprise: true },
  { name: 'Bestellannahme 24/7', starter: true, professional: true, enterprise: true },
  { name: 'Basis-Menüintegration', starter: true, professional: true, enterprise: true },
  { name: 'E-Mail Support', starter: true, professional: true, enterprise: true },
  { name: 'Eigene KI-Stimme', starter: false, professional: true, enterprise: true },
  { name: 'Mehrere KI-Stimmen', starter: false, professional: false, enterprise: true },
  { name: 'Vollständiges Menü-Training', starter: false, professional: true, enterprise: true },
  { name: 'Prioritäts-Support', starter: false, professional: true, enterprise: true },
  { name: 'Individuelle Integrationen', starter: false, professional: true, enterprise: true },
  { name: 'Persönlicher Account Manager', starter: false, professional: false, enterprise: true },
  { name: 'SLA-Garantie', starter: false, professional: false, enterprise: true },
];

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left bg-gray-50"></th>
            <th className="p-4 text-center bg-gray-50">
              <div className="font-bold text-lg">Starter</div>
              <div className="text-green-600">€49/Monat</div>
            </th>
            <th className="p-4 text-center bg-green-50 border-x border-green-100">
              <div className="font-bold text-lg">Professional</div>
              <div className="text-green-600">€99/Monat</div>
            </th>
            <th className="p-4 text-center bg-gray-50">
              <div className="font-bold text-lg">Enterprise</div>
              <div className="text-green-600">€199/Monat</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="p-4">{feature.name}</td>
              <td className="p-4 text-center">
                {feature.starter ? (
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-gray-300 mx-auto" />
                )}
              </td>
              <td className="p-4 text-center border-x border-green-100 bg-green-50">
                {feature.professional ? (
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-gray-300 mx-auto" />
                )}
              </td>
              <td className="p-4 text-center">
                {feature.enterprise ? (
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-gray-300 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}