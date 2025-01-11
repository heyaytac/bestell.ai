import React, { useState, lazy, Suspense } from 'react';
import { Button } from './Button';
import { Clock, DollarSign, Smile, Users, Building, Phone } from 'lucide-react';

const PhoneMockup = lazy(() => import('./Hero/InteractiveDemo/PhoneMockup').then(m => ({ default: m.PhoneMockup })));

interface HeroProps {
  onAuthClick: () => void;
}

export function Hero({ onAuthClick }: HeroProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      window.gtag?.('event', 'conversion', {
        'event_category': 'CTA',
        'event_label': 'Hero - Kostenlos testen'
      });
    } catch (e) {
      console.error('Analytics error:', e);
    }
    onAuthClick();
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-16 lg:py-32 px-4 lg:px-6 mt-[70px] md:mt-20">
      <div className="flex-1 w-full">
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
            <Users size={20} className="text-green-500" />
            <span className="text-sm font-medium text-gray-600">10.000+ Restaurants</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <Building size={20} className="text-blue-500" />
            <span className="text-sm font-medium text-gray-600">4.9/5 Bewertung</span>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center lg:text-left">
          Optimieren Sie Ihre Restaurant-Bestellungen
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 text-center lg:text-left">
          Verpassen Sie keine Bestellung - Lassen Sie unseren KI-Sprachassistenten Ihre Anrufe rund um die Uhr entgegennehmen.
        </p>

        {/* Mobile Call Button */}
        <a 
          href="tel:+4930123456789" 
          className="lg:hidden flex items-center justify-center gap-2 w-full py-3 mb-4 bg-green-100 text-green-700 rounded-lg touch-manipulation"
        >
          <Phone className="w-5 h-5" />
          <span>Jetzt anrufen für Demo</span>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
            <Clock className="w-8 h-8 text-green-500 shrink-0" />
            <div>
              <div className="text-xl font-bold">75%</div>
              <div className="text-sm text-gray-600">Weniger Zeit</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
            <DollarSign className="w-8 h-8 text-green-500 shrink-0" />
            <div>
              <div className="text-xl font-bold">30%</div>
              <div className="text-sm text-gray-600">Mehr Umsatz</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
            <Smile className="w-8 h-8 text-green-500 shrink-0" />
            <div>
              <div className="text-xl font-bold">95%</div>
              <div className="text-sm text-gray-600">Zufriedenheit</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto lg:mx-0">
          <Button 
            variant="primary" 
            size="lg" 
            type="submit" 
            className="w-full px-8 py-4 text-lg font-semibold whitespace-nowrap touch-manipulation"
          >
            Kostenlos testen
          </Button>
        </form>
        
        <div className="mt-4 space-y-2 text-center lg:text-left">
          <p className="text-sm text-gray-500">
            ✨ 30 Tage kostenlos testen • Keine Kreditkarte erforderlich
          </p>
          <p className="text-sm text-green-600 font-medium">
            Durchschnittlich 30% mehr Umsatz nach 3 Monaten
          </p>
        </div>
      </div>

      <div className="flex-1 w-full lg:w-auto">
        <Suspense fallback={<div className="h-[400px] bg-gray-100 rounded-lg animate-pulse" />}>
          <PhoneMockup />
        </Suspense>
      </div>
    </div>
  );
}