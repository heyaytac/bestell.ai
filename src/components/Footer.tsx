import React from 'react';
import { Utensils, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Utensils className="w-6 h-6 text-green-500" />
              <span className="text-xl font-bold">bestell.ai</span>
            </div>
            <p className="text-gray-400">
              Revolutionieren Sie Ihr Restaurantgeschäft mit unserer KI-gestützten Bestelllösung.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Funktionen</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Preise</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Kontakt</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-white">Demo</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-500" />
                <a href="mailto:info@bestell.ai" className="text-gray-400 hover:text-white">
                  info@bestell.ai
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-green-500" />
                <a href="tel:+4930123456789" className="text-gray-400 hover:text-white">
                  +49 30 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-green-500" />
                <span className="text-gray-400">
                  Musterstraße 123<br />
                  10115 Berlin
                </span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Öffnungszeiten</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Mo - Fr: 9:00 - 18:00</li>
              <li>Sa: 10:00 - 14:00</li>
              <li>So: Geschlossen</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} bestell.ai - Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  );
}