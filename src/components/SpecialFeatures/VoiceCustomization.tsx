import React from 'react';
import { Mic, Bot, MenuSquare } from 'lucide-react';
import { Button } from '../Button';

export function VoiceCustomization() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full mb-6">
              <Bot className="w-5 h-5 mr-2" />
              Professional Feature
            </div>
            <h2 className="text-4xl font-bold mb-6">Ihre Stimme, Ihr KI-Assistent</h2>
            <p className="text-lg text-gray-600 mb-8">
              Mit unserem Professional-Plan können Sie dem KI-Assistenten Ihre eigene Stimme geben. 
              Bieten Sie Ihren Kunden ein persönliches und vertrautes Bestellerlebnis.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Mic className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Individuelle Stimmanpassung</h3>
                  <p className="text-gray-600">Nutzen Sie Ihre eigene Stimme oder die eines Mitarbeiters für den KI-Assistenten.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <MenuSquare className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Menü-Training</h3>
                  <p className="text-gray-600">KI wird speziell auf Ihre Speisekarte trainiert - perfekte Beratung und Bestellannahme garantiert.</p>
                </div>
              </div>
            </div>

            <Button 
              variant="primary" 
              onClick={scrollToPricing}
              className="w-full md:w-auto px-8 py-4 text-lg font-semibold"
            >
              Zum Professional Plan
            </Button>
            <p className="text-sm text-gray-500 mt-4">Jederzeit kündbar - Keine versteckten Kosten</p>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Trainierte KI</h4>
                    <p className="text-sm text-gray-600">Kennt Ihr komplettes Menü</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-sm text-gray-600 mb-2">Beispiel-Dialog:</p>
                  <p className="mb-2">"Kann ich die Pizza auch mit glutenfreiem Teig bestellen?"</p>
                  <p className="text-green-600">"Ja, wir bieten alle unsere Pizzen auch mit glutenfreiem Teig an. Der Aufpreis beträgt 2,50€."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}