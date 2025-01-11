import React from 'react';
import { KitchenDisplay } from './KitchenDisplay';
import { AnalyticsDemo } from './AnalyticsDemo';
import { VoiceDemo } from './VoiceDemo';

export function SystemExamplesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Erleben Sie das System in Aktion</h2>
        <div className="space-y-24">
          <KitchenDisplay />
          <AnalyticsDemo />
          <VoiceDemo />
        </div>
      </div>
    </section>
  );
}