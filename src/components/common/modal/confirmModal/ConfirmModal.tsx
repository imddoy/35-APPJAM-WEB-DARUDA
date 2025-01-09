import { ImgPopupmodal84 } from '@assets/svgs';

import { ModalWrapper, ConfirmBtns } from '../component';
import S from '../Modal.styled';

interface ConfirmModalProps {
  ModalTitle: string;
  ModalContent: string;
  btnProps: {
    isforDelete: boolean;
    firstBtnContent: string;
    secondBtnContent: string;
  };
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ConfirmModal = ({ ModalTitle, ModalContent, btnProps, isOpen, setIsOpen }: ConfirmModalProps) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <S.ModalContainer>
        <ImgPopupmodal84 />
        <S.ModalTitle>{ModalTitle}</S.ModalTitle>
        <S.ModalContent>{ModalContent}</S.ModalContent>
        <ConfirmBtns {...btnProps} setIsOpen={setIsOpen} />
      </S.ModalContainer>
    </ModalWrapper>
  );
};

export default ConfirmModal;
