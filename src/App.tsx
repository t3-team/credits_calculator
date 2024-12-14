import React from 'react';
import { Feature } from './types/calculator';
import { features } from './utils/calculatorUtils';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FeatureSelect } from './components/calculator/FeatureSelect';
import { FeatureInputs } from './components/calculator/FeatureInputs';
import { ResponseInput } from './components/calculator/ResponseInput';
import { CalculationResults } from './components/calculator/CalculationResults';
import { CalculatorCard } from './components/calculator/CalculatorCard';
import { Button } from './components/ui/Button';
import { useCalculator } from './hooks/useCalculator';

function App() {
  const {
    selectedFeature,
    inputValues,
    responseCount,
    results,
    setInputValues,
    setResponseCount,
    handleFeatureSelect,
    handleReset
  } = useCalculator();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CalculatorCard feature={selectedFeature}>
            <FeatureSelect
              features={features}
              selectedFeature={selectedFeature}
              onSelect={handleFeatureSelect}
            />

            {selectedFeature && (
              <>
                <FeatureInputs
                  feature={selectedFeature}
                  values={inputValues}
                  onChange={(id, value) => setInputValues(prev => ({ ...prev, [id]: value }))}
                />
                <ResponseInput
                  value={responseCount}
                  onChange={setResponseCount}
                  selectedFeature={selectedFeature}
                />
              </>
            )}
          </CalculatorCard>

          {selectedFeature && (
            <div className="mt-6">
              <CalculationResults results={results} />
            </div>
          )}

          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={handleReset}
              className="w-full sm:w-auto"
            >
              Reset Calculator
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;