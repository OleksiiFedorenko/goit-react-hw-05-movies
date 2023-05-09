import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, ItemLink } from './MovieList.styled';
import noPoster from 'images/no-poster.png';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        const posterImg = poster_path
          ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`
          : noPoster;
        const posterAlt = `Poster of ${title}`;

        return (
          <li key={id}>
            <ItemLink to={`/movies/${id}`} state={{ from: location }}>
              <img src={posterImg} alt={posterAlt} width="200" heigth="300" />
              <p>{title}</p>
            </ItemLink>
          </li>
        );
      })}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default MovieList;
