import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import ConfirmModal from './ConfirmModal';

const meta: Meta<typeof ConfirmModal> = {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ModalTitle: {
      control: { type: 'text' },
      description: '팝업 모달의 제목입니다.',
    },
    ModalContent: {
      control: { type: 'text' },
      description: '팝업 모달의 상세 정보를 나타냅니다.',
    },
    btnProps: {
      description: '버튼 관련 설정입니다.',
      control: { type: 'object' },
    },
    isOpen: {
      description: '모달이 활성화된 상태인지를 나타냅니다',
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  args: {
    ModalTitle: '화면을 벗어나시겠어요?',
    ModalContent: '작성중인 화면을 벗어나면 지금까지 입력했던 정보가 사라집니다',
    btnProps: {
      isforDelete: false,
      firstBtnContent: '그만두기',
      secondBtnContent: '마저 작성하기',
    },
    isOpen: false,
  },
  decorators: [
    (Story, context) => {
      const [isOpen, setIsOpen] = useState(context.args.isOpen);

      return (
        <div>
          <button onClick={() => setIsOpen(true)}>모달 열기</button>
          <Story args={{ ...context.args, isOpen, setIsOpen }} />
        </div>
      );
    },
  ],
};

export const DeleteModal: Story = {
  args: {
    ModalTitle: '선택한 글을 삭제하시겠어요?',
    ModalContent: '삭제된 글은 다시 볼 수 없어요',
    btnProps: {
      isforDelete: true,
      firstBtnContent: '삭제할게요',
      secondBtnContent: '한번더 생각할게요',
    },
  },
  decorators: [
    (Story, context) => {
      const [isOpen, setIsOpen] = useState(context.args.isOpen);

      return (
        <div>
          <button style={{ border: '1px solid black !important' }} onClick={() => setIsOpen(true)}>
            모달 열기
          </button>
          <Story args={{ ...context.args, isOpen, setIsOpen }} />
        </div>
      );
    },
  ],
};

export const DeleteAccountModal: Story = {
  args: {
    ModalTitle: '정말 다루다의 회원을 탈퇴하시겠어요?',
    ModalContent: '탈퇴하시면 슬퍼요오오오오오',
    btnProps: {
      isforDelete: true,
      firstBtnContent: '탈퇴할게요',
      secondBtnContent: '한번더 생각할게요',
    },
  },
  decorators: [
    (Story, context) => {
      const [isOpen, setIsOpen] = useState(context.args.isOpen);

      return (
        <div>
          <button onClick={() => setIsOpen(true)}>모달 열기</button>
          <Story args={{ ...context.args, isOpen, setIsOpen }} />
        </div>
      );
    },
  ],
};
