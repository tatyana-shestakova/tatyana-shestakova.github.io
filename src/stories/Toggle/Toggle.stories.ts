import type { Meta } from '@storybook/react';

import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Example/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const ToggleExample = {
  args: {
    label: 'Сменить',
    onClick: () => {
      console.log('Сменить состояние');
    },
  },
};
