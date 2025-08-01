import { useState } from 'react';

import PostCard from './components/postCard/PostCard.tsx';
import * as S from './Post.styled.ts';
import { useBoardScrapMutation } from '@apis/board/board.queries.ts';
import { useFavoritePostQuery } from '@apis/user/user.queries.ts';
import { ImgPopupNonebookmarkScrappost } from '@assets/svgs/index.ts';
import Spacing from '@components/spacing/Spacing.tsx';
import Toast from '@components/toast/Toast.tsx';
import { useToastOpen } from '@hooks/index';

const MyFavoritePostPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: favoritePostData } = useFavoritePostQuery(currentPage);
  const { mutateAsync: scrapMutate } = useBoardScrapMutation(undefined, undefined, undefined, true);
  const { isToastOpen, handleModalOpen: handleToastOpen, toastMessage, handleMessageChange } = useToastOpen();

  if (favoritePostData) {
    return (
      <>
        <S.PostWrapper>
          {favoritePostData.boardList?.length > 0 ? (
            <>
              <S.PostContainer>
                {favoritePostData.boardList.map((post, index) => (
                  <>
                    {index !== 0 && <S.Divider />}
                    <PostCard
                      key={post.boardId}
                      boardId={post.boardId}
                      isMine={false}
                      title={post.title}
                      updatedAt={post.updatedAt}
                      toolLogo={post.toolLogo}
                      toolName={post.toolName}
                      isScraped={post.isScrapped}
                      onClick={() => {
                        scrapMutate(post.boardId);
                        handleMessageChange(post.isScrapped ? '북마크가 취소되었어요' : '북마크가 추가되었어요');
                        handleToastOpen();
                      }}
                    />
                  </>
                ))}
              </S.PostContainer>
              <S.Pagination>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
                  &lt;
                </button>
                {Array.from(Array(favoritePostData.pageInfo.totalPages), (_, index) => (
                  <S.PageNum
                    key={index}
                    $isCurrent={currentPage === index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </S.PageNum>
                ))}
                <button
                  disabled={currentPage === favoritePostData.pageInfo.totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  &gt;
                </button>
              </S.Pagination>
            </>
          ) : (
            <S.NonTool>
              <ImgPopupNonebookmarkScrappost />
              <Spacing size="4.2" />
              <p>관심있는 글이 없어요</p>
              <Spacing size="1" />
              <p>커뮤니티에서 관심있는 글을 찾아보세요</p>
            </S.NonTool>
          )}
        </S.PostWrapper>
        {isToastOpen && (
          <Toast isVisible={isToastOpen} isWarning={false}>
            {toastMessage ?? '북마크가 취소되었어요'}
          </Toast>
        )}
      </>
    );
  }
};

export default MyFavoritePostPage;
