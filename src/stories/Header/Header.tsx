import React, { useContext, useState } from 'react';

import './header.sass';
import { Logo } from '../Logo/Logo';
import { Toggle } from '../Toggle/Toggle';
import { ThemeContext } from '../../app/App';
import { I18nContext, I18nProvider } from '../../app/i18n-context';

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
  const theme = useContext(ThemeContext);

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
    </div>
  );
}

export function SwitchTheme() {
  const [mode, setTheme] = useState('orange');
  const { language, i18n, setLanguage } = useContext(I18nContext);

  return (
    <div>
      <div className="lang-switcher">
        <Toggle label={i18n[language].changeLang} onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')} />
        <Toggle label={i18n[language].changeTheme} onClick={() => setTheme(mode === 'orange' ? 'mint' : 'orange')} />
      </div>

      <ThemeContext.Provider value={mode}>
        <Header />
      </ThemeContext.Provider>
    </div>
  );
}

export function SwitchLanguage() {
  return (
    <I18nProvider>
      <SwitchTheme />
    </I18nProvider>
  );
}
