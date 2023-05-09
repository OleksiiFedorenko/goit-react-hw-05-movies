import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/MovieService';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import Warning from 'components/Warning/Warning';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    async function getMovies(searchQuery) {
      setIsLoading(true);
      setMovies(null);
      try {
        const data = await fetchMoviesByQuery(searchQuery);
        setMovies(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    if (query) getMovies(query);
  }, [query]);

  const onSubmit = query => {
    if (!query) return setMovies(null);
    setSearchParams({ query });
  };

  return (
    <>
      <Searchbar fetchData={onSubmit} />
      {isLoading && <Loader />}
      {isError && (
        <Warning message="Something went wrong. Please try again later." />
      )}
      {!movies && !isLoading && (
        <Warning message="Please let us know what are you looking for." />
      )}
      {movies &&
        (movies?.length ? (
          <MovieList movies={movies} />
        ) : (
          <Warning message="Your request turned no results. Please try another query." />
        ))}
    </>
  );
};

export default Movies;
