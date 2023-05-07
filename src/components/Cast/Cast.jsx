import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/MovieService';

const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState();
  useEffect(() => {
    fetchMovieCast(movieId).then(setCastData).catch(console.log);
  }, []);

  return (
    castData && (
      <ul>
        {castData.map(({ name, character, profile_path }) => (
          <li>
            <img
              src={`https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path}`}
              alt={name}
            />
            <div>Acthor name: {name}</div>
            <div>Character: {character}</div>
          </li>
        ))}
      </ul>
    )
  );
};

export default Cast;
