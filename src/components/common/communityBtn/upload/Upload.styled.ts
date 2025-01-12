import styled from '@emotion/styled';

interface UploadBtnProps {
  variant: 'default' | 'act';
}

export const UploadBtnContainer = styled.button<UploadBtnProps>`
  display: inline-flex;
  gap: 0.8rem;
  align-items: center;
  padding: 0.8rem 3.2rem 0.8rem 2rem;

  color: ${({ variant, theme }) => (variant === 'default' ? theme.colors.white1 : theme.colors.white1)};
  font: ${({ theme }) => theme.fonts.body_20_b};

  background-color: ${({ variant, theme }) => (variant === 'default' ? theme.colors.gray2 : theme.colors.iris1)};
  cursor: pointer;
  border: none;
  border-radius: 4.8rem;

  &:hover {
    background-color: ${({ variant, theme }) => (variant === 'act' ? theme.colors.iris_hover : undefined)};
  }
`;

export const Img = styled.img<UploadBtnProps>`
  fill: ${({ variant, theme }) => (variant === 'default' ? theme.colors.gray3 : theme.colors.white1)};
`;
