import React from 'react';
import { Feature } from '../../types/calculator';

interface FeatureInputsProps {
  feature: Feature;
  values: Record<string, number>;
  onChange: (id: string, value: number | null) => void;
}

export function FeatureInputs({ feature, values, onChange }: FeatureInputsProps) {
  if (feature.autoSetResponse) {
    return null;
  }

  const handleInputChange = (id: string, value: string) => {
    if (value === '') {
      onChange(id, null);
      return;
    }

    const numValue = parseInt(value);
    if (!isNaN(numValue)) {
      onChange(id, Math.max(feature.inputs.find(input => input.id === id)?.min || 0, numValue));
    }
  };

  return (
    <div className="space-y-4">
      {feature.inputs.map((input) => (
        <div key={input.id} className="space-y-2">
          <label htmlFor={input.id} className="block text-sm font-semibold text-gray-700">
            {input.label}
          </label>
          <input
            type="number"
            id={input.id}
            min={input.min}
            value={values[input.id] ?? ''}
            onChange={(e) => handleInputChange(input.id, e.target.value)}
            placeholder={input.placeholder}
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-2.5 text-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors duration-200"
          />
        </div>
      ))}
    </div>
  );
}