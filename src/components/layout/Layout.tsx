import Header from '@components/header/Header';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Header isLoggedIn={false} />
      <Outlet />
    </>
  );
};

export default Layout;
