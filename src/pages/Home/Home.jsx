import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/MovieService';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetchTrendingMovies().then(setMovies).catch(console.log);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
