import type { Meta } from '@storybook/react';

import { SwitchLanguage } from './Header';

const meta: Meta<typeof SwitchLanguage> = {
  title: 'Example/Header',
  component: SwitchLanguage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const HeaderSwitchExample = {
  args: {},
};
