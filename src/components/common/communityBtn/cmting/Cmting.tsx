import { IcCmtimgGray24 } from '@assets/svgs';

import * as S from './Cmtimg.styled';

export interface ImageSaveBtnProps {
  onClick?: () => void;
  isActive?: boolean;
}

const ImageSaveBtn = ({ onClick, isActive = false }: ImageSaveBtnProps) => {
  return (
    <S.CmtimgContainer onClick={onClick} isActive={isActive}>
      <S.Img as={IcCmtimgGray24} isActive={isActive} />
      이미지 첨부
    </S.CmtimgContainer>
  );
};

export default ImageSaveBtn;
