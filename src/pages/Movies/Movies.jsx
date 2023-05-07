import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/MovieService';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    fetchMoviesByQuery(query).then(setMovies).catch(console.log);
  }, []);

  const onSubmit = query => {
    if (!query) return setMovies(false);
    fetchMoviesByQuery(query).then(setMovies).catch(console.log);
  };

  return (
    <>
      <Searchbar fetchData={onSubmit} />
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
