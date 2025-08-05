import React, { RefObject } from 'react';

import './card-list.sass';

import { Button } from '../Button/Button';
import { ShortCard, ShortCardProps } from '../ShortCard/ShortCard';

interface CardListProps {
  /**
   * Список товаров
   */
  list: ShortCardProps[];

  /**
   * Клик на кнопку
   */
  onClick: () => void;

  /**
   * реф на кнопку
   */
  buttonRef?: RefObject<HTMLDivElement>;
}

export function CardList({ list, onClick, buttonRef }: CardListProps) {
  return (
    <div className="list">
      <div className="cards">
        {list.map((item) => (
          <ShortCard
            title={item.title}
            key={item.id}
            description={item.description}
            image={item.image}
            price={item.price}
            onClick={() => console.log(item.title)}
          />
        ))}
      </div>
      <div className="cards newList"></div>
      <div ref={buttonRef} className="loading">
        <Button mode="teal" label="Показать ещё" onClick={onClick}></Button>
      </div>
    </div>
  );
}
