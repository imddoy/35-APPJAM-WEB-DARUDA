import type { Meta, StoryFn } from '@storybook/react';

import ShareBtn, { ShareBtnProps } from './Share';

export default {
  title: 'Components/ShareBtn',
  component: ShareBtn,
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 시 호출',
    },
  },
} as Meta<ShareBtnProps>;

const Template: StoryFn<ShareBtnProps> = (args) => <ShareBtn {...args} />;

export const Default = Template.bind({});
Default.args = {};
