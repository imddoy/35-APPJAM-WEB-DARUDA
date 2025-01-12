import type { Meta, StoryFn } from '@storybook/react';

import UploadBtn from './Upload';

export default {
  title: 'Components/UploadBtn',
  component: UploadBtn,
} as Meta;

const Template: StoryFn = (args) => <UploadBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  onClick: () => {},
};

export const Active = Template.bind({});
Active.args = {
  variant: 'act',
  onClick: () => {},
};

export const ActiveHover = Template.bind({});
ActiveHover.args = {
  variant: 'act',
  onClick: () => {},
};
