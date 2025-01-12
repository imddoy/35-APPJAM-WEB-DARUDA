import type { Meta, StoryFn } from '@storybook/react';

import ImageSaveBtn, { ImageSaveBtnProps } from './Cmting';

export default {
  title: 'Components/ImageSaveBtn',
  component: ImageSaveBtn,
  argTypes: {
    isActive: {
      control: 'boolean',
      description: '버튼이 활성화된 상태인지 여부',
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ImageSaveBtnProps> = (args) => <ImageSaveBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
  isActive: false,
};

export const Deactive = Template.bind({});
Deactive.args = {
  isActive: true,
};
