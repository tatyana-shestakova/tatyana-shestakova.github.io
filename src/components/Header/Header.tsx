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
  const iconBasketParam: IconProps = {
    src: 'https://cdn-icons-png.flaticon.com/512/711/711897.png',
    theme: 'ghost',
    size: 'm',
  };

  const iconProfileParam: IconProps = {
    src: 'https://images.icon-icons.com/2574/PNG/512/profile_picture_user_icon_153847.png',
    theme: 'ghost',
    size: 'm',
  };

  const { language, i18n, setLanguage } = useContext(I18nContext);

  const { theme, toggleTheme } = useTheme();

  const [openedBasket, setOpenedBasket] = useState(true);

  const [openedProfile, setopenedProfile] = useState(true);

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
              icon={iconBasketParam}
              label=""
              mode={theme === 'orange' ? 'orange' : 'teal'}
              size="content"
              onClick={() => setOpenedBasket(true)}
            />
          </div>
        </Tip>
        <Tip className="absolute-tip" title={i18n[language].profile}>
          <div>
            <Button
              icon={iconProfileParam}
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
