import React from 'react';
import { Phone, Bot, ClipboardCheck, MessageSquare, History, TrendingUp } from 'lucide-react';
import { WorkflowStep } from './WorkflowStep';
import { ChatSimulation } from './ChatSimulation';

export function AIWorkflowSection() {
  const steps = [
    {
      icon: Phone,
      title: "Kunde ruft an",
      description: "Wenn ein Kunde in Ihrem Restaurant anruft, antwortet unser KI-Sprachassistent sofort und stellt sicher, dass kein Anruf unbeantwortet bleibt."
    },
    {
      icon: History,
      title: "Personalisierte Begrüßung",
      description: "Die KI erkennt Stammkunden, erinnert sich an frühere Bestellungen und macht personalisierte Vorschläge basierend auf der Bestellhistorie."
    },
    {
      icon: Bot,
      title: "Intelligente Empfehlungen",
      description: "Während der Bestellung schlägt die KI passende Ergänzungen vor und informiert über aktuelle Angebote und Rabatte."
    },
    {
      icon: ClipboardCheck,
      title: "Bestellbestätigung",
      description: "Die KI bestätigt die Bestelldetails und den Gesamtpreis mit dem Kunden und gewährleistet so jedes Mal Genauigkeit."
    },
    {
      icon: TrendingUp,
      title: "Lernende Optimierung",
      description: "Das System lernt kontinuierlich aus den Kundeninteraktionen und verbessert seine Empfehlungen und Upselling-Strategien."
    },
    {
      icon: MessageSquare,
      title: "Sofortige Verarbeitung",
      description: "Bestellungen werden sofort an Ihr Küchendisplaysystem gesendet, mit Echtzeit-Updates und Benachrichtigungen."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            So funktioniert unser KI-Sprachassistent
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Erleben Sie nahtloses Bestellmanagement mit unserem KI-gesteuerten System
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <WorkflowStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                stepNumber={index + 1}
                highlight={index === 1 || index === 2}
              />
            ))}
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live-Demo-Simulation</span>
              </div>
              <ChatSimulation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}