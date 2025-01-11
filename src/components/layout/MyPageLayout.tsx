import Header from '@components/header/Header';
import { Outlet } from 'react-router';

const MyPageLayout = () => {
  return (
    <>
      <Header isLoggedIn={true} />
      <Outlet />
    </>
  );
};
export default MyPageLayout;
