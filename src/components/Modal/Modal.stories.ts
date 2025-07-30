import type { Meta } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const ModalVisible = {
  args: {
    visible: true,
    onClose: () => console.log('clickButton'),
  },
};
