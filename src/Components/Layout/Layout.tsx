import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { MainNavigation } from '../MainNavigation/MainNavigation';
import { Logo } from '../Logo/Logo';
import * as SC from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <SC.Wrap className="container">
        <Logo />
        <MainNavigation />
      </SC.Wrap>
      <main className="container">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer autoClose={3000} />
    </>
  );
};
