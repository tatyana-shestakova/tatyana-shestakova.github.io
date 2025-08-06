import React from 'react';

import './icon.sass';
import { ModeType } from '../Button/Button';

export type IconSize = 's' | 'm' | 'l' | 'xl';

export interface IconProps {
  /**
   * Размер иконки
   */
  size: IconSize;

  /**
   * Тема иконки
   */
  theme: ModeType;

  /**
   * Иконка
   */
  src: string;
}

export function Icon({ size = 'm', theme = 'mint', src = '' }: IconProps) {
  return (
    <div>
      <img src={src} alt="" className={['icon', theme, size].join(' ')} />
    </div>
  );
}
