import { useNavigate } from 'react-router-dom';

import * as S from './MyToolCard.styled';
import { IcBookmark32 } from '@assets/svgs';
import Chip from '@components/chip/Chip';
import { splitAndCountLines } from '@pages/myPage/utils/splitAndCountLines';

interface MyToolCardPropType {
  toolId: number;
  toolLogo: string;
  toolNameMain: string;
  keyWordList: string[];
  onClick?: () => void;
  isScrapped: boolean;
}

const MyToolCard = ({ toolId, toolLogo, toolNameMain, keyWordList, onClick, isScrapped }: MyToolCardPropType) => {
  const navigate = useNavigate();
  return (
    <S.CardWrapper onClick={() => navigate(`/toollist/${toolId}`)}>
      <S.CardLogo src={toolLogo} />
      <S.CardTitle $lineCount={splitAndCountLines(toolNameMain).lineCount}>
        {splitAndCountLines(toolNameMain).formattedToolName}
      </S.CardTitle>
      <S.CardKeyword>
        {keyWordList.map((keyword, index) => (
          <Chip key={index} size="xsmall" active={true}>
            <Chip.RectContainer>
              <Chip.Label>{keyword}</Chip.Label>
            </Chip.RectContainer>
          </Chip>
        ))}
      </S.CardKeyword>
      <S.BookmarkBtn
        onClick={(event) => {
          event.stopPropagation();
          onClick?.();
        }}
        $isBookmark={isScrapped}
      >
        <IcBookmark32 />
      </S.BookmarkBtn>
    </S.CardWrapper>
  );
};

export default MyToolCard;
