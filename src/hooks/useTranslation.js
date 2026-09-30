import { useLanguage } from '../context/LanguageContext';

export const useTranslation = () => {
  const { t, language, setLanguage, isReady, availableLanguages } = useLanguage();
  return { t, language, setLanguage, isReady, availableLanguages };
};