import styled from '@emotion/styled';

export const ChipContainer = styled.button<{ $rounded: 'round' | 'rect'; $stroke?: boolean }>`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.2rem;

  background-color: ${({ theme }) => theme.colors.white1};
  cursor: pointer;
  border: 1px solid ${({ theme, $stroke }) => ($stroke ? theme.colors.gray3 : 'transparent')};
  border-radius: ${({ $rounded }) => ($rounded === 'round' ? '22px' : '8px')};
`;

export const ChipIcon = styled.img`
  width: 2rem;
  height: 2rem;

  border-radius: 4px;
`;

export const ChipLabel = styled.p`
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.fonts.caption_14_m}
`;
