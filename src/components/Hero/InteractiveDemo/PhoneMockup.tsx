import React, { useState, useEffect } from 'react';
import { ChatBubble } from './ChatBubble';
import { VoiceWave } from './VoiceWave';

const conversation = [
  { type: 'ai' as const, message: "Willkommen bei Pizza Palace! Was darf ich Ihnen bringen?" },
  { type: 'user' as const, message: "Eine große Pizza Margherita, bitte." },
  { type: 'ai' as const, message: "Gerne! Eine große Margherita für 12,90€. Möchten Sie noch etwas dazu?" },
  { type: 'user' as const, message: "Ja, einen gemischten Salat bitte." },
  { type: 'ai' as const, message: "Perfekt! Ich füge einen gemischten Salat für 6,50€ hinzu. Ihre Gesamtsumme beträgt 19,40€." }
];

export function PhoneMockup() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setVisibleMessages(prev => {
        if (prev >= conversation.length) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) {
      const timeout = setTimeout(() => {
        setIsPlaying(true);
        setVisibleMessages(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isPlaying]);

  return (
    <div className="relative max-w-[300px] mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-4 border-8 border-gray-100">
        <div className="absolute top-7 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-100 rounded-full" />
        
        <div className="mt-8 h-[400px] bg-gray-50 rounded-2xl p-4 overflow-hidden">
          <div className="space-y-4">
            {conversation.map((msg, index) => (
              <ChatBubble
                key={index}
                type={msg.type}
                message={msg.message}
                isVisible={index < visibleMessages}
              />
            ))}
            {isPlaying && visibleMessages < conversation.length && (
              <div className="flex justify-start">
                <VoiceWave />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}