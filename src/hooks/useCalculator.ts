import { useState } from 'react';
import { Feature } from '../types/calculator';
import { calculateCredits } from '../utils/calculatorUtils';

export function useCalculator() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [inputValues, setInputValues] = useState<Record<string, number | null>>({});
  const [responseCount, setResponseCount] = useState<number | null>(null);

  const handleFeatureSelect = (feature: Feature | null) => {
    setSelectedFeature(feature);
    setInputValues({});
    setResponseCount(null);
  };

  const handleReset = () => {
    setSelectedFeature(null);
    setInputValues({});
    setResponseCount(null);
  };

  const results = selectedFeature
    ? calculateCredits(
        selectedFeature.id,
        Object.fromEntries(
          Object.entries(inputValues).map(([key, value]) => [key, value ?? 0])
        ),
        responseCount ?? 0
      )
    : { aiCredits: 0, responseCredits: 0 };

  return {
    selectedFeature,
    inputValues,
    responseCount,
    results,
    setInputValues,
    setResponseCount,
    handleFeatureSelect,
    handleReset
  };
}