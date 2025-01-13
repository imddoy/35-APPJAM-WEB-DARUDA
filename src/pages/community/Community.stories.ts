import type { Meta, StoryObj } from '@storybook/react';

import Community from './Community';

const meta: Meta<typeof Community> = {
  title: 'Pages/Community',
  component: Community,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Community>;

export const Default: Story = {};
