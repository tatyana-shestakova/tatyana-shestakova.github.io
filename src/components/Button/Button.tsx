import './button.sass';
import { Icon, IconProps } from '../Icon/Icon';
import React from 'react';

export type ModeType = 'mint' | 'orange' | 'teal';

export interface ButtonProps {
  /**
   * Цвет кнопки
   */
  mode: ModeType | 'outline';
  /**
   * Заголовок
   */
  label?: string;

  /**
   * Событие по клику на кнопку
   */
  onClick?: () => void;

  /**
   * Иконка
   */
  icon?: IconProps;

  /**
   * Размер кнопки
   */
  size?: 'fix' | 'content';

  /**
   * Тип кнопки
   */
  type?: 'submit' | 'button' | 'reset';
}

export function Button({ mode = 'mint', label = 'Кнопка', onClick, icon, size = 'fix', type = 'button' }: ButtonProps) {
  const currentIcon = icon ? (
    <div className={['button-icon', mode].join(' ')}>
      <Icon size={icon.size} src={icon.src} theme={icon.theme} />
    </div>
  ) : null;

  return (
    <button type={type} className={['button', size, mode].join(' ')} onClick={onClick}>
      {currentIcon}
      {label}
    </button>
  );
}
