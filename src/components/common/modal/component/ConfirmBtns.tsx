import styled from '@emotion/styled';

interface ConfirmBtnsProps {
  isforDelete: boolean;
  firstBtnContent: string;
  secondBtnContent: string;
  setIsOpen: (isOpen: boolean) => void;
}

const ConfirmBtns = ({ isforDelete, firstBtnContent, secondBtnContent, setIsOpen }: ConfirmBtnsProps) => {
  return (
    <S.ModalBtns>
      <S.ModalBtn $isPurple={false} order={isforDelete ? 0 : 1} onClick={() => setIsOpen(false)}>
        {firstBtnContent}
      </S.ModalBtn>
      <S.ModalBtn $isPurple={true} order={isforDelete ? 1 : 0} onClick={() => setIsOpen(false)}>
        {secondBtnContent}
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
`;

const S = {
  ModalBtns: styled.section`
    display: flex;
    align-items: center;
  `,

  ModalBtn: styled(Button)<{ $isPurple: boolean; order: number }>`
    order: ${({ order }) => order};

    color: ${({ theme, $isPurple }) => ($isPurple ? theme.colors.white1 : theme.colors.black)};
    white-space: nowrap;
    text-align: center;

    background: ${({ theme, $isPurple }) => ($isPurple ? theme.colors.iris1 : theme.colors.gray4)};
    border: 1px solid ${({ theme }) => theme.colors.gray4};
    border-bottom: none;
    border-bottom-right-radius: ${({ order }) => (order ? '2rem' : '0')};
    border-bottom-left-radius: ${({ order }) => (order ? '0' : '2rem')};
  `,
};
