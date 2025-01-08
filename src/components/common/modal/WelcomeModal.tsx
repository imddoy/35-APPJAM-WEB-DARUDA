import { ImgPopupmodal84 } from '@assets/svgs';

import { ModalWrapper } from './component';
import S from './Modal.styled';

interface ConfirmModalProps {
  ModalTitle: string;
}

const WelcomeModal = ({ ModalTitle }: ConfirmModalProps) => {
  return (
    <ModalWrapper $isforWelcome={true}>
      <S.ModalContainer>
        <S.ModalTitle>{ModalTitle}</S.ModalTitle>
        <ImgPopupmodal84 />
      </S.ModalContainer>
      <S.SingleBtn>다루다 시작하기</S.SingleBtn>
    </ModalWrapper>
  );
};

export default WelcomeModal;
