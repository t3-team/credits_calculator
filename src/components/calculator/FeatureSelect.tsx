import React from 'react';
import { Feature } from '../../types/calculator';

interface FeatureSelectProps {
  features: Feature[];
  selectedFeature: Feature | null;
  onSelect: (feature: Feature) => void;
}

export function FeatureSelect({ features, selectedFeature, onSelect }: FeatureSelectProps) {
  return (
    <div className="space-y-3">
      <label htmlFor="feature" className="block text-sm font-semibold text-gray-700">
        Select a Feature
      </label>
      <select
        id="feature"
        className="w-full rounded-lg border-2 border-gray-300 px-4 py-2.5 text-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors duration-200"
        value={selectedFeature?.id || ''}
        onChange={(e) => {
          const feature = features.find(f => f.id === e.target.value);
          if (feature) onSelect(feature);
        }}
      >
        <option value="">Choose a feature...</option>
        {features.map((feature) => (
          <option key={feature.id} value={feature.id}>
            {feature.name}
          </option>
        ))}
      </select>
      {selectedFeature && (
        <p className="mt-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
          {selectedFeature.description}
        </p>
      )}
    </div>
  );
}