import React from 'react';

import './shortcard.sass';

import { Button } from '../Button/Button';

interface ShortCardProps {
  /**
   * Изображение товара
   */
  image?: string;

  /**
   * Цена
   */
  price?: number;

  /**
   * Название товара
   */
  title?: string;

  /**
   * Описание товара
   */
  description?: string;
}

export function ShortCard({ image = '', price, title, description }: ShortCardProps) {
  return (
    <div className="short-card">
      <div className="card-title">{title}</div>
      <img className="card-image" src={image} alt=""></img>
      <div className="card-description">{description}</div>
      <div className="card-price">{price} ₽</div>
      <Button mode="mint" label="В корзину"></Button>
    </div>
  );
}
