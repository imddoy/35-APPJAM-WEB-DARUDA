import type { Meta, StoryObj } from '@storybook/react';

import WelcomeModal from './WelcomeModal';

const meta: Meta<typeof WelcomeModal> = {
  title: 'Components/WelcomeModal',
  component: WelcomeModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ModalTitle: {
      control: { type: 'text' },
      description: '팝업 모달의 제목입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ModalTitle: '회원가입이 완료되었어요.',
  },
};
