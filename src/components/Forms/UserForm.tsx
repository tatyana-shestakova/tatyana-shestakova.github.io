import React, { useState } from 'react';

import './form.sass';
import '../../styles/styles.sass';
import { useForm } from 'react-hook-form';
import { clsx } from 'clsx';
import { Button } from '../Button/Button';

interface ProfileFormProps {
  name?: string;
  email: string;
  password: string;
}

export function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    reset,
  } = useForm<ProfileFormProps>();

  const [newUser, setNewUser] = useState(false);

  const onSubmit = (values: ProfileFormProps) => {
    console.log('Данные из формы ', values);
    reset({ name: '', email: '', password: '' });
  };

  const showErrors = () => {
    if (errors.name) {
      resetField('name');
    }
    if (errors.email) {
      resetField('email');
    }
    if (errors.password) {
      resetField('password');
    }
  };

  const title = newUser ? 'Зарегистрируйте новый личный кабинет' : 'Войти в личный кабинет';

  const buttonTitle = newUser ? 'Зарегистрироваться' : 'Войти';

  const name = newUser ? (
    <div className="input-wrapper">
      <label className="label typography m" htmlFor="name">
        Имя:
      </label>
      <input
        id="name"
        type="text"
        placeholder="Введите своё имя"
        className={clsx('input', { 'input-error': errors.name })}
        {...register('name', {
          required: 'Поле обязательно для заполнения',
          minLength: {
            value: 2,
            message: 'Поле должно содержать не менее 2 символов',
          },
          maxLength: {
            value: 50,
            message: 'Поле должно содержать не более 50 символов',
          },
        })}
      />
      {errors.name && <p className="typography xs error error-label bottom">{errors.name.message}</p>}
    </div>
  ) : null;

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="typography m">
          Впервые? Зарегистрируйтесь{' '}
          <span className="link" onClick={() => setNewUser(true)}>
            здесь
          </span>
        </div>
        <h2 className="typography xl bold title-form">{title}</h2>
        {name}
        <div className="input-wrapper">
          <label className="label typography m" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            id="email"
            placeholder="Введите свой email"
            className={clsx('input', { 'input-error': errors.email })}
            {...register('email', {
              required: 'Поле обязательно для заполнения',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Пожалуйста, введите корректный адрес почты',
              },
            })}
          />
          {errors.email && <p className="typography xs error error-label bottom">{errors.email.message}</p>}
        </div>

        <div className="input-wrapper">
          <label className="label typography m" htmlFor="password">
            Пароль:
          </label>
          <input
            type="text"
            id="password"
            placeholder="Введите свой email"
            className={clsx('input', { 'input-error': errors.password })}
            {...register('password', {
              required: 'Поле обязательно для заполнения',
              pattern: {
                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                message:
                  'Пароль должен содержать хоть одну цифру, одну строчную букву, одну заглавную букву, один специальный символ, без пробела и должен быть длиной от 8 символов.',
              },
            })}
          />
          {errors.password && <p className="typography xs error error-label bottom">{errors.password.message}</p>}
        </div>

        <div className="button-submit">
          <Button mode="teal" type="submit" label={buttonTitle} onClick={showErrors} />
        </div>
      </form>
    </div>
  );
}
