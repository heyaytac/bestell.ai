import React, { useState } from 'react';
import { Mic, Volume2, PlayCircle } from 'lucide-react';
import { Button } from '../../Button';

interface VoiceSetupProps {
  onNext: (data: any) => void;
  data: any;
}

export function VoiceSetup({ onNext, data }: VoiceSetupProps) {
  const [voiceSettings, setVoiceSettings] = useState({
    voice: data.voiceSettings?.voice || 'default',
    speed: data.voiceSettings?.speed || 1,
    pitch: data.voiceSettings?.pitch || 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ voiceSettings });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="font-medium mb-4">KI-Stimme auswählen</h3>
        <div className="grid grid-cols-2 gap-4">
          {['Anna', 'Thomas', 'Marie', 'Michael'].map(voice => (
            <button
              key={voice}
              type="button"
              onClick={() => setVoiceSettings(prev => ({ ...prev, voice }))}
              className={`
                p-4 border rounded-lg flex items-center gap-3
                ${voiceSettings.voice === voice ? 'border-green-500 bg-green-50' : 'border-gray-200'}
              `}
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-medium">{voice}</div>
                <div className="text-sm text-gray-500">Deutsch</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4">Sprechgeschwindigkeit</h3>
        <input
          type="range"
          min="0.5"
          max="1.5"
          step="0.1"
          value={voiceSettings.speed}
          onChange={e => setVoiceSettings(prev => ({ ...prev, speed: parseFloat(e.target.value) }))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>Langsamer</span>
          <span>Normal</span>
          <span>Schneller</span>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4">Tonhöhe</h3>
        <input
          type="range"
          min="0.5"
          max="1.5"
          step="0.1"
          value={voiceSettings.pitch}
          onChange={e => setVoiceSettings(prev => ({ ...prev, pitch: parseFloat(e.target.value) }))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>Tiefer</span>
          <span>Normal</span>
          <span>Höher</span>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-4">Stimme testen</h3>
        <p className="text-gray-600 mb-4">
          "Willkommen bei [Restaurant Name]! Was darf ich Ihnen bringen?"
        </p>
        <Button
          type="button"
          variant="secondary"
          className="w-full"
          onClick={() => {
            // Play voice sample
          }}
        >
          <PlayCircle className="w-4 h-4 mr-2" />
          Beispiel anhören
        </Button>
      </div>
    </form>
  );
}