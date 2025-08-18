import React from 'react';

import './shortcard.sass';

import { Button } from '../Button/Button';

export interface ShortCardProps {
  /**
   * Изображение товара
   */
  image?: string;

  /**
   * Цена
   */
  price?: number;

  /**
   * Id
   */
  id?: string;

  /**
   * Название товара
   */
  title?: string;

  /**
   * Описание товара
   */
  description?: string;

  /**
   * Клик на кнопку
   */
  onClick: () => void;

  /**
   * Клик на название
   */
  onClickTitle?: () => void;
}

export function ShortCard({ image = '', price, title, description, onClick, onClickTitle }: ShortCardProps) {
  return (
    <div className="short-card">
      <div className="card-title" onClick={onClickTitle}>
        {title}
      </div>
      <img className="card-image" src={image} alt=""></img>
      <div className="card-description">{description}</div>
      <div className="card-price">{price} ₽</div>
      <Button mode="mint" label="В корзину" onClick={onClick}></Button>
    </div>
  );
}
