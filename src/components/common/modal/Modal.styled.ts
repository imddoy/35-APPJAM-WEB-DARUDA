import styled from '@emotion/styled';

const S = {
  ModalContainer: styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    align-items: center;
    width: 30.2rem;
  `,

  ModalTitle: styled.h1`
    ${({ theme }) => theme.fonts.body_20_b};
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
  `,

  ModalContent: styled.p`
    ${({ theme }) => theme.fonts.caption_12_r};
    padding-bottom: 2.5rem;

    color: ${({ theme }) => theme.colors.gray2};
    text-align: center;
  `,

  SingleBtn: styled.button`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 1.6rem 5.4rem;

    ${({ theme }) => theme.fonts.body_20_b};
    color: ${({ theme }) => theme.colors.white1};

    background: ${({ theme }) => theme.colors.iris1};
    border-radius: 3.2rem;
  `,
};

export default S;
