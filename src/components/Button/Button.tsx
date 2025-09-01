import React from 'react';

import './button.sass';
import { Icon, IconProps } from '../Icon/Icon';

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
  onClick: () => void;

  /**
   * Иконка
   */
  icon?: IconProps;
}

interface ButtonBasketProps extends ButtonProps {
  /**
   * Цвет кнопки
   */
  mode: ModeType;

  /**
   * Счетчик
   */
  counter: number;

  /**
   * Счетчик
   */
  label?: string;

  /**
   * Уменьшить количество товаров
   */
  onDecrease: () => void;

  /**
   * Увеличить количество товаров
   */
  onIncrement: () => void;
}

export function Button({ mode = 'mint', label = 'Кнопка', onClick, icon }: ButtonProps) {
  const currentIcon = icon ? (
    <div className={['button-icon', mode].join(' ')}>
      <Icon size={icon.size} src={icon.src} theme={icon.theme} />
    </div>
  ) : null;

  return (
    <button type="button" className={['button', mode].join(' ')} onClick={onClick}>
      {currentIcon}
      {label}
    </button>
  );
}

export function ButtonBasket({
  mode = 'mint',
  label = 'В корзину',
  counter,
  onDecrease,
  onIncrement,
}: ButtonBasketProps) {
  const showedButtons = !counter ? (
    <Button mode={mode} onClick={() => console.log('onClick')} label={label} />
  ) : (
    <div className="buttons">
      <Button mode={mode} onClick={() => onDecrease()} label={'-'} />
      <input className="counter" value={counter} disabled={true}></input>
      <Button mode={mode} onClick={() => onIncrement()} label={'+'} />
    </div>
  );

  return <div className={['button', mode].join(' ')}>{showedButtons}</div>;
}
