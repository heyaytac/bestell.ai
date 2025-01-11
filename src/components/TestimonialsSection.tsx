import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Das Bestellvisualisierungssystem hat die Art und Weise, wie wir unser geschäftiges Restaurant führen, komplett verändert. Ein echter Gamechanger!",
    author: "Maria Schmidt",
    role: "Restaurantbesitzerin",
    company: "La Casa Bella"
  },
  {
    quote: "Wir haben Bestellfehler um 95% reduziert und die Kundenzufriedenheit deutlich verbessert.",
    author: "Thomas Weber",
    role: "Betriebsleiter",
    company: "Asian Fusion"
  },
  {
    quote: "Die Echtzeit-Updates und das Prioritätsbestellsystem helfen uns, Stoßzeiten mühelos zu bewältigen.",
    author: "Sarah Müller",
    role: "Restaurantleiterin",
    company: "Urban Plates"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Was unsere Kunden sagen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
              <Quote className="w-8 h-8 text-green-500 mb-4" />
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}