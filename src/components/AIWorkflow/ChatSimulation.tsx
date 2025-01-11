import React, { useState, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';

interface Message {
  speaker: 'AI' | 'Kunde';
  message: string;
  timestamp: string;
}

const conversation: Message[] = [
  {
    speaker: 'AI',
    message: 'Willkommen zurück bei bestell.ai! Ich sehe, Sie hatten letztes Mal eine Pizza Margherita bestellt. Möchten Sie diese wieder oder etwas Neues probieren?',
    timestamp: '14:02'
  },
  {
    speaker: 'Kunde',
    message: "Ja, eine Margherita wäre gut.",
    timestamp: '14:02'
  },
  {
    speaker: 'AI',
    message: 'Perfekt! Übrigens haben wir heute ein tolles Angebot: Bei jeder Pizza gibt es ein Dessert zum halben Preis. Unser hausgemachtes Tiramisu ist sehr beliebt. Möchten Sie das probieren?',
    timestamp: '14:02'
  },
  {
    speaker: 'Kunde',
    message: 'Das klingt gut, ja bitte!',
    timestamp: '14:03'
  },
  {
    speaker: 'AI',
    message: "Ausgezeichnet! Eine Pizza Margherita (12,90€) und ein Tiramisu zum Aktionspreis (3,50€ statt 7€). Möchten Sie auch wieder einen gemischten Salat dazu wie beim letzten Mal?",
    timestamp: '14:03'
  },
  {
    speaker: 'Kunde',
    message: 'Nein danke, nur die Pizza und das Tiramisu.',
    timestamp: '14:03'
  },
  {
    speaker: 'AI',
    message: 'Alles klar! Ihre Bestellung kommt auf 16,40€. Ich habe Ihre Vorlieben gespeichert und werde Sie beim nächsten Mal wieder an Ihre Lieblingsgerichte erinnern. Darf ich die Bestellung so aufnehmen?',
    timestamp: '14:03'
  }
];

export function ChatSimulation() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < conversation.length) {
      const message = conversation[currentIndex];
      
      if (message.speaker === 'AI') {
        setIsTyping(true);
        const typingTimeout = setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, message]);
          setCurrentIndex(prev => prev + 1);
        }, 1500);
        
        return () => clearTimeout(typingTimeout);
      } else {
        const messageTimeout = setTimeout(() => {
          setMessages(prev => [...prev, message]);
          setCurrentIndex(prev => prev + 1);
        }, 1000);
        
        return () => clearTimeout(messageTimeout);
      }
    }
  }, [currentIndex]);

  return (
    <div className="bg-gray-50 p-4 rounded-lg h-[400px] overflow-y-auto">
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          speaker={msg.speaker}
          message={msg.message}
          timestamp={msg.timestamp}
        />
      ))}
      {isTyping && (
        <ChatMessage
          speaker="AI"
          message=""
          timestamp={new Date().toLocaleTimeString('de-DE', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
          })}
          isTyping={true}
        />
      )}
    </div>
  );
}