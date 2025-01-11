import React from 'react';

interface ChatMessageProps {
  speaker: 'AI' | 'Customer';
  message: string;
  timestamp: string;
  isTyping?: boolean;
}

export function ChatMessage({ speaker, message, timestamp, isTyping }: ChatMessageProps) {
  const isAI = speaker === 'AI';
  
  return (
    <div className={`flex flex-col ${isAI ? 'items-start' : 'items-end'} mb-4`}>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs text-gray-500">{timestamp}</span>
        <span className={`text-sm font-medium ${isAI ? 'text-green-600' : 'text-gray-600'}`}>
          {speaker}
        </span>
      </div>
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          isAI
            ? 'bg-white border border-gray-100'
            : 'bg-gray-100'
        }`}
      >
        {isTyping ? (
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
          </div>
        ) : (
          <p className="text-gray-800">{message}</p>
        )}
      </div>
    </div>
  );
}