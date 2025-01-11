import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: 'Wie schnell kann ich das System einrichten?',
    answer: 'Die Einrichtung dauert in der Regel nur 24 Stunden. Unser Team unterstützt Sie bei der Integration Ihres Menüs und der Anpassung der KI an Ihre spezifischen Anforderungen.'
  },
  {
    question: 'Was passiert bei komplexen Bestellungen oder Sonderwünschen?',
    answer: 'Unsere KI ist darauf trainiert, auch komplexe Bestellungen und Sonderwünsche zu verstehen. Bei ungewöhnlichen Anfragen kann sie gezielt nachfragen, um die Bestellung korrekt aufzunehmen.'
  },
  {
    question: 'Wie wird die Sprachqualität sichergestellt?',
    answer: 'Wir verwenden modernste KI-Technologie für natürliche Sprachverarbeitung. Die Stimme klingt menschlich und kann sogar an Ihren regionalen Dialekt angepasst werden.'
  },
  {
    question: 'Gibt es eine Mindestvertragslaufzeit?',
    answer: 'Nein, Sie können monatlich kündigen. Wir sind von unserem Service überzeugt und binden Sie nicht durch lange Verträge.'
  },
  {
    question: 'Wie werden die Bestelldaten gespeichert?',
    answer: 'Alle Daten werden DSGVO-konform in deutschen Rechenzentren gespeichert. Sie haben jederzeit Zugriff auf Ihre Bestellhistorie und Analysen.'
  }
];

export function FAQSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Häufig gestellte Fragen</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}