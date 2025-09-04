import type { Meta } from '@storybook/react';

import { ButtonBasket } from './ButtonBasket';

const meta: Meta<typeof ButtonBasket> = {
  title: 'Example/ButtonBasket',
  component: ButtonBasket,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const ButtonBasketExample = {};
