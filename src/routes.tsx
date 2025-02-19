import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth.tsx'
import { NotFound } from './pages/404.tsx'
import { Dashboard } from './pages/app/dashboard/dashboard.tsx'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in.tsx'
import { SignUp } from './pages/auth/sign-up.tsx'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
])
