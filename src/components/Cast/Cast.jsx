import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/MovieService';
import Warning from 'components/Warning/Warning';
import noProfile from 'images/no-profile.png';

const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);
  useEffect(() => {
    fetchMovieCast(movieId).then(setCastData).catch(console.log);
  }, [movieId]);

  if (!castData.length) return <Warning message="No cast info found" />;

  return (
    <ul>
      {castData.map(({ name, character, profile_path }) => {
        const profileImg = profile_path
          ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`
          : noProfile;

        return (
          <li key={name}>
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
