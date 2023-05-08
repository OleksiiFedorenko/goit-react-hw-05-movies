import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/MovieService';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';
import Warning from 'components/Warning/Warning';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    fetchMoviesByQuery(query).then(setMovies).catch(console.log);
  }, [searchParams]);

  const onSubmit = query => {
    if (!query) return setMovies(false);
    fetchMoviesByQuery(query).then(setMovies).catch(console.log);
  };

  return (
    <>
      <Searchbar fetchData={onSubmit} />
      {movies ? (
        <MovieList movies={movies} />
      ) : (
        <Warning message="Please let us know what are you looking for." />
      )}
      {!movies.length && (
        <Warning message="No movies found, please try different query." />
      )}
    </>
  );
};

export default Movies;
