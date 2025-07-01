import type { Meta } from '@storybook/react';

import { ShortCard } from './ShortCard';

const meta: Meta<typeof ShortCard> = {
  title: 'Example/ShortCard',
  component: ShortCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const ShortCardExample = {
  args: {
    image: 'https://placeholder.apptor.studio/300/450/product1.png',
    price: '2222',
    title: 'Товар 1',
    description: 'Описание товара, которое не вмещается',
  },
};
