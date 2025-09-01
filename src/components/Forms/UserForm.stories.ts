import type { Meta } from '@storybook/react';

import { UserForm } from './UserForm';

const meta: Meta<typeof UserForm> = {
  title: 'Example/Forms/UserForm',
  component: UserForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const UserFormExample = {};
