import styled from '@emotion/styled';

export const CmtimgContainer = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.8rem;

  color: ${({ theme, isActive }) => (isActive ? theme.colors.gray2 : theme.colors.gray1)};
  font: ${({ theme }) => theme.fonts.body_16_m};

  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.white1 : theme.colors.white1)};
  cursor: pointer;
  border-radius: 1.6rem;

  &:hover {
    ${({ isActive, theme }) =>
      !isActive &&
      `  
      color: ${theme.colors.white1};
      background-color: ${theme.colors.iris1};

      & > svg {
        fill: ${theme.colors.white1};
        stroke: ${theme.colors.white1};
      }
    `}
  }
`;

export const Img = styled.svg<{ isActive: boolean }>`
  width: 2.4rem;
  height: 2.4rem;

  fill: ${({ theme, isActive }) => (isActive ? theme.colors.gray2 : theme.colors.gray1)};
  stroke: ${({ theme, isActive }) => (isActive ? theme.colors.gray2 : theme.colors.gray1)};
`;
