import React from 'react';
import { Check, Bot, MenuSquare } from 'lucide-react';
import { Button } from './Button';

interface PricingSectionProps {
  onAuthClick: () => void;
}

export function PricingSection({ onAuthClick }: PricingSectionProps) {
  return (
    <section className="py-20 px-6" id="pricing">
      <h2 className="text-4xl font-bold text-center mb-16">Einfache, transparente Preise</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`
              bg-white rounded-xl p-8 shadow-sm flex flex-col
              ${plan.popular ? 'ring-2 ring-green-500' : ''}
            `}
          >
            {plan.popular && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm w-fit">
                Beliebteste Wahl
              </span>
            )}
            <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
            <p className="mt-4">
              <span className="text-4xl font-bold">€{plan.price}</span>
              <span className="text-gray-600">/Monat</span>
            </p>
            <ul className="mt-6 space-y-4 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className={
                    plan.highlightFeatures?.includes(feature) 
                      ? 'font-semibold text-green-700' 
                      : ''
                  }>
                    {feature}
                    {plan.highlightFeatures?.includes(feature) && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        {feature.includes('Stimme') ? <Bot className="w-3 h-3 mr-1" /> : <MenuSquare className="w-3 h-3 mr-1" />}
                        Exklusiv
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <Button 
              variant={plan.popular ? 'primary' : 'secondary'}
              className="w-full py-4 text-lg font-semibold mt-8"
              onClick={onAuthClick}
            >
              Jetzt starten
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

const plans = [
  {
    name: 'Starter',
    price: '49',
    features: [
      'KI-Sprachassistent',
      'Bestellannahme 24/7',
      'Basis-Menüintegration',
      'E-Mail Support',
      'Bestellhistorie',
      'Grundlegende Analysen'
    ]
  },
  {
    name: 'Professional',
    price: '99',
    popular: true,
    features: [
      'KI-Sprachassistent',
      'Bestellannahme 24/7',
      'Vollständiges Menü-Training',
      'Eigene KI-Stimme',
      'Prioritäts-Support',
      'Erweiterte Analysen',
      'Individuelle Integrationen',
      'Mehrsprachige Unterstützung'
    ],
    highlightFeatures: [
      'Eigene KI-Stimme',
      'Vollständiges Menü-Training'
    ]
  },
  {
    name: 'Enterprise',
    price: '199',
    features: [
      'KI-Sprachassistent',
      'Bestellannahme 24/7',
      'Vollständiges Menü-Training',
      'Mehrere KI-Stimmen',
      'Persönlicher Account Manager',
      'Premium Support',
      'Individuelle Entwicklung',
      'SLA-Garantie',
      'Multi-Standort Support'
    ],
    highlightFeatures: [
      'Mehrere KI-Stimmen',
      'Vollständiges Menü-Training'
    ]
  }
];