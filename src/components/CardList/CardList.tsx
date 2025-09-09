import React, { memo, RefObject, useMemo, useState } from 'react';

import './card-list.sass';

import { Button } from '../Button/Button';
import { ShortCard, ShortCardProps } from '../ShortCard/ShortCard';
import { Modal } from '../Modal/Modal';
import { FullCard, FullCardProps } from '../FullCard/FullCard';
import { ItemForm } from '../Forms/ItemForm';

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
   * Реф на кнопку
   */
  buttonRef?: RefObject<HTMLDivElement>;

  /**
   * Содержимое модального окна
   */
  children?: React.ReactNode;
}

export const CardList = memo(function CardList({ list, onClick, buttonRef, children }: CardListProps) {
  const [openedModal, openModal] = useState(false);
  const [openedForm, openForm] = useState(false);

  const shortModalSize = {
    initialHeight: 450,
    initialWidth: 380,
    maxHeight: 450,
    maxWidth: 380,
  };

  const cardModalSize = {
    initialHeight: 500,
    initialWidth: 800,
    maxHeight: 500,
    maxWidth: 800,
  };

  const [card, setCard] = useState<FullCardProps>({
    image: 'https://placeholder.apptor.studio/150/150/product1.png',
    price: 111,
    title: 'Товар 2',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
      '\n' +
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    category: 'Категория',
    onClick: () => console.log('Товар 2'),
  });

  const [formCard, setFormCard] = useState<ShortCardProps>({
    image: 'https://placeholder.apptor.studio/150/150/product1.png',
    price: 1,
    title: `Товар 1`,
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
    id: '1',
    onClick: () => ({
      image: 'https://placeholder.apptor.studio/150/150/product1.png',
      price: 1,
      title: `Товар 1`,
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
      id: `1`,
    }),
  });

  const items = useMemo(
    () =>
      list.map((item) => (
        <ShortCard
          title={item.title}
          key={item.id}
          description={item.description}
          image={item.image}
          price={item.price}
          onClick={() => {
            setFormCard({
              image: item.image,
              price: item.price,
              title: item.title,
              description: item.description,
              id: item.id,
              onClick: () => console.log(item.title),
            });
            openForm(true);
          }}
          onClickTitle={() => {
            setCard({
              image: item.image,
              price: item.price,
              title: item.title,
              description: item.description,
              category: item.title,
              onClick: () => console.log(item.title),
            });
            openModal(true);
          }}
        />
      )),
    [list]
  );

  return (
    <div className="list">
      {children}
      <div className="cards">{items}</div>
      <div ref={buttonRef} className="loading">
        <Button mode="teal" label="Показать ещё" onClick={onClick} />
      </div>
      <Modal visible={openedModal} size={cardModalSize} onClose={() => openModal(false)}>
        <FullCard {...card} />
      </Modal>
      <Modal visible={openedForm} size={shortModalSize} onClose={() => openForm(false)}>
        <ItemForm {...formCard} />
      </Modal>
    </div>
  );
});
