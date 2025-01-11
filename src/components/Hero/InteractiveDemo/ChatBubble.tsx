import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatBubbleProps {
  message: string;
  type: 'ai' | 'user';
  isVisible: boolean;
}

export function ChatBubble({ message, type, isVisible }: ChatBubbleProps) {
  const isAI = type === 'ai';
  
  return (
    <div
      className={`
        flex items-start gap-3 transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      <div className={`
        w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
        ${isAI ? 'bg-green-100' : 'bg-gray-100'}
      `}>
        {isAI ? (
          <Bot className="w-4 h-4 text-green-600" />
        ) : (
          <User className="w-4 h-4 text-gray-600" />
        )}
      </div>
      <div className={`
        py-2 px-4 rounded-lg max-w-[80%]
        ${isAI ? 'bg-green-50' : 'bg-gray-50'}
      `}>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}