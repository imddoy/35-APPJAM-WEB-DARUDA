import { ImgBanner } from '@assets/svgs';
import styled from '@emotion/styled';

export const BannerWrapper = styled.section`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  width: 104.6rem;
  height: 25.8rem;

  background: linear-gradient(255deg, rgb(201 201 255 / 63%) 2.79%, rgb(108 109 225 / 63%) 105.73%), #fff;
  border-radius: 1.6rem;
`;
export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
  justify-content: center;
  padding: 5.2rem 0 5.2rem 6.4rem;
`;
export const BannerTitle = styled.h1`
  ${({ theme }) => theme.fonts.head_32_b};
  color: ${({ theme }) => theme.colors.black};
`;

export const MainImgBanner = styled(ImgBanner)`
  margin: 2.6rem 3.2rem 2.6rem 10rem;
`;

export const ModalChipsContainer = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const ModalChip = styled.li`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 2rem;

  background: ${({ theme }) => theme.colors.white1};
  border-radius: 3rem;
`;

export const ModalChipText = styled.p`
  ${({ theme }) => theme.fonts.body_16_b_1};
  color: ${({ theme }) => theme.colors.gray2};
`;
