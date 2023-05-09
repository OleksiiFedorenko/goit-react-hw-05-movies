import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/MovieService';
import MainInfo from 'components/MainInfo/MainInfo';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Loader from 'components/Loader/Loader';
import Warning from 'components/Warning/Warning';
import { Container, BackLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMovieData(id) {
      setIsLoading(true);
      try {
        const data = await fetchMovieDetails(id);
        setMovieData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieData(movieId);
  }, [movieId]);

  if (isLoading) return <Loader />;

  if (isError)
    return (
      <Warning message="This page doesn't exist or something went wrong. Please try different page or try again later." />
    );

  return (
    <Container>
      <BackLink to={backLinkRef.current}>← Go back</BackLink>
      {movieData && <MainInfo data={movieData} />}
      {movieData && <AdditionalInfo />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
