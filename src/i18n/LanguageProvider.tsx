import { useState, type ReactNode } from 'react'
import { translations, type Language } from './translations'
import { LanguageContext } from './useLanguage'

const savedLanguage = localStorage.getItem('language') === 'en' ? 'en' : 'ru'
document.documentElement.lang = savedLanguage

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(savedLanguage)

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem('language', newLanguage)
    document.documentElement.lang = newLanguage
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
