import { ImgUploadWhite48 } from '@assets/svgs';

import * as S from './Upload.styled';

interface UploadBtnProps {
  variant?: 'default' | 'act';
  onClick?: () => void;
}

const UploadBtn = ({ variant = 'default', onClick }: UploadBtnProps) => {
  return (
    <S.UploadBtnContainer variant={variant} onClick={onClick}>
      <S.Img as={ImgUploadWhite48} variant={variant} />
      완료
    </S.UploadBtnContainer>
  );
};

export default UploadBtn;
