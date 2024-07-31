import { RouterProvider } from 'react-router-dom'
import { Button } from './components/ui/button'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './global.css'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />

      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
