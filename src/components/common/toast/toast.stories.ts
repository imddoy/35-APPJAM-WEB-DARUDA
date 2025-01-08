import type { Meta, StoryObj } from '@storybook/react';

import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isVisible: {
      description: '토스트 메시지 표시 여부',
      control: { type: 'boolean' },
      defaultValue: true,
    },
    children: {
      description: '표시할 메시지 텍스트',
      control: { type: 'text' },
      defaultValue: '북마크가 취소되었어요.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BookMark: Story = {
  args: {
    children: '북마크가 취소되었어요.',
    isVisible: true,
  },
};

export const Delete: Story = {
  args: {
    children: '삭제가 완료되었어요.',
    isVisible: true,
  },
};

export const UpdateInfo: Story = {
  args: {
    children: '기본 정보 수정이 완료되었어요.',
    isVisible: true,
  },
};
