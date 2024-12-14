import React from 'react';
import { Card } from '../ui/Card';
import { CalculationResult } from '../../types/calculator';

interface CalculationResultsProps {
  results: CalculationResult;
}

export function CalculationResults({ results }: CalculationResultsProps) {
  return (
    <Card className="p-6 space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Estimated Credits Usage</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-primary-50 rounded-xl p-6 border-2 border-primary-100">
          <div className="text-sm font-medium text-primary-700 mb-2">AI Credits Required</div>
          <div className="text-3xl font-bold text-primary-600">{results.aiCredits || 0}</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
          <div className="text-sm font-medium text-gray-700 mb-2">Response Credits Required</div>
          <div className="text-3xl font-bold text-gray-600">{results.responseCredits || 0}</div>
        </div>
      </div>
    </Card>
  );
}