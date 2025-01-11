import React from 'react';
import { LucideIcon } from 'lucide-react';

interface WorkflowStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stepNumber: number;
}

export function WorkflowStep({ icon: Icon, title, description, stepNumber }: WorkflowStepProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-green-600">Step {stepNumber}</span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}