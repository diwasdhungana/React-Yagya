import React from 'react';
import type { Example } from '../../../types';
import { ExampleCard } from './ExampleCard';
import { ErrorBoundary } from 'react-error-boundary';

interface ExampleListProps {
  examples?: Example[]; // Make examples optional
}

export function ExampleList({ examples = [] }: ExampleListProps) {
  // Provide a default empty array
  const handleError = (error: Error, info: any) => {
    console.error('Caught Error:', error, info);
  };

  const handleReset = () => {
    console.log('Resetting error state');
  };

  const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
    return (
      <div role="alert" className="bg-red-100 p-4">
        <p>Something went wrong:</p>
        <pre className="text-red-600">{error.message}</pre>
        <button
          onClick={resetErrorBoundary}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
        >
          Try again
        </button>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-3 border-b">
        <h2 className="text-lg font-semibold">Examples</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onError={handleError}
          onReset={handleReset}
        >
          {examples.length > 0 ? (
            <div className="space-y-4">
              {examples.map((example) => (
                <ExampleCard
                  key={example.id}
                  title={example.title}
                  source={example.source}
                  date={example.date}
                  url={example.url}
                  focus={example.focus}
                  compatibility={example.compatibility}
                />
              ))}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Select a subcategory to view examples
            </div>
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
}
