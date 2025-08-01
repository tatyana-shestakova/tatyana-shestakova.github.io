import React, { ReactComponentElement } from 'react';

import './modal.sass';

interface ModalProps {
  /**
   * Видимость модального окна
   */
  visible: boolean;

  /**
   * Содержимое модального окна
   */
  children?: ReactComponentElement<undefined>[];

  /**
   * Закрыть модальное окно
   */
  onClose: () => void;
}

export function Modal({ visible = true, onClose, ...props }: ModalProps) {
  return (
    <div className="background-shadow">
      <div className={['modal', visible ? '' : 'hidden'].join(' ')}>
        <div className="icon-close" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 50 50">
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
          </svg>
          {props.children}
        </div>
      </div>
    </div>
  );
}
