import React from 'react';

import './form.sass';
import { ShortCard, ShortCardProps } from '../ShortCard/ShortCard';
import { ButtonBasket } from '../Button/ButtonBasket';

export function ItemForm({ ...props }: ShortCardProps) {
  return (
    <div className="item-form">
      <ShortCard {...props} visibleButton={false}>
        <div className="buttons-card-form">
          <ButtonBasket mode="outline" onSubmit={() => console.log('onSubmit')} />
        </div>
      </ShortCard>
    </div>
  );
}
