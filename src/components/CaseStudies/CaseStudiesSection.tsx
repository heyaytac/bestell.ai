import React from 'react';
import { CaseStudyCard } from './CaseStudyCard';

const caseStudies = [
  {
    name: 'Pizzeria Milano',
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Umsatzsteigerung', value: '45%' },
      { label: 'Personalkosten reduziert', value: '30%' },
      { label: 'Bestellungen/Tag', value: '+120' }
    ],
    quote: "Die KI-gestützte Bestellannahme hat unseren Betrieb revolutioniert. Wir können uns jetzt voll auf die Zubereitung konzentrieren.",
    author: "Marco Rossi, Inhaber"
  },
  {
    name: 'Sushi House',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Bestellfehler reduziert', value: '95%' },
      { label: 'Kundenzufriedenheit', value: '98%' },
      { label: 'Effizienzsteigerung', value: '60%' }
    ],
    quote: "Selbst bei komplexen Sushi-Bestellungen macht die KI keine Fehler. Unsere Kunden sind begeistert.",
    author: "Lisa Chen, Geschäftsführerin"
  },
  {
    name: 'Gasthaus zur Post',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Mehr Bestellungen', value: '75%' },
      { label: 'Wartezeit reduziert', value: '40%' },
      { label: 'Umsatz/Monat', value: '+€15k' }
    ],
    quote: "Die KI spricht sogar unseren lokalen Dialekt. Das kommt bei den Gästen super an!",
    author: "Hans Weber, Inhaber"
  }
];

export function CaseStudiesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Erfolgsgeschichten</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Sehen Sie, wie andere Restaurants mit unserer KI-Lösung ihren Erfolg steigern konnten.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}