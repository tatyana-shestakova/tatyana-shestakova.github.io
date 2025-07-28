import React from 'react';

import './toggle.sass';

interface ToggleProps {
  /**
   * Заголовок
   */
  label?: string;

  /**
   * Заголовок
   */
  onClick: () => void;

  /**
   * Класс
   */
  className?: string;
}

export function Toggle({ onClick, className, ...props }: ToggleProps) {
  return (
    <div className={['toggle', className].join(' ')}>
      <label htmlFor="username">
        <div className="label">{props.label}</div>
      </label>
      <label className="switch">
        <input type="checkbox" id="username" onClick={onClick} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
