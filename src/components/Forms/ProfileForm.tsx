import React from 'react';

import './form.sass';
import '../../styles/styles.sass';
import { useForm } from 'react-hook-form';
import { clsx } from 'clsx';
import { Button } from '../Button/Button';

export interface ProfileFormProps {
  name: string;
  email: string;
  message: string;
  preference: string;
}

export function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormProps>();

  const onSubmit = (values: ProfileFormProps) => {
    console.log('Данные из формы ', values);
  };

  const showErrors = () => {
    console.log(errors);
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="typography xl bold title-form">Заполнить профиль</h2>

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
          <label className="label typography m" htmlFor="message">
            Адрес:
          </label>
          <textarea
            id="message"
            placeholder="Введите адрес получения товара"
            className={clsx('input', 'textarea', { 'input-error': errors.message })}
            rows={4}
            {...register('message', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 10,
                message: 'Поле должно содержать не менее 10 символов',
              },
              maxLength: {
                value: 500,
                message: 'Поле должно содержать не более 500 символов',
              },
            })}
          />
          {errors.message && <p className="typography xs error error-label bottom">{errors.message.message}</p>}
        </div>

        <fieldset className={clsx({ 'input-error': errors.preference }, 'fieldset')}>
          <legend className="typography m title-form">Вы хотите получать от нас рассылку?</legend>

          <label className="typography m">
            <input type="radio" value="yes" {...register('preference', { required: 'Пожалуйста, выберите опцию' })} />
            Да
          </label>

          <label className="typography m">
            <input
              type="radio"
              value="rarely"
              {...register('preference', { required: 'Пожалуйста, выберите опцию' })}
            />
            Да, но не часто
          </label>

          <label className="typography m">
            <input type="radio" value="no" {...register('preference', { required: 'Пожалуйста, выберите опцию' })} />
            Нет
          </label>

          {errors.preference && <p className="typography xs error error-label bottom">{errors.preference.message}</p>}
        </fieldset>

        <div className="button-submit">
          <Button mode="teal" type="submit" label="Отправить" onClick={showErrors} />
        </div>
      </form>
    </div>
  );
}
