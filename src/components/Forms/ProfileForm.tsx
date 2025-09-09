import React from 'react';

import './form.sass';
import '../../styles/styles.sass';
import { useForm } from 'react-hook-form';
import { clsx } from 'clsx';
import { Button } from '../Button/Button';
import { z } from 'zod';
import { profileFormSchema } from '../../composable/profileFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';

type FormSchema = z.infer<typeof profileFormSchema>;

export function ProfileForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver(profileFormSchema) });

  const onSubmit = (values: FormSchema) => {
    console.log('Данные из формы ', values);
    reset({ name: '', email: '', message: '', preference: '' });
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
            {...register('name')}
            aria-invalid={errors.name ? 'true' : 'false'}
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
            {...register('email')}
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
            {...register('message')}
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
            <input type="radio" value="rarely" {...register('preference')} />
            Да, но не часто
          </label>

          <label className="typography m">
            <input type="radio" value="no" {...register('preference')} />
            Нет
          </label>

          {errors.preference && <p className="typography xs error error-label bottom">{errors.preference.message}</p>}
        </fieldset>

        <div className="button-submit">
          <Button mode="teal" type="submit" label="Отправить" onClick={() => console.log('submit')} />
        </div>
      </form>
    </div>
  );
}
