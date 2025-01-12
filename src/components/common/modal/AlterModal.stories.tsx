import { ImgModalexit, ImgModalexit2, ImgModalcheck } from '@assets/svgs';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import AlterModal from './AlertModal';

const meta: Meta<typeof AlterModal> = {
  title: 'Components/AlterModal',
  component: AlterModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    modalTitle: {
      control: { type: 'text' },
      description: '팝업 모달의 제목입니다.',
    },
    singleBtnContent: {
      control: { type: 'text' },
      description: '모달 버튼의 텍스트입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Exit: Story = {
  args: {
    isSingleModal: false,
    modalTitle: '화면을 벗어나시겠어요?',
    modalContent: '작성중인 화면을 벗어나면 지금까지 입력했던 정보가 사라집니다.',
    ImgPopupModal: ImgModalexit,
    DobblebtnProps: {
      isPrimaryRight: false,
      primaryBtnContent: '그만두기',
      secondaryBtnContent: '마저 작성하기',
    },
  },
  decorators: [
    (Story, context) => {
      const [isOpen, setIsOpen] = useState(context.args.isOpen);

      const handleClose = () => {
        setIsOpen(false);
      };

      const handleOpen = () => {
        setIsOpen(true);
      };

      return (
        <div>
          <button onClick={handleOpen}>모달 열기</button>
          <Story args={{ ...context.args, isOpen, handleClose }} />
        </div>
      );
    },
  ],
};

export const Delete: Story = {
  args: {
    modalTitle: '선택한 글을 삭제하시겠어요?',
    modalContent: '삭제된 글은 다시 볼 수 없어요',
    DobblebtnProps: {
      isPrimaryRight: true,
      primaryBtnContent: '삭제할게요',
      secondaryBtnContent: '한번더 생각할게요',
    },
    ImgPopupModal: ImgModalexit2,
    isSingleModal: false,
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

export const Welcome: Story = {
  args: {
    modalTitle: '회원가입이 완료되었어요.',
    ImgPopupModal: ImgModalcheck,
    isSingleModal: true,
    singleBtnContent: '툴 다루러 가기',
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
