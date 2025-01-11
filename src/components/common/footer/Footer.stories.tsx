import { ThemeProvider } from '@emotion/react';
import type { Meta, StoryFn } from '@storybook/react';
import theme from '@styles/theme';
import { BrowserRouter } from 'react-router-dom';

import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
