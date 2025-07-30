import type { Meta } from '@storybook/react';

import { CardList } from './CardList';

const meta: Meta<typeof CardList> = {
  title: 'Example/CardList',
  component: CardList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const ListCardExample = {
  args: {
    list: [
      {
        image: 'https://placeholder.apptor.studio/150/150/product1.png',
        price: '12 344',
        title: 'Товар 1',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
        id: '1',
      },
      {
        image: 'https://placeholder.apptor.studio/150/150/product1.png',
        price: '383',
        title: 'Товар 2',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
        id: '2',
      },
      {
        image: 'https://placeholder.apptor.studio/150/150/product1.png',
        price: '8 393',
        title: 'Товар 3',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
        id: '3',
      },
      {
        image: 'https://placeholder.apptor.studio/150/150/product1.png',
        price: '7',
        title: 'Товар 4',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
        id: '4',
      },
      {
        image: 'https://placeholder.apptor.studio/150/150/product1.png',
        price: '11',
        title: 'Товар 5',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
        id: '5',
      },
    ],
  },
};
