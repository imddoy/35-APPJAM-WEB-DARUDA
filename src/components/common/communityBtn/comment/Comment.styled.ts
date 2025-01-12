import styled from '@emotion/styled';

export const CommentContainer = styled.div`
  display: inline-flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.8rem;

  color: ${({ theme }) => theme.colors.gray1};
  font: ${({ theme }) => theme.fonts.body_16_m};

  background-color: ${({ theme }) => theme.colors.white1};
  cursor: pointer;
  border-radius: 1.6rem;

  &:hover {
    color: ${({ theme }) => theme.colors.white1};

    background-color: ${({ theme }) => theme.colors.iris1};

    & > svg {
      fill: ${({ theme }) => theme.colors.white1};
    }
  }
`;

export const Img = styled.svg`
  width: 2.4rem;
  height: 2.4rem;

  fill: ${({ theme }) => theme.colors.gray1};
`;
