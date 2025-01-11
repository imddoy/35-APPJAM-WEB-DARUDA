import { IcInstaGray20 } from '@assets/svgs';

import * as S from './Footer.styled';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContents>
        <S.FooterLinkItem>이용약관</S.FooterLinkItem>
        <S.FooterLinkItem>개인정보처리방침</S.FooterLinkItem>
        <S.FooterLinkItem>청소년보호정책</S.FooterLinkItem>
        <S.FooterLinkItem>커뮤니티이용규칙</S.FooterLinkItem>
      </S.FooterContents>
      <S.FooterDivider />
      <S.FooterDetail>
        <S.FooterContact>
          <span>
            고객센터 : <a href="mailto:daruda241221@gmail.com">daruda241221@gmail.com</a>
          </span>
          <S.InstagramLink href="https://www.instagram.com/daruda.official/" target="_blank" rel="noopener noreferrer">
            <IcInstaGray20 />
            <span>https://www.instagram.com/daruda.official/</span>
          </S.InstagramLink>
        </S.FooterContact>
        <S.FooterTeam>
          <S.TeamWrapper>
            <S.TeamTitle>Team</S.TeamTitle>
            <S.TeamContent>파베르(faber)</S.TeamContent>
          </S.TeamWrapper>
          <S.TeamWrapper>
            <S.TeamTitle>Plan</S.TeamTitle>
            <S.TeamContent>| 김용기 김소영</S.TeamContent>
          </S.TeamWrapper>
          <S.TeamWrapper>
            <S.TeamTitle>Client</S.TeamTitle>
            <S.TeamContent>| 노찬영 김고은 김채현 최 민</S.TeamContent>
          </S.TeamWrapper>
          <div />
          <S.TeamWrapper>
            <S.TeamTitle>Design</S.TeamTitle>
            <S.TeamContent>| 이은제 이재영</S.TeamContent>
          </S.TeamWrapper>
          <S.TeamWrapper>
            <S.TeamTitle>Server</S.TeamTitle>
            <S.TeamContent>| 박지원 곽재민</S.TeamContent>
          </S.TeamWrapper>
        </S.FooterTeam>
      </S.FooterDetail>
    </S.FooterWrapper>
  );
};

export default Footer;
