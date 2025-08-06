import React from 'react';

import './basketcard.sass';

import { Button } from '../Button/Button';
import { IconProps } from 'src/components/Icon/Icon';

interface BasketCardProps {
  /**
   * Изображение товара
   */
  image: string;

  /**
   * Цена
   */
  price: number;

  /**
   * Название товара
   */
  title: string;

  /**
   * Количество товара
   */
  count: number;

  /**
   * Клик на кнопку
   */
  onClick: () => void;
}

export function BasketCard({ image = '', price, title, count, onClick }: BasketCardProps) {
  const iconParam: IconProps = {
    src: 'https://img.icons8.com/?size=100&id=99950&format=png&color=FFFFFF',
    theme: 'teal',
    size: 'm',
  };

  return (
    <div className="basket-card">
      <img className="card-image" src={image} alt=""></img>
      <div className="card-title">{title}</div>
      <div className="card-price">{price}₽</div>
      <div className="card-price">{count}</div>
      <Button mode="teal" icon={iconParam} onClick={() => onClick} label="" />
    </div>
  );
}
