import { IcShareGray24 } from '@assets/svgs';

import * as S from './Share.styled';

export interface ShareBtnProps {
  onClick?: () => void;
}

const ShareBtn = ({ onClick }: ShareBtnProps) => {
  return (
    <S.ShareContainer onClick={onClick}>
      <S.Img as={IcShareGray24} />
      공유하기
    </S.ShareContainer>
  );
};

export default ShareBtn;
