import React from 'react';

export function VoiceWave() {
  return (
    <div className="flex items-center gap-1 py-2">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-1 bg-green-500 rounded-full animate-pulse"
          style={{
            height: `${8 + i * 4}px`,
            animationDelay: `${i * 0.15}s`
          }}
        />
      ))}
    </div>
  );
}