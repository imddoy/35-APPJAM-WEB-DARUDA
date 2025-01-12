import type { Meta, StoryFn } from '@storybook/react';

import CommentBtn, { CommentBtnProps } from './Comment';

export default {
  title: 'Components/CommentBtn',
  component: CommentBtn,
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    count: {
      control: { type: 'number' },
      description: '댓글 개수',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 시 호출',
    },
  },
} as Meta<CommentBtnProps>;

const Template: StoryFn<CommentBtnProps> = (args) => <CommentBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 0,
};
