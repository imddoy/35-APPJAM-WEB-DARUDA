import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

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
  decorators: [
    (Story, context) => {
      const [isOpen, setIsOpen] = useState(context.args.isOpen);

      const handleClose = () => {
        setIsOpen(false);
      };

      const handleOepn = () => {
        setIsOpen(true);
      };

      return (
        <div>
          <button onClick={handleOepn}>모달 열기</button>
          <Story args={{ ...context.args, isOpen, handleClose }} />
        </div>
      );
    },
  ],
};
