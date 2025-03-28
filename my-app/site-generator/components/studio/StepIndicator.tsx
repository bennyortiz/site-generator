import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { cn } from '../../utils/cn';

interface Step {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (index: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ 
  steps, 
  currentStep, 
  onStepClick 
}) => {
  return (
    <div className="mb-10 px-4">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute left-0 right-0 h-0.5 bg-gray-200 z-0">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-in-out"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
        
        {/* Step circles */}
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className="z-10 flex flex-col items-center"
          >
            <div 
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer relative",
                index < currentStep 
                  ? "bg-blue-500 text-white" 
                  : index === currentStep 
                    ? "bg-white border-2 border-blue-500 text-blue-500" 
                    : "bg-white border border-gray-300 text-gray-400"
              )}
              onClick={() => onStepClick(index)}
            >
              {index < currentStep ? (
                <IconCheck className="h-6 w-6" />
              ) : (
                <span className="text-sm font-medium">{step.icon}</span>
              )}
            </div>
            <span 
              className={cn(
                "mt-2 text-xs font-medium",
                index === currentStep ? "text-blue-600" : "text-gray-500"
              )}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
