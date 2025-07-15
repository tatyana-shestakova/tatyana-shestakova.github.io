import React from 'react';

import './basketcard.sass';

import { ButtonIcon } from '../Button/ButtonIcon';

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
}

export function BasketCard({ image = '', price, title, count }: BasketCardProps) {
  return (
    <div className="basket-card">
      <img className="card-image" src={image} alt=""></img>
      <div className="card-title">{title}</div>
      <div className="card-price">{price}₽</div>
      <div className="card-price">{count}</div>
      <ButtonIcon
        mode="teal"
        icon="https://img.icons8.com/?size=100&id=99950&format=png&color=FFFFFF"
        onClick={() => console.log('clickIcon')}
      ></ButtonIcon>
    </div>
  );
}
