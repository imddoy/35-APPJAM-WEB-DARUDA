import { SVGProps, FunctionComponent } from 'react';

import { ModalWrapper, ConfirmBtns } from '../component';
import S from '../Modal.styled';

interface ConfirmModalProps {
  ModalTitle: string;
  ModalContent: string;
  btnProps: {
    isPrimaryRight: boolean;
    primaryBtnContent: string;
    secondaryBtnContent: string;
  };
  isOpen: boolean;
  handleClose: () => void;
  ImgPopupModal: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const ConfirmModal = ({
  ModalTitle,
  ModalContent,
  btnProps,
  isOpen,
  handleClose,
  ImgPopupModal,
}: ConfirmModalProps) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <S.ModalContainer>
        <ImgPopupModal />
        <S.ModalTitle>{ModalTitle}</S.ModalTitle>
        <S.ModalContent>{ModalContent}</S.ModalContent>
        <ConfirmBtns {...btnProps} handleClose={handleClose} />
      </S.ModalContainer>
    </ModalWrapper>
  );
};

export default ConfirmModal;
