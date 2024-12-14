export interface Feature {
  id: string;
  name: string;
  description: string;
  inputs: FeatureInput[];
  autoSetResponse?: boolean; // New flag to indicate if feature uses responseCount as input
}

export interface FeatureInput {
  id: string;
  label: string;
  placeholder: string;
  type: 'number';
  min: number;
}

export interface CalculationResult {
  aiCredits: number;
  responseCredits: number;
}