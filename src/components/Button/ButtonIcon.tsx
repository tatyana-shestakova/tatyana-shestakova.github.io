import React from 'react';

import './button.sass';

interface ButtonIconProps {
  /**
   * Цвет кнопки
   */
  mode: 'mint' | 'orange' | 'teal';

  /**
   * Иконка
   */
  icon: string;

  /**
   * Клик на кнопку
   */
  onClick: () => void;
}

export function ButtonIcon({ mode = 'mint', icon = '', onClick }: ButtonIconProps) {
  return (
    <div className={['button-icon', mode].join(' ')} onClick={onClick}>
      <img src={icon} alt="" className="icon" />
    </div>
  );
}
