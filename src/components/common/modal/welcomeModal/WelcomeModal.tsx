import { ImgPopupmodal84 } from '@assets/svgs';

import { ModalWrapper } from '../component';
import S from '../Modal.styled';

interface ConfirmModalProps {
  ModalTitle: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const WelcomeModal = ({ ModalTitle, isOpen, setIsOpen }: ConfirmModalProps) => {
  return (
    <ModalWrapper $isforWelcome={true} isOpen={isOpen}>
      <S.ModalContainer>
        <S.ModalTitle>{ModalTitle}</S.ModalTitle>
        <ImgPopupmodal84 />
      </S.ModalContainer>
      <S.SingleBtn onClick={() => setIsOpen(false)}>다루다 시작하기</S.SingleBtn>
    </ModalWrapper>
  );
};

export default WelcomeModal;
