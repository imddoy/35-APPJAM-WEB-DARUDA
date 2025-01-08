import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ChipRoundContainer = styled.button<{
  $stroke?: boolean;
  $size?: 'small' | 'medium' | 'large';
  $active?: boolean;
}>`
  display: grid;
  place-items: center;
  ${({ theme, $size }) => {
    switch ($size) {
      case 'large':
        return css`
          height: 2.6rem;
          padding: 0.4rem 1rem;

          border-radius: 22px;
          ${theme.fonts.caption_12_b};
        `;
      default:
        return css`
          height: 1.8rem;
          padding: 0.4rem 0.7rem;

          border-radius: 16px;
          ${theme.fonts.caption_8_b};
        `;
    }
  }}
  color: ${({ theme, $active }) => ($active ? theme.colors.iris1 : theme.colors.gray2)};

  background-color: ${({ theme, $active }) => ($active ? theme.colors.iris2 : theme.colors.white1)};
  cursor: pointer;
  border: 1px solid ${({ theme, $stroke }) => ($stroke ? theme.colors.gray3 : 'transparent')};
`;

export const ChipRectContainer = styled.button<{
  $stroke?: boolean;
  $size?: 'small' | 'medium' | 'large';
  $active?: boolean;
}>`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;

  ${({ $size }) => {
    switch ($size) {
      case 'large':
        return `
        height: 2.6rem;
        border-radius: 22px,
      `;
      default:
        return `
        height: 1.8rem;
        border-radius: 16px;
      `;
    }
  }}

  background-color: ${({ theme }) => theme.colors.white1};
  cursor: pointer;
  border: 1px solid ${({ theme, $stroke }) => ($stroke ? theme.colors.gray3 : 'transparent')};
`;

export const ChipIcon = styled.img`
  width: 2rem;
  height: 2rem;

  border-radius: 4px;
`;

export const ChipLabel = styled.p`
  color: inherit;
`;
