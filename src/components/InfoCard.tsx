import React from 'react';
import { Info } from 'lucide-react';

interface InfoCardProps {
  children: React.ReactNode;
}

export function InfoCard({ children }: InfoCardProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 mt-0.5" />
        <div className="text-blue-800">{children}</div>
      </div>
    </div>
  );
}