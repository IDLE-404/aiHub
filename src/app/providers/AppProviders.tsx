import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/router'
import LanguageProvider from '@/i18n/LanguageProvider'

export const AppProviders = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  )
}
