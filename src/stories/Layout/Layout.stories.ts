import type { Meta } from '@storybook/react';

import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Example/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const LayoutMint = {
  args: {
    colorSchema: 'mint',
  },
};

export const LayoutOrange = {
  args: {
    colorSchema: 'orange',
  },
};
