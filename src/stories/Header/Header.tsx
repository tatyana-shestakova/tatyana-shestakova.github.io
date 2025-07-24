import React, { useContext } from 'react';

import './header.sass';
import { Logo } from '../Logo/Logo';
import { Toggle } from '../Toggle/Toggle';
import { I18nContext } from '../../providers/LanguageProvider';
import { useTheme } from '../../providers/ThemeProvider';

type ItemNavType = {
  label: string;
  arrows?: boolean;
};

interface HeaderProps {
  /**
   * Навигация
   */
  nav?: ItemNavType[];
}

export function Header({ ...props }: HeaderProps) {
  const { language, i18n, setLanguage } = useContext(I18nContext);

  const { theme, toggleTheme } = useTheme();

  const nav =
    props.nav && props.nav.length ? (
      <div className="nav">
        {props.nav.map((item: ItemNavType, index: number) => (
          <li key={index}>
            {item.arrows}
            {item.label}
          </li>
        ))}
      </div>
    ) : null;

  return (
    <div className={['header', theme].join(' ')}>
      {nav}
      <div className="logo">
        <Logo theme={theme}></Logo>
      </div>
      <div className="lang-switcher">
        <Toggle label={i18n[language].changeLang} onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')} />
        <Toggle label={i18n[language].changeTheme} onClick={() => toggleTheme()} />
      </div>
    </div>
  );
}
