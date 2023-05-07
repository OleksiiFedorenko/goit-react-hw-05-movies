import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/MovieService';
import MainInfo from 'components/MainInfo/MainInfo';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovieData).catch(console.log);
  }, []);

  return (
    <>
      <Link to={backLinkRef.current}>Go back</Link>
      {movieData && <MainInfo data={movieData} />}
      <h4>Additional info</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
