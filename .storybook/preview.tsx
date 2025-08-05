import type { Preview } from '@storybook/react';
import { LanguageProvider } from '../src/providers/LanguageProvider';
import { ThemeProvider } from '../src/providers/ThemeProvider';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <LanguageProvider>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </LanguageProvider>
    ),
  ],
};

export default preview;
