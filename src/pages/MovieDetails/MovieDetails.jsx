import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/MovieService';
import MainInfo from 'components/MainInfo/MainInfo';
import Warning from 'components/Warning/Warning';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovieData).catch(setError);
  }, [movieId]);

  return (
    <>
      <Link to={backLinkRef.current}>Go back</Link>
      {movieData && <MainInfo data={movieData} />}
      {movieData && (
        <div>
          <h4>Additional info</h4>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      )}
      {error && (
        <Warning message="This page doesn't exist or something went wrong. Please try different page or try again later." />
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
