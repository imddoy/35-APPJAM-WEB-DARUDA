import styled from '@emotion/styled';

interface ConfirmBtnsProps {
  isPrimaryRight: boolean;
  primaryBtnContent: string;
  secondaryBtnContent: string;
  handleClose: () => void;
}

const ConfirmBtns = ({ isPrimaryRight, primaryBtnContent, secondaryBtnContent, handleClose }: ConfirmBtnsProps) => {
  return (
    <S.ModalBtns>
      <S.ModalBtn $isPrimary={false} order={isPrimaryRight ? 0 : 1} onClick={handleClose}>
        {primaryBtnContent}
      </S.ModalBtn>
      <S.ModalBtn $isPrimary={true} order={isPrimaryRight ? 1 : 0} onClick={handleClose}>
        {secondaryBtnContent}
      </S.ModalBtn>
    </S.ModalBtns>
  );
};

export default ConfirmBtns;

const Button = styled.button`
  ${({ theme }) => theme.fonts.body_16_b};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  padding: 1.6rem 5.4rem;

  white-space: nowrap;
  text-align: center;
`;

const S = {
  ModalBtns: styled.section`
    display: flex;
    align-items: center;
  `,

  ModalBtn: styled(Button)<{ $isPrimary: boolean; order: number }>`
    order: ${({ order }) => order};

    color: ${({ theme, $isPrimary }) => ($isPrimary ? theme.colors.white1 : theme.colors.black)};

    background: ${({ theme, $isPrimary }) => ($isPrimary ? theme.colors.iris1 : theme.colors.gray4)};
    border: 1px solid ${({ theme }) => theme.colors.gray3};
    border-top: none;
    border-bottom: none;
    border-bottom-right-radius: ${({ order }) => (order ? '2rem' : '0')};
    border-bottom-left-radius: ${({ order }) => (order ? '0' : '2rem')};
  `,
};
