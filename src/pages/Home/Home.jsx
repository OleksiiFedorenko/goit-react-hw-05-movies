import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/MovieService';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import Warning from 'components/Warning/Warning';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  if (isLoading) return <Loader />;

  if (isError)
    return <Warning message="Something went wrong. Please try again later." />;

  return (
    <>
      <h1>Trending today</h1>
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
