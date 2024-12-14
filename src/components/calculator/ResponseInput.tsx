import React from 'react';
import { Feature } from '../../types/calculator';

interface ResponseInputProps {
  value: number | null;
  onChange: (value: number | null) => void;
  selectedFeature: Feature | null;
}

export function ResponseInput({ value, onChange, selectedFeature }: ResponseInputProps) {
  const label = selectedFeature?.autoSetResponse
    ? 'Number of Reports/User Responses'
    : 'Number of User Responses';

  const description = selectedFeature?.autoSetResponse
    ? 'Each response generates one report (1 Response Credit per response)'
    : '1 Response Credit per User Response';

  const handleInputChange = (inputValue: string) => {
    if (inputValue === '') {
      onChange(null);
      return;
    }

    const numValue = parseInt(inputValue);
    if (!isNaN(numValue)) {
      onChange(Math.max(0, numValue));
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor="responses" className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input
        type="number"
        id="responses"
        min={0}
        value={value ?? ''}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Enter the number of responses"
        className="w-full rounded-lg border-2 border-gray-300 px-4 py-2.5 text-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors duration-200"
      />
      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
        {description}
      </p>
    </div>
  );
}