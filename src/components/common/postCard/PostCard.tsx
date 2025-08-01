import React, { forwardRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './PostCard.styled';
import { PostResponse as Post } from '@apis/board/board.model';
import { useBoardDeleteMutation, useBoardScrapMutation } from '@apis/board/board.queries';
import { IcCommentGray24, IcBookmark, IcOverflowGray44, IcWatchWhite40, ImgPopupDelete84 } from '@assets/svgs';
import SquareButton from '@components/button/squareButton/SquareButton';
import Chip from '@components/chip/Chip';
import DropDown from '@components/dropdown/DropDown';
import ImgDetail from '@components/imgDetail/ImgDetail';
import { AlterModal, ReportModal } from '@components/modal';
import Toast from '@components/toast/Toast';
import { useToastOpen } from '@hooks/index';
import usePostActions from '@hooks/usePostControl';

interface CardDataProp {
  post: Post;
  forDetail?: boolean;
  isLoading?: boolean;
  pickedtool?: number | null;
  noTopic?: boolean;
  isDropdownOpen: boolean;
  onDropdownToggle: () => void;
  onDropdownClose: () => void;
}

const Card = forwardRef<HTMLLIElement, CardDataProp>((props, ref) => {
  const navigate = useNavigate();
  // prop 으로 전달 받은 board 정보
  const { post, forDetail = false, pickedtool, noTopic, isDropdownOpen, onDropdownToggle, onDropdownClose } = props;
  const { boardId, toolName, toolLogo, title, content, images, updatedAt, author, commentCount, isScraped } = post;

  const {
    isOwnPost,
    isOpen,
    modalType,
    isWarning,
    handleModalOpen,
    handleModalClose,
    handleReport,
    preventPropogation,
    handleWarning,
  } = usePostActions(author, onDropdownClose);
  const { isToastOpen, handleModalOpen: handleToastOpen } = useToastOpen(); // 토스트 팝업 훅

  const [clickedIdx, setClickedIdx] = useState(0);
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (forDetail) {
      e.preventDefault();
    } else {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      navigate(`/community/${boardId}`);
    }
  };

  const {
    isSuccess: isBookMarkSuccess,
    mutate: srapMutate,
    isPending: isScrapPending,
  } = useBoardScrapMutation(pickedtool, noTopic, boardId); // 북마크 추가 / 삭제
  const { mutateAsync: deleteMutate } = useBoardDeleteMutation(boardId, pickedtool, noTopic); // 게시글 삭제

  const handleIdxRecord = (idx: number) => {
    setClickedIdx(idx);
  };

  const handleImgFocus = () => {
    setIsImgModalOpen(true);
  };

  const handleImgModalClose = () => {
    setIsImgModalOpen(false);
  };

  const handleToastMsg = (msg: string) => {
    setToastMessage(msg);
  };

  // 북마크 추가 / 삭제 함수
  const handleScrap = (boardId: number) => {
    if (isWarning) return;
    srapMutate(boardId);

    const postOwner = localStorage.getItem('user');
    if (postOwner == null || postOwner == undefined) {
      handleWarning();
    }

    handleToastOpen();
  };

  useEffect(() => {
    if (isBookMarkSuccess) {
      handleToastMsg(isScraped ? '북마크가 되었어요' : '북마크가 취소되었어요');
    } else {
      handleToastMsg('북마크에 실패했어요');
    }
  }, [isBookMarkSuccess, isScraped]);

  // TODO: 토스트 메세지를 컴포넌트가 아닌 최상위에서 호출하도록 리팩하기(카드 삭제 후 토스트를 호출하는 현재의 카드 컴포넌트가 언마운트되면서 토스트 메세지가 보이지 않음)
  const handleImgModalDel = async () => {
    try {
      await deleteMutate(boardId);
      handleModalClose();
      handleToastOpen();
      handleToastMsg('게시글이 삭제되었어요');
    } catch {
      handleToastMsg('게시글 삭제에 실패했어요');
    }
  };

  return (
    <S.CardWrapper $forDetail={forDetail} ref={ref}>
      <S.CardLayout onClick={handleCardClick}>
        {isImgModalOpen && (
          <ImgDetail handleModalClose={handleImgModalClose} imgList={[...images]} index={clickedIdx} />
        )}
        <S.CardTopContent>
          <header>
            <Chip size="medium" stroke>
              <Chip.RectContainer>
                <Chip.Icon src={toolLogo} alt={`icon-${toolName}`} height={2} />
                <Chip.Label>{toolName}</Chip.Label>
              </Chip.RectContainer>
            </Chip>
            <S.MetaInfo>
              <span>{author}</span>
              <span>{updatedAt}</span>
            </S.MetaInfo>
          </header>
          <S.CardTitleItem>{title}</S.CardTitleItem>
          <S.CardTextItem $isImgInclude={images?.length >= 1} $forDetail={forDetail}>
            {content}
          </S.CardTextItem>
          <S.ImageGrid $imageCount={images?.length} $forDetail={forDetail}>
            {images?.map((image, idx) => (
              <S.EachImgContainer key={idx} $imageCount={images.length} $forDetail={forDetail}>
                <img src={image} alt={`Post-card-img-${idx}`} />
                {forDetail && (
                  <IcWatchWhite40
                    className="hover-icon"
                    onClick={() => {
                      handleImgFocus();
                      handleIdxRecord(idx);
                    }}
                  />
                )}
              </S.EachImgContainer>
            ))}
          </S.ImageGrid>
        </S.CardTopContent>
        <S.CardDivider />
        <S.CardBottomBar onClick={preventPropogation}>
          <S.BottomBarLeft>
            <SquareButton
              icon={<IcCommentGray24 />}
              size="small"
              stroke={false}
              handleClick={() => {
                navigate(`/community/${boardId}`);
              }}
            >{`${commentCount}개`}</SquareButton>
            <SquareButton
              icon={<IcBookmark />}
              isBook={isWarning ? false : isScraped}
              size="small"
              stroke={false}
              forBookMark
              handleClick={() => handleScrap(boardId)}
            >
              북마크
            </SquareButton>
          </S.BottomBarLeft>
          <DropDown position="end" isDropdownOpen={isDropdownOpen} onDropdownToggle={onDropdownToggle}>
            <DropDown.Content $display="top">
              {isOwnPost ? (
                <>
                  <DropDown.Item status="danger" onClick={() => handleModalOpen('삭제')}>
                    삭제하기
                  </DropDown.Item>
                  <DropDown.Item onClick={() => navigate(`/community/modify/${boardId}`, { state: { post } })}>
                    수정하기
                  </DropDown.Item>
                </>
              ) : (
                <DropDown.Item
                  status="danger"
                  onClick={() => {
                    handleReport();
                    onDropdownClose();
                  }}
                >
                  신고하기
                </DropDown.Item>
              )}
            </DropDown.Content>
            <DropDown.ToggleBtn>
              <IcOverflowGray44 />
            </DropDown.ToggleBtn>
          </DropDown>
        </S.CardBottomBar>
      </S.CardLayout>
      {modalType === '신고' ? (
        <ReportModal
          content={title}
          isOpen={isOpen}
          handleClose={handleModalClose}
          boardId={boardId}
          handleToastOpen={handleToastOpen}
          handleToastMsg={handleToastMsg}
        />
      ) : (
        <AlterModal
          modalTitle="글을 삭제하시겠어요?"
          isOpen={isOpen}
          handleClose={handleImgModalDel}
          isSingleModal={false}
          ImgPopupModal={ImgPopupDelete84}
          modalContent="삭제된 글은 다시 볼 수 없어요"
          DoublebtnProps={{
            isPrimaryRight: false,
            primaryBtnContent: '한 번 더 생각할게요',
            secondaryBtnContent: '삭제하기',
            handleSecondClose: handleModalClose,
          }}
        />
      )}
      {!isScrapPending && isToastOpen && (
        <Toast isVisible={isToastOpen} isWarning={false}>
          {toastMessage}
        </Toast>
      )}
      {isWarning && (
        <Toast isVisible={isWarning} isWarning>
          로그인 후 가능한 서비스입니다.
        </Toast>
      )}
    </S.CardWrapper>
  );
});

// forwrad 사용으로 인한, 디버깅 목적으로 사용
Card.displayName = 'Card';

export default Card;
