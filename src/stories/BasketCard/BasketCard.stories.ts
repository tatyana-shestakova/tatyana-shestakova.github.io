import type { Meta } from '@storybook/react';

import { BasketCard } from './BasketCard';

const meta: Meta<typeof BasketCard> = {
  title: 'Example/BasketCard',
  component: BasketCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const BasketCardExample = {
  args: {
    image: 'https://placeholder.apptor.studio/100/100/product1.png',
    price: '2222',
    title: 'Товар 1',
    count: 10,
  },
};
