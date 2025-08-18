import type { Meta } from '@storybook/react';

import { RangeSlider } from './RangeSlider';

const meta: Meta<typeof RangeSlider> = {
  title: 'Example/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
};

export default meta;

export const RangeSliderExample = {
  args: {
    min: 10,
    max: 100,
    step: 5,
    onChange: ({ min, max }: { min: number; max: number }) => console.log(min, max),
  },
};
