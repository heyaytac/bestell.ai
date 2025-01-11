import React, { useState } from 'react';
import { X, Users, Star, TrendingUp } from 'lucide-react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultView?: 'login' | 'register';
}

export function AuthModal({ isOpen, onClose, defaultView = 'register' }: AuthModalProps) {
  const [view, setView] = useState<'login' | 'register'>(defaultView);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">
            {view === 'login' ? 'Willkommen zurück!' : 'Jetzt registrieren'}
          </h2>
          <p className="text-gray-600">
            {view === 'login'
              ? 'Melden Sie sich an, um fortzufahren'
              : 'Erstellen Sie Ihr kostenloses Konto'}
          </p>
        </div>

        {/* Social Proof Section */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="flex justify-center mb-2">
                <Users className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-sm font-medium">10.000+</div>
              <div className="text-xs text-gray-600">Restaurants</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Star className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-sm font-medium">4.9/5</div>
              <div className="text-xs text-gray-600">Bewertung</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-sm font-medium">+30%</div>
              <div className="text-xs text-gray-600">Mehr Umsatz</div>
            </div>
          </div>
        </div>

        {view === 'login' ? <LoginForm /> : <RegisterForm />}

        <div className="text-center mt-6">
          <button
            onClick={() => setView(view === 'login' ? 'register' : 'login')}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            {view === 'login'
              ? 'Noch kein Konto? Jetzt registrieren'
              : 'Bereits registriert? Jetzt anmelden'}
          </button>
        </div>
      </div>
    </div>
  );
}