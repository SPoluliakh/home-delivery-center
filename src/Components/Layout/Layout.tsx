import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { MainNavigation } from '../MainNavigation/MainNavigation';
import { Logo } from '../Logo/Logo';

export const Layout = () => {
  return (
    <>
      <div className="container">
        <Logo />
        <MainNavigation />
      </div>
      <main className="container">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer autoClose={3000} />
    </>
  );
};
