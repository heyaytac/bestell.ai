import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface FinalStepProps {
  onNext: () => void;
  data: any;
}

export function FinalStep({ onNext, data }: FinalStepProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4">
        Alles bereit!
      </h3>
      
      <p className="text-gray-600 mb-8">
        Ihr Restaurant ist jetzt eingerichtet und bereit, Bestellungen entgegenzunehmen.
        Die KI wurde mit Ihrem Menü trainiert und verwendet Ihre gewählte Stimme.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 className="font-medium mb-4">Nächste Schritte</h4>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-medium text-green-600">1</span>
            </div>
            <p className="text-sm text-gray-600 text-left">
              Testen Sie einen Anruf mit der kostenlosen Testnummer
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-medium text-green-600">2</span>
            </div>
            <p className="text-sm text-gray-600 text-left">
              Überprüfen Sie die Bestellübersicht im Dashboard
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-medium text-green-600">3</span>
            </div>
            <p className="text-sm text-gray-600 text-left">
              Richten Sie Ihre Zahlungsinformationen ein
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <a 
          href="/dashboard" 
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
        >
          Zum Dashboard
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
}