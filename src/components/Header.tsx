import React, { useState } from 'react';
import { Utensils, Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onAuthClick: () => void;
}

export function Header({ onAuthClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="relative flex items-center justify-between h-[70px] md:h-[80px] px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Utensils className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
          <span className="text-xl md:text-2xl font-bold">bestell.ai</span>
        </div>

        {/* Mobile Call Button */}
        <a 
          href="tel:+4930123456789" 
          className="md:hidden flex items-center justify-center w-10 h-10 bg-green-100 rounded-full"
        >
          <Phone className="w-5 h-5 text-green-600" />
        </a>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-3 -mr-3 touch-manipulation"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 py-2">Funktionen</a>
          <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 py-2">Preise</a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 py-2">Kontakt</a>
          <Button 
            variant="primary" 
            size="md" 
            className="px-6 py-3 min-w-[120px]"
            onClick={onAuthClick}
          >
            Jetzt starten
          </Button>
        </nav>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 md:hidden animate-fade-in">
            <nav className="flex flex-col gap-2">
              <a 
                href="#features" 
                className="text-sm text-gray-600 hover:text-gray-900 py-3 px-2 active:bg-gray-50 rounded-lg touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Funktionen
              </a>
              <a 
                href="#pricing" 
                className="text-sm text-gray-600 hover:text-gray-900 py-3 px-2 active:bg-gray-50 rounded-lg touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Preise
              </a>
              <a 
                href="#contact" 
                className="text-sm text-gray-600 hover:text-gray-900 py-3 px-2 active:bg-gray-50 rounded-lg touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>
              <Button 
                variant="primary" 
                size="md"
                className="w-full mt-2 py-3"
                onClick={() => {
                  setIsMenuOpen(false);
                  onAuthClick();
                }}
              >
                Jetzt starten
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}