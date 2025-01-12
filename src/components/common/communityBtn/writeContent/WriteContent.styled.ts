import styled from '@emotion/styled';

interface WriteContentBtnProps {
  variant?: 'default';
}

export const WriteContentBtnContainer = styled.button<WriteContentBtnProps>`
  display: inline-flex;
  gap: 1.2rem;
  align-items: center;
  padding: 1.6rem 3rem;

  color: ${({ theme }) => theme.colors.white1};
  font: ${({ theme }) => theme.fonts.body_20_b};

  background-color: ${({ theme }) => theme.colors.iris1};
  box-shadow: 0 0 12px 0 ${({ theme }) => theme.colors.shadow1};
  cursor: pointer;
  border: none;
  border-radius: 3.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.iris_hover};
  }
`;
