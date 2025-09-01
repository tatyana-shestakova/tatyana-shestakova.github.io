import React, { useContext, useState } from 'react';

import './header.sass';
import { Logo } from '../Logo/Logo';
import { Toggle } from '../Toggle/Toggle';
import { I18nContext } from '../../providers/LanguageProvider';
import { useTheme } from '../../providers/ThemeProvider';
import { Button } from '../Button/Button';
import { IconProps } from 'src/components/Icon/Icon';
import { Tip } from 'src/components/Tip/Tip';

type ItemNavType = {
  label: string;
  arrows?: boolean;
};

interface HeaderProps {
  /**
   * Навигация
   */
  nav?: ItemNavType[];

  /**
   * Содержимое модального окна
   */
  children?: React.ReactNode;
}

export function Header({ ...props }: HeaderProps) {
  const iconParam: IconProps = {
    src: 'https://cdn-icons-png.flaticon.com/512/711/711897.png',
    theme: 'ghost',
    size: 'm',
  };

  const { language, i18n, setLanguage } = useContext(I18nContext);

  const { theme, toggleTheme } = useTheme();

  const [openedBasket, setOpenedBasket] = useState(true);

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
        <Logo theme={theme} />
      </div>
      <div className="lang-switcher">
        <Toggle label={i18n[language].changeLang} onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')} />
        <Toggle label={i18n[language].changeTheme} onClick={() => toggleTheme()} />
        <Tip className="absolute-tip" title={i18n[language].basket}>
          <div>
            <Button
              icon={iconParam}
              label=""
              mode={theme === 'orange' ? 'orange' : 'teal'}
              size="content"
              onClick={() => setOpenedBasket(true)}
            />
          </div>
        </Tip>
        {props.children}
      </div>
    </div>
  );
}
