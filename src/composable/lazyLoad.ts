import { ShortCard, ShortCardProps } from '../../src/stories/ShortCard/ShortCard';
import React, { FunctionComponentElement } from 'react';
import ReactDOM from 'react-dom/client';

export const mockList: ShortCardProps[] = [
  {
    image: 'https://placeholder.apptor.studio/150/150/product1.png',
    price: 12344,
    title: 'Товар 1',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
    id: '1',
    onClick: () => console.log('111'),
  },
  {
    image: 'https://placeholder.apptor.studio/150/150/product1.png',
    price: 383,
    title: 'Товар 2',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
    id: '2',
    onClick: () => console.log('111'),
  },
  {
    image: 'https://placeholder.apptor.studio/150/150/product1.png',
    price: 8393,
    title: 'Товар 3',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
    id: '3',
    onClick: () => console.log('111'),
  },
  {
    image: 'https://placeholder.apptor.studio/150/150/product1.png',
    price: 12344,
    title: 'Товар 4',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
    id: '4',
    onClick: () => console.log('111'),
  },
  {
    image: 'https://placeholder.apptor.studio/150/150/product1.png',
    price: 383,
    title: 'Товар 5',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
    id: '5',
    onClick: () => console.log('111'),
  },
  {
    image: 'https://placeholder.apptor.studio/150/150/product1.png',
    price: 8393,
    title: 'Товар 6',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
    id: '6',
    onClick: () => console.log('111'),
  },
];

export const addRandomCards = (count: number, max?: number): ShortCardProps[] => {
  const maxId = 10000;

  const randomList: ShortCardProps[] = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * (max || maxId));

    const randomCard: ShortCardProps = {
      image: 'https://placeholder.apptor.studio/150/150/product1.png',
      price: randomIndex,
      title: `Товар ${randomIndex}`,
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
      id: `${randomIndex}`,
      onClick: () => console.log(randomIndex),
    };
    randomList.push(randomCard);
  }

  return randomList as ShortCardProps[];
};

let loading = false;
let newCards: FunctionComponentElement<ShortCardProps>[] = [];
let root: ReactDOM.Root;
let loadingDiv: Element;

window.onload = function () {
  loading = false;
  root = ReactDOM.createRoot(document.querySelector('.newList'));
  loadingDiv = document.querySelector('.loading');
};

const appendData = (data: ShortCardProps[]) => {
  const previousCard = newCards?.map((item) => item);
  newCards = [
    ...previousCard,
    ...data.map((item: ShortCardProps) => {
      return React.createElement(ShortCard, {
        image: item.image,
        price: item.price,
        title: item.title,
        id: item.id,
        description: item.description,
        onClick: () => console.log(item.title),
      });
    }),
  ];
  root.render(newCards);
};

const observer = new IntersectionObserver(
  async (entries) => {
    if (entries[0].isIntersecting && !loading) {
      loading = true;
      const data = addRandomCards(9);
      appendData(data);
      loading = false;
    }
  },
  {
    rootMargin: '0px',
    threshold: 0.1,
  }
);

export function lazyLoad() {
  if (loadingDiv) {
    observer.observe(loadingDiv as Element);
  }
}

export function manualLoad() {
  observer.disconnect();
}

export function addManualCards(count: number) {
  const data = addRandomCards(count);
  appendData(data);
}
