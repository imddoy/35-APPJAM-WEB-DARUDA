import { useState, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './CommentInput.styled';
import { getPresignedUrls, putPresignedUrl } from '@apis/board';
import { useCommentPostMutation } from '@apis/comment';
import { ImgUploadWhite48, IcCmtimgGray24, IcImgdeleteGray40 } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';
import SquareButton from '@components/button/squareButton/SquareButton';
import ImgDetail from '@components/imgDetail/ImgDetail';
import Toast from '@components/toast/Toast';
import { useToastOpen } from '@hooks/index';
import { useImageUpload, useTextInput } from '@pages/communityDetail/hooks';
import { handleScrollUp } from '@utils';

import InputButton from '../inputButton/InputButton';

import { MODAL_ERR } from '../../../constants';

const CommnetInput = () => {
  const DEFAULT_MAX_CHARS = 1000;
  const { isToastOpen, handleModalOpen } = useToastOpen();

  const {
    isFocus,
    text,
    isOverflowed,
    textareaRef,
    isLogin,
    handleTextChange,
    handleInput,
    handleInputFocus,
    handleInputOutfocus,
    setText,
  } = useTextInput(DEFAULT_MAX_CHARS);

  const {
    toastType,
    imageSelected,
    imageName,
    imageFile,
    setToastType,
    handleImageChange,
    handleImgReSubmit,
    handleImageRemove,
    handleSizeError,
  } = useImageUpload(handleModalOpen);

  const { id: boardId } = useParams();
  const { mutate: postComment } = useCommentPostMutation(boardId);
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);

  const handleCommentPost = async (e: FormEvent) => {
    e.preventDefault();

    let imageUrl = null;
    if (imageFile) {
      const signedUrl = await getPresignedUrls(imageFile.name);

      await putPresignedUrl({
        file: imageFile,
        signedUrl: signedUrl,
      });

      imageUrl = signedUrl.split('?')[0];
    }

    const form = {
      content: text,
      photoUrl: imageUrl as string,
    };

    postComment(form, {
      onSuccess: () => {
        setToastType('postComment');
        handleModalOpen();
        handleScrollUp();
      },
      onError: () => {
        setToastType('postErr');
        handleModalOpen();
      },
    });

    setText('');
    handleImageRemove();
  };

  const handleImgFocus = () => {
    if (!imageSelected) return;
    setIsImgModalOpen(true);
  };

  const handleImgModalClose = () => {
    setIsImgModalOpen(false);
  };

  const handleAuthError = () => {
    setToastType('postErr');
    handleModalOpen();
  };

  const imageButton = !imageSelected ? (
    <InputButton
      icon={<IcCmtimgGray24 />}
      stroke={true}
      type="file"
      accept=".png, .jpeg, .jpg, .webp, .heic, .heif"
      onImageSelect={handleImageChange}
      handleAuthError={handleAuthError}
      handleSizeError={handleSizeError}
      handleModalOpen={handleModalOpen}
      status={imageSelected}
      disabled={!localStorage.getItem('user')}
    >
      이미지 첨부
    </InputButton>
  ) : (
    <SquareButton
      type="button"
      status={imageSelected}
      icon={<IcCmtimgGray24 />}
      size="large"
      stroke={true}
      handleClick={handleImgReSubmit}
    >
      이미지 첨부
    </SquareButton>
  );

  return (
    <S.CardWrapper>
      <S.CardSendContainer>
        <S.CardInputWrapper $isOverflowed={isOverflowed} $isFocus={isFocus} $isDisabled={!isLogin}>
          <S.CardInput
            value={text}
            onChange={handleTextChange}
            ref={textareaRef}
            onInput={handleInput}
            onFocus={handleInputFocus}
            onBlur={handleInputOutfocus}
            placeholder={isLogin ? '글을 작성해주세요.' : '로그인 후 작성 가능합니다'}
            maxLength={1001}
            disabled={!isLogin}
          />
          <S.CountingWords $isOverflowed={isOverflowed}>
            <span>{text.length}</span>/<span>1,000자</span>
          </S.CountingWords>
        </S.CardInputWrapper>
      </S.CardSendContainer>
      <S.CardBottom>
        <div>
          {imageButton}
          <S.ImgNameItem $imageSelected={imageSelected}>
            <button type="button" onClick={handleImgFocus}>
              <p>{imageSelected ? imageName : '첨부된 이미지가 없어요'}</p>
            </button>
            {imageSelected && (
              <button onClick={handleImageRemove}>
                <IcImgdeleteGray40 />
              </button>
            )}
          </S.ImgNameItem>
        </div>
        <CircleButton
          icon={<ImgUploadWhite48 />}
          size="medium"
          onClick={handleCommentPost}
          disabled={isOverflowed || text.length === 0}
        >
          완료
        </CircleButton>
      </S.CardBottom>
      <S.CautionWrpper>
        <p>* 이미지는 1장씩 첨부 가능하며, 최대 7MB를 초과할 수 없습니다.</p>
      </S.CautionWrpper>
      {isToastOpen && toastType !== null && (
        <Toast isVisible={isToastOpen} isWarning={toastType === 'postComment' ? false : true}>
          {toastType && MODAL_ERR[toastType]}
        </Toast>
      )}
      {isImgModalOpen && (
        <ImgDetail
          handleModalClose={handleImgModalClose}
          imgList={imageFile ? [URL.createObjectURL(imageFile)] : []}
          index={0}
        />
      )}
    </S.CardWrapper>
  );
};

export default CommnetInput;
