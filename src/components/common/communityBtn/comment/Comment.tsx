import { IcCommentGray24 } from '@assets/svgs';

import * as S from './Comment.styled';

export interface CommentBtnProps {
  onClick?: () => void;
  count?: number;
}

const CommentBtn = ({ onClick, count = 0 }: CommentBtnProps) => {
  return (
    <S.CommentContainer onClick={onClick}>
      <S.Img as={IcCommentGray24} />
      {count}개
    </S.CommentContainer>
  );
};

export default CommentBtn;
