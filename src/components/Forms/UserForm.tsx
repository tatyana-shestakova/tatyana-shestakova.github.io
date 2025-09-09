import React, { useState } from 'react';

import './form.sass';
import '../../styles/styles.sass';
import { useForm } from 'react-hook-form';
import { clsx } from 'clsx';
import { Button } from '../Button/Button';
import { z } from 'zod';
import { profileFormSchema } from '../../composable/profileFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';

type FormSchema = z.infer<typeof profileFormSchema>;

export function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    reset,
  } = useForm<FormSchema>({ resolver: zodResolver(profileFormSchema) });

  const [newUser, setNewUser] = useState(false);

  const onSubmit = (values: FormSchema) => {
    console.log('Данные из формы ', values);
    reset({ name: '', email: '', password: '' });
  };

  const resetErrors = () => {
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

  const changeForm = () => {
    reset({ name: '', email: '', password: '' });
    setNewUser(true);
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
        {...register('name')}
      />
      {errors.name && <p className="typography xs error error-label bottom">{errors.name.message}</p>}
    </div>
  ) : null;

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="typography m">
          Впервые? Зарегистрируйтесь{' '}
          <span className="link" onClick={() => changeForm()}>
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
            {...register('email')}
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
            {...register('password')}
          />
          {errors.password && <p className="typography xs error error-label bottom">{errors.password.message}</p>}
        </div>

        <div className="button-submit">
          <Button mode="teal" type="submit" label={buttonTitle} onClick={resetErrors} />
        </div>
      </form>
    </div>
  );
}
