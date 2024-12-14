import { Feature, CalculationResult } from '../types/calculator';
import { calculateFeatureCredits } from './featureCalculations';
import { features } from '../features/calculator/config';

export { features };

export function calculateCredits(
  featureId: string,
  inputs: Record<string, number>,
  responseCount: number
): CalculationResult {
  const feature = features.find(f => f.id === featureId);
  if (!feature) {
    return { aiCredits: 0, responseCredits: 0 };
  }

  // For dynamic report, use responseCount as reportCount
  if (feature.id === 'dynamic-report') {
    inputs = { reportCount: responseCount };
  }

  // Calculate AI credits based on the feature
  let aiCredits = calculateFeatureCredits(feature.id, inputs);
  
  // For quiz evaluation, multiply AI credits by response count since each response needs evaluation
  if (feature.id === 'quiz-evaluation' && responseCount > 0) {
    aiCredits *= responseCount;
  }

  return { 
    aiCredits, 
    responseCredits: responseCount 
  };
}