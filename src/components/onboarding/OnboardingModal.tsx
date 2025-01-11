import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, X } from 'lucide-react';
import { Button } from '../Button';
import { MenuSetup } from './steps/MenuSetup';
import { RestaurantProfile } from './steps/RestaurantProfile';
import { VoiceSetup } from './steps/VoiceSetup';
import { FinalStep } from './steps/FinalStep';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  {
    title: 'Restaurant-Profil',
    component: RestaurantProfile,
  },
  {
    title: 'Menü einrichten',
    component: MenuSetup,
  },
  {
    title: 'KI-Stimme anpassen',
    component: VoiceSetup,
  },
  {
    title: 'Fertig!',
    component: FinalStep,
  }
];

export function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({
    restaurantProfile: {},
    menu: [],
    voiceSettings: {}
  });

  if (!isOpen) return null;

  const CurrentStepComponent = steps[currentStep].component;
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleNext = async (stepData: any) => {
    // Update data for current step
    setData(prev => ({ ...prev, ...stepData }));

    if (isLastStep) {
      // Save all data
      try {
        // Track completion
        window.gtag?.('event', 'onboarding_complete', {
          'event_category': 'Onboarding',
          'steps_completed': steps.length
        });
      } catch (e) {
        console.error('Analytics error:', e);
      }
      onClose();
    } else {
      setCurrentStep(prev => prev + 1);
      // Track step completion
      try {
        window.gtag?.('event', 'onboarding_step_complete', {
          'event_category': 'Onboarding',
          'step_number': currentStep + 1,
          'step_name': steps[currentStep].title
        });
      } catch (e) {
        console.error('Analytics error:', e);
      }
    }
  };

  const handleBack = () => {
    if (!isFirstStep) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{steps[currentStep].title}</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="mt-6 flex gap-2">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`
                  h-1 rounded-full flex-1 transition-all
                  ${index <= currentStep ? 'bg-green-500' : 'bg-gray-200'}
                `}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <CurrentStepComponent onNext={handleNext} data={data} />
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex justify-between">
          <Button
            variant="secondary"
            onClick={handleBack}
            className="px-6 py-2"
            disabled={isFirstStep}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>
          
          <Button
            variant="primary"
            onClick={() => handleNext(data)}
            className="px-6 py-2"
          >
            {isLastStep ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Fertig
              </>
            ) : (
              <>
                Weiter
                <ChevronRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}