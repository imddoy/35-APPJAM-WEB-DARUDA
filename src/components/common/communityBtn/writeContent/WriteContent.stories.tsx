import type { Meta, StoryFn } from '@storybook/react';

import WriteContentBtn from './WriteContent';

export default {
  title: 'Components/WriteContentBtn',
  component: WriteContentBtn,
} as Meta;

const Template: StoryFn = (args) => <WriteContentBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  onClick: () => {},
};

export const Hover = Template.bind({});
Default.args = {
  variant: 'default',
  onClick: () => {},
};
