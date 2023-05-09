import PropTypes from 'prop-types';
import { Container } from './MainInfo.styled';
import noPoster from 'images/no-poster.png';

const MainInfo = ({ data }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = data;

  const posterImg = poster_path
    ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`
    : noPoster;
  const posterAlt = `Poster of ${original_title}`;
  const title = `${original_title} (${release_date.slice(0, 4)})`;
  const genresString = genres.map(({ name }) => name).join(', ');

  return (
    <Container>
      <img src={posterImg} alt={posterAlt} width="200" height="300" />
      <div>
        <h1>{title}</h1>
        <p>
          User Score: <b>{vote_average}</b>
        </p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresString}</p>
      </div>
    </Container>
  );
};

MainInfo.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};

export default MainInfo;
