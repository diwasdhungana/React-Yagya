import { ContactFAQ } from '@/components/contact/ContactFAQ';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactMap } from '@/components/contact/ContactMap';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  console.log('Error Fallback Rendered', error); // Debugging log

  return (
    <div role="alert" className="bg-red-100 p-4">
      <p>Something went wrong:</p>
      <pre className="text-red-600">{error.message}</pre>
      <button onClick={resetErrorBoundary} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
        Try again
      </button>
    </div>
  );
};

export default function ContactUs() {
  const handleError = (error: Error, info: any) => {
    console.error('Caught Error:', error, info);
  };

  const handleReset = () => {
    // Optional reset logic
    console.log('Resetting error state');
  };

  return (
    <div className="bg-background min-h-screen">
      <ContactHero />
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={handleError}
            onReset={handleReset}
          >
            <ContactForm />
          </ErrorBoundary>
          <ContactInfo />
        </div>
        <div className="mt-6">
          <ContactMap />
        </div>
      </div>
    </div>
  );
}
