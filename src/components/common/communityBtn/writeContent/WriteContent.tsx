import { IcPlusWhite20 } from '@assets/svgs';

import * as S from './WriteContent.styled';

interface WriteContentBtnProps {
  variant?: 'default';
  onClick?: () => void;
}

const WriteContentBtn = ({ variant = 'default', onClick }: WriteContentBtnProps) => {
  return (
    <S.WriteContentBtnContainer variant={variant} onClick={onClick}>
      <IcPlusWhite20 />
      글쓰기
    </S.WriteContentBtnContainer>
  );
};

export default WriteContentBtn;
