import React, { FormEvent, useState } from 'react';

import './button.sass';
import { useForm } from 'react-hook-form';
import { clsx } from 'clsx';
import { Button, ButtonProps, ModeType } from './Button';

interface ButtonBasketProps extends ButtonProps {
  /**
   * Цвет кнопки
   */
  mode: ModeType | 'outline';

  /**
   * Счетчик
   */
  counter?: number;

  /**
   * Счетчик
   */
  label?: string;

  /**
   * Отправить форму
   */
  onSubmit?: () => void;
}

export interface ButtonBasketFormProps {
  counter: number;
}

export function ButtonBasket({ mode = 'mint', onSubmit }: ButtonBasketProps) {
  const [input, setInput] = useState(0);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<ButtonBasketFormProps>();

  const validate = (counter: number) => {
    console.log(!counter);
    if (!counter) {
      setError('counter', {
        types: {
          min: 'Должен быть выбран хоть один товар',
        },
        message: 'Должен быть выбран хоть один товар',
      });
    }
  };

  const onDecrease = () => {
    setInput((prevState) => {
      if (prevState) {
        return prevState - 1;
      }
      return 0;
    });

    validate(input - 1);
  };

  const onIncrement = () => {
    setInput((prevState) => Number(prevState + 1));
    clearErrors(['counter']);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className={['button', mode].join(' ')}>
        <div className="buttons">
          <Button mode={mode} onClick={() => onDecrease()} label={'-'} />
          <input
            id="counter"
            type="text"
            className={clsx('counter', 'input', { 'input-error': errors.counter })}
            value={input}
            onInput={(element: FormEvent<HTMLInputElement>) =>
              setInput(Number((element.target as HTMLInputElement)?.value))
            }
            {...register('counter')}
          />
          <Button mode={mode} onClick={() => onIncrement()} label={'+'} />
        </div>
      </div>
      <Button mode="mint" label="Добавить" type="submit" />
      {errors.counter && <p className="typography xs error error-label error top-100">{errors.counter.message}</p>}
    </form>
  );
}
