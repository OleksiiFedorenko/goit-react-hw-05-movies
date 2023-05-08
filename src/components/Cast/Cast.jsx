import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/MovieService';
import Loader from 'components/Loader/Loader';
import Warning from 'components/Warning/Warning';
import noProfile from 'images/no-profile.png';

const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getCast(id) {
      setIsLoading(true);
      try {
        const data = await fetchMovieCast(id);
        setCastData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    if (movieId) getCast(movieId);
  }, [movieId]);

  if (isLoading) return <Loader />;

  if (isError) return null;

  if (!castData.length) return <Warning message="No cast info found" />;

  return (
    <ul>
      {castData.map(({ cast_id, name, character, profile_path }) => {
        const profileImg = profile_path
          ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`
          : noProfile;

        return (
          <li key={cast_id}>
            <img src={profileImg} alt={name} width="150" />
            <div>Acthor name: {name}</div>
            <div>Character: {character}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
