import React, { createContext, ReactNode, useState } from 'react';

export type Language = 'en' | 'ru';

export interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  i18n: {
    [key in Language]: {
      changeLang: string;
      changeTheme: string;
    };
  };
}

const i18n: I18nContextType['i18n'] = {
  en: {
    changeLang: 'Change language',
    changeTheme: 'Change theme',
  },
  ru: {
    changeLang: 'Сменить язык',
    changeTheme: 'Сменить тему',
  },
};

export const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => ({}),
  i18n: i18n,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>((navigator.language.slice(0, 2) as Language) || 'en');

  return <I18nContext.Provider value={{ language, setLanguage, i18n }}>{children}</I18nContext.Provider>;
};
