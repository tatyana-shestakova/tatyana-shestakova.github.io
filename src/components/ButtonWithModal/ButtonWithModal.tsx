import React, { FormEvent, useState } from 'react';

import './button-with-modal.sass';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';

export function ButtonWithModal() {
  const [opened, openModal] = useState(false);
  const [input, setInput] = useState('');

  return (
    <div className="modal-with-button">
      <input
        type="text"
        className="customInput"
        onInput={(element: FormEvent<HTMLInputElement>) => setInput((element.target as HTMLInputElement)?.value)}
      />
      <Button mode="teal" label="Открыть" onClick={() => openModal(true)} />
      <Modal visible={opened} onClose={() => openModal(false)}>
        <div>{input}</div>
      </Modal>
    </div>
  );
}
