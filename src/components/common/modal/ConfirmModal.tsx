import { ImgPopupmodal84 } from '@assets/svgs';

import { ModalWrapper, ConfirmBtns } from './component';
import S from './Modal.styled';

interface ConfirmModalProps {
  isforDelete: boolean;
  ModalTitle: string;
  ModalContent: string;
  btnProps: {
    isforDelete: boolean;
    firstBtnContent: string;
    secondBtnContent: string;
  };
}

const ConfirmModal = ({ ModalTitle, ModalContent, btnProps }: ConfirmModalProps) => {
  return (
    <ModalWrapper>
      <S.ModalContainer>
        <ImgPopupmodal84 />
        <S.ModalTitle>{ModalTitle}</S.ModalTitle>
        <S.ModalContent>{ModalContent}</S.ModalContent>
        <ConfirmBtns {...btnProps} />
      </S.ModalContainer>
    </ModalWrapper>
  );
};

export default ConfirmModal;
