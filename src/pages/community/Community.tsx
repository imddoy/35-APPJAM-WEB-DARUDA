import * as S from './Community.style';
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
import { POST_DATA } from './mocks';

const Community = () => {
  return (
    <S.CommunityWrapper>
      <Banner />
      <S.CardList>
        {POST_DATA.map((post) => (
          <Card key={post.boardId} post={post} />
        ))}
      </S.CardList>
    </S.CommunityWrapper>
  );
};

export default Community;
