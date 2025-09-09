import React from 'react';

import './form.sass';
import { ShortCard } from '../ShortCard/ShortCard';
import { ButtonBasket } from '../Button/ButtonBasket';

interface ItemFormProps {
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

  /**
   * Карточка без кнопки
   */
  visibleButton?: boolean;

  /**
   * Добавленные компоненты
   */
  children?: React.ReactNode;
}

export function ItemForm({ ...props }: ItemFormProps) {
  return (
    <div className="item-form">
      <ShortCard {...props} visibleButton={false}>
        <div className="buttons-card-form">
          <ButtonBasket mode="outline" onClick={() => console.log('onSubmit')} />
        </div>
      </ShortCard>
    </div>
  );
}
