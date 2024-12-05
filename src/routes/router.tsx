import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AuthGuard } from '@/guards/auth-guard';
import { GuestGuard } from '@/guards/guest-guard';
import { AuthLayout } from '@/layouts/auth';
import { DashboardLayout } from '@/layouts/dashboard';
import { LazyPage } from './lazy-page';
import { paths } from './paths';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={paths.dashboard.root} replace />,
  },
  {
    path: paths.auth.root,
    element: (
      <GuestGuard>
        <AuthLayout />
      </GuestGuard>
    ),
    children: [
      {
        index: true,
        path: paths.auth.root,
        element: <Navigate to={paths.auth.login} replace />,
      },
      {
        path: paths.auth.login,
        element: LazyPage(() => import('@/pages/auth/login')),
      },
      {
        path: paths.auth.register,
        element: LazyPage(() => import('@/pages/auth/register')),
      },
    ],
  },
  {
    path: paths.dashboard.root,
    element: (
      // <AuthGuard>
      <DashboardLayout />
      // </AuthGuard>
    ),
    children: [
      {
        index: true,
        path: paths.dashboard.root,
        element: <Navigate to={paths.dashboard.home} replace />,
      },
      {
        path: paths.dashboard.home,
        element: LazyPage(() => import('@/pages/dashboard/home')),
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
