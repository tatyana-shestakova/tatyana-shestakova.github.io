import React from 'react';

import './buttonwithmodal.sass';
import { Button } from '../Button/Button';

interface ButtonWithModalProps {
  /**
   * Закрыть модальное окно
   */
  onClose?: () => void;
}

export function ButtonWithModal({ ...props }: ButtonWithModalProps) {
  return (
    <div className="button-with-modal">
      <Button mode="teal"></Button>
    </div>
  );
}
