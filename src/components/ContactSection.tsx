import React from 'react';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <section className="py-20 px-6 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Kontaktieren Sie uns</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Haben Sie Fragen? Unser Team steht Ihnen gerne zur Verfügung.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}