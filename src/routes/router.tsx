import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AuthGuard } from '@/guards/auth-guard';
import { GuestGuard } from '@/guards/guest-guard';
import { AuthLayout } from '@/layouts/auth';
import { DashboardLayout } from '@/layouts/app';
import { LazyPage } from './lazy-page';
import { paths } from './paths';
import { ChatLayout } from '@/layouts/app/chat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: paths.root.root,
        element: LazyPage(() => import('@/pages/dashboard/home')),
      },
    ],
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
    path: paths.root.root,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: paths.root.aboutUs.root,
        element: LazyPage(() => import('@/pages/dashboard/about-us')),
      },
      {
        index: true,
        path: paths.root.blogs.root,
        element: LazyPage(() => import('@/pages/dashboard/blogs')),
      },
      {
        index: true,
        path: paths.root.faqs.root,
        element: LazyPage(() => import('@/pages/dashboard/faqs')),
      },
      {
        index: true,
        path: paths.root.contactUs.root,
        element: LazyPage(() => import('@/pages/dashboard/contact-us')),
      },
    ],
  },
  {
    path: paths.chat.root,
    element: (
      <AuthGuard>
        <ChatLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        path: paths.chat.root,
        element: LazyPage(() => import('@/pages/dashboard/chat')),
      },
      {
        index: true,
        path: paths.chat.room,
        element: LazyPage(() => import('@/pages/dashboard/chat/room')),
      },
    ],
  },
]);

export function Router() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}
