import { IcBookmarkGray24Dact } from '@assets/svgs';

import * as S from './BookMark.styled';

export interface BookmarkBtnProps {
  onClick?: () => void;
  isActive?: boolean;
}

const BookmarkBtn = ({ onClick, isActive = false }: BookmarkBtnProps) => {
  return (
    <S.BookmarkContainer onClick={onClick} isActive={isActive}>
      <S.Img as={IcBookmarkGray24Dact} isActive={isActive} />
      북마크
    </S.BookmarkContainer>
  );
};

export default BookmarkBtn;
