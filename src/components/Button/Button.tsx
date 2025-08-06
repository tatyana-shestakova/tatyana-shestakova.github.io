import React from 'react';

import './button.sass';
import { Icon, IconProps } from '../Icon/Icon';

export type ModeType = 'mint' | 'orange' | 'teal';

export interface ButtonProps {
  /**
   * Цвет кнопки
   */
  mode: ModeType;
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

export function Button({ mode = 'mint', label = 'Кнопка', onClick, ...props }: ButtonProps) {
  const icon = props.icon ? (
    <div className={['button-icon', mode].join(' ')} onClick={onClick}>
      <Icon size={props.icon.size} src={props.icon.src} theme={props.icon.theme} />
    </div>
  ) : null;

  return (
    <button type="button" className={['button', mode].join(' ')} onClick={onClick}>
      {icon}
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
  return (
    <div className={['button', mode].join(' ')}>
      <div className={counter ? 'hidden' : 'showed'}>{label}</div>
      <div className={counter ? 'showed' : 'hidden'}>
        <div className="buttons">
          <button type="button" className="controls" onClick={onDecrease}>
            -
          </button>
          <input className="counter" value={counter} disabled={true}></input>
          <button type="button" className="controls" onClick={onIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
