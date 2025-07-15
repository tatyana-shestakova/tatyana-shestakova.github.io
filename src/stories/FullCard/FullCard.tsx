import React from 'react';

import './fullcard.sass';

import { Button } from '../Button/Button';

interface FullCardProps {
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
   * Описание товара
   */
  description?: string;

  /**
   * Категория
   */
  category: string;
}

export function FullCard({ image = '', price, title, description, category }: FullCardProps) {
  return (
    <div className="full-card">
      <img className="card-image" src={image} alt=""></img>
      <div className="description">
        <div>
          <div className="card-category">{category}</div>
          <div className="card-title">{title}</div>
          <div className="card-description">{description}</div>
        </div>
        <div>
          <div className="card-price">{price} ₽</div>
          <Button mode="orange" label="В корзину"></Button>
        </div>
      </div>
    </div>
  );
}
