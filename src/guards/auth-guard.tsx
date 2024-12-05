import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { app } from '@/config';
import { useAuth } from '@/hooks';
import { paths } from '@/routes';

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { pathname } = useLocation();
  const { isAuthenticated, isInitialized } = useAuth();

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <Navigate to={`${paths.auth.login}?${app.redirectQueryParamName}=${pathname}`} replace />
    );
  }

  return children;
}
