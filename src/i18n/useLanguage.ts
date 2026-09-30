import { createContext, useContext } from 'react'
import { translations, type Language } from './translations'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: typeof translations.ru
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: 'ru',
  setLanguage: () => {},
  t: translations.ru,
})

export const useLanguage = () => useContext(LanguageContext)
