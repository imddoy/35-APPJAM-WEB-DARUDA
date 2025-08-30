import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import MYPAGE_ROUTES from './MyPageRoutes';
import Layout from 'src/components/layout/Layout';
import MyPageLayout from 'src/components/layout/MyPageLayout';

const Community = lazy(() => import('@pages/community/Community'));
const CommunityDetail = lazy(() => import('@pages/communityDetail/CommunityDetail'));
const CommunityModify = lazy(() => import('@pages/communityModify/CommunityModify'));
const CommunityWrite = lazy(() => import('@pages/communityWrite/CommunityWrite'));
const NotFound = lazy(() => import('@pages/error/NotFound'));
const Intro = lazy(() => import('@pages/intro/Intro'));
const KakaoAuth = lazy(() => import('@pages/login/KakaoAuth'));
const KakaoRedirectHandler = lazy(() => import('@pages/login/KakaoRedirectHandler'));
const Notification = lazy(() => import('@pages/notification/Notification'));
const Search = lazy(() => import('@pages/search/Search'));
const SignUp = lazy(() => import('@pages/signUp/SignUp'));
const ToolDetail = lazy(() => import('@pages/toolDetail/ToolDetail'));
const ToolList = lazy(() => import('@pages/toolList/ToolList'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <ToolList /> }, // 툴 리스트 (홈화면)
      { path: 'toollist', element: <ToolList /> }, // 툴 리스트
      { path: 'toollist/:toolParam', element: <ToolDetail /> }, // 툴 상세
      { path: 'community', element: <Community /> }, // 커뮤니티
      { path: 'notification', element: <Notification /> }, // 커뮤니티
      { path: 'community/write', element: <CommunityWrite /> }, // 글 작성
      { path: 'community/:id', element: <CommunityDetail /> }, // 글 상세
      { path: 'community/modify/:id', element: <CommunityModify /> }, // 글 수정
      { path: 'login', element: <KakaoAuth /> }, // 로그인
      { path: 'signUp', element: <SignUp /> }, // 회원가입
      { path: 'api/v1/users/kakao/login-url', element: <KakaoRedirectHandler /> }, // 카카오 리다이렉트 경로
      { path: 'search', element: <Search /> }, // 검색
      { path: '*', element: <NotFound /> }, // 404 페이지
    ],
  },
  {
    path: '/onboarding',
    element: <Intro />,
  }, // 온보딩 페이지

  {
    path: '/mypage',
    element: <MyPageLayout />,
    children: [...MYPAGE_ROUTES],
  },
]);

export default router;
