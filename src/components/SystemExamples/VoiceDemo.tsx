import React, { useState } from 'react';
import { Mic, Bot, Play, Pause } from 'lucide-react';

export function VoiceDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentExample, setCurrentExample] = useState(0);

  const examples = [
    {
      customer: "Ich hätte gerne eine große Pizza Margherita und einen gemischten Salat.",
      ai: "Gerne! Eine große Pizza Margherita für 12,90€ und einen gemischten Salat für 6,50€. Möchten Sie noch Extras zur Pizza oder einen Dressing-Wunsch für den Salat?"
    },
    {
      customer: "Haben Sie auch glutenfreie Optionen?",
      ai: "Ja, wir können alle unsere Pizzen mit glutenfreiem Teig zubereiten. Der Aufpreis beträgt 2,50€. Möchten Sie die Margherita glutenfrei?"
    },
    {
      customer: "Wie lange dauert die Lieferung heute?",
      ai: "Aktuell beträgt unsere Lieferzeit etwa 35-40 Minuten. Für Ihre PLZ 10115 liefern wir kostenlos ab einem Bestellwert von 15€."
    }
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-8">KI-Sprachassistent Demo</h3>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h4 className="font-semibold">Menü-trainierte KI</h4>
            <p className="text-sm text-gray-600">Hören Sie Beispiel-Dialoge</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            {examples.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentExample(index)}
                className={`px-4 py-2 rounded-full text-sm ${
                  currentExample === index
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Dialog {index + 1}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mic className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-800">{examples[currentExample].customer}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1 p-4 bg-green-50 rounded-lg">
                <p className="text-gray-800">{examples[currentExample].ai}</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Beispiel anhören
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}