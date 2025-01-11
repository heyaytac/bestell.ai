import React from 'react';
import { Utensils, Clock, Phone, Bot } from 'lucide-react';
import { Button } from './Button';

interface RestaurantSceneProps {
  onAuthClick: () => void;
}

export function RestaurantScene({ onAuthClick }: RestaurantSceneProps) {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 relative min-h-[400px]">
            <div className="absolute inset-0 w-full h-full">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl" />
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                  {/* Restaurant Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <div className="p-2 bg-green-100 rounded-full">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm text-gray-600">Verfügbarkeit</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <div className="p-2 bg-green-100 rounded-full">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">100%</div>
                        <div className="text-sm text-gray-600">Annahmequote</div>
                      </div>
                    </div>
                  </div>

                  {/* Sample Order */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Bestellannahme</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600">Kunde: "Eine große Pizza Margherita, bitte."</p>
                      <p className="text-green-600">KI: "Gerne! Eine große Margherita für 12,90€. Möchten Sie noch etwas dazu?"</p>
                      <p className="text-gray-600">Kunde: "Ja, einen gemischten Salat."</p>
                      <p className="text-green-600">KI: "Perfekt! Das macht zusammen 19,40€. Die Bestellung ist in etwa 30 Minuten fertig."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Revolutionieren Sie Ihr Restaurant mit KI-gestützter Bestellannahme
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Steigern Sie Ihren Umsatz und optimieren Sie Ihre Abläufe mit unserem intelligenten Bestellsystem. 
              Testen Sie es jetzt 30 Tage lang kostenlos und überzeugen Sie sich selbst.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="px-10 py-4 text-xl font-bold shadow-lg hover:shadow-xl"
              onClick={onAuthClick}
            >
              Kostenlos testen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}