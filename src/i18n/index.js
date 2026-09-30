import { es } from './es'
import { en } from './en'

export { es, en }

export const translations = { es, en }

export const getBrowserLanguage = () => {
  if (typeof window === 'undefined') return 'es'
  const lang = navigator.language || navigator.userLanguage
  return lang.startsWith('es') ? 'es' : 'en'
}

export const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'es'
  const stored = localStorage.getItem('language')
  if (stored && translations[stored]) return stored
  return getBrowserLanguage()
}
