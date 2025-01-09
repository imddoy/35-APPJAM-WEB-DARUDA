import styled from '@emotion/styled';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalWrapperProps {
  children: ReactNode;
  $isforWelcome?: boolean;
  isOpen: boolean;
}

const ModalWrapper = ({ children, $isforWelcome = false, isOpen }: ModalWrapperProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.ModalWrapper>
      <S.ModalContent $isforWelcome={$isforWelcome}>{children}</S.ModalContent>
    </S.ModalWrapper>,

    document.getElementById('portal-root') as HTMLElement,
  );
};

export default ModalWrapper;

const S = {
  ModalWrapper: styled.dialog`
    top: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: auto;

    background: rgb(70 70 70 / 60%);
    backdrop-filter: blur(0.6rem);
  `,
  ModalContent: styled.div<{ $isforWelcome: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    justify-content: flex-end;
    width: 40rem;
    height: 26.8rem;
    padding: ${({ $isforWelcome }) => ($isforWelcome ? '3.2rem 4.8rem' : '3.1rem 0 0 0')};

    background: ${({ theme }) => theme.colors.white1};
    border: 1px solid ${({ theme }) => theme.colors.gray4};
    border-radius: 2rem;
  `,
};
