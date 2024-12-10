import './global.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import { queryClient } from '@/api/query-client';
import { AuthProvider } from '@/providers/auth-provider';
import { Router } from '@/routes/router';
import { ToasterProvider } from './components/notification';
import { ThemeProvider } from './context/ThemeContext';

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ToasterProvider />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <AuthProvider>
            <Router />
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
