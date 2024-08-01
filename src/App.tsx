import { RouterProvider } from 'react-router-dom'
import { Button } from './components/ui/button'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './global.css'
import { Toaster } from 'sonner'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />

      <Toaster richColors />

      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
