import React from 'react';

import './button.sass';

interface ButtonProps {
  /**
   * Цвет кнопки
   */
  mode: 'mint' | 'orange' | 'teal';

  /**
   * Счетчик
   */
  counter?: number;

  /**
   * Счетчик
   */
  label?: string;

  /**
   * Уменьшить количество товаров
   */
  onDecrease?: () => void;

  /**
   * Увеличить количество товаров
   */
  onIncrement?: () => void;
}

export function Button({
  mode = 'mint',
  label = 'В корзину',
  counter,
  onDecrease,
  onIncrement,
  ...props
}: ButtonProps) {
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
