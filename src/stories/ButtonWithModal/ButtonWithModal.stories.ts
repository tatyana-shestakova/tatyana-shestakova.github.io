import type { Meta } from '@storybook/react';

import { ButtonWithModal } from './ButtonWithModal';

const meta: Meta<typeof ButtonWithModal> = {
  title: 'Example/ButtonWithModal',
  component: ButtonWithModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const ButtonWithModalExample = {
  args: {},
};
