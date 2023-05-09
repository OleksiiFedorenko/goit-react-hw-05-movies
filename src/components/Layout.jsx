import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import { MainMenu, MenuLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <MainMenu>
            <li>
              <MenuLink to="/">Home</MenuLink>
            </li>
            <li>
              <MenuLink to="/movies">Movies</MenuLink>
            </li>
          </MainMenu>
        </nav>
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <ToastContainer />
    </>
  );
};

export default Layout;
