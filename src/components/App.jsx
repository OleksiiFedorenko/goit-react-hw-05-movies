import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Warning from 'components/Warning/Warning';
import { Contaner } from './App.styled';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Contaner>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route
            path="*"
            element={
              <Warning message="This page desn't exist, please try another one." />
            }
          />
        </Route>
      </Routes>
    </Contaner>
  );
};

export default App;
