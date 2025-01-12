import type { Meta, StoryFn } from '@storybook/react';

import BookmarkBtn, { BookmarkBtnProps } from './BookMark';

export default {
  title: 'Components/BookmarkBtn',
  component: BookmarkBtn,
  argTypes: {
    isActive: {
      control: 'boolean',
      description: '북마크가 활성화된 상태인지 여부',
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<BookmarkBtnProps> = (args) => <BookmarkBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
  isActive: false,
};

export const Active = Template.bind({});
Active.args = {
  isActive: true,
};
