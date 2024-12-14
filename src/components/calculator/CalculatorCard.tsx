import React from 'react';
import { Card } from '../ui/Card';
import { Feature } from '../../types/calculator';

interface CalculatorCardProps {
  children: React.ReactNode;
  feature: Feature | null;
}

export function CalculatorCard({ children, feature }: CalculatorCardProps) {
  return (
    <Card className="p-6">
      {feature && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">
            {feature.description}
          </p>
        </div>
      )}
      <div className="space-y-6">
        {children}
      </div>
    </Card>
  );
}