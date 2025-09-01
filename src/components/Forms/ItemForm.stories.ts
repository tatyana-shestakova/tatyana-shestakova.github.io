import type { Meta } from '@storybook/react';

import { ItemForm } from './ItemForm';

const meta: Meta<typeof ItemForm> = {
  title: 'Example/Forms/ItemForm',
  component: ItemForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const ItemFormExample = {};
