import type { Preview } from '@storybook/nextjs-vite'
import '../app/styles/globals.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
      ariaLabel: 'Controls',
    },

    a11y: {
      test: 'todo'
    }
  },
};

export default preview;