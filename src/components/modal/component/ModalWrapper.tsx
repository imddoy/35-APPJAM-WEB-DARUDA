import styled from '@emotion/styled';
import { ReactNode } from 'react';
// import ReactDOM from 'react-dom';

interface ModalWrapperProps {
  children: ReactNode;
  $isforWelcome?: boolean;
}

const ModalWrapper = ({ children, $isforWelcome = false }: ModalWrapperProps) => {
  // return ReactDOM.createPortal(
  return <S.ModalWrapper $isforWelcome={$isforWelcome}>{children}</S.ModalWrapper>;
  // document.getElementById('portal-root') as HTMLElement,
  // );
};

export default ModalWrapper;

const S = {
  ModalWrapper: styled.div<{ $isforWelcome: boolean }>`
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
